<template>
    <div id="car">        
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            
            <mu-list textline="three-line">
                <Carousel/>
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
    import Carousel from '../../components/index/carousel'
    export default {
        name:"Index",
        created(){
            this.$store.commit('playOff');
        },
        data(){
            return {
                list:this.$store.state.indexData.list
            }
        },
        mounted() {
            this.$store.dispatch('addJson')
        },
        components:{
            Carousel
        }
    }
</script>

<style>
#car{
    width:100%;
}
#car .mu-carousel{
    height: 8.5714rem;
}
#car .mu-carousel img{
    height:100%;
}
#car .demo-loadmore-wrap {
  width: 100%;
  max-width: 100%;
  height: 84vh;
  display: flex;
  flex-direction: column;
}
#car .demo-loadmore-wrap .mu-appbar {
    width: 100%;
  }
#car .mu-list{
    padding:0;
}
#car .mu-list>li{
    padding:0;
    margin:0 8px;
    height: 4.0714rem;
    line-height:4.0714rem;
    border-bottom:1px solid #ccc;
}
#car .mu-list-three-line .mu-item{
    height: 4.0714rem;
}
</style>