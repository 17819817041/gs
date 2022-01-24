<template>
    <div class="Setting" v-loading='loading'>
        <div class="back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" @click="back" alt="">系統設定
        </div>
        <div class="Settingadvertising_content_wrap bar">
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title" @click="drawer = !drawer">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">廣告地區設定</div>
                        </div>
                        <div class="flex">
                            <div :class="['arrow_m al']" @click="drawer = !drawer"><img :class="['cursor',{ rotate: drawer }]" src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="[' drawer_h', {'drawer_h1': drawer}]">
                        <div class="menu_title_wrap">
                            <div class="al ">
                                <div class="menu_title bold">地區新增與移除</div>
                                <el-popover
                                    :placement="position"
                                    trigger="manual"
                                    v-model="visible">
                                    <div class="">
                                        <div style="font-size: 12px;padding: 2px 0;">請輸入地區(中文和英文)</div>
                                        <el-form :model="ruleForm" status-icon :rules="rules" ref="form1" class="demo-ruleForm">
                                            <el-form-item prop="area">
                                                <el-input type="text" v-model="ruleForm.area" placeholder="請輸入地區(繁文)" autocomplete="off"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="Einp">
                                                <el-input type="text" v-model="ruleForm.Einp" autocomplete="off" placeholder="請輸入地區(英文)"></el-input>
                                            </el-form-item>
                                        </el-form>
                                        <div class="sb">
                                            <div class="addCate cursor al" @click="addArea(ruleForm.area,ruleForm.Einp)">
                                                {{$t('lang.addbtn')}}
                                            </div>
                                            <div class="addCate cursor al" @click='visible = false'>{{$t('lang.cancel')}}</div>
                                        </div>
                                    </div>
                                    <div class="addArea tc cursor" slot="reference" @click="visible = true">新增地區</div>
                                </el-popover>
                            </div>
                        </div>
                        <div class="area_content clear">
                            <div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in addressList" :key="i">
                                    <div class="al">
                                        {{item.addressName}} 
                                        <span class="al" style="margin-left: 5px">
                                            <el-popconfirm
                                                :title="$t('lang.setting_del') + '？'"
                                                @confirm='deleArea(item.id)'
                                                >
                                                <img style="margin-top: 5px;" class="cursor" slot="reference" src="@/assets/img/cha.png" alt="">
                                            </el-popconfirm>
                                        </span>
                                    </div>
                                    <!-- <div v-if="child.language == 'en-US' && $i18n.locale == 'en-US'" class="al">
                                        {{child.addressName}} 
                                        <span class="al" style="margin-left: 5px">
                                            <el-popconfirm
                                                :title="$t('lang.setting_del') + '？'"
                                                @confirm='deleArea(item.id)'
                                                >
                                                <img style="margin-top: 5px;" class="cursor" slot="reference" src="@/assets/img/cha.png" alt="">
                                            </el-popconfirm>
                                        </span>
                                    </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title" @click="drawer1 = !drawer1">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">廣告類型設定</div>
                        </div>
                        <div class="flex">
                            <div :class="['arrow_m al']" @click="drawer1 = !drawer1"><img :class="['cursor',{ rotate: drawer1 }]" src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="['drawer_h', {'drawer_h1': drawer1}]">
                        <div class="menu_title_wrap">
                            <div class="al ">
                                <div class="menu_title bold">類型新增與移除</div>
                                <el-popover
                                    :placement="position"
                                    trigger="manual"
                                    v-model="visible1">
                                    <div class="">
                                        <div style="font-size: 12px;padding: 2px 0;">請輸入類型(中文和英文)</div>
                                        <el-form :model="ruleForm" status-icon :rules="rules1" ref="form" class="demo-ruleForm">
                                            <el-form-item prop="type">
                                                <el-input type="text" v-model="ruleForm.type" placeholder="請輸入類型(繁文)" autocomplete="off"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="Etype">
                                                <el-input type="text" v-model="ruleForm.Etype" autocomplete="off" placeholder="請輸入類型(英文)"></el-input>
                                            </el-form-item>
                                        </el-form>
                                        <div class="sb">
                                            <div class="addCate cursor al" @click="addType(ruleForm.type,ruleForm.Etype)">
                                                {{$t('lang.addbtn')}}
                                            </div>
                                            <div class="addCate cursor al" @click='visible1 = false'>{{$t('lang.cancel')}}</div>
                                        </div>
                                    </div>
                                    <div class="addArea tc cursor" slot="reference" @click="visible1 = true">新增類型</div>
                                </el-popover>
                            </div>
                        </div>
                        <div class="area_content clear">
                            <div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in typeList" :key="i">
                                <div v-for="(child,i) in item" :key="i" class="al">
                                    <div v-if="child.language == 'zh-TW' && $i18n.locale == 'zh-CN'" class="al">
                                        {{child.guangGaoTypeName}} 
                                        <span class="al" style="margin-left: 5px">
                                            <el-popconfirm
                                                title="確定刪除嗎？"
                                                @confirm='deleType(item[0].id)'
                                                >
                                                <img style="margin-top: 5px;" class="cursor" slot="reference" src="@/assets/img/cha.png" alt="">
                                            </el-popconfirm>
                                        </span>
                                    </div>
                                    <div v-if="child.language == 'en-US' && $i18n.locale == 'en-US'" class="al">
                                        {{child.guangGaoTypeName}} 
                                        <span class="al" style="margin-left: 5px">
                                            <el-popconfirm
                                                title="確定刪除嗎？"
                                                @confirm='deleType(item[0].id)'
                                                >
                                                <img style="margin-top: 5px;" class="cursor" slot="reference" src="@/assets/img/cha.png" alt="">
                                            </el-popconfirm>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Settingadvertising_content mg">
                <div class="divider_wrap">
                    <div class="sb al divider_message_title" @click="drawer2 = !drawer2">
                        <div class="flex">
                            <div class="divider"></div>
                            <div class="divider_text">廣告電台文字Live</div>
                        </div>
                        <div class="flex">
                            <div :class="['arrow_m al']" @click="drawer2 = !drawer2"><img :class="['cursor',{ rotate: drawer2 }]" src="@/assets/img/pull_down.png" alt=""></div>
                        </div>
                    </div>
                    <div :class="['Setting_table drawer_h', {'drawer_h1': drawer2}]">
                        <el-table :row-class-name="tableRowClassName"
                            :header-cell-style="{ background: '#E4E4E5', 'text-align': 'center' }"
                            :data="tableData"
                            style="width: 100%"
                            height="95%"
                            >
                            <el-table-column
                                fixed
                                prop="live"
                                label="Live序號"
                                min-width="175"
                                >
                                <template slot="header">
                                    <div class="ju al width100">
                                        <div class="addArea1" style="opacity: 0;">發表Live</div>
                                        <div class="al">Live序號</div>
                                        <div class="addArea cursor" @click="dialogVisible = true">發表Live</div>
                                    </div>
                                </template>
                                <template slot-scope="scope">
                                    {{scope.$index + 1}}
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="time"
                                label="發表時間"
                                min-width="150"
                                >
                            </el-table-column>
                            <el-table-column
                                prop="content"
                                label="Live內容"
                                min-width="250"
                                >
                                <template slot-scope="scope">
                                    <div class="ju al">
                                        <img class="content_logo" :src="scope.row.url" v-if="scope.row.url" alt="">{{scope.row.content}}
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="edit"
                                label="操作"
                                min-width="155"
                                >
                                <template slot-scope="scope">
                                    <el-popconfirm
                                        triggrt='click'
                                        title="確定刪除嗎？"  
                                        @confirm='delTextGuangGaoService(scope.row.id)'
                                        >
                                        <div class="ju al" slot="reference"><div class="ju al mg deleMsg cursor">刪除記錄</div></div>
                                    </el-popconfirm>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="30%">
            <span slot="footer" class="dialog-footer flexEnd">
                <div class="addArea cursor tc" @click="dialogVisible = false">取 消</div>
                <div class="addArea cursor tc" @click="addLive">添 加</div>
            </span>
            <div class="" style="height: 100%">
                <div class="logoFlie flex">
                    <div>
                        <div class="logo_wrap ju al">
                            <img style="height: 90%" :src="url" alt="">
                        </div>
                        <div class="px tc">300*300</div>
                    </div>
                    <div class="flex al" style="padding-top: 60px;">
                        <label for="liveLogo">
                            <div class="uploadBtn ju al cursor">
                                <!-- <label for="uploadUrl">
                                    <input type="file" :id="id" @change="handleUpload" v-show="false">
                                    <div class="addFile ju al">
                                        <img src="@/assets/img/add.png" alt="">
                                        <el-progress v-show="imgFlag == true" type="circle" :percentage="percent"></el-progress>
                                    </div>
                                </label> -->
                                選擇圖片
                                <input type="file" :id="id" @change="handleUpload" v-show="false">
                            </div>
                        </label>
                        <div class="unmust" style="margin: 9px 0 0 10px;">(選填)</div>
                    </div>
                </div>
                <el-form :model="ruleForms" :rules="ruless" style="margin-top: 15px;" ref="forms">
                    <el-form-item prop="content">
                        <!-- <textarea name="" id="" v-model="ruleForms.content"></textarea> -->
                        <el-input
                        type="textarea"
                        :rows="9"
                        placeholder="请输入内容"
                        v-model="ruleForms.content">
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { addressAdd, addressDel, adTypeAdd, getTextGuangGaoList, adTypeDel, delTextGuangGaoService, addTextGuangGaoService } from '@/axios/request.js'
import  axios  from 'axios'
import Client from '@/utils/client'
export default {
    data () {
        return {
            uploadHeaders: {
				authorization: '*'
			},
			region: 'oss-cn-beijing',
			bucket: '',//这里选择OSS容器
			url: '',//后台获取token地址
			ClientObj: null,
			id: 'liveLogo',
			urls:[],
			getToken:{
				sign:'',
			},

            dialogVisible: false,
            url: '',
            position: 'right',
            visible: false,
            visible1: false,
            drawer: false,
            drawer2: false,
            drawer1: false,
            tableData:[
                {live:'1',time: '221/06/06', content: 'AAC3M53Z-vphf4s',edit: true,url: ''},
                {live:'2',time: '221/06/06', content: 'AAC3M53Z-vphf4s',edit: true,url: ''},
                {live:'3',time: '221/06/06', content: 'AAC3M53Z-vphf4s',edit: true,url: ''},
            ],
            ruleForm: {
                area: '',
                Einp: '',
                type: '',
                Etype: ''
            },
            ruleForms: {
                content: ''
            },
            ruless: {
                content: [
                    { required:true, message:'內容不能為空', trigger:"blur" }
                ],
            },
            rules: {
                area: [
                    // { required:true, message:'Please enter your email', trigger:"blur" }
                    { required:true, message:'內容不能為空', trigger:"blur" }
                ],
                Einp: [
                    // { required:true, message:'Please enter your email', trigger:"blur" }
                    { required:true, message:'Please enter the region', trigger:"blur" }
                ],
            },
            rules1: {
                type: [
                    // { required:true, message:'Please enter your email', trigger:"blur" }
                    { required:true, message:'請輸入類型', trigger:"blur" }
                ],
                Etype: [
                    // { required:true, message:'Please enter your email', trigger:"blur" }
                    { required:true, message:'Please enter the type', trigger:"blur" }
                ],
            },
        }
    },
    mounted () {
        // location.reload();
    },
    created () {
        this.$store.dispatch('getuploadtoken')
        this.$store.dispatch('getAddress',this) 
        this.$store.dispatch('getTypeList',this)
        this.getTextGuangGaoList()
    },
    watch: {
        addressList: {
			handler (val) {
				if (val) {
					this.addressList = val
				}
			},
		},
        typeList: {
			handler (val) {
				if (val) {
					this.typeList = val
				}
			},
		},
        loading: {
			handler (val) {
				if (val) {
					this.loading = val
				}
			},
		},
        ossData: {
			handler (val) {
				if (val) {
					this.ossData = val
				}
			},
		},
	},
	computed: {
		addressList: {
			get () { return this.$store.state.user.addressList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'addressList',
					value: val
				})
			}
		},
        typeList:{
			get () { return this.$store.state.user.typeList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'typeList',
					value: val
				})
			}
		},
        loading: {
			get () { return this.$store.state.user.loading },
			set (val) {
				this.$store.commit('setUser', {
					key: 'loading',
					value: val
				})
			}
		},
        ossData: {
			get () { return this.$store.state.user.ossData },
			set (val) {
				this.$store.commit('setUser', {
					key: 'ossData',
					value: val
				})
			}
		}
	},
    methods: {
        doUpload () {
			const _this = this;
			let that = this
			axios('https://compoundeyes.hk/api/oss/token',_this.getToken).then((result) => {
				this.ossData = result.data.data
				let oss = {
					region: 'oss-cn-hongkong',
					bucket: this.ossData.buketName,
					accessKeyId: this.ossData.accessKeyId,
					accessKeySecret: this.ossData.accessKeySecret,
					stsToken: this.ossData.securityToken
				}
				var client = Client(oss)
				_this.percentage = 0;
				_this.imgFlag = true
				const files = document.getElementById(_this.id)
				if (files.files) {
					const fileLen = document.getElementById(_this.id).files
					for (let i = 0; i < fileLen.length; i++) {
						const file = fileLen[i]
						file.uid = new Date().getTime()
						// 随机命名
						let random_name = 'File' + new Date().getTime() + '.' + file.name.split('.').pop()
						// 上传
						this.imgFlag = true //进度条显示
						const interval = setInterval(() => {
							if (_this.percent >= 75) {
								clearInterval(interval)
								return
							}
							this.percent += 1 //进度条进度
						}, 160)
						client.multipartUpload(random_name, file, {
							progress: function* (percentage, cpt) {}
						}).then((res) => {
							if (res.res.statusCode == 200) {
								this.url = 'http://osshongk.oss-cn-hongkong.aliyuncs.com/'+res.name

							} else {
								that.$message.error('上传附件失败！');
							}
						}).catch((err) => { console.log(err) }) 
					} 
				} 
			}) 
		}, 
        handleUpload(e){
			let file = e.target.files[0]
            let boo = true

            if (boo) {
                var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
                const extension =  testmsg === 'png' || testmsg === 'jpeg' || testmsg === 'gif' || testmsg === 'jpg'

                const isLimit10M = file.size / 1024 / 1024 < 3
                var bool = false;
                if (extension && isLimit10M) { bool = true; } else { bool = false; }
                if (!extension) {
                    this.$message.error('請選擇圖片文件！');
                    return bool;
                }
                if (!isLimit10M) {
                    this.$message.error('上傳失敗，不能超過3M！');
                    return bool;
                }
                if (bool) {
                    this.doUpload()
                }
                return bool;
            }
        },



        getTextGuangGaoList () {
            this.tableData = []
            this.loading = true
            getTextGuangGaoList().then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    res.data.data.forEach((item,i) => {
                        this.tableData.push({
                            live: i+1,
                            time: '221/06/06', 
                            content: item.content,
                            edit: true,
                            url: item.icon,
                            id: item.id
                        })
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: '廣告電台文字Live加載失敗'
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: '廣告電台文字Live加載失敗'
                })
            })
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
        addType (type,Etype) {         //添加類型
            let that = this
            this.$refs.form.validate(flag => {
                if (flag) {
                    let data = {
                        guangGaoTypeDtoJson: [{
                            "guangGaoTypeName": type,
                            "id": 0,
                            "language": "zh-TW"
                        }, {
                            "guangGaoTypeName": Etype,
                            "id": 0,
                            "language": "en-US"
                        }]
                    }
                    let str = JSON.stringify(data.guangGaoTypeDtoJson)
                    const qs = require('qs')
                    let data1 = qs.stringify({
                        guangGaoTypeDtoJson: str
                    })
                    adTypeAdd(data1).then(res =>{
                        if (res.data.rtnCode == 200) {
                            that.$store.dispatch('getTypeList',that)
                            that.ruleForm.type = ''
                            that.ruleForm.Etype = ''
                            that.visible1 = false
                            that.$message({
                                type: 'success',
                                message: that.$t('lang.addSuccess')
                            })
                        } else {
                            that.$message({
                                type: 'error',
                                message: that.$t('lang.addFail')
                            })
                        }
                    }).catch(e => {
                        that.$message({
                            type: 'error',
                            message: that.$t('lang.addFail')
                        })
                    })
                }
            })
		},
		addArea (area, Einp) {               //添加地址
            let that = this
            this.$refs.form1.validate(flag => {
                if (flag) {
                    let data = {
                        addressDtoJson: {
                            "addressLangaugeDtos": [{
                                "addressName": area,
                                "id": 0,
                                "language": "zh-TW"
                            }, {
                                "addressName": Einp,
                                "id": 0,
                                "language": "en-US"
                            }],
                            "id": 0,
                            "latitude": "",
                            "longitude": "",
                            "parentId": 0
                        }
                    }
                    let str = JSON.stringify(data.addressDtoJson)
                    const qs = require('qs')
                    let data1 = qs.stringify({
                        addressDtoJson: str
                    })
                    addressAdd(data1).then(res =>{
                        if (res.data.rtnCode == 200) {
                            that.$store.dispatch('getAddress',that)
                            that.ruleForm.area = ''
                            that.ruleForm.Einp = ''
                            that.visible = false
                            that.$message({
                                type: 'success',
                                message: that.$t('lang.addSuccess')
                            })
                        } else {
                            that.$message({
                                type: 'error',
                                message: that.$t('lang.addFail')
                            })
                        }
                    }).catch(e => {
                        that.$message({
                            type: 'error',
                            message: that.$t('lang.addFail')
                        })
                    })
                }
            })
		},
		deleType (id) {                   //刪除類型
            let data = {
                guangGaoTypeId: id
            }
            adTypeDel(data).then(res => {
                if (res.data.rtnCode == 200) {
                    this.$store.dispatch('getTypeList',this)
                    this.$message.success(this.$t('lang.delSuccess'))
                } else {
                    this.$message.error(this.$t('lang.delFail'))
                }
            }).catch(e => {
                this.$message.error(this.$t('lang.delFail'))
            })
		},
		deleArea (id) {                 //刪除地址
            this.loading = true
            let data = { addressId: id }
            addressDel(data).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.$store.dispatch('getAddress', this)
                    this.$message({
                        type: 'success',
                        message: this.$t('lang.delSuccess')
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: this.$t('lang.delFail')
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: this.$t('lang.delFail')
                })
            })
		},
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        addLive () {                   //添加文字广告
            let that = this
            this.loading = true
            this.$refs.forms.validate(flag => {
                if (flag) {
                    that.dialogVisible = false
                    let D = new Date()
                    let time = D.toLocaleDateString()
                    let content = that.ruleForms.content
                    let url = that.url
                    let data = {
                        content: content,
                        icon: url,
                        id: ''
                    }
                    addTextGuangGaoService(data).then(res => {
                        this.loading = false
                        console.log(res)
                        if (res.data.rtnCode == 200) {
                            that.getTextGuangGaoList()
                            that.$message({
                                type: 'success',
                                message: that.$t('lang.addSuccess')
                            })
                        } else {
                            that.$message({
                                type: 'error',
                                message: that.$t('lang.addFail')
                            })
                        }
                    }).catch(e => {
                        this.loading = false
                        that.$message({
                            type: 'error',
                            message: that.$t('lang.addFail')
                        })
                    })
                    // that.tableData.unshift({ time:time, content: content, url: url, live: '', edit: true })
                }
            })
        },
        delTextGuangGaoService (id) {
            this.loading = true
            let data = {
                id: id
            }
            delTextGuangGaoService(data).then(res => {
                this.loading = false
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.getTextGuangGaoList()
                    this.$message({
                        type: 'success',
                        message: this.$t('lang.delSuccess')
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: this.$t('lang.delFail')
                })
            })
        }
    },
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
    .content_logo {
        width: 23px;
        height: 23px;
        margin-right: 5px;
    }
    .px {
        font-size: 12px;
        color: rgb(204, 204, 204);
    }
    .unmust {
        color: gray;
        font-size: 12px;
    }
    .logo_wrap {
        width: 80px;
        height: 80px;
        border-radius: 4px;
        border: solid 1px rgb(204, 203, 203);
    }
    .Setting_table {
        // height: 100%;
        /deep/.el-table th > .cell {
            text-align: center;
        }
        
        /deep/.el-table .cell {
            text-align: center;
        }
    }
    .deleMsg {
        color: white;
        padding: 4px 20px;
        background: red;
        font-size: 12px;
        margin-right: 20px;
    }
    .list_item {
		border: dashed 2px #d3d3d3;
		margin-right: 15px;
		height: 36px;
		padding: 0 15px;
		white-space: nowrap;
        font-size: 13px;
		margin-top: 5px;
	}
    .addCate {
        border: solid 1px rgb(206, 206, 206);
        padding: 0 20px;
        box-shadow: 2px 2px 6px rgb(224, 224, 224) inset;
        height: 32px;
		white-space: nowrap;
    }
    .addArea {
        padding: 5px;
        width: 75px;
        overflow: hidden;
        font-size: 12px;
        margin-left: 20px;
        color: white;
        background: @themeColor;
        @media screen and (max-width: 564px) {
            padding: 3px;
            width: 70px;
        }
    }
    .uploadBtn {
        padding: 5px;
        width: 75px;
        height: 32px;
        color: white;
        overflow: hidden;
        font-size: 12px;
        margin-left: 20px;
        background: @themeColor;
    }
    .addArea1 {
        padding: 5px;
        width: 75px;
        font-size: 12px;
        margin-left: 20px;
        color: white;
        @media screen and (max-width: 1145px) {
			display: none;
		}
    }
    .menu_title_wrap {
        background: #E5E5E5;
        padding: 7px 125px;
        white-space: nowrap;
        @media screen and (max-width: 564px) {
            padding: 7px 75px;
        }
    }
    .area_content {
        padding: 15px 125px;
        @media screen and (max-width: 564px) {
            padding: 7px 15px;
        }
    }
    .menu_title {
        font-size: 14px;
    }
    .Setting {
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
            width: 30px;
        }
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