<template>
    <div id="play" :style="{bottom:onOff,display:onOffn}">
        <a href="javascript:;" class="ft-go-info" id="goPlay">
            <router-link to="/songing">
            <div class="ft-left">
                <img 
                :src="pbhash.imgUrl?pbhash.imgUrl.replace(/{size}/,''):''" 
                onerror="this.onerror=null;this.src='http://m.kugou.com/v3/static/images/index/logo_kugou.png';" 
                data-default-src="http://m.kugou.com/v3/static/images/index/logo_kugou.png" 
                alt="" 
                class="js-ftImg" 
                id="ftImg"
                >
            </div>
            </router-link>
            <div class="ft-center">
                <p class="ft-desc js-ftSongName" id="ftSongName">{{pbhash.songName}}</p>
                <p class="ft-sub-desc js-ftUserName" id="ftUserName">{{pbhash.singerName}}</p>
            </div>
            <div class="au">
                <mu-icon 
                    v-if="num==false"
                    value="play_arrow"
                    size="45"
                    color="#fff"
                    @click="fn"
                ></mu-icon>
                <mu-icon 
                    v-else
                    value="pause"
                    size="45"
                    color="#fff"
                    @click="fn"
                ></mu-icon>
                {{listOff}}
                <audio 
                ref="au" 
                autoplay 
                :src="pbhash.url"
                @timeupdate="tup"
                />
            </div>
        </a>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:"Play",
        data(){
            return {
                num:true
            }
        },
        mounted() {
            this.$store.commit('createEl',this.$refs.au)
        },
        computed:{
            ...mapState(['pbhash']),
            onOff(){
                let {playonOff,playsetOff}=this.$store.state;
                if(!playonOff&&!playsetOff){
                    setTimeout(()=>{
                        this.$refs.au.pause(); 
                    })
                }
                return playonOff?0:'-5.2143rem'
            },
            onOffn(){
                let {playonOff,playsetOff}=this.$store.state;
                if(!playonOff&&!playsetOff){
                    setTimeout(()=>{
                        this.$refs.au.pause(); 
                    })
                }
                return playonOff?'block':'none'
            },
            listOff(){
                this.num=this.$store.getters.changeoff;
            }
        },
        methods:{
            tup(ev){
                this.$store.commit('addCurrentT',ev.target.currentTime)
            },
            fn(){
                if(!this.num){
                   this.$refs.au.play(); 
                }else{
                    this.$refs.au.pause(); 
                }
                this.$store.commit('cgPbsetoff',this.num)
                this.num=!this.num
            }
        }
    }
</script>

<style>
p{
    margin:0;
}
#play{
    width: 100%;
    height: 4.2143rem;
    position: fixed;
    left: 0;
    bottom: -5.2143rem;
    background: rgba(0,0,0,.9);
    color: #fff;
    font-size: 0;
    z-index:999;
    transition:1s;
    display:none;
}
.ft-go-info {
    width: 100%;
    display: block;
}
.ft-left {
    width: 3.75rem;
    height: 3.75rem;
    margin: .2143rem .535rem .2143rem .2143rem;
}
.ft-left img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
.ft-center {
    width: 40%;
}
.ft-center, .ft-left {
    display: inline-block;
    vertical-align: middle;
}
.ft-desc {
    width: 100%;
    line-height: 1.7;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .8571rem;
    color: #fff;
}
.ft-sub-desc {
    line-height: 1.3;
    font-size: .7143rem;
    color: #888;
}
.ft-right {
    position: absolute;
    top: 1.0714rem;
    right:1.7143rem;
}
.au{
    float: right;
    width: 34%;
    height: 4.2143rem;
}
.au .material-icons{
    margin-top:1rem;
    margin-left:2rem;
}
/*
pause
*/ 
</style>