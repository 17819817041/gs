<style lang="less" scoped>
    @import "@/less/css.less";
    .chatPage {
        flex: 10;
        height: 100%;
    }
    .chat_title {
        background: #FAFAFA;
        box-shadow: 0px 3px 3px 0px #D0D0D0; 
    }
    .chat_img {
        padding: 0 10px;
        img{
            width: 32px;
        }
    }
    .chat_content {
        height: calc(100% - 120px);
        padding: 5px 15px;
        overflow: auto;
    }
    .msg_item_wrap {
        height: 100%;
    }
    .inpMessage {
        padding: 5px 10px;
        border: solid rgb(240, 239, 239) 1px;
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
    .msg_item {
        padding: 5px 10px;
        
    }
    .msg_child {
        max-width: 80%;
        display: inline-block;
        margin-bottom: 20px;
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
</style>

<template>
    <div class="chatPage">
        <div class="chat_title flex al">
            <div class="chat_img"><img src="@/assets/img/chatLogo.png" alt=""></div>
            <h2>Chat with Admin</h2>
        </div>
        <div class="chat_content noBar" ref="Cus">
            <div class="msg_item_wrap">
                <div v-for="(item,i) in list" :key="i" :class="[{ 'flexEnd':item.type == 1 }]">
                    <div :class="['msg_child', { mySend: item.type == 1 }, 
                        { theySend: item.type == 2 },]"
                    >{{item.value}}</div>
                </div>
            </div>
        </div>
        <div class="inpMessage al">
            <div class="Input al">
                <input type="text" v-model="customerInp" class="width100" placeholder="Type a message" @keydown.enter="send">
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
</template>

<script>
export default {
    data () {
        return {
            customerInp: '',
            list: []
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
        if (localStorage.getItem('adminList')) {

        } else {
            localStorage.setItem('adminList',JSON.stringify(adminList))
        }
        
    },
    mounted () {
        this.initRecord()  
    },
    watch: {
        adminList: {
            handler (val) {
                if (val) {
                    val.admin.messageList.forEach(item => {
                        if ((item.userId == localStorage.getItem('userId'))) {
                            let arr  = []
                            arr.push(item)
                            let arr1 = arr.reverse()
                            this.list.push(arr1[0])
                        }
                    })
                    // this.adminList = val
                    this.saveRecord()
                }
            },
            deep: true,
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
        userDetail () {return this.$store.state.user.userDetail}
    },
    methods: {
        saveRecord (val) {
            localStorage.setItem('newsList',JSON.stringify(this.list))
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
                    this.$refs.Cus.scrollTop = 10000
                })
            }
        },
        send () {
            if (this.customerInp) {
                this.adminList['admin'].messageList.push({
                    type: 1,
                    value: this.customerInp,
                    userId: localStorage.getItem('userId')
                })
                let data = {
                    type: "needHelp",
                    value: this.customerInp,
                    key: this.userDetail,
                    platform: localStorage.getItem('platform')
                }
                let id = this.$conn.getUniqueId();                 // 生成本地消息id
                let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
                msg.set({
                    msg: JSON.stringify(data),                // 消息内容
                    to: 'admin',     
                    // to: '322_2',                     // 接收消息对象（用户id）
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
            } else {

            }
        }
    }
}
</script>

