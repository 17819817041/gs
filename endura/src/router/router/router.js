import Router from "vue-router"
import store from "@/vuex/store.js"
import Vue from "vue"
Vue.use(Router)
import routes from "../routes/routes.js"



const router = new Router({
    routes,
})

router.beforeEach((to, from, next) => {
    if ( to.name  == 'sop') {
        store.commit("setUser", {
            key: "show_edit",
            value: true
        })
    } else {
        store.commit("setUser", {
            key: "show_edit",
            value: false
        })
    }
    store.commit("setUser", {
        key: "scrollTop",
        value: false
    })
    store.commit("setUser", {
        key: "mobile_b",
        value: false
    })
    next()
})
// router.beforeEach((to,from,next) => {
// 	console.log(to, from)
// 	if (to.meta.login) {
// 		//这个路由需要登录后才可进入
// 		axios({
// 			url:"https://acarepro.online/acarepro-kaifa-api/2.0.18/user",
// 			headers: {
// 				Authorization: "JWT " + localStorage.getItem("token")
// 			}
// 		}).then(res => {
// 			console.log(res)
// 			if (res.data.code == 200) {
// 				// token正确， 正常进入路由
// 				next()
// 			} else {
// 				// token错误， 跳转登录页
// 				next("/")
// 			}
// 		}).catch(e => {
// 			console.log(e)
// 			next("/")
// 		})
// 	} else {
// 		next()
// 	}
	
// })

export default router