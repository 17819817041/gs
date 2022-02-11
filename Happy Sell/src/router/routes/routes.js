export default [
    {
        path: "/",
        redirect: "/Login"
    },
    {
        path:"/Login",
        name: "Login",
        component: () => import("@/view/Login/login.vue")
    },
    {
        path:"/Index",
        name: "Index",
        component: () => import("@/view/Index/index.vue")
    },
]