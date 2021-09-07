<style lang="less" scoped>
    @import "@/less/css.less";
    .appointment {
        width: 100%;
        height: 100%;
    }
    .appointment_content {
        height: 100%;
    }
    .appointment_content_item {
        height: 100%;
        background: @content;
        flex: 10;
        overflow: auto;
    }
    .appointment_content_item_wrap {
        width: 98%;
        height: calc(100% - 60px);
    }
    .calendar {
        width: 100%;
        height: calc(100% - 26px);
        // border: solid 1px;
        .appointment_details {
            width: 100%;
            min-width: 429px;
            height: 100%;
            margin: 0px 10px;
            background: white;
            box-shadow: 0px 1px 2px 1px rgb(187, 184, 184);
            @media screen and (max-width: 1080px) {
                min-width: 300px;
            }
        }
    }
    .appointment_details_item {
        width: 95%;
        background: white;
        box-shadow: 0 4px 7px 1px #D5D5D5;
        margin: 20px auto;
        border-radius: 10px;
        overflow: hidden;
        padding: 4px 5px;
    }
    .appointment_details_img_wrap {
        border: solid 1px rgb(223, 223, 223);
        border-radius: 50%;
        width: 55px;
        height: 55px;
        overflow: hidden;
        margin: 5px auto;
    }
    .appointment_details_img {
        height: 100%;
        // margin: 0 10px;
    }
    .Reschedule {
        width: 80px;
        border-radius: 7px;
        background: @logout;
        font-size: 12px;
        color: white;
        padding: 3px 0px;
        margin: 3px;
    }
    .Cancel {
        margin-top: 6px;
        width: 80px;
        border-radius: 7px;
        background: @cancel;
        font-size: 12px;
        color: white;
        padding: 3px 0px;
        margin: 3px;
    }
    .DateTime, .pet_name,.appointment_details_name {
        margin-top: 6px;
    }
    .pet_name {
        @media screen and (max-width: 1080px) {
            text-align: end;
        }
    }
    .calendar-day{
        text-align: center;
        color: #202535;
        line-height: 30px;
        font-size: 12px;
    }
    .is-selected{
        color: #F8A535;
        font-size: 10px;
        margin-top: 5px;
    }
    #calendar .el-button-group>.el-button:not(:first-child):not(:last-child):after{
        content: '当月';
    }
    .size14_a {
        font-size: 12px;
        color: #767676;
    }
    .size13_a {
        font-size: 12px;
    }
    .acting {
        width: 100%;
        padding: 50px 0;
        // border: solid 1px;
        @media screen and (max-width: 564px) {
            width: 100%;
            padding: 20px 0;
        }
    }
    .appointment_details_child {
        height: calc(100% - 32px);
        overflow: auto;
    }
    .user_b {
        @media screen and (max-width: 1080px) {
            padding-left: 8px;
        }
    }
    .callimg {
        width:15px;
        height:14px;
        @media screen and (max-width: 1080px) {
            width: 20px;
            height: 19px;
            padding-right: 5px;
        }
    }
    .Booking_list {
        padding: 3px 10px;
        color: white;
        font-size: 15px;
        background: #15BC83;
        border-radius: 7px;
        display: none;
        @media screen and (max-width: 750px) {
            display: block;
        }
    }
    .wrap_img_b {
        min-width: 150px;
        @media screen and (max-width: 564px) {
            min-width: 75px;
        }
    }
    .sort_booking {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        border: solid 2px rgb(199, 199, 199);
        margin-left: 7px;
        width: 150px;
    }
</style>

<template>
    <div class="appointment">      <!-- 医生 -->
        <el-backtop target=".appointment_details"></el-backtop>
        <div class="appointment_content flex">
            <div class="appointment_content_item noBar">
                <div class="appointment_content_item_wrap mg">
                    <div class="explan bold al sb">
                        <div class="al">
                            <img src="@/assets/img/appointment.png" alt="">
                            Appointment
                        </div>
                        <div class="sort_booking">
                            <el-select v-model="sort_m" placeholder="Classification" @change="sort_t">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="calendar flex">
                        <div class="appointment_details" v-loading="l_loading" v-if="booking">
                            <div class="appointment_details_child noBar">
                                <div class="appointment_details_item sb cursor" v-for="(item) in booking" :key="item.booking.bookingId" 
                                    @click="toConfirm(item.booking.bookingId)">
                                    <div class="wrap_img_b">
                                        <div class="appointment_details_img_wrap ju al">
                                            <img class="appointment_details_img" v-if="item.userImage" :src="item.userImage" alt="">
                                            <img style="height:100%;" v-else :src="default_img" alt="">
                                        </div>
                                        <div class="size13 user_b tc">{{item.booking.userName}}</div>
                                    </div>
                                    <div style="width: 100%;min-width: 190px;">
                                        <div class="size12 al ju">
                                            <img class="callimg" src="@/assets/img/callimg.png" alt="">
                                            Phone Counsultation
                                        </div>
                                        <div class="DateTime sb">
                                            <div style="padding-bottom:7px;" class="size14_a">Date and Time</div>
                                            <div class="size13_a">{{item.booking.bookingDate}} - {{item.booking.bookingStartTime}} {{item.booking.APM}}</div>
                                        </div>
                                        <div class="pet_name sb">
                                            <div style="padding-bottom:7px;" class="size12">Pet Name</div>
                                            <div class="size13_a">{{item.booking.petName}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ju" style="background: white;">
                                <el-pagination
                                    :small="small"
                                    :pager-count='7'
                                    layout="prev, pager, next"
                                    :total="totalRecordsCount"
                                    @current-change='pageCut'>
                                </el-pagination>
                            </div>
                        </div>
                        <div class="appointment_details" v-else-if="booking === null">
                            <div class="tc " style="font-size: 20px;color:gray;padding-top:30px">No reservation</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bookingUserId, allBooking_doc,deleteBooking } from "@/axios/request.js"
export default {
    data () {
        return {
            D: new Date(),
            booking: [],
            today: '',
            loading: true,
            pageNum: 1,
            totalRecordsCount: 0,
            small: false,

            options: [{
                value: 1,
                label: 'All'
                }, {
                value: 2,
                label: 'Undone'
                }, {
                value: 3,
                label: 'Completed'
            }],
            small: false,
            sort_m: 1
        }
    },
    created () {
        this.getDAY()
        this.getBooking()
    },
    computed: {
        default_img () { return this.$store.state.user.default_img },
        l_loading: {
            get () { return this.$store.state.user.n_loading },
            set (val) {
                this.$store.commit("setUser", {
                    key: "n_loading",
                    value: val
                })
            },
        },
    },
    beforeMount() {
        window.addEventListener('resize', (e) => {
            if (e.target.innerWidth <= 564) {
                this.small = true
            } else {
                this.small = false
            }
        })
    },
    methods: {
        pageCut (val) {
            this.pageNum = val
            if (this.sort_m == 1) {
                this.getBooking()
            } else if (this.sort_m == 2) {
                // let date = this.D.toLocaleDateString().split('/').join('-')
                this.Undone()
            } else if (this.sort_m == 3) {
                // let Y = new Date()
                // Y.setTime(Y.getTime()-24*60*60*1000);
                // var yday = Y.getFullYear()+"-" + (Y.getMonth()+1) + "-" + Y.getDate();
                this.Completed()
            }
        },
        reschedule (key) {
            console.log(key)
            this.$router.push({
                name: "reschedule",
                query: {
                    id: key
                }
            })
        },
        cancelBook (item) {
            this.$confirm('Are you sure to Cancel?', 'Attention', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                let data = {
                    bookingId: item.booking.bookingId
                }
                deleteBooking(data).then(res => {
                    console.log(res)
                    if (res.data.rtnCode == 200) {
                        this.$message({
                            type: 'info',
                            message: 'Cancel the appointment successfully!'
                        })
                    }
                }).catch(e => {
                    console.log(e)
                })
            }).catch (e => {
                console.log(e)
            })
        },
        getBooking () {
            let data = {
                doctorId: localStorage.getItem('userId'),
                type: 3,
                pageNum: this.pageNum,
                pageSize: 10,
                sort: 1
            }
                this.$store.commit("setUser",{ key: "n_loading", value: true })
                allBooking_doc(data).then(res => {
                    this.$store.commit("setUser",{ key: "n_loading", value: false }) 
                    if (res.data.rtnCode == 200) {
                        res.data.data.pageT.forEach(item => {
                            let date = item.booking.bookingDate.split('-')
                            item.booking.bookingDate = date[2] + '/' + date[1] + '/'+ date[0]
                            item.booking.APM = ''
        
                            var hour = Number(item.booking.bookingStartTime.split(':')[0])
                            var minute = Number(item.booking.bookingStartTime.split(':')[1])
                            if ( hour >= 12 && minute >= 0) {
                                item.booking.APM = 'PM'
                            } else {
                                item.booking.APM = 'AM'
                            }
                            item.booking.calanderDate = date[0] + "-" + date[1] + "-" + date[2]
                        })
                        this.booking = res.data.data.pageT
                        this.totalRecordsCount = res.data.data.totalRecordsCount
                        this.loading = false
                    } else if (res.data.rtnCode == 201) {
                        this.booking = null
                        this.loading = false
                    }
                }).catch(e => {
                    console.log(e)
                    this.loading = false
                    this.$message({
                        type: 'error',
                        message: 'Loading timed out, please check the network!'
                    })
                })
        },
        getDAY () {
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            this.today = currentdate
        },
        toConfirm (id) {
            this.$router.push({
                name: 'vetConfirm',
                query: id
            })
        },
        sort_t (val) {
            this.booking = []
            this.loading = true
            this.pageNum = 1
            this.totalRecordsCount = 0
            this.sort_m = val
            // let Y = new Date()
            // Y.setTime(Y.getTime()-24*60*60*1000);
            // var yday = Y.getFullYear()+"-" + (Y.getMonth()+1) + "-" + Y.getDate();

            if (val == 1) {
                this.getBooking()
            } else if (val == 2) {
                this.Undone()
            } else if (val == 3) {
                this.Completed()
            }
        },
        Undone () {         
            let data = {
                doctorId: localStorage.getItem('userId'),
                type: 2,
                pageNum: this.pageNum,
                pageSize: 10,
                sort: 1
            }
                this.$store.commit("setUser",{ key: "n_loading", value: true })
                allBooking_doc(data).then(res => {
                    // console.log(res, '未完成')
                    this.$store.commit("setUser",{ key: "n_loading", value: false })
                    if (res.data.rtnCode == 200) {
                        res.data.data.pageT.forEach(item => {
                            if (item.booking.bookingState == 1 || item.booking.bookingState == 2 ) {
                                let date = item.booking.bookingDate
                                let En = new Date(date).toDateString()
                                let arr = En.split(' ')
                                item.booking.bookingDate = arr[2] + ' ' + arr[1] + ','+ arr[3]
                                item.booking.APM = ''
                                var hour = Number(item.booking.bookingStartTime.split(':')[0])
                                var minute = Number(item.booking.bookingStartTime.split(':')[1])
                                if ( hour >= 12 && minute >= 0) {
                                    item.booking.APM = 'PM'
                                } else {
                                    item.booking.APM = 'AM'
                                }
                            }
                        })
                        this.booking = this.booking.concat(res.data.data.pageT)
                        this.totalRecordsCount = res.data.data.totalRecordsCount
                    } else if (res.data.rtnCode == 201 ) {
                        this.booking = res.data.data
                    } else {
                        this.booking = null
                    }
                })
        },
        Completed () {
            let data = {
                doctorId: localStorage.getItem('userId'),
                type: 1,
                pageNum: this.pageNum,
                pageSize: 10,
                sort: 1
            }
                this.$store.commit("setUser",{ key: "n_loading", value: true })
                allBooking_doc(data).then(res => {
                    // console.log(res,'已完成')
                    this.$store.commit("setUser",{ key: "n_loading", value: false })
                    if (res.data.rtnCode == 200) {
                        res.data.data.pageT.forEach(item => {
                            if (item.booking.bookingState == 1 || item.booking.bookingState == 2 ) {
                                let date = item.booking.bookingDate
                                let En = new Date(date).toDateString()
                                let arr = En.split(' ')
                                item.booking.bookingDate = arr[2] + ' ' + arr[1] + ','+ arr[3]
                                item.booking.APM = ''
                                var hour = Number(item.booking.bookingStartTime.split(':')[0])
                                var minute = Number(item.booking.bookingStartTime.split(':')[1])
                                if ( hour >= 12 && minute >= 0) {
                                    item.booking.APM = 'PM'
                                } else {
                                    item.booking.APM = 'AM'
                                }
                            }
                        })
                        this.booking = this.booking.concat(res.data.data.pageT)
                        this.totalRecordsCount = res.data.data.totalRecordsCount
                    } else if (res.data.rtnCode == 201 ) {
                        this.booking = res.data.data
                    } else {
                        this.booking = null
                    }
                })
        }
    }
}
</script>

