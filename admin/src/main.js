import Vue from 'vue'
import App from './App.vue'


import Header from "@/components/header/header.vue"
import Message from "@/components/message/message.vue"
Vue.component("Message",Message)
Vue.component('Header',Header)

Vue.config.productionTip = false
import router from "@/router/router.js"
import store from "@/vuex/store.js"

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


import element from "element-ui"
// import 'element-ui/lib/theme-chalk/index.css'; 
import "@/assets/theme/index.css"
Vue.use(element)