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
                path:"/UserMessage",
                name: "UserMessage",
                component: () => import("@/view/UserMessage/UserMessage.vue")
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
            {
                path:"/AdvertiserManagement",
                name: "AdvertiserManagement",
                component: () => import("@/view/AdvertiserManagement/AdvertiserManagement.vue")
            },   
            {
                path:"/UserDetailEdit",
                name: "UserDetailEdit",
                component: () => import("@/view/UserDetailEdit/UserDetailEdit.vue")
            },  
            {
                path:"/AdminPlan",
                name: "AdminPlan",
                component: () => import("@/view/AdminIndex/AdminPlan.vue")
            },
            {
                path:"/StoreSet",
                name: "StoreSet",
                component: () => import("@/view/AdminIndex/storeSet.vue")
            }, 
            {
                path:"/StoreAdministrator",
                name: "StoreAdministrator",
                component: () => import("@/view/AdminIndex/StoreAdministrator.vue")
            },  
            {
                path:"/PreviewMsg",
                name: "PreviewMsg",
                component: () => import("@/view/AdminIndex/PreviewMsg.vue")
            }, 
            {
                path:"/StoreUserSet",
                name: "StoreUserSet",
                component: () => import("@/view/AdminIndex/StoreUserSet.vue")
            },   
            {
                path:"/AuditList",
                name: "AuditList",
                component: () => import("@/view/AdminIndex/AuditList.vue")
            },  
            {
                path:"/Gdetail",
                name: "Gdetail",
                component: () => import("@/view/AdminIndex/Gdetail.vue")
            },   
            {
                path:"/Ddetail",
                name: "Ddetail",
                component: () => import("@/view/AdminIndex/Ddetail.vue")
            },   
            {
                path:"/Setting",
                name: "Setting",
                component: () => import("@/view/AdminIndex/Setting.vue")
            },   
            {
                path:"/EchartsMsg",
                name: "EchartsMsg",
                component: () => import("@/view/AdminIndex/EchartsMsg.vue")
            },    
            {
                path:"/TradingRecord",
                name: "TradingRecord",
                component: () => import("@/view/AdminIndex/TradingRecord.vue")
            }
        ] 
    },
]





