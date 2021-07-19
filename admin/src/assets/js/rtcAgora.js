import store from "@/vuex/store.js"
import { MessageBox } from 'element-ui';
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
        // router.back()
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
}

export default initRtc