<template>
    <div class="UserDetailEdit" v-loading='loading'>
        <div class="back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" @click="back" alt="">賬戶詳細管理
        </div>
        <div class="AdvertiserManagement_content mg bar">
            <div class="AdvertiserManagement_content_title sb al block">
                <div class="flex">
                    <div class="divider"></div>
                    <div class="divider_text">{{name}}</div>
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
                            <div class="ju" v-else-if="scope.row.edit == 'editState'">
                                <div class="cursor" @click="dialogVisible2 = true">
                                    <div class="ju"><img class="planEdit cursor" src="@/assets/img/editState.png" alt=""></div>
                                    <div class="tc" style="color: #EF435A;font-size: 12px;">編輯狀態</div>
                                </div>
                            </div>
                            <div class="ju" v-else-if="scope.row.edit == 'editName'">
                                <div class="cursor" @click="dialogVisible = true">
                                    <div class="ju"><img class="planEdit cursor" src="@/assets/img/edit.png" alt=""></div>
                                    <div class="tc" style="font-size: 12px;">編輯名稱</div>
                                </div>
                            </div>
                            <div class="ju" v-else-if="scope.row.edit == 'editPhone'">
                                <div class="cursor" @click="dialogVisible1 = true">
                                    <div class="ju"><img class="planEdit cursor" src="@/assets/img/edit.png" alt=""></div>
                                    <div class="tc" style="font-size: 12px;">編輯電話</div>
                                </div>
                            </div>
                            <div class="ju" v-else-if="scope.row.edit == 'editEmail'">
                                <div class="cursor" >
                                    <div class="ju"><img class="planEdit cursor" src="@/assets/img/edit.png" alt=""></div>
                                    <div class="tc" style="font-size: 12px;">編輯電郵</div>
                                </div>
                            </div>
                            <div class="ju" v-else-if="scope.row.edit == 'reset'">
                                <el-popconfirm
                                        title="確定重置密碼嗎？"
                                        @confirm='resetPwd'
                                        >
                                    <div class="cursor" slot="reference">
                                        <div class="ju"><img class="planEdit cursor" src="@/assets/img/reset.png" alt=""></div>
                                        <div class="tc" style="color: #EF435A;font-size: 12px;">重置密碼</div>
                                    </div>    
                                </el-popconfirm>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <el-dialog
            title="編輯公司名稱"
            :visible.sync="dialogVisible"
            width="30%">
            <div>
                <el-form :model="ruleForm" label-position="top" 
					:rules="rules" ref="ruleForm">
                    <el-form-item prop="input">
                        <el-input v-model="ruleForm.input" @keyup.enter.native="updateCompany" placeholder="請輸入新的名稱"></el-input>
                    </el-form-item>
                </el-form>
                
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                <el-button type="primary" size="small" @click="updateCompany">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="編輯聯繫電話"
            :visible.sync="dialogVisible1"
            width="30%">
            <div>
                <el-form :model="ruleForm1" label-position="top" 
					:rules="rules1" ref="ruleForm">
                    <el-form-item prop="input">
                        <el-input v-model="ruleForm1.input" @keyup.enter.native="updatePhone" placeholder="請輸入新的聯繫電話"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                <el-button type="primary" size="small" @click="updateCompany">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="編輯用戶狀態"
            :visible.sync="dialogVisible2"
            width="90%">
            <el-radio-group v-model="radio" size="small" class="width100 dju">
                <el-radio label="1" border class="width40">正常</el-radio>
                <el-radio label="2" border class="width40">停用</el-radio>
            </el-radio-group>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                <el-button type="primary" size="small" @click="updateState">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { storeEdit, resetPwd, updateCompany, updatePhone1, updateState } from "@/axios/request.js"
export default {
    data () {
        return {
            tableData:[],
            name: '',
            loading: false,

            dialogVisible: false,
            ruleForm: {
                input: ''
            },
            rules: {
                input: [
                    { required: true, message: '請輸入名稱', trigger: 'blur' },
                    { min: 2, max: 10, message: '長度需2 到 10 個字符', trigger: 'blur' }
                ],
            },

            dialogVisible1: false,
            ruleForm1: {
                input: ''
            },
            rules1: {
                input: [
                    { required: true, message: '請輸入新的聯繫電話', trigger: 'blur' },
                    // { min: 2, max: 10, message: '長度需2 到 10 個字符', trigger: 'blur' }
                ],
            },

            radio: '1',
            dialogVisible2: false
            
        }
    },
    created () {
        this.storeEdit()
    },
    methods: {
        storeEdit () {
            this.loading = true
            let data = {
                userId: this.$route.query.key
            }
            storeEdit(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    let obj = res.data.data
                    this.name = obj.username
                    this.tableData = []
                    this.tableData.push({ message: '姓名', name: obj.username, edit: 'name' })
                    this.tableData.push({ message: '客戶狀態', name: obj.userState, edit: 'editState' })
                    this.tableData.push({ message: '公司名稱', name: obj.company, edit: 'editName' })
                    this.tableData.push({ message: '聯絡電話', name: obj.phone, edit: 'editPhone' })
                    this.tableData.push({ message: '郵箱地址', name: obj.email, edit: 'editEmail' })
                    this.tableData.push({ message: '賬戶密碼', name: '******', edit: 'reset' })
                }
            }).catch(e => {
                this.loading = false
            })
        },
        resetPwd () {
            this.loading = true
            let data = {
                userId: this.$route.query.key
            }
            resetPwd(data).then(res => {
                this.loading = false
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: '重置密碼成功'
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
                    message: '請求錯誤'
                })
            })
        },
        updateCompany () {
            this.$refs.ruleForm.validate(flag => {
                if (flag) { 
                    this.loading = true
                    let data = {
                        userId: this.$route.query.key,
                        companyName: this.ruleForm.input
                    }
                    updateCompany(data).then(res => {
                        this.dialogVisible = false
                        this.loading = false
                        if (res.data.rtnCode == 200) {
                            
                            this.$message({
                                type: 'success',
                                message: '修改完成'
                            })
                            this.storeEdit()
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
                            message: this.$t('lang.editError')
                        })
                    })
                }
            })
        },
        updatePhone () {
            this.loading = true
            let data = {
                userId: this.$route.query.key,
                phone: this.ruleForm1.input
            }
            updatePhone1(data).then(res => {
                console.log(res)
                this.dialogVisible1 = false
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: '修改完成'
                    })
                    this.storeEdit()
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
                    message: this.$t('lang.editError')
                })
            })
        },
        updateState () {
            this.loading = true
            let data = {
                userId: this.$route.query.key,
                state: this.radio
            }
            updateState(data).then(res => {
                console.log(res)
                this.dialogVisible2 = false
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: '修改完成'
                    })
                    this.storeEdit()
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
                    message: this.$t('lang.editError')
                })
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
        UserDetailEdit () {
            this.$router.push('/UserDetailEdit')
        }
    }
}
</script>

<style lang='less' scoped>
@import "@/less/style.less";
    .width40 {
        width: 42% !important;
        text-align: center !important;
        margin: 0 !important;
    }
    .dju {
        display: flex !important;
        justify-content: space-around !important;
    }
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
        height: calc(100% - 34px);
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