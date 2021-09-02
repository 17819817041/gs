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
            {
                path: "/medical",
                name: "medical",
                component: () => import("@/view/medical/medical.vue")
            },
            {
                path:'/map',
                name:'map',
                component: () => import("@/view/map/map.vue")
            },
            {
                path:'/docInformation',
                name:'docInformation',
                component: () => import("@/view/docInformation/docInformation.vue")
            },
            {
                path:'/reviewer',
                name:'reviewer',
                component: () => import("@/view/reviewer/reviewer.vue")
            }, 
            {
                path:'/schedule',
                name:'schedule',
                component: () => import("@/view/schedule/schedule.vue")
            }, 
            {
                path:'/reschedule',
                name:'reschedule',
                component: () => import("@/view/reschedule/reschedule.vue")
            },
            {
                path:'/reset',
                name:'reset',
                component: () => import("@/view/reset/reset.vue")
            }, 
            {
                path:'/payHistory',
                name:'payHistory',
                component: () => import("@/view/payHistory/payHistory.vue")
            },
        ]
    },
    {
        path: "/agora",
        name: "agora",
        component: () => import("@/view/agora/agora.vue")
    },
]