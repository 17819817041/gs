<style lang="less" scoped>
    @import "@/less/css.less";
    .appointment {
        width: 100%;
    }
    .appointment_content_item {
        background: @content;
        flex: 10;
    }
    .appointment_content_item_wrap {
        width: 98%;
    }
    .calendar {
        width: 100%;
        // border: solid 1px;
        .calendar_item {
            width: 65%;
            margin: 20px 10px;
            background: white;
            // border: solid 1px;
        }
        .appointment_details {
            width: 40%;
            margin: 20px 10px;
            background: white;
            box-shadow: 0px 1px 2px 1px rgb(187, 184, 184);
        }
    }
    .appointment_details_item {
        width: 95%;
        background: white;
        box-shadow: 0 2px 1px 1px #D5D5D5;
        margin: 10px auto;
        border-radius: 10px;
        overflow: hidden;
    }
    .appointment_details_img {
        width: 60px;
        height: 65px;
        // margin: 0 10px;
    }
    .Reschedule {
        width: 80px;
        border-radius: 7px;
        background: @logout;
        font-size: 12px;
        color: white;
        padding: 2px;
        margin: 3px;
    }
</style>

<template>
    <div class="appointment">      <!-- 医生 -->
        <div class="appointment_content flex">
            <div class="appointment_content_item">
                <div class="appointment_content_item_wrap mg">
                    <div class="explan al">
                        <img src="@/assets/img/appointment.png" alt="">
                        Appointment
                    </div>
                    <div class="calendar flex">
                        <div class="calendar_item">
                            <img style="width:100%" src="@/assets/img/rili.png" alt="">
                        </div>
                        <div class="appointment_details">
                            <div class="appointment_details_item sa al">
                                <div><img class="appointment_details_img" src="@/assets/img/petimg.png" alt=""></div>
                                <div class="appointment_details_name">
                                    <div class="size13">Amily Watson</div>
                                    <div class="size12 al">
                                        <img src="@/assets/img/callimg.png" alt="">
                                        Phone Counsultation
                                    </div>
                                </div>
                                <div class="DateTime">
                                    <div class="size15">Date and Time</div>
                                    <div class="size13">14/5/2021 - 9:30 AM</div>
                                </div>
                                <div class="pet_name">
                                    <div class="size12">Pet Name</div>
                                    <div class="size13">Daisy</div>
                                </div>
                                <div>
                                    <div class="Reschedule size13 cursor tc" @click="reschedule">Reschedule</div>
                                    <div class="Reschedule size13 cursor tc">Reschedule</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {  } from "@/axios/request.js"
export default {
    data () {
        return {
            
        }
    },
    created () {
        
    },
    methods: {
        reschedule () {
            this.$router.push("/reschedule")
        }
    }
}
</script>

