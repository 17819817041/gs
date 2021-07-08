<template>
    <div class="confirm mg">
        <div class="ju"><img class="ok_img" src="@/assets/img/OK.png" alt=""></div>
        <div class="size23 tc thank">THANK YOU!</div>
        <div class="size13 tc" style="padding:0 0 30px 0">We have received your request and confirm you after few minutes.</div>
        <div class="ju al" style="padding:20px 0"> 
            <div class="size14">REFERENCE ID </div> 
            <div> {{bookSuccess.bookingId}}</div> 
        </div>
        <svg class="width100" style="height:22px" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <line x1="100%" y1="0" x2="0" y2="0" style="stroke :rgb(192,192,192);stroke-width:5" stroke-dasharray="10,5" />
        </svg>

        <div class="confirm_message sa">
            <div class="confirm_item ju">
                <div class="docHead_wrap ju">
                    <img class="docHead" :src="bookSuccess.docImage" alt="">
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
            referenceId: 'MQ50355404',
            bookingDate: '',
            bookingStarTime: '',
            doctorName: '',
            doctorURL: '',
            price: '',
            bookSuccess: {},
            confirmKey: {}
        }
    },
    created () {
        this.getMsg()
        console.log(this.$route.query)
    },
    methods: {
        getMsg () {
            this.bookSuccess = this.$route.query

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
                if ( Number(aa[0]) > 12 && Number(aa[1]) >= 0 ) {
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
        },
        ensure () {
            this.$router.replace('/booking')
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
    }
    .size23 {
        font-size: 23px;
    }
    .confirm_item {
        width: 30%;
    }
    .margin {
        margin: 35px 0;
    }
    .size14 {
        font-size: 14px;
        color: #9F9F9F;
    }
    .size19 {
        font-size: 19px;
        padding: 3px 0;
    }
    .docHead_wrap {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        overflow: hidden;
    }
    .docHead {
        height: 100%;
        transition: 0.3s;
        @media screen and (max-width: 1500px) {
            height: 90%;
        }
        @media screen and (max-width: 1200px) {
            height: 80%;
        }
    }
</style>