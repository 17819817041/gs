<template>
    <div class="AdvertiserManagement" v-loading='loading'>
        <div class="back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" @click="back" alt="">廣告商管理
        </div>
        <div class="AdvertiserManagement_content mg bar">
            <div class="AdvertiserManagement_content_title sb al block">
                <div class="flex">
                    <div class="divider"></div>
                    <div class="divider_text">廣告商詳細信息管理</div>
                </div>
            </div>
            <div class="AdvertiserManagement_table">
                <el-table :row-class-name="tableRowClassName" 
                    :header-cell-style="{ background: '#E4E4E5', 'text-align': 'center' }"
                    :data="tableData"
                    style="width: 100%"
                    :max-height="tableHeight"
                    >
                    <el-table-column
                        fixed
                        prop="name"
                        label="廣告商姓名"
                        min-width="150"
                        >
                        <template slot="header">
                            廣告商姓名
                            <div class="searchInp mg">
                                <el-input
                                class="width100"
                                v-model="search"
                                @input="searchName"
                                size="mini"
                                placeholder="输入关键字搜索"/>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="company"
                        label="公司名稱"
                        min-width="190"
                        >
                        <template slot="header">
                            公司名稱
                            <div class="searchInp mg">
                                <el-input
                                class="width100"
                                v-model="search1"
                                @input="searchCompanyName"
                                size="mini"
                                placeholder="输入关键字搜索"/>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="phone"
                        label="聯繫電話"
                        min-width="130"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="email"
                        label="電郵地址"
                        min-width="170"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="endPlan"
                        sortable
                        label="最近計劃到期日"
                        min-width="170"
                        >
                        <template slot-scope="scope">
                            <div class="tc th_color" v-if="scope.row.endPlan !== null">{{scope.row.endPlan}}</div>
                            <div class="tc th_color" v-else>無</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="plan"
                        label="管理廣告計劃"
                        min-width="130"
                        >
                        <template slot-scope="scope">
                            <div class="ju al"><img class="planEdit cursor" @click="AdminPlan(scope)" src="@/assets/img/planEdit.png" alt=""> </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="userState"
                        label="賬戶狀態"
                        sortable=""
                        min-width="160"
                        >
                        <template slot-scope="scope">
                            <div class="ju al">
                                <span style="color: #1EF70E;" v-if="scope.row.userState == 1">正常</span>
                                <span style="color: #FF0000;" v-else-if="scope.row.userState == 2">停用</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="detail"
                        label="賬戶詳情管理"
                        min-width="125"
                        >
                        <template slot-scope="scope">
                            <div class="ju al"><img class="planEdit cursor" @click="UserDetailEdit(scope.row)" src="@/assets/img/userDetail.png" alt=""> </div>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="footpage flexEnd">
                    <el-pagination
                        small
                        :pager-count="5"
                        :current-page="tableData.length"
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
import { getGuangGaoUser } from "@/axios/request.js"
export default {
    data () {
        return {
            tableHeight:0,
            search: '',
            search1: '',
            pageNum: 0,
            pageSize: 10,
            tableData:[],
            loading: false,
            timer: null
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
        this.getGuangGaoUser()
    },
    methods: {
        getGuangGaoUser () {
            this.tableData = []
            this.loading = true
            let data = {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                name: this.search,
                companyName: this.search1
            }
            getGuangGaoUser(data).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    res.data.data.pageT.forEach(item => {
                        this.tableData.push({
                            name: item.userName,
                            company: item.companyName,
                            phone: item.phone, 
                            email: item.email,
                            id: item.userId,
                            endPlan: item.firstTimeGuangGao,
                            plan: '', 
                            userState: item.usersState, 
                            detail: ''
                        })
                    })
                } else {
                    this.$message({
                        type: 'error',
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
        searchName () {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.getGuangGaoUser()
            },500)  
        },
        searchCompanyName () {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.getGuangGaoUser()
            },500)  
        },
        resi () {
            let that = this
            this.$nextTick(() => {
                that.tableHeight = window.innerHeight - 210
            })
        },
        back () {
            this.$router.back()
        },
        tableRowClassName ({ row,rowIndex }) {
            if (rowIndex%2 == 1) {
                return 'el_color'
            }
            return ''
        },
        UserDetailEdit (item) {
            this.$router.push({
                name: 'UserDetailEdit',
                query: {
                    key: item.id
                }
            })
        },
        AdminPlan (scope) {
            localStorage.setItem('storeName',scope.row.name)
            this.$router.push({
                name: 'AdminPlan',
                query: {
                    id: scope.row.id
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
@import "@/less/style.less";
    .AdvertiserManagement {
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
    .AdvertiserManagement_content {
        width: 98%;
        overflow: auto;
        height: calc(100% - 40px);
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
    .AdvertiserManagement_table {
        height: calc(100% - 36px);
        overflow: auto;
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
</style>