import request from "./axios"


export function login (data) {
    return request(
        {
            url:'/user/userLogin',
            method: "POST",
            params: data
        }
    )
}

export function getAdminDetailsById (params) {          // 获取信息
    return request(
        {
            url: "adminDetails/getAdminDetailsById",
            method: "POST",
            params:params
        }
    )
}

export function getAdminDetails (params) {          // 获取信息
    return request(
        {
            url: "adminDetails/getAdminDetailsByUserId",
            method: "POST",
            params:params
        }
    )
}

export function updateAdmin (data) {         //修改个人?userId=473&phone=123123&age=12&gender=1&name=消息111&nickName=小&lastname=溪&image=www.image&address=深圳&extend=12
    return request({ 
        url: "/adminDetails/updateAdminDetails",
        method: "POST",
        params: data
    })
}

export function doctorList (data) {      //医生列表
    return request({ 
        url: "/doctor/getDoctorListByLimit",
        method: "POST",
        params: data
    })
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

export function getMetting () {               //获取会议
    return request({
        url: "/WebId/getWebId",
        method: "GET"
    })
}

export function addMetting (data) {            //添加会议
    return request({
        url: "/WebId/addWebId",
        method: "POST",
        data: data
    })
}
 
export function delMetting (data) {            //删除会议?webId=3
    return request({
        url: "/WebId/delWebId",
        method: "POST",
        params: data
    })
}

export function petType (data) {                           //宠物类型列表
    return request({
        url: '/pettype/getPetTypeList',
        method: "POST",
        params: data
    })
}

export function allPet (data) {            //所有宠物?pageSize=20&pageNum=0
    return request({
        url: "/pet/getPetAll",
        method: "POST",
        params: data
    })
}

export function getUserByPetId (data) {            //宠物id获取客户?petId=45
    return request({
        url: "/userDetailsAndPetList/getUserAndPet",
        method: "POST",
        params: data
    })
}