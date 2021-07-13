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
                    <div :class="['friend_item al bold', { 'f-act':i == sendFromIM }]" v-for="(item,i) in message" :key="i" @click="changeWindow(i)">
                        <div class="adverse_img ju"><img :src="item.userDetail.userImage" alt=""></div>
                        <div>{{item.userDetail.userName}}</div>
                        <!-- <div class="newMsg tc" v-show="newData">1</div> -->
                    </div>
                </div>
                <div class="chat_ui">
                    <div class="showMSG">
                        <div class="message_item noBar" id="CHAT" ref="showMsgTop">
                            <div>
                                <div :class="['msg_item flex', { flexEnd: item.type == 1 }]" 
                                    v-for="(item,i) in messageList" :key="i">
                                    <div class="fromImg ju"><img v-show="item.type == 2" :src="headImage" alt=""></div>
                                    <div :class="['msg_child', { mySend: item.type == 1 }, 
                                        { theySend: item.type == 2 }]"
                                    >{{item.value}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="inpMessage al">
                        <div class="Input al">
                            <input type="text" class="width100" v-model="adminInp" placeholder="Type a message" @keydown.enter="send">
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
            // messageList: [],
            sendFromIM: "",
            adminInp: '',
            headImage: ''
        }
    },
    created () {
       
    },
    mounted () {
        this.initRecord()
    },
    watch: {
        message: {
            handler (val) {
                if (val) {
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
        }
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
    },
    methods: {
        changeWindow (key) {
            this.sendFromIM = key
            this.$store.commit("setUser", {
                    key: "fromIM",
                    value: key
                })
            this.messageList = this.message[key].messageList
            this.headImage = this.message[key].userDetail.userImage
            this.$nextTick(() => {
                this.$refs.showMsgTop.scrollTop = 10000
            })
        },
        saveRecord (val) {
            this.$nextTick(() => {
                this.$refs.showMsgTop.scrollTop = 10000
            })
        },
        initRecord () {
            if (localStorage.getItem('message')) {
                this.message = JSON.parse(localStorage.getItem('message'))
            }
        },
        send () {
            if (this.adminInp) {
                this.message[this.sendFromIM].messageList.push({
                    type: 1,
                    value: this.adminInp
                })
                let data = {
                    type: "fromAdmin",
                    value: this.adminInp,
                    key: this.userDetail,
                    userId: this.sendFromIM.split('a')[0],
                    platform: localStorage.getItem('platform')
                }
                let id = this.$conn.getUniqueId();                 // 生成本地消息id
                let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
                msg.set({
                    msg: JSON.stringify(data),                // 消息内容
                    to: this.sendFromIM,                // 接收消息对象（用户id）
                    chatType: 'singleChat',                  // 设置为单聊    
                    ext: {
                        
                    },                    
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
            border-radius: 50%;
            background: red;
            color: white;
            width: 15px;
            height: 15px;
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
        margin-top: 12px;
        display: inline-block;
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
</style>