<style lang="less" scoped>
@import "@/less/css.less";
    .setting {
        width: 100%;
        height: 100%;
        position: relative;
        .top_up_mask {
            position: absolute;
            width: 560px;
            top: 50%;
            left: 50%;
            background: white;
            box-shadow: 0px 3px 3px 0px #D0D0D0;
            border-radius: 15px;
            z-index: 1000;
            transform: translate(-72%,-50%);
        }
    }
    .setting_content {
        height: 100%;
    }
    .setting_message {
        flex: 10;
        height: 100%;
        overflow: auto;
        background: @content;
    }
    .setting_img {
        width: 37px;
        padding-right: 5px;
    }
    .Explan_title {
        width: 96.5%;
        margin: auto;
        padding: 15px 0;
    }
    .personal_message {
        width: 95%;
        box-shadow: 0px 3px 3px 0px #D0D0D0;
        border-radius: 10px;
        background: white;
    }
    .size25 {
        font-size: 25px;
        color: @explanTitle;
    }
    .size22 {
        font-size: 22px;
        color: @explanTitle;
    }
    .personal_message_title {
        transform: translate(0,60%);
        position: relative;
        .edit {
            width: 90px;
            right: 20px;
            top: 0;
            font-size: 17px;
            padding: 8px 0;
            border-radius: 12px;
            background: @helpBtn;
            position: absolute;
            box-shadow: 0 1px 2px 1px rgb(214, 210, 210);
        }
    }
    .save {
        width: 90px;
        font-size: 17px;
        padding: 8px 0;
        border-radius: 12px;
        background: @hdColor;
        box-shadow: 0 1px 2px 1px rgb(214, 210, 210);
    }
    .cancel {
        width: 90px;
        font-size: 17px;
        border-radius: 12px;
        margin-left: 10px;
        background: @helpBtn;
        padding: 8px 0px;
        box-shadow: 0 1px 2px 1px rgb(214, 210, 210);
    }
    .wrap_save {
        position: absolute;
        right: 20px;
        top: 0px;
        font-size: 15px;
    }
    .detail {
        padding: 50px 0;
    }
    .btnColor {
        background: @logout !important;
        border: none !important;
        border-radius: 17px;
        margin-top: 20px;
    }
    .person_image{
        width: 27%;
        .felame {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            // border: solid 1px;
            overflow: hidden;
        }
    } 
    .message1, .message2 {
        width: 30%;
    }
    .name1 div{
        margin-bottom: 10px;
    }
    .name1:nth-child(1) {
        padding-right: 25px;
    }
    .name2 div {
        margin-bottom: 20px;
    }
    .name2:nth-child(1) {
        padding-right: 25px;
    }
    .inp {
        width: 140px;
        border: solid 1px ;
        border-radius: 10px;
        overflow: hidden;
        height: 29px;
        input {
            width: 100%;
            border: none;
            outline: none;
        }
    }
    .gender {
        width: 140px;
        height: 29px;
        border: solid 1px;
        overflow: hidden;
        border-radius: 10px;
    }
    .payment {
        width: 95%;
        overflow: hidden;
        margin-top: 30px;
        border-radius: 10px;
        background: white;
        box-shadow: 0px 3px 3px 0px #D0D0D0;
    }
    .stripe {
        border: solid 1px;
        flex: 10;
    }
    .input {
        border: solid 1px;
        width: 300px;
        height: 50px;
        border-radius: 10px;
        margin: 30px;
    }
    .option {
        border: none;
        outline: none;
        height: 100%;
    }
    .payment_item {
        width: 80%;
    }
    .payment_wrap {
        // height: 500px;
        // border: solid 1px;
        margin-bottom: 30px;
        .balance {
            width: 320px;
            // border: solid 1px;
            box-shadow: 0 2px 2px 2px #e7e4e4;
            border-radius: 12px;
            padding: 20px;
        }
        .card {
            width: 70%;
            min-height: 250px;
            padding: 20px 130px 20px 130px;
            border-radius: 12px;
            box-shadow: 0 2px 2px 2px #e7e4e4;
            margin-left: 25px;
        }
    }
    .balance_title {
        color: @logout;
        font-size: 17px;
        padding: 25px 0;
    }
    .payment_title {
        color: #5E5E5E;
        font-size: 25px;
        padding: 30px 0;
        img {
            padding-right: 10px;
        }
    }
    .HK {
        width: 210px;
        // border: solid 1px;
    }
    .hk {
        color: #767676;
        font-size: 20px;
        margin-top: 10px;
    }
    .balance_show {
        font-size: 30px;
        padding: 0 10px;
    }
    .active_current {
        width: 210px;
        font-size: 12px;
        color: #9F9F9F;
        padding-left: 23px;
        padding-bottom: 50px;
    }
    .drawal {
        .drawal_btn {
            width: 112px;
            background: @logout;
            border-radius: 9px;
            padding: 10px 0;
            color: white;
        }
        .top_up {
            background: @helpBtn;
            width: 100px;
            border-radius: 9px;
            padding: 10px 0;
            color: white;
        }
    }
    .card_img {
        img {
            width: 100%;
        }
    }
    .label_i{
        width:100%;
        height:100%;
        overflow:hidden;
        
    }
    .circle {
        border-radius: 50%;
        border:solid 1px rgb(221, 214, 214);
        height:100%;
        overflow:hidden;
    }
    .Icon {
        font-size:50px;
        color:gray;
    }
    .Remark {
        width: 100%;
        border: solid 1px;
        border-radius: 20px;
        overflow: hidden;
        textarea {
            width: 100%;
            border: none;
            outline: none;
            height: 80px;
            font-size: 19px;
            resize: none;
            padding: 6px;
        }
    }
    .select_way {
        width: 180px;
        border: solid 1px rgb(201, 198, 198);
        border-radius: 12px;
        overflow: hidden;
        margin: 15px 0;
    }
    .p_select {
        margin-left: 7px;
    }
    .show_detail {
        border-radius: 12px;
        width: 200px;
        height: 170px;
        box-shadow: 0 3px 3px 0px rgb(214, 214, 214);
        border: solid 1px rgb(185, 175, 175);
    }
    .w_way {
        flex: 10;
    }
    .card_inp {
        margin: 25px 0;
        div {
            width: 48%;
            // height: 40px;
            min-width: 200px;
            padding: 0 10px;
            margin: 0 0px 15px 0;
            border: solid 1px gray;
            border-radius: 12px;
        }
    }
    .p_title {
        color: @logout;
        font-size: 17px;
        margin-left: 7px;
        padding: 10px 0;
    }
    .p_title1 {
        color: @logout;
        font-size: 17px;
        margin-left: 7px;
        padding: 10px 0;
    }
    .pay_btn {
        // width: 70%;
        border-radius: 12px;
        // margin-top: 100px;
        background: #F7B030;
        padding: 10px;
    }
    .Alipay, .WeChatPay {
        width: 230px;
        height: 210px;
        border: solid 1px rgb(197, 197, 197);
        box-shadow: 0 1px 1px 0 gray;
        border-radius: 13px;
        margin-top: 15px;
    }
    .way_item {
        flex: 10;
    }
    .switch {
        height: 40px;
        border-radius: 12px;
        position: relative;
        z-index: 100;
    }
    .paypal_img {
        border-bottom: solid 3px white;
        padding: 7px 20px 7px 20px;
        transition: 0.1s;
        img {
            height: 100%;
        }
    }
    .paypal_img:hover {
        background: rgb(240, 240, 240);
    }
    // .paypal_wrap {
    //     transform: translate(0px, -50px);
    // }
    .bottom_c {
        border-bottom: #dfdfdf 3px solid !important;
    }
    .ali_title, .weChat_title {
        padding: 25px 0;
    }


    .PAY {
        border: solid 1px;
        padding: 5px 10px;
    }
    .mask_title {
        padding: 30px 60px;
        .back_check {
            img {
                width: 12px;
            }
        }
    }
    .Amount {
        padding: 10px 50px;
        .select_item {
            width: 100%;
        }
    }
    .amount_item {
        width: 30%;
        padding: 5px 10px;
        color: #0C4E76;
        border: solid gray 1px;
        border-radius: 7px;
        margin-top: 15px;
        margin: 15px 1.5% 0px 1.7%;
    }
    .amount_item:hover {
        background: rgb(243, 243, 243);
    }
    .pay_btn {
        width: 60%;
        padding: 10px;
        background: @helpBtn;
        border-radius: 9px;
        color: white;
        margin: 30px auto;
    }
    .pay_W {
        padding: 0  50px;
    }
    .much {
        background: rgb(240, 240, 240);
    }
    .paypal_account {
        width: 250px;
        height: 200px;
        border-radius: 12px;
        box-shadow: 0 2px 2px 2px #e7e4e4;
    }
    .payment_record {
        width: 75%;
        margin-left: 25px;
        border-radius: 12px;
        padding: 0 20px;
        box-shadow: 0 2px 2px 2px #e7e4e4;
    }
    .history_pay {
        height: 70%;
        overflow: auto;
        .pay_item {
            margin-bottom: 10px;
            border-bottom: solid 1px rgb(230, 230, 230);
            padding: 10px;
        }
    }
    .payed_head {
        width: 45x;
        height: 45px;
        border-radius: 50%;
        overflow: auto;
        img {
            height: 100%;
            margin: 0 10px;
        }
    }
    .pay_history {
        margin-top: 35px;
    }
    // .way_select {
    //     height: 70%;
    //     border: solid 1px;
    // }
    .svg_pay {
        width: 87.47px;
        height: 85.67px;
        margin: 5px 15px;
    }
</style>

<template>
    <div class="setting" v-loading="load">
        <div class="top_up_mask" v-show="top_up_mask">
            <div class="mask_title sb al">
                <div class="back_check al size12 bold" style="opacity: 0">
                    <img src="@/assets/img/arrowL.png" alt="">Back to checkout
                </div>
                <!-- <div class="payment_d bold size25">Payment details</div> -->
                <div class="back_check al bold size12 cursor" @click="closeback">
                    <img src="@/assets/img/arrowL.png" style="margin-right: 5px;" alt="">Back to checkout
                </div>
            </div>
            <div class="Amount">
                <div class="p_title" style="padding-left: 15px">Select Amount</div>
                <div class="select_item clear">
                    <div @click="HK = 5,goodId = 5" :class="['amount_item float cursor', { much: HK == 5 }]">HK$ 5</div>
                    <div @click="HK = 10,goodId = 6" :class="['amount_item float cursor', { much: HK == 10 }]">HK$ 10</div>
                    <div @click="HK = 20,goodId = 7" :class="['amount_item float cursor', { much: HK == 20 }]">HK$ 20</div>
                    <div @click="HK = 50,goodId = 8" :class="['amount_item float cursor', { much: HK == 50 }]">HK$ 50</div>
                    <div @click="HK = 100,goodId = 9" :class="['amount_item float cursor', { much: HK == 100 }]">HK$ 100</div>
                    <div @click="HK = 200,goodId = 10" :class="['amount_item float cursor', { much: HK == 200 }]">HK$ 200</div>
                </div>
            </div>
            <div class="pay_W">
                <div class="p_title" style="padding: 30px 0 7px 15px">Select Payment Method</div>
                <div class="switch flexEnd">
                    <div class="flex">
                        <div :class="['paypal_img cursor', { bottom_c: type_pay == 5 }]" @click="type_pay = 5">
                            <img src="@/assets/img/Paypal.png" alt="">
                        </div>
                        <div :class="['paypal_img cursor', { bottom_c: type_pay == 2 }]" @click="type_pay = 2">
                            <img src="@/assets/img/stripe.png" alt="">
                        </div>
                        <div :class="['paypal_img cursor', { bottom_c: type_pay == 3 }]" @click="type_pay = 3">
                            <img src="@/assets/img/alipay.png" alt="">
                        </div>
                        <div :class="['paypal_img cursor', { bottom_c: type_pay == 4 }]" @click="type_pay = 4">
                            <img src="@/assets/img/chatpay.png" alt=""> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="pay_btn tc bold cursor" @click="pay_p">
                Continue
            </div>
        </div>
        <div class="setting_content flex">
            <div class="setting_message noBar">
                <div class="explan al Explan_title">
                    <img class="setting_img" src="@/assets/img/setting.png" alt="">
                    Setting
                </div>
                <div class="personal_message mg">
                    <div class=" bold tc personal_message_title">
                        <div class="size25">Guadian Details</div>
                        <div v-if="editBtn" class="edit tc cursor" @click="edit">Edit</div>
                        <!-- <div v-else class="save tc cursor" @click="save">Save</div> -->
                        <div v-else class="wrap_save flex">
                            <div class="save cursor tc" @click="save">Save</div>
                            <div class="cancel cursor tc al ju" @click="cancel">cancel</div>
                        </div>
                    </div>
                    <div class="detail flex width100 al">
                        <div class="person_image al ju">
                            <div class="felame">
                                <label for="ava3" :class="['label_i']">
                                    <input type="file" id="ava3" v-if="!editBtn" v-show="false" @change="getImage">
                                    <div :class="['ju al circle', { cursor: !editBtn } ]">
                                        <img style="height:100%;" v-if="user.userImage" :src="user.userImage" alt="" mode="widthFix">
                                        <i class="el-icon-picture-outline Icon" v-else></i>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="flex" style="width:73%">
                            <div class="message1">   
                                <div class="message1_item ts flex size22 al">
                                    <div class="name1">
                                        <div>User ID</div>
                                        <div>Name</div>
                                        <div>Age</div>
                                        <div>Location</div>
                                        <div>Mobile</div>
                                    </div>
                                    <div class="name1">
                                        <div>{{user.userId}}</div>
                                        <div v-if="editBtn">{{user.userName}}</div>
                                        <div v-else class="inp al"><input type="text" v-model="user.userName"></div>
                                        <div v-if="editBtn"><span v-if="user.age">{{user.age}}</span><span v-else>No Age</span> </div>    <!-- null -->
                                        <div v-else class="inp al"><input type="text" v-model="user.age"></div>
                                        <div v-if="editBtn"><span v-if="user.userAddress">{{user.userAddress}}</span><span v-else>No Location</span> </div>
                                        <div v-else class="inp al"><input type="text" v-model="user.userAddress"></div>
                                        <div v-if="editBtn"><span v-if="user.userPhone">{{user.userPhone}}</span><span v-else>None</span></div>
                                        <div v-else class="inp al"><input type="text" v-model="user.userPhone"></div>
                                    </div>
                                </div>   
                            </div>
                            <div class="message2">
                                <div class="message2_item flex ts size22 al">
                                    <div class="name2">
                                        <div>Gender</div>
                                        <div>Preferred Vet</div>
                                        <div>Remarks</div>
                                    </div>
                                    <div class="name2">
                                        <div v-if="editBtn">
                                            <span v-if="user.userGender == 1">Male</span>    
                                            <span v-else-if="user.userGender == 2">Female</span>    
                                        </div>  <!-- null -->
                                        <div v-else class="gender al">
                                            <select class="option width100" @change="getGender" name="" id="">
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                            </select>
                                        </div>  
                                        <div v-if="editBtn">{{user.userChoiceDoctor}} <span style="color:white">-</span> </div> <!-- null -->
                                        <div v-else class="inp al"><input type="text" v-model="user.userChoiceDoctor"></div>

                                        <div v-if="editBtn">
                                            <span v-if="user.extend">{{user.extend}}</span>
                                            <span v-else-if="user.extend === null">No remark</span>
                                        </div>
                                        <div v-else style="color:white">-</div>
                                    </div>
                                </div>
                                <div @click="reset" v-if="editBtn">
                                    <el-button class="width100 cursor btnColor" type="primary" :loading="loading">Reset Password</el-button>
                                </div>
                                <div v-else class="Remark">
                                    <textarea name="" id="" cols="30" rows="10" v-model="user.extend"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="payment mg">             
                    <div class="payment_item mg">
                        <div class="payment_title ju bold al">
                            <img src="@/assets/img/account.png" alt="">
                            Payment
                        </div>      
                        <div class=" payment_wrap mg">
                            <div class="sa">
                                <div class="balance">
                                    <div class="tc p_title">
                                        <!-- <div class="ju"><img style="height: 95px;margin-right: 20px" src="@/assets/img/logo.png" alt=""></div> -->
                                        <div> My Balance</div>
                                    </div>
                                    <div class="HK mg ju">
                                        <div class="hk">$</div>
                                        <div class="balance_show">{{payment}}</div>
                                        <div class="hk">HKD</div>
                                    </div>
                                    <div class="active_current mg">is your current balance</div>
                                    <div class="drawal sb mg">
                                        <div class="drawal_btn tc cursor">Withdrawal</div>
                                        <div class="top_up tc cursor" @click="top_up">Top Up</div>
                                    </div>
                                </div>
                                <div class="card">
                                    <!-- <div class="switch flexEnd">
                                        <div class="flex">
                                            <div :class="['paypal_img', { bottom_c: type_pay == 5 }]"><img class="cursor" @click="type_pay = 5" src="@/assets/img/Paypal.png" alt=""></div>
                                            <div :class="['paypal_img', { bottom_c: type_pay == 1 }]"><img class="cursor" @click="type_pay = 1" src="@/assets/img/stripe.png" alt=""></div>
                                            <div :class="['paypal_img', { bottom_c: type_pay == 3 }]">
                                                <div class="cursor" @click="type_pay = 3">
                                                    <img src="@/assets/img/chatpay.png" alt=""> 
                                                    <img style="margin-left:5px" src="@/assets/img/alipay.png" alt=""> 
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex paypal_wrap">
                                        <div class="balance_title w_way" v-show="type_pay == 1">
                                            <div class="way_item">
                                                <div class="p_title">Credit cars details</div>
                                                <div class="clear card_inp">
                                                    <div class="float" id="cardNumber"></div>
                                                    <div class="float" style="margin-left:4%" id="cardExpiry"></div>
                                                    <div class="float" id="cardCvc"></div>
                                                </div>
                                            </div>
                                            <div class="pay_btn white tc mg cursor" @click="submit">
                                                Pay
                                            </div>
                                            <div class=" tc bold ju al" style="margin-top: 12px;font-size:12px;color:black">
                                                <img style="width:20px;" src="@/assets/img/lock.png" alt="">
                                                Card details will be saved securely,based of the industry standard
                                            </div>
                                        </div>  
                                        <div style="width:100%" v-show="type_pay == 5">
                                            <div class="p_title" style="padding: 25px 0;">Paypal details</div>
                                            <div id="paypal-button-container"></div>123
                                        </div>
                                        <div v-show="type_pay == 3" class="sa way_item">
                                            <div>
                                                <div class="p_title ali_title">Alipay or WeChat Pay details</div>
                                                <div class="Alipay">

                                                </div>
                                            </div>
                                            <div>
                                                <div class=" weChat_title white">-</div>
                                                <div class="WeChatPay">

                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="p_title tc">Support Payment</div>
                                    <div class="way_select">
                                        <div class="ju al">
                                            <div><img class="svg_pay" src="@/assets/img/stripe_img.svg" alt=""></div>
                                            <div><img class="svg_pay"  src="@/assets/img/alipay_img.svg" alt=""></div>
                                        </div>
                                        <div class="ju al">
                                            <div><img class="svg_pay"  src="@/assets/img/paypal_img.svg" alt=""></div>
                                            <div><img class="svg_pay"  src="@/assets/img/wechat_img.svg" alt=""></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sa pay_history">
                                <div class="paypal_account sa">
                                    <div class="p_title tc">Other Waller</div>
                                </div>
                                <div class="payment_record">
                                    <div class="p_title">My Payments History</div>
                                    <div class="history_pay auto">
                                        <div class="sb pay_item">
                                            <div class="flex">
                                                <div class="payed_head ju al"><img src="@/assets/img/head.png" alt=""></div>
                                                <div>
                                                    <div class="">Money Added</div>
                                                    <div class="size12">From Credit Card</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>+$66</div>
                                                <div class="size12">12:00 AM</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { pay, updateUserDetails, file } from "@/axios/request.js"
export default {
    data () {
        return {
            value: 'Bank card',
            load: false,
            loading:false,
            editBtn: true,
            // sex:'',
            sex: null,
            sexList:['M','F'],
            cardNumber:'',
            cardExpiry:'',
            cardCvc:'',
            stripe:'',
            payment: 8504,
            user:{},
            type_pay: 5,
            HK: 5,
            goodId: 1
        }
    },
    watch: {
        AllDetail: {
            handler (val) {
                this.user = JSON.parse(JSON.stringify(this.AllDetail))
            },
            immediate: true
        },
    },
    created () {
        // let star = localStorage.getItem("starTime")
        // let end = localStorage.getItem("endTime")
        let star = Date.now()
        let end = Date.now() + 360000
        let check = end - star
        this.payment = this.payment - check/1000
        this.payment = this.payment.toLocaleString()
        this.getBalance()
    },
    mounted () {
        // this.getStripe()
        // this.paypal1()
    },
    computed: {
        AllDetail: {
            get () { return this.$store.state.user.userDetail },
            set (val) {
                this.$store.commit("setUser", {
                    key: "userDetail",
                    value: val
                })
            },
        },
        top_up_mask () { return this.$store.state.user.showback },
    },
    methods: {
        getBalance () {
            let data = {
                userId: localStorage.getItem('userId')
            }
            this.$store.dispatch('getBalance',data)
        },
        closeback () {
            this.$store.commit("setUser", {
                key: "showback",
                value: false
            })
        },
        top_up () {
            console.log(123)
            this.$store.commit('setUser', { key: 'showback', value: true })
        },
        pay_p () {
            var stripe = Stripe("pk_test_51J3CWvILx2JTyAxM0WSRmJP9b9dXD4bZ6f2lwpx2BWJU2c2AXFBSuX3irI5nFGU3Xd5kyB3np1IBkbEH8ebhDbEh00wLNKvYbN"); //测试
            var userId = localStorage.getItem('userId');
            //用户信息
            var goodsId = this.goodId;
            //paymentTypeId  1账户余额 2信用卡 3支付宝 4微信 5paypal
            var paymentTypeId = this.type_pay;

            let data = {
                userId,
                goodsId,
                paymentTypeId
            }
            pay(data).then(res => {
                stripe.redirectToCheckout({ sessionId: res.data.id });
            }).catch(e => {
                console.log(e,666)
            })
        },
        paypal1 () {
            console.log(paypal)
            // paypal.Buttons({
            //     createOrder: function(data, actions) {
            //     // This function sets up the details of the transaction, including the amount and line item details.
            //     return actions.order.create({
            //         purchase_units: [{
            //             amount: {
            //                 value: '0.01'
            //             }
            //         }]
            //     });
            //     },
            //     onApprove: function(data, actions) {
            //     // This function captures the funds from the transaction.
            //     return actions.order.capture().then(function(details) {
            //         // This function shows a transaction success message to your buyer.
            //         // alert('Transaction completed by ' + details.payer.name.given_name);
            //         console.log(details)
            //     });
            //     }
            // }).render('#paypal-button-container');
        },
        getGender (val) {
            this.user.userGender = val.target.value
        },
        updateDetails () {
            console.log(this.user)
            updateUserDetails(this.user).then(res => {
                if (res.data.rtnCode == 200) {
                    this.$store.dispatch("getUser")
                    this.$message({
                        type: 'success',
                        message: "Successfully modified!"
                    })
                    this.load = false
                } else {
                    this.$store.dispatch("getUser")
                    this.$message({
                        type: 'error',
                        message: "Fail to edit!"
                    })
                    this.load = false
                }
                
            }).catch(e => {
                console.log(e)
                this.$store.dispatch("getUser")
                this.$message({
                    type: 'error',
                    message: "Fail to edit!"
                })
                this.load = false
            })
        },
        cancel () {
            this.editBtn = true
        },
        save () {
            this.load = true
            this.updateDetails()
            this.editBtn = true
        },
        getImage (e) {
            if (localStorage.getItem("platform") == 1) {
                var formData = new FormData();
                formData.append('file', e.target.files[0]);
                file(formData).then(res => {
                    if (res.data.rtnCode == 200) {
                        this.user.userImage = res.data.data
                        updateUserDetails(this.user).then(res => {
                            if (res.data.rtnCode == 200) {
                                this.$store.dispatch("getUser")
                                
                            } else {
                                
                            }
                        }).catch(e => {
                            console.log(e)
                        })
                    } else {
                        this.user = {}
                    }
                })
            } else if (localStorage.getItem("platform") == 2) {
                var formData = new FormData();
                formData.append('file', e.target.files[0]);
                file(formData).then(res => {
                    if (res.data.rtnCode == 200) {
                        this.user.doctorImage = res.data.data
                        this.user.doctorName = "Beck"
                        this.getUser()
                        updateVetDetails(this.user).then(res => {
                            console.log(res,"更换医生头像",this.user)
                            if (res.data.rtnCode == 200) {
                                this.getUser()
                            }
                        }).catch(e => {
                            console.log(e)
                        })
                    } else {
                        this.user = {}
                    }
                })
            }
        },





        reset () {
            this.$router.push("/reset")
        },
        edit () {
            this.editBtn = false
        },









        
        
        submit () {
            this.stripe.createToken(this.cardNumber,{}).then(res => {
                console.log(res)
            })
        },
        getStripe () {
            this.stripe = Stripe("pk_test_51IjH7YCnXywSfyXcBzfaGhIxZURYgDKaCCMu9gJlNctN2R1Li9YOWoK5VUGsaK3CBD2bTbVsRagiCPYKu9ScTcIQ00ZqdIqvDG",{
                locale: 'en'    //修改语言
            })
            var element = this.stripe.elements()
            var elementStyle = {
                base:{
                    lineHeight:'50px'
                }
            }
            this.cardNumber = element.create('cardNumber',{
                style:elementStyle,
                showIcon: true
            })
            this.cardNumber.mount("#cardNumber")
            var elementStyle = {
                base:{
                    lineHeight:'50px'
                }
            }
            this.cardExpiry = element.create('cardExpiry',{
                style:elementStyle,
            })
            this.cardExpiry.mount("#cardExpiry")
            var elementStyle = {
                base:{
                    lineHeight:'50px'
                }
            }
            this.cardCvc = element.create('cardCvc',{
                style:elementStyle
            })
            this.cardCvc.mount("#cardCvc")
        }
    }
}
</script>

