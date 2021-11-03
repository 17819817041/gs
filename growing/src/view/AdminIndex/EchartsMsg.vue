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
        overflow: auto;
        margin-top: 20px;
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
        height: 400px;
        
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
</style>
<template>
    <div class="EchartsMsg">
        <div class="AdvertisingOperation_back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" alt="" @click="goBack">新增店鋪
        </div>
        <div class="EchartsMsg_content bar mg">
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
                        </div>
                        <div class="ECHARTS" id="main1"></div>
                    </div>
                    <div class="echarts">
                        <div class="echarts_title sb">
                            <div class="al echarts_title_text">
                                <div class="point"></div>
                                <div>近期廣告活動到期時間</div>
                            </div>
                        </div>
                        <div class="ECHARTS" id="main2"></div>
                    </div>
                </div>
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
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                series: [
                    {
                    name: 'Direct',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 302, 301, 334, 390, 330, 320]
                    },
                    {
                    name: 'Mail Ad',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                    name: 'Affiliate Ad',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                    name: 'Video Ad',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [150, 212, 201, 154, 190, 330, 410]
                    },
                    {
                    name: 'Search Engine',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [820, 832, 901, 934, 1290, 1330, 1320]
                    }
                ]
            },
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
            }],
            value: ''
            }
    },
    mounted () {
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(this.option);

        var myChart1 = echarts.init(document.getElementById('main1'));
        myChart1.setOption(this.option1);

        var myChart2 = echarts.init(document.getElementById('main2'));
        myChart2.setOption(this.option2);

        // var myChart3 = echarts.init(document.getElementById('main3'));
        // myChart3.setOption(this.option3);

        window.addEventListener("resize",function(){
            myChart.resize();
            myChart1.resize();
            myChart2.resize();
            // myChart3.resize();
        });
    },
    methods: {
        goBack () {
			this.$router.back()
		},
    }
}
</script>

