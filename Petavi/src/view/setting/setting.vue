<style lang="less" scoped>
@import "@/less/css.less";
    .setting {
        width: 100%;
    }
    .setting_content {
        height: 100%;
    }
    .setting_message {
        flex: 10;
        height: 100%;
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
            width: 95px;
            right: 20px;
            top: 0;
            font-size: 19px;
            padding: 8px 0;
            border-radius: 10px;
            background: @helpBtn;
            position: absolute;
        }
        .save {
            width: 95px;
            right: 20px;
            top: 0;
            font-size: 19px;
            padding: 8px 0;
            border-radius: 10px;
            background: @hdColor;
            position: absolute;
        }
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
        img {
            width: 200px;
            height: 200px;
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
</style>

<template>
    <div class="setting">
        <div class="setting_content flex">
            <div class="setting_message">
                <div class="explan al Explan_title">
                    <img class="setting_img" src="@/assets/img/setting.png" alt="">
                    Setting
                </div>
                <div class="personal_message mg">
                    <div class=" bold tc personal_message_title">
                        <div class="size25">Guadian Details</div>
                        <div v-if="editBtn" class="edit tc cursor" @click="edit">Edit</div>
                        <div v-else class="save tc cursor" @click="save">Save</div>
                    </div>
                    <div class="detail flex width100 al">
                        <div class="person_image al ju"><img class="felame" :src="user.userImage" alt=""></div>
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
                                        <div v-if="editBtn">{{user.age}} <span style="color:white">-</span> </div>    <!-- null -->
                                        <div v-else class="inp al"><input type="text" v-model="user.age"></div>
                                        <div v-if="editBtn">{{user.userAddress}}</div>
                                        <div v-else class="inp al"><input type="text" v-model="user.userAddress"></div>
                                        <div v-if="editBtn">{{user.userPhone}}</div>
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
                                        <div v-if="editBtn">{{user.userGender == 2 ? 'F' : 'M'}} <span style="color:white">-</span> </div>  <!-- null -->
                                        <div v-else class="gender al">
                                            <!-- <el-select class="width100 al" style="margin-bottom:0;height:29px" v-model="sex">
                                                <el-option v-for="(item,i) in sexList" :key="i" :value="i">{{item}}</el-option>
                                            </el-select> -->
                                            <select class="option width100" @change="getGender" name="" id="">
                                                <option value="1">M</option>
                                                <option value="2">F</option>
                                            </select>
                                        </div>  
                                        <div v-if="editBtn">{{user.userChoiceDoctor}} <span style="color:white">-</span> </div> <!-- null -->
                                        <div v-else class="inp"><input type="text" v-model="user.userChoiceDoctor"></div>
                                        <div>{{user.extend}}-</div>
                                    </div>
                                </div>
                                <div @click="reset"><el-button class="width100 cursor btnColor" type="primary" :loading="loading">Reset Password</el-button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="payment mg">
                    <img class="width100" src="@/assets/img/aaa.png" alt="">
                    <!-- <div class="stripe">
                        <div class="input" id="cardNumber"></div>
                        <div class="input" id="cardExpiry"></div>
                        <div class="input" id="cardCvc"></div>
                        <div @click="submit">
                            <el-button type="primary">Pay</el-button>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getUserDetails, updateUserDetails } from "@/axios/request.js"
export default {
    data () {
        return {
            loading:false,
            editBtn: true,
            // sex:'',
            sex: null,
            sexList:['M','F'],
            cardNumber:'',
            cardExpiry:'',
            cardCvc:'',
            stripe:'',
            user:{}
        }
    },
    created () {
        // this.getStripe()
        this.getUser()
    },
    methods: {
        getGender (val) {
            this.user.userGender = val.target.value
        },
        getUser () {
            const data = {
                userId: localStorage.getItem("userId"),
                platform: localStorage.getItem("platform"),
                token: localStorage.getItem("Token")
            }
            getUserDetails(data).then(res => {
                console.log(res.data.data,"user")
                this.user = res.data.data
            })
        },
        updateDetails () {
            console.log(this.user)
            updateUserDetails(this.user).then(res => {
                console.log(res)
            })
        },

        save () {
            this.updateDetails()
            this.getUser()
            this.editBtn = true
        },





        reset () {
            this.loading = true
            setTimeout(() => {
                this.$router.push("/reset")
            },1000)
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

