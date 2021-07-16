import store from "@/vuex/store.js"
import { fetch, getAgoraToken } from "@/axios/request.js"
function initRtc (Agora) {
    var rtc = {
        client: null,
        joined: false,
        published: false,
        localStream: null,
        remoteStreams: [],
        params: {}
    }

    rtc.client = Agora.createClient({mode: "live", codec: "h264"})
    console.log('new',rtc)
    store.commit('setUser', { key: 'rtc', value: rtc })

    rtc.client.on("error", (err) => {
        console.log(err)
    })

    rtc.client.on("stream-removed", function (evt) {
        var remoteStream = evt.stream
        var id = remoteStream.getId()
        if(remoteStream.isPlaying()) {
            remoteStream.stop()
        }
        rtc.remoteStreams = rtc.remoteStreams.filter(function (stream) {
            return stream.getId() !== id
        })
        // removeView(id)
        console.log("stream-removed remote-uid: ",evt)
    })

    rtc.client.on("peer-leave", function (evt) {
        var id = evt.uid;
        console.log(id, evt)
        let streams = rtc.remoteStreams.filter(e => id !== e.getId())
        let peerStream = rtc.remoteStreams.find(e => id === e.getId())
        if(peerStream && peerStream.isPlaying()) {
          peerStream.stop()
        }
        rtc.remoteStreams = streams
        // if (id !== rtc.params.uid) {
        //   removeView(id)
        // }
        console.log("peer-leave", id)
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
        var id = remoteStream.getId()
        rtc.remoteStreams.push(remoteStream)
        remoteStream.play("player_a1")
        console.log("stream-subscribed remote-uid: ", id)
    })

    rtc.client.on("onTokenPrivilegeWillExpire", function(){
        // After requesting a new token
        var token = ''
        let data = {
            expirationTime: 1,
            userId: localStorage.getItem('userId'),
            roomNumber: '777'
        }
        getAgoraToken(data).then(res => {
            console.log(res,'fetch')
            rtc.client.renewToken(res.data.data);
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
            rtc.remoteStreams = []
            rtc.client = null
            console.log("client leaves channel success")
            rtc.published = false
            rtc.joined = false
        console.log("onTokenPrivilegeDidExpire")
    })

}

export default initRtc