<template>
    <div class="reviewer">
        <el-backtop target=".border"></el-backtop>
        <!-- <div class="vetSetting_content mg">
            <div class="vetSetting_content_item">
                <div class="profile flex">
                    <div class="profile_img">
                        <div class="profile_img_wrap mg">
                            <label for="avaSet">
                                <div style="width:100%;margin:auto;height:100%" class="ju al img_wrap_p"
                                    element-loading-text="Loading..."
                                    element-loading-spinner="el-icon-loading"
                                    element-loading-background="rgba(0, 0, 0, 0.8)">
                                    <img :class="['profileimg mg']" v-if="userDetail.headUr" 
                                    :src="userDetail.headUr" alt="" mode="widthFix">
                                    <img style="height:100%;" v-else :src="default_img" alt="">
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="flex direction">
                        <div class="profile_message">
                            <div class="message_wrap flex">
                                <div class="title size19">User ID</div>
                                <div class="mean size16_s">{{userDetail.userId}}</div>
                            </div>
                            <div class="message_wrap flex">
                                <div class="title size19">Name</div>
                                <div class="mean size16_s">{{userDetail.doctorName}}</div>
                            </div>
                            <div class="message_wrap flex">
                                <div class="title size19">Age</div>
                                <div class="mean size16_s">{{userDetail.age? userDetail.age:'None'}}</div>
                            </div>

                            <div class="message_wrap flex">
                                <div  class="title size19">Location</div>
                                <div class="mean s_location size16_s">{{
                                    address.find(ad => ad.areaId == userDetail.addressId) ? 
                                    address.find(ad => ad.areaId == userDetail.addressId).addressName : "No Address"
                                }}</div>
                            </div>

                            <div class="message_wrap flex">
                                <div class="title size19">Mobile</div>
                                <div class="mean size16_s">{{userDetail.mobile? userDetail.mobile: "No data"}}</div>
                            </div>
                            <div class="message_wrap flex">
                                <div class="title size19">Gender</div>
                                <div class="mean size16_s">
                                    <span v-if="userDetail.genderId == 1">Male</span>
                                    <span v-else-if="userDetail.genderId == 2">Female</span>
                                    <span v-else-if="userDetail.genderId == 0">No data</span>
                                </div>
                            </div>
                            <div class="message_wrap flex">
                                <div class="title size19">Education</div>
                                <div class="mean size16_s">
                                    <span v-if="userDetail.education">{{userDetail.education}}</span>
                                    <span v-else>No data</span>
                                </div>
                            </div>
                            <div class="message_wrap flex">
                                <div class="title size19">Gertification</div>
                                <div class="mean">-</div>
                            </div>

                            <div class="aboutMe">
                                <div class="size19">More about Doctor</div>
                                <div class="size16_s">
                                    <span class="doc_data" v-if="userDetail.extend">{{userDetail.extend}}</span>
                                    <span v-else>No data</span>
                                </div>
                            </div>
                        </div>
                        <div class="profile_message1">
                            <div>
                                <div class="message_wrap flex">
                                    <div class="title size19">Veterinary Hospital</div>
                                    <div class="mean size16_s">
                                        {{ hospitalList.find(hos => hos.veterinaryHospitalId == userDetail.vetrtinaryHospitalId)?
                                        hospitalList.find(hos => hos.veterinaryHospitalId == userDetail.vetrtinaryHospitalId).veterinaryHospitalName:'No Name' }}
                                    </div>
                                </div>
                                <div class="message_wrap flex">
                                    <div class="title size19">Work experience</div>
                                    <div class="mean size16_s">{{userDetail.workExperience? userDetail.workExperience: "0"}}+ years</div>
                                </div>
                                <div class="message_wrap flex">
                                    <div class="al size19">Working address and Timing</div>
                                </div>
                                <div class="message_wrap address_child al size16_s">
                                    <div>{{userDetail.workingAddress}}</div>
                                </div>
                                <div class="message_wrap_work">
                                    <div style="margin-top:10px;color: #7c7878;">
                                        <span>
                                            <span v-if="userDetail.startTime">{{userDetail.startTime}}</span>
                                            <span v-else>09:00</span>
                                        </span>
                                        - 
                                        <span>
                                            <span v-if="userDetail.endTime">{{userDetail.endTime}}</span>
                                            <span v-else>18:00</span>
                                        </span>
                                        <span style="padding: 0 5px;"></span>
                                        <span>
                                            <span v-if="userDetail.starWeek">{{userDetail.starWeek}}</span>
                                            <span v-else>Monday</span>
                                        </span>
                                        to
                                        <span>
                                            <span v-if="userDetail.endWeek">{{userDetail.endWeek}}</span>
                                            <span v-else>Friday</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="message_wrap flex">
                                    <div class="title size19">Professional field</div>
                                    <div class="mean size16_s">
                                        <span v-if="userDetail.prdfessionalField">{{userDetail.prdfessionalField}}</span>
                                        <span v-else>-</span>
                                    </div>
                                </div>
                            </div>
                            <div class="aboutMe_mobile">
                                <div class="size19">More about you</div>
                                <div class="size16_s">
                                    <span v-if="userDetail.extend">{{userDetail.extend}}</span>
                                    <span v-else>No data</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <el-divider content-position="left">Comment</el-divider>
        <div class="vetSetting_content border mg" v-if="commentList">
            <div class="comment_item flex" v-for="(item) in commentList" :key="item.id">
                <div class="customer_img_wrap">
                    <div class="customer_img mg ju al"><img style="height: 100%;" :src="item.userImage" alt=""></div>
                    <div class="customer_name tc bold"> {{item.userName}} </div>
                </div>
                <div class="rate_date_c_wrap">
                    <div class="rate_date sb al">
                        <div> <el-rate class="Rate" v-model="item.score" :disabled="true"></el-rate> </div>
                        <div>Date</div>
                    </div>
                    <div class="rate_date_c">
                        {{item.content}}
                    </div>
                </div>
            </div>
        </div>
        <div class="vetSetting_content border bold tc size21" v-else-if="commentList === null">
            No Comment
        </div>
    </div>
</template>

<script>
import { vetDetails, HospitalList, address , comment} from "@/axios/request.js"
export default {
    data () {
        return {
            size: 'mini',
            hospitalList: [],
            sex: '',
            address: [],
            wookingDay: '',
            default_address: '',
            userDetail: {},
            pageNum: 1,
            commentList: [],
            totalRecordsCount: 0
        }
    },
    created () {
        this.getHospitalList()
        this.getAddress()
        this.getcommentList()
        var data = {
            userId: this.$route.query.id
        }
        vetDetails(data).then(res => {
            if (res.data.rtnCode == 200) {
                this.userDetail = res.data.data
            } else {}
        }).catch(e => {
            console.log(e)
        })
    },
    computed: {
        default_img () { return this.$store.state.user.default_img },
    },
    methods: {
        getcommentList () {
            let data = {
                doctorId: this.$route.query.id,
                pageNum: this.pageNum,
                pageSize: 10
            }
            comment(data).then(res => {
                if (res.data.rtnCode == 200) {
                    this.commentList = res.data.data.pageT
                    this.totalRecordsCount = res.data.data.totalRecordsCount
                } else {
                    this.commentList = null
                }
            }).catch(e => {
                console.log(e)
                this.commentList = null
            })
        },
        getAddress () {
            address().then(res => {
                this.address = res.data.data
                res.data.data.forEach(item => {
                    if (item.areaId == this.userDetail.addressId) {
                        this.default_address = item.addressName
                    } else {
                        // this.default_address = 'select'
                    }
                })
            })
        },
        getHospitalList () {
            HospitalList().then(res => {
                if (res.data.rtnCode == 200) {
                    this.hospitalList = res.data.data
                }
            })
        },
    }
}
</script>

<style lang='less' scoped>
@import "@/less/css.less";
.reviewer {
    // height: 100%;
    height: calc(100% - 49px);
}
    .comment_item {
        padding: 10px 15px;
        margin: 10px 0;
        width: 99%;
        border: solid 1px;
        border-radius: 8px;
    }
    .customer_img_wrap {
        padding: 0 20px;
        width: 125px;
        min-width: 125px;
        .customer_img {
            width: 70px;
            height: 70px;
            overflow: hidden;
            border-radius: 50%;
            margin-bottom: 5px;
        }
        .customer_name {
            font-size: 14px;
        }
    }
    .rate_date_c_wrap {
        width: calc(100% - 125px);
        .rate_date {
            padding: 0 10px;
            border-bottom: solid 1px rgb(192, 192, 192);
        }
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
    .size26 {
        font-size: 26px;
        color: #5E5E5E;
        @media screen and (max-width: 1000px){
            font-size: 20px;
        }
    }
    .vetSetting_content {
        width: 96.5%;
        .vetSetting_content_item {
            padding: 25px 0;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 2px 1px gray;
        }
    }
    .border {
        // border: solid 1px;
        // height: calc(100% - 465px);
        height: calc(100%);
        overflow: auto;
    }
    .border::-webkit-scrollbar {
        width: 8px;
    }
    .border::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background: rgb(216, 216, 216);
    }

    .prdfessionalField {
        width: 170px;
        height: 29px;
        border: solid 1px rgb(182, 182, 182);
        border-radius: 10px;
        overflow: hidden;
    }
    .profile {
        // margin-top: 25px;
        @media screen and (max-width: 564px) {
            flex-direction: column;
        }
    }
    .profile_message1 {
        width: 45%;
        padding-left: 60px;
        @media screen and (max-width: 1100px) {
            padding-left: 20px;
        }
        @media screen and (max-width: 800px) {
            padding: 0;
            width: 100%;
        }
        .address_child {
            color: #7c7878;
            // padding: 0 !important;
        }
        .message_wrap {
            // width: 300px;
            padding: 10px 0 16px 0;
            white-space: nowrap;
            @media screen and (max-width: 800px) {
                width: 100%;
                padding: 10px 0 0 0;
            }
            .title{    
                width: 260px;
                min-width: 169px;
                @media screen and (max-width: 1100px) {
                    width: 230px;
                    min-width: 169px;
                }
            }
            .mean {
                // width: 200px;
                white-space: nowrap;
                color: gray;
                @media screen and (max-width: 800px) {
                    width: 100%;
                    text-align: end !important;
                }
            }
        }
    }
    .message_wrap_work {
        max-width: 460px;
        flex-wrap: wrap;
        // height: 69px;
        padding: 20px 0;
        .title{    
            width: 221px;
        }
        
    }
    .option {
        border: none;
        outline: none;
        height: 100%;
    }
    .profile_message {
        width: 35%;
        min-width: 238px;
        @media screen and (max-width: 1100px) {
            width: 34%;
        }
        @media screen and (max-width: 800px) {
            min-width: 0;
            width: 100%;
        }
        .message_wrap {
            // width: 300px;
            padding: 6px 0;
            @media screen and (max-width: 800px) {
                width: 100%;
                padding: 10px 0 0 0;
            }
            .title {    
                width: 146px;
                // height: 29px;
                white-space: nowrap;
                min-width: 125px;
            }
            .mean  {
                width: 210px;
                // height: 29px;
                @media screen and (max-width: 800px) {
                    width: 100%;
                    text-align: end !important;
                }
            }
        }
        .aboutMe {
            width: 215%;
            margin-top: 20px;
            min-width: 165px;
            @media screen and (max-width: 800px) {
                display: none;
                margin-top: 20px;
            }
        }
    }
    .aboutMe_mobile {
        margin-top: 50px;
        min-width: 165px;
        display: none;
        @media screen and (max-width: 800px) {
            display: block;
            margin-top: 30px;
        }
    }
    .profile_img {
        width: 21%;
        min-width: 200px;
        @media screen and (max-width: 1000px) {
            min-width: 170px;
        }
        @media screen and (max-width: 800px) {
            min-width: 145px;
        }
        @media screen and (max-width: 564px) {
            margin: auto;
            min-width: 100px;
        }
    }
    .profile_img_wrap {
        width: 200px;
        height: 200px;
        border: solid 1px;
        border-radius: 50%;
        margin-top: 15px;
        overflow: hidden;
        @media screen and (max-width: 1500px) {
            width: 180px;
            height: 180px;
        }
        @media screen and (max-width: 1300px) {
            width: 160px;
            height: 160px;
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
    .profileimg {
        height: 100%;
    }
    .size19 {
        font-size: 17px;
        font-weight: bold;
        color: @explanTitle;
        transition: 0.1s;
        @media screen and (max-width: 1000px){
            font-size: 16px;
            font-weight: bold;
        }
        @media screen and (max-width: 800px){
            font-size: 14px;
            font-weight: bold;
        }
    }
    .size16_s {
        font-size: 17px;
        color: gray;
        transition: 0.1s;
        @media screen and (max-width: 1000px){
            font-size: 16px;
        }
        @media screen and (max-width: 800px){
            font-size: 14px;
        }
    }
    .s_location {
        // overflow: hidden;
        // text-overflow: ellipsis;
        // display: -webkit-box;
        // -webkit-line-clamp: 2;
        // -webkit-box-orient: vertical;
        word-wrap: normal !important;
        // line-height: 36.66rpx;
        // letter-spacing: 3.33rpx;
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
    .direction {
        width: 79%;
        @media screen and (max-width: 800px) {
            flex-direction: column;
            padding: 0 15px;
        }
        @media screen and (max-width: 564px) {
            width: 100%;
        }
    }
    .doc_data {
        max-width: 700px;
        word-wrap: normal;
    }
</style>