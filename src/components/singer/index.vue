<template>
    <div class="singer">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            
            <ul class="mu-list" textline="three-line" v-for="val in filterData">
                <router-link v-for="key in val" :to="{'path':'/singer/singerlist/'+key.classid}">
                    <li 
                    button
                    >
                        <div class="text_box">
                            <mu-list-item-title>{{key.classname}}</mu-list-item-title>
                        </div>
                        <mu-icon 
                        value="keyboard_arrow_right"
                        color="#444"
                        right
                        class="ico_box"
                        ></mu-icon>
                    </li>  
                </router-link>
            </ul>
        </mu-paper>
    </div>
</template>

<script>
import axios from 'axios'
// import {songe as data} from '../../json.js'
    export default {
        name:"Singer",
        created(){
            this.$store.commit('playOff');
        },
        data(){
            return {
                list:[]
            }
        },
        async mounted() {
            // /singer/class&json=true
            let d=await axios.get('/api/singer/class&json=true')
            // console.log(d)
            this.list.push(...d.data.list);
        },
        computed:{
            filterData(){
                let obj={};
                this.list.forEach(e=>{
                    let name=e.classname.substr(0,2);
                    if(!obj[name]){
                        obj[name]=[]
                    }
                    obj[name].push(e)
                })
                return obj;
            }
        }
    }
</script>

<style>
.singer{
    height: 84vh;
    overflow:hidden; 
}
.singer .demo-loadmore-wrap {
  width: 100%;
  max-width: 100%;
  height: 84vh;
  overflow-y:auto;
}
.singer .mu-list{
    border:1px solid #ccc;
    border-radius:10px;
    width:95%;
    margin: .7rem auto;
    padding:0;
}
.singer .mu-list li{
    border-bottom:1px solid #ccc;
    overflow:hidden;
    list-style:none;
    color:#333;
    padding:0 0.5rem;
    height:3rem;  
}
.singer .mu-list li .text_box{
    float:left; 
    margin-top:1rem;
}
.singer .mu-list li .ico_box{
    float:right;
    margin-top:1rem;
}
.singer .mu-list li:nth-last-child(1){
    border-bottom:none;
}
.singer .mu-list-three-line .mu-item{
    height:3rem;
    overflow:hidden;
}
</style>