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
                            <el-button type="info" @click="send1">发送消息</el-button>
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

        <div class="wrap" ref="vetChat">
        </div>
        <p>Google Calendar API Quickstart</p >
        <!--Add buttons to initiate auth sequence and sign out-->
        <button id="auth" ref="auth">Authorize</button>
        
        <button id="signout" ref="signout">Sign Out</button>
        <pre id="content"></pre>
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
        // this.message()
        this.listens()
    },
    mounted () {
        this.calander()
    },
    methods: {
        calander () {
            var CLIENT_ID = '628942639023-6eghdtqbgk8vvdj20tuc7l2708mshmd8.apps.googleusercontent.com';
            var API_KEY = 'AIzaSyBxDopi4KUZ1kiHesYsHzBZWSpG8XKdMV4';
            // Array of API discovery doc URLs for APIs used by the quickstart
            var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
            // Authorization scopes required by the API; multiple scopes can be
            // included, separated by spaces.
            var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

            // var authorizeButton = document.getElementById('auth');
            var authorizeButton = this.$refs.auth
            // var signoutButton = document.getElementById('signout');
            var signoutButton = this.$refs.signout
            function handleClientLoad() {
                gapi.load('client:auth2', initClient);
            }
            /**
           *  Initializes the API client library and sets up sign-in state
           *  listeners.
           */
          function initClient() {
            gapi.client.init({
              apiKey: API_KEY,
              clientId: CLIENT_ID,
              discoveryDocs: DISCOVERY_DOCS,
              scope: SCOPES
            }).then(function () {
              // Listen for sign-in state changes.
              gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

              // Handle the initial sign-in state.
              updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
              authorizeButton.onclick = handleAuthClick;
              signoutButton.onclick = handleSignoutClick;
            }, function(error) {
              appendPre(JSON.stringify(error, null, 2));
            });
          }
        /**
           *  Called when the signed in status changes, to update the UI
           *  appropriately. After a sign-in, the API is called.
           */
          function updateSigninStatus(isSignedIn) {
            if (isSignedIn) {
              authorizeButton.style.display = 'none';
              signoutButton.style.display = 'block';
              listUpcomingEvents();
            } else {
              authorizeButton.style.display = 'block';
              signoutButton.style.display = 'none';
            }
          }

          /**
           *  Sign in the user upon button click.
           */
          function handleAuthClick(event) {
            gapi.auth2.getAuthInstance().signIn();
          }

          /**
           *  Sign out the user upon button click.
           */
          function handleSignoutClick(event) {
            gapi.auth2.getAuthInstance().signOut();
          }
            /**
           * Append a pre element to the body containing the given message
           * as its text node. Used to display the results of the API call.
           *
           * @param {string} message Text to be placed in pre element.
           */
          function appendPre(message) {
            var pre = document.getElementById('content');
            var textContent = document.createTextNode(message + '\n');
            pre.appendChild(textContent);
          }
    /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }
          /**
           * Print the summary and start datetime/date of the next ten events in
           * the authorized user's calendar. If no events are found an
           * appropriate message is printed.
           */
          function listUpcomingEvents() {
            gapi.client.calendar.events.list({
              'calendarId': 'primary',
              'timeMin': (new Date()).toISOString(),
              'showDeleted': false,
              'singleEvents': true,
              'maxResults': 10,
              'orderBy': 'startTime'
            }).then(function(response) {
              var events = response.result.items;
              appendPre('Upcoming events:');

              if (events.length > 0) {
                for (i = 0; i < events.length; i++) {
                  var event = events[i];
                  var when = event.start.dateTime;
                  if (!when) {
                    when = event.start.date;
                  }
                  appendPre(event.summary + ' (' + when + ')')
                }
              } else {
                appendPre('No upcoming events found.');
              }
            });
          }
        },

        listens () {
            let that = this
            this.$conn.listen({
                onTextMessage: function ( e ) {
                    console.log("对方发来消息", e)
                    that.createItem()
                },    //收到文本消息
            });
        },
        createItem () {
            var div = document.createElement("span")
            div.innerHTML = '6666666666666666666666666666666666666666666666666'
            div.style.background = "#F3F3F3"
            div.style.border = 'solid 1px'
            div.style.borderRadius = '0 12px 12px 12px'
            div.style.padding = '3px 10px'
            div.style.marginLeft = "10px"
            this.$refs.vetChat.appendChild(div)
            console.log(div.offsetWidth)
            if (div.offsetWidth >= 350) {
                div.style.display=  'block'
                div.style.width = '80%'
                div.style.wordBreak = 'break-word';
            }
        },

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
                chatType: 'singleChat',   // 设置为单聊
                ext: {
                    key: "123",
                    key2: {
                        key3: 321
                    }
                } ,                                    
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
            // this.listens()
        },
        send1 () {
            
            let data = {
                type: "danmu",
                value: "hhhhhhhhhhhhh"
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
            // this.listens()
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
    .wrap {
        width: 400px;
        height: 400px;
        border: solid 1px;

    }
</style>