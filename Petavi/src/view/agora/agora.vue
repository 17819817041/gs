<style lang="less" scoped>
@import "@/less/css.less";
.agora {
    height: 100%;
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
        z-index: 500;
        background: white;
    }
    .showVideo {
        background: @content;
        flex: 8;
        position: relative;
        // height: 100%;
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
            // background: black;
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
        height: 100%;
        overflow: auto;

    }
    .about_me {
        padding: 30px 0 28px 0;
        // @media screen and (max-width: 1300px) {
        //     transform: scale(0.9,0.6);
        // }
    }
    .myName {
        width: 35%;
        padding: 0 5px;
    }
    .myOperation{
        width: 60%;
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
    .chat_user {
        width: 95%;
        border: solid 1px #ddd9d9;
        border-bottom: none;
        margin-top: 60px;
        box-shadow: 0 -1px 2px 1px rgb(219, 217, 217);
        .INP {
            width: 100%;
            padding: 7px 0;
            border-top: solid 1px rgb(212, 203, 203);
            border-bottom: solid 1px rgb(196, 190, 190);
        }
        .user_content {
            width: 100%;
            height: 520px;
            transform: rotateY(180deg);
        }
    }
    .chat {
        width: 95%;
        border: #E9E9E9 solid 2px;
        border-bottom: none;
        margin-top: 10px;
        position: relative;
        // box-shadow: 0 -1px 2px 1px rgb(219, 217, 217);
        .INP {
            // position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 7px 0;
            border-top: solid 1px rgb(212, 203, 203);
            border-bottom: solid 1px rgb(196, 190, 190);
        }
    }
    .INP_item {
        width: 75%;
        // height: 35px;
        border: solid 1px rgb(185, 183, 183);
        border-radius: 15px;
        overflow: hidden;
    }
    .send_img {
        width: 15%;
        img {
            width: 55px;
            height: 55px;
        }
    }
    .userHead_img {
        width: 50px;
        height: 50px;
        border: solid 1px rgb(217, 223, 219);
        border-radius: 50%;
        overflow: hidden;
        background: white;
        margin-right: 5px;
    }
    .userHead {
        height: 100%;
    }
    .docHead_img {
        width: 70px;
        height: 70px;
        border: solid 1px rgb(199, 192, 192);
        border-radius: 50%;
        overflow: hidden;
    }
    .docHead {
        // width: 100%;
        height: 100%;
    }

    .atPresentDoctor {
        width: 95%;
        color: #828282;
        border: #E9E9E9 solid 2px;
        padding: 10px 20px 20px 20px;
    }
    .get_day {
        width: 100%;
    }
    .day_time {
        width: 15%;
        border-radius: 15px;
        height: 30px;
        overflow: hidden;
    }
    .time {
        background: #F3F3F3;
        width: 25%;
        border-radius: 15px;
        overflow: hidden;
        margin-left: 10px;
        height: 30px;
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
            width: 30%;
            border-radius: 20px;
            padding: 7px 10px;
            color: white;
        }
        .clipImg {
            padding-left: 15px;
        }
    }
    .submit {
        background: @helpBtn;
        width: 100px;
        border-radius: 20px;
        padding: 7px 10px;
        color: white;
    }
    .MESSAGE {
        width: 185px;
        height: calc(100% );    
    }
    .cus_message {
        height: calc(100% - 123px);
        overflow: auto;
        width: 100%;
    }
    .wrap_message {
        width: 100%;
        height: 300px;
    }
    .message_item {
        width: 100%;
        height: 100%;
        transform: rotateY(180deg);
    }
</style>

<template>
    <div class="agora">
        <div class="flex" style="height:100%">
            <div class="MESSAGE">
                <div class="logo_wrap">
                    <img class="LOGO" src="@/assets/img/logo.png" alt="">
                </div>
                <div v-if="platform == 1"  class="cus_message noBar">
                    <message></message>
                    <!-- <div class="cus_message">
                        123
                    </div> -->
                </div>
                <div v-else-if="platform == 2"  class="cus_message noBar">
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


            <div class="doctorMessage noBar">
                <div class="about_me sb">
                    <div class="myName al">
                        <div class="al" style="width:80%">
                            <div class="userHead_img ju al">
                                <!-- <img class="userHead" src="@/assets/img/john.png" alt=""> -->
                                <img v-if="userDetailMessage.userImage" class="userHead" :src="userDetailMessage.userImage" alt="">
                                <i class="el-icon-picture-outline" v-else style="font-size:30px;color:gray"></i>
                            </div>
                            <div class="tc size14" v-if="userDetailMessage.userName">{{userDetailMessage.userName}}</div>
                            <div v-else class="tc" style="font-size:12px">No Name</div>
                        </div>
                        <div><img style="width:17px;height:22px;margin-left:5px" src="@/assets/img/information.png" alt=""></div>
                    </div>
                    <div class="myOperation sb al">
                        <div class="outLogo size12 bold cursor al ju">Logout</div>
                        <div class="helpAbout cursor al ju">
                            <img src="@/assets/img/what.png" alt="">
                            Help & Support
                        </div>
                    </div>
                </div>
                <div v-if="platform == 1">
                    <div class="atPresentDoctor mg sa">
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
                        <!-- <img style="width:100%;height:100%" src="@/assets/img/chatPage.png" alt=""> -->
                        <div class="user_content" ref="customerChat">

                        </div>
                        <div class="INP sa al">
                            <div class="INP_item al ju"><el-input placeholder="Type a message" v-model="customerInp"></el-input></div>
                            <div class="send_img al ju"><img class="cursor" src="@/assets/img/send.png" @click="customerSend" alt=""></div>
                        </div>
                    </div>
                </div>
                <div v-else-if="platform == 2" >
                    <div class="atPresentDoctor mg">
                        <div>Medical Record</div>
                        <div style="padding:13px 0">Date</div>
                        <div class="get_day flex">
                            <div class="day_time ju al">
                                <!-- day
                                <img class="min_arrow" src="@/assets/img/minarrow.png" alt=""> -->
                                <el-select v-model="day" placeholder="Day">
                                    <el-option v-for="(item,i) in daySelect" :key="i" :value="item"></el-option>
                                </el-select>
                            </div>
                            <div class="time al ju">
                                <!-- month
                                <img class="min_arrow" src="@/assets/img/minarrow.png" alt=""> -->

                                <el-select v-model="month" placeholder="Month" @change="chooseMonth">
                                    <el-option v-for="(item,i) in monthSelect" :key="i" :label="item.label" :value="item.value"></el-option>
                                </el-select>
                            </div>
                            <div class="time al ju">
                                <!-- year
                                <img class="min_arrow" src="@/assets/img/minarrow.png" alt=""> -->
                                <el-select v-model="years" placeholder="Year">
                                    <el-option v-for="(item,i) in yearsSelect" :key="i" :value="item"></el-option>
                                </el-select>
                            </div>
                        </div>
                        <div style="padding:25px 0 10px 0">Details</div>
                        <div class="textarea">
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div class="button sb tc">
                            <div class="save ju cursor al">Save</div>
                            <div class="sb tc">
                                <div class="submit ju cursor al">Submit</div>
                                <div><img class="clipImg cursor" src="@/assets/img/clip.png" alt=""></div>
                            </div>
                        </div>
                    </div>
                    <div class="chat mg">
                        <div class="wrap_message">
                            <div class="message_item" ref="vetChat"></div>
                        </div>
                        <div class="INP sa al">
                            <div class="INP_item al ju"><el-input placeholder="Type a message" v-model="vetInp"></el-input></div>
                            <div class="send_img al ju"><img class="cursor" @click="vetSend" src="@/assets/img/send.png" alt=""></div>
                        </div>
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
            userDetailMessage: {},
            years: '',
            yearsSelect: [],
            day: '',
            daySelect: [],
            month: '',
            monthSelect: [ 
                { label: 'Jan', value: '1' }, 
                { label: 'Feb', value: '2' }, 
                { label: 'Mar', value: '3' }, 
                { label: 'Apr', value: '4' }, 
                { label: 'May', value: '5' }, 
                { label: 'Jun', value: '6' }, 
                { label: 'Jul', value: '7' }, 
                { label: 'Aug', value: '8' }, 
                { label: 'Sep', value: '9' }, 
                { label: 'Oct', value: '10' }, 
                { label: 'Nov', value: '11' }, 
                { label: 'Dec', value: '12' }, 
            ],
            customerInp: '',
            vetInp: ""
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
        this.callToDoctor = this.callTo
        this.userDetailMessage = this.userDetail
        this.getDay()
        this.listens()
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
        getDay () {
            // let month = new Date().getMonth() + 1      //获取月份
            // let Day = new Date(2021,month,0).getDate()//  获取每月天数
            for (let i=1;i<=31;i++) {
                this.daySelect.push(i)
            }
            for (let i=1;i<10;i++) {
                this.yearsSelect.push('202' + i)
            }
        },
        chooseMonth (val) {
            this.judge_month = val
            let Day = new Date(2021,this.judge_month,0).getDate()//  获取每月天数
            this.daySelect = []
            for (let i=1;i<=Day;i++) {
                this.daySelect.push(i)
            }
            if (this.day > this.daySelect.length) {
                this.day = this.daySelect.length
            }
        },
        
        customerSend () {
            this.createdCustomerMessage()
            let data = {
                type: "danmu",
                value: this.customerInp
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: data.value,                  // 消息内容
                to: '322_2',                          // 接收消息对象（用户id）
                chatType: 'singleChat',                  // 设置为单聊                        
                success: function (id, serverMsgId) {
                    console.log('send private text Success');  
                }, 
                fail: function(e){
                    // 失败原因:
                    // e.type === '603' 被禁言
                    // e.type === '605' 群组不存在
                    // e.type === '602' 不在群组或聊天室中
                    // e.type === '504' 撤回消息时超出撤回时间
                    // e.type === '505' 未开通消息撤回
                    // e.type === '506' 没有在群组或聊天室白名单
                    // e.type === '503' 未知错误
                    console.log("Send private text error");  
                }
            });
            this.$conn.send(msg.body);
        },
        createdCustomerMessage () {                 //客户输入内容并且发送
            var name = document.createElement('div')
            var msg = document.createElement("span")
            name.innerHTML = this.userDetailMessage.userName
            name.style.margin = 'auto'
            name.style.width = '95%'
            name.style.textAlign = 'end'
            name.style.transform = `rotateY(${ 180 + 'deg'})`
            
            msg.innerHTML = this.customerInp
            msg.style.background = "rgb(47,187,240)"
            msg.style.borderRadius = '12px 12px 0px 12px'
            msg.style.padding = '3px 10px'
            msg.style.marginLeft = "10px"
            msg.style.display = 'inline-block'
            msg.style.transform = `rotateY(${ 180 + 'deg' })`
            
            this.$refs.customerChat.appendChild(name)
            this.$refs.customerChat.appendChild(msg)
            if (msg.offsetWidth >= 350) {
                msg.style.display = 'inline-block'
                msg.style.width = '80%'
                msg.style.wordBreak = 'break-word';
            }
        },

        listens () {
            console.log(1)
            let that = this
            this.$conn.listen({
                onTextMessage: function ( e ) {
                    console.log("对方发来消息", e)
                    that.createItem(e)
                },    //收到文本消息
            });
        },
        
        createItem (data) {
            var wrap = document.createElement('div')
            var name = document.createElement('div')
            var msg = document.createElement("span")
            wrap.style.width = '100%'
            wrap.style.transform = `rotateY(${ 180 + 'deg' })`

            name.innerHTML = data.from
            name.style.margin = 'auto'
            name.style.width = '95%'
            // name.style.transform = `rotateY(${ 180 + 'deg'})`
            name.style.marginBottom = '5px'

            msg.innerHTML = data.data
            msg.style.background = "rgb(47,187,240)"
            msg.style.borderRadius = '0px 12px 12px 12px'
            msg.style.padding = '3px 10px'
            msg.style.marginLeft = "10px"
            msg.style.display = 'inline-block'
            // msg.style.transform = `rotateY(${ 180 + 'deg'})`
            if (localStorage.getItem("platform") == 2) {
                this.$refs.vetChat.appendChild(wrap)
            } else if (localStorage.getItem("platform") == 1) {
                this.$refs.customerChat.appendChild(wrap)
            }
            
            wrap.appendChild(name)
            wrap.appendChild(msg)
            
            if (msg.offsetWidth >= 350) {
                msg.style.display = 'inline-block'
                msg.style.width = '80%'
                msg.style.wordBreak = 'break-word';
            }
        },

        createdVetMessage () {                                    //兽医输入内容并且发送
            var name = document.createElement('div')
            var msg = document.createElement("span")
            name.innerHTML = this.userDetailMessage.userName
            name.style.margin = 'auto'
            name.style.width = '95%'
            name.style.textAlign = 'end'
            name.style.transform = `rotateY(${ 180 + 'deg' })`
            
            msg.innerHTML = this.vetInp
            msg.style.background = "rgb(47,187,240)"
            msg.style.borderRadius = '12px 12px 0px 12px'
            msg.style.padding = '3px 10px'
            msg.style.marginLeft = "10px"
            msg.style.display = 'inline-block'
            msg.style.transform = `rotateY(${ 180 + 'deg' })`
            
            this.$refs.vetChat.appendChild(name)
            this.$refs.vetChat.appendChild(msg)
            if (msg.offsetWidth >= 350) {
                msg.style.display = 'inline-block'
                msg.style.width = '80%'
                msg.style.wordBreak = 'break-word';
            }
        },
        vetSend () {
            this.createdVetMessage()
            let data = {
                type: "danmu",
                value: this.vetInp
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: data.value,                  // 消息内容
                to: '430_1',                          // 接收消息对象（用户id）
                chatType: 'singleChat',                  // 设置为单聊                        
                success: function (id, serverMsgId) {
                    console.log('send private text Success');  
                }, 
                fail: function(e){
                    // 失败原因:
                    // e.type === '603' 被禁言
                    // e.type === '605' 群组不存在
                    // e.type === '602' 不在群组或聊天室中
                    // e.type === '504' 撤回消息时超出撤回时间
                    // e.type === '505' 未开通消息撤回
                    // e.type === '506' 没有在群组或聊天室白名单
                    // e.type === '503' 未知错误
                    console.log("Send private text error");  
                }
            });
            this.$conn.send(msg.body);
        },

        
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

