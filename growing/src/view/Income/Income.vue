<template>
    <div class="Income">  
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">廣告收入統計
        </div>
        <div class="Income_content mg bar">
            <div class="Income_content_title sb al block">
                <div class="flex">
                    <div class="divider"></div>
                    <div class="divider_text">店鋪廣告收入統計</div>
                </div>
                <div class="al Income_content_btn">
                    <div class="selectBtn" style="margin-right: 15px;">
                        <el-date-picker
                        class="width100"
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </div>
                    <div class="selectBtn">
                        <el-select v-model="value" class="width100 height40">
                            <el-option label="店鋪" value="1"></el-option>
                            <el-option label="廣告商" value="2"></el-option>
                            <el-option label="廣告後台" value="3"></el-option>
                            <el-option label="全部店鋪" value="4"></el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="Income_table">
                <Module :columns="columns" :arr="arr" ref="child">
                    <template slot="income">
                        <div class="timeIncome ju">
                            <div>
                                <div class="flex timeIncome_item">
                                    <div class="type_n">食品</div>
                                    <div class="busyTime">
                                        <div class="i_busy">-繁忙时段: 100分鐘 $1000HKD</div>
                                        <div class="i_unbusy">-非繁忙时段: 120分鐘 $800HKD</div>
                                    </div>
                                </div>
                                <div class="flex timeIncome_item">
                                    <div class="type_n">運動</div>
                                    <div class="busyTime">
                                        <div class="i_busy">-繁忙时段: 100分鐘 $1000HKD</div>
                                        <div class="i_unbusy">-非繁忙时段: 120分鐘 $800HKD</div>
                                    </div>
                                </div>
                                <div class="flex timeIncome_item">
                                    <div class="type_n">醫療</div>
                                    <div class="busyTime">
                                        <div class="i_busy">-繁忙时段: 100分鐘 $1000HKD</div>
                                        <div class="i_unbusy">-非繁忙时段: 120分鐘 $800HKD</div>
                                    </div>
                                </div>
                                <div class="flex timeIncome_item">
                                    <div class="type_n">服裝</div>
                                    <div class="busyTime">
                                        <div class="i_busy">-繁忙时段: 100分鐘 $1000HKD</div>
                                        <div class="i_unbusy">-非繁忙时段: 120分鐘 $800HKD</div>
                                    </div>
                                </div>
                                <div class="flex timeIncome_item">
                                    <div class="type_n">設計</div>
                                    <div class="busyTime">
                                        <div class="i_busy">-繁忙时段: 100分鐘 $1000HKD</div>
                                        <div class="i_unbusy">-非繁忙时段: 120分鐘 $800HKD</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template slot="busy" slot-scope="{ data }">
                        <div class="th_color cursor">{{data}}</div>
                    </template>
                    <template slot="unbusy" slot-scope="{ data }">
                        <div class="th_color cursor">{{data}}</div>
                    </template>
                    <template slot="totalIncome" slot-scope="{ data }">
                        <div class="th_color cursor">{{data}}</div>
                    </template>
                </Module>
            </div>
            <div class="totalIncome_price flexEnd">
                <div class="padding_foot">
                    <span>廣告收入總計:</span><span class="th_color"> $36000HKD </span>
                </div>
            </div>

            <div class="Income_content_title sb al" style="margin-top: 60px;">
                <div class="flex">
                    <div class="divider"></div>
                    <div class="divider_text">店鋪廣告收入分析</div>
                </div>
                <div class="al block">
                    <div class="select_date_wrap">
                        <div class="select_date al">
                            <div :class="['select_date_item cursor', { background: index == 1 }]" @click="index = 1">今天</div>
                            <div :class="['select_date_item cursor', { background: index == 2 }]" @click="index = 2">最近3天</div>
                            <div :class="['select_date_item cursor', { background: index == 3 }]" @click="index = 3">最近7天</div>
                            <div :class="['select_date_item cursor', { background: index == 4 }]" @click="index = 4">最近30天</div>
                        </div>
                    </div>
                    <div class="selectBtn">
                        <el-select v-model="value1" class="width100">
                            <el-option label="店鋪" value="1"></el-option>
                            <el-option label="廣告商" value="2"></el-option>
                            <el-option label="廣告後台" value="3"></el-option>
                        </el-select>
                    </div>
                </div>
            </div>

            <div class="income_detail clear">
                <div class="al float" style="margin-right: 25px;margin-top: 5px">
                    <div class="income_detail_title">選擇店鋪</div>
                    <div class="select_store">
                        <el-select v-model="value2" class="width100">
                            <el-option label="店鋪1" value="1"></el-option>
                            <el-option label="店鋪2" value="2"></el-option>
                            <el-option label="店鋪3" value="3"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="flex float statistics_msg" style="margin-right: 25px;">
                    <div class="busy_divider"></div>
                    <div>
                        <div class="income_detail_title">繁忙時段(9am - 9pm)收入</div>
                        <div class="showMsg">$15000HKD</div>
                    </div>
                </div>
                <div class="flex float statistics_msg" style="margin-right: 25px;">
                    <div class="unbusy_divider"></div>
                    <div>
                        <div class="income_detail_title">非繁忙時段(9pm - 9am)收入</div>
                        <div class="showMsg">$12000HKD</div>
                    </div>
                </div>
                <div class="flex float statistics_msg" style="margin-right: 25px;">
                    <div class="minute_divider"></div>
                    <div>
                        <div class="income_detail_title">廣告類型和投放分鐘數</div>
                        <div class="showMsg">5種類型 - 3300分鐘</div>
                    </div>
                </div>
                <div class="flex float statistics_msg" style="margin-right: 25px;">
                    <div class="total_divider"></div>
                    <div>
                        <div class="income_detail_title">總收入</div>
                        <div class="showMsg">$30000HKD</div>
                    </div>
                </div>
            </div>
            <div class="echarts_wrap_f">
                <div id="main"></div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    data () {
        return {
            value: '全部店鋪',
            value1: '',
            value2: '',
            index: 3,
            columns: [
                {title:'店鋪',key:'name'},
                {title:'繁忙時段(9am - 9pm)收入',slot:'busy'},
                {title:'非繁忙時段(9pm - 9am)收入',slot:'unbusy'},
                {title:'廣告類型和投放分鐘收入',slot:'income'},
                {title:'收入總數', slot: 'totalIncome'},
            ],
            arr:[
                {name:'九龍店',busy: '$5000HKD',unbusy: '$4000HKD', income: 'incomeDetail',totalIncome:'$9000HKD',active: true},
                {name:'九龍店',busy: '$5000HKD',unbusy: '$4000HKD', income: 'incomeDetail',totalIncome:'$9000HKD',active: true},
                {name:'九龍店',busy: '$5000HKD',unbusy: '$4000HKD', income: 'incomeDetail',totalIncome:'$9000HKD',active: true},
                {name:'九龍店',busy: '$5000HKD',unbusy: '$4000HKD', income: 'incomeDetail',totalIncome:'$9000HKD',active: true},
            ],
            option: {
                title: {
                    text: '店鋪廣告收入'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['九龍店', '中環店']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                    saveAsImage: {}
                    }
                },
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
                    name: '九龍店',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                    name: '中環店',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                    },
                ]
            },
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                    }
                }]
            },
        }
    },
    mounted () {
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(this.option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    },
    beforeMount() {
        window.addEventListener('resize', (e) => {
            if (e.target.innerWidth <= 484) {
                this.option.title.text = '收入'
            } else {
                this.option.title.text = '店鋪廣告收入'
            }
        })
    },
    methods: {
        back () {
            this.$router.back()
        }
    },
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
    .Income {
        height: 100%;
        margin-top: 20px;
    }
    .back {
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
    .Income_content {
        width: 98%;
        overflow: auto;
        height: calc(100% - 50px);
        box-shadow: 0 0 5px #acacac inset;
        padding: 4px;
        margin-top: 15px;
    }
    .Income_content_title {
        padding: 7px 15px;
        background: #f5f5f5;
        @media screen and (max-width: 677px) {
            display: block;
        }
    }
    .divider {
        width: 0;
        margin-right: 5px;
        border: solid 2px @themeColor;
    }
    .divider_text {
        color: @themeColor;
        font-size: 14px;
    }
    .selectBtn {
        width: 125px;
        background: @themeColor;
    }
    .type_n{
        margin-right: 5px;
    }
    .timeIncome {
        font-size: 14px;
    }
    .busyTime {
        color: @themeColor;
        text-align: left !important;
    }
    .timeIncome_item {
        margin-top: 7px;
    }
    .th_color {
        color: #7868C1;
    }
    .padding_foot {
        padding: 17px 60px;
    }
    .select_date {
        @media screen and (max-width: 677px) {
            margin: 8px 0;
        }
    }
    .Income_content_btn {
        @media screen and (max-width: 677px) {
            margin: 8px 0;
        }
    }
    .statistics_msg {
        @media screen and (max-width: 677px) {
            margin: 8px 0;
        }
    }
    .select_date_wrap {
        margin-right: 35px;
        @media screen and (max-width: 677px) {
            margin-right: 5px;
        }
    }
    .block {
        @media screen and (max-width: 677px) {
            display: block;
        }
    }
    .select_date_item {
        padding: 7px 20px;
        font-size: 12px;
        box-shadow: 0 0 5px gray inset;
        @media screen and (max-width: 677px) {
            padding: 7px 10px;
        }
    }
    .background {
        background: @themeColor;
        color: white;
    }
    .income_detail {
        padding: 20px 10px;
        background: #E5E5E5;
    }
    .income_detail_title {
        font-size: 12px;
    }
    .showMsg {
        color: @themeColor;
        font-size: 16px;
        font-weight: bold;
        margin-top: 5px;
    }
    .select_store {
        background: @themeColor;
        width: 125px;
        margin-left: 5px;
    }
    .busy_divider {
        border: solid 2px #FF0000;
        width: 0;
        margin-right: 3px;
    }
    .unbusy_divider {
        border: solid 2px #1EF70E;
        width: 0;
        margin-right: 3px;
    }
    .minute_divider {
        border: solid 2px #FFF600;
        width: 0;
        margin-right: 3px;
    }
    .total_divider {
        border: solid 2px #256DFF;
        width: 0;
        margin-right: 3px;
    }
    .echarts_wrap_f {
        margin: 10px 17px;
        padding: 20px 25px 15px 25px;
        background: white;
    }
    #main {
        height: 400px;
    }
</style>