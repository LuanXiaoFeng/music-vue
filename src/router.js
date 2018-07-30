import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index/index'
import Rank from './components/rank/index'
import Plist from "./components/plist/index";
import Singer from "./components/singer/index";
import Info from "./components/rank/info";
import Pl from "./components/plist/list";
import Search from "./components/search/index";
import Slist from "./components/search/list";
import Songing from './components/app/songing';
import Singerlist from './components/singer/list';
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/rank",
      name: "rank",
      component: Rank
    },
    {
      path: "/rank/info/:id",
      name: "Info",
      component: Info
    },
    {
      path: "/plist",
      name: "Plist",
      component: Plist
    },
    {
      path: "/plist/list/:id",
      name: "Pl",
      component: Pl
    },
    {
      path: "/singer",
      name: "Singer",
      component: Singer
    },
    {
      path: "/singer/singerlist/:id",
      name: "Singerlist",
      component: Singerlist
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      path: "/search/list/:name",
      name: "Slist",
      component: Slist
    },
    {
      path: "/songing",
      name: "Songing",
      component: Songing
    }
  ]
});
