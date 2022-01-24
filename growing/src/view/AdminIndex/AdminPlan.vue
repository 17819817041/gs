<template>
    <div class="AdminPlan" v-loading='loading'>
        <div class="AdminPlan_back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="" @click="back"><span>管理廣告計劃</span>
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
                        min-width="200"
                        >
                        <template slot-scope="scope">
                            <div class="divider_text" v-for="(item,i) in scope.row.time" :key="i">
                                {{item.timeIntervalName}}
                            </div>
                        </template>
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
                        min-width="125"
                        >
                        <template slot-scope="scope">
                            <div class="no_state">
                                {{scope.row.price}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="state"
                        label="廣告計劃狀態"
                        min-width="120"
                        >
                        <template slot-scope="scope">
                        <div :class="['toufang ju', {'sure_state': scope.row.state == 1, 'no_state': scope.row.state == 2}]">
                            <span>{{scope.row.status}}</span>
                        </div>
                    </template>
                    </el-table-column>
                    <el-table-column
                        prop="content"
                        label="廣告媒體內容"
                        min-width="120"
                        >
                        <template slot-scope="scope">
                            <div class="preview ju">
                                <div class="cursor" @click="preview(scope.row.launchType,scope.row.id)">
                                    <div class="ju"><img src="@/assets/img/eye.png" alt=""></div>
                                    <div class="tc">{{$t("lang.preview")}}</div>
                                </div>
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
                                <div class="putaway_logo cursor" v-if="scope.row.showEdiy" @click="toEdit(scope.row.launchType, scope.row.id)">
                                    <div class="ju"><img src="@/assets/img/edit.png" alt=""></div>
                                    <div class="tc">{{$t("lang.editplan")}}</div>
                                </div>
                                <!-- <div v-else></div> -->
                                <el-popconfirm
                                    v-if="scope.row.showShangJia"
                                    confirm-button-type= 'success'
                                    confirm-button-text='好的'
                                    cancel-button-text='不用了'
                                    icon="el-icon-info"
                                    icon-color="#6CF675"
                                    @confirm='adminsjGuangGao(scope.row.id)'
                                    title="確定上架嗎？"
                                    >
                                    <div class="putaway_logo centerL cursor" slot="reference" v-if="scope.row.showShangJia">
                                        <div class="ju "><img src="@/assets/img/up.png" alt=""></div>
                                        <div class="tc">{{$t("lang.shelfplan")}}</div>
                                    </div>
                                    <div v-else slot="reference"></div>
                                </el-popconfirm>
                                <!-- <div v-else></div> -->
                                <el-popconfirm
                                    v-if="scope.row.showXiaJia"
                                    icon="el-icon-info"
                                    icon-color="red"
                                    @confirm='adminoffShelf(scope.row.id)'
                                    title="確定下架嗎？"
                                    >
                                    <div class="putaway_logo centerL cursor" slot="reference" v-if="scope.row.showXiaJia">
                                        <div class="ju"><img src="@/assets/img/down.png" alt=""></div>
                                        <div class="tc">{{$t("lang.downplan")}}</div>
                                    </div>
                                    <div v-else slot="reference"></div>
                                </el-popconfirm>
                                <!-- <div v-else></div> -->
                                <el-popconfirm
                                    v-if="scope.row.showDelete"
                                    icon="el-icon-info"
                                    icon-color="red"
                                    @confirm='admindelGuangGaoJiHua(scope.row.id)'
                                    title="確定删除嗎？"
                                    >
                                    <div class="putaway_logo cursor" slot="reference" v-if="scope.row.showDelete">
                                        <div class="ju"><img src="@/assets/img/delete.png" alt=""></div>
                                        <div class="tc">{{$t("lang.deleteplan")}}</div>
                                    </div>
                                    <div v-else slot="reference"></div>
                                </el-popconfirm>
                                <!-- <div class="putaway_logo cursor" v-if="scope.row.showDelete" @click="admindelGuangGaoJiHua(scope.row.id)">
                                    <div class="ju"><img src="@/assets/img/delete.png" alt=""></div>
                                    <div class="tc">刪除計劃</div>
                                </div> -->
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
        
    </div>
</template>

<script>
import { managerUserDetail, admindelGuangGaoJiHua, adminoffShelf, adminsjGuangGao } from "@/axios/request.js"
export default {
    data () {
        return {
            storeName: localStorage.getItem('storeName'),
            tableHeight:0,
            tableData: [],
            pageNum: 0,
            pageSize: 10,
            storeList: [],
            loading: false,
            totalRecordsCount: 0
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
        admindelGuangGaoJiHua (id) {
            this.loading = true
            let data = {
                guangGaoId: id
            }
            admindelGuangGaoJiHua(data).then(res => {
                this.loading = false
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.$message.success(this.$t('lang.editSuccess'))
                    this.managerUserDetail()
                } else {
                    this.$message.error(res.data.msg)
                }
            }).catch(e => {
                this.loading = false
                this.$message.error(this.$t('lang.editError'))
            })
        },
        toEdit (type, id) {
            if (type == 1 || type == 2) {
                this.$router.push({
                    name: 'editPro',
                    query: {
                        id: id
                    }
                })
            } else if (type == 3) {
                this.$router.push({
                    name: 'editPlus',
                    query: {
                        id: id
                    }
                })
            }
        },
        adminoffShelf (id) {
            this.loading = true
            let data = {
                guangGaoId: id
            }
            adminoffShelf(data).then(res => {
                this.loading = false
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.$message.success(this.$t('lang.editSuccess'))
                    this.managerUserDetail()
                } else {
                    this.$message.error(res.data.msg)
                }
            }).catch(e => {
                this.loading = false
                this.$message.error(this.$t('lang.editError'))
            })
        },
        adminsjGuangGao (id) {
            this.loading = true
            let data = {
                guangGaoId: id
            }
            adminsjGuangGao(data).then(res => {
                this.loading = false
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.$message.success(this.$t('lang.editSuccess'))
                    this.managerUserDetail()
                } else {
                    this.$message.error(res.data.msg)
                }
            }).catch(e => {
                this.loading = false
                this.$message.error(this.$t('lang.editError'))
            })
        },
        managerUserDetail () {
            this.tableData = []
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
                            time: item.guangGaoTimeIntervalDtoList,
                            launchType: item.launchType,
                            outTime: item.startTime.split(' ')[0] + "~" + item.endTime.split(' ')[0], 
                            price: '$' + item.totalPrice + 'HKD', 
                            status: item.guangGaoStateName,
                            content: '查看預覽', 
                            id: item.id,
                            edit: 0,
                            showDelete: item.showDelete,
                            showEdiy: item.showEdiy,
                            showShangJia: item.showShangJia,
                            showXiaJia: item.showXiaJia
                        })
                    })
                    this.totalRecordsCount = res.data.data.totalRecordsCount
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
        preview (val, id) {
            if (val == 1 || val == 2) {
                this.$router.push({
                    name: 'AdminPlanPrePro',
                    query: {
                        id: id
                    }
                })
            } else if (val == 3) {
                this.$router.push({
                    name: 'AdminPlanPlus',
                    query: {
                        id: id
                    }
                })
            }
        },
        resi () {
            let that = this
            this.$nextTick(() => {
                that.tableHeight = window.innerHeight - 207
            })
        },
        handleSizeChange(val) {
            this.pageNum = val
            this.managerUserDetail()
        },
        handleCurrentChange(val) {
            this.pageNum = val
            this.managerUserDetail()
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