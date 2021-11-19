<template>
    <div class="Settingadvertising">
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
                            <div class="setText cursor" @click="dialogVisible = true">
                                <div class="setImg"><img src="@/assets/img/edit.png" alt=""></div>
                                <div class="size12">{{$t("lang.set_p")}}</div>
                            </div>
                        </template>
                    </ModuleMin>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="flex divider_message_title">
                        <div class="divider"></div>
                        <div class="divider_text">{{$t("lang.set_adset")}}</div>
                    </div>
                    <ModuleMin :columns="columns" :arr="arr" ref="child">
                        <template slot="set">
                            <div class="setText cursor" @click="dialogVisible1 = true">
                                <div class="setImg"><img src="@/assets/img/edit.png" alt=""></div>
                                <div class="size12">{{$t("lang.set_radio")}}</div>
                            </div>
                        </template>
                    </ModuleMin>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="flex divider_message_title">
                        <div class="divider"></div>
                        <div class="divider_text">{{$t("lang.set_type")}}</div>
                    </div>
                    <ModuleMin :columns="columns2" :arr="arr2" ref="child">
                        <template slot="set">
                            <div class="setText cursor" @click="dialogVisible2 = true">
                                <div class="setImg"><img src="@/assets/img/edit.png" alt=""></div>
                                <div class="size12">{{$t("lang.set_type_t")}}</div>
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
                            <div class="setText cursor" @click="dialogVisible3 = true">
                                <div class="setImg"><img src="@/assets/img/edit.png" alt=""></div>
                                <div class="size12">{{$t("lang.set_per")}}</div>
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
                <div>
                    <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" 
					 class="demo-ruleForm">
						<el-form-item :label="$t('lang.set_price')" prop="name">
                            <el-select v-model="ruleForm.name" :placeholder="$t('lang.pldselecttype')" @change="changeP">
                                <el-option v-for="(item,i) in price_list" :key="i" 
                                :label="'$ ' + item.price + ' HKD'" :value="'$ ' + item.price + ' HKD'">
                                </el-option>
                            </el-select>
						</el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
                            <el-select v-model="ruleForm1.name" :placeholder="$t('lang.pldselecttype')" @change="changeP1">
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
                <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
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
						<el-form-item :label="$t('lang.set_price')" prop="name">
                            <div class="flex" style="margin-top: -15px">
                                <el-select v-model="ruleForm2.name" :placeholder="$t('lang.pldselecttype')">
                                    <el-option :label="$t('lang.food')" :value="$t('lang.food')"></el-option>
                                    <el-option :label="$t('lang.Technology')" :value="$t('lang.Technology')"></el-option>
                                    <el-option :label="$t('lang.medical')" :value="$t('lang.medical')"></el-option>
                                    <el-option :label="$t('lang.car')" :value="$t('lang.car')"></el-option>
                                </el-select>
                                <div class="addCate cursor al" @click="addType(ruleForm2.name)">
                                    {{$t("lang.addbtn")}}
                                </div>
                            </div>
                            <div class="list clear">
                                <div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in typeList" :key="i">
                                    {{item}} <span class="al" style="margin-left: 5px"><img class="cursor" @click="deleType(i)" src="@/assets/img/cha.png" alt=""></span>
                                </div>
                            </div>
						</el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="changeType,dialogVisible2 = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible3"
            width="30%"
            :before-close="handleClose">
            <div class="">
                <div>
                    <el-form :model="ruleForm3" label-position="top" :rules="rules3" ref="ruleForm" 
					 class="demo-ruleForm">
						<el-form-item :label="$t('lang.set_price')" prop="name">
                            <div class="flex" style="margin-top: -15px">
                                <el-select v-model="ruleForm3.name" :placeholder="$t('lang.pldselecttime')">
                                    <el-option :label="$t('lang.busyhour')" :value="$t('lang.busyhour')"></el-option>
                                    <el-option :label="$t('lang.unbusyhour')" :value="$t('lang.unbusyhour')"></el-option>
                                </el-select>
                                <div class="addCate cursor al" @click="addTime(ruleForm3.name)">
                                    {{$t("lang.addbtn")}}
                                </div>
                            </div>
                            <div class="list clear">
                                <div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in timeList" :key="i">
                                    {{item}} <span class="al" style="margin-left: 5px"><img class="cursor" @click="deleTime(i)" src="@/assets/img/cha.png" alt=""></span>
                                </div>
                            </div>
						</el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible3 = false">取 消</el-button>
                <el-button type="primary" @click="changeTime,dialogVisible3 = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dialogVisible:  false,
            dialogVisible1: false,
            dialogVisible2: false,
            dialogVisible3: false,
            labelPosition: 'left',
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
                {name:this.$t("lang.set_bili") + ': 80%',set: 'set',active: true},
            ],
            arr1:[
                {name:this.$t("lang.set_acc") + ': ' + this.$t("lang.busyhour"),set: 'set',active: true},
            ],
            arr2:[
                {name:this.$t("lang.set_type") + ': ' + this.$t("lang.food"),set: 'set',active: true},
            ],
            arr3:[
                {name:'$ 80000 HKD',set: 'set',active: true},
            ],
            price_list: [],
            idsList: [],

            typeList: [this.$t("lang.food"), this.$t("lang.car")],

            timeList: [this.$t("lang.busyhour")]
        }
    },
    created () {
        let num = 10000
        for (let i=0;i<10;i++) {
            num += 5000
            this.price_list.push({price: num})
        }
        let num1 = 110
        for (let i=0;i<11;i++) {
            num1 -= 10
            this.idsList.push({val: num1})
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
                    this.arr[0].name = this.$t("lang.set_bili") + ': 80%'

                    this.timeList = [this.$t("lang.busyhour")]
                    this.changeTime()

                    this.typeList = [this.$t("lang.food"), this.$t("lang.car")]
                    this.changeType()
                }
                if (val == 'en-US') {
                    this.labelPosition = 'top'
                } else if (val == 'zh-CN') {
                    this.labelPosition = 'left'
                }
            },
            immediate: true
        }
    },
    computed: {
        lang () { return this.$i18n.locale }
    },
    methods: {
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
        changeP (val) {
            this.arr3[0].name = val
        },
        changeP1 (val) {
            this.arr[0].name = this.$t("lang.set_bili") + ': ' + val
        },
        addType (item) {
			if (item) {
				this.typeList.push(item)
				let arr = new Set(this.typeList)
				this.typeList = Array.from(arr)
                this.changeType()
			}
		},
		deleType (i) {
			this.typeList.splice(i,1)
            this.changeType()
		},
        changeType () {
            if (this.typeList.length != 0) {
                let obj = this.typeList[0]
                for (let i=0;i<this.typeList.length-1;i++) {
                    obj = obj + ',' + this.typeList[i+1]
                }
                this.arr2[0].name = this.$t("lang.set_type") + ': ' + obj
            } else {
                this.arr2[0].name = this.$t("lang.nodata")
            }
            
        },
        addTime (item) {
			if (item) {
				this.timeList.push(item)
				let arr = new Set(this.timeList)
				this.timeList = Array.from(arr)
                this.changeTime()
			}
		},
		deleTime (i) {
			this.timeList.splice(i,1)
            this.changeTime()
		},
        changeTime () {
            if (this.timeList.length != 0) {
                let obj = this.timeList[0]
                for (let i=0;i<this.timeList.length-1;i++) {
                    obj = obj + ',' + this.timeList[i+1]
                }
                this.arr1[0].name = this.$t("lang.set_type") + ': ' + obj
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
    .setImg {
        img {
            width: 20px;
        }
    }
    .setText {
        font-size: 13px;
    }
</style>