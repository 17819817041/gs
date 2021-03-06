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
        path:"/Sign1",
        name: "Sign1",
        component: () => import("@/view/Sign/Sign1.vue")
    },
    {
        path:"/AdIndex",
        name: "AdIndex",
        component: () => import("@/view/Index/AdIndex.vue"),
        redirect: "/cAdIndex",
        children: [
            {
                path:"/cAdIndex",
                name: "cAdIndex",
                component: () => import("@/view/indexPage/AdIndex.vue")
            },
            {
                path:"/storeDetail",
                name: "storeDetail",
                component: () => import("@/view/indexPage/storeDetail.vue")
            },  
            {
                path:"/searchMsg",
                name: "searchMsg",
                component: () => import("@/view/indexPage/searchMsg.vue")
            },
        ]
    },
    {
        path:"/Home",
        name: "Home",
        component: () => import("@/view/Home/home.vue"),
        children: [
            {
                path:"/Index",
                name: "Index",
                component: () => import("@/view/Index/index.vue"),
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
                path:"/editPro",
                name: "editPro",
                component: () => import("@/view/AdvertisingOperation/editPro.vue")
            }, 
            {
                path:"/editPlus",
                name: "editPlus",
                component: () => import("@/view/AdvertisingOperation/editPlus.vue")
            }, 
            {
                path:"/admineditPro",
                name: "admineditPro",
                component: () => import("@/view/AdminIndex/editPro.vue")
            }, 
            {
                path:"/admineditPlus",
                name: "admineditPlus",
                component: () => import("@/view/AdminIndex/editPlus.vue")
            }, 
            {
                path:"/AdvertisingAdd",
                name: "AdvertisingAdd",
                component: () => import("@/view/AdvertisingAdd/AdvertisingAdd.vue")
            },  
            {
                path:"/AdvertisingAddPro",
                name: "AdvertisingAddPro",
                component: () => import("@/view/AdvertisingAdd/AdvertisingAddPro.vue")
            },  
            {
                path:"/AdvertisingAddPlus",
                name: "AdvertisingAddPlus",
                component: () => import("@/view/AdvertisingAdd/AdvertisingAddPlus.vue")
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
                path:"/AdminPlanPrePro",
                name: "AdminPlanPrePro",
                component: () => import("@/view/AdminIndex/AdminPlanPrePro.vue")
            }, 
            {
                path:"/AdminPlanPlus",
                name: "AdminPlanPlus",
                component: () => import("@/view/AdminIndex/AdminPlanPlus.vue")
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
                path:"/activeAd",
                name: "activeAd",
                component: () => import("@/view/activeAd/activeAd.vue")
            },
            {
                path:"/TradingRecord",
                name: "TradingRecord",
                component: () => import("@/view/AdminIndex/TradingRecord.vue")
            },  
            {
                path:"/Combo",
                name: "Combo",
                component: () => import("@/view/Combo/Combo.vue")
            },    
            {
                path:"/technology",
                name: "technology",
                component: () => import("@/view/technology/technology.vue")
            }, 
            {
                path:"/dvPreview",
                name: "dvPreview",
                component: () => import("@/view/dvPreview/dvPreview.vue")
            }, 
            {
                path:"/dvPreviewPlus",
                name: "dvPreviewPlus",
                component: () => import("@/view/dvPreview/dvPreviewPlus.vue")
            }, 
            {
                path:"/AdAdmin",
                name: "AdAdmin",
                component: () => import("@/view/AdAdmin/AdAdmin.vue")
            },  
            {
                path:"/editcombo",
                name: "editcombo",
                component: () => import("@/view/AdAdmin/editcombo.vue")
            },
            {
                path:"/AddAd",
                name: "AddAd",
                component: () => import("@/view/AdminIndex/AddAd.vue")
            },
        ] 
    },
]





