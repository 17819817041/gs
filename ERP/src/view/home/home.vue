<template>
    <div class="home">
        <div class="calendar">
            <div class="block">
                <el-date-picker
                    class="picker_ui"
                    v-model="value1"
                    type="date"
                    placeholder="select">
                </el-date-picker>
            </div>
        </div>
        <div class="series mg clear">
            <div v-for="(item,i) in option.series" :key="i" class="flex series_item float">
                <div class="series_back" :style="{ background: item.color }"></div>
                <div class="sb" style="flex-direction: column; ">
                    <div class="series_title">{{item.name}}</div>
                    <div >0</div>
                </div>
            </div>
        </div>
        <div class="bold ec_title">Profile Visit 你好 測試 アイウエ　あいうえお</div>
        <div id="main"></div>
        <div class="footer sb">
            <div>2021 © ERP</div>
            <div>Something here</div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
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
            value1: '',
            option: {
                title: {
                    // text: 'Profile Visit 你好 測試 アイウエ　あいうえお'
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
                    data: ['Alipay', 'FPS', 'Cash', 'Total']
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
                        data: ['No.1', 'No.2', 'Mar', 'Apr', 'May']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'Alipay',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        color: '#9694FF',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'FPS',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        color: '#57CAEB',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Cash',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        color: '#5DDAB4',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Total',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        color: '#FF7976',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    }
                ]
            }
        }
    },
    mounted () {
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(this.option);
        window.onresize = myChart.resize;
    }
}
</script>

<style lang='less' scoped>
    .home {
        height: 100%;
        padding-left: 20px;
    }
    .picker_ui {
        // height: 37px;
        width: 370px;
        border-radius: 1px;
        overflow: hidden;
        transition: 0.1s;
    }
    .picker_ui:hover {
        // border: solid 1px #A1AFDF;
        box-shadow: 0px 0.1px 0px 3px #D0D7EF;
    }
    #main {
        width: 100%;
        padding: 0 20px;
        height: 400px;
    }
    .ec_title {
        font-size: 18px;
        color: #254274;
        padding: 40px 0 20px 25px;
    }
    .series {
        width: 91%;
        padding: 37px 0;
    }
    .series_item {
        width: 25%;
        min-width: 150px;
        padding-bottom: 30px;
    }
    .series_back {
        border-radius: 7px;
        width: 50px;
        height: 50px;
        margin-right: 30px;
    }
    .series_title {
        color: #848FBC;
    }
</style>