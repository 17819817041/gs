import WebIM from "easemob-websdk"
import config from "./config.js"
import store from "@/vuex/store.js"
import router from "@/router/router/router.js"
import { Message } from 'element-ui';

let conn = {};
WebIM.config = config;
conn = WebIM.conn = new WebIM.connection({
    appKey: WebIM.config.appkey,
    isHttpDNS: WebIM.config.isHttpDNS,
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
    https: WebIM.config.https,
    url: WebIM.config.socketServer,
    apiUrl: WebIM.config.restServer,
    isAutoLogin: WebIM.config.isAutoLogin,
    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
    autoReconnectInterval: WebIM.config.autoReconnectInterval,
    delivery: WebIM.config.delivery,
    useOwnUploadFun: WebIM.config.useOwnUploadFun
})


conn.listen({
    onOpened: function ( message ) {
        console.log("open登录",message)
    },         //连接成功回调 
    onClosed: function ( message ) {
        console.log("close登出")
    },         //连接关闭回调
    onTextMessage: function ( e ) {
        console.log("收到消息", e)
        let data = JSON.parse(e.data)
        if (data.type == 'Call') {
            store.commit("setUser",{ key: 'callModal2', value: true })
            store.commit("setUser",{ key: 'caller', value: data.user })
            store.commit("setUser",{ key: 'joinParams', value: data.params })
        }
        if (data.type == 'HangUp') {
            store.commit("setUser",{ key: 'callModal', value: false })
            store.commit("setUser",{ key: 'callLoading', value: false })
            Message({
                type: 'info',
                message: 'The other party refused to answer the call!'
            })
            window.eMedia.mgr.exitConference()
        }
        if (data.type == 'HangUp1') {
            store.commit("setUser",{ key: 'callModal2', value: false })
        }
        if (data.type == 'confirmCall') {
            store.commit("setUser",{ key: 'callModal', value: false })
            store.commit("setUser",{ key: 'callLoading', value: false })
            router.push("/agora")
            
        }
    },    //收到文本消息
});



import webrtc from 'easemob-webrtc'

var rtcCall = new webrtc.Call({
    connection: conn, // WebIM 的链接信息
    mediaStreamConstaints: {
            audio: true,
            video: true
            /**
            * 修改默认摄像头，可以按照以下设置，不支持视频过程中切换
            * video:{ 'facingMode': "user" } 调用前置摄像头
            * video: { facingMode: { exact: "environment" } } 后置
            */
    },

    listener: {
        onAcceptCall: function (from, options) {
            console.log('onAcceptCall::', 'from: ', from, 'options: ', options);
            if (from) {
                store.commit("setUser",{ key: 'callModal', value: false })
                store.commit("setUser",{ key: 'callModal2', value: false })
                let starTime = Date.now()
                localStorage.setItem('starTime',starTime)
                router.push("/agora")
            }
        },
        //通过streamType区分视频流和音频流，streamType: 'VOICE'(音频流)，'VIDEO'(视频流)
        onGotRemoteStream: function (stream, streamType) {
            console.log('onGotRemoteStream::', 'stream: ', stream, 'streamType: ', streamType);
            store.commit("setApp",{ key: 'remoteStream', value: stream })

            // setTimeout(() => {
            //     var reVideo = document.getElementById('video');
            //     console.log(666,reVideo.play,stream)
            //     reVideo.srcObject = stream;
            //     reVideo.play()
            // },1000)
            // var video = document.getElementById('video');
            // video.srcObject = stream;
            // video.play()
        },
        onGotLocalStream: function (stream, streamType) {
            console.log('onGotLocalStream::', 'stream:', stream, 'streamType: ', streamType);
            store.commit("setApp",{ key: 'localStream', value: stream })
            // var video = document.getElementById('localVideo');
            // video.srcObject = stream;
            // video.play()
        },
        onRinging: function (caller, streamType) {
            console.log("onRinging", caller)
            store.commit("setUser",{ key: 'caller', value: caller })
            store.commit("setUser",{ key: 'callModal2', value: true })
        },
        onTermCall: function (reason) {
            console.log('onTermCall::');
            console.log('reason:', reason);
            store.commit("setUser",{ key: 'callModal', value: false })
            store.commit("setUser",{ key: 'callModal2', value: false })
            let endTime = Date.now()
            localStorage.setItem('endTime',endTime)
            store.commit("setUser",{ key: 'sureCall', value: true })
            // router.back()
            if (router.name == 'agora') {
                router.back()
            } else {

            }
        },
        onIceConnectionStateChange: function (iceState) {
            console.log('onIceConnectionStateChange::', 'iceState:', iceState);
        },
        // 通话断网监听
        onNetWorkDisconnect(endType) { // endType: local || remote, 哪一端断网
            console.log('1v1 onNetWorkDisconnect', endType);
        },
        onError: function (e) {
            console.log(e);
        }
     }
});

export  { conn, WebIM, rtcCall }