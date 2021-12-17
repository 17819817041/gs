<style lang='less' scoped>
    @import "@/less/style.less";
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
    .EchartsMsg_content {
        width: 97%;
        height: calc(100% - 45px);
        overflow-x: hidden;
        overflow-y: auto;
        margin-top: 20px;
        @media screen and (max-width: 564px) {
            width: 100%;
        }

    }
    .EchartsMsg {
        height: 100%;
        margin-top: 20px;
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
    .EchartsMsg_content_item {
        background: white;
        padding: 15px 20px;
        @media screen and (max-width: 564px) {
           padding: 15px 0px;
        }
    }
    .echarts {
        width: 33%;
        border: solid 1px rgb(243, 243, 243);
        border-radius: 7px;
        @media screen and (max-width: 1080px) {
            width: 100%;
        }
    }
    .echarts_title {
        border-bottom: solid 1px rgb(243, 243, 243);
        padding: 5px 12px;
    }
    .echarts_title_text {
        font-size: 14px;
        .point {
            width: 5px;
            height: 5px;
            background: #3D51C0;
            border-radius: 1px;
            margin-right: 7px;
        }
    }
    .ECHARTS {
        margin: 20px 5%;
        background: white;
        min-width: 345px;
        padding: 0 20px;
        height: 500px;
        @media screen and (max-width: 564px) {
           margin: 20px 0;
           padding: 0;
        }
    }
    .ECHARTS1 {
        margin: 20px 0;
        background: white;
        width: 100%;
        min-width: 345px;
        padding: 0 20px;
        height: 205px;
        @media screen and (max-width: 564px) {
           margin: 20px 0;
           padding: 0;
        }
    }
    .ECHARTS2 {
        margin: 20px 0;
        background: white;
        width: 100%;
        min-width: 345px;
        padding: 0 20px;
        height: 400px;
        @media screen and (max-width: 564px) {
           margin: 20px 0;
           padding: 0;
        }
    }
    .select_e {
        width: 93px;
        border: solid 1px rgb(241, 241, 241);
        border-radius: 3px;
    }
    .block {
        @media screen and (max-width: 1080px) {
            display: block;
        }
    }
    .footer_echarts1 {
        width: 66.5%;
        border: solid 1px rgb(243, 243, 243);
        border-radius: 7px;
        @media screen and (max-width: 1355px) {
            width: 100%;
        }
    }
    .footer_echarts2_wrap {
        width: 33%;
        @media screen and (max-width: 1355px) {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
        @media screen and (max-width: 800px) {
            display: block;
        }
    }
    .footer_echarts2 {
        // width: 33%;
        border: solid 1px rgb(243, 243, 243);
        border-radius: 7px;
        @media screen and (max-width: 1355px) {
            width: 47%;
        }
        @media screen and (max-width: 800px) {
           width: 100%;
           margin-top: 20px;
        }
    }
    .size12 {
        font-size: 12px;
        color: gray;
    }
    .busyTime {
        padding: 20px 30px;
        color: white;
        background: #1B87FE ;
        border-radius: 10px;
        @media screen and (max-width: 880px) {
           padding: 10px 20px;
        }
        @media screen and (max-width: 800px) {
           padding: 20px 30px;
        }
        @media screen and (max-width: 564px) {
           padding: 10px 20px;
        }
        @media screen and (max-width: 418px) {
           padding: 10px 15px;
           display: flex;
            justify-content: center;
        }
    }
    .unbusyTime {
        padding: 20px 30px;
        color: white;
        background:#28CEAE;
        border-radius: 10px;
        @media screen and (max-width: 880px) {
           padding: 10px 20px;
        }
        @media screen and (max-width: 800px) {
           padding: 20px 30px;
        }
        @media screen and (max-width: 564px) {
           padding: 10px 20px;
        }
        @media screen and (max-width: 418px) {
           padding: 10px 15px;
           display: flex;
            justify-content: center;
            margin-top: 10px;
        }
    }
    .size15 {
        font-size: 18px;
        @media screen and (max-width: 1000px) {
           font-size: 15px;
        }
        @media screen and (max-width: 800px) {
           font-size: 18px;
        }
        @media screen and (max-width: 564px) {
           font-size: 15px;
        }
        @media screen and (max-width: 418px) {
           font-size: 12px;
        }
    }
    .size25 {
        font-size: 35px;
        @media screen and (max-width: 1000px) {
           font-size: 30px;
        }
        @media screen and (max-width: 800px) {
           font-size: 35px;
        }
        @media screen and (max-width: 564px) {
           font-size: 30px;
        }
        @media screen and (max-width: 418px) {
           font-size: 23px;
        }
    }
    .footerEcharts {
        margin-top: 10px;
        @media screen and (max-width: 1355px) {
           display: block;
        }
    }
    .totalMSG {
        margin-top: 20px;
        min-width: 280px;
        @media screen and (max-width: 1355px) {
           height: 277px;
           margin-top: 0;
        }
        @media screen and (max-width: 800px) {
            width: 100%;
            height: 200px;
            margin-top: 20px;
        }
    }
    .block410 {
        @media screen and (max-width: 410px) {
           display: block;
        }
    }
</style>
<template>
    <div class="EchartsMsg">
        <div class="AdvertisingOperation_back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" alt="" @click="goBack">廣告活動統計數據
        </div>
        <div class="EchartsMsg_content noBar mg">
            <div class="divider_wrap">
                <div class="flex divider_message_title">
                    <div class="divider"></div>
                    <div class="divider_text">店鋪廣告比例設定</div>
                </div>
            </div>
            <div class="EchartsMsg_content_item">
                <div class="sb block">
                    <div class="echarts">
                        <div class="echarts_title sb">
                            <div class="al echarts_title_text">
                                <div class="point"></div>
                                <div>廣告時段活動狀態</div>
                            </div>
                            <div class="select_e">
                                <el-select v-model="value" placeholder="请选择" class="width100">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="ECHARTS" id="main"></div>
                    </div>
                    <div class="echarts">
                        <div class="echarts_title sb">
                            <div class="al echarts_title_text">
                                <div class="point"></div>
                                <div>廣告類型活動狀態</div>
                            </div>
                            <div class="select_e">
                                <el-select v-model="value1" placeholder="请选择" class="width100">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="ECHARTS" id="main1"></div>
                    </div>
                    <div class="echarts">
                        <div class="echarts_title sb">
                            <div class="al echarts_title_text">
                                <div class="point"></div>
                                <div>近期廣告活動到期時間</div>
                            </div>
                            <div class="select_e">
                                <el-select v-model="value2" placeholder="请选择" class="width100">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="ECHARTS" id="main2"></div>
                    </div>
                </div>
                <div class="sb footerEcharts">
                    <div class="footer_echarts1">
                        <div class="echarts_title sb">
                            <div class="al echarts_title_text">
                                <div class="point"></div>
                                <div>近12日廣告活動時段統計</div>
                            </div>
                            <div class="select_e">
                                <el-select v-model="value3" placeholder="请选择" class="width100">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="ECHARTS2" id="main3"></div>
                    </div>
                    <div class="footer_echarts2_wrap">
                        <div class="footer_echarts2">
                            <div class="echarts_title sb">
                                <div class="al echarts_title_text">
                                    <div class="point"></div>
                                    <div>近半年廣告活動統計</div>
                                </div>
                                <div class="size12">
                                    單位： 分鐘
                                </div>
                            </div>
                            <div class="ECHARTS1" id="main4"></div>
                        </div>
                        <div class="footer_echarts2 totalMSG">
                            <div class="echarts_title sb">
                                <div class="al echarts_title_text">
                                    <div class="point"></div>
                                    <div>廣告活動時段總數</div>
                                </div>
                            </div>
                            <div class="sa block410" style="padding: 20px;">
                                <div class="busyTime bold">
                                    <div>
                                        <div class="size15">繁忙時段</div>
                                        <div>
                                            <span class='size25'>4000</span>
                                            <span class="size15">分鐘</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="unbusyTime bold">
                                    <div>
                                        <div class="size15">非繁忙時段</div>
                                        <div>
                                            <span class='size25'>2585</span>
                                            <span class="size15">分鐘</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
import { getEventExpirationTime, getGuangGaoTypeActiveStatus, getTotalTimePeriod,
getStatisticsForTheLast12Days, getStatisticsForThepastSixMonths, getTimeActiveStatus } from "@/axios/request.js"
export default {
    data () {
        return {
            option: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    data: [
                    'Direct',
                    'Marketing',
                    'Search Engine',
                    ]
                },
                series: [  
                    {
                        name: 'Access From',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],
                        label: {
                            position: 'inner',
                            fontSize: 14
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1548, name: 'Search Engine' },
                            { value: 775, name: 'Direct' },
                            { value: 679, name: 'Marketing', selected: true }
                        ]
                    },
                    {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['45%', '60%'],
                    labelLine: {
                        length: 30
                    },
                    label: {
                        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                        backgroundColor: '#F6F8FC',
                        borderColor: '#8C8D8E',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                        a: {
                            color: '#6E7079',
                            lineHeight: 22,
                            align: 'center'
                        },
                        hr: {
                            borderColor: '#8C8D8E',
                            width: '100%',
                            borderWidth: 1,
                            height: 0
                        },
                        b: {
                            color: '#4C5058',
                            fontSize: 14,
                            fontWeight: 'bold',
                            lineHeight: 33
                        },
                        per: {
                            color: '#fff',
                            backgroundColor: '#4C5058',
                            padding: [3, 4],
                            borderRadius: 4
                        }
                        }
                    },
                    data: [
                        { value: 1048, name: 'Baidu' },
                        { value: 335, name: 'Direct' },
                        { value: 310, name: 'Email' },
                    ]
                    }
                ]
            },
            option1: {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ]
                    }
                ]
            },
            option2: {
                title: {
                    // text: 'Referer of a Website',
                    subtext: 'Fake Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ],
                    emphasis: {
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                    }
                ]
            },
            option3: { 
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                    ['product', '繁忙時段', '非繁忙時段'],
                    // ['Matcha Latte', 43.3, 93.7],
                    // ['Milk Tea', 83.1, 55.1],
                    // ['Cheese Cocoa', 86.4, 82.5],
                    // ['Walnut Brownie', 72.4, 39.1]
                    ]
                },
                xAxis: { type: 'category' },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: 'bar' }, { type: 'bar' }]
            },
            option4: {
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                    }
                },
                legend: {
                    data: [ 'Direct', 'Search Engine']
                },
                toolbox: {
                    feature: {
                    saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1月', '2月', '3月', '4月', '5月', '6月']
                    }
                ],
                yAxis: [
                    {
                    type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'Direct',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [20, 25, 31, 34, 90, 40, 30]
                    },
                    {
                        name: 'Search Engine',
                        type: 'line',
                        stack: 'Total',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [20, 32, 51, 34, 90, 30, 20]
                    }
                ]
            },
            options: [{
            value: '选项1',
            label: '2021'
            }, {
            value: '选项2',
            label: '2020'
            }, {
            value: '选项3',
            label: '2019'
            }, {
            value: '选项4',
            label: '2018'
            }, {
            value: '选项5',
            label: '2017'
            }],
            value: '',
            value1: '',
            value2: '',
            value3: '',
        }
    },
    mounted () {
        this.getEventExpirationTime()
        this.getGuangGaoTypeActiveStatus()
        this.getStatisticsForTheLast12Days()
        this.getStatisticsForThepastSixMonths()
        this.getTimeActiveStatus()

        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(this.option);

        var myChart1 = echarts.init(document.getElementById('main1'));
        myChart1.setOption(this.option1);

        var myChart2 = echarts.init(document.getElementById('main2'));
        myChart2.setOption(this.option2);

        var myChart3 = echarts.init(document.getElementById('main3'));
        myChart3.setOption(this.option3);

        var myChart4 = echarts.init(document.getElementById('main4'));
        myChart4.setOption(this.option4);

        window.addEventListener("resize",function(){
            myChart.resize();
            myChart1.resize();
            myChart2.resize();
            myChart3.resize();
            myChart4.resize();
        });


    },
    created () {
        this.getTotalTimePeriod()
    },
    methods: {
        goBack () {
			this.$router.back()
		},
        getEventExpirationTime () {    //近期廣告活動到期時間
            this.option2.series[0].data = []
            getEventExpirationTime().then(res => {
                if (res.data.rtnCode == 200) {
                    for (var val in res.data.data) {
                        // console.log(res.data.data[val])
                        // console.log(val)
                        this.option2.series[0].data.push({ name: val, value: res.data.data[val] })
                    }
                    var myChart2 = echarts.init(document.getElementById('main2'));
                    myChart2.setOption(this.option2);
                    window.addEventListener("resize",function(){
                        myChart2.resize();
                    });
                }
            })
        },
        getGuangGaoTypeActiveStatus () {      //廣告類型活動狀態
            this.option1.series[0].data = []
            let data = {
                date: '2021-12-10'
            }
            getGuangGaoTypeActiveStatus(data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    res.data.data.forEach(item => {
                        this.option1.series[0].data.push({ name: item.timeIntervalName, value: item.count })
                    })
                    var myChart1 = echarts.init(document.getElementById('main1'));
                    myChart1.setOption(this.option1);
                    window.addEventListener("resize",function(){
                        myChart1.resize();
                    });
                }
            })
        },
        getStatisticsForTheLast12Days () {        //近12日廣告活動時段統計
            getStatisticsForTheLast12Days().then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    let arr = []
                    for (let key in res.data.data) {
                        let k = []
                        for (let val in res.data.data[key]) {
                            k.push(res.data.data[key][val])
                        }
                        arr.push([key,k[0],k[1],k[2]])
                        k = []
                    }
                    this.option3.dataset.source = arr
                    var myChart3 = echarts.init(document.getElementById('main3'));
                    myChart3.setOption(this.option3);
                    window.addEventListener("resize",function(){
                        myChart3.resize();
                    });
                }
            })
        },
        getStatisticsForThepastSixMonths () {   //近半年廣告活動統計
            getStatisticsForThepastSixMonths().then(res => {
                console.log(res)
            })
        }, 
        getTimeActiveStatus () {               //廣告時段活動狀態
            this.option.series[0].data = []
            this.option.series[1].data = []
            let data = {
                date: '2021-12-10'
            }
            getTimeActiveStatus(data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    res.data.data.forEach(item => {
                        this.option.series[0].data.push({ name: item.timeIntervalName, value: item.count })
                        this.option.series[1].data.push({ name: item.timeIntervalName, value: item.count })
                    })
                    var myChart = echarts.init(document.getElementById('main'));
                    myChart.setOption(this.option);
                    window.addEventListener("resize",function(){
                        myChart.resize();
                    });
                }
            })
        },
        getTotalTimePeriod () {                 //廣告活動時段總數
            getTotalTimePeriod().then(res => {
                console.log(res)
            })
        }
    }
}
</script>

