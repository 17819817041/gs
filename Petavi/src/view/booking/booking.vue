<template>
    <div class="booking mg">
        <div class="size21 tc" style="margin-top:30px;">Booking</div>
        <div class="size12 tc" style="margin:10px auto">Select an option to book</div>
        
        <div class="form_select">
            <el-form label-position="top">
                <el-form-item class="typeFlex tc">
                    <div class="width30">
                        <el-radio label="phone">
                            <div class="phone">
                                <div class="ju"><img src="@/assets/img/phoneWay.png" alt=""></div>
                            </div> 
                        </el-radio>
                        <div class="size13">Phone Consultation</div>
                        <div class="size12">Min session 10 mins . $0.99 per/min</div>
                    </div>
                    <div class="width30">
                        <el-radio label="video">
                            <div class="video ju">
                                <div><img src="@/assets/img/videoWay.png" alt=""></div>
                            </div>
                        </el-radio>
                            <div class="size13">Video Consultation</div>
                            <div class="size12">Min session 15 mins . $1.99 per/min</div>
                    </div>
                    <div class="width30">
                        <el-radio label="visit">
                            <div class="visit mg">
                                <div><img src="@/assets/img/bookingImg.png" alt=""></div>
                            </div>
                        </el-radio>
                        <div class="size13">Physical Visit</div>
                        <div class="size12">Book free, all fees are payable at clinic</div>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="doctor" placeholder="Select the doctor">
                        <el-option v-for="(item,i) in doctorSelect" :key="i" :value="item"></el-option>
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
                            <el-select v-model="pet" placeholder="Select pet">
                                <el-option v-for="(item,i) in petSelect" :key="i" :value="item"></el-option>
                            </el-select>
                        </div>
                        <div class="star_time">
                            <el-select v-model="starTime" placeholder="Booking Star Time">
                                <el-option v-for="(item,i) in starTimeSelect" :key="i" :value="item"></el-option>
                            </el-select>
                        </div>
                        <div class="end_time">
                            <el-select v-model="endTime"  placeholder="Booking End Time">
                                <el-option v-for="(item,i) in endTimeSelect" :key="i" :value="item"></el-option>
                            </el-select>
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
                            <el-select v-model="month" placeholder="Month">
                                <el-option v-for="(item,i) in monthSelect" :key="i" :value="item"></el-option>
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
import { doctorList } from "@/axios/request.js"
export default {
    data () {
        return {
            doctor: '',
            doctorSelect: [],
            location: '',
            locationSelect: [],
            pet: '',
            petSelect: [],
            starTime: '',
            starTimeSelect: [],
            endTime: '',
            endTimeSelect: [],
            day: '',
            daySelect: [],
            month: '',
            monthSelect: [],
            years: '',
            yearsSelect: []
        }
    },
    created () {
        this.docSelect()
        this.getPetSelect()
        this.getDay()
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
        confirm () {
            this.$router.push("/confirm")
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
                // this.doctorSelect = res.data.data.pageT
            })
        },
        getPetSelect () {
            this.$store.dispatch("getPetList")
        },
        starTime () {

        },
        endTime () {

        },
        getDay () {
            let month = new Date().getMonth() + 1      //获取月份
            let Day = new Date(2021,month,0).getDate()//  获取每月天数
            for (let i=1;i<=Day;i++) {
                this.daySelect.push(i)
            }
            for (let i=1;i<=12;i++) {
                this.monthSelect.push(i)
            }
            for (let i=1;i<10;i++) {
                this.yearsSelect.push('202' + i)
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .booking {
        width: 700px;
    }
    .opacity {
        opacity: 1 !important;
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
        width: 20%;
    }
    .star_time, .end_time {
        width: 38%;
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
</style>