import request from "./axios"
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

export function addPet (data) {           //添加宠物
    return request(
        {
            url: "/pet/addPet",
            method: "POST",
            params: data
        }
    )
}

export function deletePet (data) {           //删除宠物
    return request(
        {
            url: "/pet/deletePet",
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
            url: "/pet/getPetDetailList",
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

export function doctorList (data) {      //医生列表
    return request({ 
        url: "/doctor/getDoctorListByLimit",
        method: "POST",
        params: data
    })
}

export function vetDetails (data) {      //医生详情
    return request(
        {
            url: "/doctorDetails/getDoctorDetailsByUserId",
            // url: "/doctorDetails/getUserDetails",
            method: "POST",
            params: data
        }
    )
}

export function updateVetDetails (data) {      //修改医生详情
    return request(
        {
            url: "/doctorDetails/updateDoctorDetails",
            method: "POST",
            params: data
        }
    )
}

export function HospitalList (data) {                    //兽医院列表
    return request(
        {
            url: "/VeterinaryHospital/getVeterinaryHospitalList",
            method: "GET"
        }
    )
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

export function booking (data) {                     //预约
    return request({
        url: "/booking/addBooking",
        method: "POST",
        params: data
    })
}

export function getUserByPId (data) {               //通过宠物ID获取用户信息
    return request({
        url: "/pet/getUserByPId",
        method: "POST",
        params: data
    })
}

export function min (data) {
    return request({
        url: "/lstener/OnlineHeartbeat",
        method: 'POST',
        params: data
    })
}

export function token (data) {                         //返回服务器token
    return request({
        url: "/user/ThirdPartyLogin",
        method: "POST",
        params: data
    })
}

export function account (data) {                         //关联第三方
    return request({
        url: '/user/accountAssociation',
        method: 'POST',
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

export function petType (data) {                           //宠物类型列表
    return request({
        url: '/pettype/getPetTypeList',
        method: "POST",
        params: data
    })
}

export function bookingUserId (data) {                 //userId获取当前预约信息  大于等于今天的记录
    return request({
        url: "/booking/getBookingList",
        method: "POST",
        params: data
    })
}

export function allBooking (data) {                     //userId获取所有预约信息
    return request({
        url: "/booking/getBookingAll",
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

export function notice (data) {                         //获取通知,带分页
    return request({
        url: "/notice/getNotice",
        method: "POST",
        params: data
    })
}

export function updateNoticeState (data) {                         //修改通知状态?noticeId=1
    return request({
        url: "/notice/updateState",
        method: "POST",
        params: data
    })
}

export function address () {                     //获取地址
    return request({
        url: "/address/list",
        method: 'GET'
    })
}

export function addressAdd (data) {                  //添加地址     addressName=离岛&areaId=18
    return request({
        url: '/address/add',
        method: 'POST',
        params: data
    })
}  

export function deleteAddress (data) {               //删除地址    ?addressId=19
    return request({
        url: "/address/del",
        method: "POST",
        params: data
    })
}

export function setAddress (data) {               //修改地址    ?id=19&addressName=离岛222222&areaId=199999
    return request({
        url: "/address/update",
        method: "POST",
        params: data
    })
}

export function areaDoc (data) {                //地区医生?addressId=1
    return request({
        url: "/doctorDetails/getDoctorListByAddress",
        method: "POST",
        params: data
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

export function getDoctorByLocationId (data) {    //根据地区id获取所在医生?addressId=1
    return request({
        url: "/doctorDetails/getDoctorListByAddress",
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