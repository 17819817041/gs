<style lang="less" scoped>
@import "@/less/css.less";
    .setting {
        width: 100%;
        height: 100%;
        position: relative;
        .top_up_mask {
            position: absolute;
            width: 50%;
            min-width: 265px;
            top: 50%;
            left: 50%;
            background: white;
            box-shadow: 0px 3px 3px 0px #D0D0D0;
            border-radius: 15px;
            z-index: 1000;
            transform: translate(-50%,-50%);
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
        transition: 0.1s;
        color: @explanTitle;
        @media screen and (max-width: 1000px){
            font-size: 20px;
        }
    }
    .size19 {
        font-size: 19px;
        font-weight: bold;
        color: @explanTitle;
        transition: 0.1s;
        @media screen and (max-width: 1000px){
            font-size: 16px;
            font-weight: bold;
        }
    }
    .size16_s {
        font-size: 19px;
        color: gray;
        transition: 0.1s;
        @media screen and (max-width: 1000px){
            font-size: 16px;
            // font-weight: bold;
        }
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
            @media screen and (max-width: 800px) {
                top: 27px;
                width: 60px;
                padding: 3px 0;
                font-size: 14px;
                cursor: none;
            }
        }
    }
    .save {
        width: 90px;
        font-size: 17px;
        padding: 8px 0;
        border-radius: 12px;
        background: @hdColor;
        box-shadow: 0 1px 2px 1px rgb(214, 210, 210);
        @media screen and (max-width: 800px) {
            width: 60px;
            padding: 3px 0;
            font-size: 14px;
            cursor: none;
        }
    }
    .cancel {
        width: 90px;
        font-size: 17px;
        border-radius: 12px;
        margin-left: 10px;
        background: @helpBtn;
        padding: 8px 0px;
        box-shadow: 0 1px 2px 1px rgb(214, 210, 210);
        @media screen and (max-width: 800px) {
            width: 60px;
            padding: 3px 0;
            font-size: 14px;
            cursor: none;
        }
        @media screen and (max-width: 400px) {
            margin-left: 0;
            margin-top: 8px;
        }
    }
    .wrap_save {
        position: absolute;
        right: 20px;
        top: 0px;
        font-size: 15px;
        @media screen and (max-width: 800px) {
            top: 27px;
            font-size: 14px;
        }
        @media screen and (max-width: 400px) {
            top: 27px;
            font-size: 13px;
            flex-direction: column;
        }
    }
    .detail {
        padding: 50px 0;
        @media screen and (max-width: 564px) {
            flex-direction: column;
        }
    }
    .btnColor {
        width: 70%;
        background: @logout !important;
        border: none !important;
        border-radius: 17px;
        margin-top: 20px;
    }
    .person_image{
        width: 27%;
        @media screen and (max-width: 564px) {
            margin: auto;
            min-width: 100px;
        }
        .felame {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            overflow: hidden;
            transition: 0.1s;
            @media screen and (max-width: 1300px) {
                width: 180px;
                height: 180px;
            }
            @media screen and (max-width: 1100px) {
                width: 140px;
                height: 140px;
            }
            @media screen and (max-width: 800px) {
                width: 115px;
                height: 115px;
            }
            @media screen and (max-width: 564px) {
                width: 75px;
                height: 75px;
            }
        }
    } 
    .message1 {
        min-width: 270px;
        white-space: nowrap;
    }
    .message1  {
        // min-width: 220px;
        width: 30%;
    }
    .message2 {
        width: 40%;
        @media screen and (max-width: 800px) {
            width: 100%;
        }
    }
    .message2_item {
        width: 100%;
    }
    .name1 div{
        margin-bottom: 10px;
        height: 25px;
    }
    .name1 .inp input {
        color:gray;
    }
    .name1:nth-child(1) {
        padding-right: 25px;
    }
    .name2_t {
        min-width: 133.06px;
        white-space: nowrap;
    }
    .name2 .name_item {
        height:25px;
        margin-bottom: 20px;
    }
    .name_item_1 {
        width: 100%;
        min-width: 140px;
    }
    .name2:nth-child(1) {
        padding-right: 25px;
    }
    .name2_2 {
        @media screen and (max-width: 800px) {
            transform: translate(-2.5px, -7px);
        }
    }
    .inp {
        width: 140px;
        border: solid 1px ;
        border-radius: 10px;
        overflow: hidden;
        height: 25px;
        padding-left: 15px;
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
            @media screen and (max-width: 800px) {
                display: none;
            }
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
        min-width: 250px;
        border: solid 1px;
        border-radius: 20px;
        overflow: hidden;
        .textarea_el {
            width: 100%;
            font-size: 15px;
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
        @media screen and (max-width: 600px) {
            padding: 7px 15px;
        }
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
        @media screen and (max-width: 650px) {
            padding: 20px 20px;
        }
        .back_check {
            img {
                width: 12px;
            }
        }
    }
    .Amount {
        padding: 10px 50px;
        @media screen and (max-width: 650px) {
            padding: 10px 20px;
        }
        .select_item {
            width: 100%;
        }
    }
    .amount_item {
        width: 30%;
        min-width: 105px;
        padding: 5px 10px;
        color: #0C4E76;
        border: solid gray 1px;
        border-radius: 7px;
        margin-top: 15px;
        margin: 15px 1.5% 0px 1.7%;
        @media screen and (max-width: 1076px) {
            width: 45%;
        }
    }
    .amount_item:hover {
        background: rgb(243, 243, 243);
    }
    .pay_btn {
        width: 63%;
        border-radius: 10px;
        overflow: hidden;
        height: 59px;
        color: white;
        margin: 30px auto;
        position: relative;
        background: #FC6011;
    }
    .pay_W {
        padding: 0  50px;
        @media screen and (max-width: 650px) {
            padding: 0px 20px;
        }
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
        width: 100%;
        // margin-left: 25px;
        margin: 0 10px;
        border-radius: 12px;
        padding: 0 20px;
        box-shadow: 0 2px 2px 2px #e7e4e4;
    }
    .history_pay {
        max-height: 150px;
        overflow: auto;
        .pay_item {
            margin-bottom: 10px;
            border-bottom: solid 1px rgb(230, 230, 230);
            padding: 10px;
        }
    }
    .history_pay::-webkit-scrollbar {
        width: 8px;
    }
    .history_pay::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background: rgb(216, 216, 216);
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
    .PAY_BTN {
        background: @googleBtn !important;
        border: none !important;
        font-size: 16px;
        padding: 16.5px 0;
    }
    .point {
        width: calc(100% + 14px);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 500;
        pointer-events: none;
        height: 59px;
        background: #FC6011;
        overflow: hidden;
        border-radius: 12px;
        transform: translate(-7px, 0);
    }
    .COLOR {
        color: #FF970F;
    }
    .COLOR1 {
        color: #FF3E61;
    }
    // .message1_item {
        
    // }
    .user_remark {
        color: #656565;
        max-height: 63px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 2;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
    }
    .height50 {
        height: 50px !important;
        @media screen and (max-width: 1000px) {
            height: 41px !important;
        }
    }
    .img_wrap_p {
        position: relative;
        .update_img {
            position: absolute;
            height: 100%;
            left: 50%;
            top: 0;
            transform: translate(-50%,0);
            z-index: 10;
            cursor: pointer;
        }
    }
    .my_msg_detail {
        @media screen and (max-width: 810px) {
            flex-direction: column;
        }
        @media screen and (max-width: 600px) {
            margin: auto;;
        }
    }
    .mobile_t {
        @media screen and (max-width: 810px) {
            width: 133.06px;
        }
    }
</style>

<template>
    <div class="setting" v-loading="load">
        <div class="top_up_mask" v-show="top_up_mask">
            <div class="mask_title flexEnd al">
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
            <div class="pay_btn tc bold cursor al" v-show="type_pay == 5">
                <div id="paypal-button-container"></div>
                <div class="point cursor al">
                    <el-button class="PAY_BTN width100" type="primary" :loading="pay_loading">
                        <!-- <span class="span">Login</span> -->
                        Continue
                    </el-button>
                </div>
            </div>
            <div class="pay_btn tc bold cursor al" @click="pay_p" v-show="type_pay !==5">
                <el-button class="PAY_BTN width100" type="primary" :loading="pay_loading">
                    <!-- <span class="span">Login</span> -->
                    Continue
                </el-button>
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
                    <div class="detail flex width100">
                        <div class="person_image ju">
                            <div class="felame">
                                <label for="ava3" :class="['label_i']">
                                    <input type="file" id="ava3" v-if="!editBtn" v-show="false" @change="getImage">
                                    <div :class="['ju circle  img_wrap_p', { cursor: !editBtn } ]" v-loading="img_loading"
                                    element-loading-text="Loading..."
                                    element-loading-spinner="el-icon-loading"
                                    element-loading-background="rgba(0, 0, 0, 0.8)">
                                        <img class="update_img" :src="showimg" v-if="showimg" alt="">
                                        <img style="height:100%;" v-if="user.userImage" :src="user.userImage" alt="" mode="widthFix">
                                        <img style="height:100%;" v-else :src="default_img" alt="">
                                        <!-- <i class="el-icon-picture-outline Icon" v-else></i> -->
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="flex my_msg_detail" style="width:83%">
                            <div class="message1">   
                                <div class="message1_item ts flex size22 al">
                                    <div class="name1 size19 mobile_t">
                                        <div class="">User ID</div>
                                        <div>Name</div>
                                        <div>Age</div>
                                        <div>Location</div>
                                        <div>Mobile</div>
                                    </div>
                                    <div class="name1 size16_s">
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
                                <div class="message2_item flex ts al">
                                    <div class="name2 name2_t size19">
                                        <div class="name_item ">Gender</div>
                                        <div class="name_item ">Preferred Vet</div>
                                        <div class="name_item height50">Remarks</div>
                                    </div>
                                    <div class="name2 size16_s">
                                        <div class="name_item name_item_1" v-if="editBtn">
                                            <span v-if="user.userGender == 1">Male</span>    
                                            <span v-else-if="user.userGender == 2">Female</span>
                                            <span v-else-if="user.userGender == 0">No data</span>    
                                        </div>  <!-- null -->
                                        <div v-else class="gender al name_item name2_2 name_item_1">
                                            <el-select class="option width100" @change="getGender" name="" id="" v-model="Gender">
                                                <el-option value="1" label="Male"></el-option>
                                                <el-option value="2" label="Female"></el-option>
                                            </el-select>
                                        </div>  
                                        <div class="name_item name_item_1" v-if="editBtn">
                                            <span v-if="user.userChoiceDoctor">{{bestDocName}}</span>
                                            <span v-else>No Preferred Vet</span>
                                        </div>
                                        <div v-else class="gender al name2_2 name_item ">
                                            <el-select class="option width100" @change="userChoiceDoctor" name="" id="" v-model="bestDocName">
                                                <el-option v-for="(doc) in myBestDoc" :key="doc.userId" :value="doc.userId" :label="doc.doctorName"></el-option>
                                            </el-select>
                                        </div>
                                        <div class="name_item user_remark height50" v-if="editBtn">
                                            <span v-if="user.extend">{{user.extend}}</span>
                                            <span v-else-if="user.extend === null">No remark</span>
                                            <span v-else-if="user.extend == ''">No remark</span>
                                        </div>
                                        <div class="name_item name2_2" v-else style="color:white">-</div>
                                    </div>
                                </div>
                                <div @click="reset" v-if="editBtn">
                                    <el-button class="width100 cursor btnColor" style="min-width:155px" type="primary" :loading="loading">Reset Password</el-button>
                                </div>
                                <div v-else class="Remark">
                                    <el-input
                                        class="textarea_el"
                                        type="textarea"
                                        placeholder="Please enter content"
                                        v-model="user.extend"
                                        maxlength="500"
                                        show-word-limit
                                    ></el-input>
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
                                        <div> My Balance</div>
                                    </div>
                                    <div class="HK mg ju">
                                        <div class="hk">$</div>
                                        <div class="balance_show">{{my_Balance.balance}}</div>
                                        <div class="hk">HKD</div>
                                    </div>
                                    <div class="active_current mg">is your current balance</div>
                                    <div class="drawal sb mg">
                                        <div class="drawal_btn tc cursor">Withdraw</div>
                                        <div class="top_up tc cursor" @click="top_up">Top Up</div>
                                    </div>
                                </div>
                                <div class="card">
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
                            <!-- <div class="sa pay_history">
                                <div class="payment_record">
                                    <div class="p_title">My Payments History</div>
                                    <div class="history_pay auto ">
                                        <div class="sb pay_item" v-for="(item,i) in payList" :key="i">
                                            <div class="flex">
                                                <div class="payed_head ju al">
                                                    <img :src="item.userImage" v-if="item.userImage" alt="">
                                                    <img :src="AllDetail.userImage" v-else-if="item.userImage === null" alt="">
                                                </div>
                                                
                                                <div>
                                                    <div class="">Money Added</div>
                                                    <div class="size12">{{item.orderType}}</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div :class="[ 'te', {'COLOR': item.paymentRecord.orderTypeId == 1}, {'COLOR1': item.paymentRecord.orderTypeId == 4}]">
                                                    <span v-if="item.orderType == 4">-</span>
                                                    <span v-else-if="item.orderType !== 4">+</span>
                                                    ${{item.paymentRecord.price}}</div>
                                                <div class="size12">{{item.paymentRecord.createAt}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   -->
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
import { pay, updateUserDetails, file, bestDoc, paymentRecord } from "@/axios/request.js"
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
            user:{},
            type_pay: 5,
            HK: 5,
            goodId: 5,
            pay_loading: false,
            data: 0,
            payList: [],
            Gender: '',
            myBestDoc: [],
            bestDocName: '',
            showimg: '',
            img_loading: false
        }
    },
    watch: {
        AllDetail: {
            handler (val) {
                this.user = JSON.parse(JSON.stringify(this.AllDetail))
                this.getBest()
                if (this.user.userGender == 1) {
                    this.Gender = 'Male'
                } else if (this.user.userGender == 2) {
                    this.Gender = 'Female'
                }
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
        this.paymentRecord()
        this.changeDoc()
    },
    mounted () {
        this.getPaypal()
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
        my_Balance () { return this.$store.state.user.balance },
        default_img () { return this.$store.state.user.default_img },
    },
    methods: {
        userChoiceDoctor (val) {
            this.user.userChoiceDoctor = val
            this.myBestDoc.forEach(item => {
                if (item.userId == val) {
                    this.bestDocName = item.doctorName
                }
            })
        },
        getBest () {
            this.myBestDoc.forEach(item => {
                if (item.userId == this.user.userChoiceDoctor) {
                    this.bestDocName = item.doctorName
                }
            })
        },
        changeDoc () {
            bestDoc().then(res => {
                this.myBestDoc = res.data.data
                this.userChoiceDoctor(this.user.userChoiceDoctor)
            })
        },
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
            this.$store.commit('setUser', { key: 'showback', value: true })
        },
        paymentRecord () {
            let data = {
                userId: localStorage.getItem('userId'),
                pageNum: 1,
                pageSize: 100
            }
            paymentRecord(data).then(res => {
                if (res.data.rtnCode == 200) {
                    var D = new Date()
                    let a = new Date().toLocaleDateString()
                    var k = new Date(a).getTime()
                    var b = new Date(res.data.data.pageT[11].paymentRecord.createAt.split(' ')[0].split('-').join('/')).getTime()
                    res.data.data.pageT.forEach(item => {
                        if (new Date( item.paymentRecord.createAt.split(' ')[0].split('-').join('/')).getTime() == k) {
                            item.paymentRecord.createAt = 'Today'
                        } else {
                            var D = new Date(item.paymentRecord.createAt.split(' ')[0]).toDateString()
                            item.paymentRecord.createAt = D.split(' ')[0] + ',' + D.split(' ')[2] + ' ' + D.split(' ')[1] + ' ' + D.split(' ')[3]
                        }
                    })
                    this.payList = res.data.data.pageT.reverse()
                } else {
                    
                }
            }).catch(e => {
                console.log(e)
            })
        },
        pay_p () {
            if (this.type_pay == 5) {

            } else {
                this.pay_loading = true
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
                    this.pay_loading = false
                }).catch(e => {
                    console.log(e)
                    this.pay_loading = false
                })
            }
        },
        getPaypal () {
            // this.getGoodsId()
            let that = this
            paypal.Buttons({
                // env: 'sandbox', /* sandbox | production */
                style: {
                layout: 'horizontal',   // 布局方式：vertical: 垂直，horizontal：水平，
                size:   'responsive',   /* medium | large | responsive*/
                shape:  'rect',         /* pill | rect*/
                color:  'gold',         /* gold | blue | silver | black*/
                label: 'paypal',
                tagline: false
                },
                commit: false, // Show a 'Pay Now' button
                /* createOrder() is called when the button is clicked */

                createOrder: function() {
                /* Set up a url on your server to create the order */
                var CREATE_URL = '/api/stripe/createOrder?userId=' + localStorage.getItem('userId') + '&goodsId=' +  that.goodId + '&paymentTypeId=5';
                /* Make a call to your server to set up the payment */
                return fetch(CREATE_URL,{
                    method: 'post'
                }).then(function(res) {
                    return res.json();
                }).then(function(data) {
                    if(data.state == 1)
                    return data.content.id;
                    else{
                    alert(data.msg);
                    }
                });

                },
                /* onApprove() is called when the buyer approves the payment */
                onApprove: function(data, actions) {
                /* Set up a url on your server to execute the payment */
                var EXECUTE_URL = '/api/stripe/executePayment';
                /* Set up the data you need to pass to your server */
                /* Make a call to your server to execute the payment */
                return fetch(EXECUTE_URL, {
                    method: 'post',
                    body: JSON.stringify({
                    orderId: data.orderID
                    })
                }).then(function(res) {
                    return res.json();
                }).then(function(data) {
                    if(data.state == 1)
                    // alert(data.content.id,orderId)
                    window.location.href='/api/stripe/successs?orderId='+data.content.id;
                    else{
                    alert(data.msg);
                    }
                });

                },onCancel: function() {
                return window.location.href='/api/stripe/paypalCancel';
                }

            }).render('#paypal-button-container');
        },
        getGender (val) {
            this.user.userGender = val
        },
        updateDetails () {
            updateUserDetails(this.user).then(res => {
                setTimeout(() => {
                    this.showimg = ''
                },700)
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
            this.showimg = ''
            this.user.userImage = this.AllDetail.headUr
        },
        save () {
            // var reg = /^1[0-9]{10}$/;
            // if (reg.test(this.user.userPhone)) {
            //     this.load = true
            //     this.updateDetails()
            //     this.editBtn = true
            // } else {
            //     this.$message({
            //         type: 'error',
            //         message: 'Phone number format is incorrect!'
            //     })
            // }

            this.load = true
            this.updateDetails()
            this.editBtn = true
        },
        getImage (e) {
            this.dealImg(e.target.files[0],(img) => {
                var formData = new FormData();
                formData.append('file', img);
                this.img_loading = true
                file(formData).then(res => {
                    this.img_loading = false
                    if (res.data.rtnCode == 200) {
                        this.user.userImage = res.data.data
                        this.showimg = res.data.data
                    } else {
                        this.user = {}
                        this.showimg = ''
                    }
                }).catch(e => {
                    this.img_loading = false
                    this.$message({
                        type: 'error',
                        message: 'Picture is too large or formatted incorrectly!'
                    })
                })
            })
        },
        reset () {
            this.$router.push("/reset")
        },
        edit () {
            this.editBtn = false
        },
    }
}
</script>

