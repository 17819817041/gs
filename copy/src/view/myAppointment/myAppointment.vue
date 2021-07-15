<style lang="less" scoped>
    @import "@/less/css.less";
    .myAppointment {
        width: 100%;
        height: 100%;
    }
    .myAppointment_wrap {
        flex: 10;
        height: 100%;
        background: @content;
        padding-right: 10px;
        .myAppointment_item {
            width: 98%;
        }
    }
    .myAppointment_wrap_item {
        height: 100%;
        overflow: auto;
    }
    .myAppointment_wrap_item::-webkit-scrollbar {
        width: 8px;
    }
    .myAppointment_wrap_item::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background: #5E5E5E;
    }
    .myAppointment_item_message {
        width: 98%;
        background: white;
        padding: 40px 20px;
        margin-bottom: 25px;
        border-radius: 10px;
        box-shadow: 0 2px 2px 1px rgb(190, 184, 184);
    }
    .head_image {
        width: 25%;
        .head_image_wrap {
            border: solid 1px rgb(224, 223, 223);
            border-radius: 50%;
            width: 150px;
            height: 150px;
            overflow: hidden;
            transition: 0.1s;
            img {
                height: 100%;
            }
            @media screen and (max-width: 1200px){
                border: solid 1px rgb(224, 223, 223);
                border-radius: 50%;
                width: 116px;
                height: 116px;
                overflow: hidden;
            }
        }
        
    }
    .dateAndPet {
        width: 100%;
        margin-top: 50px;
        @media screen and (max-width: 1200px){
            width: 100%;
            margin-top: 36px;
        }
        .dateAndPet_date, .dateAndPet_pet {
            width: 50%;
        }
    }
    .dateAndPet_date {
        min-width: 193px;
        // @media screen and (max-width: 940px){
        //     width: 40%;
        // }
    }
    .message_wrap {
        width: 60%;
        transition: 0.1s;
        @media screen and (max-width: 960px){
            width: 45%;
        }
    }

    .Way {
        color: white;
    }
    .video_btn {
        height: 45px;
        border-radius: 7px;
        margin-bottom: 55px;
        width: 220px;
        transition: 0.1s;
        background: #15BC83;
        @media screen and (max-width: 1200px){
            height: 34px;
            border-radius: 7px;
            margin-bottom: 55px;
            width: 192px;
            background: #15BC83;
        }
    }
    .phone_btn {
        height: 45px;
        border-radius: 7px;
        margin-bottom: 15px;
        width: 220px;
        background: #FF9500;
    }
    .chat_btn {
        height: 45px;
        border-radius: 7px;
        margin-bottom: 15px;
        width: 220px;
        background: #D7D8D9;
    }
    .size23 {
        font-size: 20px;
        transition: 0.1s;
        @media screen and (max-width: 1200px){
            font-size: 16px;
        }
    }
    .size20 {
        font-size: 16px;
        color: #767676;
        transition: 0.1s;
        @media screen and (max-width: 1200px){
            font-size: 12px;
            color: #767676;
        }
    }
    .Info {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        margin-top: 60px;
        margin-bottom: 10px;
    }
    .NoMessage {
        height: 100%;
    }
</style>
<template>
    <div class="myAppointment" v-loading="loading">            <!-- //客户 -->
        <div class="myAppointment_wrap">
            <div class="explan bold al"><img src="@/assets/img/appointment.png" alt="">Appointment</div>
            <div v-if="bookingList" class="myAppointment_wrap_item" @scroll="docScroll" ref="doctorList">
                <div ref="doctorList_height">
                    <div class="myAppointment_item mg" @click="appointmentDetalis(item.booking.bookingId,item.docImage)" v-for="(item) in bookingList" :key="item.bookingId">
                        <div class="myAppointment_item_message mg al">
                            <div class="head_image ju al">
                                <div class="head_image_wrap ju al">
                                    <img v-if="item.docImage" :src="item.docImage" alt="">
                                    <i class="el-icon-picture-outline" v-else style="font-size:70px;color:gray"></i>
                                </div>
                            </div>
                            <div class="message_wrap">
                                <div class="nameAndWay">
                                    <div class="doctor_name size23">Dr. {{item.booking.bookingDoctor}}</div>
                                    <div class="telOrVideo size20">Phone Counsultation</div>
                                </div>
                                <div class="flex dateAndPet">
                                    <div class="dateAndPet_date">
                                        <div class="size20">Date and Time</div>
                                        <div class="size23">
                                            <span>{{item.booking.bookingDate}}</span>
                                            <span style="margin: 0 5px">-</span>
                                            <span>{{item.booking.bookingStartTime}}{{item.booking.APM}}</span>    
                                        </div>
                                    </div>
                                    <div class="dateAndPet_pet">
                                        <div class="size20">Pet Name</div>
                                        <div class="size23">{{item.booking.petName}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="Way">
                                <div class="video_btn ju al cursor" @click.stop="starBook(item)">
                                    <img src="@/assets/img/video1.png" alt="">
                                    Video Consultation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="bookingList === null" class="NoMessage ju">
                <div >
                    <div class="Info mg">
                        <img style="height:100%" src="@/assets/img/info.png" alt="">
                    </div>
                    <div class="tc size14">
                        No appointment record temporarily!
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import { bookingUserId, allBooking } from "@/axios/request.js"
export default {
    data () {
        return {
            bookingList: [],
            loading: false,
            APM: '',
            today: ''
        }
    },
    created () {
        this.getDAY()
        this.bookingUserId()
    },
    computed: {
        callModal: {
            get () { return this.$store.state.user.callModal },
            set (val) {
                this.$store.commit("setUser", {
                    key: "callModal",
                    value: val
                })
            },
        },
        callLoading: {
            get () { return this.$store.state.user.callLoading },
            set (val) {
                this.$store.commit("setUser", {
                    key: "callLoading",
                    value: val
                })
            },
        },
		callModal2: {
            get () { return this.$store.state.user.callModal2 },
            set (val) {
                this.$store.commit("setUser", {
                    key: "callModal2",
                    value: val
                })
            },
        },
        callTo () { return this.$store.state.user.callTo },
		caller () { return this.$store.state.user.caller },
		joinParams () { return this.$store.state.user.joinParams },
		userDetail () { return this.$store.state.user.userDetail },
		IMuser () { return this.$store.state.user.IMuser },
		mask () {return this.$store.state.user.mask},
		cut_metting () { return this.$store.state.user.mettingId },
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
    },
    methods: {
        docScroll (e) {
            this.$store.commit('setUser',{ key: 'dom', value: 'myAppointment_wrap_item' })
            if ( this.$refs.doctorList.scrollTop > 300 ) {
                this.$store.commit('setUser', { key: 'scrollTop', value: true } )
            } else {
                this.$store.commit('setUser', { key: 'scrollTop', value: false } )
            }
        },
        async starBook (item) {
            var D = new Date(item.booking.bookingDate).getTime()
            var now = Date.now()
            if ( now >= D ) {
                this.callLoading = true
                let params = {
                    roomName: this.$store.state.user.IMuser.username,
                    password: "123456",
                    role: 3,
                    config:{ 
                        rec: false, 
                        recMerge:false, //是否开启合并录制
                        supportWechatMiniProgram: true //是否允许小程序加入会议
                    }
                }
                const user_room = await emedia.mgr.joinRoom(params);
                this.addConfr(user_room.confrId)
                let constraints = { audio: true, video: true };
                const stream = await emedia.mgr.publish(constraints)
                this.$store.commit('setApp',{ key: 'localStream', value: stream.localStream })
                this.sendMsg(params)
            } else {
                this.$message({
                    type: "info",
                    message: "It's not time to start!"
                })
            }
        },
        sendMsg (params) {
			let data = {
                type: "Call",
				user: this.userDetail,
				platform: localStorage.getItem('platform'),
				petId: this.petId,
				mettingId: this.mettingId,
				params
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: JSON.stringify(data),                  // 消息内容
                to: JSON.stringify(this.callTo.doctorId) + 'A2',      // 接收消息对象（用户id）
                chatType: 'singleChat',                  // 设置为单聊                       
                success: function (id, serverMsgId) {
                    console.log('send private text Success');  
                }, 
                fail: function(e){
                    console.log(e)
                    console.log("Send private text error");  
                }
            });
            this.$conn.send(msg.body);
            this.$store.commit("setUser",{ key: 'callerIM', value: this.userDetail.userId + 'A' + localStorage.getItem('platform') })
		},
        addConfr (val) {
			let D = new Date
			var date = D.toLocaleDateString()
			let detail = {
				petName: this.pet.name,
				petId: this.petId,                 
				caller: this.userDetail,
				callTo: this.callTo,
				createdTime: date,
				password: '123456'
			}
			let data = {
				'jo': [{
					confrId: val,
					userId: this.userDetail.userId + 'A' + localStorage.getItem('platform'),
					doctorId: this.callTo.doctorId + 'A2',
					password: JSON.stringify(detail),
					// password: '123456',
				}]
			}
			addMetting(data).then(res => {
				console.log(res)
				this.mettingId = res.data.data[0].id
			})
		},
        appointmentDetalis (id,url) {
            this.$router.push({
                name: 'cusAppointmentDetalis',
                query: {
                    key: id
                }
            })
        },
        bookingUserId () {
            this.loading = true
            let data = {
                userId: localStorage.getItem('userId'),
                userType: 1,
                // data: this.today
            }
            allBooking(data).then(res => {
                console.log(res,'booking')
                if (res.data.rtnCode == 200) {
                    res.data.data.reverse()
                    res.data.data.forEach(item => {
                        if (item.booking.bookingState == 1 || item.booking.bookingState == 2 ) {
                            let date = item.booking.bookingDate
                            let En = new Date(date).toDateString()
                            let arr = En.split(' ')
                            item.booking.bookingDate = arr[2] + ' ' + arr[1] + ','+ arr[3]
                            item.booking.APM = ''
                            var hour = Number(item.booking.bookingStartTime.split(':')[0])
                            var minute = Number(item.booking.bookingStartTime.split(':')[1])
                            if ( hour >= 12 && minute >= 0) {
                                item.booking.APM = 'PM'
                            } else {
                                item.booking.APM = 'AM'
                            }
                            this.bookingList.push(item)
                        }
                    })
                    // this.bookingList = res.data.data
                    this.loading = false
                } else if (res.data.rtnCode == 201 ) {
                    this.bookingList = res.data.data
                    this.loading = false
                }
            }).catch(e => {
                console.log(e)
                this.loading = false
                this.$message({
                    type: 'error',
                    message: 'Fail to load!'
                })
            })
        },
        getDAY () {
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            this.today = currentdate
        }
    }
}
</script>

