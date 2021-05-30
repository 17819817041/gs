<template>
    <div class="myDoctor flex">
        <div class="doctorList noBar">
            <div class="width102 clear">
                <div class="doctor_item float" v-for="(item) in doctorList" :key="item.doctorId" @click="getDetail(item)">
                    <div class="image flex">
                        <div class="doctor_head">
                            <img src="@/assets/img/head.png" alt="">
                            <div class="grade white al size12b">
                                <img src="@/assets/img/rate.png" alt="">{{item.baeScore}}
                            </div>
                        </div>
                        <div class="about">
                            <div class="size16">{{item.doctorName}}</div>
                            <div class="size14">General Obstetrics & Gynecology</div>
                            <div class="size12a al">
                                <img style="padding-right:5px" src="@/assets/img/location.png" alt="">
                                0.8 km away
                            </div>
                        </div>
                    </div>
                    <div class="workTime al sb">
                        <div>
                            <div class="size14">Experience</div>
                            <div><span class="size16">{{item.experience}}</span> <span class="size14"> Years</span></div>
                        </div>
                        <div>
                            <div class="size14">Likes</div>
                            <div><span class="size16">125</span><span class="size14"> ({{item.likingRate}}) </span></div>
                        </div>
                        <div class="call">
                            <el-button class="callBtn width100" type="primary">Call</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="doctorDetails noBar">
            <div class="details_item mg">
                <div class="head_image ju"><img src="@/assets/img/john.png" alt=""></div>
                <div class="doctor_name tc">{{detail.doctorName}}</div>
                <div class="size15 tc">General Obstetrics </div>
                <div class="star ju">
                    <el-rate class="Rate" v-model="rate" @change="getRate"></el-rate>
                </div>
                <div class="relation ju">
                    <div class="cursor"><img src="@/assets/img/chat.png" alt=""></div>
                    <div class="cursor" @click="booking"><img src="@/assets/img/calendar.png" alt=""></div>
                </div>
                <div class="toVideo cursor" @click="toVideo">
                    <el-button class="width100 videoBtn" type="primary">
                        <img src="@/assets/img/video.png" alt="">
                    </el-button>
                </div>
                <div class="reviews sb">
                    <div>
                        <div class="size15">{Experience}</div>
                        <div class="size16">{{detail.experience}}+ years</div>
                    </div>
                    <div class="xian"></div>
                    <div class="tc likes">
                        <div class="size15">Likes</div>
                        <div><span class="size16">125</span><span class="size15">(detail.liKingRate)</span></div>
                    </div>
                    <div class="xian"></div>
                    <div style="text-align:end">
                        <div class="size15">Reviews</div>
                        <div class="size16">230</div>
                    </div>
                </div>
                <div class="working al">
                    <div class="al" style="padding-right:10px"><img src="@/assets/img/time.png" alt=""></div>
                    <div style="width:92%">
                        <div class="sb">
                            <div class="size16" style="margin-bottom:4px;">Open Today</div>
                            <div class="blue">ALL TIMING</div>
                        </div>
                        <div class="time blue">10:30 Am -07:30Pm</div>
                    </div>
                </div>
                <div class="introduce">
                    <span>Dr. Vinay Misra is a General Obstetrics & Gynecology in new delhi and
                        has an experience of 8+ years in this field. We provide services in hospitalsonline 
                        consultation as video and audio...
                    </span>
                    <span class="blue cursor">more</span>
                </div>
                <div class="aboutUs">
                    <div class="child al flex">
                        <img style="width:40px" src="@/assets/img/personal1.png" alt="">
                        <div class="size16">Personal Information</div>
                    </div>
                    <div class="child flex al">
                        <img style="width:40px" src="@/assets/img/addressimg1.png" alt="">
                        <div class="size16">Working Address</div>
                    </div>
                    <div class="child flex al">
                        <img style="width:40px" src="@/assets/img/reviewer1.png" alt="">
                        <div class="size16">Reviewer (230)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { doctorList } from "@/axios/request.js"
export default {
    data () {
        return {
            active:true,
            petId:'0000001',
            age:"2 yrs S mo",
            breed:'Husky',
            sex:"M",
            neuteredStatus:'None',
            weight: "33.5kg",
            grade:4.5,
            change:true,
            rate:null,
            doctorList: [],
            detail: {}
        }
    },
    created () {
        this.getDoctorList()
    },
    computed: {
        callModal: {
            get () { return this.$store.state.user.callModal },
            set (val) {
                this.$store.commit("setUser", {
                    key: "callModal",
                    value: val
                })
            },
        }
    },
    methods: {
        getDetail (item) {
            this.detail = item
        },
        getDoctorList () {
            const doctor = {
                platform: localStorage.getItem("platform"),
                userId: localStorage.getItem("userId")
            }
            doctorList(doctor).then(res => {
                console.log(res,"医生列表")
                this.doctorList = res.data.data
            })
        },
        edit () {
            this.change = !this.change
        },
        toPetMessage () {
            this.$router.push({
                name:'petmessage'
            })
        },
        getRate (val) {
            console.log(val)
        },
        toVideo () {
            // this.$router.push('agora')
            this.$store.commit("setUser", {
                key: "callTo",
                value: this.detail
            })
            this.callModal = true
        },
        booking () {
            this.$router.push("/booking")
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .pet_message {
        flex: 10;
        margin-top: 10px;
        .myDoctor {
            height: 100%;
        }
        .doctorList {
            width: 74%;      //医生列表
            height: 100%;
            overflow: auto;
            // padding: 30px;
            border: #F3F3F3 solid 1px;
            border-radius: 4px;
            @media screen and (max-width:1000px) {
                width: 60%;
            }
        }
        .doctorDetails {
            width: 26%;
            height: 100%;
            overflow: auto;
            // border: solid 1px;
            @media screen and (max-width:1000px) {
                width: 40%;
            }
        }
    }
    .width102 {
        width: 102.5%;
        // border: solid red 1px;
        padding: 1.8%;
    }
    .doctor_head {
        position: relative;
        .grade {
            position: absolute;
            left: 50%;
            top: 111%;
            transform: translate(-50%,0);
            background: @helpBtn;
            padding: 3px 6px;
            border-radius: 3px;
        }
    }
    .about {
        margin-left: 10px;
    }
    .grade {
        img {
            width: 12px;
            height: 12px;
            padding-right: 2px;
        }
    }
    .doctor_item {
        width: 30.33%;
        box-shadow: 0 2px 1px 1px #D5D5D5;
        margin: 0 3% 5px 0;
        padding: 15px 14px;
        transition: 0.25s;
        @media screen and (max-width:1620px) {
            width: 46%;
            margin: 0 3.5% 5px 0.5%;
        }
        @media screen and (max-width:1000px) {
            width: 80%;
            margin: 0 3.5% 5px 8.5%;
        }
    }
    .workTime {
        margin-top: 45px;
    }
    .physical {
        width: 108px;
        margin-top: 50px;
    }
    .present_item {
        width: 138px;
        margin: auto;
        border: #EFEEEE solid 1px;
        margin-top: 60px;
    }
    .pet_img {
        padding-top: 10px;
    }
    .pet_name {
        padding: 15px 0;
    }
    .more_message {
        text-align: end;
        margin-top: 20px;
    }
    .administrator {
        width: 138px;
        color: #212121;
        font-size: 12px;
        white-space: nowrap;
        .administrator_item {
            padding: 10px 0 12px 14px;
        }
        .administrator_item div img {
            width: 28px;
            padding-right: 3px;
        }
    }
    .details_item {
        width: 90%;
        margin: auto;
        // border: solid rgb(100, 95, 95) 1px;
    }
    .call {
        width: 80px;
    }
    .doctor_name {
        font-size: 19px;
        color: #212121;
        padding: 5px 0;
    }
    .star {
        margin-top: 30px;
    }
    .relation {
        width: 80%;
        margin: 18px auto;
        div {
            padding: 0 15px;
        }
    }
    .toVideo {
        width: 80%;
        margin: auto;
    }
    .reviews {
        width: 80%;
        margin: auto;
        margin-top: 27px;
    }
    .xian {
        border-left: 1px #DCDDE0 solid;
        border-right: 1px #DCDDE0 solid;
    }
    .blue {
        font-size: 13px;
        color: #1976D2;
    }
    .working {
        width: 80%;
        margin: auto;
        padding: 35px 0;
    }
    .introduce {
        width: 80%;
        margin: auto;
        font-size: 14;
        color: #656565;
        margin-bottom: 35px;
    }
    .aboutUs {
        width: 80%;
        margin: auto;
        padding-top: 40px;
        .child {
            padding: 10px 0;
        }
        .child img {
            padding-right: 7px;
        }
    }
    .Rate {
        transform: scale(1.3);
    }
</style>