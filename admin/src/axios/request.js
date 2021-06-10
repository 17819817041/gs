import request from "./axios"


export function login (data) {
    return request({
        url: '',
        method: "POST",
        params: data
    })
}

export function doctorList (data) {      //医生列表
    return request({ 
        url: "/doctor/getDoctorListByLimit",
        method: "POST",
        headers: {
            token: '7030d47231154687990b960c56b0fa27',
            userId: 430,
            platform: 1
        },
        params: data
    })
}