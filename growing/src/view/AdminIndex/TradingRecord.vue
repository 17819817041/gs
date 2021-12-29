<style lang='less' scoped>
@import "@/less/style.less";
    .TradingRecord {
        height: 100%;
        margin-top: 20px;
    }
    .AdvertisingOperation_back {
        width: 98%;
        font-size: 20px;
        img {
            width: 20px;
            height: 20px;
            @media screen and (max-width: 960px) {
                width: 15px;
                height: 15px;
            }
        }
        @media screen and (max-width: 960px) {
            font-size: 15px;
        }
    }
    .divider_wrap {
        background: #E5E5E5;
        // padding: 4px;
    }
    .divider_message_title {
        padding: 15px 30px;
    }
    .divider {
        width: 0;
        margin-right: 5px;
        background: @themeColor;
        border: solid 2px @themeColor;
    }
    .divider_text {
        color: @themeColor;
        font-size: 14px;
    }
    .TradingRecord_content {
        width: 97%;
        background: white;
        height: calc(100% - 45px);
        overflow-x: hidden;
        overflow-y: auto;
        margin-top: 20px;
        .TradingRecord_content_item {
            padding: 17px;
        }
    }
    .trading_item {
        width: 24%;
        border: solid 1px rgb(247, 247, 247);
        border-radius: 3px;
        padding: 20px;
        @media screen and (max-width: 950px) {
            width: 49%;
        }
    }
    .trading_item_title {
        font-size: 13px;
        color: rgb(148, 148, 148);
    }
    .trading_item_detail {
        width: 17px;
        height: 17px;
        img {
            width: 17px;
            height: 17px;
        }
    }
    .total_money {
        font-size: 40px;
        padding: 15px 0 20px 0;
        @media screen and (max-width: 564px) {
            font-size: 30px;
        }
        @media screen and (max-width: 400px) {
            font-size: 20px;
        }
    }
    .bili {
        font-size: 12px;
        color: rgb(148, 148, 148);
        border-bottom: solid 1px rgb(247, 247, 247);
        img {
            height: 25px;
            width: 19px;
            margin-top: 3px;
            margin-left: 5px;
        }
    }
    .lastMonth {
        color: rgb(80, 80, 80);
        font-size: 13px;
        margin-top: 5px;
    }
    .center {
        margin: 0 0.8% 0 1%;
        @media screen and (max-width: 950px) {
            margin: 0 0 0 1.5%;
        }
    }
    .t_last {
        @media screen and (max-width: 950px) {
            margin: 5px 0 0 1.5%;
        }
    }
    .center1 {
        margin: 0 1% 0 0.8%;
        @media screen and (max-width: 950px) {
            margin: 5px 0 0 0;
        }
    }


    .analyse_wrap {
        padding: 20px;
        .analyse {
            border: solid 1px rgb(247, 247, 247);
            border-radius: 3px;
        }
    }
    .analyse_title {
        padding: 10px 20px;
        color: rgb(48, 47, 47);
        font-size: 15px;
        border-bottom: solid 1px rgb(247, 247, 247);
    }


    .msg_detail_wrap {
        padding: 20px;
        width: 50%;
        @media screen and (max-width: 800px) {
            width: 100%;
        }
    }
    .msg_detail {
        width: 33.3%;
    }
    .msg_detail_title {
        color: rgb(168, 168, 168);
        font-size: 12px;
    }
    .msg_detail_money {
        color: #178FFE;
        font-size: 35px;
        padding: 10px 0;
        @media screen and (max-width: 564px) {
            font-size: 30px;
        }
        @media screen and (max-width: 400px) {
            font-size: 20px;
        }
    }
    .msg_detail_money1 {
        color: rgb(102, 102, 102);
        font-size: 35px;
        padding: 10px 0;
        @media screen and (max-width: 564px) {
            font-size: 30px;
        }
        @media screen and (max-width: 400px) {
            font-size: 20px;
        }
    }


    .echarts_fu {
        @media screen and (max-width: 800px) {
            display: block;
        }
    }
    .echarts_l {
        width: 49%;
        border: solid 1px rgb(247, 247, 247);
        border-radius: 3px;
        @media screen and (max-width: 800px) {
            width: 100%;
        }
    }
    .price_wrap {
        @media screen and (max-width: 800px) {
            display: block;
        }
    }
    .main_wrap {
        padding: 0 20px;
    }
    .danwei {
        color: gray;
        font-size: 12px;
        margin-top: 8px;
        margin-bottom: 4px;
    }
    #main, #main1 {
        height: 400px;
    }
</style>
<template>
    <div class="TradingRecord" v-loading='loading'>
        <div class="AdvertisingOperation_back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="" @click="goBack">收入和支出
        </div>
        <div class="TradingRecord_content bar mg">
            <div class="divider_wrap">
                <div class="flex divider_message_title">
                    <div class="divider"></div>
                    <div class="divider_text">廣告收入和支出</div>
                </div>
            </div>
            <div class="TradingRecord_content_item">
                <div class="clear">
                    <div class="trading_item float">
                        <div class="sb al">
                            <div class="trading_item_title">本月收入 ($HKD)</div>
                            <div class="trading_item_detail"><img src="@/assets/img/point.png" alt=""></div>
                        </div>
                        <div class="total_money bold">{{thisMonthIn.thisMonth}}</div>
                        <div class="bili al">上月同比 {{thisMonthIn.lastMonth}}% <img src="@/assets/img/arrow_drop_down.png" alt=""></div>
                        <div class="lastMonth">上月收入 ${{thisMonthIn.increase}}HKD</div>
                    </div>
                    <div class="trading_item float center">
                        <div class="sb al">
                            <div class="trading_item_title">收入總數 ($HKD)</div>
                            <div class="trading_item_detail"><img src="@/assets/img/point.png" alt=""></div>
                        </div>
                        <div class="total_money bold">{{allin.totalIncome}}</div>
                        <div class="bili al">上月同比 {{allin.increase}}% <img src="@/assets/img/arrow_drop_down.png" alt=""></div>
                        <div class="lastMonth">昨日新增 ${{allin.yesterdayIncome}}HKD</div>
                    </div>
                    <div class="trading_item float center1">
                        <div class="sb al">
                            <div class="trading_item_title">本月支出 ($HKD)</div>
                            <div class="trading_item_detail"><img src="@/assets/img/point.png" alt=""></div>
                        </div>
                        <div class="total_money bold">3617.00</div>
                        <div class="bili al">上月同比 12% <img src="@/assets/img/arrow_drop_down.png" alt=""></div>
                        <div class="lastMonth">上月支出 $3000HKD</div>
                    </div>
                    <div class="trading_item float t_last">
                        <div class="sb al">
                            <div class="trading_item_title">支出總數 ($HKD)</div>
                            <div class="trading_item_detail"><img src="@/assets/img/point.png" alt=""></div>
                        </div>
                        <div class="total_money bold">{{allout.totalIncome}}</div>
                        <div class="bili al">上月同比 {{allout.increase}}% <img src="@/assets/img/arrow_drop_down.png" alt=""></div>
                        <div class="lastMonth">昨日新增 ${{allout.yesterdayIncome}}HKD</div>
                    </div>
                </div>
            </div>
            <div class="analyse_wrap">
                <div class="analyse">
                    <div class="analyse_title bold">近2日收入支出分析</div>
                    <div class="flex price_wrap">
                        <div class="flex msg_detail_wrap">
                            <div class="msg_detail">
                                <div class="msg_detail_title">昨日收入</div>
                                <div class="msg_detail_money">{{twoDays.yesterdayIncome}}</div>
                            </div>
                            <div class="msg_detail">
                                <div class="msg_detail_title">昨日支出</div>
                                <div class="msg_detail_money">{{twoDays.yesterdayExpenditure}}</div>
                            </div>
                            <div class="msg_detail">
                                <div class="msg_detail_title">昨日淨收入</div>
                                <div class="msg_detail_money1">{{twoDays.yesterdayNetIncome}}</div>
                            </div>
                        </div>
                        <div class="flex msg_detail_wrap">
                            <div class="msg_detail">
                                <div class="msg_detail_title">今日收入</div>
                                <div class="msg_detail_money">{{twoDays.todayIncome}}</div>
                            </div>
                            <div class="msg_detail">
                                <div class="msg_detail_title">今日支出</div>
                                <div class="msg_detail_money">{{twoDays.todayExpenditure}}</div>
                            </div>
                            <div class="msg_detail">
                                <div class="msg_detail_title">今日淨收入</div>
                                <div class="msg_detail_money1">{{twoDays.todayNetIncome}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sb echarts_fu">
                <div class="echarts_l">
                    <div class="analyse_title bold">近年收入金額統計</div>
                    <div class="main_wrap">
                        <div class="danwei">單位： 港元</div>
                        <div id="main"></div>
                    </div>
                </div>
                <div class="echarts_l">
                    <div class="analyse_title bold">近7天收入支出統計</div>
                    <div class="main_wrap">
                        <div class="danwei">單位： 港元</div>
                        <div id="main1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import * as echarts from 'echarts';
import { getIncomeThisMonth, getTotalExpenditure, getTotalIncome, getStatisticsInTheLast7Days, 
    getIncomeStatisticsInRecentYears, getIncomeAndExpenditureInTheLast2Days } from "@/axios/request.js"
export default {
    data () {
        return {
            loading: false,
            option: {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        areaStyle: {}
                    }
                ]
            },
            option1: {
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '2016', '2017'],
                        ['Matcha Latte', 43.3, 93.7],
                        ['Milk Tea', 83.1, 55.1],
                        ['Cheese Cocoa', 86.4, 82.5],
                        ['Walnut Brownie', 72.4, 39.1]
                    ]
                },
                xAxis: { type: 'category' },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: 'bar' }, { type: 'bar' }]
            },
            allout: {},
            allin: {},
            thisMonthIn: {},
            twoDays: {}
        }
    },
    mounted () {
        
    },
    created () {
        this.getIncomeThisMonth()
        this.getTotalIncome()
        this.getTotalExpenditure()
        this.getIncomeAndExpenditureInTheLast2Days()
        this.getStatisticsInTheLast7Days()
        this.getIncomeStatisticsInRecentYears()
    },
    methods: {
        goBack () {
			this.$router.back()
		},
        getIncomeThisMonth () {      //本月收入 ($HKD)
            this.loading = true
            getIncomeThisMonth().then(res => {
                this.loading = false
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.thisMonthIn = res.data.data
                } else {
                    this.$message({
                        type: 'error',
                        message: '本月收入加載失敗'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: '本月收入加載失敗'
                })
            })
        },
        getTotalExpenditure () {       //支出總數 ($HKD)
            this.loading = true
            getTotalExpenditure().then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.allout = res.data.data
                } else {
                    this.$message({
                        type: 'error',
                        message: '支出總數加載失敗'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: '支出總數加載失敗'
                })
            })
        },
        getTotalIncome () { //收入總數 ($HKD)
            this.loading = true
            getTotalIncome().then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.allin = res.data.data
                } else {
                    this.$message({
                        type:'error',
                        message: '收入總數加載失敗'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type:'error',
                    message: '收入總數加載失敗'
                })
            })
        }, 
        getStatisticsInTheLast7Days () {      //近7天收入支出統計
            this.loading = true
            getStatisticsInTheLast7Days().then(res => {
                this.loading = false
                // console.log(Object.values(res.data.data))
                if (res.data.rtnCode == 200) {
                    let arr = []
                    for (let key in Object.values(res.data.data)[0]) {
                        arr.push([key, Object.values(res.data.data)[0][key], Object.values(res.data.data)[1][key]])
                    }
                    arr.unshift(['product', '收入', '支出'])

                    this.option1.dataset.source = arr
                    var myChart1 = echarts.init(document.getElementById('main1'));
                    myChart1.setOption(this.option1);

                    window.addEventListener("resize",function(){
                        myChart1.resize();
                    });
                } else {
                    this.$message({
                        type: 'error',
                        message: '近7天收入支出統計加載失敗'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: '近7天收入支出統計加載失敗'
                })
            })
        },
        getIncomeStatisticsInRecentYears () {   //近年收入金額統計
            this.loading = true
            getIncomeStatisticsInRecentYears().then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    let arr = []
                    let arr1 = []
                    for (let key in res.data.data) {
                        arr.push(key)
                        arr1.push(res.data.data[key])
                    }
                    this.option.xAxis.data = arr
                    this.option.series[0].data = arr

                    var myChart = echarts.init(document.getElementById('main'));
                    myChart.setOption(this.option);
                    window.addEventListener("resize",function(){
                        myChart.resize();
                    });
                }
            }).catch(e => {
                this.loading = false
            })
        },
        getIncomeAndExpenditureInTheLast2Days () {   //近2日收入支出分析
            getIncomeAndExpenditureInTheLast2Days().then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.twoDays = res.data.data
                } else {
                    this.$message({
                        type: 'error',
                        message: '進2日收入支出分析加載失敗'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: '進2日收入支出分析加載失敗'
                })
            })
        }
    }
}
</script>