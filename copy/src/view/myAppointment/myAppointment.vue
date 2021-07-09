<style lang="less" scoped>
    @import "@/less/css.less";
    .myAppointment {
        width: 100%;
        height: 100%;
    }
    .myAppointment_wrap {
        flex: 10;
        height: 100%;
        overflow: auto;
        background: @content;
        .myAppointment_item {
            width: 98%;
        }
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
            img {
                height: 100%;
            }
        }
        
    }
    .dateAndPet {
        width: 60%;
        margin-top: 50px;
        .dateAndPet_date, .dateAndPet_pet {
            width: 50%;
        }
    }
    .message_wrap {
        width: 60%;
    }

    .Way {
        color: white;
    }
    .video_btn {
        height: 45px;
        border-radius: 7px;
        margin-bottom: 15px;
        width: 220px;
        background: #15BC83;
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
        font-size: 23px;
    }
    .size20 {
        font-size: 20px;
        color: #767676;
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
        <div class="myAppointment_wrap noBar">
            <div class="explan bold al"><img src="@/assets/img/appointment.png" alt="">Appointment</div>
            <div v-if="bookingList">
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
                                <div class="dateAndPet_pet" style="padding-left:30px;">
                                    <div class="size20">Pet Name</div>
                                    <div class="size23">{{item.booking.petName}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="Way">
                            <div class="video_btn ju al cursor" @click.stop="">
                                <img src="@/assets/img/video1.png" alt="">
                                Video Consultation
                            </div>
                            <div class="chat_btn ju al cursor" @click.stop="">
                                <img src="@/assets/img/chat1.png" alt="">
                                Chat
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
    methods: {
        appointmentDetalis (id,url) {
            console.log(id)
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

