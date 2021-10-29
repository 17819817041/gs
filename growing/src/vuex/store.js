import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

import app from "./module/app.js"
import user from "./module/user.js"

const store =  new Vuex.Store({
    modules: {
        app, user
    }
})

export default store