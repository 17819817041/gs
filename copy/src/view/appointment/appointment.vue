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
        height: calc(100% - 91px);
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
            @media screen and (max-width: 1020px) {
                width: 100%;
            }
        }
        .appointment_details {
            width: 32%;
            min-width: 429px;
            height: 100%;
            margin: 0px 10px;
            background: white;
            box-shadow: 0px 1px 2px 1px rgb(187, 184, 184);
            @media screen and (max-width: 1150px) {
                min-width: 300px;
            }
            @media screen and (max-width: 1020px) {
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
        padding: 4px 5px;
    }
    .appointment_details_img_wrap {
        border: solid 1px rgb(223, 223, 223);
        border-radius: 50%;
        width: 55px;
        height: 55px;
        overflow: hidden;
        @media screen and (max-width: 1150px) {
            display: none;
        }
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
        @media screen and (max-width: 1150px) {
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
        @media screen and (max-width: 1150px) {
            padding-left: 8px;
        }
    }
    .callimg {
        width:15px;
        height:14px;
        @media screen and (max-width: 1150px) {
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
        @media screen and (max-width: 1020px) {
            display: block;
        }
    }
    .booking_i {
        width: 100%;
        color: white;
        background: green;
        border-radius: 8px;
        padding: 3px;
        img {
            width: 20px;
            margin-left: 5px;
            @media screen and (max-width: 564px) {
                width: 15px;
            }
            @media screen and (max-width: 400px) {
                margin: auto;
            }
        }
    }
    .DateTime {
        padding: 0 5px;
    }
    .sort_booking {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        border: solid 2px rgb(199, 199, 199);
        margin-left: 7px;
        width: 150px;
        @media screen and (max-width: 1020px) {
            display: none;
        }
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
                        <div class="Booking_list bold cursor" @click="mobile_booking">Booking</div>

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
                        <div class="calendar_item noBar">
                            <div id="calendar"></div>
                        </div>
                        <div class="appointment_details" v-loading="l_loading" v-if="booking">
                            <div class="appointment_details_child noBar">
                                <div class="appointment_details_item sa cursor" v-for="(item) in booking" :key="item.booking.bookingId" 
                                @click="toConfirm(item.booking.bookingId)">
                                    <div class="appointment_details_img_wrap ju al">
                                        <img class="appointment_details_img" v-if="item.userImage" :src="item.userImage" alt="">
                                        <img style="height:100%;" v-else :src="default_img" alt="">
                                    </div>
                                    <div class="appointment_details_name user_b">
                                        <div style="padding-bottom:5px;" class="size13 user_b">{{item.booking.userName}}</div>
                                        <div class="size12 al">
                                            <img class="callimg" src="@/assets/img/callimg.png" alt="">
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
import { allBooking_doc } from "@/axios/request.js"
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
export default {
    data () {
        return {
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
            value: 1,
            undone_totalRecordsCount: 0,
            completed_totalRecordsCount: 0,
            small: false,
            sort_m: 1
        }
    },
    created () {
        this.getDAY()
    },
    mounted () {
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
        mobile_booking () {
            this.$router.push('/mobileBooking')  
        },
        pageCut (val) {
            this.pageNum = val
            this.getBooking()
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
        getBooking () {
            let data = {
                doctorId: localStorage.getItem('userId'),
                type: 3,
                pageNum: this.pageNum,
                pageSize: 10,
                sort: 1
            }
            if ((this.totalRecordsCount == this.booking.length) && this.totalRecordsCount !=0 ) {
                this.$store.commit("setUser",{ key: "n_loading", value: false })
                
            } else {
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
                        // this.booking = this.booking.concat(res.data.data.pageT)
                        this.booking = res.data.data.pageT
                        this.calendarUI()
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
                query: {
                    id: id
                }
            })
        },
        calendarUI () {
            let calendarEl = document.getElementById('calendar')
            let calendar = new Calendar(calendarEl, {
                plugins: [ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ],
                dateClick: function(info) {
                    // info.dayEl.style.backgroundColor = '#F2F8FE';
                },
                eventClick: function(info) {
                    // alert('Event: ' + info);
                    // info.jsEvent.preventDefault(); // don't let the browser navigate

                    // if (info.event.url) {
                    //     window.open(info.event.url);
                    // }
                },
                initialView: 'dayGridMonth',
                dayMaxEvents: true,
                headerToolbar: {
                    left: 'prevYear,prev,next,nextYear today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay'
                },
                events: [],
                // events: 'http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic'
            });
            calendar.render();
            // calendar.on('dateClick', function(info) {
            //     console.log('clicked on ' + info.dateStr);
            // });
            this.$nextTick(() => {
                this.booking.forEach(item => {
                    calendar.addEvent({
                        title: '',
                        // start: '2021-08-04',
                        // url: 'http://google.com/',
                        start: item.booking.calanderDate + 'T' + item.booking.bookingStartTime
                    })
                })
            })
        },
        sort_t (val) {
            this.booking = []
            this.loading = true
            this.pageNum = 1
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
            if ((this.totalRecordsCount == this.booking.length) && this.totalRecordsCount !=0 ) {
                this.$store.commit("setUser",{ key: "n_loading", value: false })
            } else { 
                this.$store.commit("setUser",{ key: "n_loading", value: true })
                allBooking_doc(data).then(res => {
                    // console.log(res, '未完成')
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
                        // this.booking = this.booking.concat(res.data.data.pageT)
                        this.booking = res.data.data.pageT
                        this.calendarUI()
                        this.totalRecordsCount = res.data.data.totalRecordsCount
                    } else if (res.data.rtnCode == 201 ) {
                        this.booking = res.data.data
                    } else {
                        this.booking = null
                    }
                })
            }
        },
        Completed () {
            let data = {
                doctorId: localStorage.getItem('userId'),
                type: 1,
                pageNum: this.pageNum,
                pageSize: 10,
                sort: 1
            }
            if ((this.totalRecordsCount == this.booking.length) && this.totalRecordsCount !=0 ) {
                this.$store.commit("setUser",{ key: "n_loading", value: false })
            } else { 
                this.$store.commit("setUser",{ key: "n_loading", value: true })
                allBooking_doc(data).then(res => {
                    // console.log(res,'已完成')
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
                        // this.booking = this.booking.concat(res.data.data.pageT)
                        this.booking = res.data.data.pageT
                        this.calendarUI()
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
}
</script>

