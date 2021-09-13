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
                <div class="friendsList noBar">
                    <div :class="['friend_item al bold', { 'f-act':i == sendFromIM }]" v-for="(item,i) in message" :key="i" 
                        @click="changeWindow(i,item.userDetail.userId,item.user)">
                        <div class="adverse_img ju">
                            <img v-if="item.userDetail.userImage" :src="item.userDetail.userImage" alt="">
                            <img style="height:100%;" v-else :src="default_img" alt="">
                        </div>
                        <div>{{item.userDetail.userName}}</div>
                        <div class="newMsg tc" v-show="now_player != item.userDetail.userId && item.msg != 0">{{item.msg}}</div>
                        <div class="dele_item" @click.stop="delete_item(i,item.userDetail.userId,item.user)" >
                            <img class="cursor" v-if="sendFromIM == item.user"
                            style="height: 100%;" src="@/assets/img/delete1.png" alt="">
                            <img class="cursor" v-else
                            style="height: 100%;" src="@/assets/img/delete.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="chat_ui">
                    <div class="showMSG">
                        <div class="message_item noBar" id="CHAT" ref="showMsgTop" v-show="sendFromIM">
                            <div>
                                <div :class="['msg_item flex', { flexEnd: item.type == 1 }]" 
                                    v-for="(item,i) in messageList" :key="i">

                                    <div class="msg_T width100 tc" v-if="item.type == 3">{{item.time.split(' ')[0] == Today? 
                                    'Today': item.time.split(' ')[0]}} {{item.time.split(' ')[1]}}</div>

                                    <div class="fromImg ju" v-show="item.type != 3">
                                        <img v-show="item.type == 2" :src="headImage" v-if="headImage" alt="">
                                        <img style="height:100%;" v-else :src="default_img" alt="">
                                    </div>

                                    <div :class="['msg_child', { mySend: item.type == 1 }, { theySend: item.type == 2 }, 
                                        { cursor: item.msg_type != 'text' && item.msg_type != 'jpg' && item.msg_type != 'png' && 
                                            item.fail != 'fail' }]" @click="filesave(item.url)">
                                        <div v-if="item.msg_type == 'text'">{{item.value}}</div>

                                        <div v-else-if="item.msg_type == 'jpg' || item.msg_type == 'png' " class="file_img ju al">
                                            <img style="height: 100%;" v-if="item.value" :src="item.value" alt="">
                                            <div v-else v-loading='true'></div>
                                        </div>

                                        <div v-else-if="item.msg_type && item.msg_type != 'jpg' && item.msg_type != 'png'" class="file_zip flex">
                                            <div class="file_name">
                                                {{item.fileName}}
                                            </div>
                                            <img v-if="item.type == 1" class="file_zip_img" src="@/assets/img/file-zip1.png" alt="">
                                            <img v-else class="file_zip_img" src="@/assets/img/file-zip.png" alt="">
                                        </div>

                                        <div :class="['msg_time', { gray:item.type == 2, white: item.type == 1 }]" 
                                        v-show="item.type != 3 && item.msg_type !== ''">{{item.time}} {{item.APM}}</div>

                                        <div class="loading_file" v-loading='item.location == location && item.type == 1 && file_loading'></div>
                                        <div class="loading_file ju al" v-show="item.fail == 'fail'">
                                            
                                            <el-tooltip class="item" effect="dark" content="Upload Failed!" placement="top">
                                                <img class="fail_img_h" src="@/assets/img/fail.png" alt="">
                                            </el-tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="inpMessage al" v-show="sendFromIM">
                        <div class="Input al">
                            <el-input type="text" class="width100" v-model="adminInp" :disabled="disabled"
                            placeholder="Type a message" @keyup.enter.native="send"></el-input>
                        </div>
                        <div class="add al">
                            <label for="file_img" class="al">
                                <input type="file" id="file_img" v-show="false" @change="file_send" :class="['cursor']">
                                <img :class="['cursor']" src="@/assets/img/clip.png" alt="">
                            </label>
                        </div>
                        <div class="add al">
                            <img :class="['cursor']" @click="send" src="@/assets/img/msg_send.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import {conn, WebIM} from "@/assets/js/websdk.js"
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
            Today: '',
            pk: 0,
            location: 0,
            file_loading: false
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
        if (this.$route.params.key) {
            this.im_player = this.$route.params.key
            this.sendFromIM = this.$route.params.key
            this.now_player = this.$route.params.id
            this.$store.commit("deMsg", {
                key: "message",
                value: this.$route.params.key
            })
            this.disabled = false
            this.$store.commit("setUser", {
                key: "fromIM",
                value: this.$route.params.key
            })
            this.messageList = this.message[this.$route.params.key].messageList
            this.headImage = this.message[this.$route.params.key].userDetail.userImage
        }
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
        filesave (url) {
            // console.log(url)
            window.location.href = url
        },
        changeWindow (key,userId,imUser) {
            // console.log(key,userId,imUser)
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
            let mask_dot = JSON.parse(localStorage.getItem('mask_dot'))
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
                        APM: '',
                        msg_type: 'text'
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
                    APM: hour >= 12 && minute >= 0? 'PM':'AM',
                    msg_type: 'text'
                })
                let data = {
                    type: "fromAdmin",
                    value: this.adminInp,
                    key: this.userDetail,
                    userId: this.sendFromIM.split('a')[0],
                    platform: localStorage.getItem('platform'),
                    time: D.getHours() + ':' + D.getMinutes(),
                    APM: hour >= 12 && minute >= 0? 'PM':'AM',

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
        file_send () {
            let D = new Date()
            let T = D.getTime()
            let that = this
            let hour = D.getHours()
            let minute = D.getMinutes()
            var id = this.$conn.getUniqueId();                   // 生成本地消息id
            var msg = new this.$WebIM.message('file', id);        // 创建文件消息
            var input = document.getElementById('file_img');  // 选择文件的input
            var file = this.$WebIM.utils.getFileUrl(input);      // 将文件转化为二进制文件
            // console.log(file)
            this.location = T
            this.file_loading = true
            if (T - localStorage.getItem('msgTime') >= 180000 && localStorage.getItem('msgTime') !== null) {
                if (file.data.size <= 10485760) {
                    this.timeSend()
                }
                this.message[this.sendFromIM].messageList.push({
                    type: 3,
                    value: '',
                    userId: localStorage.getItem('userId'),
                    time:this.Today + ' ' + D.getHours() + ':' + D.getMinutes(),
                    APM: '',
                    msg_type: 'text'
                })
                localStorage.setItem('msgTime', T )
            } else {
                if (localStorage.getItem('msgTime') === null) {
                    this.message[this.sendFromIM].messageList.push({
                        type: 3,
                        value: '',
                        userId: localStorage.getItem('userId'),
                        time:this.Today + ' ' + D.getHours() + ':' + D.getMinutes(),
                        APM: '',
                        msg_type: 'text'
                    })
                }
                localStorage.setItem('msgTime', T)
            }
            var obj = {
                type: 1,
                value: file.url,
                time: D.getHours() + ':' + D.getMinutes(),
                APM: hour >= 12 && minute >= 0? 'PM':'AM',
                msg_type: file.filetype,
                fileName: file.filename,
                userId: localStorage.getItem('userId'),
                url: file.url,
                location: T
            }
            var f_obj = {
                type: 1,
                value: file.url,
                time: D.getHours() + ':' + D.getMinutes(),
                APM: hour >= 12 && minute >= 0? 'PM':'AM',
                msg_type: file.filetype,
                fileName: file.filename,
                userId: localStorage.getItem('userId'),
                url: file.url,
                location: T,
                fail: 'fail'
            }
            if (file.data.size > 10485760) {
                this.message[this.sendFromIM].messageList.push(f_obj)
                that.file_loading = false
                this.$nextTick(() => {
                    this.$refs.showMsgTop.scrollTop = 10000
                })
                return false
            } else {
                this.message[this.sendFromIM].messageList.push(obj)
            }
            //自定义发送消息类型
            var id = this.$conn.getUniqueId();                 // 生成本地消息id
            var msg = new this.$WebIM.message('file', id);   // 创建自定义消息
            var customEvent = "flie";             // 创建自定义事件
            var customExts = {'file': file.url};                         // 消息内容，key/value 需要 string 类型
            msg.set({
                file: file,
                to: this.sendFromIM,                          // 接收消息对象（用户id）
                customEvent,
                customExts,
                ext: {
                    fileName: file.filename,
                    file_length: file.data.size,
                    detail: this.userDetail,
                    platform: localStorage.getItem('adminPlatform'),
                    userId: localStorage.getItem('adminUserId'),
                    time: D.getHours() + ':' + D.getMinutes(),
                    APM: hour >= 12 && minute >= 0? 'PM':'AM',
                    localTime: T,
                    fileType: file.filetype
                },                                 // 消息扩展
                roomType: false,
                flashUpload: this.$WebIM.flashUpload,
                success: function (id, serverMsgId) {
                    that.file_loading = false
                },
                fail: function(e){
                    // console.log(e,'fail')
                    that.file_loading = false
                    // console.log(that.message[that.sendFromIM].messageList.reverse()[0])
                    // that.message[that.sendFromIM].messageList.reverse()[0].fail = 'fail'
                }
            });
            this.$conn.send(msg.body);
            this.$nextTick(() => {
                this.$refs.showMsgTop.scrollTop = 10000
            })
        },
        delete_item (key,userId,imUser) {
            this.$confirm('Are you sure to log outAre you sure you want to delete the conversation? The chat history will be cleared after deletion!', 'Attention', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.im_player = ''
                this.now_player = 0
                this.sendFromIM = ''
                this.$store.commit("setUser", {
                    key: "fromIM",
                    value: ''
                })

                this.messageList = []
                this.headImage = []
                this.$nextTick(() => {
                    this.$store.commit('deleteMSG',{ key: 'message', value: key })
                })
            }).catch (e => {
                console.log(e)
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .chatRoom {
        flex: 10;
        height: calc(100% - 10px);
    }
    .chat_admin {
        // border: solid 1px;
        background: @content;
        // box-shadow: 0 1px 1px 2px rgb(170, 169, 169);
    }
    .wrap {
        width: 100%;
        height: 100%;
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
        overflow: auto;
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
            transition: 0.2s;
        }
        .dele_item {
            position: absolute;
            right: 10px;
            width: 25px;
            height: 25px;
            transform: translate(0,-50%);
            transition: 0.2s;
            opacity: 0;
            top: 50%;
        }
    }
    .friend_item:hover {
        background: rgb(218, 218, 218);
    }
    .friend_item:hover .newMsg {
        right: 40px;
    }
    .friend_item:hover .dele_item {
        opacity: 0.9;
    }
    .f-act {
        background: @logout !important;
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
        .loading_file {
            position: absolute;
            top: 50%;
            left: -60px;
            width: 40px;
            height: 40px;
            transform: translate(0, -50%);
        }
    }
    .fail_img_h {
        height: 70%;
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
    .file_img {
        width: 200px;
        height: 125px;
        border-radius: 8px;
        overflow: hidden;
    }
    .file_zip {
        width: 170px;
        // display: block;
        margin-top: 5px;
        .file_name {
            min-width: 125px;
            text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
            display: -webkit-box;
            -webkit-line-clamp: 2;/*规定超过两行的部分截断*/
            -webkit-box-orient: vertical;
            overflow : hidden; 
            word-break: break-all;/*在任何地方换行*/
        }
        .file_zip_img {
            width: 45px;
            height: 45px;
            margin-left: 10px;
        }
    }
    .pointer {
        pointer-events: none !important;
        cursor: default;
        opacity: 0.6;
    }
</style>