<template>
  <div id="app">
    <Nav></Nav>
    <Tab v-show="toggleTab"></Tab>
    <Play></Play>
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/app/nav'
import Tab from './components/app/tab'
import Play from './components/app/playboy'
  export default {
        name:'App',
        components:{
          Nav,
          Tab,
          Play
        },
        computed:{
          toggleTab(){
            let arr=['/rank/info/','/plist/list/','/search','/songing','/singer/singerlist/'];
            let path=this.$route.path;
            let re=new RegExp(arr.join('|'));
            return !re.test(path);
          }
        }
    }
</script>
<style>
html{
   font-family:"微软雅黑" !important;
   overflow:hidden;
}
body{
  overflow:hidden;
  font-family:"微软雅黑" !important;
}
</style>
