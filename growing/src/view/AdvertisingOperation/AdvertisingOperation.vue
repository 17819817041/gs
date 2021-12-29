<template>
    <div class="AdvertisingOperation" v-loading='loading'>
        <div class="AdvertisingOperation_back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="" 
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
                        <span>{{scope.row.name}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="category"
                    :label="$t('lang.industry')"
                    min-width="170"
                    >
                    <template slot-scope="scope">
                        <span>{{scope.row.category}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="area"
                    :label="$t('lang.ad_adarea')"
                    min-width="150"
                    >
                    <template slot-scope="scope">
                        <span v-if="scope.row.area.length != 0">
                            <div v-for="(item,i) in scope.row.area" :key="i">{{item}}</div>
                        </span>
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
                        <div>
                            <div :ref="'clockDom' + scope.row.id">
                                <div v-for="(item,i) in scope.row.time" :key="i">
                                    <div v-for="(child,ii) in item.guangGaoTimeIntervalDetialsDtos" :key='ii'>
                                        {{child.timeIntervalDetailsName}}
                                    </div>
                                </div>
                            </div>
                            <div class="ju" v-if="scope.row.dom > 46">
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
                    <template slot-scope="scope">
                        <div class="tc">{{scope.row.outTime}}</div>
                        <div class="tc">({{scope.row.days}}天)</div>
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
                    <div :class="['cursor toufang ju', {'sure_state': scope.row.state == 1, 'perple' :scope.row.state == '等待審核',
                    'no_state': scope.row.state == '未上架(未付款)' || scope.row.state == '未上架(已付款)'}]">
                        <!-- <span v-if="scope.row.state == 1" >{{$t("lang.status1")}}</span>
                        <span v-else-if="scope.row.state == 2">{{$t("lang.status2")}}</span>
                        <span :class="[{ 'no_state': scope.row.state == 3}]" 
                        v-else-if="scope.row.state == 3">{{$t("lang.status3")}}</span> -->
                        <span >{{scope.row.state}}</span>
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
                            <div class="cursor" style="width: 65%; padding: 12px 0" @click="toPreview(scope.row.launchType)">
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
                            <div class="putaway_logo" v-if="scope.row.showEdiy">
                                <div class="ju"><img src="@/assets/img/edit.png" alt=""></div>
                                <div class="tc">{{$t("lang.editplan")}}</div>
                            </div>
                            <!-- <div v-else></div> -->
                            <div class="putaway_logo centerL" v-if="scope.row.showShangJia">
                                <div class="ju "><img src="@/assets/img/up.png" alt=""></div>
                                <div class="tc">{{$t("lang.shelfplan")}}</div>
                            </div>
                            <!-- <div v-else></div> -->
                            <div class="putaway_logo centerL" v-if="scope.row.showXiaJia">
                                <div class="ju"><img src="@/assets/img/down.png" alt=""></div>
                                <div class="tc">{{$t("lang.downplan")}}</div>
                            </div>
                            <!-- <div v-else></div> -->
                            <div class="putaway_logo" v-if="scope.row.showDelete">
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
                    :total="totalRecordsCount">
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
            pageNum: 4,
            pageSize: 10,
            loading: false,
            totalRecordsCount: null
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
            this.loading = true
            let that = this
            let data = {
                userId: localStorage.getItem('compoundeyesUserId'),
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
            this.tableData = []
            adList(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.totalRecordsCount = res.data.data.totalRecordsCount
                    res.data.data.pageT.forEach(item => {
                        this.tableData.push({
                            name: item.guangGaoTitle,
                            category: item.guangGaoTypeName,
                            area: item.guangGaoAddressLisr, 
                            time: item.guangGaoTimeIntervalDtoList,
                            outTime: item.startTime.split(' ')[0] + '~' + item.endTime.split(' ')[0], 
                            days: item.days,
                            price: '$' + item.totalPrice + 'HKD', 
                            state: item.guangGaoStateName, 
                            content: '查看預覽', 
                            edit: 1,
                            id: item.id,
                            showDelete: item.showDelete,
                            showEdiy: item.showEdiy,
                            showShangJia: item.showShangJia,
                            showXiaJia: item.showXiaJia,
                            launchType: item.launchType
                        })
                        this.$nextTick(() => {
                            item.dom = that.$refs['clockDom' + item.id].clientHeight
                            that.tableData.forEach(child => {
                                if (child.id == item.id) {
                                    // console.log(child)
                                    child.dom = item.dom
                                }
                            })
                        })
                    })
                } else {
                    this.$message({
                        type: 'warning',
                        message: this.$t('lang.loading')
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: this.$t('lang.loading')
                })
            })
        },
        toPreview (val) {
            if (val == 1) {
                this.$router.push({
                    name: 'dvPreview',
                    query: {
                        id: val
                    }
                })
            } else if (val == 3) {
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
            this.pageNum = Number(val)
            this.adList()
        },
        handleCurrentChange(val) {
            this.pageNum = Number(val)
            this.adList()
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
    .perple {
        color: #5C48B6;
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