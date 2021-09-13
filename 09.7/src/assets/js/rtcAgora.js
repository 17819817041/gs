import store from "@/vuex/store.js"
import { MessageBox, Message } from 'element-ui';
import AgoraRTC from 'agora-rtc-sdk'
import router from "@/router/router/router.js"
import { getAgoraToken, orderDetail, delMetting, s_online } from "@/axios/request.js"


console.log('agora sdk version: ' + AgoraRTC.VERSION + ' compatible: ' + AgoraRTC.checkSystemRequirements())

// export default class RTCClient {
//     constructor () {
//       this._client = null
//       this._joined = false
//       this._published = false
//       this._localStream = null
//       this._remoteStreams = []
//       this._params = {}
  
//       this._showProfile = false
//     }
  
//     handleEvents() {
//       this._client.on('error', (err) => {
//         console.log(err)
//       })
//       // Occurs when the peer user leaves the channel; for example, the peer user calls Client.leave.
//       this._client.on('peer-leave', (evt) => {
//         const id = evt.uid
//         let streams = this._remoteStreams.filter(e => id !== e.getId())
//         let peerStream = this._remoteStreams.find(e => id === e.getId())
//         peerStream && peerStream.stop()
//         this._remoteStreams = streams
//         this._client.leave(function () {
//             if(rtc.localStream.isPlaying()) {
//                 this._remoteStreams.stop()
//             }
//             this._remoteStreams.close()
//             console.log("client leaves channel success")
//             this._client.unpublish(this._remoteStreams)
//         }, function (err) {
//             console.log("channel leave failed")
//             console.error(err)
//         })
//         this._remoteStreams = streams
//         Message({
//             type: 'info',
//             message: 'Call ended!'
//         })
//         router.back()
//         store.commit("setUser", {
//             key: "setTime_S",
//             value: false
//         })
//         console.log('peer-leave', id)
//       })
//       // Occurs when the local stream is _published.
//       this._client.on('stream-published', () => {
//         console.log('stream-published')
//       })
//       // Occurs when the remote stream is added.
//       this._client.on('stream-added', (evt) => {  
//         const remoteStream = evt.stream
//         const id = remoteStream.getId()
//         if (id !== this._params.uid) {
//           this._client.subscribe(remoteStream, (err) => {
//             console.log('stream subscribe failed', err)
//           })
//         }
//         console.log('stream-added remote-uid: ', id)
//       })
//       // Occurs when a user subscribes to a remote stream.
//       this._client.on('stream-subscribed', (evt) => {
//         const remoteStream = evt.stream
//         const id = remoteStream.getId()
//         this._remoteStreams.push(remoteStream)
//         remoteStream.play("player_a1")
//         console.log("stream-subscribed remote-uid: ", id)
//       })
//       // Occurs when the remote stream is removed; for example, a peer user calls Client.unpublish.
//       this._client.on('stream-removed', (evt) => {
//         const remoteStream = evt.stream
//         const id = remoteStream.getId()
//         remoteStream.stop()
//         this._remoteStreams = this._remoteStreams.filter((stream) => {
//           return stream.getId() !== id
//         })
//         console.log('stream-removed remote-uid: ', id)
//       })
//       this._client.on('onTokenPrivilegeWillExpire', () => {
//         // After requesting a new token
//         // this._client.renewToken(token);
//         var balance = store.state.user.balance
//         // console.log(balance,666666)
//         MessageBox.confirm('The call time is about to end. Do you want to renew?', 'Attention', {
//             MessageBoxButtonText: 'MessageBox',
//             cancelButtonText: 'Cancel',
//             type: 'warning'
//         }).then(() => {
//             if (balance.balance >= 20) {
//                 let data = {
//                     expirationTime: 10,                  //
//                     userId: localStorage.getItem('userId'),
//                     roomNumber: 'petavi_' + localStorage.getItem('sroom')
//                 }
//                 getAgoraToken(data).then(res => {
//                     this._client.renewToken(res.data.data);
//                 })
//                 let order_1 = JSON.parse(localStorage.getItem('order_1'))
//                 let segmented = {
//                     orderId: order_1.orderId,
//                     goodsId: order_1.goodsId
//                 }
//                 orderDetail(segmented).then(res => {
//                     // console.log(res,'第二次扣费')
//                 })
//             } else {
//                 this._client.unpublish(this._remoteStreams)
//                 Message({
//                     type:'error',
//                     message: 'Your balance is insufficient!'
//                 })
//             }
//         }).catch(() => {
            
//         })
//         console.log('onTokenPrivilegeWillExpire')
//       })
//       this._client.on('onTokenPrivilegeDidExpire', () => {
//         // After requesting a new token
//         // client.renewToken(token);
//         if(this._remoteStreams.isPlaying()) {
//             this._remoteStreams.stop()
//         }
//         this._remoteStreams.close()
//         this._remoteStreams = null
//         store.commit("setUser", {
//             key: "setTime_S",
//             value: false
//         })
//         let data = {
//             userId: store.state.user.callTo.doctorId,
//             platform: 2
//         }
//         s_online(data).then(res => {
//             // console.log(res,'在线')
//         })
//         let data_dele = {
//             webId: store.state.user.mettingId
//         }
//         delMetting(data_dele).then(res => {
//             // console.log(res,'删除')
//         })
//         router.back()
//         console.log('onTokenPrivilegeDidExpire')
//       })
//       this._client.on("connection-state-change", function (val) {})
//     }
  
//     // join (data) {
//     //   return new Promise((resolve) => {    
//     //     if (this._joined) {
//     //       Toast.error('Your already joined')
//     //       return
//     //     }
      
//     //     /**
//     //      * A class defining the properties of the config parameter in the createClient method.
//     //      * Note:
//     //      *    Ensure that you do not leave mode and codec as empty.
//     //      *    Ensure that you set these properties before calling Client.join.
//     //      *  You could find more detail here. https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.clientconfig.html
//     //     **/
//     //     this._client = AgoraRTC.createClient({mode: data.mode, codec: data.codec})
      
//     //     this._params = data
      
//     //     // handle AgoraRTC client event
//     //     this.handleEvents()
      
//     //     // init client
//     //     this._client.init(data.appID, () => {
//     //       console.log('init success')
      
//     //       /**
//     //        * Joins an AgoraRTC Channel
//     //        * This method joins an AgoraRTC channel.
//     //        * Parameters
//     //        * tokenOrKey: string | null
//     //        *    Low security requirements: Pass null as the parameter value.
//     //        *    High security requirements: Pass the string of the Token or Channel Key as the parameter value. See Use Security Keys for details.
//     //        *  channel: string
//     //        *    A string that provides a unique channel name for the Agora session. The length must be within 64 bytes. Supported character scopes:
//     //        *    26 lowercase English letters a-z
//     //        *    26 uppercase English letters A-Z
//     //        *    10 numbers 0-9
//     //        *    Space
//     //        *    "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", ","
//     //        *  uid: number | null
//     //        *    The user ID, an integer. Ensure this ID is unique. If you set the uid to null, the server assigns one and returns it in the onSuccess callback.
//     //        *   Note:
//     //        *      All users in the same channel should have the same type (number) of uid.
//     //        *      If you use a number as the user ID, it should be a 32-bit unsigned integer with a value ranging from 0 to (232-1).
//     //       **/
//     //       this._client.join(data.token ? data.token : null, data.channel, data.uid ? +data.uid : null, (uid) => {
//     //         this._params.uid = uid
//     //         Toast.notice('join channel: ' + data.channel + ' success, uid: ' + uid)
//     //         console.log('join channel: ' + data.channel + ' success, uid: ' + uid)
//     //         this._joined = true
      
//     //         // start stream interval stats
//     //         // if you don't need show stream profile you can comment this
//     //         if (!this._interval) {
//     //           this._interval = setInterval(() => {
//     //             this._updateVideoInfo()
//     //           }, 0)
//     //         }
            
//     //         // create local stream
//     //         this._localStream = AgoraRTC.createStream({
//     //           streamID: this._params.uid,
//     //           audio: true,
//     //           video: true,
//     //           screen: false,
//     //           microphoneId: data.microphoneId,
//     //           cameraId: data.cameraId
//     //         })
  
//     //         this._localStream.on('player-status-change', (evt) => {
//     //           console.log('player status change', evt)
//     //         })
  
//     //         if (data.cameraResolution && data.cameraResolution != 'default') {
//     //           // set local video resolution
//     //           this._localStream.setVideoProfile(data.cameraResolution)
//     //         }
      
//     //         // init local stream
//     //         this._localStream.init(() => {
//     //           console.log('init local stream success')
//     //           // play stream with html element id "local_stream"
//     //           this._localStream.play('local_stream', {fit: 'cover'})
      
//     //           // run callback
//     //           resolve()
//     //         }, (err) =>  {
//     //           Toast.error('stream init failed, please open console see more detail')
//     //           console.error(err)
//     //         })
//     //       }, function(err) {
//     //         Toast.error('client join failed, please open console see more detail')
//     //         console.error(err)
//     //       })
//     //     }, (err) => {
//     //       Toast.error('client init failed, please open console see more detail')
//     //       console.error(err)
//     //     })
//     //   })
//     // }
  
//     // publish () {
//     //   if (!this._client) {
//     //     Toast.error('Please Join First')
//     //     return
//     //   }
//     //   if (this._published) {
//     //     Toast.error('Your already published')
//     //     return
//     //   }
//     //   const oldState = this._published
    
//     //   // publish localStream
//     //   this._client.publish(this._localStream, (err) => {
//     //     this._published = oldState
//     //     console.log('publish failed')
//     //     Toast.error('publish failed')
//     //     console.error(err)
//     //   })
//     //   Toast.info('publish')
//     //   this._published = true
//     // }
  
//     // unpublish () {
//     //   if (!this._client) {
//     //     Toast.error('Please Join First')
//     //     return
//     //   }
//     //   if (!this._published) {
//     //     Toast.error('Your didn\'t publish')
//     //     return
//     //   }
//     //   const oldState = this._published
//     //   this._client.unpublish(this._localStream, (err) => {
//     //     this._published = oldState
//     //     console.log('unpublish failed')
//     //     Toast.error('unpublish failed')
//     //     console.error(err)
//     //   })
//     //   Toast.info('unpublish')
//     //   this._published = false
//     // }
  
//     // leave () {
//     //   if (!this._client) {
//     //     Toast.error('Please Join First!')
//     //     return
//     //   }
//     //   if (!this._joined) {
//     //     Toast.error('You are not in channel')
//     //     return
//     //   }
//     //   // leave channel
//     //   this._client.leave(() => {
//     //     // close stream
//     //     this._localStream.close()
  
//     //     $('#local_video_info').addClass('hide')
//     //     // stop stream
//     //     this._localStream.stop()
//     //     for (let i = 0; i < this._remoteStreams.length; i++) {
//     //       const stream = this._remoteStreams.shift()
//     //       const id = stream.getId()
//     //       stream.stop()
//     //       removeView(id)
//     //     }
//     //     this._localStream = null
//     //     this._remoteStreams = []
//     //     this._client = null
//     //     console.log('client leaves channel success')
//     //     this._published = false
//     //     this._joined = false
//     //     Toast.notice('leave success')
//     //   }, (err) => {
//     //     console.log('channel leave failed')
//     //     Toast.error('leave success')
//     //     console.error(err)
//     //   })
//     // }
  
//     // _getLostRate (lostPackets, arrivedPackets) {
//     //   let lost = lostPackets ? +lostPackets : 0
//     //   let arrived = arrivedPackets ? +arrivedPackets : 0
//     //   if (arrived == 0) return 0
//     //   const result = (lost / (lost + arrived)).toFixed(2) * 100
//     //   return result
//     // }
  
//     // _updateVideoInfo () {
//     //   this._localStream && this._localStream.getStats((stats) => {
//     //     const localStreamProfile = [
//     //       ['Uid: ', this._localStream && this._localStream.getId()].join(''),
//     //       ['SDN access delay: ', stats.accessDelay, 'ms'].join(''),
//     //       ['Video send: ', stats.videoSendFrameRate, 'fps ', stats.videoSendResolutionWidth + 'x' + stats.videoSendResolutionHeight].join(''),
//     //     ].join('<br/>')
//     //     $('#local_video_info')[0].innerHTML = localStreamProfile
//     //   })
  
//     //   if (this._remoteStreams.length > 0) {
//     //     for (let remoteStream of this._remoteStreams) {
//     //       remoteStream.getStats((stats) => {
//     //         const remoteStreamProfile = [
//     //           ['Uid: ', remoteStream.getId()].join(''),
//     //           ['SDN access delay: ', stats.accessDelay, 'ms'].join(''),
//     //           ['End to end delay: ', stats.endToEndDelay, 'ms'].join(''),
//     //           ['Video recv: ', stats.videoReceiveFrameRate, 'fps ', stats.videoReceiveResolutionWidth + 'x' + stats.videoReceiveResolutionHeight].join(''),
//     //         ].join('<br/>')
//     //         if ($('#remote_video_info_'+remoteStream.getId())[0]) {
//     //           $('#remote_video_info_'+remoteStream.getId())[0].innerHTML = remoteStreamProfile
//     //         }
//     //       })
//     //     }
//     //   }
//     // }
  
//     // setNetworkQualityAndStreamStats (enable) {
//     //   this._showProfile = enable
//     //   this._showProfile ? $('.video-profile').removeClass('hide') : $('.video-profile').addClass('hide')
//     // }
//   }
  


function initRtc (Agora) {
    // return false
    var rtc = {
        client: null,
        joined: false,
        published: false,
        localStream: null,
        remoteStreams: [],
        params: {}
    }

    rtc.client = Agora.createClient({mode: "live", codec: "h264"})
    store.commit('setUser', { key: 'rtc', value: rtc })
    rtc.client.on("error", (err) => {
        console.log(err)
    })
    rtc.client.on("stream-removed", function (evt) {
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

// export default RTCClient
export default initRtc  