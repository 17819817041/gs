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
        img {
            width: 150px;
            height: 150px;
        }
    }
    .dateAndPet {
        width: 50%;
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
        background: #FF3B30;
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
</style>
<template>
    <div class="myAppointment">            <!-- //客户 -->
        <div class="myAppointment_wrap">
            <div class="explan al"><img src="@/assets/img/appointment.png" alt="">Appointment</div>
            <div class="myAppointment_item mg">
                <div class="myAppointment_item_message mg al">
                    <div class="head_image ju al cursor" @click="appointmentDetalis">
                        <img src="@/assets/img/female.png" alt="">
                    </div>
                    <div class="message_wrap">
                        <div class="nameAndWay">
                            <div class="doctor_name size23">Dr. Sherley Billman</div>
                            <div class="telOrVideo size20">Phone Counsultation</div>
                        </div>
                        <div class="flex dateAndPet">
                            <div class="dateAndPet_date">
                                <div class="size20">Date and Time</div>
                                <div class="size23">Today - 9:30 AM</div>
                            </div>
                            <div class="dateAndPet_pet">
                                <div class="size20">Pet Name</div>
                                <div class="size23">Daisy</div>
                            </div>
                        </div>
                    </div>
                    <div class="Way">
                        <div class="video_btn ju al cursor">
                            <img src="@/assets/img/video1.png" alt="">
                            Video Consultation
                        </div>
                        <div class="phone_btn ju al cursor">
                            <img src="@/assets/img/callimg1.png" alt="">
                            Phone Consultation
                        </div>
                        <div class="chat_btn ju al cursor">
                            <img src="@/assets/img/chat1.png" alt="">
                            Chat
                        </div>
                    </div>
                </div>
                <div class="myAppointment_item_message mg al">
                    <div class="head_image ju al">
                        <img src="@/assets/img/female.png" alt="">
                    </div>
                    <div class="message_wrap">
                        <div class="nameAndWay">
                            <div class="doctor_name size23">Dr. Sherley Billman</div>
                            <div class="telOrVideo size20">Phone Counsultation</div>
                        </div>
                        <div class="flex dateAndPet">
                            <div class="dateAndPet_date">
                                <div class="size20">Date and Time</div>
                                <div class="size23">Today - 9:30 AM</div>
                            </div>
                            <div class="dateAndPet_pet">
                                <div class="size20">Pet Name</div>
                                <div class="size23">Daisy</div>
                            </div>
                        </div>
                    </div>
                    <div class="Way">
                        <div class="phone_btn ju al cursor">
                            <img src="@/assets/img/callimg1.png" alt="">
                            Phone Consultation
                        </div>
                        <div class="chat_btn ju al cursor">
                            <img src="@/assets/img/chat1.png" alt="">
                            Chat
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        appointmentDetalis () {
            this.$router.push("/cusAppointmentDetalis")
        }
    }
}
</script>

