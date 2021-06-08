<template>
    <div class="test">
        <div class="flex">
            <div class="login1">
                <div class="flex">
                    <el-form>
                        <el-form-item>
                            <el-input v-model="user1"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="pwd1"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <p>uuid: {{IMuser.uuid}}</p>
                            <el-button class="width100" type="primary" @click="login1">登录</el-button>
                            <el-button class="width100" type="primary" @click="logout">登出</el-button>

                            <el-button type="info" @click="send">发送消息</el-button>
                            <el-button type="info" @click="call">拨打电话</el-button>
                            <el-button type="info" >接听电话</el-button>
                            <el-button type="info" >拒接电话</el-button>
                            
                        </el-form-item>
                    </el-form>
                </div>
                
            </div>
            <div class="login2 flex">
                <div>
                    <el-form>
                        <el-form-item>
                            <el-input v-model="user2"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="pwd2"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <p>uuid: {{IMuser.uuid}}</p>
                            <el-button class="width100" type="primary" @click="login2">登录</el-button>
                            <el-button class="width100" type="primary" @click="logout">登出</el-button>
                            <el-button type="info" >发送消息</el-button>
                            <el-button type="info" >拨打电话</el-button>
                            <el-button type="info" @click="acceptCall">接听电话</el-button>
                            <el-button type="info" @click="endCall">挂断电话</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
        

        <video id="localVideo"></video>
        <video id="video"></video>
    </div>
</template>

<script>
export default {
    data () {
        return {
            user1:"430_1",
            pwd1: "123456",
            user2: "322_2",
            pwd2: "123456",
        }
    },
    computed: {
        IMuser () { return this.$store.state.user.IMuser }
    },
    created () {
        this.message()
    },
    methods: {
        message () {
            // let msg = new WebIM.message('txt', id);
            // msg.set(option);                //消息内容option，下面会有详细介绍
            // msg.setChatType('groupChat');   //用于设置当前聊天模式为单聊、群聊（groupChat）、聊天室（chatRoom），不设置默认为单聊

            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: 'message content',                  // 消息内容
                to: '322_2',                          // 接收消息对象（用户id）
                chatType: 'singleChat',                  // 设置为单聊
                ext: {
                    // key: value,
                    // key2: {
                    //     key3: value2
                    // }
                },                                  //扩展消息
                success: function (id, serverMsgId) {
                    console.log('send private text Success',id,serverMsgId);  
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

        endCall () {
            this.$rtcCall.endCall()
        },
        acceptCall () {
            this.$rtcCall.acceptCall()
        },
        call () {
            var config = {
                push: false, // 对方(app端)不在线时是否推送
                timeoutTime: 30000, // 超时时间
                txtMsg: 'I gave you a video call.', // 给对方发送的消息
                pushMsg: 'user is calling you' //推送内容
            };
            this.$rtcCall.caller = 'mengyuanyuan'; // 指定呼叫方名字
            this.$rtcCall.makeVideoCall("322_2",null,true,true,config);
        },
        send () {
            let data = {
                type: "danmu",
                value: "哈哈哈"
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: data,                  // 消息内容
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
        login1 () {
            var that = this
            var options = { 
                user: this.user1,
                pwd: this.pwd1,
                appKey: this.$WebIM.config.appkey,
                success (res) {
                    console.log(res)
                    that.$store.commit("setUser", { key: 'IMuser', value: res.user })
                }
            };
            this.$conn.open(options);
        },
        login2 () {
            var that = this
            var options = { 
                user: this.user2,
                pwd: this.pwd2,
                appKey: this.$WebIM.config.appkey,
                success (res) {
                    console.log(res)
                    that.$store.commit("setUser", { key: 'IMuser', value: res.user })
                }
            };
            this.$conn.open(options);
        },
        logout () {
            this.$conn.close()
            this.$store.commit("setUser", { key: 'IMuser', value: {} })
        }
    }
}
</script>

<style lang="less" scoped>
    .test {
        border: solid 1px;
        flex: 10;
        height: 900px;
    }
    .login1 {
        width: 50%;
        border: solid blue 1px;
        height: 100%;
    }
    .login2 {
        width: 50%;
        border: solid rgb(238, 255, 1) 1px;
        height: 100%;
    }
    video {
        border:solid;
    }
</style>