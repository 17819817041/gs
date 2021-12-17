<template>
    <div class="StoreAdministrator" v-loading='loading'>
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">店鋪管理
        </div>
        <div class="StoreAdministrator_content mg bar">
            <div class="StoreAdministrator_content_title sb al block">
                <div class="flex">
                    <div class="divider"></div>
                    <div class="divider_text">店鋪詳細信息管理</div>
                </div>
            </div>
            <div class="StoreAdministrator_table">
                <el-table :row-class-name="tableRowClassName" 
                    :header-cell-style="{ background: '#E4E4E5', 'text-align': 'center' }"
                    :data="tableData"
                    style="width: 100%"
                    :max-height="tableHeight"
                    >
                    <el-table-column
                        fixed
                        prop="name"
                        label="店鋪名稱"
                        min-width="180"
                        >
                        <template slot="header">
                            店鋪名稱
                            <div class="searchInp mg">
                                <el-input
                                class="width100"
                                v-model="search"
                                size="mini" @input="searchByName"
                                placeholder="输入关键字搜索"/>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="店鋪類型"
                        min-width="180"
                        >
                        <template slot="header">
                            店鋪類型
                            <div class="searchInp mg">
                                <el-select class="width100" style="height: 28px;" v-model="type" placeholder="請選擇類型" @change="searchByType">
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
                        prop="area"
                        label="店鋪區域"
                        min-width="170"
                        >
                        <template slot="header">
                            店鋪區域
                            <div class="searchInp mg">
                                <el-select class="width100" style="height: 28px;" v-model="area" placeholder="請選擇區域" @change="searchByArea">
                                    <el-option v-for="(item,i) in addressList" :key="i"
                                        :label='item.addressLanguageDtos.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
                                        item.addressLanguageDtos.find( res => res.language == "zh-TW").addressName: 
                                        item.addressLanguageDtos.find( res => res.language == "en-US").addressName '
                                        :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="ratio"
                        label="接收外來廣告比例"
                        sortable
                        min-width="190"
                        >
                        <template slot-scope="scope">
                            <div class="ju al th_color">
                                {{scope.row.ratio}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="gtime"
                        label="接收外來廣告時段"
                        min-width="250"
                        >
                        <template slot="header">
                            接收外來廣告時段
                            <div class="mg" style="margin-top: 10px; width: 200px">
                                <el-select class="width100" style="height: 28px;" v-model="timeIntervalId" placeholder="請選擇區域" @change="searchByTime">
                                    <!-- <el-option label="繁忙時段(9am - 9pm)" value="繁忙時段(9am - 9pm)"></el-option>
                                    <el-option label="非繁忙時段(9pm - 9am)" value="非繁忙時段(9pm - 9am)"></el-option> -->

                                    <el-option v-for="(item,i) in getTimeIntervalList" :key='i'
                                    :label="item.timeIntervalName" :value="item.timeIntervalId"></el-option>
                                </el-select>
                            </div>
                        </template>
                        <template slot-scope="scope">
                            <div class="">
                                <div class="th_color tc" v-for="(item,i) in scope.row.gtime" :key="i">
                                    <span v-if="item">{{item}}</span>
                                    <span v-else>無</span>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="gtype"
                        label="接受外來廣告類型"
                        min-width="160"
                        >
                        <template slot="header">
                            接受外來廣告類型
                            <div class="searchInp mg">
                                <el-select class="width100" style="height: 28px;" v-model="outtype" placeholder="請選擇類型">
									<el-option v-for="(item,i) in getTypeList" :key="i"
                                        :label='item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
                                        item.find( res => res.language == "zh-TW").guangGaoTypeName: 
                                        item.find( res => res.language == "en-US").guangGaoTypeName '
                                        :value="item[0].id">
                                    </el-option>
								</el-select>
                            </div>
                        </template>
                        <template slot-scope="scope">
                            <div class="tc th_color" v-for="(item,i) in scope.row.gtype" :key='i'>
                                <span v-if="item">{{item}}</span>
                                <span v-else>無</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="detail"
                        label="店鋪詳細設定操作"
                        min-width="250"
                        >
                        <template slot-scope="scope">
                            <div class="sb al">
                                <div class="cursor" @click="PreviewMsg(scope.row.shopId)">
                                    <div class="ju al"><img class="planEdit" src="@/assets/img/preview.png" alt=""></div>
                                    <div class="tc size12">預覽全部資料</div>
                                </div>
                                <div class="cursor" @click="StoreSet">
                                    <div class="ju al"><img class="planEdit" src="@/assets/img/plat.png" alt=""></div>
                                    <div class="tc size12">店鋪資料設定</div>
                                </div>
                                <div class="cursor" @click="StoreUserSet(scope.row.shopId)">
                                    <div class="ju al"><img class="planEdit" src="@/assets/img/userDetail.png" alt=""></div>
                                    <div class="tc size12">店鋪賬戶設定</div>
                                </div>
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
import { getShopListpage } from "@/axios/request.js"
export default {
    data () {
        return {
            loading: false,
            tableHeight:0,
            type: '',
            outtype: '',
            area: '',
            search: '',
            time: '',
            search1: '',
            tableData:[
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '繁忙時段(9am - 9pm)', unbusy: '非繁忙時段(9pm - 9am)'},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '繁忙時段(9am - 9pm)', unbusy: ''},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '', unbusy: '非繁忙時段(9pm - 9am)'},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '繁忙時段(9am - 9pm)', unbusy: '非繁忙時段(9pm - 9am)'},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '繁忙時段(9am - 9pm)', unbusy: ''},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '', unbusy: '非繁忙時段(9pm - 9am)'},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '繁忙時段(9am - 9pm)', unbusy: '非繁忙時段(9pm - 9am)'},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '繁忙時段(9am - 9pm)', unbusy: ''},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '', unbusy: '非繁忙時段(9pm - 9am)'},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '繁忙時段(9am - 9pm)', unbusy: '非繁忙時段(9pm - 9am)'},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '繁忙時段(9am - 9pm)', unbusy: ''},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '', unbusy: '非繁忙時段(9pm - 9am)'},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '繁忙時段(9am - 9pm)', unbusy: '非繁忙時段(9pm - 9am)'},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '繁忙時段(9am - 9pm)', unbusy: ''},gtype: '美食，生活', detail: ''},
                {name:'Jordan Cheung',type: '美食',area: '九龍', ratio: '80%',gtime: {busy: '', unbusy: '非繁忙時段(9pm - 9am)'},gtype: '美食，生活', detail: ''},
            ],

            timer: null,
            pageNum: 0,
            pageSize: 10,
            timeIntervalId: ''
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
        this.$store.dispatch('getAddress',this) 
        this.$store.dispatch('getTypeList',this)
        this.$store.dispatch('getTimeIntervalList')
        this.getShopList()
    },
    watch: {
		addressList: {
			handler (val) {
				if (val) {
					this.addressList = val
				}
			}
		},
		getTypeList: {
			handler (val) {
				if (val) {
					this.getTypeList = val
				}
			},
		},
        getTimeIntervalList: {
			handler (val) {
				if (val) {
					this.getTimeIntervalList = val
				}
			},
		},
	},
	computed: {
		addressList: {           //地址列表
			get () { return this.$store.state.user.addressList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'addressList',
					value: val
				})
			}
		},
        getTypeList:{             //類型列表
			get () { return this.$store.state.user.typeList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'typeList',
					value: val
				})
			}
		},
        getTimeIntervalList:{             //類型列表
			get () { return this.$store.state.user.busyTimeList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'busyTimeList',
					value: val
				})
			}
		},
	},
    methods: {
        searchByName (val) {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.getShopList()
            }, 1000)
        },
        searchByArea (val) {
            this.getShopList()
        },
        searchByType () {
            this.getShopList()
        },
        searchByTime () {
            this.getShopList()
        },
        getShopList () {
            this.loading = true
            this.tableData = []
            let data = {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                parentAddressId: this.area,
                shopName: this.search,
                timeIntervalId: this.timeIntervalId,
                typeId: this.type
            }
            getShopListpage(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    res.data.data.pageT.forEach(item => {
                        this.tableData.push({
                            name: item.name,
                            type: item.type,
                            area: item.addressRegion, 
                            ratio: '100%',
                            gtime: item.timeIntervalNames,
                            gtype: item.typeNams, 
                            detail: '',
                            shopId: item.shopId
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
        back () {
            this.$router.back()
        },
        tableRowClassName ({ row,rowIndex }) {
            if (rowIndex%2 == 1) {
                return 'el_color'
            }
            return ''
        },
        StoreSet () {
            this.$router.push('/StoreSet')
        },
        PreviewMsg (id) {
            this.$router.push({
                name: 'PreviewMsg',
                query: {
                    id: id
                }
            })
        },
        StoreUserSet (id) {
            this.$router.push({
                name: 'StoreUserSet',
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
    .StoreAdministrator {
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
    .StoreAdministrator_content {
        width: 98%;
        overflow: auto;
        height: calc(100% - 34px);
        box-shadow: 0 0 5px #acacac inset;
        padding: 4px;
        margin-top: 15px;
    }
    .StoreAdministrator_content_title {
        padding: 7px 15px;
        background: #f5f5f5;
        @media screen and (max-width: 677px) {
            display: block;
        }
    }
    .StoreAdministrator_table {
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
        width: 155px;
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
        width: 20px;
        height: 20px;
    }
    .th_color {
        color: #7868C1;
    }
</style>