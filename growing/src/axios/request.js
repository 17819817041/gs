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






//店鋪
export function getShopHomeDetails (data) {    //根据用户id获取店铺首页数据
    return request (
        {
            url: "/api/shopManager/getShopHomeDetails",
            method: "GET",
            params: data
        }
    )
}

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

export function getShopListByUser (data) {    //获取用户下所有店铺
    return request (
        {
            url: "/api/userShop/getShopListByUser",
            method: "GET",
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
