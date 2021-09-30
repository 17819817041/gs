<style lang="less" scoped>
    @import "@/less/css.less";
    .chatPage {
        flex: 10;
        height: 100%;
    }
    .chat_title {
        background: #FAFAFA;
        font-size: 23px;
        box-shadow: 0px 3px 3px 0px #D0D0D0; 
        @media screen and (max-width: 564px) {
            font-size: 15px;
        }
    }
    .chat_img {
        padding: 0 10px;
        img{
            width: 32px;
            @media screen and (max-width: 564px) {
                width: 25px;
            }
        }
    }
    .chat_content {
        height: calc(100% - 93px);
        padding: 5px 15px;
        overflow: auto;
    }
    .msg_item_wrap {
        height: 100%;
        overflow: auto;
    }
    .inpMessage {
        padding: 5px 10px;
        border: solid rgb(240, 239, 239) 1px;
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
    .msg_item {
        padding: 5px 10px;
        
    }
    .msg_child {
        max-width: 80%;
        min-width: 75px;
        display: inline-block;
        margin-bottom: 20px;
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
    .msg_T {
        font-size: 12px;
        color: gray;
        margin-bottom: 30px;
    }
    .chatLogo {
        width: 35px;
        height: 35px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 12px;
    }

    .file_zip {
        width: 200px;
        // display: block;
        padding-top: 10px;
        margin-top: 15px;
        position: relative;
        margin-bottom: 20px;
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
        .file_zip_child {
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
    .file_img {
        width: 220px;
        height: 125px;
        position: relative;
        padding-bottom: 25px !important;
        margin-bottom: 20px;
        .file_img_wrap {
            width: 220px;
            height: 95px;
            border-radius: 8px;
            overflow: hidden;
        }
        .file_img_wrap img {
            height: 100%;
            border-radius: 8px;
        }
        .file_img_child {
            position: absolute;
            bottom: 5px;
            right: 5px;
            font-size: 12px;
        }
    }
    .WHITE {
        background: white !important;
        padding: 0 !important;
        margin: 0 !important;
    }
</style>

<template>
    <div class="chatPage">
        <div class="chat_title bold flex al">
            <div class="chat_img"><img src="@/assets/img/chatLogo.png" alt=""></div>
            <div>Chat with Admin</div>
        </div>
        <div class="chat_content">
            <div class="msg_item_wrap noBar" ref="Cus">
                <div v-for="(item,i) in adminList['admin'].messageList" :key="i" :class="[{ 'flexEnd':item.type == 1 }, 'flex' ]">
                    <div class="chatLogo" v-show="item.type == 2 && item.userId == userId">
                        <img style="height: 100%;" src="@/assets/img/admin_img.png" alt="">
                    </div>
                    <div class="msg_T width100 tc" v-if="item.type == 3 && item.userId == userId">{{item.time.split(' ')[0] == Today? 
                        'Today': item.time.split(' ')[0]}} {{item.time.split(' ')[1]}}
                    </div>
                    <div v-else-if="item.msg_type && item.msg_type != 'jpg' && item.msg_type != 'png'" 
                        :class="['file_zip flex', { mySend: item.type == 1 }, { theySend: item.type == 2 }]">
                        <div class="file_name">{{item.fileName}}</div>
                        <img v-if="item.type == 1" class="file_zip_img" src="@/assets/img/file-zip.png" alt="">
                        <img v-else class="file_zip_img" src="@/assets/img/file-zip1.png" alt="">
                        <div :class="['file_zip_child', { gray:item.type == 2, white: item.type == 1 }]" v-show="item.type != 3">{{item.time}} {{item.APM}}</div>

                        <div class="loading_file" v-loading='item.location == location && item.type == 1 && file_loading'></div>
                        <div class="loading_file ju al" v-show="item.fail == 'fail'">
                            <el-tooltip class="item" effect="dark" content="Upload Failed!" placement="top">
                                <img class="fail_img_h" src="@/assets/img/fail.png" alt="">
                            </el-tooltip>
                        </div> 
                    </div>

                    <!-- <div v-else-if="item.msg_type == 'jpg' || item.msg_type == 'png' " :class="['file_img ju al', { mySend: item.type == 1 }, { theySend: item.type == 2 }]">
                        <div class="file_img_wrap">
                            <img v-if="item.value" :src="item.value" alt="">
                            <div v-else v-loading='true'></div>
                        </div>
                        <div :class="['file_img_child', { gray:item.type == 2, white: item.type == 1 }]" v-show="item.type != 3">{{item.time}} {{item.APM}}</div>
                    </div> -->
                    <div v-else-if="item.msg_type == 'jpg' || item.msg_type == 'png' " :class="['file_img ju al WHITE', { mySend: item.type == 1 }, { theySend: item.type == 2 }]">
                        <div class="file_img_wrap flexEnd">
                            <img v-if="item.value" :src="item.value" alt="">
                            <div v-else v-loading='true'></div>
                        </div>
                    </div>

                    <div :class="['msg_child', { mySend: item.type == 1 }, 
                        { theySend: item.type == 2 },]" v-if="item.userId == userId && !item.msg_type && item.type !=3"
                        >{{item.value}}
                        <div :class="['msg_time', { gray:item.type == 2, white: item.type == 1 }]" v-show="item.type != 3">{{item.time}} {{item.APM}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="inpMessage al">
            <div class="Input al">
                <input type="text" v-model="customerInp" class="width100" placeholder="Type a message" @keydown.enter="send">
            </div>
            <div class="add al">
                <label for="file_img" class="al">
                    <input type="file" id="file_img" v-show="false" @change="getFile">
                    <img class="cursor" src="@/assets/img/clip.png" alt="">
                </label>
            </div>
            <div class="add al">
                <img class="cursor" @click="send" src="@/assets/img/msg_send.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { file } from "@/axios/request.js"
export default {
    data () {
        return {
            customerInp: '',
            list: [],
            userId: localStorage.getItem('userId'),
            Today: '',
            location: 0,
            file_loading: false
        }
    },
    created () {
        var adminList = {
            'admin': {
                messageList: [
                    // { type: 1, value: "star",userId: '486' },
                    // { type: 2, value: "12123" },
                ]
            },
        }
        var newsList = []
        if (localStorage.getItem('adminList')) {

        } else {
            localStorage.setItem('adminList',JSON.stringify(adminList))
        }
        if (localStorage.getItem('newsList')) {
            
        } else {
            localStorage.setItem('newsList',JSON.stringify(newsList))
        }
        var D = new Date()
        this.Today = D.toLocaleDateString()
    },
    mounted () {
        this.initRecord()  
    },
    watch: {
        adminList: {
            handler (val) {
                if (val) {  
                    this.saveRecord()
                }
            }
        },
        newMsg_dot: {
            handler (val) {
                if (val) {
                    this.$store.commit('setUser', { key: 'newMsg_dot', value: false })
                    localStorage.setItem('new_msg', {boo: false, value: localStorage.getItem('userId')})
                }
            },
            immediate: true
        }
    },
    computed: {
        adminList: {
            get () { return this.$store.state.user.adminList },
            set (val) {
                this.$store.commit("setUser", {
                    key: "adminList",
                    value: val
                })
            },
        },
        userDetail () {return this.$store.state.user.userDetail},
        newMsg_dot: {
            get () { return this.$store.state.user.newMsg_dot },
            set (val) {
                this.$store.commit('setUser', { key: 'newMsg_dot', value: val })
            }
        }
    },
    methods: {
        getFile (e) { 
            console.log(e)
            this.dealImg(e.target.files[0],(img) => {
                var formData = new FormData();
                formData.append('file', img);
                file(formData).then(res => {
                    if (res.data.rtnCode == 200) {
                        this.file_send(res.data.data) 
                    } else {
                        
                    }
                }).catch(e => {
                    this.$message({
                        type: 'error',
                        message: 'Picture is too large or formatted incorrectly!'
                    })
                })
            })
        },
        file_send (img_url) {
            let D = new Date()
            let T = D.getTime()
            let that = this
            let hour = D.getHours()
            let minute = D.getMinutes()
            var id = this.$conn.getUniqueId();                   // 生成本地消息id
            var msg = new this.$WebIM.message('file', id);        // 创建文件消息
            var input = document.getElementById('file_img');  // 选择文件的input
            var file = this.$WebIM.utils.getFileUrl(input);      // 将文件转化为二进制文件
            this.location = T
            this.file_loading = true
            if (T - localStorage.getItem('msgTime') >= 180000 && localStorage.getItem('msgTime') !== null) {
                if (file.data.size <= 10485760) {
                    this.timeSend()
                }
                this.adminList['admin'].messageList.push({
                    type: 3,
                    value: '',
                    userId: localStorage.getItem('userId'),
                    time:this.Today + ' ' + D.getHours() + ':' + D.getMinutes(),
                    APM: ''
                })
                localStorage.setItem('msgTime', T )
            } else {
                if (localStorage.getItem('msgTime') === null) {
                    this.adminList['admin'].messageList.push({
                        type: 3,
                        value: '',
                        userId: localStorage.getItem('userId'),
                        time:this.Today + ' ' + D.getHours() + ':' + D.getMinutes(),
                        APM: ''
                    })
                }
                localStorage.setItem('msgTime', T)
            }
            var obj = {
                type: 1,
                // value: file.url,
                value: img_url,
                time: D.getHours() + ':' + D.getMinutes(),
                APM: hour >= 12 && minute >= 0? 'PM':'AM',
                msg_type: file.filetype,
                fileName: file.filename,
                userId: localStorage.getItem('userId'),
                // url: file.url,
                url: img_url,
                location: T
            }
            var f_obj = {
                type: 1,
                // value: file.url,
                value: img_url,
                time: D.getHours() + ':' + D.getMinutes(),
                APM: hour >= 12 && minute >= 0? 'PM':'AM',
                msg_type: file.filetype,
                fileName: file.filename,
                userId: localStorage.getItem('userId'),
                // url: file.url,
                url: img_url,
                location: T,
                fail: 'fail'
            }
            if (file.data.size > 10485760) {
                this.adminList['admin'].messageList.push(f_obj)
                that.file_loading = false
                this.$nextTick(() => {
                    this.$refs.Cus.scrollTop = 100000
                })
                return false
            } else {
                this.adminList['admin'].messageList.push(obj)
            }
            //自定义发送消息类型
            var id = this.$conn.getUniqueId();                 // 生成本地消息id
            var msg = new this.$WebIM.message('file', id);   // 创建自定义消息
            var customEvent = "flie";             // 创建自定义事件
            var customExts = {'file': file.url};                         // 消息内容，key/value 需要 string 类型
            msg.set({
                file: file,
                to: 'admin',                          // 接收消息对象（用户id）
                customEvent,
                customExts,
                ext: {
                    fileName: file.filename,
                    file_length: file.data.size,
                    detail: this.userDetail,
                    platform: localStorage.getItem('platform'),
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
                    that.file_loading = false
                }
            });
            this.$conn.send(msg.body);
            this.$nextTick(() => {
                this.$refs.Cus.scrollTop = 100000
            })
        },
        kl () {    //须先加入聊天室
            var options = {
                queue: 'admin', //需特别注意queue属性值为大小写字母混合，以及纯大写字母，会导致拉取漫游为空数组，因此注意将属性值装换为纯小写
                isGroup: false,
                count: 100,
                success: function(res){
                    console.log(res) //获取拉取成功的历史消息
                },
                fail: function(e){
                    console.log(e,321)
                }
            }
            this.$WebIM.conn.fetchHistoryMessages(options)
        },
        saveRecord (val) {
            this.$nextTick(() => {
                this.$refs.Cus.scrollTop = 10000
            })
        },
        initRecord () {
            if (localStorage.getItem('adminList') || localStorage.getItem('newsList')) {
                if (localStorage.getItem('adminList')) {
                    this.adminList = JSON.parse(localStorage.getItem('adminList'))
                } else {
                    this.adminList = []
                }
                
                this.list = JSON.parse(localStorage.getItem('newsList'))
                this.$nextTick(() => {
                    this.$refs.Cus.scrollTop = 10000006
                })
            }
        },
        send () {
            if (this.customerInp) {
                let D = new Date()
                let T = D.getTime()
                if (T - localStorage.getItem('msgTime') >= 180000 && localStorage.getItem('msgTime') !== null) {
                // if (T - localStorage.getItem('msgTime') >= 3000 && localStorage.getItem('msgTime') !== null) {
                    this.timeSend()
                    this.adminList['admin'].messageList.push({
                        type: 3,
                        value: '',
                        userId: localStorage.getItem('userId'),
                        time:this.Today + ' ' + D.getHours() + ':' + D.getMinutes(),
                        APM: ''
                    })
                    localStorage.setItem('msgTime', T )
                } else {
                    if (localStorage.getItem('msgTime') === null) {
                        this.adminList['admin'].messageList.push({
                            type: 3,
                            value: '',
                            userId: localStorage.getItem('userId'),
                            time:this.Today + ' ' + D.getHours() + ':' + D.getMinutes(),
                            APM: ''
                        })
                    }
                    localStorage.setItem('msgTime', T)
                }
                let hour = D.getHours()
                let minute = D.getMinutes()
                this.adminList['admin'].messageList.push({
                    type: 1,
                    value: this.customerInp,
                    userId: localStorage.getItem('userId'),
                    time: D.getHours() + ':' + D.getMinutes(),
                    APM: hour >= 12 && minute >= 0? 'PM':'AM'
                })
                localStorage.setItem('newsList',JSON.stringify(this.list))
                let data = {
                    type: "needHelp",
                    value: this.customerInp,
                    key: this.userDetail,
                    platform: localStorage.getItem('platform'),
                    time: D.getHours() + ':' + D.getMinutes(),
                    APM: hour >= 12 && minute >= 0? 'PM':'AM',
                    localTime: T
                }
                let id = this.$conn.getUniqueId();                 // 生成本地消息id
                let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
                msg.set({
                    msg: JSON.stringify(data),                // 消息内容
                    to: 'admin',                         // 接收消息对象（用户id）
                    chatType: 'singleChat',                  // 设置为单聊    
                    ext: {
                        
                    },                    
                    success: function (id, serverMsgId) {
                        console.log('send private text Success',id,serverMsgId);  
                    }, 
                    fail: function(e){
                        console.log(e)
                        console.log("Send private text error");  
                    }
                });
                this.$conn.send(msg.body);
                this.$nextTick(() => {
                    this.$refs.Cus.scrollTop = 10000
                })
                this.customerInp = ''
            } else {}
        },
        timeSend () {
            var D = new Date()
            var date = D.toLocaleDateString() + ' ' + D.getHours() + ':' + D.getMinutes()
            let data = {
                type: "needHelp_T",
                platform: localStorage.getItem('platform'),
                key: this.userDetail,
                time: date,
                localTime: D.getTime()
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: JSON.stringify(data),                // 消息内容
                to: 'admin',                     // 接收消息对象（用户id）
                chatType: 'singleChat',                  // 设置为单聊    
                ext: {},                    
                success: function (id, serverMsgId) {}, 
                fail: function(e){
                    console.log(e)
                    console.log("Send private text error");  
                }
            });
            this.$conn.send(msg.body);
        },
        // wenBen (file) {
        //     var allowType = {          //仅限文件
        //         'jpg': true,
        //         'gif': true,
        //         'png': true,
        //         'bmp': true,
        //         'zip': true,
        //         'txt': true,
        //         'doc': true,
        //         'pdf': true,
        //         'docx': true
        //     };
        //     if (file.filetype.toLowerCase() in allowType) {
        //         var option = {
        //             file: file,
        //             to: 'admin',                       // 接收消息对象
        //             chatType: 'singleChat',               // 设置单聊
        //             onFileUploadError: function () {      // 消息上传失败
        //                 console.log('onFileUploadError');
        //             },
        //             onFileUploadProgress: function (e) { // 上传进度的回调
        //                 console.log(666666)
        //             },
        //             onFileUploadComplete: function () {   // 消息上传成功
        //                 console.log('onFileUploadComplete');
        //             },
        //             success: function () {                // 消息发送成功
        //                 console.log('Success');
        //             },
        //             fail: function(e){
        //                 console.log("Fail");              //如禁言、拉黑后发送消息会失败
        //             },
        //             flashUpload: this.$WebIM.flashUpload,
        //             ext: {
        //                 file_length: file.data.size,
        //                 detail: this.userDetail,
        //                 platform: localStorage.getItem('platform'),
        //                 time: D.getHours() + ':' + D.getMinutes(),
        //                 APM: hour >= 12 && minute >= 0? 'PM':'AM',
        //                 localTime: T,
        //                 fileType: file.filetype
        //             }
        //         };
        //         msg.set(option);
        //         this.$conn.send(msg.body);
        //     }
        // }
    }
}
</script>

