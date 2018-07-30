import Vue from 'vue'
import Vuex from 'vuex'
import {json, list ,songpage,songe ,info} from './json'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexData: {
      banner: [],
      list: []
    },
    playonOff: false, //控制播放的显示和隐藏
    pbhash: {},
    playsetOff: false, //是否播放
    val: 0,
    currentTime: 0,
    el:null
  },
  mutations: {
    createEl(state,el){
      state.el=el;
    },
    addListData(state, data) {
      state.indexData.list.push(...data);
    },
    addBanner(state, data) {
      state.indexData.banner.push(...data);
    },
    playOn(state, data) {
      state.playonOff = true;
      state.pbhash = data;
    },
    cgPbsetoff(state,b){
      state.playsetOff=b;
    },
    playOff(state, of) {
      state.playonOff = false;
      state.playsetOff = !!of;
    },
    //获取拖拽的value值
    addVal(state, val) {
      state.val = val;
    },
    addCurrentT(state,num){
      state.currentTime=num
    }
  },
  getters: {
    changeoff: state => {
      return !!state.pbhash;
    }
  },
  actions: {
    addJson({ commit }) {
      //m.kugou.com/plist/index&json=true
      if (this.state.indexData.banner.length) return;
      axios.get("/api?json=true")
      .then(data => {
        // console.log(data);
        commit("addListData", data.data.data);
        commit("addBanner", data.data.banner);
      });
      
    },
    play({ commit }, hash) {
      axios.get("/api/app/i/getSongInfo.php?cmd=playInfo&hash=" + hash)
        .then(data => {
          console.log(data.data);
          commit("playOn", data.data);
        });
    }
  }
});
