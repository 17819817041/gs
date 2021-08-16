<style lang="less">
@import "@/less/css.less";
    .adminAgora {
        flex: 10;
        height: 100%;
        position: relative;
    }
    .adminFunction {
        width: 40%;
        // height: 100%;
        border: blue;
    }
    .mutual_video {
        width: 100%;
        // border: solid 1px red;
        // height: 50%;
        .mutual_video_item {
            width: 100%;
            height: 50%;
            border: solid 1px green;
            box-sizing: border-box;
            display: block;
        }
        .video {
            width: 50%;
            height: 300px;
            border: solid 1px black;
        }
    }
    .caller_callTo {
        width: 100%;
        // height: 50%;
    }
    .d_user {
        width: 50%;
        height: 100%;
    }



    .userDetails_wrap {
        min-width: 230px;
        width: 50%;
    }
    .patients_img_wrap {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        margin-top: 5px;
        border: solid 1px rgb(211, 208, 208);
    }
    .patients_img {
        height: 100%;
    }
    .personal_name {
        padding: 5px 0;
    }
    .address_img {
        width: 14px;
        height: 19px;
        margin-right: 8px;
    }
    .relationWay, .relation {
        padding: 10px 0px;
    }
    .message_list {
        width: 65%;
        margin: 10px auto;
    }
    .size15bl {
        font-size: 15px;
    }
    .const {
        width: 35%;
        padding-bottom: 7px;
        margin-left: 25%;
    }
    .event {
        // width: 65%;
        padding-bottom: 11px;
    }
    .personMore {
        width: 74%;
        span{
            color: #1976D2;
            font-size: 16px;
            text-decoration: underline;
            padding: 5px 20px 5px 0px;
        }
    }
    .my_account {
        width: 400px;
        display: flex;
        flex-direction: column;
    }
    .guardianDetails {
        
        padding: 5px 0 5px 20px;
    }
    .outLogo {
        width: 45%;
        height: 36px;
        border-radius: 15px;
        background: @logout;
        color: white;
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
    .myOperation{
        width: 30%;
        height: 50px;
        padding: 0 10px;
    }
    .about_me {
        width: 90%;
        padding: 30px 0 28px 0;
        // @media screen and (max-width: 1300px) {
        //     transform: scale(0.9,0.6);
        // }
    }
    .outLogo {
        width: 100%;
        height: 36px;
        border-radius: 15px;
        background: @logout;
        color: white;
    }
    .myName {
        width: 70%;
        padding: 0 5px;
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
    .star_e {
        width: 90%;
        background: @ThemeColor;
        border-radius: 12px;
        padding: 15px 0;
        color: white;
    }
    .leave_r {
        width: 90%;
        background: @denger;
        border-radius: 12px;
        padding: 15px 0;
        color: white;
        margin: 25px auto;
    }
    .record_show {
        width: 90%;
        border-radius: 8px;
        border: solid 3px #EAEAEA;
        flex: 10;
        margin: 35px auto;
        padding: 0 20px;
        .record_title {
            padding: 20px 0;
            color: gray;
            font-size: 17px;
        }
        .record_date, .Details {
            color: #8D8D8D;
            font-size: 14px;
        }
    }
    .data_item {
        padding: 7px;
    }
    .Details_item {
        padding: 20px 0 5px 0;
    }
    .details_content {
        padding: 7px;
        max-width: 75%;
        word-wrap: wrap;
    }
    .i_pet {
        height: 100%;
        overflow: auto;
    }
    .confr_video {
        height: 100%;
        overflow: auto;
        padding: 25px 10px;
    }
    .my_account {
        height: 100%;
        overflow: auto;
    }
    #player_a1 {
        height: 400px;
    }
    .head_image {
        width: 100px;
        height: 100px;
        border: solid gray 1px;
        border-radius: 50%;
        overflow: hidden;
    }
    .doctor_name {
        font-size: 19px;
        color: #212121;
        padding: 5px 0;
    }
    .xian {
        border-left: 1px #DCDDE0 solid;
        border-right: 1px #DCDDE0 solid;
    }
    .reviews {
        width: 74%;
        margin: auto;
        margin-top: 27px;
        @media screen and (max-width:1250px) {
            transform: scale(0.9);
        }
    }
    .introduce {
        width: 74%;
        margin: 25px auto;
        font-size: 14;
        color: #656565;
        max-height: 63px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 3;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
    }

    .wrap_mask {
        width: 1200px;
        height: 600px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: gray 0px 5px 7px 2px;
        background: white;
    }
    .chatLogo {
        width: 40px;
        margin-right: 7px;
    }
    .chat_item {
        height: calc(100% - 53px);
        background: white;
    }
    .friendsList {
        width: 270px;
        border: solid 1px rgb(185, 181, 181);
    }
    .friend_item {
        padding: 10px 0;
        // background: @logout;
        position: relative;
        .newMsg {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translate(0,-50%);
            border-radius: 15px;
            background: red;
            color: white;
            padding: 1px 10px;
            font-size: 12px;
        }
    }
    .f-act {
        background: @logout;
        color: white;
    }
    .chat_ui {
        flex: 10;
        height: 100%;
    }
    .SENDMSG {
        border: solid 1px rgb(207, 205, 205);
    }

    .inpMessage {
        padding: 2.5px 10px;
        border: solid rgb(218, 217, 217) 1px;
    }
    .add img {
        height: 36px;
        margin-left: 10px;
    }
    .Input {
        width: 100%;
        border: solid rgb(197, 195, 195) 1px;
        border-radius: 25px;
        background: @content;
        overflow: hidden;
        input {
            border: none;
            outline: none; 
            background: @content;
            height: 100%;
            padding: 10px;
        }
        input::placeholder {
            padding-left: 15px;
        }
    }
    .showMSG {
        height: calc(100% - 49px);
    }
    .message_item {
        height: 100%;
        overflow: auto;
    }
    .msg_item {
        padding: 5px 10px;
        margin-bottom: 20px;
    }
    .msg_child {
        max-width: 80%;
        min-width: 75px;
        margin-top: 12px;
        display: inline-block;
        position: relative;
        .msg_time {
            position: absolute;
            bottom: 5px;
            right: 5px;
            font-size: 12px;
        }
    }
    .gray {
        color: gray !important;
    }
    .mySend {
        background: #1976D2;
        border-radius: 12px 12px 0px 12px;
        padding: 3px 35px 30px 15px;
        word-wrap: break-word;
        color: white;
    }
    .theySend {
        background: #EEEEEE;
        border-radius: 0px 12px 12px 12px;
        padding: 3px 35px 30px 15px;
        word-wrap: break-word;
    }
    .adverse_img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 25px;
        img {
            height: 100%;
        }
    }
    .fromImg {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 20px 0 25px;
        img {
            height: 100%;
        }
    }
    .msg_T {
        font-size: 12px;
        color: gray;
    }
    .chat_admin {
        border: solid gray 1px;
    }
</style>
<template>
    <div class="adminAgora flex">
        <div class="wrap_mask" v-show="msg_to_cus" v-drag>
            <div class="al sb chat_admin">
                <div class="flex">
                    <div class="al">
                        <img class="chatLogo" draggable="false" src="@/assets/img/chatLogo.png" alt="">
                    </div>
                    <div class="explan bold"> Help & Suppot </div>
                </div>
                <div><img src="@/assets/img/delete.png" @click="cutDown_mask" draggable="false" @mousedown.stop @mousemove.stop class="cursor" alt=""></div>
            </div>
            <div class="chat_item flex" @mousedown.stop @mousemove.stop>
                <div class="friendsList">
                    <div :class="['friend_item al bold', { 'f-act':i == sendFromIM }]" v-for="(item,i) in message" :key="i" 
                    @click="changeWindow(i,item.userDetail.userId,item.user)">
                        <div class="adverse_img ju">
                            <img v-if="item.userDetail.userImage" draggable="false" :src="item.userDetail.userImage" alt="">
                            <img style="height:100%;" draggable="false" v-else :src="default_img" alt="">
                        </div>
                        <div>{{item.userDetail.userName}}</div>
                        <div class="newMsg tc" v-show="now_player != item.userDetail.userId && item.msg != 0">{{item.msg}}</div>
                    </div>
                </div>
                <div class="chat_ui">
                    <div class="showMSG">
                        <div class="message_item noBar" id="CHAT" ref="showMsgTop">
                            <div>
                                <div :class="['msg_item flex', { flexEnd: item.type == 1 }]" 
                                    v-for="(item,i) in messageList" :key="i">
                                        
                                        <div class="msg_T width100 tc" v-if="item.type == 3">{{item.time.split(' ')[0] == Today? 
                                        'Today': item.time.split(' ')[0]}} {{item.time.split(' ')[1]}}</div>

                                        <div class="fromImg ju" v-show="item.type != 3">
                                            <img v-show="item.type == 2" :src="headImage" v-if="headImage" draggable="false" alt="">
                                            <img style="height:100%;" v-else :src="default_img" draggable="false" alt="">
                                        </div>
                                        <div :class="['msg_child', { mySend: item.type == 1 }, 
                                            { theySend: item.type == 2 }]"
                                        >{{item.value}}
                                        <div :class="['msg_time', { gray:item.type == 2, white: item.type == 1 }]" v-show="item.type != 3">{{item.time}} {{item.APM}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="inpMessage al">
                        <div class="Input al">
                            <el-input type="text" class="width100" v-model="adminInp" :disabled="disabled"
                            placeholder="Type a message" @keyup.enter.native="send"></el-input>
                        </div>
                        <div class="add al">
                            <img class="cursor" src="@/assets/img/clip.png" draggable="false" alt="">
                        </div>
                        <div class="add al">
                            <img class="cursor" @click="send" src="@/assets/img/msg_send.png" draggable="false" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="adminFunction">
            <button @click="out">out</button>
        </div> -->
        <div class="i_pet noBar">
            <div class="logo_wrap">
                <img class="LOGO" src="@/assets/img/logo.png" alt="">
            </div>
            <Message></Message>
        </div>
        <div style="flex: 10" class="confr_video noBar">
            <div id="player_a1" class="flex"></div>
            <div class="caller_callTo flex">
                <div class="d_user">
                    <div class="guardianDetails mg size19">Guardian Details</div>
                    <div class="userDetails_wrap mg">
                        <div class="ju al patients_img_wrap mg">
                            <img class="patients_img" v-if="petAndUser.userHead" :src="petAndUser.userHead" alt="">
                            <i class=" el-icon-picture-outline Icon" style="font-size:40px;color:gray;" v-else></i>
                        </div>
                        <div class="size19 tc personal_name">{{petAndUser.userName}}</div>
                        <div class="address ju">
                            <div class="al">
                                <img class="address_img" src="@/assets/img/location.png" alt="">
                            </div>
                            <div class="size13">{{petAndUser.address}}</div>
                        </div>
                        <div class="ju">
                            <div><img @click="showMask(petAndUser,1)" class="relationWay cursor" src="@/assets/img/chat.png" alt=""></div>
                        </div>
                        <div class="message_list mg size15bl">
                            <div style="width:100%" class="flex al ts">
                                <div class="const">User ID</div>
                                <div class="event">{{petAndUser.userId}}</div>
                            </div>
                            <div style="width:100%" class="flex al ts">
                                <div class="const">Name</div>
                                <div class="event">{{petAndUser.userName}}</div>
                            </div>
                            <div style="width:100%" class="flex al ts">
                                <div class="const">Age</div>
                                <div class="event">{{petAndUser.age}}</div>
                            </div>
                            <div style="width:100%" class="flex al ts">
                                <div class="const">Location</div>
                                <div class="event">HK</div>
                            </div>
                            <div style="width:100%" class="flex al ts">
                                <div class="const">Mobile</div>
                                <div class="event">{{petAndUser.moble}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="personMore mg te flexEnd cursor"><span>More...</span></div>
                </div>
                <div class="d_user">
                    <div class="guardianDetails mg size19">Vet Details</div>
                    <div class="head_image mg al ju">
                        <img style="height:100%" :src="doctor.userImage" v-if="doctor.userImage" alt="">
                        <i class="el-icon-picture-outline" style="font-size:40px;color:gray" v-else></i>
                    </div>
                    <div class="doctor_name tc" v-if="doctor.doctorName">{{doctor.doctorName}}</div>
                    <div class="doctor_name tc" v-else>Name</div>
                    <div class="size15 tc">General Obstetrics </div>
                    <div class="relation ju">
                        <div class="cursor"><img @click="showMask(doctor,2)" src="@/assets/img/chat.png" alt=""></div>
                    </div>
                    <div class="reviews sb">
                        <div>
                            <div class="size12">{Experience}</div>
                            <div class="size13">
                                <span v-if="doctor.experience">{{doctor.experience}}</span>
                                <span v-else>0</span>
                                + years
                            </div>
                        </div>
                        <div class="xian"></div>
                        <div class="tc likes">
                            <div class="size12 al">Likes</div>
                            <div><span class="size13">{{doctor.totalLike}}</span><span class="size12"> ({{doctor.likingRate}})</span></div>
                        </div>
                        <div class="xian"></div>
                        <div style="text-align:end;width:70px">
                            <div class="size12">Reviews</div>
                            <div class="size13">230</div>
                        </div>
                    </div>
                    <div class="introduce text-overflow">
                        <span class="text-overflows" v-if="doctor.extend">
                            {{doctor.extend}}
                        </span>
                        <span v-else>No introduction!</span>
                    </div>
                    <div class="personMore mg te flexEnd cursor"><span>More...</span></div>
                </div>
            </div>
        </div>
        <div class="my_account noBar">
            <div>
                <div class="about_me mg sb">
                    <div class="myName al">
                        <div class="al">
                            <div class="userHead_img ju al">
                                <!-- <img class="userHead" src="@/assets/img/john.png" alt=""> -->
                                <img v-if="userDetailMessage.image" class="userHead" :src="userDetailMessage.image" alt="">
                                <i class="el-icon-picture-outline" v-else style="font-size:30px;color:gray"></i>
                            </div>
                            <div class="tc size14" v-if="userDetailMessage.name">{{userDetailMessage.name}}</div>
                            <div v-else class="tc" style="font-size:12px">No Name</div>
                        </div>
                        <div><img style="width:17px;height:22px;margin-left:5px" src="@/assets/img/information.png" alt=""></div>
                    </div>
                    <div class="myOperation al flexEnd">
                        <div class="outLogo size12 bold cursor al ju">Logout</div>
                    </div>
                </div>
                <div class="star_e bold tc mg white">
                    17:00 - 18:00
                </div>
                <div class="leave_r cursor bold tc white" @click="outRoom">
                    Leave the Room
                </div>
            </div>
            <div class="record_show">
                <div class="record_title">
                    Medical Record
                </div>
                <div class="record_date">
                    <div>Date</div>
                    <div class="data_item">{{date}}</div>
                </div>
                <div class="Details">
                    <div class="Details_item">Details</div>
                    <div class="details_content">
                        -----------------------------------------------------------------------------------------------
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getUserByPetId, getAgoraToken } from "@/axios/request.js"
export default {
    data () {
        return {
            petAndUser: {},
            date: '',
            doctor: {},

            message_record:[],
            disabled: true,
            sendFromIM: "",
            adminInp: '',
            headImage: '',
            now_player: 0,
            im_player: '',
            Today: '',
            pk: 0,
            msg_to_cus: false
        }   
    },
    created () {
        this.getUser()
        this.getToday()

        let message = {}
        if (localStorage.getItem('message')) {

        } else {
            localStorage.setItem('message',JSON.stringify(message))
        }
        var D = new Date()
        this.Today = D.toLocaleDateString()
    },
    mounted () {
        this.joinAgora()
        this.initRecord()
    },
    watch: {
        message: {
            handler (val) {
                if (val) {
                    if (this.im_player) {
                        if (val[this.im_player].userDetail.userId == this.now_player) {
                            this.$store.commit("deMsg", {
                                key: "message",
                                value: this.im_player
                            })
                        } else {

                        }
                    }
                    this.message = val
                    this.saveRecord(val)
                }
            },
            deep: true
        },
        messageList: {
            handler (val) {
                if (val) {
                    this.messageList = val
                }
            },
            deep: true
        },
    },
    computed: {
        userDetailMessage () { return this.$store.state.user.userDetail },
        message: {
            get () { return this.$store.state.user.message },
            set (val) {
                this.$store.commit("setUser", {
                    key: "message",
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
        userDetail () { return this.$store.state.user.userDetail },
        default_img () { return this.$store.state.user.default_img }
    },
    methods: {
        cutDown_mask () {
            this.msg_to_cus = false
        },
        showMask (item,platform) {
            // console.log(item)
            var obj = {
                type: 2,
                value: '',
                time: '',
                APM: ''
            }
            let from = item.userId + 'a' + platform
            if (this.message[from]) {
                // this.message[from].messageList.push(obj)
                // this.message[from].msg = 0
            } else {
                this.message[from] = {
                    user: from,
                    userDetail: item,
                    messageList: [ ],
                    msg: 0
                }
            }
            this.msg_to_cus = true
        },
        getToday () {
            var d = new Date()
            this.date = d.toDateString().split(' ')[2] + ' ' + d.toDateString().split(' ')[1] + ' ' + d.toDateString().split(' ')[3]
        },
        getUser () {
            let user = JSON.parse(localStorage.getItem('confr'))
            this.doctor = user.password.callTo
            console.log(user,user.password.petId)
            let data = {
                petId: user.password.petId
            }
            getUserByPetId(data).then(res => {
                console.log(res,'petAndUser')
                if (res.data.rtnCode == 200) {
                    this.petAndUser = res.data.data
                    this.$store.state.user.agoraPet = res.data.data
                }
            }).catch(e => {
                console.log(e)
                this.$message({
                    type: 'error',
                    message: "The query failed. The data has been deleted!"
                })
            })
        },
        joinAgora () {
            let data = {
                expirationTime: 99999999,
                userId: localStorage.getItem('adminUserId'),
                roomNumber: JSON.parse(localStorage.getItem('confr')).password.roomNumber
            }
            getAgoraToken(data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.$store.dispatch('initRtc', {
                        token: res.data.data,
                        uid: localStorage.getItem('adminUserId') * 1,
                        channel: data.roomNumber,
                        appId: 'e65091c05b1b4403b3130bfce4f9e7a1',
                        rtc: this.$V
                    })
                }
            })
        },
        outRoom () {
            this.$store.dispatch('removeStream', { rtc: this.$V })
            this.$router.back()
        },
        changeWindow (key,userId,imUser) {
            this.now_player = userId
            this.im_player = imUser
            this.$store.commit("deMsg", {
                key: "message",
                value: imUser
            })
            this.sendFromIM = key
            this.disabled = false
            this.$store.commit("setUser", {
                key: "fromIM",
                value: key
            })

            this.messageList = this.message[key].messageList
            this.headImage = this.message[key].userDetail.userImage
            this.$nextTick(() => {
                this.$refs.showMsgTop.scrollTop = 90000
            })
        },
        saveRecord (val) {
            this.$nextTick(() => {
                this.$refs.showMsgTop.scrollTop = 90000
            })
        },
        initRecord () {
            if (localStorage.getItem('message')) {
                this.message = JSON.parse(localStorage.getItem('message'))
            }
        },
        send () {
            if (this.adminInp) {
                let D = new Date()
                let T = D.getTime()
                if (T - localStorage.getItem('msgTime') >= 180000 && localStorage.getItem('msgTime') !== null) {
                    this.timeSend()
                    this.message[this.sendFromIM].messageList.push({
                        type: 3,
                        value: '',
                        userId: localStorage.getItem('adminUserId'),
                        time:this.Today + ' ' + D.getHours() + ':' + D.getMinutes(),
                        APM: ''
                    })
                    localStorage.setItem('msgTime', T )
                } else {
                    localStorage.setItem('msgTime', T)
                }
                let hour = D.getHours()
                let minute = D.getMinutes()
                this.message[this.sendFromIM].messageList.push({
                    type: 1,
                    value: this.adminInp,
                    time: D.getHours() + ':' + D.getMinutes(),
                    APM: hour >= 12 && minute >= 0? 'PM':'AM'
                })
                let data = {
                    type: "fromAdmin",
                    value: this.adminInp,
                    key: this.userDetail,
                    userId: this.sendFromIM.split('a')[0],
                    platform: localStorage.getItem('adminPlatform'),
                    time: D.getHours() + ':' + D.getMinutes(),
                    APM: hour >= 12 && minute >= 0? 'PM':'AM'
                }
                let id = this.$conn.getUniqueId();                 // 生成本地消息id
                let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
                msg.set({
                    msg: JSON.stringify(data),                // 消息内容
                    to: this.sendFromIM,                // 接收消息对象（用户id）
                    chatType: 'singleChat',                  // 设置为单聊    
                    ext: {},                    
                    success: function (id, serverMsgId) {
                        console.log('send private text Success');  
                    }, 
                    fail: function(e){
                        console.log(e)
                        console.log("Send private text error");  
                    }
                });
                this.$conn.send(msg.body);
                this.$nextTick(() => {
                    this.$refs.showMsgTop.scrollTop = 10000
                })
                this.adminInp = ''
            }
        },
        timeSend () {
            var D = new Date()
            var date = D.toLocaleDateString() + ' ' + D.getHours() + ':' + D.getMinutes()
            let data = {
                type: "admin_T",
                value: '',
                key: '',
                userId: this.sendFromIM.split('a')[0],
                platform: localStorage.getItem('platform'),
                time: date,
                APM: ''
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: JSON.stringify(data),                // 消息内容
                to: this.sendFromIM,                     // 接收消息对象（用户id）
                chatType: 'singleChat',                  // 设置为单聊    
                ext: {},                    
                success: function (id, serverMsgId) {
                    console.log('send private text Success',id,serverMsgId);  
                }, 
                fail: function(e){
                    console.log(e)
                    console.log("Send private text error");  
                }
            });
            this.$conn.send(msg.body);
        },
    }
}
</script>