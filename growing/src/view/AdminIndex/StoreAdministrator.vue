<template>
    <div class="StoreAdministrator">
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">店鋪管理
        </div>
        <div class="StoreAdministrator_content mg bar">
            <div class="StoreAdministrator_content_title sb al block">
                <div class="flex">
                    <div class="divider"></div>
                    <div class="divider_text">店鋪詳細信息管理</div>
                </div>
            </div>
            <div class="StoreAdministrator_table">
                <el-table :row-class-name="tableRowClassName" 
                    :header-cell-style="{ background: '#E4E4E5', 'text-align': 'center' }"
                    :data="tableData"
                    style="width: 100%"
                    height="95%"
                    >
                    <el-table-column
                        fixed
                        prop="name"
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
                        prop="type"
                        label="店鋪類型"
                        min-width="120"
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
                        prop="area"
                        label="店鋪區域"
                        min-width="110"
                        >
                        <template slot="header">
                            店鋪區域
                            <div class="searchInp mg">
                                <el-select class="width100" style="height: 28px;" v-model="area" placeholder="請選擇區域">
                                    <el-option label="九龍" value="九龍"></el-option>
                                    <el-option label="中環" value="中環"></el-option>
                                    <el-option label="黃大仙" value="黃大仙"></el-option>
                                    <el-option label="旺角" value="旺角"></el-option>
                                </el-select>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="ratio"
                        label="接收外來廣告比例"
                        sortable
                        min-width="120"
                        >
                        <template slot-scope="scope">
                            <div class="ju al th_color">
                                {{scope.row.ratio}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="gtime"
                        label="接收外來廣告時段"
                        min-width="160"
                        >
                        <template slot="header">
                            接收外來廣告時段
                            <div class="searchInp mg">
                                <el-select class="width100" style="height: 28px;" v-model="time" placeholder="請選擇區域">
                                    <el-option label="繁忙時段(9am - 9pm)" value="繁忙時段(9am - 9pm)"></el-option>
                                    <el-option label="非繁忙時段(9pm - 9am)" value="非繁忙時段(9pm - 9am)"></el-option>
                                </el-select>
                            </div>
                        </template>
                        <template slot-scope="scope">
                            <div class="">
                                <div class="th_color tc" v-show="scope.row.gtime.busy">{{scope.row.gtime.busy}}</div>
                                <div class="th_color tc" v-show="scope.row.gtime.unbusy">{{scope.row.gtime.unbusy}}</div>
                                <div class="th_color tc" v-show="scope.row.gtime.busy == '' && scope.row.gtime.unbusy == '' ">無</div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="gtype"
                        label="接受外來廣告類型"
                        min-width="160"
                        >
                        <template slot="header">
                            接受外來廣告類型
                            <div class="searchInp mg">
                                <el-select class="width100" style="height: 28px;" v-model="outtype" placeholder="請選擇類型">
									<el-option label="食品" value="食品"></el-option>
									<el-option label="科技" value="科技"></el-option>
									<el-option label="醫療" value="醫療"></el-option>
									<el-option label="汽車" value="汽車"></el-option>
								</el-select>
                            </div>
                        </template>
                        <template slot-scope="scope">
                            <div class="tc th_color">{{scope.row.gtype}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="detail"
                        label="店鋪詳細設定操作"
                        min-width="200"
                        >
                        <template>
                            <div class="sb al">
                                <div class="cursor" @click="PreviewMsg">
                                    <div class="ju al"><img class="planEdit" src="@/assets/img/preview.png" alt=""></div>
                                    <div class="tc">預覽全部資料</div>
                                </div>
                                <div class="cursor" @click="StoreSet">
                                    <div class="ju al"><img class="planEdit" src="@/assets/img/plat.png" alt=""></div>
                                    <div class="tc">店鋪資料設定</div>
                                </div>
                                <div class="cursor" @click="StoreUserSet">
                                    <div class="ju al"><img class="planEdit" src="@/assets/img/userDetail.png" alt=""></div>
                                    <div class="tc">店鋪賬戶設定</div>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            type: '',
            outtype: '',
            area: '',
            search: '',
            time: '',
            search1: '',
            tableData:[
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '繁忙時段(9am - 9pm)', unbusy: '非繁忙時段(9pm - 9am)'},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '繁忙時段(9am - 9pm)', unbusy: ''},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '', unbusy: '非繁忙時段(9pm - 9am)'},gtype: '美食，生活', detail: ''},
            ],
        }
    },
    methods: {
        back () {
            this.$router.back()
        },
        tableRowClassName ({ row,rowIndex }) {
            if (rowIndex%2 == 1) {
                return 'el_color'
            }
            return ''
        },
        StoreSet () {
            this.$router.push('/StoreSet')
        },
        PreviewMsg () {
            this.$router.push('/PreviewMsg')
        },
        StoreUserSet () {
            this.$router.push('/StoreUserSet')
        }
    }
}
</script>

<style lang='less' scoped>
@import "@/less/style.less";
    .StoreAdministrator {
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
    .StoreAdministrator_content {
        width: 98%;
        overflow: auto;
        height: calc(100% - 50px);
        box-shadow: 0 0 5px #acacac inset;
        padding: 4px;
        margin-top: 15px;
    }
    .StoreAdministrator_content_title {
        padding: 7px 15px;
        background: #f5f5f5;
        @media screen and (max-width: 677px) {
            display: block;
        }
    }
    .StoreAdministrator_table {
        // height: 100%;
        /deep/.el-table th > .cell {
            text-align: center;
        }
        
        /deep/.el-table .cell {
            text-align: center;
        }
    }
    .searchInp {
        margin-top: 10px;
        width: 155px;
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
    .planEdit {
        width: 33px;
        height: 33px;
    }
    .th_color {
        color: #7868C1;
    }
</style>