<template>
    <div class="reschedule">
        <div class="reschedule flex" v-loading='loading'>
            <div class="reschedule_content">
                <div class="appointment_content_item_wrap mg">
                    <div class="explan al">
                        <img src="@/assets/img/appointment.png" alt="">
                        Appointment
                    </div>
                    <div class="calendar mg flex">
                        <div>
                            <div class="head_image ju al">
                                <img class="Appointment_img" v-if="confirmKey.userImage" :src="confirmKey.userImage" alt="">
                                <img style="height:100%;" v-else :src="default_img" alt="">
                            </div>
                        </div>
                        <div class="calendar_wrap">
                            <div class="calendar_item">
                                <div class="flex">
                                    <div class="size23">
                                        <span v-if="confirmKey.booking.userName">{{confirmKey.booking.userName}}</span>
                                        <span v-else>No Name</span>
                                    </div>
                                    <div class="telephone_or_video_mobile">
                                        <div class="videoConsultation cursor ju al">
                                            <img src="@/assets/img/video1.png" alt="">
                                            <span class="text_v_btn">Video Consultation</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="size17" style="color:#9F9F9F">Video Consultation</div>
                            </div>
                            <div class="calendar_item sb">
                                <div>
                                    <div class="size16">Date and Time</div>
                                    <div class="size17" v-if="change">{{confirmKey.booking.bookingDate}} - {{confirmKey.booking.bookingStartTime}}  {{confirmKey.APM}}</div>
                                    <div class="flex changeDate_t" v-else>
                                        <div>
                                            <el-date-picker class="width100"
                                                v-model="value1"
                                                type="date"
                                                placeholder="选择日期">
                                            </el-date-picker>
                                        </div>
                                        <div style="margin-left:15px">
                                            <el-time-select class="width100"
                                                v-model="value"
                                                :picker-options="{
                                                    start: '08:30',
                                                    step: '00:15',
                                                    end: '18:30'
                                                }"
                                                placeholder="选择时间">
                                            </el-time-select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="size16">Pet Name</div>
                                    <div class="size17">{{confirmKey.booking.petName}}</div>
                                </div>
                            </div>
                            <div class="calendar_item">
                                <div class="size16">Practice Detail</div>
                                <div class="size17">
                                    <span v-if="confirmKey.veterinaryHospitalName">{{confirmKey.veterinaryHospitalName}}</span>
                                    <span v-else>No data</span>
                                </div>
                                <div class="size16">
                                    <span v-if="confirmKey.veterinaryHospitalAddress">{{confirmKey.veterinaryHospitalAddress}}</span>
                                    <span v-else>No data</span>
                                </div>
                            </div>
                            <div class="calendar_item">
                                <div class="size16">Booked for</div>
                                <div class="size17">{{confirmKey.booking.bookingDoctor}}</div>
                            </div>
                            <div class="calendar_item">
                                <div class="size16">Appointment ID</div>
                                <div class="size17">{{confirmKey.booking.bookingId}}</div>
                            </div>
                            <div class="flex calendar_item">
                                <div class="Reschedule size13 cursor tc" @click="update">Reschedule</div>
                                <div class="cancel size13 cursor tc" @click="deleteBook">Cancel</div>
                                <div class="sureUpdate size13 cursor tc" v-show="!change" @click="sureUpdate">Sure</div>
                            </div>
                        </div>
                        <div class="telephone_or_video">
                            <div class="videoConsultation cursor ju al">
                                <img src="@/assets/img/video1.png" alt="">
                                <span class="text_v_btn">Video Consultation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bookingId, deleteBooking, updateBooking } from "@/axios/request.js"
export default {
    data () {
        return {
            bookingDate: '',
            confirmKey: {
                booking: {}
            },
            change: true,
            value: '',
            loading: false,
            value1: ''
        }
    },
    created () {
        this.getMsg()
    },
    computed: {
        default_img () { return this.$store.state.user.default_img }
    },
    methods: {
        sureUpdate () {
            let data = {
                bookingId: this.$route.query.id,
                bookingStartTime:this.value,
                bookingTime: this.confirmKey.booking.bookingTime,
                bookingDate: new Date(this.value1).toLocaleDateString()
            }
            updateBooking(data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: "Successfully modified!"
                    })
                    this.getMsg()
                    this.change = true
                } else {
                    this.change = true
                }
            }).catch(e => {
                console.log(e)
                this.change = true
            })
        },
        update () {
            this.change = !this.change
        },
        getMsg () {
            let data = {
                bookingId: this.$route.query.id
            }
            bookingId(data).then(res => {
                console.log(res,'asd')
                if (res.data.rtnCode == 200) {
                    res.data.data.APM = ''
                    let a = res.data.data.booking.bookingStartTime
                    let aa = a.split(':')
                    if ( Number(aa[0]) >= 12 && Number(aa[1]) >= 1 ) {
                        res.data.data.APM = 'PM'
                    } else {
                        res.data.data.APM = 'AM'
                    }
                    let date = res.data.data.bookingDate
                    let En = new Date(date).toDateString()
                    let arr = En.split(' ')
                    res.data.data.bookingDate = arr[0] + ',' + arr[2] + ' ' + arr[1] + ','+ arr[3]
                    this.confirmKey = res.data.data
                }
            })
        },
        deleteBook () {
            this.$confirm('Are you sure to cancel the appointment?', 'Attention', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                let data = {
                    bookingId: this.$route.query.id
                }
                this.loading = true
                deleteBooking(data).then(res => {
                    console.log(res)
                    this.loading = false
                    if (res.data.rtnCode == 200 ) {
                        this.$message({
                            type: "success",
                            message: "Appointment cancelled!"
                        })
                        this.$router.replace('/appointment')
                    } else {
                        this.$message({
                            type: "error",
                            message: "Fail cancelled!"
                        })
                        this.loading = false
                    }
                })
            }).catch (e => {
                console.log(e)
                this.loading = false
                this.$message({
                    type: "error",
                    message: "Fail cancelled!"
                })
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
.reschedule {
    width: 100%;
    height: 100%;
}
    .reschedule_content {
        flex: 10;
    }
    .appointment_content_item_wrap {
        background: @content;
        padding-bottom: 40px;
        height: 100%;
    }
    .calendar {
        width: 97%;
        border-radius: 12px;
        box-shadow: 0 2px 5px 1px rgb(170, 167, 167);
        background: white;
        padding-bottom: 100px;
        @media screen and (max-width: 564px) {
            flex-direction: column;
        }
    }
    .head_image {
        width: 170px;
        height: 170px;
        overflow: hidden;
        border-radius: 50%;
        margin: 50px 80px;
        @media screen and (max-width: 1350px) {
            width: 125px;
            height: 125px;
            margin: 40px 30px;
        }
        @media screen and (max-width: 800px) {
            width: 85px;
            height: 85px;
        }
        @media screen and (max-width: 564px) {
            width: 75px;
            height: 75px;
            margin: 10px auto;
        }
    }
    .Appointment_img {
        height: 100%;
    }
    .calendar_wrap {
        width: 30%;
        min-width: 250px;
        @media screen and (max-width: 564px) {
            margin: 0 auto;
        }
    }
    .Reschedule {
        width: 90px;
        border-radius: 7px;
        background: @logout;
        font-size: 12px;
        color: white;
        padding: 5px;
        margin: 0 3px;
    }
    .cancel {
        width: 70px;
        border-radius: 7px;
        background: @cancel;
        font-size: 12px;
        color: white;
        padding: 5px;
        margin: 0 3px;
    }
    .sureUpdate {
        width: 70px;
        border-radius: 7px;
        background: @video;
        font-size: 12px;
        color: white;
        padding: 5px;
        margin: 0 3px;
    }
    .calendar_item {
        margin-top: 40px;
        @media screen and (max-width: 800px) {
            margin-top: 20px;
        }
    }
    .size23 {
        font-size: 23px;
        @media screen and (max-width: 1350px) {
            font-size: 20px;
        }
    }
    .size16 {
        color: #9F9F9F;
        font-size: 16px;
        @media screen and (max-width: 1350px) {
            font-size: 14px;
        }
    }
    .size17 {
        font-size: 17px;
        @media screen and (max-width: 1350px) {
            font-size: 15px;
        }
    }
    .telephone_or_video {
        flex: 10;
        transform: rotateY(180deg);
        padding: 40px 50px;
        @media screen and (max-width: 1350px) {
            padding: 40px 30px;
        }
        @media screen and (max-width: 564px) {
            display: none;
        }
    }
    .telephone_or_video_mobile {
        flex: 10;
        transform: rotateY(180deg);
        display: none;
        @media screen and (max-width: 564px) {
            display: block;
        }
    }
    .videoConsultation {
        background: #15BC83;
        width: 250px;
        border-radius: 10px;
        color: white;
        height: 40px;
        transform: rotateY(180deg);
        margin-bottom: 10px;
        @media screen and (max-width: 1350px) {
            font-size: 15px;
            width: 200px;
        }
        @media screen and (max-width: 800px) {
            width: 60px;
            height: 30px;
        }
        img {
            margin-right: 5px;
        }
    }
    .text_v_btn {
        @media screen and (max-width: 800px) {
            display: none;
        }
    }
    .phoneConsultation {
        background: #FF9500;
        width: 250px;
        border-radius: 10px;
        color: white;
        height: 40px;
        transform: rotateY(180deg);
        margin-bottom: 10px;
    }
    .chat {
        background: #D7D8D9;
        width: 250px;
        border-radius: 10px;
        color: white;
        height: 40px;
        transform: rotateY(180deg);
        margin-bottom: 10px;
    }
    .changeDate_t {
        div {
            width: 150px;
        }
    }
</style>