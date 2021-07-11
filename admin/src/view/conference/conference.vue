<template>
    <div class="conference">
        <div class="explan al">
            <div class="al">
                <img style="margin:0 10px 0 0;width:58px;" src="@/assets/img/grayLive.svg" alt="">
            </div>
            Online meeting
        </div>
        <div v-if="room.length !==0">
            <div class="conference_item mg sb al" v-for="(item,i) in room" :key="i">
                <!-- <div>Confrid: {{item.confrid}}</div> -->
                        <div class="sb">
                            <div class="appointment_details_img_wrap ju al">
                                <img class="appointment_details_img" v-if="item.password.callTo.userHead" :src="item.password.callTo.userHead" alt="">
                                <i class="el-icon-picture-outline" v-else style="font-size:27px;color:gray"></i>
                            </div>
                            <div class="appointment_details_name">
                                <div style="font-size:20px;">{{item.password.callTo.doctorName}}</div>
                                <div class="size13 al">
                                    <img src="@/assets/img/video1.png" alt="">
                                    Video Counsultation
                                </div>
                            </div>
                            <div class="DateTime">
                                <div class="size15 al t_title">Date and Time</div>
                                <!-- <div class="size13">{{item.booking.bookingDate}} - {{item.booking.bookingStartTime}} {{item.booking.APM}}</div> -->
                                <div class="size13 al" style="flex: 10;">{{item.password.createdTime}}</div>
                            </div>
                            <div class="pet_name">
                                <div class="size15 al t_title">Pet Name</div>
                                <div class="size13 al" style="flex: 10;">{{item.password.petName}}</div>
                            </div>
                        </div>
                        <div>
                            <div @click.stop="agora(item)" class="enterRoom cursor tc">Enter the Room</div>
                        </div>
                <!-- <div @click.stop="agora(item)" class="enterRoom cursor tc">Enter the Room</div> -->
            </div>
        </div>
        <div class="NODATA tc bold" v-else-if="room.length == 0">
            No meeting
        </div>
        <!-- <iframe src="http://www.google.com/calendar/embed?showTitle=0&amp;height=600&amp;wkst=1&amp;hl=en&amp;bgcolor=%23FFFFFF&amp;src=liangrenwei%40gmail.com&amp;color=%23BE6D00&amp;src=p%23weather%40group.v.calendar.google.com&amp;color=%23A32929&amp;ctz=America%2FToronto" style=" border-width:0 " width="800" height="600" frameborder="0" scrolling="no"></iframe> -->
        <!-- <iframe src="https://calendar.google.com/calendar/r"></iframe> -->
    </div>
</template>

<script>
import { getMetting, addMetting, delMetting } from "@/axios/request.js"
export default {
    data () {
        return {
            room: []
        }
    },
    created () {
        // this.dele()
        this.getMetting()
    },
    methods: {
        agora (item) {
            this.$router.push({
                name: 'agora'
            })
            localStorage.setItem('confr',JSON.stringify(item))
        },
        dele (item) {
            let data = {

                webId: item.id
            }
            delMetting(data).then(res => {
                console.log(res,'删除')
                this.getMetting()
            })
        },
        getMetting () {
            getMetting().then(res => {
                console.log(res,'getMetting')
                res.data.forEach(item => {
                    item.password = JSON.parse(item.password)
                })
                this.room = res.data
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .conference {
        background: @content;
        flex: 10;
        height: 100%;
        padding: 10px 0;
    }
    .conference_item {
        width: 98%;
        border-radius: 13px;
        background: white;
        padding: 15px 20px;
        box-shadow: 0 1px 2px 1px gray;
        margin-bottom: 20px;
    }
    .enterRoom {
        color: white;
        border-radius: 9px;
        padding: 10px 35px;
        background: @video;
    }
    .NODATA {
        width: 98%;
        margin-top: 50px;
        border-radius: 13px;
        color: gray;
        font-size: 20px;
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
        width: 60px;
        height: 65px;
        overflow: hidden;
        margin: 0 10px;
    }
    .appointment_details_img {
        height: 100%;
        // margin: 0 10px;
    }
    .DateTime, .pet_name,.appointment_details_name {
        margin: 6px 30px 0 40px;
        display: flex;
        flex-direction: column;
    }
    .t_title {
        height: 26px;
    }
</style>