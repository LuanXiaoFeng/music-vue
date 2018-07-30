import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Museui from 'muse-ui'
import Icon from 'material-icons'
import 'muse-ui/dist/muse-ui.css'

Vue.use(Museui)
Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
