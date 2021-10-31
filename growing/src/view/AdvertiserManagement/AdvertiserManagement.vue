<template>
    <div class="AdvertiserManagement">
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">廣告收入統計
        </div>
        <div class="AdvertiserManagement_content mg bar">
            <div class="AdvertiserManagement_content_title sb al block">
                <div class="flex">
                    <div class="divider"></div>
                    <div class="divider_text">店鋪廣告收入統計</div>
                </div>
            </div>
            <div class="AdvertiserManagement_table">
                <el-table :row-class-name="tableRowClassName" 
                    :header-cell-style="{ background: '#E4E4E5', 'text-align': 'center' }"
                    :data="tableData"
                    style="width: 100%"
                    height="95%"
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
                        min-width="130"
                        >
                        <template slot-scope="scope">
                            <div class="tc th_color">{{scope.row.endPlan}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="plan"
                        label="管理廣告計劃"
                        min-width="130"
                        >
                        <template>
                            <div class="ju al"><img class="planEdit" src="@/assets/img/planEdit.png" alt=""> </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="userState"
                        label="賬戶狀態"
                        sortable=""
                        min-width="100"
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
                        min-width="105"
                        >
                        <template slot-scope="scope">
                            <div class="ju al"><img class="planEdit cursor" @click="UserDetailEdit(scope.row)" src="@/assets/img/userDetail.png" alt=""> </div>
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
            search: '',
            search1: '',
            tableData:[
                {name:'Jordan Cheung',company: 'XXXcompany',phone: '+852 123456', email: 'kkk@qq,com',endPlan:'2021-10-26',plan: '', userState: 1, detail: ''},
                {name:'Jordan Cheung',company: 'XXXcompany',phone: '+852 123456', email: 'kkk@qq,com',endPlan:'無',plan: '', userState: 2, detail: ''},
                {name:'Jordan Cheung',company: 'XXXcompany',phone: '+852 123456', email: 'kkk@qq,com',endPlan:'2021-10-26',plan: '', userState: 1, detail: ''},
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
        UserDetailEdit (item) {
            localStorage.setItem('userDetail',JSON.stringify(item))
            this.$router.push({
                name: 'UserDetailEdit',
                query: {
                    key: item
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
        height: calc(100% - 50px);
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
</style>