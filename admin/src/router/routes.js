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
            },
            {
                path: "/petPage",
                name: "petPage",
                component: () => import("@/view/petPage/petPage.vue")
            },
            {
                path: "/patients",
                name: "patients",
                component: () => import("@/view/patients/patients.vue")
            },
            {
                path:'/support',
                name:'support',
                redirect: '/RegistrationAndLogin',
                component: () => import("@/view/support/support.vue"),
                children:[
                    {
                        path:'/chat',
                        name:'chat',
                        component: () => import("@/view/support/chat.vue")
                    },
                    {
                        path: "/RegistrationAndLogin",
                        name: 'RegistrationAndLogin',
                        component: () => import("@/view/support/RegistrationAndLogin.vue")
                    }
                ]
            },
            {
                path: "/chatRoom",
                name: "chatRoom",
                component: () => import("@/view/chatRoom/chatRoom.vue")
            },
            {
                path: "/conference",
                name: "conference",
                component: () => import("@/view/conference/conference.vue")
            },
            {
                path: "/appointment",
                name: "appointment",
                component: () => import("@/view/appointment/appointment.vue")
            },
            {
                path: "/record",
                name: "record",
                component: () => import("@/view/record/record.vue")
            },
            {
                path: "/setting",
                name: "setting",
                component: () => import("@/view/setting/setting.vue")
            },
        ]
    },
    {
        path: "/agora",
        name: "agora",
        component: () => import("@/view/agora/agora.vue")
    },
]