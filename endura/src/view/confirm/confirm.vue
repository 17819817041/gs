<template>
    <div class="confirm mg">
        <div class="ju booking_okImg"><img class="ok_img" src="@/assets/img/OK.png" alt=""></div>
        <div class="size23 tc thank">THANK YOU!</div>
        <div class="size13 tc booking_message">We have received your request and confirm you after few minutes.</div>
        <div class="ju al booking_id"> 
            <div class="size14" style="padding-right: 5px;">REFERENCE ID </div> 
            <div> {{bookSuccess.bookingId}}</div> 
        </div>
        <svg class="width100" style="height:22px" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <line x1="100%" y1="0" x2="0" y2="0" style="stroke :rgb(192,192,192);stroke-width:5" stroke-dasharray="10,5" />
        </svg>

        <div class="confirm_message sa">
            <div class="confirm_item IMAGE_DOC ju">
                <div class="docHead_wrap ju">
                    <img class="docHead" v-if="bookSuccess.docImage" :src="bookSuccess.docImage" alt="">
                    <img style="height: 100%;" v-else src="@/assets/img/defaultimg.jpg" alt="">
                </div>
            </div>
            <div class="DATE confirm_item" style="padding-left:20px">
                <div class="confirm_date">
                    <div class="size14">Date</div>
                    <div class="size19">{{bookSuccess.date}}</div>
                    <div class="size14">in 3 days</div>
                </div>
                <div class="margin">
                    <div class="size14">TO</div>
                    <div class="size19">Dr. {{bookSuccess.to}}</div>
                    <div class="size14">General Obstetrics</div>
                </div>
                <div>
                    <div class="size14">FEES</div>
                    <div class="size19">{{bookSuccess.fees}}</div>
                </div>
            </div>
            <div class="confirm_item">
                <div style="padding-left:50px">
                    <div class="size14">APPTS. TIME</div>
                    <div class="size19">{{bookSuccess.time}} AM</div>
                    <div style="height:19px"></div>
                </div>
                <div class="margin" style="padding-left:50px">
                    <div class="size14">CONST. TYPE</div>
                    <div class="size19" >{{bookSuccess.constType}}</div>
                </div>
            </div>
        </div>
        <div class="ju" style="margin-top:50px">
            <el-button style="width:200px;border-radius:10px" type="primary" @click="ensure">OK, THANK!</el-button>
        </div>
    </div>
</template>

<script>
import { bookingId } from "@/axios/request.js"
export default {
    data () {
        return {
            bookSuccess: {},
        }
    },
    created () {
        this.getMsg()
    }, 
    methods: {
        getMsg () {
            var D = new Date(this.$route.query.date).toDateString()
            this.$route.query.date = D.split(' ')[0] + ',' + D.split(' ')[2] + ' ' + D.split(' ')[1] + ' ' + D.split(' ')[3]
            this.bookSuccess = this.$route.query
        },
        ensure () {
            this.$router.back()
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .confirm {
        width: 60%;
        height: 100%;
        .thank {
            padding: 20px 0;
        }
    }
    // .confirm_message {
    //     border: solid 1px;
    // }
    .ok_img {
        width: 130px;
        @media screen and (max-width: 564px) {
            width: 70px;
        }
    }
    .size23 {
        font-size: 23px;
    }
    .confirm_item {
        width: 30%;
        min-width: 171px;
        @media screen and (max-width: 564px) {
            min-width: 151px;
        }
    }
    .margin {
        margin: 35px 0;
        @media screen and (max-width: 564px) {
            margin: 15px 0;
        }
    }
    .size14 {
        font-size: 14px;
        color: #9F9F9F;
        @media screen and (max-width: 564px) {
            font-size: 12px;
        }
    }
    .size19 {
        font-size: 19px;
        padding: 3px 0;
        @media screen and (max-width: 564px) {
            font-size: 15px;
        }
    }
    .booking_id {
        padding:20px 0;
        @media screen and (max-width: 564px) {
            padding: 10px 0;
        }
    }
    .IMAGE_DOC {
        @media screen and (max-width: 564px) {
            display: none;
        }
    }
    .booking_message {
        padding:0 0 30px 0;
        @media screen and (max-width: 564px) {
            padding:0 0 10px 0;
        }
    }
    .docHead_wrap {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        overflow: hidden;
        border: solid 1px;
        @media screen and (max-width: 1500px) {
            width: 200px;
            height: 200px;
        }
        @media screen and (max-width: 1200px) {
            width: 150px;
            height: 150px;
        }
    }
    .docHead {
        height: 100%;
        transition: 0.3s;
    }
</style>