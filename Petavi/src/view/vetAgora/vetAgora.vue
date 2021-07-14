<style>
    #player1, #player2 {
        width: 400px;
        height: 250px;
        border: solid 1px;
    }
</style>
<template>
    <div class="agora">
        <div id="player1"></div>
        <div id="player2"></div>
        <div><button @click="leave">离开</button>
            <button @click="join">进入</button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            client:null,
            localTracks : {
                videoTrack: null,
                audioTrack: null
            },
            remoteUsers : {},
            options: {
                appid: '0bc95e1145da4b729993725eb55b319a',
                channel: '654',
                uid: 888,
                token: '0060bc95e1145da4b729993725eb55b319aIABktH+02bSfhRnt1IbqwSWGHtt2CLSt2SYNHo683uu1BjN2IlwAAAAAEAD/3NMfIxqyYAEAAQAjGrJg'
            }
        }
    },
    mounted () {
        this.createClient()
        
    },
    methods: {
        createClient () {
            this.client = this.$V.createClient({  //进入页面自动调用 mounted
                mode: "rtc",
                codec: "vp8"
            })
            this.client.on("user-published", this.handleUserPublished);    //点击join触发
        },
        handleUserPublished (user, mediaType) {
            console.log(1233333, user.uid, mediaType)
            const id = user.uid;
            this.remoteUsers[id] = user;
            this.subscribe(user, mediaType);
        },
        async subscribe (user, mediaType) {
            const uid = user.uid;
            await this.client.subscribe(user, mediaType);
            if (mediaType === 'video') {
                console.log("subscribe success" , uid, this.client.uid);
                user.videoTrack.play(`player2`);
            }
            if (mediaType === 'audio') {
                user.audioTrack.play();
            }
        },
        async join () {
            [ this.options.uid, this.localTracks.audioTrack, this.localTracks.videoTrack ] = await Promise.all([
                // join the channel
                this.client.join(this.options.appid, this.options.channel, this.options.token || null),
                // create local tracks, using microphone and camera
                this.$V.createMicrophoneAudioTrack(),
                this.$V.createCameraVideoTrack()
            ]);
            this.localTracks.videoTrack.play("player1");
            await this.client.publish(Object.values(this.localTracks));
            console.log("publish success");
        },
        async leave() {
            for (var trackName in this.localTracks) {
                var track = this.localTracks[trackName];
                if(track) {
                    track.stop();
                    track.close();
                    this.localTracks[trackName] = undefined;
                }
            }
            // remove remote users and player views
            this.remoteUsers = {};
            // leave the channel
            await this.client.leave();
        }
    }
}
</script>

