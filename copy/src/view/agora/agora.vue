<style lang="less" scoped>
@import "@/less/css.less";
.agora {
    width: 100%;
    overflow: hidden;
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
        @media screen and (max-width: 1300px) {
            width: 75px;
            height: 85px;
        }
        @media screen and (max-width: 564px) {
            width: 50px;
            height: 60px;
        }
    }
    .showVideo {
        background: black;
        flex: 8;
        height: 100%;
        overflow: auto;
        // position: relative;
        .video_wrap {
            height: 100%;
            position: relative;
        }
        // height: 100%;
        .video_child {
            position: absolute;
            width: 123px;
            height: 150px;
            // border: solid 1px green;
            bottom: 20px;
            right: 20px;
            z-index: 100;
            // background: black;
            // box-shadow: 0 0 5px #999;
            @media screen and (max-width: 1600px) {
                bottom: 45px;
            }
            @media screen and (max-width: 1200px) {
                bottom: 65px;
            }
        }
        .video_parent {
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0px;
            right: 0px;
            z-index: 100;
            // border:solid red 1px;
            // background: black;
        }
        .answer {
            position: absolute;
            width: 385px;
            bottom: 40px;
            left: 50%;
            transform: translate(-50%,0);
            z-index: 600;
            @media screen and (max-width: 1600px) {
                bottom: 65px;
            }
            @media screen and (max-width: 1200px) {
                bottom: 85px;
            }
            @media screen and (max-width: 930px) {
                width: 100%;
                bottom: 85px;
            }
        }
    }
    .doctorMessage_wrap {
        width: 454px;
        height: 100%;
        position: relative;
        transition: 0.3s;
        @media screen and (max-width: 1300px) {
            width: 370px;
        }
        @media screen and (max-width: 660px) {
            display: none;
        }
        .drawer {
            position: absolute;
            left: -15px;
            height: 109px;
            overflow: hidden;
            width: 15px;
            top: 10px;
            z-index: 600;
            user-select: none;
            transition: 0.1s;
        }
    }
    // .drawer {
    //     @media screen and (max-width: 1500px) {
    //         width: 15px !important;
    //         left: -30px !important;
    //         transform: translate(100%,0) !important;
    //     }
    // }
    .box1 {
        width: 0;
        height: 0;
        border: solid 15px;
        border-color:  transparent rgb(245, 243, 243) transparent  transparent;
        transform: translate(-50%,50%);
    }
    .box2 {
        width: 15px;
        height: 60px;
        // transform: translate(100%,0);
        background: rgb(245, 244, 244);
    }
    .box3 {
        width: 0;
        height: 0;
        border: solid 15px;
        border-color: transparent rgb(243, 240, 240) transparent transparent;
        transform: translate(-50%,-50%);
    }
    .doctorMessage {
        // flex: 2;
        width: 450px;
        height: 100%;
        overflow: auto;
        transition: 0.3s;
        @media screen and (max-width: 1200px) {
            transform: translate(-40px,-75px) scale(0.8);
            height: calc(100% + 150px);
        }
        // @media screen and (min-width: 1600px) and (max-width: 2000px) {
        //     width: 26%;
        // }
        // @media screen and (min-width: 1200px) and (max-width: 1600px) {
        //     width: 29%;
        // }
    }
    .Drawer {
        width: 0 !important;
        transition: 0.3s;
        // transform: translate(100%,0) !important;
    }
    .Drawer1 {
        transition: 0.3s;
        opacity: 0;
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
            overflow: auto;
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
        border-radius: 30px;
        overflow: hidden;
        input {
            border: none;
            outline: none;
            width: 100%;
            height: 100%;
            padding: 12px 5px;
            font-size: 20px;
            background: #F3F3F3;
        }
    }
    .send_img {
        width: 15%;
        img {
            width: 60px;
            height: 60px;
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
            color: white;
            overflow: hidden;
        }
        .clipImg {
            padding-left: 15px;
        }
    }
    .submit {
        width: 100px;
        border-radius: 20px;
        overflow: hidden;
        color: white;
    }
    .MESSAGE {
        height: calc(100% );    
        @media screen and (max-width: 660px) {
            display: none;
        }
    }
    .cus_message {
        height: calc(100% - 123px);
        overflow: auto;
        width: 100%;
    }
    .wrap_message {
        width: 100%;
        height: 300px;
        overflow: auto;
        transition: 0.2s;
    }
    .message_item {
        width: 100%;
        height: 100%;
    }
    .arrow_drawer {
        width: 15px;
        transition: 0.3s !important;
    }
    .rotate {
        transform: rotateZ(180deg);
        transition: 0.3s;
    }
    .msgItem {
        margin-top: 15px;
        >div {
            max-width: 80%;
            // border: solid red 1px;
            display: inline-block;
            margin-left: 10px;
        }
    }
    .mySend {
        background: rgb(47,187,240);
        border-radius: 12px 12px 0px 12px;
        padding: 3px 10px;
        word-wrap: break-word;
    }
    .Mright {
        margin-right: 10px;
        margin-left: 0px !important;
    }
    .adverse {
        background: #EEEEEE;
        border-radius: 0px 12px 12px 12px;
        padding: 3px 10px;
        word-wrap: break-word;
    }
    .video_fun {
        width: 30%;
        margin: 0 8.5%;
        img {
            width: 100%;
        }
    }
    .video_fun img {
        @media screen and (max-width: 930px) {
            width: 62px;
            height: 62px;
        }
    }
    .z_index {
        z-index: 101 !important;
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
                    <agoraMsg></agoraMsg>
                </div>
            </div>
            <div class="showVideo">
                <div class="video_wrap">
                    <div class="answer flex">
                        <div class="cursor video_fun"><img src="@/assets/img/answer_audeo.png" alt=""></div>
                        <div class="cursor video_fun"><img src="@/assets/img/answer_video.png" alt=""></div>
                        <div class="cursor video_fun" @click="removeStream"><img src="@/assets/img/answer_phone.png" alt=""></div>    <!--//结束通话 -->
                    </div>
                    <!-- <video :class="['video_parent']" autoplay width="400px" height="400px" id="video" ref="video"></video>
                    <video :class="['video_child']" autoplay id="localVideo"></video> -->

                    <div :class="[{'video_parent': type, 'video_child': !type, 'z_index': !type}]" autoplay id="player_a1" ref="video"></div>
                    <div :class="[{'video_parent': !type, 'video_child': type, 'z_index': type}]" autoplay id="player_a2" @click="type = !type"></div>
                </div>
            </div>
            <div :class="[ 'doctorMessage_wrap', { Drawer: drawer } ]">
                <div class="drawer cursor" @click="DRAWER">
                    <div class="box1"></div>
                    <div class="box2 al ju">
                        <img :class="[ 'arrow_drawer', {rotate: drawer} ]" src="@/assets/img/arrow_drawer.png" alt="">
                    </div>
                    <div class="box3"></div>
                </div>
                <div :class="['doctorMessage noBar', { Drawer: drawer },{ Drawer1: drawer } ]">
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
                            <div ref="customerChat" class="user_content noBar">
                                <div ref="CmsgHeight" >
                                    <div v-for="(item,i) in messageList" :key="i" 
                                        :class="['msgItem',{'flexEnd': item.type==1},]">
                                        <div :class="[ { Mright: item.type == 1 } ]">
                                            <div :class="[ { flexEnd: item.type == 1 } ]">{{userDetailMessage.userName}}</div>
                                            <div :class="[ {mySend: item.type == 1},{ adverse: item.type == 2 } ]">{{item.value}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="INP sa al">
                                <div class="INP_item al ju">
                                    <input placeholder="Type a message" v-model="customerInp" @keydown.enter="customerSend" />
                                </div>
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
                                    <el-select v-model="day" placeholder="Day" :disabled="!disabled">
                                        <el-option v-for="(item,i) in daySelect" :key="i" :value="item"></el-option>
                                    </el-select>
                                </div>
                                <div class="time al ju">
                                    <el-select v-model="month" placeholder="Month" @change="chooseMonth" :disabled="!disabled">
                                        <el-option v-for="(item,i) in monthSelect" :key="i" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                                </div>
                                <div class="time al ju">
                                    <!-- year
                                    <img class="min_arrow" src="@/assets/img/minarrow.png" alt=""> -->
                                    <el-select v-model="years" placeholder="Year" :disabled="!disabled">
                                        <el-option v-for="(item,i) in yearsSelect" :key="i" :value="item"></el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div style="padding:25px 0 10px 0">Details</div>
                            <div class="textarea">
                                <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
                            </div>
                            <div class="button sb tc">
                                <div class="save ju cursor al">
                                    <el-button type="primary" :disabled="disabled" @click="editPetMedicalRecord" class="width100">Edit</el-button>
                                </div>
                                <div class="sb tc">
                                    <div class="submit ju cursor al">
                                        <el-button type="warning" @click="addPetMedicalRecord" :disabled="!disabled" class="width100">Submit</el-button>
                                    </div>
                                    <div><img class="clipImg cursor" src="@/assets/img/clip.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                        <div class="chat mg">
                            <div class="wrap_message noBar" ref="vetChat">
                                <div class="message_item" ref="VmsgHeight">
                                    <div>
                                        <div v-for="(item,i) in messageList" :key="i" 
                                            :class="['msgItem',{'flexEnd': item.type==1},]">
                                            <div :class="[ { Mright: item.type == 1 } ]">
                                                <div :class="[ { flexEnd: item.type == 1 } ]">{{userDetailMessage.doctorName}}</div>
                                                <div :class="[ {mySend: item.type == 1},{ adverse: item.type == 2 } ]">{{item.value}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="INP sa al">
                                <div class="INP_item al ju">
                                    <input placeholder="Type a message" v-model="vetInp" @keydown.enter="vetSend"/>
                                </div>
                                <div class="send_img al ju"><img class="cursor" @click="vetSend" src="@/assets/img/send.png" alt=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { addMetting, delMetting, PetMedicalRecord, updatePetMedicalRecord, s_online, getAgoraToken, docGoodsId, order, orderDetail } from "@/axios/request.js"
export default {
    data () {
        return {
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
            vetInp: "",
            drawer: false,
            msgRecord: {},
            content: '',
            recordDate: '',
            disabled: true,

            type:true,      // 切换摄像头
            remoteUsers : {},
        }
    },
    mounted () {
        // if (!this.rtc.client) {
        //     this.rtc.client = this.$V.createClient({mode: "live", codec: "h264"})
        // }
        if (localStorage.getItem('platform') == 1) {
            this.joinAgora()
        } else {
            this.joinAgora2()
        }
        
    },
    created () {
        this.callToDoctor = this.callTo
        this.userDetailMessage = this.userDetail
        this.getDay()
        let D = new Date().toLocaleDateString().split('/')
        this.years = D[0]
        this.month = D[1]
        this.day = D[2]
    },
    computed: {
        remoteStream () { return this.$store.state.app.remoteStream },
        localStream () { return this.$store.state.app.localStream },
        callTo () {return this.$store.state.user.callTo},
        userDetail () {return this.$store.state.user.userDetail},
        caller () { return this.$store.state.user.caller },
        callerIM () { return this.$store.state.user.callerIM },
        mettingId: {
            get () { return this.$store.state.user.mettingId },
            set (val) {
                this.$store.commit("setUser", {
                    key: "mettingId",
                    value: val
                })
            },
        },
        messageList: {
            get () { return this.$store.state.user.messageList },
            set (val) {
                this.$store.commit("setUser", {
                    key: "messageList",
                    value: val
                })
            },
        },
        petId: {
			get () { return this.$store.state.user.petId },
			set (val) {
				this.$store.commit("setUser", {
                    key: "petId",
                    value: val
                })
			}
		},
        pet () {return this.$store.state.user.pet},
        rtc: {
			get () { return this.$store.state.user.rtc },
			set (val) {
				this.$store.commit("setUser", {
                    key: "rtc",
                    value: val
                })
			}
		},
    },
    watch: {
        messageList: {
            handler (val) {
                if (val) {
                    this.messageList = val
                    this.saveRecord(val)
                }
            },
        },
        callerIM: {
            handler (val) {
                if (val) {
                    this.initRecord()
                }
            },
            immediate: true
        }
    },
    methods: {
        joinAgora () {
            if (localStorage.getItem('bookingDoc')) {
                let bookingAgo = JSON.parse(localStorage.getItem('bookingDoc'))
                let docId = {
                    userId: bookingAgo.booking.bookingDoctorId
                }
                docGoodsId(docId).then(msg => {
                    let data = {
                        expirationTime: msg.data.data.min,
                        userId: localStorage.getItem('userId'),
                        roomNumber: 'petavi_' + localStorage.getItem('sroom')
                    }
                    getAgoraToken(data).then(res => {
                        console.log(res,'token111')
                        if (res.data.rtnCode == 200) {
                            this.$store.dispatch('initRtc', {
                                token: res.data.data,
                                uid: localStorage.getItem('userId') * 1,
                                channel: data.roomNumber,
                                appId: 'e65091c05b1b4403b3130bfce4f9e7a1',
                                rtc: this.$V
                            })
                        }
                    })
                })
                let segmented = {
                    orderId: bookingAgo.booking.orderId,
                    goodsId: bookingAgo.booking.goodsId
                }
                orderDetail(segmented).then(res => {
                    console.log(res,'第二次扣费')
                    localStorage.removeItem('bookingDoc')
                })
            } else {
                let docId = {
                    userId: this.callTo.doctorId
                }
                docGoodsId(docId).then(res => {
                    let data = {
                        expirationTime: res.data.data.min,
                        userId: localStorage.getItem('userId'),
                        roomNumber: 'petavi_' + localStorage.getItem('sroom')
                    }
                    getAgoraToken(data).then(msg => {
                        if (res.data.rtnCode == 200) {
                            this.$store.dispatch('initRtc', {
                                token: msg.data.data,
                                uid: localStorage.getItem('userId') * 1,
                                channel: data.roomNumber,
                                appId: 'e65091c05b1b4403b3130bfce4f9e7a1',
                                rtc: this.$V
                            })
                        }
                    })
                    let addorder = {
                        userId: localStorage.getItem('userId'),
                        doctorId: this.callTo.doctorId,
                        doctorType: 2,
                        goodsId: res.data.data.id
                    }
                    order(addorder).then(msg => {
                        console.log(msg,'生成订单')
                        localStorage.setItem('order_1',JSON.stringify({orderId: msg.data.data.id, goodsId: res.data.data.id}))
                    })
                })
            }
        },
        //医生加入视频
        joinAgora2 () {
            let data = {
                expirationTime: 99999999,
                userId: localStorage.getItem('userId'),
                roomNumber: 'petavi_' + localStorage.getItem('sroom')
            }
            getAgoraToken(data).then(res => {
                console.log(res,'医生加入')
                if (res.data.rtnCode == 200) {
                    this.$store.dispatch('initRtc', {
                        token: res.data.data,
                        uid: localStorage.getItem('userId') * 1,
                        channel: data.roomNumber,
                        appId: 'e65091c05b1b4403b3130bfce4f9e7a1',
                        rtc: this.$V
                    })
                }
            })
            this.addConfr()
        },
        removeStream () {
            this.$store.dispatch('removeStream', { rtc: this.$V })
            if (localStorage.getItem('platform') == 2) {
                let data = {
                    userId: localStorage.getItem('userId'),
                    platform: localStorage.getItem('platform')
                }
                s_online(data).then(res => {
                    // console.log(res,'在线')
                })
            }
            // this.$router.back()
            if (this.content == '' && localStorage.getItem('platform') == 2) {    //医生挂断添加record
                this.addPetMedicalRecord()
            }
            this.dele()
        },
        dele () {
            let data = {
                webId: this.mettingId
            }
            delMetting(data).then(res => {
                console.log(res,'删除')
            })
        },
        addConfr () {
			let D = new Date
			var date = D.toLocaleDateString()
			let detail = {
				petName: this.pet.name,
				petId: this.petId,                 
				caller: this.caller,
				callTo: this.userDetail,
				createdTime: date,
                roomNumber: 'petavi_' + localStorage.getItem('sroom')
			}
			let data = {
				'jo': [{
					userId: this.caller.userId + 'A1',
					doctorId: this.userDetail.userId + 'A2',
					password: JSON.stringify(detail),
				}]
			}
			addMetting(data).then(res => {
				this.mettingId = res.data.data[0].id
			})
		},
        addPetMedicalRecord () {
            let D = new Date()
            let time = D.toTimeString().split(' ')[0]
            this.disabled = false
            this.recordDate = this.years + '-' + this.month + '-' + this.day + ' ' + time.split(':')[0] + ':' + time.split(':')[1]
            let data = {
                userId: this.caller.userId,
                doctorId: localStorage.getItem('userId'),
                petId: this.petId,
                content: this.content,
                createdAt: this.recordDate,
                medicineIds: 2
            }
            PetMedicalRecord(data).then(res => {
                console.log(res,'tianjiarecord')
                if (res.data.rtnCode == 200) {
                    this.disabled = false
                } else {

                }
            }).catch(e =>{
                console.log(e)
            })
        },
        editPetMedicalRecord () {
            this.disabled = true
        },
        saveRecord (val) {
            let that = this
            var record = {
                [that.callerIM]:{
                    messageList: val
                }
            }
            this.msgRecord = record
            localStorage.setItem('msgRecord',JSON.stringify(this.msgRecord))
            console.log(record,localStorage.getItem('msgRecord'))
        },
        initRecord () {
            let msgRecord = localStorage.getItem('msgRecord')
            if (msgRecord) {
                this.msgRecord = JSON.parse(msgRecord)

                if (this.msgRecord[this.callerIM]) {
                    this.messageList = this.msgRecord[this.callerIM].messageList
                }
            }
        },
        DRAWER () {
            this.drawer = !this.drawer
        },
        endCall () {
            this.removeStream()

            // window.eMedia.mgr.exitConference()
            // let id = {
            //     webId: this.mettingId
            // }
            // delMetting(id).then(res => {})
            // let data = {
            //     userId: localStorage.getItem('userId'),
            //     platform: localStorage.getItem('platform')
            // }
            // s_online(data).then(res => {
            //     console.log(res,'在线')
            // })
            // this.$router.back()
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
            if (this.customerInp == '') {
                this.$message({
                    type: 'info',
                    message: 'The content cannot be empty!'
                })
            } else {
                this.messageList.push({
                    type: 1,
                    value: this.customerInp
                })
                let data = {
                    type: "danmu",
                    value: this.customerInp,
                    key: this.userDetailMessage,
                    platform: localStorage.getItem('platform')
                }
                let id = this.$conn.getUniqueId();                 // 生成本地消息id
                let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
                msg.set({
                    msg: JSON.stringify(data),                // 消息内容
                    to: JSON.stringify(this.callToDoctor.doctorId) + 'A2',     
                    // to: '322_2',                     // 接收消息对象（用户id）
                    chatType: 'singleChat',                  // 设置为单聊    
                    ext: {
                        
                    },                    
                    success: function (id, serverMsgId) {
                        console.log('send private text Success',id,serverMsgId);  
                    }, 
                    fail: function(e){
                        console.log(e)
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
                this.$nextTick(() => {
                    this.$refs.customerChat.scrollTop = this.$refs.CmsgHeight.scrollHeight
                    this.customerInp = ''
                })
                
            }
        },
        vetSend () {
            console.log(this.caller,666)
            if (this.vetInp == '') {
                this.$message({
                    type: 'info',
                    message: 'The content cannot be empty!'
                })
            } else {
                this.messageList.push({
                    type: 1,
                    value: this.vetInp
                })
                let data = {
                    type: "danmu",
                    value: this.vetInp,
                    key: this.userDetailMessage,
                    platform: localStorage.getItem('platform')
                }
                let id = this.$conn.getUniqueId();                 // 生成本地消息id
                let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
                msg.set({
                    msg: JSON.stringify(data),                  // 消息内容
                    to: this.caller.userId + 'A1',                          // 接收消息对象（用户id）
                    chatType: 'singleChat',                  // 设置为单聊    
                    ext: {
                        
                    },                    
                    success: function (id, serverMsgId) {
                        console.log('send private text Success',id,serverMsgId);  
                    }, 
                    fail: function(e){
                        console.log(e,66666)
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
                this.$nextTick(() => {
                    this.vetInp = ''
                    this.$refs.vetChat.scrollTop = this.$refs.VmsgHeight.scrollHeight
                })
                this.$conn.send(msg.body);
                
            }
            
        },

        
    }
}
</script>

