<template>
    <div class="AdvertiserManagement AdAdmin">
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">廣告商管理
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
                               <el-select class="width100" style="height: 28px;" v-model="select" placeholder="請選擇類型">
									<el-option label="食品" value="食品"></el-option>
									<el-option label="科技" value="科技"></el-option>
									<el-option label="醫療" value="醫療"></el-option>
									<el-option label="汽車" value="汽車"></el-option>
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
                                <el-select class="width100" style="height: 28px;" v-model="outtype" placeholder="請選擇類型">
									<el-option label="正常" value="1"></el-option>
									<el-option label="已過期" value="2"></el-option>
									<el-option label="下架" value="3"></el-option>
								</el-select>
                            </div>
                        </template>
                        <template slot-scope="scope">
                            <div v-if="scope.row.status == '1'" class="green">正常</div>
                            <div style="color: red;" 
                            v-else-if="scope.row.status == '2'">已過期</div>
                            <div  style="color: #6883C1;"
                            v-else-if="scope.row.status == '3'">下架</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="userState"
                        label="套餐操作"
                        min-width="300"
                        >
                        <template slot-scope="scope">
                            <div class="sb al">
                                <div class="cursor" @click="technology">
                                    <div class="ju al"><img class="planEdit"
                                    src="@/assets/img/preview.png" alt=""></div>
                                    <div class="tc size12 bold">預覽套餐信息</div>
                                </div>
                                <div class="cursor" v-if="scope.row.status == '1'" 
                                @click="dialogVisible = true">
                                    <div class="ju al"><img class="planEdit" 
                                    src="@/assets/img/downdv.png" alt=""></div>
                                    <div class="tc size12 bold" style="color: red;">下架套餐</div>
                                </div>
                                <div class="cursor"  @click="dialogVisible1 = true"
                                v-else-if="scope.row.status == '2' || scope.row.status == '3'">
                                    <div class="ju al"><img class="planEdit" 
                                    src="@/assets/img/updv.png" alt=""></div>
                                    <div class="tc size12 bold" style="color: #4DF13E;">重新上架</div>
                                </div>
                                <div class="cursor" v-if="scope.row.status == '2' || scope.row.status == '3'">
                                    <div class="ju al"><img class="planEdit" 
                                    src="@/assets/img/edit.png" alt=""></div>
                                    <div class="tc size12 bold">編輯套餐</div>
                                </div>
                                <div style="width: 48px;" v-else>

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
                        <div class="no_wrap">
                            <div class="no ju al"><img style="height: 70%;" src="@/assets/img/no.png" alt=""></div>
                            <div class="no_text tc">取消下架</div>
                        </div>
                        <div class="yes_wrap">
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
                        <div class="no_wrap">
                            <div class="no ju al"><img style="height: 70%;" src="@/assets/img/no.png" alt=""></div>
                            <div class="no_text tc">取消上架</div>
                        </div>
                        <div class="yes_wrap">
                            <div class="yes ju al"><img style="height: 70%;" src="@/assets/img/yes.png" alt=""></div>
                            <div class="yes_text tc">繼續上架</div>
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
            tableHeight:0,
            dialogVisible: false,
            dialogVisible1: false,
            outtype: '',
            search: '',
            select: '',
            tableData:[
                {
                    name:'旺角街道高流量商鋪剛剛套餐',company: '美食',
                    price: 'HK$39999', date: '2021-12-5',
                    status: 1, userState: 1, 
                    detail: ''
                },
                {
                    name:'旺角街道高流量商鋪剛剛套餐',company: '美食',
                    price: 'HK$39999', date: '2021-12-5',
                    status: 2, userState: 1, 
                    detail: ''
                },
                {
                    name:'旺角街道高流量商鋪剛剛套餐',company: '美食',
                    price: 'HK$39999', date: '2021-12-5',
                    status: 3, userState: 1, 
                    detail: ''
                },
                {
                    name:'旺角街道高流量商鋪剛剛套餐',company: '美食',
                    price: 'HK$39999', date: '2021-12-5',
                    status: 1, userState: 1, 
                    detail: ''
                },
                {
                    name:'旺角街道高流量商鋪剛剛套餐',company: '美食',
                    price: 'HK$39999', date: '2021-12-5',
                    status: 1, userState: 1, 
                    detail: ''
                },
                {
                    name:'旺角街道高流量商鋪剛剛套餐',company: '美食',
                    price: 'HK$39999', date: '2021-12-5',
                    status: 1, userState: 1, 
                    detail: ''
                },
            ],
        }
    },
    mounted () {
        let that = this
        window.addEventListener("resize",function(){
            that.resi()
        });
        this.resi()
    },
    methods: {
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
        technology () {
            this.$router.push('/technology')
        },
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
        // padding: 20px 0;
        width: 45%;
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