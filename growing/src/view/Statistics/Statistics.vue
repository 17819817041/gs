<template>
    <div class="Statistics">
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">廣告統計
        </div>
        <div class="Statistics_content">
            <div class="clear echarts_wrap mg">
                <div class="float echarts" id="main"></div>
                <div class="float echarts" id="main1"></div>
                <div class="float echarts" id="main2"></div>
                <div class="float echarts" id="main3"></div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    data () {
        return {
            option: {
                title: [
                    {
                    text: '生產情況圖'
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
                            { value: 1048, name: '九龍' },
                            { value: 735, name: '旺角' },
                            { value: 580, name: '黃大仙' },
                            { value: 484, name: '深水埗' },
                            { value: 300, name: '中環' }
                        ]
                    }
                ]
            },
            option1: {
                title: [
                    {
                    text: '每個區域的投放天數'
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
                    data: ['九龍', '旺角', '黃大仙', '深水埗', '中環'],
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
                    text: '每個區域投放的剩餘天數'
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
                    text: '累計投放廣告天數'
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
    methods: {
        back () {
            this.$router.back()
        }
    },
    mounted () {
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(this.option);

        var myChart1 = echarts.init(document.getElementById('main1'));
        myChart1.setOption(this.option1);

        var myChart2 = echarts.init(document.getElementById('main2'));
        myChart2.setOption(this.option2);

        var myChart3 = echarts.init(document.getElementById('main3'));
        myChart3.setOption(this.option3);

        window.addEventListener("resize",function(){
            myChart.resize();
            myChart1.resize();
            myChart2.resize();
            myChart3.resize();
        });
    }
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
        height: calc(100% - 70px);
        overflow: auto;
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
        min-width: 345px;
        padding: 0 20px;
        height: 400px;
        @media screen and (max-width: 960px) {
            width: 80%;
            margin: 20px 10%;
        }
        @media screen and (max-width: 564px) {
            width: 100%;
            margin: 20px 0%;
        }
    }
</style>