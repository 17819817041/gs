<template>
    <div class="booking mg">
        <div class="size21 tc" style="margin-top:30px;">Booking</div>
        <div class="size12 tc" style="margin:10px auto">Select an option to book</div>
        
        <div class="form_select">
            <el-form label-position="top" ref="form">
                <el-form-item class="typeFlex ju tc">
                    <div style="margin-right:10px;">
                        <el-radio v-model="WAY" label="1">
                            <div class="video ju">
                                <div>
                                    <img :class="['opacity',{ opacity1: way == 'video' }]" src="@/assets/img/videoWay.png" alt="" @click="videoWay">
                                </div>
                            </div>
                        </el-radio>
                        <div class="size13">Video Consultation</div>
                        <div class="size12">Min session 15 mins . $1.99 per/min</div>
                    </div>
                    <div style="margin-left:10px;">
                        <el-radio v-model="WAY" label="2">
                            <div class="visit mg">
                                <div>
                                    <img :class="['opacity',{ opacity1: way == 'visit' }]" src="@/assets/img/bookingImg.png" alt="" @click="visitWay">
                                </div>
                            </div>
                        </el-radio>
                        <div class="size13">Physical Visit</div>
                        <div class="size12">Book free, all fees are payable at clinic</div>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="pet" placeholder="Select pet" @change="getPetId">
                        <el-option v-for="(item,i) in petSelect" :key="i" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="location" placeholder="Location">
                        <el-option v-for="(item,i) in locationSelect" :key="i" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <div class="sb">
                        <div class="pet">
                            <el-select v-model="doctor" placeholder="Select the doctor" @change="getDoctorId">
                                <el-option v-for="(item,i) in doctorSelect" :key="i" :label="item.doctorName" :value="item.doctorId"></el-option>
                            </el-select>
                        </div>
                        <div class="star_time">
                            <!-- <el-select v-model="starTime" placeholder="Booking Star Time">
                                <el-option v-for="(item,i) in starTimeSelect" :key="i" :value="item"></el-option>
                            </el-select> -->
                            <div  :class="['arrow', { rotate: starRotate }]"></div>
                            <el-time-select
                                v-model="starTime"
                                :picker-options="{
                                    start: '08:30',
                                    step: '00:15',
                                    end: '18:30'
                                }"
                                @change="getStarTime"
                                @focus="starFocus"
                                @blur="starBlur"
                                placeholder="Booking Star Time">
                            </el-time-select>
                        </div>
                        <div class="end_time">
                            <el-select v-model="endTime"  placeholder="CONSULTATION TIME" @change="duration">
                                <el-option v-for="(item,i) in endTimeSelect" :key="i" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                            <!-- <div :class="['arrow', { rotate: endRotate }]"></div>
                            <el-time-select
                                v-model="endTime"
                                :picker-options="{
                                    start: '08:30',
                                    step: '00:15',
                                    end: '18:30'
                                }"
                                @change="getEndTime"
                                @focus="endFocus"
                                @blur="endBlur"
                                placeholder="Booking End Time">
                            </el-time-select> -->
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="Booking Date">
                    <div class="sb">
                        <div class="day">
                            <el-select v-model="day" placeholder="Day">
                                <el-option v-for="(item,i) in daySelect" :key="i" :value="item"></el-option>
                            </el-select>
                        </div>
                        <div class="month">
                            <el-select v-model="month" placeholder="Month" @change="chooseMonth">
                                <el-option v-for="(item,i) in monthSelect" :key="i" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </div>
                        <div class="years">
                            <el-select v-model="years" placeholder="Year">
                                <el-option v-for="(item,i) in yearsSelect" :key="i" :value="item"></el-option>
                            </el-select>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item>
                    <div class="textarea_wrap">
                        <textarea class="width100 textarea" placeholder="Remark" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <el-button class="width100" type="primary" @click="confirm">Book Now</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { doctorList, booking } from "@/axios/request.js"
export default {
    data () {
        return {
            endRotate: false,
            starRotate: false,
            doctor: '',
            doctorId: null,
            WAY: null,
            doctorSelect: [],
            location: '',
            locationSelect: [],
            pet: '',
            petId: null,
            petSelect: [],
            starTime: '',
            starTimeSelect: [],
            endTime: '',
            duration: "",
            endTimeSelect: [
                {label: '30MIN',value: 30},
                {label: '45MIN',value: 45},
                {label: '60MIN',value: 60},
            ],
            day: '',
            daySelect: [],
            month: '',
            monthSelect: [ 
                { label: 'Jan', value: '1' }, 
                { label: 'Feb', value: '2' }, 
                { label: 'Mar', value: '3' }, 
                { label: 'Apr', value: '4' }, 
                { label: 'May', value: '5' }, 
                { label: 'Jun', value: '6' }, 
                { label: 'Jul', value: '7' }, 
                { label: 'Aug', value: '8' }, 
                { label: 'Sep', value: '9' }, 
                { label: 'Oct', value: '10' }, 
                { label: 'Nov', value: '11' }, 
                { label: 'Dec', value: '12' }, 
            ],
            years: '',
            yearsSelect: [],
            remark: 'remark',
            way: null,
            judge_month: null,
            pageNum: 1,
            pageSize: 10
        }
    },
    created () {
        this.docSelect()
        this.getPetSelect()
        this.getDay()
        // let T = '20:15'
        // let arr = T.split(":")
        // let fen = Number(arr[1]) + 45
        // let shi = Number(arr[0])
        // console.log(fen,shi)
        // if (Number(arr[1] + 45) > 60 ) {
        //     fen = Number(arr[1]) + 45 - 60
        //     shi = shi + 1
        // } else if ((Number(arr[1]) + 45) === 60 ) {
        //     fen = '00'
        //     console.log(fen)
        // }
        // console.log(fen,shi)
    },
    watch: {
        petList: {
            handler (val) {
                this.petSelect = JSON.parse(JSON.stringify(this.petList))
            }
        }
    },
    computed: {
        petList () { return this.$store.state.user.petList }
    },
    methods: {
        videoWay () {
            this.way = 'video'
        },
        visitWay () {
            this.way = 'visit'
        },

        confirm () {
            let that = this
            this.$refs.form.validate(flag => {
                if (flag) {
                    var data = {
                        bookingType: that.WAY,
                        bookingDoctor: that.doctor,
                        bookingDoctorId: that.doctorId,
                        locationId: 1,
                        petName: that.pet,
                        petId: that.petId,
                        userName: 'this.userName',
                        userId: localStorage.getItem('userId'),
                        bookingStartTime: that.starTime,
                        bookingEndTime: '20:00',
                        // bookingDate: this.day,
                        bookingDate: '2021-06-18',
                        bookingRemark: that.remark,
                        bookingTimeId: 1,
                        bookingTime: this.duration,
                        // goodsId: '',
                        bookingState: 1,
                        bookingCreateTime: '2021-06-15'
                    }
                    booking(data).then(res => {
                        console.log(res)
                        if (res.data.rtnCode == 20) {
                            that.$router.push("/confirm")
                        } else {

                        }
                    }).catch(e => {
                        console.log(e)
                    })
                }
            })
        },
        getDuration (val) {
            this.duration = val
        },
        getDoctorId (val) {
            this.doctorSelect.forEach(item => {
                if (item.doctorId == val) {
                    this.doctor = item.doctorName
                    this.doctorId = item.doctorId
                }
            })
        },
        getPetId (val) {
            this.petSelect.forEach(item => {
                if (item.id == val) {
                    this.pet = item.name
                    this.petId = item.id
                }
            })
        },
        docSelect () {
            const doctor = {
                platform: localStorage.getItem("platform"),
                userId: localStorage.getItem("userId"),
                pageNum:1,
                pageSize: 10
            }
            doctorList(doctor).then(res => {
                console.log(res,"医生select")
                this.doctorSelect = res.data.data.pageT
            })
        },
        getPetSelect () {
            var data = {
                userId: localStorage.getItem("userId"),
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
            this.$store.dispatch("getPetList",data)
        },
        getStarTime (val) {
            console.log(val)
        },
        getEndTime (val) {
            console.log(val)
        },
        getDay () {
            // let month = new Date().getMonth() + 1      //获取月份
            // let Day = new Date(2021,month,0).getDate()//  获取每月天数
            for (let i=1;i<=31;i++) {
                this.daySelect.push(i)
            }
            for (let i=1;i<10;i++) {
                this.yearsSelect.push('202' + i)
            }
        },
        chooseMonth (val) {
            this.judge_month = val
            let Day = new Date(2021,this.judge_month,0).getDate()//  获取每月天数
            this.daySelect = []
            for (let i=1;i<=Day;i++) {
                this.daySelect.push(i)
            }
            if (this.day > this.daySelect.length) {
                this.day = this.daySelect.length
            }
        },
        endFocus () {
            this.endRotate = true
        },
        endBlur () {
            this.endRotate = false
        },
        starFocus () {
            this.starRotate = true
        },
        starBlur () {
            this.starRotate = false
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .booking {
        width: 700px;
    }
    .visitAndWay {
        width: 99%;
        .phone, .video, .visit {
            padding: 20px 0;
            width: 32%;
            div img {
                // opacity: 0.8;
                padding: 13px 0;
            }
        }
    }
    .pet {
        width: 25%;
    }
    .star_time, .end_time {
        position: relative;
        width: 35%;
    }
    .arrow {
        top: 50%;
        right: 0;
        height: 12px;
        width: 16px;
        z-index: 700;
        transform: translate(-50%,-50%);
        position: absolute;
        background: url('~@/assets/img/arrow.png') center center no-repeat;
        transition: 0.3s;
    }
    .typeFlex .width30 {
        width:33.3%; 
    }
    .textarea_wrap {
        background: @content;
        padding: 10px;
        border-radius: 7px;
        margin-bottom: 10px;
        .textarea {
            border: none;
            outline: none;
            resize: none;
            background: @content;
        }
    }
    textarea::-webkit-input-placeholder {
        color: #BBBBBB;
        font-size: 16px;  
    }
    .phone, .video, .visit {
        margin-bottom: 15px;
    }
    .opacity {
        opacity: 0.6;
    }
    .opacity:hover {
        cursor: pointer;
    }
    .opacity1 {
        opacity: 1 !important;
    }
    .rotate {
        transform: translate(-50%,-50%) rotateZ(-180deg);
    }
</style>