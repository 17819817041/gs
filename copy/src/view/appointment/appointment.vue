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
        height: 100%;
        // border: solid 1px;
        .calendar_item {
            width: 68%;
            height: 100%;
            overflow: auto;
            margin: 0px 10px;
            background: white;
            @media screen and (max-width: 1080px) {
                width: 100%;
            }
        }
        .appointment_details {
            width: 32%;
            min-width: 429px;
            height: 100%;
            // border: solid 1px;
            overflow: auto;
            margin: 0px 10px;
            background: white;
            box-shadow: 0px 1px 2px 1px rgb(187, 184, 184);
            @media screen and (max-width: 1080px) {
                display: none;
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
        padding: 5px 0;
    }
    .appointment_details_img_wrap {
        border: solid 1px rgb(223, 223, 223);
        border-radius: 50%;
        width: 55px;
        height: 55px;
        overflow: hidden;
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
    .calendarX {
        width: 100%;
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
</style>

<template>
    <div class="appointment">      <!-- 医生 -->
        <div class="appointment_content flex">
            <div class="appointment_content_item noBar">
                <div class="appointment_content_item_wrap mg">
                    <div class="explan bold al">
                        <img src="@/assets/img/appointment.png" alt="">
                        Appointment
                    </div>
                    <div class="calendar flex">
                        <div class="calendar_item noBar">
                            <!-- 'appointment with' + ' ' + booking.find(b => b.booking.calanderDate==data.day).booking.bookingDoctor  -->
                            <div class="flex">
                                <div class="calendarX">
                                    <el-calendar v-model="value">
                                        <template
                                            slot="dateCell"
                                            slot-scope="{date, data}">
                                            <div >
                                                <div>{{data.day.slice(8)}}</div>
                                                <el-tooltip effect="dark" content="Have appointment" placement="top-start">
                                                    <div class="size12">{{
                                                        booking.find(b => b.booking.calanderDate==data.day) ? 
                                                        
                                                        '✔️'
                                                        : 
                                                        ''
                                                    }}</div>
                                                </el-tooltip>
                                            </div>
                                        </template>
                                    </el-calendar>
                                </div>
                            </div>
                            
                        </div>
                        <div class="appointment_details noBar" v-loading="loading" v-if="booking !== null" @scroll="docScroll" ref="doctorList">
                            <div ref="doctorList_height" style="padding: 20px 0;">
                                <div class="appointment_details_item sa cursor" v-for="(item) in booking" :key="item.booking.bookingId" 
                                @click="toConfirm(item.booking.bookingId)">
                                    <div class="appointment_details_img_wrap ju al">
                                        <img class="appointment_details_img" v-if="item.userImage" :src="item.userImage" alt="">
                                        <img style="height:100%;" v-else :src="default_img" alt="">
                                    </div>
                                    <div class="appointment_details_name">
                                        <div style="padding-bottom:7px;" class="size13">{{item.booking.userName}}</div>
                                        <div class="size12 al">
                                            <img style="width:15px;height:14px;" src="@/assets/img/callimg.png" alt="">
                                            Phone Counsultation
                                        </div>
                                    </div>
                                    <div class="DateTime">
                                        <div style="padding-bottom:7px;" class="size14_a">Date and Time</div>
                                        <div class="size13_a">{{item.booking.bookingDate}} - {{item.booking.bookingStartTime}} {{item.booking.APM}}</div>
                                    </div>
                                    <div class="pet_name">
                                        <div style="padding-bottom:7px;" class="size12">Pet Name</div>
                                        <div class="size13_a">{{item.booking.petName}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="acting float ju al" v-if="l_loading">
                                <div class="loading" v-loading="true"></div>
                            </div>
                        </div>
                        <div class="appointment_details" v-else>
                            <div class="tc " style="font-size: 20px;color:gray;padding-top:30px">No reservation</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bookingUserId, allBooking,deleteBooking } from "@/axios/request.js"
export default {
    data () {
        return {
            value: new Date(),
            booking: [],
            today: '',
            loading: true,
            pageNum: 1,
            totalRecordsCount: 0
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
    methods: {
        docScroll (e) {
            this.$store.commit('setUser',{ key: 'dom', value: 'appointment_details' })
            if (this.$refs.doctorList.scrollTop + this.$refs.doctorList.clientHeight-150 == this.$refs.doctorList_height.scrollHeight - 150) {
                if (this.booking.length >= this.totalRecordsCount) {
                } else {
                    this.pageNum += 1
                    this.getBooking()
                }
            }
            if ( this.$refs.doctorList.scrollTop > 300 ) {
                this.$store.commit('setUser', { key: 'scrollTop', value: true } )
            } else {
                this.$store.commit('setUser', { key: 'scrollTop', value: false } )
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
                userId: localStorage.getItem('userId'),
                userType: 2,
                data: this.today,
                pageNum: this.pageNum,
                pageSize: 10,
                sort: 1
            }
            if ((this.totalRecordsCount == this.booking.length) && this.totalRecordsCount !=0 ) {
                this.$store.commit("setUser",{ key: "n_loading", value: false })
                
            } else {
                this.$store.commit("setUser",{ key: "n_loading", value: true })
                bookingUserId(data).then(res => {
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
                        this.booking = this.booking.concat(res.data.data.pageT)
                        this.totalRecordsCount = res.data.data.totalRecordsCount
                        this.loading = false
                    } else if (res.data.rtnCode == 201) {
                        this.booking = null
                        this.loading = false
                    }
                }).catch(e => {
                    console.log(e)
                    this.loading = false
                })
            }
            
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
        }
    }
}
</script>

