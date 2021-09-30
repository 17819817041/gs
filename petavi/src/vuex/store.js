import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

import app from "./modules/app.js"
import user from "./modules/user.js"

const store =  new Vuex.Store({
    modules: {
        app, user
    }
})

export default store