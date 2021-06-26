export default [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path:"/login",
        name: "login",
        component: () => import("@/view/login/login.vue")
    },
    {
        path:"/customerLogin",
        name: "customerLogin",
        component: () => import("@/view/customerLogin/customerLogin.vue")
    },
    {
        path: '/relevance',
        name: 'relevance',
        component: () => import('@/view/relevance/relevance.vue')
    },
    {
        path:'/signUp',
        name:'signUp',
        component: () => import("@/view/signUp/signUp.vue")
    },
    {
        path:'/vetLogin',
        name:'vetLogin',
        component: () => import("@/view/vetLogin/vetLogin.vue")
    },
    {
        path:'/customerhomepage',              //CUSTOMER
        name:'customerhomepage',
        redirect: "/myDoctor",
        component: () => import("@/view/customerhomepage/customerhomepage.vue"),
        children: [
            {
                path:'/myDoctor',
                name:'myDoctor',
                component: () => import("@/view/myDoctor/myDoctor.vue")
            },
            {
                path:'/myAppointment',
                name:'myAppointment',
                component: () => import("@/view/myAppointment/myAppointment.vue")
            },
            {
                path:'/petDetails',
                name:'petDetails',
                component: () => import('@/view/petDetails/petDetails.vue')
            },
            {
                path:'/setting',
                name:'setting',
                component: () => import("@/view/setting/setting.vue")
            },
            {
                path:'/cusAppointmentDetalis',
                name:'cusAppointmentDetalis',
                component: () => import("@/view/cusAppointmentDetalis/cusAppointmentDetalis.vue")
            },
            {
                path:"/record",
                name:'record',
                component: () => import("@/view/record/record.vue")
            },
            {
                path:'/paymentHistory',
                name:'paymentHistory',
                component: () => import("@/view/paymentHistory/paymentHistory.vue")
            },
            {
                path:'/booking',
                name:'paymentHistory',
                component: () => import("@/view/booking/booking.vue")
            },
            {
                path:'/confirm',
                name:'confirm',
                component: () => import("@/view/confirm/confirm.vue")
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
                path: "/firstAid",
                name: "firstAid",
                component: () => import("@/view/firstAid/firstAid.vue")
            },
            {
                path:"/notice",
                name:'notice',
                component: () => import("@/view/notice/notice.vue")
            },
            {
                path:'/reset',
                name:'reset',
                component: () => import("@/view/reset/reset.vue")
            }
        ]
    },
    {
        path:"/petmessage",
        name:'petmessage',
        component: () => import("@/view/petmessage/petmessage.vue")
    },
    {
        path:'/message',
        name:'message',
        component: () => import("@/view/message/message.vue")
    },
    {
        path:'/vethomepage',                     //VET
        name:'vethomepage',
        redirect: "/myCustomer",
        component: () => import("@/view/vethomepage/vethomepage.vue"),
        children: [
            {
                path:'/myCustomer',
                name:'myCustomer',
                component: () => import("@/view/myCustomer/myCustomer.vue")
            },
            {
                path: "/vetDoctor",
                name:"vetDoctor",
                component: () => import("@/view/vetDoctor/vetDoctor.vue")
            },
            {
                path:'/vetSetting',
                name:'vetSetting',
                component: () => import("@/view/vetSetting/vetSetting")
            },
            {
                path:"/appointment",
                name:'appointment',
                component: () => import("@/view/appointment/appointment.vue")
            },
            {
                path:"/reschedule",
                name:'reschedule',
                component: () => import("@/view/reschedule/reschedule.vue")
            },
            {
                path:'/patients',
                name:'patients',
                component: () => import("@/view/patients/patients.vue")
            },
            {
                path: "/vetNotice",
                name: "vetNotice",
                component: () => import("@/view/vetNotice/vetNotice.vue")
            },
            {
                path: "/vetReset",
                name: "vetReset",
                component: () => import("@/view/vetReset/vetReset.vue")
            },
            {
                path: "/myPaymentHistory",
                name: "myPaymentHistory",
                component: () => import("@/view/myPaymentHistory/myPaymentHistory.vue")
            },
            {
                path: "/vetRecord",
                name: "vetRecord",
                component: () => import("@/view/vetRecord/vetRecord.vue")
            },
            {
                path: "/vetBooking",
                name: "vetBooking",
                component: () => import("@/view/vetBooking/vetBooking.vue")
            },
            {
                path: "/vetConfirm",
                name: "vetConfirm",
                component: () => import("@/view/vetConfirm/vetConfirm.vue")
            }
        ]
    },
    {
        path:'/vetMessage',
        name:'vetMessage',
        component: () => import("@/components/vetMessage/vetMessage.vue")
    },
    {
        path:"/agora",
        name:'agora',
        component: () => import("@/view/agora/agora.vue")
    },
    {
        path:"/forgetPwd",
        name:'forgetPwd',
        component: () => import("@/view/forgetPwd/forgetPwd.vue")
    },
    {
        path: "/vetAgora",
        name: "vetAgora",
        component: () => import("@/view/vetAgora/vetAgora.vue")
    },
    {
        path: "/test",
        name: "test",
        component: () => import("@/test/test.vue")
    }
    
]