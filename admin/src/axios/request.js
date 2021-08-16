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

export function getBookings (data) {                 //获取预约信息  String startDay, String endDay, int pageNum, int pageSize  sort   1 按 创建时间排序    2 按 预约时间排序
    return request({
        url: "/booking/getBookings",
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

export function file (data) {          //上传头像
    return request(
        {
            url: '/imageUpload/uploadImage',
            method: 'POST',
            data: data, // 上传formdata封装的数据
        }
    )
}

export function getAgoraToken (data) {            //agora
    return request({
        url: "/token/getAgoraToken",
        method: 'POST',
        params: data
    })
}

export function searchDoc (data) {         //搜索  name=p&searchType=2&doctorId=574
    return request({                                      // 1 医生， 2 宠物
        url: '/user/homeSearch',
        method: "POST",
        params: data
    })
}

export function asd (data) {       
    return request({                                  
        url: '/agora/recoding',
        method: "POST",
        params: data
    })
}

export function getPetMedicalRecord (data) {            //医生治疗记录
    return request({
        url: "/PetMedicalRecord/getPetMedicalRecordPageByDocId",
        method: 'POST',
        params: data
    })
}