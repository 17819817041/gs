<template>
    <div class="AdvertiserManagement AdAdmin" v-loading='loading'>
        <div class="back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" @click="back" alt="">廣告套餐管理
        </div>
        <div class="AdvertiserManagement_content mg bar">
            <div class="AdvertiserManagement_content_title sb al block">
                <div class="flex">
                    <div class="divider"></div>
                    <div class="divider_text">廣告套餐詳細信息管理</div>
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
                        min-width="190"
                        >
                        <template slot="header">
                            套餐名稱
                            <div class="searchInp mg">
                                <el-input
                                class="width100"
                                v-model="search"
                                @input="searchByName"
                                size="mini"
                                placeholder="输入关键字搜索"/>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="company"
                        label="公司名稱"
                        min-width="140"
                        >
                        <template slot="header">
                            廣告所屬行業
                            <div class="searchInp mg">
                               <el-select class="width100" style="height: 28px;" v-model="typeId" placeholder="請選擇類型" @change="comboList">
									<el-option v-for="(item,i) in getTypeList" :key="i"
                                        :label='item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
                                        item.find( res => res.language == "zh-TW").guangGaoTypeName: 
                                        item.find( res => res.language == "en-US").guangGaoTypeName '
                                        :value="item[0].id">
                                    </el-option>
								</el-select>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        label="套餐價格"
                        min-width="150"
                        sortable
                        >
                        <template slot-scope="scope">
                            <span style="color: #6883C1;">{{scope.row.price}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="剛剛套餐到期時間"
                        sortable
                        min-width="175"
                        >
                        <template slot-scope="scope">
                            <span style="color: #6883C1;">{{scope.row.date}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="套餐狀態"
                        min-width="170"
                        >
                        <!-- <template slot-scope="scope">
                            <div class="tc th_color">{{scope.row.endPlan}}</div>
                        </template> -->
                        <template slot="header">
                            套餐狀態
                            <div class="searchInp mg">
                                <el-select class="width100" style="height: 28px;" v-model="outtype" @change="searchByState" placeholder="請選擇類型">
									<el-option label="正常" value="1"></el-option>
									<el-option label="下架" value="2"></el-option>
									<el-option label="已過期" value="3"></el-option>
								</el-select>
                            </div>
                        </template>
                        <template slot-scope="scope">
                            <div v-if="scope.row.status == '1'" class="green">正常</div>
                            <div style="color: red;" 
                            v-else-if="scope.row.status == '3'">已過期</div>
                            <div  style="color: #6883C1;"
                            v-else-if="scope.row.status == '2'">下架</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="userState"
                        label="套餐操作"
                        min-width="250"
                        >
                        <template slot-scope="scope">
                            <div class="sb al">
                                <div class="cursor" style="min-width: 72px;" @click="technology(scope.row.id)">
                                    <div class="ju al"><img class="planEdit"
                                    src="@/assets/img/preview.png" alt=""></div>
                                    <div class="tc size12 bold">預覽套餐信息</div>
                                </div>
                                <div class="cursor" style="min-width: 72px;" v-if="scope.row.showXJ" 
                                @click="down(scope.row)">
                                    <div class="ju al"><img class="planEdit" 
                                    src="@/assets/img/downdv.png" alt=""></div>
                                    <div class="tc size12 bold" style="color: red;">下架套餐</div>
                                </div>
                                <div class="cursor" style="min-width: 72px;" @click="up(scope.row)"
                                v-else-if="scope.row.status == '2' || scope.row.showSJ">
                                    <div class="ju al"><img class="planEdit" 
                                    src="@/assets/img/updv.png" alt=""></div>
                                    <div class="tc size12 bold" style="color: #4DF13E;">重新上架</div>
                                </div>
                                <div class="cursor" style="min-width: 72px;" v-if="scope.row.showEdit" @click="editcombo(scope.row.id)">
                                    <div class="ju al"><img class="planEdit" 
                                    src="@/assets/img/edit.png" alt=""></div>
                                    <div class="tc size12 bold">編輯套餐</div>
                                </div>
                                <div style="width: 72px;" v-else>

                                </div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="footpage flexEnd">
                    <el-pagination
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
        <el-dialog
            :visible.sync="dialogVisible"
            width="30%">
            <div class="flex" style="height: 100%">
                <div class="backimg"><img style="height: 100%;" src="@/assets/img/backimg.png" alt=""></div>
                <div class="auditBtn mg">
                    <div class="ju Logo"><img src="@/assets/img/logo.png" alt=""></div>
                    <div class="gray_text tc"> — 請您確認是否下架 — </div>
                    <div class="result sb mg">
                        <div class="no_wrap cursor" @click="dialogVisible = false">
                            <div class="no ju al"><img style="height: 70%;" src="@/assets/img/no.png" alt=""></div>
                            <div class="no_text tc">取消下架</div>
                        </div>
                        <div class="yes_wrap cursor" @click="combodown">
                            <div class="yes ju al"><img style="height: 70%;" src="@/assets/img/yes.png" alt=""></div>
                            <div class="yes_text tc">繼續下架</div>
                        </div>
                    </div>
                    <div class="plat_f tc">Compoundeyes提供技術支持</div>
                </div>
            </div>
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible1"
            width="30%">
            <div class="flex" style="height: 100%">
                <div class="backimg"><img style="height: 100%;" src="@/assets/img/backimg.png" alt=""></div>
                <div class="auditBtn mg">
                    <div class="ju Logo"><img src="@/assets/img/logo.png" alt=""></div>
                    <div class="gray_text tc"> — 請您確認是否上架 — </div>
                    <div class="result sb mg">
                        <div class="no_wrap cursor" @click="dialogVisible1 = false">
                            <div class="no ju al"><img style="height: 70%;" src="@/assets/img/no.png" alt=""></div>
                            <div class="no_text tc">取消上架</div>
                        </div>
                        <div class="yes_wrap cursor" @click="comboupdate">
                            <div class="yes ju al"><img style="height: 70%;" src="@/assets/img/yes.png" alt=""></div>
                            <div class="yes_text tc">繼續上架</div>
                        </div>
                    </div>
                    <div class="plat_f tc">Compoundeyes提供技術支持</div>
                </div>
            </div>
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible2"
            width="30%">
            <div class="al">
                <el-form label-position="top" class="demo-ruleForm" :model="ruleForm" :rules="rules" ref="ruleForm">
                    <el-form-item label="請選擇套餐開始時間" prop="start">
                        <el-date-picker
                            v-model="ruleForm.start"
                            type="date"
                            :placeholder="$t('lang.sdate')"
                            :picker-options="pickerOptions1">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="請選擇套餐結束時間" prop="end">
                        <el-date-picker
                            v-model="ruleForm.end"
                            type="date"
                            :placeholder="$t('lang.enddate')"
                            :picker-options="pickerOptions2"
                            >
                        </el-date-picker>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false" size="small">取 消</el-button>
                <el-button type="primary" @click="goUp" size="small">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { comboList, comboupdate, combodown } from "@/axios/request.js"
export default {
    data () {
        return {
            tableHeight:0,
            dialogVisible: false,
            dialogVisible1: false,
            dialogVisible2: false,
            outtype: '',
            search: '',
            typeId: '',
            pageNum: 0,
            pageSize: 10,
            tableData:[],
            combo: [],
            loading: false,
            pickerOptions: {
              shortcuts: [{
                  text: '最近一周',
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                  }
                  }, {
                    text: '最近一个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                      picker.$emit('pick', [start, end]);
                    }
                  }, {
                    text: '最近三个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                      picker.$emit('pick', [start, end]);
                    }
                }]
            },
			pickerOptions1: {
                disabledDate: (time) => {
                    if (this.ruleForm.startDate != "") {
                        return time.getTime() < Date.now() || time.getTime() < this.ruleForm.startDate;
                    } else {
                        return time.getTime() < Date.now();
                    }
                }
            },
            pickerOptions2: {
                disabledDate: (time) => {
                    return time.getTime() < this.ruleForm.startDate || time.getTime() < Date.now() + 8.64e7;
                }
            },

            ruleForm: {
                start: '',
                end: ''
            },
            rules: {
                start: [
                    { type:'date', required: true, message: '請選擇開始日期', trigger: 'change' }
                ],
				end: [
                    { type: 'date', required: true, message: '請選擇結束日期', trigger: 'change' }
                ],
            },

            adId: null,
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
        this.comboList()
        this.$store.dispatch('getTypeList',this)
    },
    watch: {
        getTypeList: {
			handler (val) {
				if (val) {
					this.getTypeList = val
					
				}
			},
		} 
    },
    computed: {
        getTypeList:{             //類型列表
			get () { return this.$store.state.user.typeList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'typeList',
					value: val
				})
			}
		}
    },
    methods: {
        comboList () {
            this.tableData = []
            this.loading = true
            let data = {
                packageName: this.search,
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                typeId: this.typeId,
                state: this.outtype
            }
            comboList(data).then(res => {
                this.loading = false
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.combo = res.data.data.pageT
                    res.data.data.pageT.forEach(item => {
                        this.tableData.push({
                            name:item.packageName,
                            company: item.typeName,
                            price: item.price, 
                            date: item.endTime.split(' ')[0],
                            status: item.state, 
                            userState: 1, 
                            detail: '',
                            id: item.id,
                            showEdit: item.showEdit,
                            showSJ: item.showSJ,
                            showXJ: item.showXJ
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
        comboupdate () {       //up
            this.dialogVisible1 = false
            this.loading = true
            let data = { 
                endTime: String(new Date(this.ruleForm.end).toLocaleDateString().split('/').join('-')),
                packageId: this.adId,
                startTime: String(new Date(this.ruleForm.start).toLocaleDateString().split('/').join('-'))
            }
            comboupdate(data).then(res => {
                this.loading = false
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: '重新上架成功'
                    })
                    this.comboList()
                } else {
                    this.$message({
                        type: 'error',
                        message: '重新上架失敗'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: '重新上架失敗'
                })
            })
        },
        combodown () {             //down
            this.loading = true
            let data = {
                packageId: this.adId
            }
            combodown(data).then(res => {
                this.loading = false
                this.dialogVisible = false
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: '下架成功'
                    })
                    this.comboList()
                } else {
                    this.$message({
                        type: 'error',
                        message: '下架失敗'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: '下架失敗'
                })
            })
        },
        searchByName (val) {
            let that = this
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                that.comboList()
            },500)
        },
        searchByState () {
            this.comboList()
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
        technology (id) {
            this.$router.push({
                name: 'technology',
                query: {
                    id: id
                }
            })
        },
        up (val) {
            this.adId = val.id
            this.dialogVisible2 = true

        },
        down (val) {
            this.adId = val.id
            this.dialogVisible = true
        },
        goUp () {
            this.$refs.ruleForm.validate(flag => {
                if (flag) {
                    this.dialogVisible2 = false,
                    this.dialogVisible1 = true
                }
            })
        },
        editcombo (id) {
            this.$router.push({
                name: 'editcombo',
                query: {
                    id: id
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
@import "@/less/style.less";
    .backimg {
        @media screen and (max-width: 600px) {
			display: none;
		}
    }
    .auditBtn {
        min-width: 289.19px;
        margin: 0 45px;
        @media screen and (max-width: 600px) {
			width: 85%;
		}
    }
    .Logo {
        height: 45px;
        img {
            width: 200px;
            height: 70px;
        }
    }
    .gray_text {
        color: rgb(204, 204, 204);
        font-size: 13px;
        margin-top: 48px;
        margin-bottom: 15px;
    }
    .result {
        width: 94%;
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
    .green {
        color: rgb(38, 136, 38);
    }
</style>