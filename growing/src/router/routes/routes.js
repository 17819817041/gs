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
        path:"/Sign",
        name: "Sign",
        component: () => import("@/view/Sign/Sign.vue")
    },
    {
        path:"/Home",
        name: "Home",
        component: () => import("@/view/Home/home.vue"),
        children: [
            {
                path:"/Index",
                name: "Index",
                component: () => import("@/view/Index/index.vue")
            },
            {
                path:"/AdminIndex",
                name: "AdminIndex",
                component: () => import("@/view/AdminIndex/adminIndex.vue")
            },
            {
                path:"/PlatIndex",
                name: "PlatIndex",
                component: () => import("@/view/PlatIndex/platIndex.vue")
            }, 
            {
                path:"/AdvertisingOperation",
                name: "AdvertisingOperation",
                component: () => import("@/view/AdvertisingOperation/AdvertisingOperation.vue")
            }, 
            {
                path:"/AdvertisingAdd",
                name: "AdvertisingAdd",
                component: () => import("@/view/AdvertisingAdd/AdvertisingAdd.vue")
            },  
            {
                path:"/Statistics",
                name: "Statistics",
                component: () => import("@/view/Statistics/Statistics.vue")
            },   
            {
                path:"/Income",
                name: "Income",
                component: () => import("@/view/Income/Income.vue")
            },  
            {
                path:"/Settingadvertising",
                name: "Settingadvertising",
                component: () => import("@/view/Settingadvertising/Settingadvertising.vue")
            },  
            {
                path:"/AddStore",
                name: "AddStore",
                component: () => import("@/view/AddStore/AddStore.vue")
            }, 
            {
                path:"/PlatSetting",
                name: "PlatSetting",
                component: () => import("@/view/PlatSetting/PlatSetting.vue")
            }, 
            {
                path:"/AdministrationStore",
                name: "AdministrationStore",
                component: () => import("@/view/AdministrationStore/AdministrationStore.vue")
            },
        ] 
    },
]