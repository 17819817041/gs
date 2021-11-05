<template>
    <div class="PlatSetting">
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">店鋪詳細設定
        </div>
        <div class="Settingadvertising_content_wrap noBar">
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">所有店鋪設定</div>
                        </div>
                        <div class="flex">
                            <div class="arrow_m al" @click="drawer4 = !drawer4"><img :class="[{ rotate: drawer4 }]" src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="['drawer_h', {'drawer_h1': drawer4}]">
                        <el-table :row-class-name="tableRowClassName" 
                            :header-cell-style="{ background: '#E4E4E5', 'text-align': 'center' }"
                            :data="tableData"
                            style="width: 100%"
                            height="95%"
                            >
                            <el-table-column
                                fixed
                                prop="d_name"
                                label="店鋪名稱"
                                min-width="150"
                                >
                                <template slot="header">
                                    店鋪名稱
                                    <div class="searchInp mg">
                                        <el-input
                                        class="width100"
                                        v-model="search"
                                        size="mini"
                                        placeholder="输入关键字搜索"/>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="d_type"
                                label="店鋪類型"
                                min-width="190"
                                >
                                <template slot="header">
                                    店鋪類型
                                    <div class="searchInp mg">
                                        <el-select class="width100" style="height: 28px;" v-model="type" placeholder="請選擇類型">
                                            <el-option label="食品" value="食品"></el-option>
                                            <el-option label="科技" value="科技"></el-option>
                                            <el-option label="醫療" value="醫療"></el-option>
                                            <el-option label="汽車" value="汽車"></el-option>
                                        </el-select>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="d_area"
                                label="店鋪區域"
                                min-width="150"
                                >
                                <template slot="header">
                                    店鋪區域
                                    <div class="searchInp mg">
                                        <el-select class="width100" style="height: 28px;" v-model="area" placeholder="請選擇類型">
                                            <el-option label="九龍" value="九龍"></el-option>
                                            <el-option label="旺角" value="旺角"></el-option>
                                            <el-option label="中環" value="中環"></el-option>
                                        </el-select>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="d_ratio"
                                sortable
                                label="接收外來廣告比例"
                                min-width="170"
                                >
                                <template slot-scope="scope">
                                    <div class="tc th_color">
                                        {{scope.row.d_ratio}}%
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="d_time"
                                sortable
                                label="接收外來廣告時段"
                                min-width="170"
                                >
                                <template slot-scope="scope">
                                    <div class="tc th_color">
                                        <div class="th_color tc" v-show="scope.row.d_time.busy">{{scope.row.d_time.busy}}</div>
                                        <div class="th_color tc" v-show="scope.row.d_time.unbusy">{{scope.row.d_time.unbusy}}</div>
                                        <div class="th_color tc" v-show="scope.row.d_time.busy == '' && scope.row.d_time.unbusy == '' ">無</div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="d_detail"
                                label="店鋪詳細計劃"
                                min-width="105"
                                >
                                <template>
                                    <div class="ju al"><img class="planEdit cursor" src="@/assets/img/planEdit.png" alt=""> </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="d_state"
                                sortable
                                label="審核狀態"
                                min-width="130"
                                >
                                <template slot-scope="scope">
                                    <div class="tc">
                                        <span class="green" v-if="scope.row.d_state == 1">通過</span>
                                        <span class="th_color" v-else-if="scope.row.d_state == 2">待審核</span>
                                        <span class="red" v-else-if="scope.row.d_state == 3">不通過</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="d_auditTime"
                                sortable
                                label="審核申請時間"
                                min-width="140"
                                >
                                <template slot-scope="scope">
                                    <div class="tc th_color">
                                        {{scope.row.d_auditTime}}
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="d_storePlanDetail"
                                label="操作"
                                min-width="130"
                                >
                                <template slot-scope="scope">
                                    <div class="tc cursor" style="font-size: 12px;" v-show="scope.row.d_state == 3">
                                        <div class="ju al"><img class="cuditImg" src="@/assets/img/editPlan.png" alt=""></div>
                                        <div class="tc">更改計劃</div>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">美食九龍店</div>
                        </div>
                        <div class="flex">
                            <div class="delUSer cursor">註銷店鋪</div>
                            <div class="arrow_m al" @click="drawer = !drawer"><img :class="[{ rotate: drawer }]" src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="['drawer_h', {'drawer_h1': drawer}]">
                        <ModuleMin1 :columns="columns" :arr="arr" ref="child">
                            <template slot="id" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                            <template slot="key" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                        </ModuleMin1>
                    </div>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">美食中環店</div>
                        </div>
                        <div class="flex">
                            <div class="delUSer cursor">註銷賬戶</div>
                            <div class="arrow_m al" @click="drawer1 = !drawer1"><img :class="[{ rotate: drawer1 }]" src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="['drawer_h', {'drawer_h1': drawer1}]">
                        <ModuleMin1 :columns="columns1" :arr="arr1" ref="child">
                            <template slot="id" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                            <template slot="key" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                        </ModuleMin1>
                    </div>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">醫療九龍店</div>
                        </div>
                        <div class="flex">
                            <div class="delUSer cursor">註銷賬戶</div>
                            <div class="arrow_m al" @click="drawer2 = !drawer2"><img :class="[{ rotate: drawer2 }]" src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="['drawer_h', {'drawer_h1': drawer2}]">
                        <ModuleMin1 :columns="columns2" :arr="arr2" ref="child">
                            <template slot="id" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                            <template slot="key" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                        </ModuleMin1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
    data () {
        return {
            drawer: false,
            drawer2: false,
            drawer1: false,
            drawer4: false,
            search: '',
            tableData:[
                {d_name:'九龍店',d_type: '美食',d_area: '九龍', d_ratio: '80', d_time: {busy: '繁忙時段(9am - 9pm)', unbusy: '非繁忙時段(9pm - 9am)'},d_detail: '', d_state: 1, 
                d_auditTime: '2021-06-06 19:00', d_storePlanDetail: ''},
                {d_name:'九龍店',d_type: '美食',d_area: '九龍', d_ratio: '80', d_time: {busy: '繁忙時段(9am - 9pm)', unbusy: '非繁忙時段(9pm - 9am)'},d_detail: '', d_state: 2, 
                d_auditTime: '2021-06-06 19:00', d_storePlanDetail: ''},
                {d_name:'九龍店',d_type: '美食',d_area: '九龍', d_ratio: '80', d_time: {busy: '繁忙時段(9am - 9pm)', unbusy: '非繁忙時段(9pm - 9am)'},d_detail: '', d_state: 1, 
                d_auditTime: '2021-06-06 19:00', d_storePlanDetail: ''},
                {d_name:'九龍店',d_type: '美食',d_area: '九龍', d_ratio: '80', d_time: {busy: '繁忙時段(9am - 9pm)', unbusy: '非繁忙時段(9pm - 9am)'},d_detail: '', d_state: 3, 
                d_auditTime: '2021-06-06 19:00', d_storePlanDetail: ''},
            ],
            area: '',
            type: '',
            columns: [
                {title:'店鋪設備配置',key:'name'},
                {title:'賬戶設備ID',slot:'id'},
                {title:'賬戶設備Key',slot:'key'},
                {title:'',key:''},
            ],
            columns1: [
                {title:'店鋪設備配置',key:'name'},
                {title:'賬戶設備ID',slot:'id'},
                {title:'賬戶設備Key',slot:'key'},
                {title:'',key:''},
            ],
            columns2: [
                {title:'店鋪設備配置',key:'name'},
                {title:'賬戶設備ID',slot:'id'},
                {title:'賬戶設備Key',slot:'key'},
                {title:'',key:''},
            ],
            arr:[
                {name:'設備賬戶',id: 'AAC3M53Z-vphf4sCVP7Pruiwa', key: 'AAC3M53Z-vphf4s', active: true},
            ],
            arr1:[
                {name:'設備賬戶',id: 'AAC3M53Z-vphf4sCVP7Pruiwa', key: 'AAC3M53Z-vphf4s',active: true},
            ],
            arr2:[
                {name:'設備賬戶',id: 'AAC3M53Z-vphf4sCVP7Pruiwa', key: 'AAC3M53Z-vphf4s',active: true},
                {name:'設備賬戶',id: 'AAC3M53Z-vphf4sCVP7Pruiwa', key: 'AAC3M53Z-vphf4s',active: true},
                {name:'設備賬戶',id: 'AAC3M53Z-vphf4sCVP7Pruiwa', key: 'AAC3M53Z-vphf4s',active: true},
            ],
        }
    },
    methods: {
        tableRowClassName ({ row,rowIndex }) {
            if (rowIndex%2 == 1) {
                return 'el_color'
            }
            return ''
        },
        back () {
            this.$router.back()
        },
        copyMsg () {
            var clipboard = new Clipboard('.tag-read')
            console.log(clipboard)
            let that = this
            clipboard.on('success', e => {
                that.$message({
                    type: 'success',
                    message: 'Copy successfully'
                })
                // 释放内存
                clipboard.destroy()
            })
            clipboard.on('error', e => {
                // 不支持复制
                that.$message({
                    type: 'error',
                    message: 'The browser does not support the copy function, it is recommended to use Google!'
                })
                // 释放内存
                clipboard.destroy()
            })
        }
    },
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
    .PlatSetting {
        height: 100%;
        margin-top: 20px;
        
    }
    .Settingadvertising_content_wrap {
        height: calc(100% - 20px);
        overflow: auto;
    }
    .Settingadvertising_content {
        width: 97%;
        margin-top: 15px;
    }
    .back {
        width: 97%;
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
    .cuditImg {
        width: 30px;
        height: 30px;
    }
    .planEdit {
        width: 23px;
        height: 23px;
    }
    .divider_wrap {
        box-shadow: 0 0 5px rgb(163, 163, 163) inset;
        padding: 4px;
    }
    .searchInp {
        margin-top: 10px;
        width: 135px;
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
    .setImg {
        img {
            width: 30px;
        }
    }
    .setText {
        font-size: 13px;
        img {
            width: 13px;
            margin-left: 3px;
        }
    }
    .green {
        color: #35E739;
    }
    .red {
        color: #FF0000;
    }
    .Settingadvertising_content {
        // height: 100%;
        /deep/.el-table th > .cell {
            text-align: center;
        }
        
        /deep/.el-table .cell {
            text-align: center;
        }
    }
    .th_color {
        color: #7868C1;
    }
    .delUSer {
        color: white;
        padding: 4px 20px;
        background: red;
        font-size: 12px;
        margin-right: 20px;
    }
    .arrow_m {
        width: 20px;
        img {
            width: 17px;
            transform: rotateZ(-180deg);
            transition: 0.2s;
        }
    }
    .rotate {
        transform: rotateZ(0deg) !important;
    }
    .drawer_h {
        transition: 0.2s;
        overflow: hidden;
        max-height: 500px;
    }
    .drawer_h1 {
        max-height: 0;
    }
</style>