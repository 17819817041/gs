<template>
    <div class="UserDetailEdit">
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">賬戶詳細管理
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
                        prop="message"
                        label="賬戶詳細信息"
                        min-width="170"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="賬戶詳細信息"
                        min-width="190"
                        >
                        <template slot-scope="scope">
                            <div v-if="scope.row.name == 1" class="can">正常</div>
                            <div v-else-if="scope.row.name == 2" class="cant">停用</div>
                            <div v-else>{{scope.row.name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="edit"
                        label="操作"
                        min-width="105"
                        >
                        <template slot-scope="scope">
                            <div class="ju al"  v-if="scope.row.edit == 'name'"></div>
                            <div class="" v-else-if="scope.row.edit == 'editState'">
                                <div class="ju"><img class="planEdit cursor" src="@/assets/img/editState.png" alt=""></div>
                                <div class="tc" style="color: #EF435A;font-size: 12px;">編輯狀態</div>
                            </div>
                            <div class="" v-else-if="scope.row.edit == 'editName'">
                                <div class="ju"><img class="planEdit cursor" src="@/assets/img/edit.png" alt=""></div>
                                <div class="tc" style="font-size: 12px;">編輯名稱</div>
                            </div>
                            <div class="" v-else-if="scope.row.edit == 'editPhone'">
                                <div class="ju"><img class="planEdit cursor" src="@/assets/img/edit.png" alt=""></div>
                                <div class="tc" style="font-size: 12px;">編輯電話</div>
                            </div>
                            <div class="" v-else-if="scope.row.edit == 'editEmail'">
                                <div class="ju"><img class="planEdit cursor" src="@/assets/img/edit.png" alt=""></div>
                                <div class="tc" style="font-size: 12px;">編輯電郵</div>
                            </div>
                            <div class="" v-else-if="scope.row.edit == 'reset'">
                                <div class="ju"><img class="planEdit cursor" src="@/assets/img/reset.png" alt=""></div>
                                <div class="tc" style="color: #EF435A;font-size: 12px;">重置密碼</div>
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
            tableData:[],
        }
    },
    created () {
        var obj = JSON.parse(localStorage.getItem('userDetail'))
        this.tableData.push({ message: '姓名', name: obj.name, edit: 'name' })
        this.tableData.push({ message: '客戶狀態', name: obj.userState, edit: 'editState' })
        this.tableData.push({ message: '公司名稱', name: obj.company, edit: 'editName' })
        this.tableData.push({ message: '聯絡電話', name: obj.phone, edit: 'editPhone' })
        this.tableData.push({ message: '郵箱地址', name: obj.email, edit: 'editEmail' })
        this.tableData.push({ message: '賬戶密碼', name: '123456', edit: 'reset' })
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
        UserDetailEdit () {
            this.$router.push('/UserDetailEdit')
        }
    }
}
</script>

<style lang='less' scoped>
@import "@/less/style.less";
    .UserDetailEdit {
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
    .divider {
        width: 0;
        margin-right: 5px;
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
    .cant {
        color: #FF0000;
    }
    .can {
        color: #1EF70E;
    }
</style>