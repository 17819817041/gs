import request from "./axios"

export function signUp (data) {    //注册
    return request (
        {
            url: "/api/user/register",
            method: "POST",
            params: data
        }
    )
}

export function Login (data) {    //登錄
    return request (
        {
            url: "/api/user/login",
            method: "GET",
            params: data
        }
    )
} 

export function generateCode (data) {    //生成验证码
    return request (
        {
            url: "/api/user/generateCode",
            method: "POST",
            params: data
        }
    )
} 

export function verify (data) {    //验证码验证
    return request (
        {
            url: "/api/user/verify",
            method: "GET",
            params: data
        }
    )
} 

export function getUserById (data) {    //查询用户
    return request (
        {
            url: "/api/user/getUserById",
            method: "GET",
            params: data
        }
    )
} 

export function updateEmail (data) {    //修改電郵地址
    return request (
        {
            url: "/api/user/updateEmail",
            method: "PUT",
            params: data
        }
    )
} 

export function updatePhone (data) {    //修改聯繫電話
    return request (
        {
            url: "/api/user/updatePhone",
            method: "PUT",
            params: data
        }
    )
} 

export function updatePwd (data) {    //修改密碼
    return request (
        {
            url: "/api/user/updatePwd",
            method: "PUT",
            params: data
        }
    )
} 

export function updateHead (data) {    //修改头像
    return request (
        {
            url: "/api/user/updateHead",
            method: "PUT",
            params: data
        }
    )
} 


export function setLang (data) {    //设置语言
    return request (
        {
            url: "/api/setting/set",
            method: "GET",
            params: data
        }
    )
} 

export function incomePriceId (data) {    ///api/income/list
    return request (
        {
            url: "/api/income/list",
            method: "GET"
        }
    )
} 






//店鋪
export function AddStore (data) {    //添加店铺
    return request (
        {
            url: "/api/shop/add",
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        }
    )
} 

export function getShopListByUser (data) {    //获取用户下所有店铺 根据用户id获取店铺首页数据
    return request (
        {
            url: "/api/userShop/getShopHomeDetails",
            method: "GET",
            params: data
        }
    )
}

export function updatePrice (data) {    //修改店铺期望收入价格(馬上修改)
    return request (
        {
            url: "/api/userShop/updatePrice",
            method: "PUT",
            params: data
        }
    )
}

export function getShopIncomeStatistics (data) {    //查询店鋪廣告收入統計
    return request (
        {
            url: "/api/userShop/getShopIncomeStatistics",
            method: "PUT",
            params: data
        }
    )
}




//廣告後台管理
export function AddressList (data) {    //查询地址列表
    return request (
        {
            url: "/api/manager/address/list",
            method: "GET"
        }
    )
} 

export function addressAdd (data) {    //添加地址
    return request (
        {
            url: "/api/manager/address/add",
            method: "POST",
            data: data
        }
    )
} 

export function addressDel (data) {    //删除地址
    return request (
        {
            url: "/api/manager/address/del",
            method: "DELETE",
            params: data
        }
    )
} 

export function typeList (data) {    //查询广告类型列表
    return request (
        {
            url: "/api/admin/guangGaoType/list",
            method: "GET"
        }
    )
} 

export function adTypeAdd (data) {    //添加广告类型
    return request (
        {
            url: "/api/admin/guangGaoType/add",
            method: "DELETE",
            params: data
        }
    )
} 

export function shopExamine (data) {    //获取店铺审核列表 
    return request (
        {
            url: "/api/manager/shopExamine/getExamineList",
            method: "PUT",
            params: data
        }
    )
} 

export function examine (data) {    //获取广告商审核列表 
    return request (
        {
            url: "/api/manager/examine/getExamineList",
            method: "PUT",
            params: data
        }
    )
} 

export function examineAdopt (data) {    //广告审核通过
    return request (
        {
            url: "/api/manager/examine/examineAdopt",
            method: "PUT",
            params: data
        }
    )
} 

export function examineError (data) {    //广告审核不通過
    return request (
        {
            url: "/api/manager/examine/examineError",
            method: "PUT",
            params: data
        }
    )
} 

export function shopExamineAdopt (data) {    //店鋪审核通过
    return request (
        {
            url: "/api/manager/shopExamine/examineAdopt",
            method: "PUT",
            params: data
        }
    )
} 

export function shopExamineError (data) {    //店鋪审核不通过
    return request (
        {
            url: "/api/manager/shopExamine/examineError",
            method: "PUT",
            params: data
        }
    )
} 

export function getEventExpirationTime (data) {    //近期廣告活動到期時間
    return request (
        {
            url: "/api/manager/activityStatistics/getEventExpirationTime",
            method: "GET"
        }
    )
}   

export function getGuangGaoTypeActiveStatus (data) {    //廣告類型活動狀態
    return request (
        {
            url: "/api/manager/activityStatistics/getGuangGaoTypeActiveStatus",
            method: "GET",
            params: data
        }
    )
}   

export function getStatisticsForTheLast12Days (data) {    //近12日廣告活動時段統計
    return request (
        {
            url: "/api/manager/activityStatistics/getStatisticsForTheLast12Days",
            method: "GET"
        }
    )
} 

export function getStatisticsForThepastSixMonths (data) {    //近半年廣告活動統計
    return request (
        {
            url: "/api/manager/activityStatistics/getStatisticsForThepastSixMonths",
            method: "GET"
        }
    )
} 

export function getTimeActiveStatus (data) {    //廣告時段活動狀態
    return request (
        {
            url: "/api/manager/activityStatistics/getTimeActiveStatus",
            method: "GET",
            params: data
        }
    )
} 

export function getTotalTimePeriod (data) {    //廣告活動時段總數
    return request (
        {
            url: "/api/manager/activityStatistics/getTotalTimePeriod",
            method: "GET"
        }
    )
} 



//广告商
export function getCumulativeMonthly (data) {    //获取最近一年的月份（过去一年的数据）累计投放广告天数
    return request (
        {
            url: "/api/statistics/getCumulativeMonthly",
            method: "GET",
        }
    )
} 

export function getGuangGaoStatistics (data) {    //每个区域的所有广告的天数之和
    return request (
        {
            url: "/api/statistics/getGuangGaoStatistics",
            method: "GET",
        }
    )
} 

export function getRemainderDay (data) {    //获取每个区域的所有广告
    return request (
        {
            url: "/api/statistics/getRemainderDay",
            method: "GET",
        }
    )
} 


// export function AK (data) {   
//     return request (
//         {
//             url: "http://api.map.baidu.com/api_region_search/v1/?keyword=香港&sub_admin=0&ak=6GAWAG891l60tKygT8GcbFB45PGbUrZC",
//             method: "GET",
//         }
//     )
// }