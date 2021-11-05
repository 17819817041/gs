<style lang='less' scoped>
    .UserMessage {
        height: 100%;
        // background: #EEF3F9;
        overflow: auto;
        margin-top: 20px;
    }
    .back {
        width: 97%;
        font-size: 20px;
        img {
            width: 20px;
            height: 20px;
            @media screen and (max-width: 960px) {
                width: 15px;
                height: 15px;
            }
        }
        @media screen and (max-width: 960px) {
            font-size: 15px;
        }
    }
    .headmsg_wrap {
        width: 100%;
        @media screen and (max-width: 1000px) {
            display: block;
        }
    }
    .message_wrap {
        padding: 100px 100px 60px 100px;
        width: 70%;
        max-width: 1000px;
        margin-top: 20px;
        background: white;
        @media screen and (max-width: 844px) and (max-height: 500px) {
            width: 80%;
            padding: 20px 50px 30px 50px;
        }
        @media screen and (max-width: 700px) {
            width: 100%;
            padding: 50px 50px 30px 50px;
        }
        @media screen and (max-width: 564px) {
            width: 100%;
            padding: 20px 10px 30px 10px;
            height: calc(100% - 40px);
        }
    }
    .head {
        width: 30%;
        border-right: solid 1px rgb(212, 212, 212);
        height: 270px;
        @media screen and (max-width: 1000px) {
            width: 100%;
            height: auto;
            border: none;
        }
    }
    .message {
        width: 70%;
        padding-left: 100px;
        @media screen and (max-width: 1000px) {
            width: 100%;
            padding-left: 0px;
        }
    }
    .img_wrap {
        width: 100px;
        height: 100px;
        border: solid 1px gray;
        @media screen and (max-width: 844px) and (max-height: 500px) {
            width: 70px;
            height: 70px;
        }
        @media screen and (max-width: 700px) {
            width: 70px;
            height: 70px;
        }
    }
    .chooseHead {
        padding: 3px 0px;
        width: 90px;
        font-size: 13px;
        color: gray;
        border: solid 1px rgb(180, 180, 180);
        border-radius: 14px;
        margin-top: 25px;
        @media screen and (max-width: 844px) and (max-height: 500px) {
            width: 70px;
            font-size: 12px;
            margin-top: 15px;
        }
        @media screen and (max-width: 700px) {
            width: 70px;
            font-size: 12px;
            margin-top: 15px;
        }
    }
    .name {
        font-size: 20px;
        margin-top: 70px;
        @media screen and (max-width: 1000px) {
            margin: 40px 0 0 50px;
        }
    }
    .message_msg {
        margin-top: 10px;
    }
    .message_index {
        border-bottom: solid 1px rgb(231, 231, 231);
        padding: 25px 0 10px 0;
    }
    .message_title {
        font-size: 14px;
    }
    .message_text {
        font-size: 12px;
        color: gray;
    }
    .edit_btn {
        padding: 5px 17px;
        color: #228EFF;
        font-size: 12px;
        border-radius: 14px;
        border: solid 1px rgb(228, 228, 228);
        img {
            width: 17px;
            margin-right: 5px;
        }
    }
    .save {
        padding: 5px 30px;
        background: #228EFF;
        color: white;
        font-size: 13px;
        border-radius: 14px;
        margin-top: 70px;
        img {
            width: 18px;
            height: 18px;
            margin-right: 5px;
        }
        @media screen and (max-width: 564px) {
            font-size: 12px;
            margin-top: 40px;
        }
    }
    .border {
        @media screen and (max-width: 1000px) {
            display: flex;
            align-items: center;
        }
    }
</style>
<template>
    <div class="UserMessage noBar">
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">個人中心
        </div>
        <div class="message_wrap mg">
            <div class="headmsg_wrap flex">
                <div class="head flex">
                    <div class="border">
                        <div>
                            <div class="img_wrap radius mg ju al"><img style="height: 150%;" src="@/assets/img/defaultImg.png" alt=""></div>
                            <div class="chooseHead mg tc">選擇頭像</div>
                        </div>
                        <div class="name bold">User Name</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message_index">
                        <div class="message_title bold">電郵地址</div>
                        <div class="message_msg sb al">
                            <div class="message_text">wanderfull@gmail.com</div>
                            <div class="edit_btn ju al cursor">
                                <img src="@/assets/img/email.png" alt="">
                                修改電郵
                            </div>
                        </div>
                    </div>
                    <div class="message_index">
                        <div class="message_title bold">聯繫電話</div>
                        <div class="message_msg sb al">
                            <div class="message_text">+852 12345678</div>
                            <div class="edit_btn ju al cursor">
                                <img src="@/assets/img/phone.png" alt="">
                                修改聯繫電話
                            </div>
                        </div>
                    </div>
                    <div class="message_index">
                        <div class="message_title bold">密碼</div>
                        <div class="message_msg sb al">
                            <div class="message_text">**********</div>
                            <div class="edit_btn ju al cursor">
                                <img src="@/assets/img/password.png" alt="">
                                修改密碼
                            </div>
                        </div>
                    </div>
                    <div class="message_index">
                        <div class="message_title bold">賬戶啟用時間</div>
                        <div class="message_msg sb al">
                            <div class="message_text">2021-11-05</div>
                            <!-- <div class="edit_btn ju al">
                                <img src="@/assets/img/email.png" alt="">
                                修改電郵
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="ju">
                <div class="save mg al cursor">
                    <img src="@/assets/img/download.png" alt="">保存設置
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
        back () {
            this.$router.back()
        },
    }
}
</script>

