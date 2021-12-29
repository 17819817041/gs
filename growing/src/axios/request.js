import request from "./axios"

export function getuploadtoken(data) {   //oss tokrn
    return request({
        url: '/api/oss/token',
        method: 'GET'
    })
} 

export function gaode (data) {    //地理解析
    return request (
        {
            url: "https://restapi.amap.com/v3/geocode/regeo",
            method: "GET",
            params: data
        }
    )
}

export function gerArea (data) {    //获取边界 腾讯
    return request (
        {
            url: "https://apis.map.qq.com/ws/district/v1/getchildren",
            method: "GET",
            params: data
        }
    )
}

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

export function getTimeIntervaDetailslList (data) {    //获取时段详情列表
    return request (
        {
            url: "/api/timeInterval/getTimeIntervaDetailslList",
            method: "GET"
        }
    )
} 

export function getTimeIntervalList (data) {    //获取时段列表
    return request (
        {
            url: "/api/timeInterval/getTimeIntervalList",
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

export function getPrice (data) {    //查询期望廣告收入
    return request (
        {
            url: "/api/userShop/getPrice",
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

export function getShopIncomeAnalysis (data) {    //查询店鋪廣告收入分析
    return request (
        {
            url: "/api/userShop/getShopIncomeAnalysis",
            method: "PUT",
            params: data
        }
    )
}

export function updateShop (data) {    //修改店鋪
    return request (
        {
            url: "/api/shop/updateShop",
            method: "PUT",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        }
    )
}

export function getShopDetailsById (data) {    //查询店鋪
    return request (
        {
            url: "/api/shop/getShopDetailsById",
            method: "PUT",
            params: data
        }
    )
}

export function getShopAndDeviceList (data) {    //获取所有店铺和设备
    return request (
        {
            url: "/api/shopDetails/getShopAndDeviceList",
            method: "GET",
            params: data
        }
    )
}

export function getShopUserListByUserId (data) {    //所有店鋪設定
    return request (
        {
            url: "/api/shopDetails/getShopUserListByUserId",
            method: "GET",
            params: data
        }
    )
}

export function getShopGuangGaoType (data) {    //查询接受的外來廣告行業
    return request (
        {
            url: "/api/userShop/getShopGuangGaoType",
            method: "GET",
            params: data
        }
    )
}

export function updateShopGuangGaoType (data) {    //修改店铺外接收广告类型（馬上可以修改的）
    return request (
        {
            url: "/api/userShop/updateShopGuangGaoType",
            method: "PUT",
            params: data
        }
    )
}

export function addShopUser (data) {    //新增账户
    return request (
        {
            url: "/api/shopDetails/addShopUser",
            method: "POST",
            params: data
        }
    )
}

export function cancelAccount (data) {    //注销店铺
    return request (
        {
            url: "/api/shopDetails/cancelAccount",
            method: "DELETE",
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
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        }
    )
} 

export function adTypeDel (data) {    //删除广告类型
    return request (
        {
            url: "/api/admin/guangGaoType/del",
            method: "DELETE",
            params: data
        }
    )
} 

export function addTextGuangGaoService (data) {    //添加文字广告
    return request (
        {
            url: "/api/manager/TextGuangGaoService/add",
            method: "POST",
            params: data
        }
    )
} 

export function delTextGuangGaoService (data) {    //删除文字广告
    return request (
        {
            url: "/api/manager/TextGuangGaoService/del",
            method: "PUT",
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
            url: "/api/manager/examine/getExamineListByDate",
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

export function getIncomeStatisticsInRecentYears (data) {    //近年收入金額統計
    return request (
        {
            url: "/api/manager/IncomeAndExpenditure/getIncomeStatisticsInRecentYears",
            method: "GET"
        }
    )
} 

export function getIncomeAndExpenditureInTheLast2Days (data) {    //近2日收入支出分析
    return request (
        {
            url: "/api/manager/IncomeAndExpenditure/getIncomeAndExpenditureInTheLast2Days",
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

export function getShopList (data) {    //获取店铺列表 无分页
    return request (
        {
            url: "/api/address/getShopListBySearch",
            method: "GET",
            params: data
        }
    )
} 

export function getShopListpage (data) {    //获取店铺列表 带分页
    return request (
        {
            url: "/api/shopManager/getShopList",
            method: "GET",
            params: data
        }
    )
} 

export function AdGetShopDetailsById (data) {    //預覽店鋪
    return request (
        {
            url: "/api/shopManager/getShopDetail",
            method: "GET",
            params: data
        }
    )
} 

export function getGuangGaoUser (data) {    //获取广告身份用户列表
    return request (
        {
            url: "/api/managerUser/getGuangGaoUser",
            method: "GET",
            params: data
        }
    )
} 

export function getShopDeviceList (data) {    //查询店鋪下所有设备
    return request (
        {
            url: "/api/shopManager/getShopDeviceList",
            method: "GET",
            params: data
        }
    )
} 

export function managerUserDetail (data) {    //获取广告身份用户列表
    return request (
        {
            url: "/api/managerUser/list",
            method: "GET",
            params: data
        }
    )
} 

export function storeEdit (data) {    //根据userId查询账号详情
    return request (
        {
            url: "/api/accountManager/getUserById",
            method: "GET",
            params: data
        }
    )
} 

export function resetPwd (data) {    //重置密碼
    return request (
        {
            url: "/api/accountManager/resetPwd",
            method: "PUT",
            params: data
        }
    )
} 

export function updateCompany (data) {    //修改公司名称
    return request (
        {
            url: "/api/accountManager/updateCompany",
            method: "PUT",
            params: data
        }
    )
} 

export function updatePhone1 (data) {    //修改電話
    return request (
        {
            url: "/api/accountManager/updatePhone",
            method: "PUT",
            params: data
        }
    )
} 

export function updateState (data) {    //修改客戶狀態
    return request (
        {
            url: "/api/accountManager/updateState",
            method: "PUT",
            params: data
        }
    )
} 

export function comboList (data) {    //根據條件獲取套餐列表
    return request (
        {
            url: "/api/packageGuangGao/list",
            method: "GET",
            params: data
        }
    )
} 

export function comboupdate (data) {    //套餐包上架
    return request (
        {
            url: "/api/packageGuangGao/update",
            method: "PUT",
            params: data
        }
    )
} 

export function combodown (data) {    //套餐包下架
    return request (
        {
            url: "/api/packageGuangGao/xiajia",
            method: "PUT",
            params: data
        }
    )
} 

export function addCombo (data) {    //添加套餐包
    return request (
        {
            url: "/api/packageGuangGao/add",
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        }
    )
} 

export function previewAD (data) {    //添加套餐包
    return request (
        {
            url: "/api/packageGuangGao/byId",
            method: "GET",
            params: data
        }
    )
}

export function getIncomeThisMonth (data) {    //本月收入 ($HKD)
    return request (
        {
            url: "/api/manager/IncomeAndExpenditure/getIncomeThisMonth",
            method: "GET"
        }
    )
}

export function getTotalIncome (data) {    //收入總數 ($HKD)
    return request (
        {
            url: "/api/manager/IncomeAndExpenditure/getTotalIncome",
            method: "GET"
        }
    )
}

export function getTotalExpenditure (data) {    //支出總數 ($HKD)
    return request (
        {
            url: "/api/manager/IncomeAndExpenditure/getTotalExpenditure",
            method: "GET"
        }
    )
}

export function getStatisticsInTheLast7Days (data) {    //近7天收入支出統計
    return request (
        {
            url: "/api/manager/IncomeAndExpenditure/getStatisticsInTheLast7Days",
            method: "GET"
        }
    )
}

export function admincancelAccount (data) {    //近7天收入支出統計
    return request (
        {
            url: "/api/shopManager/cancelAccount",
            method: "DELETE",
            params: data
        }
    )
}

export function getTextGuangGaoList (data) {    //获取文字广告列表
    return request (
        {
            url: "/api/manager/TextGuangGaoService/getTextGuangGaoList",
            method: "GET"
        }
    )
}

export function getShopDetails (data) {    //查询店鋪详情
    return request (
        {
            url: "/api/shopManager/getShopDetails",
            method: "GET",
            params: data
        }
    )
}







//广告商
export function adList (data) {    //分頁獲取廣告用戶身份下的廣告列表
    return request (
        {
            url: "/api/userGuangGao/list",
            method: "GET",
            params: data
        }
    )
} 

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

export function genOrder (data) {    //匹配生产价钱
    return request (
        {
            url: "/api/userOrder/check",
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        }
    )
}

export function submit (data) {    //生成订单/ 添加廣告
    return request (
        {
            url: "/api/userOrder/genOrder",
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        }
    )
}

export function genPackageOrder (data) {    //选择套餐类型投放的广告
    return request (
        {
            url: "/api/userOrder/genPackageOrder",
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        }
    )
}

export function getListByTypeId (data) {    //根据类型获取套餐列表
    return request (
        {
            url: "/api/userOrder/getListByTypeId",
            method: "GET",
            params: data
        }
    )
}

export function getbyId (data) {    //查询套餐
    return request (
        {
            url: "/api/packageGuangGao/getbyId",
            method: "GET",
            params: data
        }
    )
}

export function guangGaoById (data) {    //查询套餐
    return request (
        {
            url: "/api/userGuangGao/guangGaoById",
            method: "GET",
            params: data
        }
    )
}
