import WebIM from "easemob-websdk"
import config from "./config.js"
import store from "@/vuex/store.js"
import router from "@/router/router/router.js"
import { Message, MessageBox } from 'element-ui';
import { delMetting } from "@/axios/request.js"

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
        console.log("收到消息", e,e.data)
        if (e.sourceMsg == 'PetaviNotice') {
            store.commit("setUser",{ key: 'noticeState', value: true })
        }
        
        let data = JSON.parse(e.data)    
        let from = e.from
        if (data.type == 'danmu') {
            var obj = {
                type: 2,
                value: data.value
            }
            var messageList = JSON.parse(JSON.stringify(store.state.user.messageList))
            messageList.push(obj)
            store.commit("setUser",{ key: 'messageList', value: messageList })
        }
        if (data.type == 'fromAdmin') {
            var obj = {
                type: 2,
                value: data.value,
                userId: data.userId
            }
            var adminList = JSON.parse(JSON.stringify(store.state.user.adminList))
            // console.log(adminList[from],obj)
            if (adminList[from]) {
                adminList[from].messageList.push(obj)
            } else {
                adminList[from] = {
                    user: e.from,
                    userDetail: data.key,
                    messageList: [ obj ]
                }
            }
            store.commit("setUser",{ key: 'adminList', value: adminList })
        }
        // 收到来电
        if (data.type == 'Call') {
            store.commit("setUser",{ key: 'callModal2', value: true })
            store.commit("setUser",{ key: 'petId', value: data.petId })
            store.commit("setUser",{ key: 'caller', value: data.user })
            // store.commit("setUser",{ key: 'joinParams', value: data.params })
            store.commit("setUser",{ key: 'callerIM', value: data.user.userId + 'A' + data.platform })
            localStorage.setItem('sroom', JSON.parse(e.data).sroom)
        }
        //同步会议ID
        if (data.type == 'mettingId') {
            store.commit("setUser",{ key: 'mettingId', value: JSON.parse(e.data).mettingId })
        }
        // 被呼叫者拒接
        if (data.type == 'HangUp') {
            store.commit("setUser",{ key: 'callModal', value: false })
            store.commit("setUser",{ key: 'callLoading', value: false })
            Message({
                type: 'error',
                message: 'The other party refused to answer the call!'
            })
        }
        if (data.type == 'callToJoinFail') {
            store.commit("setUser",{ key: 'callModal', value: false })
            store.commit("setUser",{ key: 'callLoading', value: false })
            // Message({
            //     type: 'error',
            //     message: 'The other party failed to join the meeting!'
            // })
            MessageBox.confirm('The other party failed to join the meeting!', 'Attention', {
                MessageBoxButtonText: 'MessageBox',
                cancelButtonText: 'Cancel',
                type: 'warning'
            })
        }

        // 呼叫着主动挂断
        if (data.type == 'HangUp1') {
            store.commit("setUser",{ key: 'callModal2', value: false })
        }
        // 被呼叫者接通
        if (data.type == 'confirmCall') {
            store.commit("setUser",{ key: 'callModal', value: false })
            store.commit("setUser",{ key: 'callLoading', value: false })
            router.push("/agora")
        }




        // if (data.type == 'danmu') {
        //     var obj = {
        //         type: 2,
        //         value: data.value
        //     }
        //     var chatList = JSON.parse(JSON.stringify(store.state.user.chatList))
        //     chatList.push(obj)
        //     store.commit("setUser",{ key: 'chatList', value: chatList })
        // }
        // if (data.type == 'needHelp') {
        //     console.log(111)
        //     var obj = {
        //         type: 2,
        //         value: data.value
        //     }
        //     var message = JSON.parse(JSON.stringify(store.state.user.message))
        //     if (message[from]) {
        //         console.log(222)
        //         message[from].messageList.push(obj)
        //     } else {
        //         message[from] = {
        //             user: e.from,
        //             userDetail: data.key,
        //             messageList: [ obj ]
        //         }
        //     }
        //     store.commit("setUser",{ key: 'message', value: message })
        // }
    },    
    // onPresence: function(msg){
    //     switch(msg.type){
    //     case 'leaveChatRoom':
    //       // 退出聊天室
    //       alert(123123)
    //       console.log(msg.type,666666)
    //       break;
    //       default:
    //       break;
    //   }}
});


export  { conn, WebIM }