<style lang='less' scoped>
@import "@/less/style.less";
    .AuditList {
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
    .Logo {
        height: 45px;
        img {
            width: 200px;
            height: 70px;
        }
    }
    .green {
        color: #35E739;
    }
    .AuditList_content {
        width: 98%;
        overflow: auto;
        height: calc(100% - 37px);
        box-shadow: 0 0 5px #acacac inset;
        padding: 4px;
        margin-top: 15px;
    }
    .AuditList_content_title {
        padding: 7px 15px;
        background: #f5f5f5;
    }
    .red {
        color: #FF0000;
    }
    .AuditList_table {
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
        width: 135px;
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
        width: 23px;
        height: 23px;
    }
    .th_color {
        color: #7868C1;
    }
    .cuditImg {
        width: 30px;
        height: 30px;
    }
    .switch {
        position: relative;
        width: 85px;
        height: 20px;
        background: #877DB3;
        border-radius: 35px;
        font-size: 12px;
        margin-left: 50px;
        .adImg {
            width: 14px;
            margin-right: 5px;
        }
        .switchBtn{
            position: absolute;
            top: -5px;
            left: 0;
            width: 30px;
            height: 30px;
            background: #5B47B6;
            transition: 0.1s;
        }
    }
    .right {
        transform: translate(72px, 0);
    }
    .left {
        // left: -18px;
        transform: translate(-18px, 0);
    }
    .auditBtn {
        // padding: 20px 0;
        width: 45%;
        @media screen and (max-width: 600px) {
			width: 85%;
		}
    }
    .gray_text {
        color: rgb(204, 204, 204);
        font-size: 13px;
        margin-top: 48px;
        margin-bottom: 15px;
    }
    .result {
        width: 100%;
        padding: 25px 20px;
    }
    .no_wrap {
        .no {
            width: 85px;
            height: 85px;
            border: solid 1px #FD0F1C;
            border-radius: 6px;
        }
        .no_text {
            color: #FD0F1C;
            font-size: 12px;
            margin-top: 15px;
        }
    }
    .yes_wrap {
        .yes {
            width: 85px;
            height: 85px;
            border: solid 1px #B3F268;
            border-radius: 6px;
        }
        .yes_text {
            color: #B3F268;
            font-size: 12px;
            margin-top: 15px;
        }
    }
    .plat_f {
        color: rgb(196, 196, 196);
        font-size: 12px;
    }
    .backimg {
        @media screen and (max-width: 600px) {
			display: none;
		}
    }
</style>
<template>
    <div class="AuditList">
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">審核申請列表
        </div>
        <div class="AuditList_content mg bar">
            <div class="AuditList_content_title al">
                <div class="flex">
                    <div class="divider"></div>
                    <div class="divider_text">審核身份列表切換</div>
                </div>
                <div class="switch ju al cursor" @click="switchB">
                    <img v-show="!boo" class="adImg" src="@/assets/img/ad.png" alt=""><span v-show="!boo">廣告商</span>
                    <img v-show="boo" class="adImg" src="@/assets/img/plat.png" alt=""><span v-show="boo">店鋪</span>
                    <div :class="['switchBtn radius',{ 'right': boo, 'left': !boo }]" @click.stop="switchB"></div>
                </div>
            </div>
            <div class="AuditList_table" v-if="boo">
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
                            <div class="ju al"><img class="planEdit cursor" @click="Ddetail" src="@/assets/img/planEdit.png" alt=""> </div>
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
                        <template>
                            <div class="tc" style="font-size: 12px;" @click="dialogVisible = true">
                                <div class="ju al"><img class="cuditImg" src="@/assets/img/audit.png" alt=""></div>
                                <div class="tc">審核操作</div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="AuditList_table" v-else>
                <el-table :row-class-name="tableRowClassName"
                    :header-cell-style="{ background: '#E4E4E5', 'text-align': 'center' }"
                    :data="tableData1"
                    style="width: 100%"
                    height="95%"
                    >
                    <el-table-column
                        fixed
                        prop="name"
                        label="廣告計劃名稱"
                        min-width="150"
                        >
                        <template slot="header">
                            廣告計劃名稱
                            <div class="searchInp mg">
                                <el-input
                                class="width100"
                                v-model="search1"
                                size="mini"
                                placeholder="输入关键字搜索"/>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="廣告投放類型"
                        min-width="190"
                        >
                        <template slot="header">
                            廣告投放類型
                            <div class="searchInp mg">
                                <el-select class="width100" style="height: 28px;" v-model="d_type" placeholder="請選擇類型">
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
                        label="廣告投放區域"
                        min-width="150"
                        >
                        <template slot="header">
                            廣告投放區域
                            <div class="searchInp mg">
                                <el-select class="width100" style="height: 28px;" v-model="d_area" placeholder="請選擇類型">
									<el-option label="九龍" value="九龍"></el-option>
									<el-option label="旺角" value="旺角"></el-option>
									<el-option label="中環" value="中環"></el-option>
								</el-select>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        sortable
                        label="廣告投放過期"
                        min-width="200"
                        >
                        <template slot-scope="scope">
                            <div class="tc th_color">
                                {{scope.row.time}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="videoLong"
                        label="廣告媒體時長"
                        min-width="130"
                        sortable=""
                        >
                        <template slot-scope="scope">
                            <div class="th_color"> {{scope.row.videoLong}} 分鐘</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="total"
                        label="計劃投放總價"
                        sortable
                        min-width="130"
                        >
                        <template slot-scope="scope">
                            <div class="ju al red">
                                $ {{scope.row.total}} HKD
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="gDetail"
                        label="廣告詳細計劃"
                        min-width="105"
                        >
                        <template>
                            <div class="ju al"><img class="planEdit cursor" @click="Gdetail" src="@/assets/img/planEdit.png" alt=""> </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="state"
                        sortable
                        label="審核狀態"
                        min-width="130"
                        >
                        <template slot-scope="scope">
                            <div class="tc">
                                <span class="green" v-if="scope.row.state == 1">通過</span>
                                <span class="th_color" v-else-if="scope.row.state == 2">待審核</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="auditTime"
                        sortable
                        label="審核申請時間"
                        min-width="140"
                        >
                        <template slot-scope="scope">
                            <div class="tc th_color">
                                {{scope.row.auditTime}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="storePlanDetail"
                        label="店鋪詳細計劃"
                        min-width="130"
                        >
                        <template>
                            <div class="tc" style="font-size: 12px;" @click="dialogVisible = true">
                                <div class="ju al"><img class="cuditImg" src="@/assets/img/audit.png" alt=""></div>
                                <div class="tc">審核操作</div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="30%">
            <div class="flex" style="height: 100%">
                <div class="backimg"><img style="height: 100%;" src="@/assets/img/backimg.png" alt=""></div>
                <div class="auditBtn mg">
                    <div class="ju Logo"><img src="@/assets/img/logo.png" alt=""></div>
                    <div class="gray_text tc"> — 請詳細審閱內容後，選擇審核結果 — </div>
                    <div class="result sb mg">
                        <div class="no_wrap">
                            <div class="no ju al"><img style="height: 70%;" src="@/assets/img/no.png" alt=""></div>
                            <div class="no_text tc">審核不通過</div>
                        </div>
                        <div class="yes_wrap">
                            <div class="yes ju al"><img style="height: 70%;" src="@/assets/img/yes.png" alt=""></div>
                            <div class="yes_text tc">審核通過</div>
                        </div>
                    </div>
                    <div class="plat_f tc">Compoundeyes提供技術支持</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dialogVisible: false,
            type: '',
            d_type: '',
            area: '',
            d_area: '',
            boo: false,
            search: '',
            search1: '',
            tableData:[
                {d_name:'九龍店',d_type: '美食',d_area: '九龍', d_ratio: '80', d_time: {busy: '繁忙時段(9am - 9pm)', unbusy: '非繁忙時段(9pm - 9am)'},d_detail: '', d_state: 1, 
                d_auditTime: '2021-06-06 19:00', d_storePlanDetail: ''},
            ],
            tableData1:[
                {name:'九龍店',type: '美食',area: '九龍', time: '2021-06-06 ~ 2021-10-26', total: '6000',videoLong:'5',gDetail: '', state: 1, 
                auditTime: '2021-06-06 19:00', storePlanDetail: ''},
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
        Gdetail () {
            this.$router.push('/Gdetail')
        },
        Ddetail () {
            this.$router.push('/Ddetail')
        },
        switchB () {
            this.boo = !this.boo
        }
    }
}
</script>

