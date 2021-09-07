import store from "@/vuex/store.js"
import { MessageBox, Message } from 'element-ui';
import router from "@/router/router/router.js"
import { PetMedicalRecord, getAgoraToken, orderDetail, delMetting, s_online } from "@/axios/request.js"
function initRtc (Agora) {
    console.log(Agora,666)
    var rtc = {
        client: null,
        joined: false,
        published: false,
        localStream: null,
        remoteStreams: [],
        params: {}
    }
    Agora.getDevices (function(devices) {
        // console.log(devices)
        // var devCount = devices.length;
        var id = devices[0].deviceId;
        store.commit("setUser", { key: "deviceId", value: id })
        // Message({
        //     type: 'success',
        //     message: id
        // })
    }, function(errStr){
        console.error("Failed to getDevice", errStr);
        Message({
            type: 'error',
            message: 'error camera'
        })
    });
    rtc.client = Agora.createClient({mode: "live", codec: "h264"})
    store.commit('setUser', { key: 'rtc', value: rtc })
    rtc.client.on("error", (err) => {
        console.log(err)
    })
    rtc.client.on("stream-removed", function (evt) {
        // var remoteStream = evt.stream
        // var id = remoteStream.getId()
        // if(remoteStream.isPlaying()) {
        //     remoteStream.stop()
        // }
        // rtc.remoteStreams = rtc.remoteStreams.filter(function (stream) {
        //     return stream.getId() !== id
        // })
        console.log("stream-removed remote-uid: ",evt)
    })
    rtc.client.on("peer-leave", function (evt) {
        var id = evt.uid;
        let streams = rtc.remoteStreams.filter(e => id !== e.getId())
        let peerStream = rtc.remoteStreams.find(e => id === e.getId())
        if(peerStream && peerStream.isPlaying()) {
          peerStream.stop()
        }
        rtc.client.leave(function () {
            if(rtc.localStream.isPlaying()) {
                rtc.localStream.stop()
            }
            rtc.localStream.close()
            // rtc.localStream = null
            // rtc.remoteStreams = []
            console.log("client leaves channel success")
            rtc.client.unpublish(rtc.localStream)
        }, function (err) {
            console.log("channel leave failed")
            console.error(err)
        })
        rtc.remoteStreams = streams
        Message({
            type: 'info',
            message: 'Call ended!'
        })
        router.back()
        console.log("peer-leave", id)
        store.commit("setUser", {
            key: "setTime_S",
            value: false
        })
    })
    rtc.client.on("stream-published", function (evt) {
        console.log("stream-published")
    })
    rtc.client.on("stream-added", function (evt) {  
        var remoteStream = evt.stream
        var id = remoteStream.getId()
        if (id !== rtc.params.uid) {
          rtc.client.subscribe(remoteStream, function (err) {
            console.log("stream subscribe failed", err)
          })
        }
        console.log("stream-added remote-uid: ", id)
    })
    rtc.client.on("stream-subscribed", function (evt) {
        var remoteStream = evt.stream
        // window.remoteStream = remoteStream
        // store.commit('setUser', { key: 'remoteStream_mute', value: remoteStream })
        var id = remoteStream.getId()
        rtc.remoteStreams.push(remoteStream)
        remoteStream.play("player_a1")
        console.log("stream-subscribed remote-uid: ", id)
    })
    rtc.client.on("onTokenPrivilegeWillExpire", function(){
        var balance = store.state.user.balance
        // console.log(balance,666666)
        MessageBox.confirm('The call time is about to end. Do you want to renew?', 'Attention', {
            MessageBoxButtonText: 'MessageBox',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            if (balance.balance >= 20) {
                let data = {
                    expirationTime: 10,                  //
                    userId: localStorage.getItem('userId'),
                    roomNumber: 'petavi_' + localStorage.getItem('sroom')
                }
                getAgoraToken(data).then(res => {
                    rtc.client.renewToken(res.data.data);
                })
                let order_1 = JSON.parse(localStorage.getItem('order_1'))
                console.log(order_1)
                let segmented = {
                    orderId: order_1.orderId,
                    goodsId: order_1.goodsId
                }
                orderDetail(segmented).then(res => {
                    // console.log(res,'第二次扣费')
                })
            } else {
                rtc.client.unpublish(rtc.localStream)
                Message({
                    type:'error',
                    message: 'Your balance is insufficient!'
                })
            }
        }).catch(() => {
            
        })
        console.log("onTokenPrivilegeWillExpire")
    })
    rtc.client.on("onTokenPrivilegeDidExpire", function(){
        // After requesting a new token
        // client.renewToken(token);
        if(rtc.localStream.isPlaying()) {
            rtc.localStream.stop()
        }
        rtc.localStream.close()
        rtc.localStream = null
        store.commit("setUser", {
            key: "setTime_S",
            value: false
        })
        let data = {
            userId: store.state.user.callTo.doctorId,
            platform: 2
        }
        s_online(data).then(res => {
            // console.log(res,'在线')
        })
        let data_dele = {
            webId: store.state.user.mettingId
        }
        delMetting(data_dele).then(res => {
            // console.log(res,'删除')
        })
        router.back()
        console.log("client leaves channel success")
        console.log("onTokenPrivilegeDidExpire")
    })
    rtc.client.on("connection-state-change", function (val) {
        // console.log(val,'connection-state-change+++++++++++++++++++++++++++++++++++++++++++++')
    })
}

export default initRtc