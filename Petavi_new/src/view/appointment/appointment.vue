<style lang="less" scoped>
    @import "@/less/css.less";
    .appointment {
        width: 100%;
        height: 100%;
    }
    .appointment_content {
        height: 100%;
    }
    .appointment_content_item {
        height: 100%;
        background: @content;
        flex: 10;
        overflow: auto;
    }
    .appointment_content_item_wrap {
        width: 98%;
        height: calc(100% - 60px);
    }
    .calendar {
        width: 100%;
        height: 100%;
        // border: solid 1px;
        .calendar_item {
            width: 65%;
            height: 100%;
            overflow: auto;
            margin: 0px 10px;
            background: white;
        }
        .appointment_details {
            width: 40%;
            height: 100%;
            // border: solid 1px;
            overflow: auto;
            margin: 0px 10px;
            background: white;
            box-shadow: 0px 1px 2px 1px rgb(187, 184, 184);
        }
    }
    .appointment_details_item {
        width: 95%;
        background: white;
        box-shadow: 0 4px 7px 1px #D5D5D5;
        margin: 30px auto;
        border-radius: 10px;
        overflow: hidden;
    }
    .appointment_details_img_wrap {
        border: solid 1px rgb(223, 223, 223);
        border-radius: 50%;
        width: 55px;
        height: 55px;
        overflow: hidden;
    }
    .appointment_details_img {
        height: 100%;
        // margin: 0 10px;
    }
    .Reschedule {
        width: 80px;
        border-radius: 7px;
        background: @logout;
        font-size: 12px;
        color: white;
        padding: 5px 2px;
        margin: 3px;
    }
    .Cancel {
        margin-top: 6px;
        width: 80px;
        border-radius: 7px;
        background: @cancel;
        font-size: 12px;
        color: white;
        padding: 5px 2px;
        margin: 3px;
    }
    .DateTime, .pet_name,.appointment_details_name {
        margin-top: 6px;
    }
    .calendarTitle {
        color: gray;
        border-bottom: solid 1px #DCDEE1;
    }
    // .calendarMini {
    //     width: 30%;
    // }
    .calendarX {
        width: 100%;
    }
    .calendarList {
        width: 25px;
        height: 25px;
        padding: 20px 20px;
    }

    .calendar-day{
        text-align: center;
        color: #202535;
        line-height: 30px;
        font-size: 12px;
    }
    .is-selected{
        color: #F8A535;
        font-size: 10px;
        margin-top: 5px;
    }
    #calendar .el-button-group>.el-button:not(:first-child):not(:last-child):after{
        content: '当月';
    }
    .size14_a {
        font-size: 14px;
        color: #767676;
    }
</style>

<template>
    <div class="appointment">      <!-- 医生 -->
        <div class="appointment_content flex">
            <div class="appointment_content_item noBar">
                <div class="appointment_content_item_wrap mg">
                    <div class="explan bold al">
                        <img src="@/assets/img/appointment.png" alt="">
                        Appointment
                    </div>
                    <div class="calendar flex">
                        <div class="calendar_item noBar">
                            <div class="calendarTitle al">
                                <div class="al">
                                    <img class="calendarList" src="@/assets/img/calendarList.png" alt="">
                                </div>
                                <div class="size21 bold al">Calendar</div>
                            </div>
                            <div class="flex">
                                <!-- <div class="calendarMini">
                                    <el-calendar v-model="value"></el-calendar>
                                </div> -->
                                <div class="calendarX">

                                    <el-calendar v-model="value">
                                        <template
                                            slot="dateCell"
                                            slot-scope="{date, data}">
                                            <div >
                                                <div>{{data.day.slice(5)}}</div>
                                                <div class="size12">{{
                                                    booking.find(b => b.booking.calanderDate==data.day) ? 
                                                    'Have an appointment with' + ' ' +
                                                    booking.find(b => b.booking.calanderDate==data.day).booking.bookingDoctor : 
                                                    ''
                                                }}</div>
                                            </div>
                                        </template>
                                    </el-calendar>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="appointment_details noBar" v-loading="loading" v-if="booking">
                            <div class="appointment_details_item sa" v-for="(item) in booking" :key="item.booking.bookingId">
                                <div class="appointment_details_img_wrap ju al">
                                    <img class="appointment_details_img" v-if="item.userImage" :src="item.userImage" alt="">
                                    <i class="el-icon-picture-outline" v-else style="font-size:27px;color:gray"></i>
                                </div>
                                <div class="appointment_details_name">
                                    <div class="size13">{{item.booking.userName}}</div>
                                    <div class="size12 al">
                                        <img src="@/assets/img/callimg.png" alt="">
                                        Phone Counsultation
                                    </div>
                                </div>
                                <div class="DateTime">
                                    <div class="size14_a">Date and Time</div>
                                    <div class="size13">{{item.booking.bookingDate}} - {{item.booking.bookingStartTime}} {{item.booking.APM}}</div>
                                </div>
                                <div class="pet_name">
                                    <div class="size12">Pet Name</div>
                                    <div class="size13">Daisy</div>
                                </div>
                                <div>
                                    <div class="Reschedule size13 cursor tc" @click="reschedule(item.booking.bookingId)">Reschedule</div>
                                    <div class="Cancel size13 cursor tc" @click="cancelBook(item)">Cancel</div>
                                </div>
                            </div>
                        </div>
                        <div class="appointment_details" v-else-if="booking === null">
                            <div class="ju"><img style="width:100px; margin: 15px" src="@/assets/img/info.png" alt=""></div>
                            <div class="tc " style="font-size: 20px;color:gray;">No reservation</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bookingUserId, allBooking,deleteBooking } from "@/axios/request.js"
import holiday from "@/assets/js/holiday.js"
export default {
    data () {
        return {
            value: new Date(),
            holiday,
            booking: [],
            today: '',
            loading: true
        }
    },
    created () {
        this.getDAY()
        this.getBooking()
    },
    methods: {
        reschedule (key) {
            console.log(key)
            this.$router.push({
                name: "reschedule",
                query: {
                    id: key
                }
            })
        },
        cancelBook (item) {
            this.$confirm('Are you sure to log out?', 'Attention', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                let data = {
                    bookingId: item.booking.bookingId
                }
                deleteBooking(data).then(res => {
                    console.log(res)
                    if (res.data.rtnCode == 200) {
                        this.$message({
                            type: 'info',
                            message: 'Cancel the appointment successfully!'
                        })
                    }
                }).catch(e => {
                    console.log(e)
                })
            }).catch (e => {
                console.log(e)
            })
        },
        getBooking () {
            let data = {
                userId: localStorage.getItem('userId'),
                userType: 2,
                data: this.today
            }
            bookingUserId(data).then(res => {
                console.log(res,'booking')
                if (res.data.rtnCode == 200) {
                    res.data.data.forEach(item => {
                        let date = item.booking.bookingDate.split('-')
                        item.booking.bookingDate = date[2] + '/' + date[1] + '/'+ date[0]
                        item.booking.APM = ''
    
                        var hour = Number(item.booking.bookingStartTime.split(':')[0])
                        var minute = Number(item.booking.bookingStartTime.split(':')[1])
                        if ( hour >= 12 && minute >= 0) {
                            item.booking.APM = 'PM'
                        } else {
                            item.booking.APM = 'AM'
                        }
                        item.booking.calanderDate = date[0] + "-" + date[1] + "-" + date[2]
                    })
                    this.booking = res.data.data
                    this.loading = false
                } else if (res.data.rtnCode == 201) {
                    this.booking = null
                    this.loading = false
                }
            }).catch(e => {
                console.log(e)
                this.loading = false
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

