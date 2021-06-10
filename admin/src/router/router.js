import Router from "vue-router"
import Vue from "vue"
Vue.use(Router)
import routes from "./routes.js"



const router = new Router({
    routes,
})

export default router