<template>
    <div class="myDoctor flex">
        <el-backtop target=".scrollUp"></el-backtop>
        <div class="doctorList scrollUp" @scroll="docScroll" ref="doctorList" v-if="doctorList">
            <div class="width102 clear" ref="doctorList_height">
                <div class="doctor_item float" v-for="(item,i) in doctorList" :key="i" @click="getDetail(item)">
                    <div class="image flex">
                        <div class="doctor_head">
                            <img class="onLine" v-if="item.doctorOnLineState == 1" src="@/assets/img/onLine1.png" alt="">
                            <img class="busy" v-else-if="item.doctorOnlineState == 2" src="@/assets/img/busy.png" alt="">
                            <div class="item_head ju al">
                                <img style="height:60px;" :src="item.userHead" v-if="item.userHead" alt="">
                                <img style="height:100%;" v-else :src="default_img" alt="">
                                <!-- <i v-else class="el-icon-picture-outline" style="font-size:35px;color:gray"></i> -->
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
                <div class="acting float ju al" v-if="loading">
                    <div class="loading" v-loading="true"></div>
                </div>
            </div>
        </div>
        <div class="doctorList scrollUp" v-else>
            <div style="padding:30px 0;font-size:20px;font-weight:bold;color:gray" class="tc" >No Doctor!</div>
        </div>
        <div class="doctorDetails noBar">
            <div class="details_item mg">
                <div class="head_image mg al ju">
                    <img style="height:100%" :src="detail.userHead" v-if="detail.userHead" alt="">
                    <img style="height:100%;" v-else :src="default_img" alt="">
                    <!-- <i class="el-icon-picture-outline" style="font-size:40px;color:gray" v-else></i> -->
                </div>
                <div class="doctor_name tc" v-if="detail.doctorName">{{detail.doctorName}}</div>
                <div class="doctor_name tc" v-else>Name</div>
                <div class="size15 tc">General Obstetrics </div>
                <div class="star ju">
                    <el-rate class="Rate" v-model="rate" :disabled="true"></el-rate>
                </div> 
                <div class="toVideo cursor">
                    <div class="button chatDoc ju al" @click="chat_to_doc(detail)">
                        <img src="@/assets/img/chat1.png" alt="">
                        Chat to Doctor
                    </div>
                </div>
                <div class="toVideo cursor">
                    <div class="button videoBtn ju al" @click="enterRoom(detail)">
                        <img src="@/assets/img/video.png" alt="">
                        Enter the Live Call
                    </div>
                </div>
                <div class="toVideo cursor">
                    <div class="button Schedule ju al" @click="schedule(detail.doctorId)">
                        <img src="@/assets/img/Schedule.png" alt="">
                        Check Doctor Schedule
                    </div>
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
                <div class="introduce text-overflow">
                    <span class="text-overflows" v-if="detail.doctorContent">
                        {{detail.doctorContent}}
                    </span>
                    <span v-else>No introduction!</span>
                </div>
                <div class="blue flexEnd" v-show="showMore">
                    <span  class="cursor">more</span>
                </div>
                <div class="aboutUs">
                    <div class="child al flex cursor" @click="docInformation">
                        <img style="width:40px" src="@/assets/img/personal1.png" alt="">
                        <div class="size16">Personal Information</div>
                    </div>
                    <div class="child flex al cursor" @click="map">
                        <img style="width:40px" src="@/assets/img/addressimg1.png" alt="">
                        <div class="size16">Working Address</div>
                    </div>
                    <div class="child flex al cursor" @click="reviewer">
                        <img style="width:40px" src="@/assets/img/reviewer1.png" alt="">
                        <div class="size16">Reviewer (230)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            active:true,
            change:true,
            // rate:0,
            // detail: {},
            pageNum: 1,
            showMore: false,
            timer: null,
            player: 0
        }
    },
    created () {
        this.doctorList = []
        // if (!this.doctorList.length ) {
        this.getDoctorList()
        this.initRecord()
        // }
    },
    mounted () {
        
    },
    watch: {
        detail: {
            handler (val) {
                this.player = val.doctorId + 'a' + 2
                this.$nextTick(() => {
                    var sHeight = document.getElementsByClassName('text-overflow')[0].scrollHeight;
                    if (sHeight > 63) {
                        this.showMore = true
                    } else {
                        this.showMore = false
                    }  
                })
            },
            deep: true
        },
        inp: {
            handler (val) {
                this.pageNum = 1
                if (!val) {
                    this.doctorList = []
                    this.getDoctorList()
                }
            }
        },
        message: {
            handler (val) {
                if (val) {
                    this.message = val
                }
            },
            deep: true
        },
        messageList: {
            handler (val) {
                if (val) {
                    this.messageList = val
                }
            },
            deep: true
        },
    },
    computed: {
        doctorList: { 
            get () { return this.$store.state.user.doctorList },
            set (val) {
                this.$store.commit("setUser", {
                    key: "doctorList",
                    value: val
                })
            }
        },
        detail () { return this.$store.state.user.vDetail },
        rate: { 
            get () { return this.$store.state.user.rate },
            set (val) {
                this.$store.commit("setUser", {
                    key: "rate",
                    value: val
                })
            }
        },
        loading: {
            get () { return this.$store.state.user.loading6 },
            set (val) {
                this.$store.commit("setUser", {
                    key: "loading6",
                    value: val
                })
            }
        },
        default_img () { return this.$store.state.user.default_img },
        totalRecordsCount () { return this.$store.state.user.totalRecordsCount },
        inp: {
            get () {return this.$store.state.user.inp},
            set (val) {
                this.$store.commit("setUser", {
                    key: "inp",
                    value: val
                })
            },
        },
        message: {
            get () { return this.$store.state.user.message },
            set (val) {
                this.$store.commit("setUser", {
                    key: "message",
                    value: val
                })
            },
        },
        messageList: {
            get () { return this.$store.state.user.messageList },
            set (val) {
                this.$store.commit("setUser", {
                    key: "messageList",
                    value: val
                })
            },
        },
    },
    methods: {
        getDetail (item) {
            if (item.doctorName == null) {
                item.doctorName = 'No name'
            }
            this.$store.commit("setUser",{
                key: "vDetail",
                value: item
            })
            this.$store.commit("setUser",{
                key: "rate",
                value: item.baseScore
            })
            this.$store.commit("setUser",{
                key: "mask",
                value: item
            })
        },
        docScroll () {
            if (this.inp) {
                return false
            }
            if (this.$refs.doctorList.scrollTop + this.$refs.doctorList.clientHeight-150 == this.$refs.doctorList_height.scrollHeight - 150) {
                if (this.doctorList.length >= this.totalRecordsCount) {
                    
                } else {
                    if (!this.loading) {
                        this.pageNum += 1
                        this.getDoctorList()
                    }
                }
            }
        },
        getDoctorList () {
            this.$store.dispatch('getDoctorList',{num: this.pageNum, vm: this})
        },
        edit () {
            this.change = !this.change
        },
        toPetMessage () {
            this.$router.push({
                name:'petmessage'
            })
        },
        docInformation () {
            this.$router.push({
                name: 'docInformation',
                query: {
                    id: this.detail.doctorId
                }
            })
        },
        map () {
            this.$router.push('/map')
        },
        reviewer () {
            this.$router.push({
                name: 'reviewer',
                query: {
                    id: this.detail.doctorId
                }
            })
        },
        chat_to_doc (item) {
            let from = item.doctorId + 'a' + 2
            this.$router.push({
                name: 'chatRoom',
                params: {
                    key: from,
                    id: item.doctorId
                }
            })
            if (this.message[from]) {
                
            } else {
                this.message[from] = {
                    user: from,
                    userDetail: item,
                    messageList: [ ],
                    msg: 0
                }
                this.message = JSON.parse(JSON.stringify(this.message))
            }
        },
        initRecord () {
            if (localStorage.getItem('message')) {
                this.message = JSON.parse(localStorage.getItem('message'))
            }
        },
        schedule (item) {
            this.$router.push({
                name: 'schedule',
                query: {
                    id: item
                }
            })
        },
        enterRoom (item) {
            if (item.doctorOnLineState != 2) {
                this.$message({
                    type: 'warning',
                    message: 'The doctor is not in a meeting!'
                })
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import "@/less/css.less";
.clearfix:after{content:'';display:block;clear:both;}
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
            overflow-y: auto;
            overflow-x: hidden;
            // padding: 30px;
            border: #F3F3F3 solid 1px;
            border-radius: 4px;
            @media screen and (max-width:1050px) {
                width: 100%;
            }
        }
        .doctorList::-webkit-scrollbar {
            width: 8px;
        }
        .doctorList::-webkit-scrollbar-thumb {
            border-radius: 15px;
            background: rgb(216, 216, 216);
        }
        .doctorDetails {
            min-width: 310px;
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
            @media screen and (max-width: 1200px) {
                width: 55px;
                height: 55px;
            }
        }
        .grade {
            position: absolute;
            left: 50%;
            top: 111%;
            transform: translate(-50%,0);
            background: @helpBtn;
            padding: 3px 6px;
            border-radius: 3px;
            @media screen and (max-width: 1200px) {
                padding: 2px 6px;
            }
        }
        .onLine {
            position: absolute;
            right: -2px;
            bottom: -2px;
        }
        .busy {
            position: absolute;
            width: 20px;
            height: 20px;
            right: -2px;
            bottom: -2px;
            background: white;
            border-radius: 50%;
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
        @media screen and (max-width:1145px) {
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
        border-bottom: solid 2px gray;
        color: #656565;
        max-height: 63px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 3;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
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
        margin-top: 10px;
        text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
        display: -webkit-box;
        -webkit-line-clamp: 2;/*规定超过两行的部分截断*/
        -webkit-box-orient: vertical;
        overflow : hidden; 
        word-break: break-all;/*在任何地方换行*/
    }
    .acting {
        width: 100%;
        padding: 50px 0;
        // border: solid 1px;
    }
    .toVideo {
        width: 70%;
        min-width: 225px;
        margin: auto;
        margin-top: 15px;
    }
    .toVideo .button img {
        margin-right: 5px;
    }
    .chatDoc {
        background: @callBtn !important;
        border: none !important;
        border-radius: 17px;
        font-size: 14px;
        color: white;
        height: 40px;
        img {
            width: 23px;
            height: 18px;
        }
    }
    .Schedule {
        background: @denger !important;
        border: none !important;
        border-radius: 17px;
        font-size: 14px;
        color: white;
        height: 40px;
    }
    .videoBtn {
        background: @video !important;
        border: none !important;
        border-radius: 17px;
        font-size: 14px;
        color: white;
        height: 40px;
    }
</style>