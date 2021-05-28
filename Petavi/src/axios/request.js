import request from "./axios"
export const data = {
    userId: localStorage.getItem("userId"),
    platform: localStorage.getItem("platform"),
    token: localStorage.getItem("Token")
}


export function signUp (data) {    //注册
    return request (
        {
            url: "/user/register",
            method: "POST",
            params: data
        }
    )
}

export function login (data) {
    return request(
        {
            url:'/user/userLogin',
            method: "POST",
            params: data
        }
    )
}

export function forget (data) {
    return request(
        {
            url:'/user/forgetPassword',
            method: "POST",
            params: data
        }
    )
}

export function getUserDetails (params) {          // 获取用户信息
    return request(
        {
            url: "/userDetails/getUserDetails",
            method: "POST",
            // headers: {
            //     userId: localStorage.getItem("userId"),
            //     platform: localStorage.getItem("platform")
            // },
            params:params
        }
    )
}

export function updateUserDetails (data) {            //更新用户信息
    return request(
        {
            url: "/userDetails/updateUserDetails",
            method: "POST",
            params: data
        }
    )
}

export function addPet (data) {       
    return request(
        {
            url: "/pet/addPet",
            method: "POST",
            params: data
        }
    )
}

export function file (data) {          //上传头像
    return request(
        {
            url: '/imageUpload/uploadImage',
            method: 'POST',
            data: data, // 上传formdata封装的数据
        }
    )
}

export function petDetails (data) {     //宠物ID获取第一条宠物信息
    return request(
        {
            url: "/pet/getPet",
            method: "POST",
            params: data
        }
    )
}

export function petList (data) {     //宠物列表
    return request(
        {
            url: "/pet/getPetList",
            metjod: "POST",
            params: data
        }
    )
}

export function updatePet (data) {    //更新宠物信息
    return request({
        url: "/pet/updatePet",
        method: "POST",
        params: data
    })
}
