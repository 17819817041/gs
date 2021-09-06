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

export function HospitalList (data) {                    //兽医院列表
    return request(
        {
            url: "/VeterinaryHospital/getVeterinaryHospitalList",
            method: "GET"
        }
    )
}

export function address () {                     //获取地址
    return request({
        url: "/address/list",
        method: 'GET'
    })
}

export function vetDetails (data) {                            //医生详情
    return request(
        {
            url: "/doctorDetails/getDoctorDetailsByUserId",
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

export function bookingId (data) {                      //bookingId获取当前预约信息
    return request({
        url: "/booking/getBookingByid",
        method: "POST",
        params: data
    })
}

export function reset (data) {                        //重置密码
    return request(
        {
            url: '/user/resetPassword',
            method: "POST",
            params: data
        }
    )
}

export function allBooking (data) {                     //userId获取所有预约信息
    return request({
        url: "/booking/getBookingAll",
        method: "POST",
        params: data
    })
}

export function updateBooking (data) {                //修改预约
    return request({
        url: "/booking/updateBooking",
        method: "POST",
        params: data
    })
}

export function deleteBooking (data) {                //取消预约
    return request({
        url: "/booking/cancalBooking",
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

export function PetMedicalRecord (data) {            //add pet Medical Record
    return request({
        url: "/PetMedicalRecord/addPetMedicalRecord",
        method: 'POST',
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

export function comment (data) {                        //获取当前医生评论?userId=574&score=5&content=测试&doctorId=573&pageNum=1&pageSize=10
    return request({                                  
        url: '/comment/getListByDoctorId',
        method: "POST",
        params: data
    })
}

export function delPetMedicalRecordById (data) {            //delete pet Medical Record
    return request({
        url: "/PetMedicalRecord/delPetMedicalRecordById",
        method: 'POST',
        params: data
    })
}

export function getBookingPage (data) {            //查询全部，已完成，未完成预约订单 type=2&pageNum=1&pageSize=100
    return request({                                                            // 1 已结束 2 未开始 3 全部
        url: "/booking/getBookingPage",
        method: 'POST',
        params: data
    })
}

export function getPaymentRecordAll (data) {            //查询全部交易记录?userType=2&pageNum=2&pageSize=10      查看所有人的消费记录     userType 1：用户 2：医生
    return request({                                                          
        url: "/pet/getPaymentRecordAll",
        method: 'POST',
        params: data
    })
}

export function petDetails (data) {     //宠物ID获取宠物信息
    return request(
        {
            url: "/pet/getPet",
            method: "POST",
            params: data
        }
    )
}