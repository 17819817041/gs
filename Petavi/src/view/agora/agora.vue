<style lang="less" scoped>
@import "@/less/css.less";
    .logo_wrap {
        position: relative;
        height: 109px;
        margin-bottom: 10px;
    }
    .LOGO {
        position: absolute;
        left: 62px;
        top: 15px;
        width: 110px;
        height: 123px;
    }
    .showVideo {
        background: @content;
        flex: 8;
        position: relative;
        .video_child {
            position: absolute;
            width: 123px;
            height: 150px;
            // border: solid 1px;
            bottom: 20px;
            right: 20px;
            z-index: 100;
            // background: black;
            box-shadow: 0 0 5px #999;
        }
        .video_parent {
            position: absolute;
            width: 100%;
            height: 100%;
            border: solid 1px;
            bottom: 0px;
            right: 0px;
            z-index: 100;
        }
        .answer {
            position: absolute;
            width: 400px;
            bottom: 30px;
            left: 50%;
            transform: translate(-50%,0);
        }
    }
    .doctorMessage {
        flex: 2;
        border: solid 1px;
    }
    .about_me {
        padding: 40px 0 28px 0;
    }
    .myName {
        width: 200px;
        padding: 0 5px;
    }
    .myOperation{
        width: 260px;
        height: 50px;
        padding: 0 10px;
    }
    .outLogo {
        width: 112px;
        height: 36px;
        border-radius: 15px;
        background: @logout;
        color: white;
    }
    .helpAbout {
        width: 122px;
        height: 36px;
        padding: 0 5px;
        border-radius: 15px;
        font-size: 12px;
        white-space: nowrap;
        background: @helpBtn;
    }
    .DOCTOR {
        padding: 10px 20px;
    }
    .about_the_doctor {
        margin-top: 30px;
        width: 300px;
        height: 65px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 3;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
    }
    .chat {
        width: 95%;
        height: 500px;
        border: solid 1px #EEEEEE;
        margin-top: 100px;
    }
</style>

<template>
    <div class="agora">
        <div class="flex">
            <div>
                <div class="logo_wrap">
                    <img class="LOGO" src="@/assets/img/logo.png" alt="">
                </div>
                <div><message></message></div>
            </div>
            <div class="showVideo">

                <div class="answer sb">
                    <div class="cursor"><img src="@/assets/img/answer_audeo.png" alt=""></div>
                    <div class="cursor" @click="join"><img src="@/assets/img/answer_video.png" alt=""></div>
                    <div class="cursor"><img src="@/assets/img/answer_phone.png" alt=""></div>
                </div>
                <video :class="['video_parent']" id="localVideo"></video>
                <video :class="['video_child']" id="video"></video>
            </div>
            <div class="doctorMessage">
                <div class="about_me sb">
                    <div class="myName sb al">
                        <div><img src="@/assets/img/customerHead.png" alt=""></div>
                        <div>myUserName</div>
                        <div><img src="@/assets/img/information.png" alt=""></div>
                    </div>
                    <div class="myOperation sb al">
                        <div class="outLogo size12 bold cursor al ju" @click="leave">Logout</div>
                        <div class="helpAbout al sb">
                            <img src="@/assets/img/what.png" alt="">
                            Help & Support
                        </div>
                    </div>
                </div>
                <div class="atPresentDoctor sa">
                    <div class="DOCTOR">
                        <div class="mg ju"><img src="@/assets/img/atPresentDoctor.png" alt=""></div>
                        <div class="tc">Dr.Beck</div>
                        <div class="tc">Hispital Name</div>
                    </div>
                    <div class="about_the_doctor">
                        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                    </div>
                </div>
                <div class="chat mg">
                    
                </div>
            </div>
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
        // console.log(AgoraRTC)
        this.createClient()
        setTimeout(() => {
            this.initVideo()
        },10)
    },
    computed: {
        remoteStream () { return this.$store.state.app.remoteStream },
        localStream () { return this.$store.state.app.localStream },
    },
    methods: {
        initVideo () {
            var video = document.getElementById('localVideo');
            video.srcObject = this.localStream;
            video.play()

            
        },
        // edit () {
        //     this.change = !this.change
        // },
        // petList () {
        //     this.show = !this.show
        //     this.rotate = !this.rotate
        // },
        // setting () {
        //     setTimeout(() => {
        //         this.$router.push("/setting")
        //     })
        // },
        // petDetails () {
        //     this.$router.push("/petDetails")
        // },

        
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

