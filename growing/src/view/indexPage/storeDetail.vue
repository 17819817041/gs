<template>
    <div class="storeDetail">
        <div>
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="(item,i) in detail.images" :key="i">
                    <div class="al Image_wrap">
                        <img class="cover" :src="item" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="storeMsg">
            <div class="flex msg_wrap"> 
                <div class="title">店鋪名稱:</div>
                <div class="message">{{detail.shopName}}</div>
            </div>
            <div class="flex msg_wrap"> 
                <div class="title">店舖性質:</div>
                <div class="message">{{detail.shopTypeName}} </div>
            </div>
            <div class="flex msg_wrap"> 
                <div class="title">詳細地址:</div>
                <div class="message">{{detail.detailedAddress}}</div>
            </div>
            <div class="flex msg_wrap block"> 
                <div class="title">營業時間:</div>
                <div class="message msg_res">
                    <div class="clear">
                        <span class="timeTitle float">繁忙時段: </span>
                        <span class="float" v-for="(item,i) in detail.fmTimeInterval" :key="i">{{item.packageName}}<span v-show="i != detail.fmTimeInterval.length-1">,</span> </span>
                    </div>
                    <div class="clear" style="margin-top: 3px;">
                        <span class="timeTitle float">非繁忙時段: </span>
                        <span class="float" v-for="(item,i) in detail.ffmTimeInterval" :key="i">{{item.packageName}}<span v-show="i != detail.ffmTimeInterval.length-1">,</span> </span>
                    </div>
                    <div class="clear" style="margin-top: 3px;">
                        <span class="timeTitle float">超繁忙時段: </span>
                        <span class="float" v-for="(item,i) in detail.cfmTimeInterval" :key="i">{{item.packageName}}<span v-show="i != detail.cfmTimeInterval.length-1">,</span> </span>
                    </div>
                </div>
            </div>

            <div class="flex msg_wrap block"> 
                <div class="title">詳細收費:</div>
                <div class="message msg_res">
                    <div><span class="timeTitle">月費: </span><span style="color: red;">$ {{detail.monthlyCharges}} HKD</span></div>
                    <div><span class="timeTitle" style="margin-top: 3px;">繁忙時段: </span><span style="color: red;">$ {{detail.fmCharges}} HKD</span></div>
                    <div><span class="timeTitle" style="margin-top: 3px;">非繁忙時段: </span><span style="color: red;">$ {{detail.ffmCharges}} HKD</span></div>
                    <div><span class="timeTitle" style="margin-top: 3px;">超繁忙時段: </span><span style="color: red;">$ {{detail.cfmCharges}} HKD</span></div>
                </div>
            </div>
        </div>

        <div class="radio">
            <el-radio-group v-model="radio" size="small" style="margin-right: 10px; padding: 5px 0;">
                <el-radio label="1" @click.native="clockActive = true" border>持續投放</el-radio>
                <el-radio label="2" @click.native="clockActive = true" border>間斷投放</el-radio>
            </el-radio-group>
            <el-button type="primary" size="small" @click.native="next">下一步</el-button>
        </div>
        <div class="Date flex" v-if="radio == '1' && clockActive">
            <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm">
                <div class="flex">
                    <div>
                        <el-form-item prop="startDate" style="margin-right: 7px;">
                            <el-date-picker
                                class="width100"
                                
                                @change="STIME"
                                v-model="ruleForm.startDate"
                                type="date"
                                :placeholder="$t('lang.sdate')"
                                :picker-options="pickerOptions1">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item prop="endDate">
                            <el-date-picker
                                class="width100"
                                v-model="ruleForm.endDate"
                                type="date"
                                :placeholder="$t('lang.enddate')"
                                :picker-options="pickerOptions2"
                                >
                            </el-date-picker>
                        </el-form-item>
                    </div>
                </div>
            </el-form>
            <!-- <el-date-picker
                style="margin-right: 7px;"
                @change="STIME"
                v-model="ruleForm.startDate"
                type="date"
                :placeholder="$t('lang.sdate')"
                :picker-options="pickerOptions1">
            </el-date-picker>
            <el-date-picker
                v-model="ruleForm.endDate"
                type="date"
                :placeholder="$t('lang.ruleForm.endDate')"
                :picker-options="pickerOptions2"
                >
            </el-date-picker> -->
        </div>
        <div class="Date flex" v-if="radio == '2' && clockActive">
            <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1" class="demo-ruleForm">
                <el-form-item prop="value4">
                    <el-date-picker
                        type="dates"
                        v-model="ruleForm1.value4"
                        placeholder="選擇一個或多個日期">
                    </el-date-picker>
                </el-form-item>
            </el-form>
        </div>
        <div class="time_wrap" v-if="radio == '3' && !clockActive">
            <el-form label-position="top"
                :label-width="$i18n.locale == 'zh-CN'? '80px': '205px'" class="demo-ruleForm">
                <el-form-item :label="clockList[0].timeIntervalName">
                    <el-checkbox-group v-model="checkedCities1">
                        <el-checkbox v-for="(item,i) in clockList[0].timeIntervalList" 
                        :label="item" :key="i+1"><div style="width: 71px;">{{item.packageName}}</div></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item :label="clockList[2].timeIntervalName">
                    <el-checkbox-group v-model="checkedCities11">
                        <el-checkbox v-for="(item,i) in clockList[2].timeIntervalList" 
                        :label="item" :key="i+2"><div style="width: 71px;">{{item.packageName}}</div></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item :label="clockList[1].timeIntervalName">
                    <el-checkbox-group v-model="checkedCities21">
                        <el-checkbox v-for="(item,i) in clockList[1].timeIntervalList" 
                        :label="item" :key="i"><div style="width: 71px;">{{item.packageName}}</div></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
        </div>


        <div style="margin: 20px 10px 0 10px;">
            <div class='flootTitlt'>同區推薦</div>
            <div class="floot flex bar">
                <div class="item_store cursor" v-for="(item,i) in recomeListList" :key="i">
                    <div class="img_wrap ju al"><img :src="item.image" alt=""></div>
                    <div style="margin:5px 0;">地區: {{item.addressName}} </div>
                    <div>平均收費: <span style="color: red;">${{item.prices}}HKD</span> </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { recommend, GGgetShopDetails } from "@/axios/request.js"
export default {
    data () {
        return {
			checkedCities1: [],
			checkedCities11: [],
			checkedCities21: [],
            clockActive: true,
            radio: '1',
            ruleForm: {
                startDate: '',
                endDate: '',
            },
            ruleForm1: {
                value4: '',
            },
            rules: {
                startDate: [
                    { type:'date', required: true, message: '請選擇投放起始日期', trigger: 'change' }
                ],
				endDate: [
                    { type: 'date', required: true, message: '請選擇投放結束日期', trigger: 'change' }
                ],
            },
            rules1: {
                value4: [
                    { required: true, message: '請選擇投放日期', trigger: 'change' }
                ],
            },
            
            pickerOptions: {
              shortcuts: [{
                  text: '最近一周',
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                  }
                  }, {
                    text: '最近一个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                      picker.$emit('pick', [start, end]);
                    }
                  }, {
                    text: '最近三个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                      picker.$emit('pick', [start, end]);
                    }
                }]
            },
			pickerOptions1: {
                disabledDate: (time) => {
                    // if (this.ruleForm.startDate != "") {
                    //     return time.getTime() < Date.now() || time.getTime() < this.ruleForm.startDate;
                    // } else {
                        return time.getTime() < (Date.now());
                    // }
                }
            },
            pickerOptions2: {
                disabledDate: (time) => {
                    if (this.ruleForm.startDate) {
                        return time.getTime() < this.ruleForm.startDate || time.getTime() < new Date(this.ruleForm.startDate).getTime() + 8.64e7;
                    } else {
                        return time.getTime() < this.ruleForm.startDate || time.getTime() < Date.now() + 8.64e7;
                    }
                    
                }
            },
            recomeListList: [],
            detail: {}
        }
    },
    created() {
        this.GGgetShopDetails()
        this.recommend()
    },
    mounted () {
        document.getElementsByClassName('Index')[0].scrollTop = 0;
    },
    watch: {
        clockList: {
			handler (val) {
				if (val) {
					this.clockList = val
				}
			}
		},
    },
    computed: {
        clockList: {             //時間列表
			get () { return this.$store.state.user.clockList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'clockList',
					value: val
				})
			}
		},
    },
    methods: {
        STIME (val) {
			let D = new Date(val)
			let start = D.getTime()
			if (this.ruleForm.endDate) {
				if (start > this.ruleForm.endDate.getTime()) {
					this.ruleForm.endDate = ''
				}
			}
		},
        GGgetShopDetails () {
            let data = {
                shopId: this.$route.query.id
            }
            GGgetShopDetails(data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.clockList.forEach(item1 => {
						item1.timeIntervalList.forEach(child => {
                            res.data.data.cfmTimeInterval.forEach(val => {
                                if (child.id == val.timeIntervalDetailsId) {
                                    val.packageName = child.packageName
                                }
                            })
						})
                        item1.timeIntervalList.forEach(child => {
                            res.data.data.ffmTimeInterval.forEach(val => {
                                if (child.id == val.timeIntervalDetailsId) {
                                    val.packageName = child.packageName
                                }
                            })
						})
                        item1.timeIntervalList.forEach(child => {
                            res.data.data.fmTimeInterval.forEach(val => {
                                if (child.id == val.timeIntervalDetailsId) {
                                    val.packageName = child.packageName
                                }
                            })
						})
					})
                    this.detail = res.data.data
                }
            })
        },
        recommend () {
            let data = {
                pageNum: 0,
                pageSize: 5,
                parentAddressId: this.$route.query.area
            }
            recommend(data).then(res => {
                if (res.data.rtnCode == 200) {
                    res.data.data.pageT.forEach(item => {
                        item.prices = item.price.toFixed(1)
                    })
                    this.recomeListList = res.data.data.pageT
                }
            })
        },
        next () {
            let that = this
            if (this.radio == '1') {
                this.$refs.ruleForm.validate(flag => {
                    if (flag) {
                        that.radio = '3'
                        that.clockActive = false
                    }
                })
            } else if (this.radio == '2') {
                this.$refs.ruleForm1.validate(flag => {
                    if (flag) {
                        that.radio = '3'
                        that.clockActive = false
                    }
                })
            }
        }
    }
}
</script>

<style scope lang='less'>
    // .storeDetail {
        // padding: 30px;
    // }
    .block {
        @media screen and (max-width: 564px) {
            display: block;
        }
    }
    .timeTitle {
        display: inline-block;
        min-width: 80px;
        color: rgb(63, 63, 63) !important;
        
        text-align: justify;
    }
    .flootTitlt {
        padding: 5px 0 20px 0;
        color: gray;
        border-top: solid 1px gray;
    }
    .item_store {
        border: solid 1px rgb(218, 218, 218);
        border-radius: 3px;
        width: 220px;
        padding: 10px;
        margin-right: 20px;
    }
    .img_wrap {
        height: 200px;
        overflow: hidden;
        img {
            height: 100%;
        }
    }
    .floot {
        font-size: 14px;
        overflow-x: auto;
        padding-bottom: 5px;
    }
    .radio {
        margin: 20px 10px;
    }
    .time_wrap, .Date {
        margin: 0 10px;
    }
    .Image_wrap {
        height: 100%;
        width: 100%;
        img {
            width: 100%;
        }
    }
    .storeMsg {
        margin: 20px 10px 0 10px;
        border: solid 1px rgb(235, 235, 235);
        border-radius: 12px;
        // background: #F1DAB4;
        background: #f7f7f7;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        // height: 300px;
        padding: 10px 30px;
        @media screen and (max-width: 700px) {
            width: 100%;
            padding: 20px 8px;
        }
    }
    .title {
        min-width: 63px;
        font-size: 15px;
        white-space: nowrap;
        margin-right: 20px;
        font-weight: bold;
    }
    .message {
        font-size: 14px;
        color: gray;
    }
    .msg_res {
        @media screen and (max-width: 564px) {
            margin-left: 22px;
        }
    }
    .msg_wrap {
        font-size: 14px;
        margin-top: 7px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>