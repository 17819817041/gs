export default [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login/login.vue')
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/view/index/index.vue')
    },
    {
        path: '/forget',
        name: 'forget',
        component: () => import('@/view/forget/forget.vue')
    },
    {
        path: '/home',
        name: "home",
        redirect: "/doctor",
        component: () => import("@/view/home/home.vue"),
        children: [
            {
                path: "/doctor",
                name: "doctor",
                component: () => import("@/view/doctor/doctor.vue")
            }
        ]
    }
    
]