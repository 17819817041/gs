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
            border: solid 1px;
            bottom: 20px;
            right: 20px;
            z-index: 100;
            background: black;
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
        height: 400px;
        border: solid 2px #E9E9E9;
        margin-top: 10px;

    }
    .atPresentDoctor {
        width: 95%;
        color: #828282;
        border: #E9E9E9 solid 2px;
        padding: 10px 20px 20px 20px;
    }
    .get_day {
        width: 270px;
    }
    .time {
        background: #F3F3F3;
        width: 80px;
        padding: 5px 10px;
        border-radius: 15px;
        .min_arrow {
            width: 11px;
            height: 10px;
            margin: 4px 0 0 4px;
        }
    }
    .textarea {
        border-radius: 20px;
        overflow: hidden;
        textarea {
            width: 100%;
            resize: none;
            border: none;
            outline: none;
            background: #F3F3F3;
            padding: 10px;
        }
    }
    .button {
        padding: 10px 10px;
        .save {
            background: @hdColor;
            width: 100px;
            border-radius: 20px;
            padding: 7px 10px;
            color: white;
        }
        .submit {
            background: @helpBtn;
            width: 100px;
            border-radius: 20px;
            padding: 7px 10px;
            color: white;
        }
        .clipImg {
            padding-left: 15px;
        }
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
            <div class="showVideo" id="player2">
                <div class="answer sb">
                    <div class="cursor"><img src="@/assets/img/answer_audeo.png" alt=""></div>
                    <div class="cursor" @click="join"><img src="@/assets/img/answer_video.png" alt=""></div>
                    <div class="cursor"><img src="@/assets/img/answer_phone.png" alt=""></div>
                </div>
                <div class="video_child" id="player1"></div>
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
                <div class="atPresentDoctor mg">
                    <div>Medical Record</div>
                    <div style="padding:13px 0">Date</div>
                    <div class="get_day sb">
                        <div class="time al ju">
                            day
                            <img class="min_arrow" src="@/assets/img/minarrow.png" alt="">
                        </div>
                        <div class="time al ju">
                            month
                            <img class="min_arrow" src="@/assets/img/minarrow.png" alt="">
                        </div>
                        <div class="time al ju">
                            year
                            <img class="min_arrow" src="@/assets/img/minarrow.png" alt="">
                        </div>
                    </div>
                    <div style="padding:25px 0 10px 0">Details</div>
                    <div class="textarea">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="button sb tc">
                        <div class="save cursor">Save</div>
                        <div class="sb tc">
                            <div class="submit cursor">Submit</div>
                            <div><img class="clipImg cursor" src="@/assets/img/clip.png" alt=""></div>
                        </div>
                    </div>
                </div>
                <div class="chat mg">
                    
                </div>
            </div>
        </div>



        <!-- <div id="player1"></div>
        <div id="player2"></div>
        <div><button @click="leave">离开</button>
            <button @click="join">进入</button>
        </div> -->
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
        
    },
    methods: {
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

