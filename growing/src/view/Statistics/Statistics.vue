<template>
    <div class="Statistics">
        <div class="back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" @click="back" alt="">廣告統計
        </div>
        <div class="Statistics_content">
            <div class="clear echarts_wrap mg">
                <div class="float echarts" style="height: 670px;">
                    <div class="e_title bold">{{$t("lang.Production")}}</div>
                    <div class="show " id="main" v-if="active"></div>
                </div>
                <div class="float echarts" style="height: 670px;">
                    <div class="e_title bold">{{$t("lang.num")}}</div>
                    <div class="show " id="main1" v-if="active"></div>
                </div>
                <div class="float echarts" style="height: 500px;">
                    <div class="e_title bold">{{$t("lang.lastnum")}}</div>
                    <div class="show " id="main2" v-if="active"></div>
                </div>
                <div class="float echarts" style="height: 500px;">
                    <div class="e_title bold">{{$t("lang.Cumulative")}}</div>
                    <div class="show " id="main3" v-if="active"></div>
                </div>

                <!-- <div class="float echarts" id="main"></div>
                <div class="float echarts" id="main1"></div>
                <div class="float echarts" id="main2"></div>
                <div class="float echarts" id="main3"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import { getCumulativeMonthly, getGuangGaoStatistics, getRemainderDay } from "@/axios/request.js"
export default {
    data () {
        return {
            active: true,
            option: {
                title: [
                    {
                    text: ''
                    }
                ],
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
                            { value: 1048, name: this.$t("lang.Kowloon") },
                            { value: 735, name: this.$t("lang.MongKok") },
                            { value: 580, name: this.$t("lang.huangdaxian") },
                            { value: 484, name: this.$t("lang.shenshuibu") },
                            { value: 300, name: this.$t("lang.Central") }
                        ]
                    }
                ]
            },
            option1: {
                title: [
                    {
                    text: ''
                    }
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'shadow'
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
                        data: [ this.$t("lang.Kowloon") , this.$t("lang.MongKok"), this.$t("lang.huangdaxian"),
                        this.$t("lang.shenshuibu") , this.$t("lang.Central")],
                        axisTick: {
                            alignWithLabel: true
                        }
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
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            },
            option2: {
                title: [
                    {
                    text: ''
                    }
                ],
                polar: {
                    radius: [30, '80%']
                },
                angleAxis: {
                    max: 4,
                    startAngle: 75
                },
                radiusAxis: {
                    type: 'category',
                    data: ['a', 'b', 'c', 'd']
                },
                tooltip: {},
                series: {
                    type: 'bar',
                    data: [2, 1.2, 2.4, 3.6],
                    coordinateSystem: 'polar',
                    label: {
                    show: true,
                    position: 'middle',
                    formatter: '{b}: {c}'
                    }
                }
            },
            option3: {
                title: [
                    {
                    text: ''
                    }
                ],
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                    }
                ]
            }
        }
    },
    mounted () {
        this.getCumulativeMonthly()
        this.getGuangGaoStatistics()
        this.getRemainderDay()
    },
    created () {
        
    },
    watch: {
        index: {
            handler (val) {
                if (val) {
                    // this.$forceUpdate()
                    // this.option.series[0].data = data
                    // this.option1.xAxis[0].data = data1
                    let that = this
                    this.index = val
                    this.active = false
                    this.$nextTick(() => {
                        that.getCumulativeMonthly()
                        that.getGuangGaoStatistics()
                        that.getRemainderDay()
                        that.echart()
                    })
                    
                }
            },
            // deep: true
        }
    },
    computed: {
        index: {
            get () {
                return this.$i18n.locale
            },
            set (val) {
                // index = val
            }
        }
    },
    methods: {
        back () {
            this.$router.back()
        },
        change () {

        },
        echart () {
            let that = this
            that.active = true
            this.$nextTick(() => {
                var myChart = echarts.init(document.getElementById('main'));
                myChart.setOption(that.option);

                var myChart1 = echarts.init(document.getElementById('main1'));
                myChart1.setOption(that.option1);

                var myChart2 = echarts.init(document.getElementById('main2'));
                myChart2.setOption(that.option2);

                var myChart3 = echarts.init(document.getElementById('main3'));
                myChart3.setOption(that.option3);

                window.addEventListener("resize",function(){
                    myChart.resize();
                    myChart1.resize();
                    myChart2.resize();
                    myChart3.resize();
                });
            })
        },
        getCumulativeMonthly () {
            this.active = false
            getCumulativeMonthly().then(res => {
                if (res.data.rtnCode == 200) {
                    this.option3.xAxis.data = []
                    this.option3.series[0].data = []
                    res.data.data.forEach(item => {
                        this.option3.xAxis.data.push(item.name)
                        this.option3.series[0].data.push(item.value)
                    })
                    this.echart()
                }
            })
        },
        getGuangGaoStatistics () {
            this.active = false
            getGuangGaoStatistics().then(res => {
                if (res.data.rtnCode == 200) {
                    this.option1.xAxis[0].data = []
                    this.option1.series[0].data = []
                    this.option.series[0].data = []
                    res.data.data.forEach(item => {
                        this.option1.xAxis[0].data.push(item.name)
                        this.option1.series[0].data.push(item.value)
                        this.option.series[0].data.push({ value: item.value, name: item.name })
                    })
                    this.echart()
                }
            })
        },
        getRemainderDay () {
            this.active = false
            getRemainderDay().then(res => {
                if (res.data.rtnCode == 200) {
                    this.option2.radiusAxis.data = []
                    this.option2.series.data = []
                    res.data.data.forEach(item => {
                        this.option2.radiusAxis.data.push(item.name)
                        this.option2.series.data.push(item.value)
                    })
                    this.echart()
                }
            })
        }
    },
    
}
</script>

<style lang='less' scoped>
    .Statistics {
        height: 100%;
        margin-top: 20px;
        overflow: auto;
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
    .Statistics_content {
        background: #F6F6F6;
        height: calc(100% - 45px);
        overflow: auto;
        margin-top: 15px;
    }
    .echarts_wrap {
        width: 70%;
        background: #EDF1F7;
        overflow-x: hidden;
        padding: 20px;
        @media screen and (max-width: 1300px) {
            width: 100%;
        }
        @media screen and (max-width: 564px) {
            padding: 20px 0;
        }
    }
    .echarts {
        margin: 20px 5%;
        background: white;
        width: 40%;
        min-width: 320px;
        padding: 30px;
        
        .show {
            height: 100%;
        }
        @media screen and (max-width: 960px) {
            width: 80%;
            margin: 20px 10%;
        }
        @media screen and (max-width: 564px) {
            width: 100%;
            margin: 0px 0%;
            transform: scale(0.9);
        }
    }
    .e_title {
        color: rgb(88, 87, 87);
        font-size: 17px;
    }
</style>