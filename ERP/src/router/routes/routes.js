export default [
    {
        path: "/",
        redirect: "/Index"
    },
    {
        path:"/Login",
        name: "Login",
        component: () => import("@/view/Login/login.vue")
    },
    {
        path:"/Index",
        name: "Index",
        redirect: '/Home',
        component: () => import("@/view/Index/index.vue"),
        children: [
            {
                path: '/Home',
                name: 'Home',
                component: () => import('@/view/home/home.vue')
            }, 
            {
                path: '/Financial',
                name: 'Financial',
                component: () => import('@/view/Financial/Financial.vue')
            }, 
            {
                path: '/Stock',
                name: 'Stock',
                component: () => import('@/view/Stock/Stock.vue')
            }, 
            {
                path: '/Purchase',
                name: 'Purchase',
                component: () => import('@/view/Purchase/Purchase.vue')
            }, 
            {
                path: '/Purchase_detail',
                name: 'Purchase_detail',
                component: () => import('@/view/Purchase/detail.vue')
            },
            {
                path: '/Sales',
                name: 'Sales',
                component: () => import('@/view/Sales/Sales.vue')
            }, 
            {
                path: '/Sales_detail',
                name: 'Sales_detail',
                component: () => import('@/view/Sales/detail.vue')
            },
            {
                path: '/Lnbound',
                name: 'Lnbound',
                component: () => import('@/view/Lnbound/Lnbound.vue')
            }, 
            {
                path: '/Lnbound_detail',
                name: 'Lnbound_detail',
                component: () => import('@/view/Lnbound/detail.vue')
            }, 
            {
                path: '/Outbound',
                name: 'Outbound',
                component: () => import('@/view/Outbound/Outbound.vue')
            }, 
            {
                path: '/Outbound_detail',
                name: 'Outbound_detail',
                component: () => import('@/view/Outbound/detail.vue')
            },
            {
                path: '/Items',
                name: 'Items',
                component: () => import('@/view/Items/Items.vue')
            }, 
            {
                path: '/Supplier',
                name: 'Supplier',
                component: () => import('@/view/Supplier/Supplier.vue')
            }, 
            {
                path: '/Customer',
                name: 'Customer',
                component: () => import('@/view/Customer/Customer.vue')
            },
        ] 
    }, 
    {
        path: '/Generate',
        name: 'Generate',
        component: () => import('@/components/generate/generate.vue')
    },
]