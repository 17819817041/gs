<template>
    <div class="AdminPlan" v-loading='loading'>
        <div class="AdminPlan_back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" alt="" @click="back"><span>管理廣告計劃</span>
        </div>
        <div class="AdvertiserManagement_content mg bar">
            <div class="AdvertiserManagement_content_title sb al block">
                <div class="flex">
                    <div class="divider"></div>
                    <div class="divider_text">{{storeName}}</div>
                </div>
            </div>
            <div class="table mg">
                <el-table :row-class-name="tableRowClassName" :max-height="tableHeight" 
                :header-cell-style="{ background: '#E4E4E5', 'text-align': 'center' }"
                    :data="tableData"
                    style="width: 100%"
                    >
                    <el-table-column
                        fixed
                        prop="name"
                        label="廣告計劃名稱"
                        min-width="120"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="category"
                        label="廣告類型"
                        min-width="170"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="area"
                        label="廣告區域"
                        min-width="120"
                        >
                        <template slot-scope="scope">
                            <div v-if="scope.row.area.length == 0">隨機區域投放</div>
                            <div v-else v-for="(item,i) in scope.row.area" :key="i">{{item}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="廣告投放時段"
                        min-width="300"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="outTime"
                        label="廣告投放過期"
                        min-width="220"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        label="廣告投放總價"
                        min-width="110"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="state"
                        label="廣告計劃狀態"
                        min-width="120"
                        >
                        <template slot-scope="scope">
                        <!-- <div :class="['cursor toufang ju', {'sure_state': scope.row.state == 1, 'no_state': scope.row.state == 2}]"> -->
                        <div :class="['cursor toufang ju', {'sure_state': scope.row.state == 1, 'no_state': scope.row.state == 2}]">
                            <!-- <span v-if="scope.row.state == 1" >已投放</span>
                            <span v-else-if="scope.row.state == 2">未投放(未付款)</span>
                            <span :class="[{ 'no_state': scope.row.state == 3}]" v-else-if="scope.row.state == 3">未投放(已付款)</span>
                            <span :class="[{ 'wait': scope.row.state == 4}]" v-else-if="scope.row.state == 4">{{scope.row.status}}</span> -->
                            <span>{{scope.row.status}}</span>
                        </div>
                    </template>
                    </el-table-column>
                    <el-table-column
                        prop="content"
                        label="廣告媒體內容"
                        min-width="120"
                        >
                        <template>
                            <div class="preview cursor">
                                <div class="ju"><img src="@/assets/img/eye.png" alt=""></div>
                                <div class="tc">查看預覽</div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="edit"
                        label="操作"
                        min-width="250"
                        >
                        <template slot-scope="scope">
                            <div class="putaway sa">
                                <div class="putaway_logo" v-if="scope.row.showEdiy">
                                    <div class="ju"><img src="@/assets/img/edit.png" alt=""></div>
                                    <div class="tc">編輯計劃</div>
                                </div>
                                <!-- <div v-else></div> -->
                                <div class="putaway_logo centerL" v-if="scope.row.showShangJia">
                                    <div class="ju "><img src="@/assets/img/up.png" alt=""></div>
                                    <div class="tc">上架計劃</div>
                                </div>
                                <!-- <div v-else></div> -->
                                <div class="putaway_logo centerL" v-if="scope.row.showXiaJia">
                                    <div class="ju"><img src="@/assets/img/down.png" alt=""></div>
                                    <div class="tc">下架計劃</div>
                                </div>
                                <!-- <div v-else></div> -->
                                <div class="putaway_logo" v-if="scope.row.showDelete">
                                    <div class="ju"><img src="@/assets/img/delete.png" alt=""></div>
                                    <div class="tc">刪除計劃</div>
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
        
    </div>
</template>

<script>
import { managerUserDetail } from "@/axios/request.js"
export default {
    data () {
        return {
            storeName: localStorage.getItem('storeName'),
            tableHeight:0,
            tableData: [
                // {name:'食品會',category: '食品，美食，時尚',area: '九龍', time: '繁忙時段(9am-9pm);非繁忙時段(9pm-9am)',
                // outTime: '2021-06-21~2021-06-28', price: '$6000HKD', state: 1, content: '查看預覽', edit: 1},
                // {name:'食品會',category: '食品，美食，時尚',area: '九龍', time: '繁忙時段(9am-9pm);非繁忙時段(9pm-9am)',
                // outTime: '2021-06-21~2021-06-28', price: '$6000HKD', state: 2, content: '查看預覽', edit: 2},
                // {name:'食品會',category: '食品，美食，時尚',area: '九龍', time: '繁忙時段(9am-9pm);非繁忙時段(9pm-9am)',
                // outTime: '2021-06-21~2021-06-28', price: '$6000HKD', state: 3, content: '查看預覽', edit: 3},
            ],
            pageNum: 0,
            pageSize: 10,
            storeList: [],
            loading: false
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
        this.managerUserDetail()
    },
    methods: {
        managerUserDetail () {
            this.loading = true
            let data = {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                userId: this.$route.query.id
            }
            managerUserDetail(data).then(res => {
                this.loading = false
                console.log(res)
                if (res.data.rtnCode == 200) {
                    res.data.data.pageT.forEach(item => {
                        this.tableData.push({
                            name: item.guangGaoTitle,
                            category: item.guangGaoTypeName,
                            area: item.guangGaoAddressLisr, 
                            time: item.launchTypeName,
                            outTime: item.startTime.split(' ')[0] + "~" + item.endTime.split(' ')[0], 
                            price: '$' + item.totalPrice + 'HKD', 
                            status: item.guangGaoStateName,
                            content: '查看預覽', 
                            edit: 0,
                            showDelete: item.showDelete,
                            showEdiy: item.showEdiy,
                            showShangJia: item.showShangJia,
                            showXiaJia: item.showXiaJia
                        })
                    })
                } else {
                    this.$message({
                        type: 'warning',
                        message: res.data.msg
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
        resi () {
            let that = this
            this.$nextTick(() => {
                that.tableHeight = window.innerHeight - 207
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
    @import "@/less/style.less";
    .table {
        /deep/.el-table th > .cell {
            text-align: center;
        }
        
        /deep/.el-table .cell {
            text-align: center;
        }
        background: #F7F7F7;
        height: 91%;
    }
    
    .AdminPlan {
        margin-top: 20px;
        height: calc(100% - 30px);
    }
    .AdminPlan_back {
        width: 98%;
        font-size: 20px;
        img {
            width: 20px;
            height: 20px;
            // padding-right: 17px;
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
    .wait {
        color: rgb(83, 0, 179);
    }
    .preview {
        font-size: 12px;
        img {
            width: 20px;
        }
    }
    .AdvertiserManagement_content {
        width: 98%;
        overflow: auto;
        height: calc(100% - 11px);
        box-shadow: 0 0 5px #acacac inset;
        padding: 4px;
        margin-top: 15px;
    }
    .AdvertiserManagement_content_title {
        padding: 7px 15px;
        background: #f5f5f5;
        @media screen and (max-width: 677px) {
            display: block;
        }
    }
    .divider {
        width: 0;
        margin-right: 5px;
        border: solid 2px @themeColor;
    }
    .divider_text {
        color: @themeColor;
        font-size: 14px;
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
        div img {
            width: 20px;
            height: 20px;
        }
    }
    .centerL {
        margin: 0 5px;
    }
</style>