<template>
    <div  v-loading='loading'>
        <div class="booking mg">
            <div class="size21 tc" style="margin-top:30px;">Booking</div>
            <div class="size12 tc" style="margin:10px auto">Select an option to book</div>
            
            <div class="form_select">
                <el-form label-position="top" ref="form" :model="form" :rules="rules">
                    <el-form-item class="typeFlex ju tc" prop="WAY">
                        <div style="margin-right:10px;">
                            <el-radio v-model="form.WAY" label="1">
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
                            <el-radio v-model="form.WAY" label="2">
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
                    <el-form-item prop="pet">
                        <el-select v-model="form.pet" placeholder="Select pet" @change="getPetId">
                            <el-option v-for="(item,i) in petSelect" :key="i" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="location">
                        <el-select v-model="form.location" placeholder="Location">
                            <el-option v-for="(item,i) in locationSelect" :key="i" :value="item"></el-option>
                        </el-select>
                    </el-form-item>

                    <div class="sb">
                        <el-form-item prop="doctor" class="pet">
                            <div class=" width100">
                                <el-select v-model="form.doctor" placeholder="Select the doctor" @change="getDoctorId">
                                    <el-option v-for="(item,i) in doctorSelect" :key="i" :label="item.doctorName" :value="item.doctorId"></el-option>
                                </el-select>
                            </div>
                        </el-form-item>
                        <el-form-item prop="starTime" class="star_time" >
                            <div>
                                <!-- <el-select v-model="starTime" placeholder="Booking Star Time">
                                    <el-option v-for="(item,i) in starTimeSelect" :key="i" :value="item"></el-option>
                                </el-select> -->
                                <div  :class="['arrow', { rotate: starRotate }]"></div>
                                <el-time-select
                                    v-model="form.starTime"
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
                        </el-form-item>
                        <el-form-item prop="duration" class="end_time">
                            <div>
                                <el-select v-model="form.duration"  placeholder="CONSULTATION TIME" @change="getDuration">
                                    <el-option v-for="(item,i) in endTimeSelect" :key="i" :label="item.label" :value="item.value"></el-option>
                                </el-select>
                            </div>
                        </el-form-item>
                    </div>

                    <el-form-item label="Booking Date">
                        <div class="sb">
                            <el-form-item prop="day" class="day">
                                <div>
                                    <el-select v-model="form.day" placeholder="Day">
                                        <el-option v-for="(item,i) in daySelect" :key="i" :value="item"></el-option>
                                    </el-select>
                                </div>
                            </el-form-item>
                            <el-form-item class="month" prop="month">
                                <div>
                                    <el-select v-model="form.month" placeholder="Month" @change="chooseMonth">
                                        <el-option v-for="(item,i) in monthSelect" :key="i" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                                </div>
                            </el-form-item>
                            <el-form-item  class="years" prop="years">
                                <div>
                                    <el-select v-model="form.years" placeholder="Year">
                                        <el-option v-for="(item,i) in yearsSelect" :key="i" :value="item"></el-option>
                                    </el-select>
                                </div>
                            </el-form-item>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <div class="textarea_wrap">
                            <textarea class="width100 textarea" v-model="remark" placeholder="Remark" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <el-button class="width100" type="primary" @click="confirm">Book Now</el-button>
                    </el-form-item>
                </el-form>
            </div>
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
            form: {
                WAY: null,
                doctor: '',
                pet: '',
                location: null,
                starTime: '',
                duration: "",
                day: '',
                month: '',
                years: '',
            },
            doctorId: null,
            doctorSelect: [],
            locationSelect: [1,2],
            petId: null,
            petSelect: [],
            endTime: '',
            starTimeSelect: [],
            endTimeSelect: [
                {label: '30MIN',value: 30},
                {label: '45MIN',value: 45},
                {label: '60MIN',value: 60},
            ],
            date: '',
            daySelect: [],
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
            yearsSelect: [],
            remark: '',
            way: null,
            judge_month: null,
            pageNum: 1,
            pageSize: 10,
            bookingMsg: {},
            loading: false,
            rules: {
                WAY: [
                    { required:true, message:'Selection of consultation methods', trigger:"blur" }
                ],
                doctor: [
                    { required:true, message:'Please choose a doctor', trigger:"blur" }
                ],
                pet: [
                    { required:true, message:'Please choose a pet', trigger:"blur" }
                ],
                location: [
                    { required:true, message:'Please select location', trigger:"blur" }
                ],
                starTime: [
                    { required:true, message:'Please select a starTime', trigger:"blur" }
                ],
                duration: [
                    { required:true, message:'Please select duration', trigger:"blur" }
                ],
                day: [
                    { required:true, message:'Please select day', trigger:"blur" }
                ],
                month: [
                    { required:true, message:'Please select month', trigger:"blur" }
                ],
                years: [
                    { required:true, message:'Please select years', trigger:"blur" }
                ],
            },
            doctorHead: ''
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
        userDetails () { return this.$store.state.user.userDetail },
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
            this.loading = true
            let that = this
            this.$refs.form.validate(flag => {
                if (flag) {
                    that.date = that.form.years + '-' + that.form.month + '-' + that.form.day
                    // let D = new Date()
                    // that.bookingCreateTime = D.toLocaleDateString().split('/').join('-')
                    // let T = that.form.starTime
                    // let arr = T.split(":")
                    // let fen = Number(arr[1])
                    // let shi = Number(arr[0])
                    // if ((Number(arr[1]) + that.form.duration) > 60 ) {
                    //     fen = Number(arr[1]) + that.form.duration - 60
                    //     shi = shi + 1
                    // }
                    // if ((Number(arr[1]) + that.form.duration) === 60 ) {
                    //     shi = shi + 1
                    //     fen = '00'
                    // }
                    // that.endTime = shi + ':' + fen
                    // console.log(that.endTime)
                    var data = {
                        bookingType: that.form.WAY,
                        doctorHead: that.doctorHead,
                        bookingDoctor: that.form.doctor,
                        bookingDoctorId: that.doctorId,
                        locationId: that.form.location,
                        petName: that.form.pet,
                        petId: that.petId,
                        userName: this.userDetails.userName,
                        userId: localStorage.getItem('userId'),
                        bookingStartTime: that.form.starTime,
                        // bookingEndTime: that.form.endTime,
                        bookingDate: that.date,
                        bookingRemark: that.remark,
                        // bookingTimeId: null,
                        bookingTime: that.form.duration,
                        // bookingState: 1
                    }
                    booking(data).then(res => {
                        console.log(res)
                        if (res.data.rtnCode == 200) {
                            that.bookingMsg = res.data.data
                            that.loading = false
                            that.$message({
                                type: 'success',
                                message: 'Book successfully '
                            })
                            that.information()
                            that.$router.push({
                                name: 'confirm',
                                query: {
                                    key: res.data.data.bookingId,
                                    head: that.doctorHead
                                }
                            })
                        } else if (res.data.rtnCode == 201) {
                            that.loading = false
                            that.$message({
                                type: 'error',
                                message: "Your account balance is insufficient. Please recharge your account before making an appointment"
                            })
                        }
                    }).catch(e => {
                        console.log(e)
                        that.$message({
                            type: 'error',
                            message: 'Please complete the information'
                        })
                    })
                } else {
                    that.$message({
                        type: 'error',
                        message: 'Please complete the information'
                    })
                }
            })
        },
        information () {
            console.log()
            let data = {
                type: "danmu",
                value: this.bookingMsg.userName
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: data.value,                  // 消息内容
                to: JSON.stringify(this.bookingMsg.bookingDoctorId) + 'A2',     // 接收消息对象（用户id）
                chatType: 'singleChat',                  // 设置为单聊    
                ext: {
                    key: this.bookingMsg
                },                    
                success: function (id, serverMsgId) {
                    console.log('send private text Success');  
                }, 
                fail: function(e){
                    console.log(e)
                    console.log("Send private text error");  
                }
            });
            this.$conn.send(msg.body);
        },
        getDuration (val) {
            this.form.duration = val
        },
        getDoctorId (val) {
            this.doctorSelect.forEach(item => {
                if (item.doctorId == val) {
                    this.form.doctor = item.doctorName
                    this.doctorId = item.doctorId
                    this.doctorHead = item.userHead
                }
            })
        },
        getPetId (val) {
            this.petSelect.forEach(item => {
                if (item.id == val) {
                    this.form.pet = item.name
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
            if (this.form.day > this.daySelect.length) {
                this.form.day = this.daySelect.length
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
            font-size: 16px;
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