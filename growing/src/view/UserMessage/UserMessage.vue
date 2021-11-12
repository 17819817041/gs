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
    .addCate {
        border: solid 1px rgb(206, 206, 206);
        padding: 0 20px;
        box-shadow: 2px 2px 6px rgb(224, 224, 224) inset;
        height: 32px;
		white-space: nowrap;
    }
    .verify {
        width: 100%;
        border: solid 1px rgb(184, 184, 184);
        border-radius: 4px;
        margin-top: 4px;
        input {
            border: none;
            outline: none;
            width: 35%;
        }
        .getVerify {
            width: 65%;
            font-size: 12px;
            line-height: 30px !important;
            color: rgb(250, 20, 20);
        }
    }
    .sizetitle {
        transform: scale(0.9);
        color: gray;
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
                            <div class="img_wrap radius mg ju al">
                                <img style="height: 100%;" :src="imgUrl" v-if="imgUrl" alt="">
                                <img v-else style="height: 150%;" src="@/assets/img/defaultImg.png" alt="">
                            </div>
                            <label for="url">
                                <div class="chooseHead cursor mg tc">選擇頭像</div>
                                <input type="file" id="url" @change="getUrl" v-show="false">
                            </label>
                        </div>
                        <div class="name bold">User Name</div>
                    </div>
                </div>
                <div class="message">
                    <div class="message_index">
                        <div class="message_title bold">電郵地址</div>
                        <div class="message_msg sb al">
                            <div class="message_text">{{email}}</div>
                            <el-popover
                                placement="bottom"
                                trigger="manual"
                                v-model="visible">
                                <div class="" style="width: 225px;" v-show="active">
                                    <div class="al" style="margin-bottom: 10px;">
                                        <img src="@/assets/img/notice.png" alt="">
                                        <div class="size12 sizetitle">您正使用電子郵件驗證身份</div>
                                    </div>
                                    <el-form :model="ruleForm" status-icon label-position='right' :rules="rules" ref="form" label-width="65px">
                                        <el-form-item label="電郵" style="margin-bottom: 0">
                                            <div class="message_text">{{email}}</div>
                                        </el-form-item>
                                        <el-form-item prop="veri" label="驗證碼">
                                            <div class="al">
                                                <div class="verify al">
                                                    <input type="text" @keyup.enter="sure" v-model="ruleForm.veri" oninput="value=value.replace(/[^\d]/g,'')">
                                                    <div class="getVerify cursor tc" @click="getVerify">點擊獲取驗證碼</div>
                                                </div>
                                            </div>
                                        </el-form-item>
                                    </el-form>
                                    <div class="sb">
                                        <div class="addCate cursor al" @click='sure' >
                                            確定
                                        </div>
                                        <div class="addCate cursor al" @click='visible = false,active = true'>取消</div>
                                    </div>
                                </div>
                                <div class="width: 225px" v-show="!active">
                                    <el-form :model="ruleForm1" status-icon label-position='right' :rules="rules1" ref="form1">
                                        <div class="size12" style="padding: 5px;">請輸入您修改的電郵地址</div>
                                        <el-form-item prop="newemail">
                                            <el-input v-model="ruleForm1.newemail" @keyup.enter.native="sure1"></el-input>
                                        </el-form-item>
                                    </el-form>
                                    <div class="sb">
                                        <div class="addCate cursor al" @click='sure1' >
                                            確定
                                        </div>
                                        <div class="addCate cursor al" @click='visible = false,active = true'>取消</div>
                                    </div>
                                </div>
                                <div class="edit_btn ju al cursor" slot="reference" 
                                @click="visible = true,ruleForm.veri = '',ruleForm1.newemail = '',visible1 = false,visible2 = false">
                                    <img src="@/assets/img/email.png" alt="">
                                    修改電郵
                                </div>
                            </el-popover>
                        </div>
                    </div>
                    <div class="message_index">
                        <div class="message_title bold">聯繫電話</div>
                        <div class="message_msg sb al">
                            <div class="message_text">+852 {{phone}}</div>
                            <el-popover
                                placement="bottom"
                                trigger="manual"
                                v-model="visible1">
                                <div class="" style="width: 245px;" v-show="active1">
                                    <div class="al" style="margin-bottom: 10px;">
                                        <img src="@/assets/img/notice.png" alt="">
                                        <div class="size12 sizetitle">您正使用電子郵件驗證身份</div>
                                    </div>
                                    <el-form :model="ruleForm2" status-icon label-position='right' :rules="rules2" ref="form2" label-width="75px">
                                        <el-form-item label="電郵" style="margin-bottom: 0">
                                            <div class="message_text">{{email}}</div>
                                        </el-form-item>
                                        <el-form-item prop="veri" label="驗證碼">
                                            <div class="al">
                                                <div class="verify al">
                                                    <input type="text" @keyup.enter="sure2" v-model="ruleForm2.veri" oninput="value=value.replace(/[^\d]/g,'')">
                                                    <div class="getVerify cursor tc" @click="getVerify1">點擊獲取驗證碼</div>
                                                </div>
                                            </div>
                                        </el-form-item>
                                    </el-form>
                                    <div class="sb">
                                        <div class="addCate cursor al" @click='sure2' >
                                            確定
                                        </div>
                                        <div class="addCate cursor al" @click='visible1 = false,active1 = true'>取消</div>
                                    </div>
                                </div>
                                <div class="width: 225px" v-show="!active1">
                                    <el-form :model="ruleForm3" status-icon label-position='right' :rules="rules3" ref="form3">
                                        <div class="size12" style="padding: 5px;">請輸入您修改的聯繫電話</div>
                                        <el-form-item prop="newphone">
                                            <el-input @keyup.enter.native="sure3" v-model="ruleForm3.newphone"></el-input>
                                        </el-form-item>
                                    </el-form>
                                    <div class="sb">
                                        <div class="addCate cursor al" @click='sure3'>
                                            確定
                                        </div>
                                        <div class="addCate cursor al" @click='visible1 = false,active1 = true'>取消</div>
                                    </div>
                                </div>
                                <div class="edit_btn ju al cursor" slot="reference" 
                                @click="visible1 = true,ruleForm2.veri = '',visible = false,visible2 = false">
                                    <img src="@/assets/img/phone.png" alt="">
                                    修改聯繫電話
                                </div>
                            </el-popover>
                        </div>
                    </div>
                    <div class="message_index">
                        <div class="message_title bold">密碼</div>
                        <div class="message_msg sb al">
                            <div class="message_text">**********</div>
                            <el-popover
                                placement="bottom"
                                trigger="manual"
                                v-model="visible2">
                                <div class="" style="width: 245px;" v-show="active2">
                                    <div class="al" style="margin-bottom: 10px;">
                                        <img src="@/assets/img/notice.png" alt="">
                                        <div class="size12 sizetitle">您正使用電子郵件驗證身份</div>
                                    </div>
                                    <el-form :model="ruleForm6" status-icon label-position='right' :rules="rules6" ref="form4" label-width="75px">
                                        <el-form-item label="電郵" style="margin-bottom: 0">
                                            <div class="message_text">{{email}}</div>
                                        </el-form-item>
                                        <el-form-item prop="veri" label="驗證碼">
                                            <div class="al">
                                                <div class="verify al">
                                                    <input type="text" @keyup.enter="sure4" v-model="ruleForm6.veri" oninput="value=value.replace(/[^\d]/g,'')">
                                                    <div class="getVerify cursor tc" @click="getVerify2">點擊獲取驗證碼</div>
                                                </div>
                                            </div>
                                        </el-form-item>
                                    </el-form>
                                    <div class="sb">
                                        <div class="addCate cursor al" @click='sure4' >
                                            確定
                                        </div>
                                        <div class="addCate cursor al" @click='visible2 = false,active2 = true'>取消</div>
                                    </div>
                                </div>
                                <div style="width: 265px" v-show="!active2">
                                    <el-form :model="ruleForm5" status-icon label-position='right' :rules="rules5" ref="form5">
                                        <!-- <div class="size12" style="padding: 5px;">請輸入您修改的聯繫電話</div> -->
                                        <el-form-item prop="oldPassword" label="情輸入原密碼" style="margin-bottom: 12px;">
                                            <el-input v-model="ruleForm5.oldPassword"></el-input>
                                        </el-form-item>
                                        <el-form-item prop="newPassword" label="請輸入您修改的密碼">
                                            <el-input @keyup.enter.native="sure5" v-model="ruleForm5.newPassword"></el-input>
                                        </el-form-item>
                                    </el-form>
                                    <div class="sb">
                                        <div class="addCate cursor al" @click='sure5'>
                                            確定
                                        </div>
                                        <div class="addCate cursor al" @click='visible2 = false,active2 = true'>取消</div>
                                    </div>
                                </div>
                                <div class="edit_btn ju al cursor" slot="reference" 
                                @click="visible2 = true,ruleForm6.veri = '',visible1 = false,visible = false">
                                    <img src="@/assets/img/password.png" alt="">
                                    修改密碼
                                </div>
                            </el-popover>
                        </div>
                    </div>
                    <div class="message_index">
                        <div class="message_title bold">賬戶啟用時間</div>
                        <div class="message_msg sb al">
                            <div class="message_text">2021-11-05</div>
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
            imgUrl: '',
            email: 'wanderfull@gmail.com',
            phone: '12345678',
            password: '',
            visible: false,
            visible1: false,
            visible2: false,
            active: true,
            active1: true,
            active2: true,
            ruleForm: {
                veri: ''
            },
            ruleForm1: {
                newemail: '',
            },
            ruleForm2: {
                veri: '',
            },
            ruleForm3: {
                newphone: '',
            },

            ruleForm5: {
                oldPassword: '',
                newPassword: '',
            },
            ruleForm6: {
                veri: '',
            },
            rules: {
                veri: [
                    { required:true, message:'請輸入驗證碼', trigger:"blur" }
                ],
            },
            rules1: {
                newemail: [
                    { required:true, message:'請輸入電郵地址', trigger:"blur" },
                    { pattern: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.]){1,2}[A-Za-z\d]{2,5}$/g, message: '請輸入正確的郵箱格式' }
                ],
            },
            rules2: {
                veri: [
                    { required:true, message:'請輸入驗證碼', trigger:"blur" }
                ],
            },
            rules3: {
                newphone: [
                    { required:true, message:'請輸入聯繫電話', trigger:"blur" }
                ],
            },
            rules5: {
                newPassword: [
                    { required:true, message:'請輸入新密碼', trigger:"blur" },  
                    { pattern: /^[A-Za-z\d]{8,}$/, message: '至少8個字符，只限字母和數字,不能包含特殊符號' }
                ],
                oldPassword: [
                    { required:true, message:'請輸入原密碼', trigger:"blur" }
                ],
            },
            rules6: {
                veri: [
                    { required:true, message:'請輸入驗證碼', trigger:"blur" }
                ],
            },
        }
    },
    methods: {
        back () {
            this.$router.back()
        },
        getVerify () {
            this.ruleForm.veri = 324864  
        },
        getVerify1 () {
            this.ruleForm2.veri = 324864  
        },
        getVerify2 () {
            this.ruleForm6.veri = 324864  
        },
        sure () {
            let that = this
            this.$refs.form.validate(flag => {
                if (flag) {
                    that.active = false
                }
            })
        },
        sure1 () {
            let that = this
            this.$refs.form1.validate(flag => {
                if (flag) {
                    that.visible = false
                    that.active = true
                    that.email = that.ruleForm1.newemail
                    that.ruleForm1.newemail = ''
                }
            })
        },
        sure2 () {
            let that = this
            this.$refs.form2.validate(flag => {
                if (flag) {
                    that.active1 = false
                }
            })
        },
        sure3 () {
            let that = this
            this.$refs.form3.validate(flag => {
                if (flag) {
                    that.active1 = true
                    that.visible1 = false
                    that.phone = that.ruleForm3.newphone
                    that.ruleForm3.newphone = ''
                }
            })
        },
        sure4 () {
            let that = this
            this.$refs.form4.validate(flag => {
                if (flag) {
                    that.active2 = false
                }
            })
        },
        sure5 () {
            let that = this
            this.$refs.form5.validate(flag => {
                if (flag) {
                    that.active2 = true
                    that.visible2 = false
                }
            })
        },
        getUrl (e) {
            let url = URL.createObjectURL(e.target.files[0])
            this.imgUrl = url
        }
    }
}
</script>

