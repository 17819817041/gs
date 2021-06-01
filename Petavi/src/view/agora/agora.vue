<style lang="less" scoped>
@import "@/less/css.less";
.agora {
    height: 100%;
    border: red solid 3px;
}
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
        border: solid blue 1px;
        height: calc(100% - 1);
        .video_child {
            position: absolute;
            width: 123px;
            height: 150px;
            // border: solid 1px;
            bottom: 20px;
            right: 20px;
            z-index: 100;
            // background: black;
            // box-shadow: 0 0 5px #999;
        }
        .video_parent {
            position: absolute;
            width: 100%;
            height: 100%;
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
            z-index: 600;
        }
    }
    .doctorMessage {
        // flex: 2;
        width: 23%;
        height: calc(100% - 1);
        border: solid 1px green;
    }
    .about_me {
        padding: 40px 0 28px 0;
    }
    .myName {
        width: 30%;
        padding: 0 5px;
    }
    .myOperation{
        width: 65%;
        height: 50px;
        padding: 0 10px;
    }
    .outLogo {
        width: 45%;
        height: 36px;
        border-radius: 15px;
        background: @logout;
        color: white;
    }
    .helpAbout {
        width: 50%;
        height: 36px;
        padding: 0 5px;
        border-radius: 15px;
        font-size: 12px;
        font-weight: 100;
        background: @helpBtn;
        img {
            padding-right: 5px;
        }
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
        height: 200px;
        border: solid 1px #EEEEEE;
        margin-top: 100px;
    }
    .userHead_img {
        width: 60px;
        height: 60px;
        border: solid 1px gray;
        border-radius: 50%;
        overflow: hidden;
        background: white;
    }
    .userHead {
        height: 60px;
    }
    .docHead_img {
        width: 100px;
        height: 100px;
        border: solid 1px;
        border-radius: 50%;
        overflow: hidden;
    }
    .docHead {
        // width: 100%;
        height: 100px;
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
    .MESSAGE {
        width: 180px;
        border: solid red 1px;
        height: calc(100% );
    }
    .cus_message {
        height: 100%;
        overflow: hidden;
        width: 100%;
        border: solid 1px gray;
    }
</style>

<template>
    <div class="agora">
        <div class="flex">
            <div class="MESSAGE">
                <div class="logo_wrap">
                    <img class="LOGO" src="@/assets/img/logo.png" alt="">
                </div>
                <div v-if="platform == 1"  class="cus_message">
                    <message></message>
                    <!-- <div class="cus_message">
                        123
                    </div> -->
                </div>
                <div v-else-if="platform == 2">
                    <vetMessage></vetMessage>
                </div>
            </div>

            <div class="showVideo">

                <div class="answer sb">
                    <div class="cursor"><img src="@/assets/img/answer_audeo.png" alt=""></div>
                    <div class="cursor"><img src="@/assets/img/answer_video.png" alt=""></div>
                    <div class="cursor" @click="endCall"><img src="@/assets/img/answer_phone.png" alt=""></div>    <!--//结束通话 -->
                </div>
                <video :class="['video_parent']" id="video"></video>
                <video :class="['video_child']" id="localVideo"></video>
            </div>


            <div class="doctorMessage">
                <div class="about_me sb">
                    <div class="myName sb al">
                        <div class="userHead_img ju al">
                            <el-image class="userHead ju al" :src="userDetailMessage.userImage" alt="" fit="cover">
                                <div slot="error" class="image-slot al" style="height: 100%;width:100%">
                                    <i class="el-icon-picture-outline" style="font-size:30px;color:gray"></i>
                                </div>
                            </el-image>
                        </div>
                        <div>{{userDetailMessage.userName}}</div>
                        <div><img src="@/assets/img/information.png" alt=""></div>
                    </div>
                    <div class="myOperation sb al">
                        <div class="outLogo size12 bold cursor al ju">Logout</div>
                        <div class="helpAbout al ju">
                            <img src="@/assets/img/what.png" alt="">
                            Help & Support
                        </div>
                    </div>
                </div>
                <div v-if="platform == 1">
                    <div class="atPresentDoctor sa">
                        <div class="DOCTOR">
                            <div class="docHead_img mg ju">
                                <el-image class="docHead al" :src="callToDoctor.userHead" alt="" fit="cover">
                                    <div slot="error" class="image-slot al" style="height: 100%;width:100%">
                                        <i class="el-icon-picture-outline" style="font-size:40px"></i>
                                    </div>
                                </el-image>
                            </div>
                            <div class="tc">{{callToDoctor.doctorName}}</div>
                            <div class="tc">Hispital Name</div>
                        </div>
                        <div class="about_the_doctor">
                            Dr. Beck is a vet in Hong Kong and has an experience of 8+ years in this field. We provide services in hospitalsonline consultation as video and audio
                        </div>
                    </div>
                    <div class="chat_user mg">
                        <img style="width:100%;height:100%" src="@/assets/img/chatPage.png" alt="">
                    </div>
                </div>
                <div v-else-if="platform == 2">
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
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // client:null,
            // localTracks : {
            //     videoTrack: null,
            //     audioTrack: null
            // },
            // remoteUsers : {},
            // options: {
            //     appid: '0bc95e1145da4b729993725eb55b319a',
            //     channel: '654',
            //     uid: 888,
            //     token: '0060bc95e1145da4b729993725eb55b319aIABktH+02bSfhRnt1IbqwSWGHtt2CLSt2SYNHo683uu1BjN2IlwAAAAAEAD/3NMfIxqyYAEAAQAjGrJg'
            // }
            platform: localStorage.getItem("platform"),
            callToDoctor: {},
            userDetailMessage: {}
        }
    },
    mounted () {
        // console.log(AgoraRTC)
        // this.createClient()
        setTimeout(() => {
            this.initVideo()
        },10)
    },
    created () {
        console.log(this.callTo,"callTo")
        console.log(this.userDetail,"userDetail")
        this.callToDoctor = this.callTo
        this.userDetailMessage = this.userDetail
    },
    computed: {
        remoteStream () { return this.$store.state.app.remoteStream },
        localStream () { return this.$store.state.app.localStream },
        callTo () {return this.$store.state.user.callTo},
        userDetail () {return this.$store.state.user.userDetail}
    },
    methods: {
        endCall () {
            this.$rtcCall.endCall()
        },
        initVideo () {
            var video = document.getElementById('localVideo');
            video.srcObject = this.localStream;
            video.play()

            var video1 = document.getElementById('video');
            video1.srcObject = this.remoteStream;
            video1.play()
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

        
        // createClient () {
        //     this.client = this.$V.createClient({  //进入页面自动调用 mounted
        //         mode: "rtc",
        //         codec: "vp8"
        //     })
        //     this.client.on("user-published", this.handleUserPublished);    //点击join触发
        // },
        // handleUserPublished (user, mediaType) {
        //     console.log(1233333, user.uid, mediaType)
        //     const id = user.uid;
        //     this.remoteUsers[id] = user;
        //     this.subscribe(user, mediaType);
        // },
        // async subscribe (user, mediaType) {
        //     const uid = user.uid;
        //     await this.client.subscribe(user, mediaType);
        //     if (mediaType === 'video') {
        //         console.log("subscribe success" , uid, this.client.uid);
        //         user.videoTrack.play(`player2`);
        //     }
        //     if (mediaType === 'audio') {
        //         user.audioTrack.play();
        //     }
        // },
        // async join () {
        //     [ this.options.uid, this.localTracks.audioTrack, this.localTracks.videoTrack ] = await Promise.all([
        //         // join the channel
        //         this.client.join(this.options.appid, this.options.channel, this.options.token || null),
        //         // create local tracks, using microphone and camera
        //         this.$V.createMicrophoneAudioTrack(),
        //         this.$V.createCameraVideoTrack()
        //     ]);
        //     this.localTracks.videoTrack.play("player1");
        //     await this.client.publish(Object.values(this.localTracks));
        //     console.log("publish success");
        // },
        // async leave() {
        //     for (var trackName in this.localTracks) {
        //         var track = this.localTracks[trackName];
        //         if(track) {
        //             track.stop();
        //             track.close();
        //             this.localTracks[trackName] = undefined;
        //         }
        //     }
        //     // remove remote users and player views
        //     this.remoteUsers = {};
        //     // leave the channel
        //     await this.client.leave();
        // }
    }
}
</script>

