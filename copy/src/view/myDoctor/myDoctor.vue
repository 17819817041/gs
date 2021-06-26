<template>
    <div class="myDoctor flex">
        <div class="doctorList noBar">
            <div class="width102 clear" v-if="!loading">
                <div class="doctor_item float" v-for="(item) in doctorList" :key="item.doctorId" @click="getDetail(item)">
                    <div class="image flex">
                        <div class="doctor_head">
                            <img class="onLine" v-if="item.doctorOnLineState == 1" src="@/assets/img/onLine.png" alt="">
                            <div class="item_head ju al">
                                <img style="height:60px;" :src="item.userHead" v-if="item.userHead" alt="">
                                <i v-else class="el-icon-picture-outline" style="font-size:35px;color:gray"></i>
                            </div>
                            <div class="grade white al size12b">
                                <img src="@/assets/img/rate.png" alt="">{{item.baseScore}}
                            </div>
                        </div>
                        <div class="about">
                            <div class="size16 itemDoc_name" v-if="item.doctorName">{{item.doctorName}}</div>
                            <div class="size16" v-else>No Name</div>
                            <div class="size_12 al address_item">
                                <img class="location_img" style="padding-right:5px" src="@/assets/img/location.png" alt="">
                                {{item.addressName}}
                            </div>
                        </div>
                    </div>
                    <div class="workTime al sb">
                        <div>
                            <div class="size14">Experience</div>
                            <div>
                                <span class="size16" v-if="item.experience">{{item.experience}}</span> 
                                <span v-else>0</span>
                                <span class="size14"> Years</span>
                            </div>
                        </div>
                        <div>
                            <div class="size14">Likes</div>
                            <div><span class="size16">{{item.totalLike}}</span><span class="size14"> ({{item.likingRate}}) </span></div>
                        </div>
                        <div class="call">
                            <el-button class="callBtn cursor width100" type="primary">Call</el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="loading" v-loading="loading"></div>
        </div>
        <div class="doctorDetails noBar">
            <div class="details_item mg">
                <div class="head_image mg ju">
                    <el-image style="height:80px" :src="detail.userHead" alt="" fit="cover">
                        <div slot="error" class="image-slot al" style="height: 100%;width:100%">
                            <i class="el-icon-picture-outline" style="font-size:40px;color:gray"></i>
                        </div>
                    </el-image>
                </div>
                <div class="doctor_name tc" v-if="detail.doctorName">{{detail.doctorName}}</div>
                <div class="doctor_name tc" v-else>Name</div>

                <div class="size15 tc">General Obstetrics </div>
                <div class="star ju">
                    <el-rate class="Rate" v-model="rate" :disabled="true"></el-rate>
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
                        <div class="size12">{Experience}</div>
                        <div class="size13">
                            <span v-if="detail.experience">{{detail.experience}}</span>
                            <span v-else>0</span>
                            + years
                        </div>
                    </div>
                    <div class="xian"></div>
                    <div class="tc likes">
                        <div class="size12 al">Likes</div>
                        <div><span class="size13">{{detail.totalLike}}</span><span class="size12"> ({{detail.likingRate}})</span></div>
                    </div>
                    <div class="xian"></div>
                    <div style="text-align:end">
                        <div class="size12">Reviews</div>
                        <div class="size13">230</div>
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
import { bookingId } from "@/axios/request.js"
export default {
    data () {
        return {
            active:true,
            change:true,
            rate:0,
            detail: {},
        }
    },
    created () {
        this.getDoctorList()
    },
    watch: {
        doctorList: {
            handler (val) {
                this.doctorList = val
            },
            immediate: true
        }
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
        },
        // remoteStream () { return this.$store.state.app.remoteStream },
        // localStream () { return this.$store.state.app.localStream },
        doctorList: { 
            get () { return this.$store.state.user.searchList },
            set (val) {
                this.$store.commit("setUser", {
                    key: "searchList",
                    value: val
                })
            }
        },
        loading () { return this.$store.state.user.loading },
    },
    methods: {
        getDetail (item) {
            if (item.doctorName == null) {
                item.doctorName = 'No name'
            }
            console.log(item)
            this.detail = item
            this.rate = this.detail.baseScore
            this.$store.commit("setUser",{
                key: "mask",
                value: item
            })
        },
        getDoctorList () {
            this.$store.dispatch('getDoctorList',this)
            // const doctor = {
            //     platform: localStorage.getItem("platform"),
            //     userId: localStorage.getItem("userId"),
            //     pageNum:1,
            //     pageSize: 10
            // }
            // doctorList(doctor).then(res => {
            //     if (res.data.rtnCode == 200) {
            //         console.log(res,"医生列表")
            //         this.doctorList = res.data.data.pageT
            //         this.loading = false
            //     } else if (res.data.rtnCode == 500 ) {
            //         this.doctorList = []
            //         this.loading = false
            //         localStorage.removeItem("Token")
            //         localStorage.removeItem("userId")
            //         localStorage.removeItem("paltform")
            //         localStorage.removeItem("IMtoken")
            //         localStorage.removeItem('IM')
            //         this.$router.replace('/customerLogin')
            //         this.$message.error('Login expired, please log in again !');
            //     }
            // }).catch(e => {
            //     console.log(e)
            //     this.doctorList = []
            //     this.loading = false
            //     this.$message.error('Fail to load !');
            // })
        },
        edit () {
            this.change = !this.change
        },
        toPetMessage () {
            this.$router.push({
                name:'petmessage'
            })
        },
        toVideo () {
            // this.$router.push('agora')
            
            if (this.detail.doctorId) {
                this.$store.commit("setUser", {
                    key: "callTo",
                    value: this.detail
                    // value: {
                    //     doctorId: 322
                    // }
                })
                this.callModal = true
            } else {
                this.$message({
                    type: "error",
                    message: "Please choose a doctor"
                })
            }
        },
        booking () {
            this.$router.push("/booking")
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
video {
    width: 300px;
    height: 200px;
    border: solid 1px;
}
.size_12 {
    font-size: 12px;
    color: #767676;
}
.size_13 {
    font-size: 13px;
}
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
            @media screen and (max-width:1050px) {
                width: 100%;
            }
        }
        .doctorDetails {
            width: 26%;
            height: 100%;
            overflow: auto;
            // border: solid 1px;
            // @media screen and (max-width:1050px) {
            //     display: none;
            // }
        }
    }
    .width102 {
        width: 102.5%;
        // border: solid red 1px;
        padding: 1.8%;
    }
    .doctor_head {
        position: relative;
        .item_head {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: solid rgb(216, 214, 214) 1px;
            overflow: hidden;
        }
        .grade {
            position: absolute;
            left: 50%;
            top: 111%;
            transform: translate(-50%,0);
            background: @helpBtn;
            padding: 3px 6px;
            border-radius: 3px;
        }
        .onLine {
            position: absolute;
            right: -2px;
            bottom: -2px;
        }
    }
    .head_image {
        width: 80px;
        height: 80px;
        border: solid gray 1px;
        border-radius: 50%;
        overflow: hidden;
    }
    .about {
        margin-left: 10px;
        overflow: hidden;
    }
    .itemDoc_name {
        flex: 10;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
        // @media screen and (max-width:1620px) {
        //     width: 46%;
        //     margin: 0 3.5% 5px 0.5%;
        // }
        @media screen and (max-width:1100px) {
            width: 45%;
            margin: 0 1.5% 5px 3.5%;
        }
    }
    .workTime {
        margin-top: 45px;
        div {
            @media screen and (max-width:1350px) {
                transform: scale(0.9);
            }
        }
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
        max-width: 80px;
        width: 30%;
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
        width: 60%;
        margin: auto;
    }
    .reviews {
        width: 94%;
        margin: auto;
        margin-top: 27px;
        @media screen and (max-width:1250px) {
            transform: scale(0.9);
        }
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
    .loading {
        width: 100%;
        height: 45%;
    }
    .location_img {
        transform: translate(0,1px);
    }
    .address_item {
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 2;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
    }
</style>