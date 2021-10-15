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

export function file (data) {          //上传头像
    return request(
        {
            url: '/imageUpload/uploadImage',
            method: 'POST',
            data: data, // 上传formdata封装的数据
        }
    )
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

export function doctorList (data) {      //医生列表          0 离线   1在线    2忙碌
    return request({ 
        url: "/doctor/getDoctorListByLimit",
        method: "POST",
        params: data
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

export function allBooking (data) {                     //userId获取所有预约信息?type=2&pageNum=1&pageSize=100&userId=572&sort=1    1 已结束 2 未开始 3 全部
    return request({
        url: "/booking/getBookingPageByUserId",
        method: "POST",
        params: data
    })
}

export function allBooking_doc (data) {                     //doctorId获取所有预约信息?type=1&pageNum=1&pageSize=100&doctorId=574&sort=2    1 已结束 2 未开始 3 全部
    return request({
        url: "/booking/getBookingPageByDoctorId",
        method: "POST",
        params: data
    })
}

export function sortBooking (data) {                    //时间筛选获取预约信息?startDay=2021-8-4&endDay=2021-8-4&pageNum=2&pageSize=10&sort=1
    return request({
        url: "/booking/getBookings",
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
        url: "/userDetailsAndFamilyList/getUserAndFamily",
        method: "POST",
        params: data
    })
}

export function pay (data) {                  //支付
    return request({
        url: "/stripe/create-checkout-session",
        method: "POST",
        params: data
    })
}

export function paypals (data) {                  //充值
    return request({
        url: "/order/genOrderByPaypal",
        method: "POST",
        params: data
    })
}

export function orderId (data) {                  //支付
    return request({
        url: "/stripe/createOrder",
        method: "POST",
        params: data
    })
}

export function contentId (data) {                  //支付
    return request({
        url: "/stripe/executePayment",
        method: "POST",
        data: data
    })
}

export function onlineState (data) {                    //在线状态
    return request({
        url: "/user/loginOut",
        method: "POST",
        params: data
    })
}

export function min (data) {                       //更新在线
    return request({
        url: "/listener/OnlineHeartbeat",
        method: 'POST',
        params: data
    })
}

export function s_online (data) {                       //更新状态为在线
    return request({
        url: "/listener/updateOnlineState",
        method: 'POST',
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

export function updatePetMedicalRecord (data) {            //update pet Medical Record
    return request({
        url: "/PetMedicalRecord/updatePetMedicalRecord",
        method: 'POST',
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

export function medicine () {            //药物Id
    return request({
        url: "/medicine/getMedicine",
        method: 'GET'
    })
}

export function balance (data) {            //获取余额
    return request({
        url: "/userAccount/getUserAccount",
        method: 'POST',
        params: data
    })
}

export function order (data) {            //生成订单?userId=313&remarks=CES&doctorId=314&doctorTypeId=2&goodsId=1    第一次扣费 goodsmin
    return request({
        url: "/order/gen",
        method: 'POST',
        params: data
    })
}

export function orderDetail (data) {            //添加订单详情?goodsId=1&orderId=20210530109834                       续费扣第二阶段   segmented_min
    return request({
        url: "/OrderDetails/addOrderDetails",
        method: 'POST',
        params: data
    })
}

export function allOrder (data) {            //全部订单
    return request({
        url: "/order/getOrderByUserId",
        method: 'POST',
        params: data
    })
}

export function paymentRecord (data) {            //付款记录
    return request({
        url: "/pet/getPaymentRecordByUserId",
        method: 'POST',
        params: data
    })
}

export function getDoctorMedicalLimit (data) {            //医生治疗记录
    return request({
        url: "/pet/getDoctorMedicalLimit",
        method: 'POST',
        params: data
    })
}

export function getAgoraToken (data) {            //agora
    return request({
        url: "/token/getAgoraToken",
        method: 'POST',
        params: data
    })
}

export function fetch (data) {            //鉴权
    return request({
        url: "/fetch_rtc_token",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        data: data
    })
}

export function docGoodsId (data) {            //获取医生goodsId
    return request({
        url: "/goods/getGoodsByUserId",
        method: 'POST',
        params: data
    })
}
   
export function bestDoc (data) {            //首选医生列表
    return request({
        url: "/user/getUserChoiceDoctorList",
        method: 'GET'
    })
}
     
export function URLToken (data) {            //链接是否失效 String email, String token
    return request({
        url: "/user/token",
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
      
export function changeBatch (data) {         //紧急医生 int pageNum, int pageSize
    return request({                                  
        url: '/doctor/changeBatch',
        method: "POST",
        params: data
    })
}

export function resetPasswordByForget (data) {         //忘记密码修改 String email, String newPassword
    return request({                                  
        url: '/user/resetPasswordByForget',
        method: "POST",
        params: data
    })
}

export function joinRoom (data) {                        //加入聊天室接收上线通知
    return request({                                  
        url: '/user/joinChatRoom',
        method: "POST",
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

export function addComment (data) {                        //添加医生评论?userId=574&score=5&content=测试&doctorId=573
    return request({                                  
        url: '/comment/add',
        method: "POST",
        params: data
    })
}

export function getOnlineDocList (data) {                   //在线状态
    return request({                                  
        url: '/doctor/getOnlineDocList',
        method: "POST",
        params: data
    })
}




export function sopList (data) {
    return request({
        url: '/sop/listByPage',
        method: 'POST',
        params: data
    })
}

export function deleteByBatch (data) {
    return request({
        url: "/sop/deleteByBatch",
        method: 'POST',
        params: data
    })
}

export function updatePet (data) {    //更新成员信息
    return request({
        // url: "/pet/updatePet",
        url: '/familyMember/update',
        method: "POST",
        params: data
    })
}

export function deletePet (data) {           //删除成员
    return request(
        {
            url: "/familyMember/delete",
            method: "POST",
            params: data
        }
    )
}

export function addPet (data) {           //添加成员
    return request(
        {
            // url: "/pet/addPet",
            url: '/familyMember/add',
            method: "POST",
            params: data
        }
    )
}

export function petList (data) {     //成员列表
    return request(
        {
            url: '/familyMember/getList',
            metjod: "POST",
            params: data
        }
    )
}

export function sopAdd (data) {           //添加SOP
    return request(
        {
            url: '/sop/add',
            method: "POST",
            params: data
        }
    )
} 

export function webFileRecord (data) {           //上传视频或图片
    return request(
        {
            url: '/webFileRecord/add',
            method: "POST",
            data: data
        }
    )
} 

export function uploadFile (data) {          //上传视频或图片
    return request(
        {
            url: '/file/uploadFile',
            method: 'POST',
            data: data, // 上传formdata封装的数据
        }
    )
}   

export function getListByPage (data) {           // 获取视频列表//////////////////
    return request(
        {
            url: '/sopDetails/getListByPage',
            method: "POST",
            params: data
        }
    )
}   

export function getVideoListByPage (data) {           // 获取视频列表
    return request(
        {
            url: '/sopDetails/getVideoListByPage',
            method: "POST",
            params: data
        }
    )
}

export function getImgListByPage (data) {           // 获取视频列表
    return request(
        {
            url: '/sopDetails/getImgListByPage',
            method: "POST",
            params: data
        }
    )
}

export function getSopStep (data) {           // 根据sopId 获取 sop步骤列表
    return request(
        {
            url: '/sopStep/getSopStep',
            method: "POST",
            params: data
        }
    )
}

export function sopStepUpdate (data) {           // 更新步骤
    return request(
        {
            url: '/sopStep/update',
            method: "POST",
            data: data
        }
    )
}

export function unBinding (data) {           // 眼镜解绑
    return request(
        {
            url: '/binding/unBindingByUserId',
            method: "POST",
            params: data
        }
    )
}

export function getPetMedicalRecord (data) {            //医生治疗记录
    return request({
        url: "/FamilyMedicalRecord/getFamilyMedicalRecordPageByDocId",
        method: 'POST',
        params: data
    })
}

export function getUserDetailsAndFamilyListByUserId (data) {            //id获取客户?petId=45
    return request({
        // url: "/userDetailsAndPetList/getUserAndPet",
        url: '/userDetailsAndFamilyList/getUserDetailsAndFamilyListByUserId',
        method: "POST",
        params: data
    })
}  

export function sopsearch (data) {            //sop搜索
    return request({
        url: '/sop/search',
        method: "POST",
        params: data
    })
}  

export function sopupdate (data) {            //sop更新
    return request({
        url: '/sopDetails/update',
        method: "POST",
        params: data
    })
}    

export function glassUser (data) {            //判断眼镜绑定状态
    return request({
        url: '/glassUser/getGlassUserByUserId',
        method: "POST",
        params: data
    })
}   

export function stepSearch (data) {            //视屏或图片搜索
    return request({
        url: '/sopDetails/search',
        method: "POST",
        params: data
    })
} 

export function updateSop (data) {            //修改sop标题
    return request({
        url: '/sop/update',
        method: "POST",
        params: data
    })
}