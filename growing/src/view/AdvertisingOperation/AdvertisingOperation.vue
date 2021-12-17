<template>
    <div class="AdvertisingOperation">
        <div class="AdvertisingOperation_back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" alt="" 
            @click="back">{{$t("lang.admanagement")}}
        </div>
        <div class="table mg bar" ref="tabl">
            <el-table :row-class-name="tableRowClassName"
                :max-height="tableHeight"
                :header-cell-style="{ background: '#E4E4E5', 'text-align': 'center' }"
                :data="tableData"
                style="width: 100%"
                >
                <el-table-column
                    fixed
                    prop="name"
                    :label="$t('lang.planName')"
                    min-width="145"
                    >
                    <template slot-scope="scope">
                        <span v-if="scope.row.name == '食品會'">{{$t("lang.foodclient")}}</span>
                        <span v-if="scope.row.name == '車展會'">{{$t("lang.carclient")}}</span>
                        <span v-if="scope.row.name == '售藥'">{{$t("lang.medicalclient")}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="category"
                    :label="$t('lang.industry')"
                    min-width="170"
                    >
                    <template slot-scope="scope">
                        <span v-if="scope.row.category == 1">{{$t("lang.food")}}</span>
                        <span v-if="scope.row.category == 2">{{$t("lang.car")}}</span>
                        <span v-if="scope.row.category == 3">{{$t("lang.medical")}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="area"
                    :label="$t('lang.ad_adarea')"
                    min-width="150"
                    >
                    <template slot-scope="scope">
                        <span v-if="scope.row.area == '九龍'">{{$t("lang.jiulong")}}</span>
                        <span v-if="scope.row.area == '旺角'">{{$t("lang.wangjiao")}} - 旺角街道</span>
                        <span v-if="scope.row.area == '中環'">{{$t("lang.zhonghuan")}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="time"
                    :label="$t('lang.amt')"
                    min-width="250"
                    >
                    <template slot-scope="scope">
                        <!-- <div class="tc">{{$t("lang.busyhour")}}</div>
                        <div class="tc">{{$t("lang.unbusyhour")}}</div> -->
                        <div v-if="scope.row.time == 1">
                            <div>
                                <div class="tc">({{$t("lang.sate")}})</div>
                                <div class="tc">9:00~10:00</div>
                                <div class="tc">10:00~11:00</div>
                            </div>
                            <div class="ju">
                                <div class="cursor" style="padding: 0 20px;">...</div>
                            </div>
                        </div>
                        <div v-else-if="scope.row.time == 2">
                            <div>
                                <div class="tc">({{$t("lang.sate")}})</div>
                                <div class="tc">9:00~10:00</div>
                            </div>
                            <div class="ju">
                                <div class="cursor" style="padding: 0 20px;">...</div>
                            </div>
                        </div>
                        <div v-else-if="scope.row.time == 3">
                            <div>
                                <div class="tc">({{$t("lang.cat")}})</div>
                                <div class="tc">9:00~10:00(10分鐘)</div>
                                <div class="tc">10:00~11:00(20分鐘)</div>
                            </div>
                            <div class="ju">
                                <div class="cursor" style="padding: 0 20px;">...</div>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="outTime"
                    :label="$t('lang.expired')"
                    min-width="220"
                    >
                    <template>
                        <div class="tc">2021-06-21~2021-06-28</div>
                        <div class="tc">(7天)</div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="price"
                    :label="$t('lang.ad_total')"
                    min-width="140"
                    >
                </el-table-column>
                <el-table-column
                    prop="state"
                    :label="$t('lang.ad_status')"
                    min-width="190"
                    >
                    <template slot-scope="scope">
                    <div :class="['cursor toufang ju', {'sure_state': scope.row.state == 1, 'no_state': scope.row.state == 2}]">
                        <span v-if="scope.row.state == 1" >{{$t("lang.status1")}}</span>
                        <span v-else-if="scope.row.state == 2">{{$t("lang.status2")}}</span>
                        <span :class="[{ 'no_state': scope.row.state == 3}]" 
                        v-else-if="scope.row.state == 3">{{$t("lang.status3")}}</span>
                    </div>
                </template>
                </el-table-column>
                <el-table-column
                    prop="content"
                    :label="$t('lang.adcontent')"
                    min-width="150"
                    >
                    <template slot-scope="scope">
                        <div class="preview ju">
                            <div class="cursor" style="width: 65%; padding: 12px 0" @click="toPreview(scope.row.dv)">
                                <div class="ju"><img src="@/assets/img/eye.png" alt=""></div>
                                <div class="tc">{{$t("lang.preview")}}</div>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="edit"
                    :label="$t('lang.operate')"
                    min-width="220"
                    >
                    <template slot-scope="scope">
                        <div class="putaway sa al">
                            <div class="putaway_logo" v-if="scope.row.edit == 2">
                                <div class="ju"><img src="@/assets/img/edit.png" alt=""></div>
                                <div class="tc">{{$t("lang.editplan")}}</div>
                            </div>
                            <!-- <div v-else></div> -->
                            <div class="putaway_logo centerL" v-if="scope.row.edit == 3 || scope.row.edit == 2">
                                <div class="ju "><img src="@/assets/img/up.png" alt=""></div>
                                <div class="tc">{{$t("lang.shelfplan")}}</div>
                            </div>
                            <!-- <div v-else></div> -->
                            <div class="putaway_logo centerL" v-if="scope.row.edit == 1">
                                <div class="ju"><img src="@/assets/img/down.png" alt=""></div>
                                <div class="tc">{{$t("lang.downplan")}}</div>
                            </div>
                            <!-- <div v-else></div> -->
                            <div class="putaway_logo" v-if="scope.row.edit == 2">
                                <div class="ju"><img src="@/assets/img/delete.png" alt=""></div>
                                <div class="tc">{{$t("lang.deleteplan")}}</div>
                            </div>
                            <!-- <div v-else></div> -->
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="footpage flexEnd">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    small
                    :pager-count="5"
                    :current-page="1"
                    :page-size="10"
                    layout=" jumper, prev, pager, next"
                    :total="tableData.length">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { adList } from "@/axios/request.js"
export default {
    data () {
        return {
            tableHeight:0,
            tableData: [
                {name:'食品會',category: 1,area: '九龍', time: 1, dv: 'pro',
                outTime: '2021-06-21~2021-06-28', price: '$6000HKD', state: 1, content: '查看預覽', edit: 1},
                {name:'車展會',category: 2, area: '旺角', time: 2, dv: 'plus',
                outTime: '2021-06-21~2021-06-28', price: '$6000HKD', state: 2, content: '查看預覽', edit: 2},
                {name:'售藥',category: 3,area: '中環', time: 3, dv: 'pro',
                outTime: '2021-06-21~2021-06-28', price: '$6000HKD', state: 3, content: '查看預覽', edit: 3},
            ],
            pageNum: 0,
            pageSize: 100
        }
    },
    mounted () {
        let that = this
        window.addEventListener("resize",function(){
            that.resi()
        });
        this.resi()
    },
    created () {
        this.adList()
    },
    methods: {
        adList () {
            let data = {
                // userId: localStorage.getItem('compoundeyesUserId'),
                userId: 5,
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
            adList(data).then(res => {
                console.log(res)
            })
        },
        toPreview (val) {
            if (val == 'pro') {
                this.$router.push('/dvPreview')
            } else if (val == 'plus') {
                this.$router.push('/dvPreviewPlus')
            }
        },
        resi () {
            let that = this
            this.$nextTick(() => {
                that.tableHeight = window.innerHeight - 165
            })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        tableRowClassName ({ row,rowIndex }) {
            if (rowIndex%2 == 1) {
                return 'el_color'
            }
            return ''
        },
        back () {
             this.$router.back()
        }
    }
}
</script>

<style lang='less' scoped>
    .table {
        /deep/.el-table th > .cell {
            text-align: center;
        }
        
        /deep/.el-table .cell {
            text-align: center;
        }
    }
    .AdvertisingOperation {
        margin-top: 20px;
        height: calc(100% - 10px);
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
    .btn {
        padding: 2px 5px;
        border-radius: 4px;
        color: white;
        display: inline-block;
        font-size: 14px;
        @media screen and (max-width: 1300px) {
            font-size: 12px;
        }
    }
    .table {
        width: 97%;
        background: #F7F7F7;
        height: calc(100% - 23px);
        margin-top: 15px;
        overflow: auto;
    }
    .red {
        background: #DC3545;
    }
    .green {
        background: #198754;
    }
    .sure_state {
        color: #75F97E;
    }
    .no_state {
        color: #FA3A3A;
    }
    .preview {
        font-size: 12px;
        img {
            width: 20px;
        }
    }
    .add {
        display: inline-block;
        padding: 6px 10px;
        border: solid 1px #435EBE;
        color: #435EBE;
        border-radius: 5px;
    }
    .confirm {
        padding: 10px 16px;
        border-radius: 4px;
        background: #435EBE;
        color: white;
        display: inline-block;
    }
    .toufang {
        @media screen and (max-width: 1300px) {
            font-size: 12px;
        }
    }
    .putaway_logo {
        font-size: 12px;
        div>img {
            width: 20px;
            height: 20px;
        }
    }
    .centerL {
        margin: 0 5px;
    }
</style>