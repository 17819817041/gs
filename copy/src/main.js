import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// window.IMkey = '1130201110157617#demo'

import router from "@/router/router/router.js"


import myHeader from "@/components/myHeader/myHeader.vue"
import myHeaderL from "@/components/myHeaderL/myHeaderL.vue"
import vetMessage from "@/components/vetMessage/vetMessage.vue"   
import agoraMsg from "@/components/agoraMsg/agoraMsg.vue"
Vue.component('agoraMsg',agoraMsg)
Vue.component("vetMessage",vetMessage)
Vue.component("myHeaderL",myHeaderL)
Vue.component("myHeader",myHeader)

//text
import message from "@/view/message/message.vue"
Vue.component("message",message)

import store from "@/vuex/store.js"




import {conn, WebIM} from "@/assets/js/websdk.js"
Vue.prototype.$WebIM = WebIM
Vue.prototype.$conn = conn

import Agora from "@/assets/js/Agora.js"
Vue.prototype.$V = Agora

import { google } from "@/assets/js/google.js"


import FBSignInButton from 'vue-facebook-signin-button'
Vue.use(FBSignInButton)



import element from "element-ui"
import "@/assets/theme/index.css"
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(element,{locale})





new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')