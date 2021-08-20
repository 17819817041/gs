<style lang="less" scoped>
    @import "@/less/css.less";
    .myAppointment {
        width: 100%;
        height: 100%;
        background: @content;
    }
    .myAppointment_wrap {
        flex: 10;
        height: calc(100% - 32px);
        padding-right: 10px;
        overflow: auto;
        .myAppointment_item {
            width: 98%;
            margin-bottom: 25px;
        }
    }
    .myAppointment_wrap_item {
        height: calc(100% - 69px);
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
        // margin-bottom: 25px;
        border-radius: 10px;
        box-shadow: 0 2px 2px 1px rgb(190, 184, 184);
        @media screen and (max-width: 564px){
            padding: 40px 20px 40px 0;
        }
    }
    .head_image {
        width: 25%;
        @media screen and (max-width: 460px){
            display: none;
        }
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
            @media screen and (max-width: 800px){
                border: solid 1px rgb(224, 223, 223);
                border-radius: 50%;
                width: 90px;
                height: 90px;
                overflow: hidden;
            }
            @media screen and (max-width: 564px){
                border: solid 1px rgb(224, 223, 223);
                border-radius: 50%;
                width:70px;
                height: 70px;
                overflow: hidden;
            }
        }
    }
    .dateAndPet {
        width: 100%;
        margin-top: 50px;
        white-space: nowrap;
        @media screen and (max-width: 1200px){
            width: 100%;
            margin-top: 36px;
        }
        @media screen and (max-width: 800px){
            width: 100%;
            margin-top: 20px;
        }
        @media screen and (max-width: 564px){
            width: 100%;
            margin-top: 10px;
        }
        // @media screen and (max-width: 700px){
        //     width: 100%;
        //     margin-top: 20px;
        //     flex-direction: column;
        // }
        .dateAndPet_date, .dateAndPet_pet {
            width: 50%;
        }
    }
    .dateAndPet_date {
        min-width: 193px;
        @media screen and (max-width: 564px){
            min-width: 174px;
        }
    }
    .message_wrap {
        width: 60%;
        transition: 0.1s;
        @media screen and (max-width: 960px){
            width: 45%;
        }
        @media screen and (max-width: 460px){
            width: 70%;
            padding-left: 20px;
        }
    }

    .Way {
        width: 30%;
        color: white;
    }
    .video_btn {
        height: 45px;
        border-radius: 7px;
        margin-bottom: 55px;
        transition: 0.1s;
        background: #15BC83;
        padding: 0 10px;
        @media screen and (max-width: 1200px){
            height: 34px;
            border-radius: 7px;
            margin-bottom: 55px;
            background: #15BC83;
        }
    }
    .video_text {
        white-space: nowrap;
        @media screen and (max-width: 700px){
            display: none;
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
        @media screen and (max-width: 700px){
            font-size: 14px;
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
        @media screen and (max-width: 700px){
            font-size: 14px;
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
    .acting {
        width: 100%;
        padding: 50px 0;
        // border: solid 1px;
        @media screen and (max-width: 564px) {
            width: 100%;
            padding: 20px 0;
        }
    }
    .nameAndWay {
        white-space: nowrap;
    }
    .sort_booking {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        border: solid 2px rgb(199, 199, 199);
        margin-left: 7px;
        padding: 3px 12px;
    }
</style>
<template>
    <div class="myAppointment" v-loading='l_loading'>            <!-- //客户 -->
        <el-backtop target=".myAppointment_wrap_item"></el-backtop>
        <div class="myAppointment_wrap">
            <div class="explan bold al sb" style="padding: 17px 20px;">
                <div class="al"><img src="@/assets/img/appointment.png" alt="">Appointment</div>
                <div class="sort_booking" v-show="false">
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            Classification<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-circle-plus" 
                            v-for="item in options" 
                            @click.native='sort_t(item.value)'
                            :key="item.value"> {{item.label}} </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div v-if="bookingList" class="myAppointment_wrap_item">
                <div>
                    <div class="myAppointment_item mg" @click="appointmentDetalis(item.booking.bookingId,item.docImage)" 
                        v-for="(item) in bookingList" :key="item.bookingId">
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
                            <div class="Way flexEnd">
                                <div class="video_btn ju al cursor" @click.stop="starBook(item)">
                                    <img style="padding-right: 7px;" src="@/assets/img/video1.png" alt="">
                                    <span class="video_text">Video Consultation</span>
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
        <div class="ju">
            <el-pagination
                :small="small"
                :pager-count='7'
                layout="prev, pager, next"
                :total="totalRecordsCount"
                @current-change='pageCut'>
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { sortBooking, allBooking } from "@/axios/request.js"
export default {
    data () {
        return {
            bookingList: [],
            APM: '',
            today: '',
            pageNum: 1,
            totalRecordsCount: 0,
            D: new Date(),

            options: [{
                value: 1,
                label: 'All'
                }, {
                value: 2,
                label: 'Undone'
                }, {
                value: 3,
                label: 'Completed'
            }],
            value: 1,
            undone_totalRecordsCount: 0,
            completed_totalRecordsCount: 0,
            small: false
        }
    },
    created () {
        this.getDAY()
        this.bookingUserId()
    },
    beforeMount() {
        window.addEventListener('resize', (e) => {
            if (e.target.innerWidth <= 564) {
                this.small = true
            } else {
                this.small = false
            }
        })
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
        bookingDoc () { return this.$store.state.user.bookingDoc },
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
        l_loading: {
            get () { return this.$store.state.user.n_loading },
            set (val) {
                this.$store.commit("setUser", {
                    key: "n_loading",
                    value: val
                })
            },
        },
    },
    methods: {
        pageCut (val) {
            this.pageNum = val
            if (this.value == 1) {
                this.bookingUserId()
            } else if (this.value == 2) {
                let date = this.D.toLocaleDateString().split('/').join('-')
                this.Undone(date)
            } else if (this.value == 3) {
                let Y = new Date()
                Y.setTime(Y.getTime()-24*60*60*1000);
                var yday = Y.getFullYear()+"-" + (Y.getMonth()+1) + "-" + Y.getDate();
                this.Completed(yday)
            }
        },
        starBook (item) {
            var D = new Date(item.booking.bookingDate).getTime()
            var now = Date.now()
            if ( now >= D ) {
            // if ( true ) {
                this.callModal = true
                this.callLoading = true
                localStorage.setItem('bookingDoc',JSON.stringify(item))
                this.sendMsg(item)
            } else {
                this.$message({
                    type: "info",
                    message: "It's not time to start!"
                })
            }
        },
        sendMsg (item) {
            console.log(JSON.stringify(item.booking.bookingDoctorId) + 'A2', )
			let D = new Date().getTime()
            localStorage.setItem('sroom',D)
			let data = {
                type: "Call",
				user: this.userDetail,
				platform: localStorage.getItem('platform'),
				petId: this.petId,
				mettingId: this.mettingId,
				sroom: D
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: JSON.stringify(data),                  // 消息内容
                to: JSON.stringify(item.booking.bookingDoctorId) + 'A2',      // 接收消息对象（用户id）
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
            let data = {
                userId: localStorage.getItem('userId'),
                userType: 1,
                pageNum: this.pageNum,
                pageSize: 10
                // data: this.today
            }
            if ((this.totalRecordsCount == this.bookingList.length) && this.totalRecordsCount !=0 ) {
                this.$store.commit("setUser",{ key: "n_loading", value: false })
                
            } else {
                this.$store.commit("setUser",{ key: "n_loading", value: true })
                allBooking(data).then(res => {
                    console.log(res, 'all')
                    this.$store.commit("setUser",{ key: "n_loading", value: false })    
                    if (res.data.rtnCode == 200) {
                        res.data.data.pageT.forEach(item => {
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
                            }
                        })
                        // this.bookingList = this.bookingList.concat(res.data.data.pageT)
                        this.bookingList = res.data.data.pageT
                        this.totalRecordsCount = res.data.data.totalRecordsCount
                    } else if (res.data.rtnCode == 201 ) {
                        this.bookingList = res.data.data
                    } else {
                        this.bookingList = null
                    }
                }).catch(e => {
                    console.log(e)
                    this.$message({
                        type: 'error',
                        message: 'Fail to load!'
                    })
                    this.$store.commit("setUser",{ key: "n_loading", value: false })
                    this.bookingList = null
                })
            }
            
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
        },
        sort_t (val) {
            this.bookingList = []
            let date = this.D.toLocaleDateString().split('/').join('-')
            let Y = new Date()
            Y.setTime(Y.getTime()-24*60*60*1000);
            var yday = Y.getFullYear()+"-" + (Y.getMonth()+1) + "-" + Y.getDate();

            if (val == 1) {
                this.bookingUserId()
            } else if (val == 2) {
                this.Undone(date)
            } else if (val == 3) {
                this.Completed(yday)
            }
        },
        Undone (date) {         
            let data = {
                startDay: date,
                endDay: '',
                pageNum: this.pageNum,
                pageSize: 10,
                sort: 1
            }
            if ((this.undone_totalRecordsCount == this.bookingList.length) && this.undone_totalRecordsCount !=0 ) {
                this.$store.commit("setUser",{ key: "n_loading", value: false })
            } else { 
                this.$store.commit("setUser",{ key: "n_loading", value: true })
                sortBooking(data).then(res => {
                    console.log(res, '未完成')
                    this.$store.commit("setUser",{ key: "n_loading", value: false })
                    if (res.data.rtnCode == 200) {
                        res.data.data.pageT.forEach(item => {
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
                            }
                        })
                        this.bookingList = this.bookingList.concat(res.data.data.pageT)
                        this.undone_totalRecordsCount = res.data.data.totalRecordsCount
                    } else if (res.data.rtnCode == 201 ) {
                        this.bookingList = res.data.data
                    } else {
                        this.bookingList = null
                    }
                })
            }
        },
        Completed (yday) {
            let data = {
                startDay: '',
                endDay: yday,
                pageNum: this.pageNum,
                pageSize: 10,
                sort: 1
            }
            if ((this.completed_totalRecordsCount == this.bookingList.length) && this.completed_totalRecordsCount !=0 ) {
                this.$store.commit("setUser",{ key: "n_loading", value: false })
            } else { 
                this.$store.commit("setUser",{ key: "n_loading", value: true })
                sortBooking(data).then(res => {
                    console.log(res,'已完成')
                    this.$store.commit("setUser",{ key: "n_loading", value: false })
                    if (res.data.rtnCode == 200) {
                        res.data.data.pageT.forEach(item => {
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
                            }
                        })
                        this.bookingList = this.bookingList.concat(res.data.data.pageT)
                        this.completed_totalRecordsCount = res.data.data.totalRecordsCount
                    } else if (res.data.rtnCode == 201 ) {
                        this.bookingList = res.data.data
                    } else {
                        this.bookingList = null
                    }
                })
            }
        }

    }
}
</script>

