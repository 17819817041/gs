<template>
    <div class="PlatSetting" v-loading='loading'>
        <div class="back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" @click="back" alt="">店鋪詳細設定
        </div>
        <div class="Settingadvertising_content_wrap noBar">
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title" @click="drawer4 = !drawer4">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">所有店鋪設定</div>
                        </div>
                        <div class="flex">
                            <div class="arrow_m al" @click.stop="drawer4 = !drawer4"><img :class="['cursor',{ rotate: drawer4 }]" src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="['drawer_h', {'drawer_h1': drawer4}]">
                        <el-table :row-class-name="tableRowClassName" max-height="300" 
                            :header-cell-style="{ background: '#E4E4E5', 'text-align': 'center' }"
                            :data="tableData"
                            style="width: 100%"
                            >
                            <el-table-column
                                fixed
                                prop="d_name"
                                label="店鋪名稱"
                                min-width="150"
                                >
                                <template slot="header">
                                    店鋪名稱
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
                                prop="d_type"
                                label="店鋪類型"
                                min-width="190"
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
                                prop="d_area"
                                label="店鋪區域"
                                min-width="150"
                                >
                                <template slot="header">
                                    店鋪區域
                                    <div class="searchInp mg">
                                        <el-select class="width100" style="height: 28px;" v-model="area" placeholder="請選擇類型" @change="searchByArea"> 
                                            <el-option v-for="(item,i) in addressList" :key="i"
                                                :label='item.addressName '
                                                :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="d_time"
                                sortable
                                label="接收外來廣告時段"
                                min-width="190"
                                >
                                <template slot-scope="scope">
                                    <div class="tc th_color">
                                        <div v-for="(item,i) in scope.row.d_time" :key="i">{{item}}</div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="d_detail"
                                label="店鋪詳細計劃"
                                min-width="105"
                                >
                                <template slot-scope="scope">
                                    <div class="ju al cursor" style="padding: 15px 20px;" 
                                    @click="activeAd(scope.row.shopId)"><img class="planEdit" src="@/assets/img/planEdit.png" alt=""> </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="d_state"
                                sortable
                                label="審核狀態"
                                min-width="130"
                                >
                                <template slot-scope="scope">
                                    <div class="tc">
                                        <span class="th_color" v-if="scope.row.d_state == 1">待審核</span>
                                        <span class="green" v-else-if="scope.row.d_state == 2">通過</span>
                                        <span class="red" v-else-if="scope.row.d_state == 3">不通過</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="d_auditTime"
                                sortable
                                label="審核申請時間"
                                min-width="140"
                                >
                                <template slot-scope="scope">
                                    <div class="tc th_color">
                                        {{scope.row.d_auditTime}}
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="d_storePlanDetail"
                                label="操作"
                                min-width="130"
                                >
                                <template slot-scope="scope">
                                    <div class="tc cursor" style="font-size: 12px;" v-show="scope.row.d_state == 3" @click="Settingadvertising(scope.row.shopId)">
                                        <div class="ju al"><img class="cuditImg" src="@/assets/img/editPlan.png" alt=""></div>
                                        <div class="tc">更改計劃</div>
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
                                :current-page="tableData.length"
                                :page-size="10"
                                layout=" jumper, prev, pager, next"
                                :total="tableData.length">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="Settingadvertising_content mg" v-for="(item,i) in list" :key="i">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title" @click.stop="changeD(item)">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">{{item.shopName}}</div>
                        </div>
                        <div class="flex">
                            <!-- <div class="delUSer cursor">註銷賬戶</div> -->
                            <el-popconfirm
                                :title="$t('lang.setting_del') + '？'"
                                @confirm='cancelShop(item.shopId)'
                                >
                                <div class="delUSer cursor" slot="reference" @click.stop="">註銷賬戶</div>
                            </el-popconfirm>
                            <div class="arrow_m al"><img :class="[{ rotate: item.drawer },'cursor']" src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="['drawer_h', {'drawer_h1': item.drawer}]">
                        <ModuleMin1 :columns="columns2" :arr="item.deviceList" ref="child">
                            <template slot="id" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                            <template slot="key" slot-scope="{ data }">
                                <div class="setText tag-read cursor ju al" :data-clipboard-text="data" @click="copyMsg">
                                    {{data}}
                                    <img src="@/assets/img/copy.png" alt="">
                                </div>
                            </template>
                            <template slot="deleUser" slot-scope="{ data }">
                                <div class="ju al">
                                    <el-popconfirm :data-clipboard-text="data"
                                        :title="$t('lang.setting_del') + '？'"
                                        @confirm='cancelAccount(data.id)'
                                        >
                                        <div class='deleUser cursor' slot="reference">刪除設備賬戶</div>
                                    </el-popconfirm>
                                    
                                </div>
                            </template>
                        </ModuleMin1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Clipboard from 'clipboard'
import { getShopAndDeviceList, getShopUserListByUserId, cancelAccount, cancelShop } from "@/axios/request.js"
export default {
    data () {
        return {
            drawer3: false,
            drawer1: false,
            drawer4: false,
            drawer2: false,
            search: '',
            tableHeight:0,
            tableData:[ ],
            area: '',
            type: '',
            columns2: [
                {title:'店鋪設備配置',key:'name'},
                {title:'賬戶設備ID',slot:'id'},
                {title:'賬戶設備Key',slot:'key'},
                {title:'操作',slot:'slot'},
            ],
            list: [],
            pageNum: 0,
            pageSize: 5,

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
        
	},
    created () {
        
        this.getShopUserListByUserId()
    },
    methods: {
        getShopAndDeviceList () {
            this.loading = true
            let data = {
                userId: localStorage.getItem('compoundeyesUserId')
            }
            getShopAndDeviceList(data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.loading = false
                    this.list = res.data.data
                    this.list.forEach(item => {
                        item.drawer = false
                        item.deviceList.forEach(child => {
                            child.active = true
                            child.name = child.name
                            child.key = child.pwd
                            child.shopId = item.shopId
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
        getShopUserListByUserId () {
            this.loading = true
            this.tableData = []
            let data = {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                parentAddressId: this.area,
                shopName: this.search,
                typeId: this.type,
                userId: localStorage.getItem('compoundeyesUserId')
            }
            getShopUserListByUserId(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.getShopAndDeviceList()
                    res.data.data.pageT.forEach(item => {
                        this.tableData.push({
                            d_name: item.name,
                            d_type: item.type,
                            d_area: item.addressRegion,
                            d_time: item.timeIntervalNames,
                            d_detail: '', 
                            shopId: item.shopId,
                            d_state: item.state, 
                            d_auditTime: item.examineTime.split(' ')[0] + ":" + item.examineTime.split(':')[1],
                            d_storePlanDetail: ''
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
        cancelShop (id) {        //註銷店鋪
            let data = {
                shopId: id
            }
            cancelShop(data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.getShopAndDeviceList()
                    this.$message({
                        type: 'success',
                        message: "註銷成功"
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: '註銷失敗'
                    })
                }
            }).catch(e => {
                this.$message({
                    type: 'error',
                    message: this.$t('lang.editError')
                })
            })
        },
        cancelAccount (id) {        //註銷賬戶
            let data = {
                id: id
            }
            cancelAccount(data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.getShopAndDeviceList()
                    this.$message({
                        type: 'success',
                        message: "註銷成功"
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: '註銷失敗'
                    })
                }
            }).catch(e => {
                this.$message({
                    type: 'error',
                    message: this.$t('lang.editError')
                })
            })
        },

        Settingadvertising (id) {
            this.$router.push({
                name: 'AdministrationStore',
                query: {
                    id: id
                }
            })
        },
        searchByArea () {
            this.getShopUserListByUserId()
        },
        searchByType () {
            this.getShopUserListByUserId()
        },
        searchByName () {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.getShopUserListByUserId()
            },500)
        },
        changeD (item) {
            item.drawer = !item.drawer
            this.$forceUpdate()
        },

        resi () {
            let that = this
            this.$nextTick(() => {
                that.tableHeight = window.innerHeight - 165
            })
        },
        activeAd (id) {
            this.$router.push({
                name: 'activeAd',
                query: {
                    id: id
                }
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
        },
        copyMsg () {
            var clipboard = new Clipboard('.tag-read')
            console.log(clipboard)
            let that = this
            clipboard.on('success', e => {
                that.$message({
                    type: 'success',
                    message: 'Copy successfully'
                })
                // 释放内存
                clipboard.destroy()
            })
            clipboard.on('error', e => {
                // 不支持复制
                that.$message({
                    type: 'error',
                    message: 'The browser does not support the copy function, it is recommended to use Google!'
                })
                // 释放内存
                clipboard.destroy()
            })
        }
    },
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
    .PlatSetting {
        height: 100%;
        margin-top: 20px;
        
    }
    .Settingadvertising_content_wrap {
        height: calc(100% - 26px);
        overflow: auto;
        @media screen and (max-width: 564px) {
            height: calc(100% - 20px);
        }
    }
    .Settingadvertising_content {
        width: 97%;
        margin-top: 15px;
    }
    .back {
        width: 97%;
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
    .cuditImg {
        width: 30px;
        height: 30px;
    }
    .planEdit {
        width: 23px;
        height: 23px;
    }
    .divider_wrap {
        box-shadow: 0 0 5px rgb(163, 163, 163) inset;
        padding: 4px;
    }
    .searchInp {
        margin-top: 10px;
        width: 135px;
    }
    .divider_message_title {
        padding: 15px 30px;
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
    .setImg {
        img {
            width: 30px;
        }
    }
    .setText {
        font-size: 13px;
        img {
            width: 13px;
            margin-left: 3px;
        }
    }
    .green {
        color: #35E739;
    }
    .red {
        color: #FF0000;
    }
    .Settingadvertising_content {
        // height: 100%;
        /deep/.el-table th > .cell {
            text-align: center;
        }
        
        /deep/.el-table .cell {
            text-align: center;
        }
    }
    .deleUser {
        color: white;
        padding: 6px 20px;
        background: red;
        font-size: 12px;
        margin-right: 20px;
    }
    .th_color {
        color: #7868C1;
    }
    .delUSer {
        color: white;
        padding: 4px 20px;
        background: red;
        font-size: 12px;
        margin-right: 20px;
    }
    .arrow_m {
        width: 20px;
        img {
            width: 17px;
            transform: rotateZ(-180deg);
            transition: 0.2s;
        }
    }
    .rotate {
        transform: rotateZ(0deg) !important;
    }
    .drawer_h {
        transition: 0.2s;
        overflow: hidden;
        max-height: 500px;
    }
    .drawer_h1 {
        max-height: 0;
    }
</style>