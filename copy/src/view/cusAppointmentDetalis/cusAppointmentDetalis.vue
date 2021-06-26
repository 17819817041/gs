<template>
    <div class="reschedule">
        <div class="reschedule flex">
            <div class="reschedule_content">
                <div class="appointment_content_item_wrap mg">
                    <div class="explan al">
                        <img src="@/assets/img/appointment.png" alt="">
                        Appointment
                    </div>
                    <div class="calendar mg flex">
                        <div><img class="Appointment_img" src="@/assets/img/customerHead1.png" alt=""></div>
                        <div class="calendar_wrap">
                            <div class="calendar_item">
                                <div class="size23">{{confirmKey.bookingDoctor}}</div>
                                <div class="size17" style="color:#9F9F9F">Video Consultation</div>
                            </div>
                            <div class="calendar_item sb">
                                <div>
                                    <div class="size16">Date and Time</div>
                                    <div class="size17">{{confirmKey.bookingDate}}</div>
                                </div>
                                <div>
                                    <div class="size16">Pet Name</div>
                                    <div class="size17">{{confirmKey.petName}}</div>
                                </div>
                            </div>
                            <div class="calendar_item">
                                <div class="size16">Practice Detail</div>
                                <div class="size17">Fortis Hospital</div>
                                <div class="size16">728, Sarita vihar, New delhi-110076</div>
                            </div>
                            <div class="calendar_item">
                                <div class="size16">Booked for</div>
                                <div class="size17">{{confirmKey.userName}}</div>
                            </div>
                            <div class="calendar_item">
                                <div class="size16">Appointment ID</div>
                                <div class="size17">{{confirmKey.bookingId}}</div>
                            </div>
                            <div class="flex calendar_item">
                                <div class="Reschedule size13 cursor tc">Reschedule</div>
                                <div class="cancel size13 cursor tc">Cancel</div>
                            </div>
                        </div>
                        <div class="telephone_or_video">
                            <div class="videoConsultation cursor ju al"><img src="@/assets/img/video1.png" alt="">Video Consultation</div>
                            <div class="chat cursor ju al"><img src="@/assets/img/chat1.png" alt="">Chat</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bookingId } from "@/axios/request.js"
export default {
    data () {
        return {
            bookingDate: '',
            bookingStarTime: '',
            doctorName: '',
            doctorURL: '',
            price: '',
            confirmKey: {}
        }
    },
    created () {
        this.getMsg()
    },
    methods: {
        getMsg () {
            this.doctorURL = this.$route.query.head
            let data = {
                bookingId: this.$route.query.key
            }
            bookingId(data).then(res => {
                console.log(res,666)
                this.confirmKey = res.data.data
                this.bookingStarTime = this.confirmKey.bookingStartTime
                let a = '09:30'
                let aa = a.split(':')
                console.log(Number(aa[0]),Number(aa[1]))
                if ( Number(aa[0]) > 12 && Number(aa[1]) >= 1 ) {
                    console.log('PM')
                } else {
                    console.log('AM')
                }
                this.doctorName = this.confirmKey.bookingDoctor
                this.price = this.confirmKey.bookingPrice
                let date = this.confirmKey.bookingDate
                let En = new Date(date).toDateString()
                let arr = En.split(' ')
                this.bookingDate = arr[0] + ',' + arr[2] + ' ' + arr[1] + ','+ arr[3]
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
    }
    .Appointment_img {
        padding: 50px 80px;
        width: 170px;
        height: 170px;
    }
    .calendar_wrap {
        width: 27%;
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
    .calendar_item {
        margin-top: 30px;
    }
    .size23 {
        font-size: 23px;
    }
    .size16 {
        color: #9F9F9F;
        font-size: 16px;
    }
    .size17 {
        font-size: 17px;
    }
    .telephone_or_video {
        flex: 10;
        transform: rotateY(180deg);
        padding: 40px 50px;
    }
    .videoConsultation {
        background: #15BC83;
        width: 250px;
        border-radius: 10px;
        color: white;
        height: 40px;
        transform: rotateY(180deg);
        margin-bottom: 10px;
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
</style>