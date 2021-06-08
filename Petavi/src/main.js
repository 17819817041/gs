import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from "@/router/router/router.js"


import myHeader from "@/components/myHeader/myHeader.vue"
import myHeaderL from "@/components/myHeaderL/myHeaderL.vue"
import vetMessage from "@/components/vetMessage/vetMessage.vue"   
Vue.component("vetMessage",vetMessage)
Vue.component("myHeaderL",myHeaderL)
Vue.component("myHeader",myHeader)

//text
import message from "@/view/message/message.vue"
Vue.component("message",message)

import store from "@/vuex/store.js"

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


import {conn, WebIM, rtcCall} from "@/assets/js/websdk.js"
Vue.prototype.$WebIM = WebIM
Vue.prototype.$conn = conn
Vue.prototype.$rtcCall = rtcCall


import Agora from "@/assets/js/Agora.js"
Vue.prototype.$V = Agora

import element from "element-ui"
// import 'element-ui/lib/theme-chalk/index.css'; 
import "@/assets/theme/index.css"
Vue.use(element)