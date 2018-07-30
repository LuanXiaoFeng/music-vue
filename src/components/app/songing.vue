<template>
    <div class="songing">
        <mu-appbar style="width: 100%;" color="primary" class="back">
            <mu-button icon slot="left" @click="$router.go(-1)">
                <mu-icon value="keyboard_arrow_left" size="45" color="#fff"></mu-icon>
            </mu-button>
            {{hashData.songName}}
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div class="img">
            <img :src="hashData.imgUrl" />
        </div>
        <div class="slider">
            <span class="l">{{currentT}}</span>
            <div class="c" @touchend="end">
                <mu-slider class="demo-slider" v-model="value1" @change="move"></mu-slider>
            </div>
            <span class="r">{{listenTimeL}}</span>
        </div>
        <div class="onoff">
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
        </div>
        <div class="bg" :style="{'background-image':'url('+hashData.imgUrl+')'}"></div>
        <div class="mask"></div>
    </div>
</template>

<script>
    export default {
        name:"Songing",
        data(){
            return {
                value1:0,
                timeL:0,
                ismove:false,
                num:!this.$store.state.playsetOff,
            }
        },
        created(){
            this.$store.commit('playOff',true);
            this.timeL=this.$store.state.pbhash.timeLength;
        },
        methods:{
            fn(){
                this.num=!this.num;
                if(this.num){
                    this.$store.state.el.play(); 
                }else{
                    this.$store.state.el.pause(); 
                }
            },
            end(){
                let {value1,timeL}=this;
                this.$store.state.el.currentTime=value1/100*timeL;
                this.ismove=false
            },
            move(){
                this.ismove=true
            },
            toD(n){
                return n<10?'0'+n:''+n
            },
            //换算总时长
            huansuan(timeL){
                let {toD}=this;
                let s=Math.floor(timeL/60);
                let m=Math.floor(timeL%60);
                return toD(s)+':'+toD(m)
            }
        },
        computed:{
            //换算总时长
            currentT(){
                return this.huansuan(this.$store.state.currentTime)
            },
            listenTimeL(){
                let {timeL,huansuan}=this;
                return huansuan(timeL)
            },
            hashData(){
                let hash=this.$store.state.pbhash;
                return {
                    songName:hash.songName,
                    imgUrl:hash.imgUrl?hash.imgUrl.replace(/{size}/,'200'):''
                }
            }
        }
    }
</script>

<style>
.songing{
    height:100vh;
    position:relative;
}
.songing .bg{
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center top;
    filter:blur(10px);
    height:100vh;
    width:100vw;
    position: absolute;
    top:0.4rem;
}
.songing .back{
    position: relative;
    background: none;
    box-shadow: none;
    z-index:999;
    color:#fff;
}
.songing .mask{
    position: absolute;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    background:rgba(0,0,0,.6)
}
.songing .img{
    width: 10.7143rem;
    height: 10.7143rem;
    margin: 1.4286rem auto 0;
    position: relative;
    z-index:9;
    border-radius:50%;
    overflow:hidden;
}
.songing .img img{
    width:100%;
}
.songing .mu-primary-color{
    background:none;
}
.songing .mu-appbar-title{
    text-align:center;
}
.songing .slider{
    width:90%;
    margin: 2rem auto 0;
    position: relative;
    z-index:88;
    color: #fff;
}
.songing .slider .l{
    float:left;
}
.songing .slider .r{
    float:right;
}
.songing .slider .c{
    width:70%;
    float: left;
    height: 1.4rem;
    margin-left:.7rem;
}
.songing .onoff .material-icons{
    position:relative;
    z-index:99;
    right: 7rem;
    top: 2rem;
}
</style>