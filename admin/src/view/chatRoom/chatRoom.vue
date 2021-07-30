<template>
    <div class="chatRoom">
        <div class="wrap">
            <div class="al chat_admin">
                <div class="al">
                    <img class="chatLogo" src="@/assets/img/chatLogo.png" alt="">
                </div>
                <div class="explan bold"> Help & Suppot </div>
            </div>
            <div class="chat_item flex">
                <div class="friendsList">
                    <div :class="['friend_item al bold', { 'f-act':i == sendFromIM }]" v-for="(item,i) in message" :key="i" @click="changeWindow(i,item.userDetail.userId,item.user)">
                        <div class="adverse_img ju">
                            <img v-if="item.userDetail.userImage" :src="item.userDetail.userImage" alt="">
                            <img style="height:100%;" v-else :src="default_img" alt="">
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
                                            <img v-show="item.type == 2" :src="headImage" v-if="headImage" alt="">
                                            <img style="height:100%;" v-else :src="default_img" alt="">
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
                            <img class="cursor" src="@/assets/img/clip.png" alt="">
                        </div>
                        <div class="add al">
                            <img class="cursor" @click="send" src="@/assets/img/Ball.png" alt="">
                            <img class="arrowon cursor" @click="send" src="@/assets/img/arrowon.png" alt="">
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
            message_record:[],
            disabled: true,
            sendFromIM: "",
            adminInp: '',
            headImage: '',
            now_player: 0,
            im_player: '',
            Today: ''
        }
    },
    created () {
        let message = {}
        if (localStorage.getItem('message')) {

        } else {
            localStorage.setItem('message',JSON.stringify(message))
        }
        var D = new Date()
        this.Today = D.toLocaleDateString()
    },
    mounted () {
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
                        userId: localStorage.getItem('userId'),
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
                    platform: localStorage.getItem('platform'),
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
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .chatRoom {
        flex: 10;
        height: 100%;
        
    }
    .chat_admin {
        // border: solid 1px;
        background: @content;
        // box-shadow: 0 1px 1px 2px rgb(170, 169, 169);
    }
    .wrap {
        width: 100%;
        height: 100%;
        // padding: 0 20px;
    }
    .chatLogo {
        width: 40px;
        margin-right: 7px;
    }
    .chat_item {
        height: calc(100% - 59px);
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
        padding: 5px 10px;
        border: solid rgb(218, 217, 217) 1px;
    }
    .add {
        position: relative;
        .arrowon {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-77%,-50%);
            width: 19px;
            height: 23px;
        }
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
</style>