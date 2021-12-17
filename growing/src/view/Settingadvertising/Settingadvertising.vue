<template>
    <div class="Settingadvertising" v-loading='loading'>
        <div class="back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" @click="back" alt="">{{$t("lang.Foreign")}}
        </div>
        <div class="Settingadvertising_content_wrap bar">
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="flex divider_message_title">
                        <div class="divider"></div>
                        <div class="divider_text">{{$t("lang.set_price")}}</div>
                    </div>
                    <ModuleMin :columns="columns3" :arr="arr3" ref="child">
                        <template slot="set">
                            <div class="setText ju">
                                <div class="cursor" @click="dialogVisible = true">
                                    <div class="setImg"><img src="@/assets/img/edit.png" alt=""></div>
                                    <div class="size12">{{$t("lang.set_p")}}</div>
                                </div>
                            </div>
                        </template>
                    </ModuleMin>
                </div>
            </div>
            <!-- <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="flex divider_message_title">
                        <div class="divider"></div>
                        <div class="divider_text">{{$t("lang.set_adset")}}</div>
                    </div>
                    <ModuleMin :columns="columns" :arr="arr" ref="child">
                        <template slot="set">
                            <div class="setText ju">
                                <div class="cursor" @click="dialogVisible1 = true">
                                    <div class="setImg"><img src="@/assets/img/edit.png" alt=""></div>
                                    <div class="size12">{{$t("lang.set_radio")}}</div>
                                </div>
                            </div>
                        </template>
                    </ModuleMin>
                </div>
            </div> -->
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="flex divider_message_title">
                        <div class="divider"></div>
                        <div class="divider_text">{{$t("lang.set_type")}}</div>
                    </div>
                    <ModuleMin :columns="columns2" :arr="arr2" ref="child">
                        <template slot="set">
                            <div class="setText ju">
                                <div class="cursor" @click="dialogVisible2 = true">
                                    <div class="setImg"><img src="@/assets/img/edit.png" alt=""></div>
                                    <div class="size12">{{$t("lang.set_type_t")}}</div>
                                </div>
                            </div>
                        </template>
                    </ModuleMin>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="flex divider_message_title">
                        <div class="divider"></div>
                        <div class="divider_text">{{$t("lang.set_acc")}}</div>
                    </div>
                    <ModuleMin :columns="columns1" :arr="arr1" ref="child">
                        <template slot="set">
                            <div class="setText ju">
                                <div class="cursor" @click="dialogVisible3 = true,radio4='1'">
                                    <div class="setImg"><img src="@/assets/img/edit.png" alt=""></div>
                                    <div class="size12">{{$t("lang.set_per")}}</div>
                                </div>
                            </div>
                        </template>
                    </ModuleMin>
                </div>
            </div>
        </div>

        <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div class="">
                <div class="size12">(*店鋪接入每分鐘廣告收入=期望廣告收入/30天/24小時/60分鐘)</div>
                <div style="margin-top: 20px;">
                    <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" 
					 class="demo-ruleForm">
						<el-form-item :label="$t('lang.set_price')" prop="name">
                            <el-select v-model="ruleForm.name" :placeholder="$t('lang.pldselecttype')">
                                <el-option v-for="(item,i) in incomePriceIdList" :key="i" 
                                :label="'$ ' + item.price + ' HKD'" :value="item.id">
                                </el-option>
                            </el-select>
						</el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="changemoney">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible1"
            width="30%"
            :before-close="handleClose">
            <div class="">
                <div>
                    <el-form :model="ruleForm1" :label-position="labelPosition" :rules="rules1" ref="ruleForm" 
					 class="demo-ruleForm">
						<el-form-item :label="$t('lang.set_price')" prop="name">
                            <el-select v-model="ruleForm1.name" :placeholder="$t('lang.pldselecttype')">
                                <el-option v-for="(item,i) in idsList" :key="i" 
                                :label="item.val + '%'" :value="item.val + '%'">
                                </el-option>
                            </el-select>
						</el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="bilisure">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible2"
            width="30%"
            :before-close="handleClose">
            <div class="">
                <div>
                    <el-form :model="ruleForm2" label-position="top" :rules="rules2" ref="ruleForm" 
					 class="demo-ruleForm">
						<el-form-item :label="$t('lang.set_type')" prop="name">
                            <el-radio-group v-model="radio3" size="small">
                                <el-radio label="1" border style="margin-right: 0;">接收全部行業廣告</el-radio>
                                <el-radio label="2" border>自定義接收外來廣告行業</el-radio>
                            </el-radio-group>
                            <div class="flex" style="margin-top: 5px" v-if="radio3 == '2'">
                                <el-select v-model="ruleForm2.name" :placeholder="$t('lang.pldselecttype')">
                                    <el-option v-for="(item,i) in getTypeList" :key="i"
                                        :label='item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
                                        item.find( res => res.language == "zh-TW").guangGaoTypeName: 
                                        item.find( res => res.language == "en-US").guangGaoTypeName '
                                        :value="item">
                                    </el-option>
                                </el-select>
                                <div class="addCate cursor al" @click="addType(ruleForm2.name)">
                                    {{$t("lang.addbtn")}}
                                </div>
                            </div>
                            <div class="list clear" v-if="radio3 == '2'">
                                <div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in typeList" :key="i">
                                    {{item.name}} <span class="al" style="margin-left: 5px">
                                        <img class="cursor" @click="deleType(i)" src="@/assets/img/cha.png" alt="">
                                    </span>
                                </div>
                            </div>
						</el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="updateShopGuangGaoType">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible3"
            id="delele"
            width="40%"
            style="min-width: 350px;"
            title="接收外來廣告時段及時間比例"
            :before-close="handleClose">
            <div class="">
                <div>
                    <el-radio-group v-model="radio4" size="small">
                        <el-radio label="1" border style="margin-right: 0;">接收全部時段</el-radio>
                        <el-radio label="2" border style="margin-right: 0;" @click.native="drawers = true">自定義接收的廣告時間</el-radio>
                        <el-radio label="3" border>不接受外來廣告</el-radio>
                    </el-radio-group>
                    <el-form v-show="radio4 == '1'" :label-position="$i18n.locale == 'zh-CN'? labelPosition: 'top'"
						:label-width="$i18n.locale == 'zh-CN'? '100px': '205px'" style="margin-top: 15px;">
                        <!-- <el-form-item label="外來廣告比例">
                            <el-select v-model="ggbili" style="margin-right: 10px;">
                                <el-option v-for="item in 9" :key="item" :label="110 - (item*10) + '%'" :value="110 - (item*10) + '%' "></el-option>
                            </el-select>
						</el-form-item> -->
                    </el-form>
                    <el-form ref="ruleForm" v-show="radio4 == '22'" style="margin-top: 15px;"
                        :label-position="$i18n.locale == 'zh-CN'? labelPosition: 'top'"
						:label-width="$i18n.locale == 'zh-CN'? '90px': '205px'" class="demo-ruleForm">
						<el-form-item label="繁忙時段">
                            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" 
                            @change="handleCheckAllChange">全选</el-checkbox>
                            <div style="margin: 15px 0;"></div>
							<el-checkbox-group v-model="checkedCities" @change="adListadd">
								<el-checkbox v-for="(item,i) in busyTimeList" :label="item" :key="i">{{item}}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="超繁忙時段">
                            <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" 
                            @change="handleCheckAllChange1">全选</el-checkbox>
                            <div style="margin: 15px 0;"></div>
							<el-checkbox-group v-model="checkedCities12" @change="adsListadd">
								<el-checkbox v-for="(item,i) in sbusyTimeList" :label="item" :key="i">{{item}}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="非繁忙時段">
                            <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" 
                            @change="handleCheckAllChange2">全选</el-checkbox>
                            <div style="margin: 15px 0;"></div>
							<el-checkbox-group v-model="checkedCities2" @change="adunListadd">
								<el-checkbox v-for="(item,i) in unbusyTimeList" :label="item" :key="i">{{item}}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
					</el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible3 = false">取 消</el-button>
                <el-button type="primary" @click="sureaddadList">确 定</el-button>
            </span>
        </el-dialog>


        <el-drawer
			title="請選擇您需要投放的時間段及廣告播放時長:"
			:visible.sync="drawers"
			:direction="direction"
			:before-close="handleClose">
			<div class="dra_content noBar">
				<div class="list_wrap">
					<el-form label-position="top"
						:label-width="$i18n.locale == 'zh-CN'? '80px': '205px'" class="demo-ruleForm">
						<el-form-item label="繁忙時段:">
							<div class="clear">
                                <div class="al size12 ju float" v-for="(item,i) in addTimeList" :key="i+11" style="margin-left: 15px;">
                                    <span class="l_time">{{item.time}}</span> 
                                    <!-- <el-input-number @change="handleChange" 
                                    style="margin: 0 5px;width: 107px;" v-model="item.num"
                                    :min="20" :step="10" :max="100" label="描述文字" size="mini"></el-input-number> % -->
                                    <el-button plain size="mini" style="margin-left: 7px;" @click.native="deleList(i)">刪除</el-button>
                                </div>
                            </div>
						</el-form-item>
						<el-form-item label="超繁忙時段:">
							<div class="clear">
                                <div class="al size12 ju float" v-for="(item,i) in addTimeList1" :key="i+16" style="margin-left: 15px;">
                                    <span class="l_time">{{item.time}}</span> 
                                    <!-- <el-input-number @change="handleChange" 
                                    style="margin: 0 5px;width: 107px;" v-model="item.num"
                                    :min="20" :step="10" :max="100" label="描述文字" size="mini"></el-input-number> % -->
                                    <el-button plain size="mini" style="margin-left: 7px;" @click.native="deleList1(i)">刪除</el-button>
                                </div>
                            </div>
						</el-form-item>
						<el-form-item label="非繁忙時段:">
							<div class="clear">
                                <div class="al size12 ju float" v-for="(item,i) in addTimeList2" :key="i+30" style="margin-left: 15px;">
                                    <span class="l_time">{{item.time}}</span> 
                                    <!-- <el-input-number @change="handleChange" 
                                    style="margin: 0 5px;width: 107px;" v-model="item.num"
                                    :min="20" :step="10" :max="100" label="描述文字" size="mini"></el-input-number> % -->
                                    <el-button plain size="mini" style="margin-left: 7px;" @click.native="deleList2(i)">刪除</el-button>
                                </div>
                            </div>
						</el-form-item>
					</el-form>

					
					<div class="ju" style="margin-top: 20px;">
						<el-popover
							style="width: 80px;"
							placement="right"
							width="270"
							trigger="click">
							<div class="popover_item noBar" ref='popover'>
								<el-form label-position="top"  ref="ruleForm" 
									:label-width="$i18n.locale == 'zh-CN'? '80px': '205px'" class="demo-ruleForm">
									<el-form-item label="繁忙時段">
										<el-checkbox-group v-model="checkedCities1" @change="group">
											<el-checkbox v-for="(item,i) in busyTimeList1" :label="item" :key="i+1">{{item.time}}</el-checkbox>
										</el-checkbox-group>
									</el-form-item>
									<el-form-item label="超繁忙時段">
										<el-checkbox-group v-model="checkedCities11" @change="group1">
											<el-checkbox v-for="(item,i) in sbusyTimeList1" :label="item" :key="i+2">{{item.time}}</el-checkbox>
										</el-checkbox-group>
									</el-form-item>
									<el-form-item label="繁忙時段">
										<el-checkbox-group v-model="checkedCities21" @change="group2">
											<el-checkbox v-for="(item,i) in unbusyTimeList1" :label="item" :key="i">{{item.time}}</el-checkbox>
										</el-checkbox-group>
									</el-form-item>
								</el-form>
							</div>
							<div slot="reference"><el-button type="" size="small">新增時間</el-button></div>
						</el-popover>
						<el-popconfirm
							style="width: 56px;"
							title="確定重置嗎？"
							@confirm='reset'>
							<div slot="reference"><el-button size="small" style="margin-left: 10px;">重置</el-button></div>
						</el-popconfirm>
					</div>
					<div class="ju" style="margin-top: 20px;">
						<div class="size12" style="display: inline-block;">
							<span>沒有選中的時間</span><span style="color: red">則代表不接受外來廣告</span>
						</div>
					</div>
				</div>
				<div class="dra_footer">
					<div class="flexEnd">
						<el-button size="small" @click="drawers = false">取消</el-button>
  						<el-button size="small" type="primary" @click="sueraddList1">確定</el-button>
					</div>
				</div>
			</div>
		</el-drawer>
    </div>
</template>

<script>
import { updatePrice, getPrice, getShopGuangGaoType, updateShopGuangGaoType } from "@/axios/request.js"
export default {
    data () {
        return {
            addTimeList: [],
            addTimeList1: [],
            addTimeList2: [],
            
            direction: 'rtl',
            drawers: false,
            radio4: '1',

            checkedCities1: [],
			busyTimeList1: [],

            checkedCities11: [],
			sbusyTimeList1: [{ time: '12:00~13:00', num: 1 },{ time:'18:00~19:00', num: 1 }],

            checkedCities21: [],
			unbusyTimeList1: [],



            dialogVisible:  false,
            dialogVisible1: false,
            dialogVisible2: false,
            dialogVisible3: false,
            labelPosition: 'left',
            ggbili: '100%',
            ruleForm: {
                name: '',
            },
            rules: {
                name: [
                    { required: true, message: '請輸入廣告收入', trigger: 'blur' },
                ],
            },
            ruleForm1: {
                name: '',
            },
            rules1: {
                name: [
                    { required: true, message: '請輸入廣告收入', trigger: 'blur' },
                ],
            },
            ruleForm2: {
                name: '',
            },
            rules2: {
                name: [
                    { required: true, message: '', trigger: 'blur' },
                ],
            },
            ruleForm3: {
                name: '',
            },
            rules3: {
                name: [
                    { required: true, message: '', trigger: 'blur' },
                ],
            },
            columns: [
                {title:this.$t("lang.set_title"),key:'name'},
                {title:this.$t("lang.set_edit"),slot:'set'},
            ],
            columns1: [
                {title:this.$t("lang.set_title1"),key:'name'},
                {title:this.$t("lang.set_edit"),slot:'set'},
            ],
            columns2: [
                {title:this.$t("lang.set_title2"),key:'name'},
                {title:this.$t("lang.set_edit"),slot:'set'},
            ],
            columns3: [
                {title:this.$t("lang.set_price"),key:'name'},
                {title:this.$t("lang.set_edit"),slot:'set'},
            ],
            arr:[
                {name:this.$t("lang.set_bili") + ': 80%',set: 'set',active: true,adList1: [],},
            ],
            arr1:[
                {name:'',set: 'set',active: true,br: true,nodv: false,adList1: [],ids: '100%'},
            ],
            arr2:[
                {name:'',set: 'set',active: true,adList1: [],},
            ],
            arr3:[
                {name:'$ 80000 HKD',set: 'set',active: true,adList1: [],},
            ],
            idsList: [],

            typeList: [],

            timeList: [this.$t("lang.busyhour")],


            adList: ['8:00~9:.00'],
            copy1: [],
			copy2: [],
			copy3: [],
			checkedCities: [],
			busyTimeList: [],

			checkedCities12: [],
			sbusyTimeList: ['12:00~13:00','18:00~19:00'],

			sbusyTimeList1: [{ time: '12:00~13:00', num: 1 },{ time:'18:00~19:00', num: 1 }],

			checkedCities2: [],
			unbusyTimeList: [],

            cityOptions: [],
            checkAll: false,
            isIndeterminate: false,

            cityOptions1: ['12:00~13:00','18:00~19:00'],
            checkAll1: false,
            isIndeterminate1: false,

            cityOptions2: [],
            checkAll2: false,
            isIndeterminate2: false,
            radio3: '1',

            loading: false
        }
    },
    beforeMount() {
		let that = this
        window.addEventListener('resize', (e) => {
            that.fun()
        })
		this.fun()
    },
    created () {
        this.$store.dispatch('getTypeList',this)
        this.$store.dispatch('incomePriceId')
        this.getPrice()
        this.getShopGuangGaoType()
        let num1 = 110
        for (let i=0;i<11;i++) {
            num1 -= 10
            this.idsList.push({val: num1})
        }
        let that = this
		let h = 8
		let s = 9
		for (let i=0;i<12;i++) {
			s += 1
			h += 1
			this.busyTimeList.push(h + ':00~' + s + ':00')
			this.busyTimeList1.push( {time: h + ':00~' + s + ':00', num: 1} )
		}
		this.$nextTick(() => {
			that.busyTimeList.splice(3,1)
			that.busyTimeList.splice(8,1)
			that.busyTimeList1.splice(3,1)
			that.busyTimeList1.splice(8,1)
		})

		let unh = 20
		let uns = 21
		for (let i=0;i<2;i++) {
			uns += 1
			unh += 1
			this.unbusyTimeList.push(unh + ':00~' + uns + ':00')
			this.unbusyTimeList1.push( {time: unh + ':00~' + uns + ':00', num: 1} )
		}
		this.unbusyTimeList.push('23:00~00:00')
		this.unbusyTimeList1.push( { time: '23:00~00:00', num: 1 } )
		let unh1 = -1
		let uns1 = 0
		for (let i=0;i<9;i++) {
			uns1 += 1
			unh1 += 1
			this.unbusyTimeList.push(unh1 + ':00~' + uns1 + ':00')
			this.unbusyTimeList1.push( {time: unh1 + ':00~' + uns1 + ':00', num: 1} )
		}
    },
    watch: {
        lang: {
            handler (val) {
                if (val) {
                    this.columns[1].title = this.$t("lang.set_edit")
                    this.columns[0].title = this.$t("lang.set_title")
                    this.columns1[1].title = this.$t("lang.set_edit")
                    this.columns1[0].title = this.$t("lang.set_title1")
                    this.columns2[1].title = this.$t("lang.set_edit")
                    this.columns2[0].title = this.$t("lang.set_title2")
                    this.columns3[1].title = this.$t("lang.set_edit")
                    this.columns3[0].title = this.$t("lang.set_price")

                    this.timeList = [this.$t("lang.busyhour")]
                }
                if (val == 'en-US') {
                    this.labelPosition = 'top'
                } else if (val == 'zh-CN') {
                    this.labelPosition = 'left'
                }
            },
            // immediate: true
        },
        incomePriceIdList: {
			handler (val) {
				if (val) {
					this.incomePriceIdList = val
				}
			},
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
        lang () { return this.$i18n.locale },
        incomePriceIdList:{             //類型列表
			get () { return this.$store.state.user.incomePriceIdList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'incomePriceIdList',
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
    methods: {
        getShopGuangGaoType () {  //查詢接收行業
            this.loading = true
            let data = {
                shopId: this.$route.query.id
            }
            getShopGuangGaoType(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.typeList = res.data.data
                    if (this.typeList.length != 0) {
                        let obj = this.typeList[0].name
                        for (let i=0;i<this.typeList.length-1;i++) {
                            obj = obj + ',' + this.typeList[i+1].name
                        }
                        this.arr2[0].name = this.$t("lang.set_type") + ': ' + obj
                    } else {
                        this.arr2[0].name = this.$t("lang.nodata")
                    }
                } else {
                    this.$message({
                        type: 'error',
                        message: this.$t('lang.getFail')
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: this.$t('lang.getFail')
                })
            })
        }, 
        updateShopGuangGaoType () {            //修改店铺外接收广告类型（馬上可以修改的）
            this.loading = true
            let arr = []
            if (this.radio3 == '1') {
                this.getTypeList.forEach(item => {
                    arr.push(item[0].id)
                })
            } else if (this.radio3 == '2') {
                if (this.typeList.length != 0) {
                    this.typeList.forEach(item => {
                        arr.push(item.value)
                    })
                } else {
                    this.getTypeList.forEach(item => {
                        arr.push(item[0].id)
                    })
                }
            }
            
            let data = {
                shopId: this.$route.query.id,
                typeIds: String(arr)
            }
            updateShopGuangGaoType(data).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: this.$t('lang.editSuccess')
                    })
                    this.getShopGuangGaoType()
                } else {
                    this.$message({
                        type: 'error',
                        message: this.$t('lang.editError')
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: this.$t('lang.editError')
                })
            })
            this.dialogVisible2 = false
        },
        getPrice () {  //查詢期望收入
            this.loading = true
            let data = {
                shopId: this.$route.query.id
            }
            getPrice(data).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.arr3[0].name = res.data.data
                } else {
                    this.$message({
                        type: 'error',
                        message: this.$t('lang.getFail')
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: this.$t('lang.getFail')
                })
            })
        },
        reset () {
			this.checkedCities21 = []
			this.checkedCities11 = []
			this.checkedCities1 = []
			this.adList1 = []
			this.addTimeList = []
			this.addTimeList1 = []
			this.addTimeList2 = []
			this.checkedCities = []
		},
        handleChange(value) {
			console.log(value);
		},
        group (val) {
			this.addTimeList = Array.from(val)
		},
		group1 (val) {
			this.addTimeList1 = Array.from(val)
		},
		group2 (val) {
			this.addTimeList2 = Array.from(val)
		},
        deleList (i) {
			this.addTimeList.splice(i,1)
		},
		deleList1 (i) {
			this.addTimeList1.splice(i,1)
		},
		deleList2 (i) {
			this.addTimeList2.splice(i,1)
			this.checkedCities21.splice(i,1)
		},
        sueraddList1 () {
			let i = 0
			let arr = this.addTimeList.concat(this.addTimeList1.concat(this.addTimeList2))
            if (arr.length != 0) {
                this.arr1[0].br = true
            }
			arr.forEach(item => {
				i = i + item.num
			})
            this.arr1[0].adList1 = this.addTimeList.concat(this.addTimeList1.concat(this.addTimeList2))
            this.drawers = false
            // this.ruleForm.inp = i
		},
        handleCheckAllChange(val) {
            this.checkedCities = val ? this.cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckAllChange1(val) {
            this.checkedCities12 = val ? this.cityOptions1 : [];
            this.isIndeterminate1 = false;
        },
        handleCheckAllChange2(val) {
            this.checkedCities2 = val ? this.cityOptions2 : [];
            this.isIndeterminate2 = false;
        },
        changemoney () {      //修改店铺期望收入价格(馬上修改)
            let data = {
                incomePriceId: this.ruleForm.name,
                shopId: this.$route.query.id
            }
            updatePrice(data).then(res => {
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: this.$t('lang.editSuccess')
                    })
                    this.getPrice()
                }
            })
            this.dialogVisible = false
            
        },
        bilisure () {
            this.dialogVisible1 = false
            this.arr[0].name = this.$t("lang.set_bili") + ': ' + this.ruleForm1.name
        },
        adListadd (val) {
            let checkedCount = val.length;
            this.checkAll = checkedCount === this.cityOptions.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityOptions.length;
			this.copy1 = Array.from(val)
		},
		adsListadd (val) {
            let checkedCount = val.length;
            this.checkAll1 = checkedCount === this.cityOptions1.length;
            this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.cityOptions1.length;
			this.copy2 = Array.from(val)
		},
		adunListadd (val) {
            let checkedCount = val.length;
            this.checkAll2 = checkedCount === this.cityOptions2.length;
            this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.cityOptions2.length;
            this.copy3 = Array.from(val)
		},
        sureaddadList () {
            if (this.radio4 == '1') {
                this.arr1[0].ids = this.ggbili
            } else if (this.radio4 == '3') {
                this.arr1[0].adList1 = []
                this.arr1[0].nodv = true
                this.arr1[0].br = false
                
            } else if (this.radio4 == '2') {
                // this.adList = this.copy1.concat(this.copy2.concat(this.copy3))
                // console.log(this.adList)
                if (this.arr1[0].adList1.length != 0) {
                    // let obj = this.adList[0]
                    // for (let i=0;i<this.adList.length-1;i++) {
                    //     obj = obj + ',' + this.adList[i+1]
                    // }
                    // this.arr1[0].name = this.$t("lang.set_acc") + ': ' + obj
                } else {
                    // this.arr1[0].name = this.$t("lang.nodata")
                    this.arr1[0].nodv = true
                    this.arr1[0].br = false
                }
            }
            
			this.dialogVisible3 = false
		},
        fun () {
			if (window.innerWidth <= 1304) {
                this.labelPosition = 'top'
            } else {
                this.labelPosition = 'left'
            }
		},
        back () {
            this.$router.back()
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        addType (item) {
			if (item) {
                let obj = {
                    name: item.find( 
                        res => res.language == "zh-TW") && this.$i18n.locale == "zh-CN" ? 
                        item.find( res => res.language == "zh-TW").guangGaoTypeName: 
                        item.find( res => res.language == "en-US").guangGaoTypeName,
                    value: item[0].id
                }
				this.typeList.push(obj)
				let arr = new Set(this.typeList)
				this.typeList = Array.from(arr)
                // this.changeType()
			}
		},
		deleType (i) {
			this.typeList.splice(i,1)
            // this.changeType()
		},
        addTime (item) {
			if (item) {
				this.timeList.push(item)
				let arr = new Set(this.timeList)
				this.timeList = Array.from(arr)
                // this.changeTime()
			}
		},
		deleTime (i) {
			this.timeList.splice(i,1)
            // this.changeTime()
		},



        changeTime () {
            this.dialogVisible3 = false
            if (this.adList.length != 0) {
                let obj = this.adList[0]
                for (let i=0;i<this.adList.length-1;i++) {
                    obj = obj + ',' + this.adList[i+1]
                }
                this.arr1[0].name = this.$t("lang.set_acc") + ': ' + obj
            } else {
                this.arr1[0].name = this.$t("lang.nodata")
            }
            
        }
    },
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
    .Settingadvertising {
        height: 100%;
        margin-top: 20px;
    }
    .Settingadvertising_content_wrap {
        height: calc(100% - 20px);
        overflow: auto;
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
    .addCate {
        border: solid 1px rgb(206, 206, 206);
        padding: 0 20px;
        box-shadow: 2px 2px 6px rgb(224, 224, 224) inset;
        height: 39px;
        margin-left: 15px;
		white-space: nowrap;
    }
    .list {
        margin-top: 15px;
		margin-left: 0px;
	}
    .dra_footer {
		position: absolute;
		padding: 15px 20px;
		bottom: 0;
		left: 0;
		width: 100%;
		background: white;
		box-shadow: 0 0 5px gray;
		z-index: 10;
	}
	.list_item {
		border: dashed 2px #d3d3d3;
		margin-right: 10px;
		height: 36px;
		padding: 0 15px;
		white-space: nowrap;
		// @media screen and (max-width: 870px) {
		// 	margin-top: 5px;
		// }
		margin-bottom: 5px;
	}
    .divider_wrap {
        box-shadow: 0 0 5px rgb(163, 163, 163) inset;
        padding: 4px;
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
    .dra_content {
		height: calc(100% - 98px);
		overflow: auto;
		padding: 0 20px;
	}
    .setImg {
        img {
            width: 20px;
        }
    }
    .setText {
        font-size: 13px;
    }
</style>