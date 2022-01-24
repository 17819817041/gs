<template>
    <div class="AdvertisingAddPlus" v-loading='loading'>
		<div class="AdvertisingOperation_back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="" @click="goBack">Plus{{$t('lang.comboPlan')}}
        </div>
		<div class="noBar" style="height: calc(100% - 35px);overflow: auto;margin-top: 15px;">
			<div :class="['content mg bar',{ heigh: !submit }]">
				<!-- <div class="content_title al"><img class="cursor" style="width: 25px;" @click="goBack" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="">新增廣告計劃</div> -->
				<div class="noBar" style="height: calc(100% - 0px); overflow:auto" v-show="submit">
					<div class="basicsMsg theme" v-show="submit">
						<div class=" basicsMsg_item bold al">
							<div class="iden radius"></div> {{$t("lang.message")}}
						</div>
						<el-form :model="ruleForm" :rules="rules" ref="ruleForm" 
						 :label-position="$i18n.locale == 'zh-CN'? labelPosition: 'top'" 
						:label-width="$i18n.locale == 'zh-CN'? '100px': '165px'" class="demo-ruleForm">
							<el-form-item :label="$t('lang.adname')" prop="name">
								<el-input style="width: 40%;min-width: 200px;" 
								v-model="ruleForm.name"></el-input>
							</el-form-item>
							<el-form-item :label="$t('lang.industry')" prop="type">  
								<div class="flex br al clear">
									<div class="float" style="margin-right: 10px;">
										<el-select v-model="ruleForm.type" :placeholder="$t('lang.pldselecttype')">
											<el-option v-for="(item,i) in getTypeList" :key="i" @click.native="getListByTypeId"
												:label='item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
												item.find( res => res.language == "zh-TW").guangGaoTypeName: 
												item.find( res => res.language == "en-US").guangGaoTypeName '
												:value="item[0].id">
											</el-option>
										</el-select>
										<!-- <div class="addCate cursor al" @click="addType(ruleForm.type)">
											{{$t("lang.addbtn")}}
										</div> -->
									</div>
									<div class="list clear float">
										<div style="color: #B0B0B0;" class="list_item1 float al" v-for="(item,i) in typeList" :key="i">
											{{item}} <span class="al" style="margin-left: 5px"><img class="cursor"
											@click="deleType(i)" src="@/assets/img/cha.png" alt=""></span>
										</div>
									</div>
								</div>
							</el-form-item>
							<el-form-item :label="$t('lang.cycle')" prop="date">
								<div style="min-width: 200px;width: 100%" class='clear'>
									<div class="float" style="margin-right: 15px;width: 140px;">
										<el-form-item prop="startDate">
											<el-date-picker
												disabled
												@change="STIME"
												class="width100"
												v-model="ruleForm.startDate"
												type="date"
												:placeholder="$t('lang.sdate')"
												:picker-options="pickerOptions1">
											</el-date-picker>
										</el-form-item>
									</div>
									<div class="float width384" style="width: 140px;">
										<el-form-item prop="endDate">
											<el-date-picker
												disabled
												class="width100"
												v-model="ruleForm.endDate"
												type="date"
												:placeholder="$t('lang.enddate')"
												:picker-options="pickerOptions2"
												>
											</el-date-picker>
										</el-form-item>
										
									</div>
								</div>
							</el-form-item>
							<div :class="['flex br',{ br1185: $i18n.locale == 'en-US' }]">
								<el-form-item :label="$t('lang.admediatype')" prop="mediaType" style="margin-right: 30px;">
									<div class="al">
										<el-select v-model="ruleForm.cmediaType" :placeholder="$t('lang.pldselecttype')" 
										@change="getType">
											<el-option :label="$t('lang.image')" value="1"></el-option>
											<el-option :label="$t('lang.video')" value="3"></el-option>
										</el-select>
									</div>
								</el-form-item>
							</div>
							<el-form-item :label="$t('lang.adcontent')" prop="content">
								<div :class="['textarea_wrap clear', { content_down: $i18n.locale == 'zh-CN' }]">
									<label for="upload">
										<input type="file" :id="id" @change="handleUpload" v-show="false">
										<div class="addFile ju al">
											<img src="@/assets/img/add.png" alt="">
											<el-progress v-show="imgFlag == true" type="circle" :percentage="percent"></el-progress>
										</div>
									</label>
									<div class="textarea_wrap_item float" v-for="(item,i) in ruleForm.imageList" :key="i">
										<div class="imageList_wrap">
											<div class="deleImg radius ju al" @click.stop="deleImg(i)"><img style="heihgt: 100%;" src="@/assets/img/cha.png" alt=""></div>
											<div class="textarea_wrap_item_child ju al cursor">
												<img v-if="ruleForm.mediaType == 'image'" @click="imgPreview(item.url)"
												style="height: 100%;width: 100%; object-fit:cover;" :src="item.url" alt="">

												<div class="video_outWrap" v-else-if="ruleForm.mediaType == 'video'">
													<div class="videoImage ju al" id="output" ref="output"  @click="previewVideo(item)">

													</div>
													<video class="width100" id="video1" ref="video"
														:controls="false">
														<source :src="item.url" type="video/mp4">
													</video>
												</div>
												<!-- <img v-else-if="ruleForm.mediaType == 'video'"  @click="previewVideo(item)"
												style="height: 50%;" src="@/assets/img/video_file.png" alt=""> -->
											</div>
										</div>
										<div class="imageList_name tc">{{item.name}}</div>
										<div class="imageList_size tc">{{item.size}}</div>
									</div>
								</div>
								<div :class="[{content_down1: $i18n.locale == 'zh-CN'}]" style='font-size: 12px;line-height: 15px;margin-top: 5px;'>
									{{$t('lang.becare')}}
								</div>
								<div :class="[{content_down1: $i18n.locale == 'zh-CN'}]" style='font-size: 12px; line-height: 15px;'>{{$t('lang.becare1')}}</div>
							</el-form-item>
						</el-form>
					</div>
					<div class="detailPlan theme">
						<div class=" basicsMsg_item bold al">
							<div class="iden radius"></div> 套餐包含信息
						</div>
						<div v-show="taocanDetail">
							<el-form :label-position="labelPosition"
								:label-width="$i18n.locale == 'zh-CN'? '129px': '175px'" class="demo-ruleForm">
								<el-form-item :label="$t('lang.duration')" prop="inp">
									<div class="al">
										<div class="al inp_time ju">
											<!-- <el-input class="width100"
											oninput ="value=value.replace(/[^0-9]/g,'')" 
											disabled v-model="ruleForm.inp"></el-input> -->
											{{ruleForm.inp}}
										</div>
										<div style="font-size: 13px;margin-left: 5px; color: gray;">
											{{$t('lang.minute')}}
										</div>
									</div>
								</el-form-item>
							</el-form>

							<el-form label-position="top"
							:label-width="$i18n.locale == 'zh-CN'? '100px': '205px'" class="demo-ruleForm">
								<el-form-item label="廣告媒體投放時段">
									<div class="time_duan">
										<div class="clear" v-for="(item,i) in pageTimeList" :key="i">
											<div class="float float320" style="width: 70px;min-width: 70px;" v-if="item.name == '1' && item.timeList.length != 0">{{$t('lang.buTime')}}</div>
											<div class="float float320" style="width: 70px;min-width: 70px;" v-else-if="item.name == '2' && item.timeList.length != 0">{{$t('lang.ubbuTime')}}</div>
											<div class="float float320" style="width: 70px;min-width: 70px;" v-else-if="item.name == '3' && item.timeList.length != 0">{{$t('lang.sbuTime')}}</div>
											<div class="float" v-if="item.name == '1' && item.timeList.length != 0">
												<div class="float" v-for="(res,i) in item.timeList" :key="i"><el-checkbox v-model="checked2" 
												disabled>{{res.packageName}}({{res.num}}分鐘)</el-checkbox></div>
											</div>
											<div class="float" v-if="item.name == '2' && item.timeList.length != 0">
												<div class="float" v-for="(res,i) in item.timeList" :key="i"><el-checkbox v-model="checked2" 
												disabled>{{res.packageName}}({{res.num}}分鐘)</el-checkbox></div>
											</div>
											<div class="float" v-if="item.name == '3' && item.timeList.length != 0">
												<div class="float" v-for="(res,i) in item.timeList" :key="i"><el-checkbox v-model="checked2" 
												disabled>{{res.packageName}}({{res.num}}分鐘)</el-checkbox></div>
											</div>
										</div>
									</div>
								</el-form-item>

								<el-form-item label="套餐指定(店鋪/街道/區域)">
									<div class="list clear">
										<div style="color: #B0B0B0;" class="list_item float al cursor" 
										@click="storehit(i)"
										v-for="(item,i) in storeList" :key="i">
											{{item.msg}} <span class="al" style="margin-left: 5px"></span>
										</div>
									</div>
									<div class="map_wrap">
										<!-- <input
										id="pac-input"
										class="controls"
										type="text"
										placeholder="Search Box"
										/> -->
										<div id="map"></div>
									</div>
								</el-form-item>
							</el-form>
							<div class="total mg sb">
								<div></div>
								<div class="total_price">
									<div class="t_price bold">
										<span>{{$t('lang.total')}}:</span><span class="math_price"> $ {{mpresentPrice}} </span><span class="p_d">HKD</span>
									</div>
									<div class="total_price_item">{{$t('lang.ppotd')}}: <span style="color: red;">$ {{dayPrice}} HKD</span></div>
									<div class="total_price_item">{{$t('lang.days')}}: <span style="color: red;"> {{timeDay}}天</span></div>
									<!-- <div class="price_plan flex cursor" @click="drawer = !drawer"> -->
									<el-popover
										:placement="position1"
										trigger="click"
										v-model="visible">
										套餐價格是按照原有廣告計劃所選擇選項的價格總價，並由本平台進行優惠折扣銷售
										<div slot="reference" class="price_plan flex cursor">
											<img src="@/assets/img/help.png" alt="">
											<div>{{$t('lang.scheme')}}</div>
										</div>
									</el-popover>
								</div>
							</div>
							<div class="sure_plan_wrap">
								<!-- <div class="sure_plan cursor" @click="submitG">{{$t('lang.adconfirm')}}</div> -->

								<el-button class="elbtnsure" style="width: 150px;height: 50px;" @click.native="submitG"
								type="primary">{{$t('lang.adconfirm')}}</el-button>
							</div>
						</div>
						<div v-show="!taocanDetail">請先選擇廣告所屬類型</div>
					</div>
				</div>
				<div class="basicsMsg theme padding" style="margin-top: 15px" v-show="!submit">
					<div :class="['true_title mg al ju',
						{ size27: $i18n.locale=='zh-CN',size15: $i18n.locale=='en-US' }]">
						<img src="@/assets/img/success_sign.png" alt="">{{$t('lang.adconfirmsucc')}} ！
					</div>
					<div class="ju size_13 mg" >{{$t('lang.adconfirmsucc1')}}.</div>
					<div class="iknow ju al">
						<div class="cursor" @click="goBack">{{$t('lang.sure')}}</div>
					</div>
				</div>
			</div>
		</div>
		<el-drawer
			title="請選擇您需要的套餐內容"
			:visible.sync="drawer_tc"
			:direction="direction">
			<div style="padding: 0 20px;overflw:auto;height: 100%" class="noBar scale" v-loading='dloading'>
				<div @click="item.active = !item.active" v-for="(item,i) in combo" :key="i"
					:class="['technology_content_item cursor',{'technology_content_item_border': choose == 1 }]" v-show="technologysubmit">
					<div class="drawer_arrow" @click="active = !item.active">
						<img style="height: 90%;" :class="[{'rotate': item.active}]" src="@/assets/img/pull_down.png" alt="">
					</div>
					<div class="taocan_title bold">{{item.packageName}}</div>
					<div class="clear">
						<div class="float title_p sa al">
							<div>
								<div class="technology_bold">{{item.titleOne}}</div>
								<div class="technology_size12">{{item.titleOneContent}}</div>
							</div>
							<div>
								<div class="technology_bold">{{item.titleTwo}}</div>
								<div class="technology_size12">{{item.titleTwoContent}}</div>
							</div>
						</div>
						<div class="float title_p1 sa al">
							<div>
								<div class="technology_bold_red">計劃原價</div>
								<div class="technology_bold_red1" style="text-decoration: line-through;">
									${{item.oldPrice}} HKD
								</div>
							</div>
							<div class="bold" style="font-size: 14px">
								{{item.concessionalRate}}%
							</div>
							<div class="flex al">
								<div class="technology_bold dor radius ju al">$</div>
								<div class="technology_bold technology_price">{{item.presentPrice}}</div>
								<div class="hkd">HKD</div>
								<div :class="['choose_btn cursor technology_bold',
								{ 'choose_btn_background':choose == item.pageckageId }]" 
								@click.stop='choosetaocan(item.pageckageId)'>選中</div>
							</div>
						</div>
					</div>
					<div :class="['content_msg',{ maxheight: !item.active }]">
						<div class="bold">套餐內容</div>
						<div class="msg_item" v-for="(res,i) in item.contentList" :key='i'>{{res}}</div>
					</div>
				</div>
			</div>
		</el-drawer>
		<el-dialog
			:visible.sync="showVideo"
			width="90%"
			@close='closeVideo'>
			<video id="myVideo" class="video-js" :poster="Poster" v-if="videoWrap"
				:controls="Controls">
				<source :src="src" type="video/mp4">
			</video>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="closeVideo">确 定</el-button>
			</span>
		</el-dialog>
		<el-image-viewer v-if="showViewer" :on-close="closeViewer" :url-list="[dimg]" />
		<el-image-viewer v-if="showViewer1" :on-close="closeViewer1" :url-list="[dimg1]" />
    </div>
</template>

<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
import dimg from "@/assets/img/growing.jpg"
import mar from "@/assets/img/marker.png"
import  axios  from 'axios'
import Client from '@/utils/client'
import { genPackageOrder, getListByTypeId, getbyId, getuploadtoken } from "@/axios/request.js"
export default {
    data() {
        return {
			dayPrice: '',
			timeDay: '',
			uploadHeaders: {
				authorization: '*'
			},
			region: 'oss-cn-beijing',
			bucket: '',//这里选择OSS容器
			url: '',//后台获取token地址
			ClientObj: null,
			id: 'upload',
			urls:[],
			getToken:{
				sign:'',
			},
			mpresentPrice: '',
			listLength: 1,
			imgFlag: false,
			percent: 0,

			previewMP: {},
			videoWrap: false,
			showVideo: false,
			preload: 'auto',  //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            src:'',               //视频的路径
            type: '',                //视频的类型
            Controls: true,              //确定播放器是否具有用户可以与之交互的控件
            Autoplay: '',              //是否自动播放
            Poster: '',                    //设置视频的封面

			showViewer: false, 
			showViewer1: false, 
			dimg: '',
			dimg1: '',
			taocanDetail: false,
			checked2: true,

			copy1: [],
			copy2: [],
			copy3: [],


			position1: 'left-end',
			visible: false,
			drawer: false,
			drawer_tc: false,
			direction: 'rtl',
			submit: true,
			video: true,
            radio: '1',
			labelPosition: 'left',
            ruleForm: {
                name: '',
                area: '',
                store: '',
                street: '',
                // time: '',
                type: '',
				date: '',
				cmediaType1: 0,
                startDate: '',
				endDate: '',
                content: '',
				mediaType: '',
				cmediaType: '',
				imageList: [],
				inp: 1,
            },
            rules: {
                name: [
                    { required: true, message: '請輸入廣告名稱', trigger: 'blur' },
                    { min: 3, max: 15, message: '長度需3 到 15 個字符', trigger: 'blur' }
                ],
                area: [
                    { required: true, message: '請選擇投放區域', trigger: 'blur' }
                ], 
                store: [
                    { required: true, message: '請選擇店鋪', trigger: 'blur' }
                ],
                street: [
                    { required: true, message: '請選擇街道', trigger: 'blur' }
                ],
                // time: [
                //     { required: true, message: '請選擇时间段', trigger: 'blur' }
                // ],
                type: [
                    { required: true, message: '請選擇媒體類型', trigger: 'blur' }
                ], 
				mediaType: [
                    { required: true, message: '請選擇媒體類型', trigger: 'blur' }
                ],
				date: [
                    { required: true, message: '', trigger: 'blur' }
                ],
                startDate: [
                    { type:'date', required: true, message: '請選擇投放起始日期', trigger: 'change' }
                ],
				endDate: [
                    { type: 'date', required: true, message: '請選擇投放結束日期', trigger: 'change' }
                ],
				inp: [
                    {  required: true, message: '請輸入廣告時長', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '請選擇媒體內容', trigger: 'blur' }
                ]
            },
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
            value2: '',
			typeList: [],
			areaList: [],
			timeList: [],
			imageList: [],
			minute: [],         //时长
            storeList: [],
            streetList: [],
            map: '',
            place: null,
			infowindow: null,
			deLight: [],
			last: [],

			allprice: '39999',
            active: false,
            active1: false,
            active2: false,
			choose: null,
			technologysubmit: true,
			combo: [],
			dloading: false,
			loading: false,
			pageTimeList: [],
			pagecomboId: null
		}
    },
	components: { ElImageViewer },
	props: {
		urlList: {
		type: Array,
		default: () => []
		},
		zIndex: {
		type: Number,
		default: 2000
		},
		onSwitch: {
		type: Function,
		default: () => {}
		},
		onClose: {
		type: Function,
		default: () => {}
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
		this.dimg = dimg
	},
    mounted () {
		window.shopadd = this.shopadd;
		window.onPreview = this.onPreview;
		window.closewin = this.closewin;
    },
	watch: {
        lang: {
            handler (val) {
                if (val) {
					if (val == 'zh-CN') {
						if (this.ruleForm.cmediaType == 'image') {
							this.ruleForm.cmediaType = '圖片'
						}else if (this.ruleForm.cmediaType == 'video') {
							this.ruleForm.cmediaType = '視屏'
						}
					} else if (val == 'en-US') {
						if (this.ruleForm.cmediaType == '圖片') {
							this.ruleForm.cmediaType = 'image'
						}else if (this.ruleForm.cmediaType == '視屏') {
							this.ruleForm.cmediaType = 'video'
						}
					}
                }
            }
        },
		getTypeList: {
			handler (val) {
				if (val) {
					this.getTypeList = val
					this.$store.dispatch('getAddress',this) 
				}
			},
		},
		addressList: {
			handler (val) {
				if (val) {
					this.addressList = val
				}
			}
		},
		mapstoreList: {
			handler (val) {
				if (val) {
					this.mapStoreListShow = []
					this.mapstoreList = val
					val.forEach((child,i) => {
						child.area = '暫無地區'
						this.addressList.forEach(item => {
							if (child.addressParentId == item.id) {
								child.area = item.addressName
							}
						})
						this.mapStoreListShow.push({
							position: new google.maps.LatLng(child.latitude,child.longitude),
							type: "info",
							msg: child.shopName,
							area: child.area,
							address: child.shopAddressName,
							widthAndHeihth: child.widthAndHeihth,
							shopId: child.shopId,
							timeIntervalNames: child.timeIntervalNames,
							typeNames: child.typeNames,
							priceContents: child.priceContents,
							addressParentId: child.addressParentId,
							addressId: child.addressId,
							images: child.images
						})
					})
					this.initMap(22.6,114.1,1)
				}
			},
		},
		ossData: {
			handler (val) {
				if (val) {
					this.ossData = val
				}
			},
		}
    },
	computed: {
        lang () { return this.$i18n.locale },
		getTypeList:{             //類型列表
			get () { return this.$store.state.user.typeList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'typeList',
					value: val
				})
			}
		},
		addressList: {           //地址列表
			get () { return this.$store.state.user.addressList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'addressList',
					value: val
				})
			}
		},
		mapstoreList:{             //店鋪列表
			get () { return this.$store.state.user.storeList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'storeList',
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
		genPackageOrder () {
			this.loading = true
			let arr = []
			this.ruleForm.imageList.forEach(item => {
				arr.push({
					"fileType":  Number(this.ruleForm.cmediaType1),
					"url": item.url
				})
			})
			let data = {
				guangGaoPackageOrderDtoJson: {
					"endTime": String(new Date(this.ruleForm.endDate).toLocaleDateString().split('/').join('-')),
					"guangGaoContentDtos": arr,
					"length": this.ruleForm.inp,
					"name": this.ruleForm.name,
					"packageId": this.pagecomboId,
					"startTime": String(new Date(this.ruleForm.startDate).toLocaleDateString().split('/').join('-')),
					"typeId": this.ruleForm.type,
					"userId": Number(localStorage.getItem('compoundeyesUserId'))
				}
			}
			let str = JSON.stringify(data.guangGaoPackageOrderDtoJson)
			const qs = require('qs')
			let data1 = qs.stringify({
				guangGaoPackageOrderDtoJson: str
			})
			genPackageOrder(data1).then(res => {
				this.loading = false
				console.log(res)
				if (res.data.rtnCode == 200) {
					this.submit = false
					this.$message({
						type: 'success',
						message: this.$t('lang.addSuccess')
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
					message: this.$t('lang.addFail')
				})
			})
		},

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
							progress: function* (percentage, cpt) {
								// 上传进度
								// _this.percent = percentage
							}
						}).then((res) => {
							if (res.res.statusCode == 200) {
								let size
								if (file.size >= 1000000) {
									var s = file.size/1000000
									size = s.toFixed(1) + 'M'
									// size = Math.ceil(files[ff].size/1000000) + 'm'
								} else {
									var s = file.size/1000
									size = s.toFixed(0) + 'KB'
									// size = Math.ceil(files[ff].size/1000) + 'kb'
								}
								this.percent = 100;
								setTimeout(() => {
									that.imgFlag = false;
									that.percent = 0;
								},1000)
								if (that.ruleForm.mediaType == 'video') {
									let audioElement = new Audio(res.res.requestUrls[0].split('?')[0]);
									audioElement.addEventListener("loadedmetadata", function (_event) {
										var time = Math.ceil(audioElement.duration)
										console.log(time)
										var sTime = parseInt(time);// 秒
										var mTime = 0;// 分
										if ( sTime > 60 ) {//如果秒数大于60，将秒数转换成整数
											//获取分钟，除以60取整数，得到整数分钟
											mTime = parseInt(sTime / 60);
											//获取秒数，秒数取佘，得到整数秒数
											sTime = parseInt(sTime % 60);
										}
										that.ruleForm.imageList.push({ 
											url: res.res.requestUrls[0].split('?')[0], 
											name: res.name, 
											size: size, 
											time: time,
											videoTime: mTime + '分' + sTime + '秒'
										})
										let obj = {
											url: res.res.requestUrls[0].split('?')[0], 
											name: res.name, 
											size: size, 
											time: time,
											videoTime: mTime + '分' + sTime + '秒'
										}
										let index = that.ruleForm.imageList.length -1
										setTimeout(() => {
											that.initialize(index,obj)
										},200)
										// that.minute.push(Math.ceil(audioElement.duration))
										that.minute.push(time)
										that.$forceUpdate()
									});
								} else if (that.ruleForm.mediaType == 'image') {
									that.ruleForm.imageList.push({ 
										// url: res.res.requestUrls[0], 
										url: 'http://osshongk.oss-cn-hongkong.aliyuncs.com/'+res.name,
										name: res.name, 
										size: size, 
										time: null, 
										videoTime: null
									})
								}
								return res.res.requestUrls
							} else {
								that.$message.error('上传附件失败！');
							}
							// 上传完成
							// const url = 'http://osshongk.oss-cn-hongkong.aliyuncs.com/'+res.name; 
							// _this.$store.dispatch("changeUrl", _this.url); 
							// _this.url = url; 
							// console.log(url); 
						}).catch((err) => { console.log(err) }) 
					} 
				} 
			}) 
		}, 
        handleUpload(e){
			let file = e.target.files[0]
			if (this.ruleForm.mediaType == 'image') {
				let boo = false
				if (this.ruleForm.imageList.length <= 10 ) { boo = true }

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
				
			} else if (this.ruleForm.mediaType == 'video') {
				let boo = false
				if ( this.ruleForm.imageList.length <= 5 ) { boo = true }

				if (boo) {
					var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
					const extension = testmsg === 'mp4'

					const isLimit10M = file.size / 1024 / 1024 < 100
					var bool = false;
					if (extension && isLimit10M) { bool = true; } else { bool = false; }
					if (!extension) {
						this.$message.error('請選擇視頻文件！');
						return bool;
					}
					if (!isLimit10M) {
						this.$message.error('上傳失敗，不能超過100M！');
						return bool;
					}
					if (bool) {
						this.doUpload()
					}
					return bool;
				}
			} else {
				this.$message.warning('請選擇媒體廣告類型')
			}
        },
		initialize (ff, obj) {
			var scale = 0.8;
			var output = this.$refs.output[ff]
			var video = this.$refs.video[ff]
			// console.log(ff)
			video.addEventListener('loadeddata',this.captureImage(video,output,scale, obj));
		},
		captureImage (video,output,scale,obj) {
			let that = this
			setTimeout(() => {
				var canvas = document.createElement("canvas");
				canvas.width = video.videoWidth * scale;
				canvas.height = video.videoHeight * scale;
				canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
				var img = document.createElement("img");
				img.src = canvas.toDataURL("image/png");
				canvas.toBlob(function (blob) {
					console.log(blob)
					let files = new window.File([blob], 'image.png', {type: blob.type})
					files.uid = new Date().getTime()
					that.cutVideo(files,obj)
				})
				// img.width = 400;
				// img.height = 100;
				output.appendChild(img);
			},100)
		},
		async cutVideo(options,obj) {
			let that = this
            try {
                let file = options; // 拿到 file
				console.log(file)
				let oss = {
					region: 'oss-cn-hongkong',
					bucket: that.ossData.buketName,
					accessKeyId: that.ossData.accessKeyId,
					accessKeySecret: that.ossData.accessKeySecret,
					stsToken: that.ossData.securityToken
				}
				var client = Client(oss)
				var random_name = 'image' + new Date().getTime();
				// 分片上传文件
				await client.multipartUpload(random_name, file, {
					
				}).then(res => {
					let url = res.res.requestUrls[0].split('?')[0]
					obj.imageUrl = url
					that.ruleForm.imageList.forEach(item => {
						if (item.url == obj.url) {
							console.log(item)
							item.imageUrl = obj.imageUrl
						}
					})
				})
				that.$forceUpdate()
                // 返回数据
                // this.$emit("fileData", res);
                that.$message.success("視頻截幀成功！");
            } catch (e) {
                that.$message.error('上传附件失败！');
            }
        },

		getListByTypeId () {
            this.tableData = []
			this.drawer_tc = true
            this.dloading = true
            let data = {
                typeId: this.ruleForm.type,
            }
            getListByTypeId(data).then(res => {
                this.dloading = false
                console.log(res)
                if (res.data.rtnCode == 200) {
					res.data.data.forEach(item => {
						item.active = false
					})
                    this.combo = res.data.data
                } else {
                    this.$message({
                        type: 'warning',
                        message: res.data.msg
                    })
                }
            }).catch(e => {
                this.dloading = false
                this.$message({
                    type: 'error',
                    message: this.$t('lang.loading')
                })
            })
        },
		previewVideo (item) {
			this.src = item.url
			this.showVideo = true
			this.videoWrap = true
		},
		closeVideo () {
			this.showVideo = false
			this.videoWrap = false
		},

		imgPreview (url) {
			this.dimg1 = url
			this.showViewer1 = true
		},
		onPreview() {         //地圖店鋪預覽圖
			this.showViewer = true
        },
        // 关闭查看器
        closeViewer() {
          this.showViewer = false
        },
		closeViewer1() {
          this.showViewer1 = false
        },
		getbyId (id) {
			let data = {
				packageId: id
			}
			let that = this
			this.loading = true
			getbyId(data).then(res => {
				this.loading = false
				if (res.data.rtnCode == 200) {
					let obj = res.data.data
					this.mpresentPrice = obj.presentPrice
					this.ruleForm.startDate = new Date(obj.startTime)
					this.ruleForm.endDate = new Date(obj.endTime)
					var endTime = new Date(obj.endTime).getTime() / 1000 - parseInt(new Date(obj.startTime).getTime() / 1000);
					this.timeDay = parseInt(endTime / 60 / 60 / 24);        //相差天数
					this.dayPrice = Math.ceil(obj.presentPrice / parseInt(endTime / 60 / 60 / 24))
					// endTime = endTime - this.timeDay * 60 * 60 * 24;
					// this.timeHour = parseInt(endTime / 60 / 60);            //相差小时
					// endTime = endTime - this.timeHour * 60 * 60;
					// this.timeMinutes = parseInt(endTime / 60);   
					this.ruleForm.inp = obj['length']
					this.taocanDetail = true
					this.typeList = []
					this.choose = obj.pageckageId
					this.allprice = obj.presentPrice
					// this.pageTimeList = obj.packageTimeInterList
					this.typeList.push(obj.packageName)
					let arr1 = new Set(this.typeList)
					this.typeList = Array.from(arr1)
					let arr = [
						{
							name: 1,
							timeList: []
						},
						{
							name: 2,
							timeList: []
						},
						{
							name: 3,
							timeList: []
						}
					]
					obj.packageTimeInterList.forEach(item => {
						if (item.timeIntervalId == '1') {
							arr[0].timeList.push(item)
						}
						if (item.timeIntervalId == '2') {
							arr[1].timeList.push(item)
						}
						if (item.timeIntervalId == '3') {
							arr[2].timeList.push(item)
						}
					})
					this.pageTimeList = arr
					this.storeList = obj.shopVoList

					this.storeList.forEach(child => {
						this.addressList.forEach(item => {
							if (item.addressParentId == child.id) {
								item.addressName
							}
						})
						child.type = 'info'
						child.position = new google.maps.LatLng(child.latitude,child.longitude)
						child.address = child.shopAddressName
						child.addressId = child.addressId
						child.addressParentId = child.addressParentId
						// child.area = "暫無地區"
						child.msg = child.shopName
						child.priceContents = child.priceContents
						child.shopId = child.shopId
						child.timeIntervalNames = child.timeIntervalNames
						child.typeNames = child.typeNames
						child.widthAndHeihth = child.widthAndHeihth

					})
					this.$nextTick(() => {
						that.initMap(22.32,114.17,1)
					})
				}
				console.log(res)
			}).catch(e => {
				this.loading = false
			})
		},
		choosetaocan (i) {
			this.drawer_tc = false
			this.getbyId(i)
			this.pagecomboId = i
			// this.ruleForm.inp = minute
			
			// this.typeList = []
			// this.drawer_tc = false
			// this.choose = i
			// this.allprice = val
			// this.pageTimeList = list
			// this.typeList.push(value)
			// let arr = new Set(this.typeList)
			// this.typeList = Array.from(arr)
		},
		storehit (i) {
			let that = this
			let map = this.map
			const iconBase = "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
			const icons = {
				parking: {
				icon: iconBase + "parking_lot_maps.png",
				},
				library: {
				icon: iconBase + "library_maps.png",
				},
				info: {
				icon: iconBase + "info-i_maps.png",
				},
			};
			const features = [
				{
				position: new google.maps.LatLng(22.7, 114.1),
				type: "info",
				msg: this.$t("lang.ks")
				},
				{
				position: new google.maps.LatLng(22.79, 114.16),
				type: "info",
				msg: '車展會'
				},
				{
				position: new google.maps.LatLng(22.87, 114.13),
				type: "info",
				msg: '科技大廈'
				},
				{
				position: new google.maps.LatLng(22.66, 114.10),
				type: "info",
				msg: '醫院'
				},
				{
				position: new google.maps.LatLng(22.8, 114.1),
				type: "info",
				msg: '時尚大廳'
				},
				{
				position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
				type: "parking",
				},
				{
				position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
				type: "parking",
				},
				{
				position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
				type: "parking",
				},
				{
				position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
				type: "parking",
				},
				{
				position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
				type: "parking",
				},
				{
				position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
				type: "parking",
				},
				{
				position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
				type: "parking",
				},
				{
				position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
				type: "library",
				},
			];
			// Create markers.
			if (that.$i18n.locale == 'zh-CN') {
				// for (let i = 0; i < features.length; i++) {
					const marker1 = new google.maps.Marker({
						position: features[i].position,
						icon: icons[features[i].type].icon,
						map: map,
					});
					
					const contentString1 = 
						`
							<div class="sb" style="height: 100px;">
								<div style="width: 150px;height: 100px;overflow: hidden;">
									<img style="height: 109%;" src= ${dimg} onclick="onPreview()">
								</div>
								<div style="width: 150px;height: 100px;overflow: hidden;
									margin:0 7px;">
									<img style="height: 109%;" src= ${dimg}  onclick="onPreview()">
								</div>
								<div style="width: 150px;height: 100px;overflow: hidden;">
									<img style="height: 109%;" src= ${dimg}  onclick="onPreview()">
								</div>
							</div>
						` +
						`
							<div class="sb" style="margin-top:5px;">
								<div class='bold tc'>${features[i].msg}(旺角店)</div>
								<div class="contentString1_address" 
								style="text-decoration: underline;
								font-size:12px;">香港旺角區旺角街道666號</div>
							</div>
						` + 
						`
							<div class="size12">
								<div>
									<span>廣告顯示的尺寸(高 × 寬):</span>
									<span style="color: blue;">2m × 1m</span>
								</div>
								<div>
									<span>為廣告商開放的可用時間:</span>
									<span style="color: blue;">9am~23pm</span>
								</div>
								<div>
									<span>廣告不接受的業務類型:</span>
									<span style="color: blue;">食品</span>
								</div>
								<div>
									<span>高峰/非高峰時段的每月價格:</span>
									<span style="color: blue;">
										<div>高峰(20000HKD/month)</div>
										<div>非高峰(10000HKD/month)</div>
									</span>
								</div>
							</div>
						` 
					
					that.openwin(contentString1,marker1,map)
				// }
			} else if (that.$i18n.locale == 'en-US') {
				console.log(that.$i18n.locale)
				// for (let i = 0; i < features.length; i++) {
					const marker1 = new google.maps.Marker({
						position: features[i].position,
						icon: icons[features[i].type].icon,
						map: map,
					});
					
					const contentString1 = 
						`
							<div class="sb" style="height: 100px;">
								<div style="width: 150px;height: 100px;overflow: hidden;">
									<img style="height: 109%;" src= ${dimg}  onclick="onPreview()">
								</div>
								<div style="width: 150px;height: 100px;overflow: hidden;
									margin:0 7px;">
									<img style="height: 109%;" src= ${dimg}  onclick="onPreview()">
								</div>
								<div style="width: 150px;height: 100px;overflow: hidden;">
									<img style="height: 109%;" src= ${dimg}  onclick="onPreview()">
								</div>
							</div>
						` +
						`
							<div class="sb" style="margin-top:5px;">
								<div class='bold tc'>${features[i].msg}(Mong Kok Store)</div>
								<div class="contentString1_address" 
								style="text-decoration: underline;
								font-size:12px;">HongKong street at six</div>
							</div>
						` + 
						`
							<div class="size12">
								<div>
									<span>size (height x width) of adv display:</span>
									<span style="color: blue;">2m × 1m</span>
								</div>
								<div>
									<span>available hour opened for advertisers:</span>
									<span style="color: blue;">9am~23pm</span>
								</div>
								<div>
									<span>type of business unaccepted for adv:</span>
									<span style="color: blue;">Food</span>
								</div>
								<div>
									<span>monthly price at rush/non-rush hour:</span>
									<span style="color: blue;">
										<div>rush(20000HKD/month)</div>
										<div>non-rush(10000HKD/month)</div>
									</span>
								</div>
							</div>
						` 

					// marker1.addListener("click", () => {
						that.openwin(contentString1,marker1,map)
					// });
				// }
			}
		},
		initMap (lat,lng,val) {
			let that = this
			let boolean = true
			let map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: lat, lng: lng},
				zoom: 11,
				mapTypeId: "roadmap",
				disableDefaultUI: true,
				zoomControl: boolean,
				// mapTypeControl: boolean,
				scaleControl: boolean,
				streetViewControl: boolean,
				rotateControl: boolean,
				fullscreenControl: boolean,
			});
			this.map = map

			if (navigator.geolocation) {       //获取自身定位
				navigator.geolocation.getCurrentPosition(function(position) {
					var pos = {
					// lat: position.coords.latitude,
					// lng: position.coords.longitude
						lat: lat,
                        lng: lng
					};
					var marker = new google.maps.Marker({position: pos, map: map});
					map.setCenter(pos);
				})
			}
			if (val == 1) {
				const iconBase = mar
				const icons = {
					info: {
						icon: iconBase
					},
				};
				const features = this.storeList
				// Create markers.
				if (that.$i18n.locale == 'zh-CN') {
					console.log(that.$i18n.locale)
					for (let i = 0; i < features.length; i++) {
						const marker1 = new google.maps.Marker({
							position: features[i].position,
							icon: icons[features[i].type].icon,
							map: map,
						});
						
						const contentString1 = 
							`
								<div class="sb" style="height: 100px;">
									<div style="width: 150px;height: 100px;overflow: hidden;">
										<img style="height: 109%;" src= ${dimg} onclick="onPreview()">
									</div>
									<div style="width: 150px;height: 100px;overflow: hidden;
										margin:0 7px;">
										<img style="height: 109%;" src= ${dimg}  onclick="onPreview()">
									</div>
									<div style="width: 150px;height: 100px;overflow: hidden;">
										<img style="height: 109%;" src= ${dimg}  onclick="onPreview()">
									</div>
								</div>
							` +
							`
								<div class="sb" style="margin-top:5px;">
									<div class='bold tc'>${features[i].msg}(${features[i].area})</div>
									<div class="contentString1_address" 
									style="text-decoration: underline;
									font-size:12px;">${features[i].area}</div>
								</div>
							` + 
							`
								<div class="size12">
									<div>
										<span>廣告顯示的尺寸(寬 × 高):</span>
										<span style="color: blue;">${features[i].widthAndHeihth}</span>
									</div>
									<div>
										<span>為廣告商開放的可用時間:</span>
										<span style="color: blue;">${features[i].timeIntervalNames}</span>
									</div>
									<div>
										<span>廣告不接受的業務類型:</span>
										<span style="color: blue;">${features[i].typeNames}</span>
									</div>
									<div>
										<span>高峰/非高峰時段的每月價格:</span>
										<span style="color: blue;">
											<div>高峰(20000HKD/month)</div>
											<div>非高峰(10000HKD/month)</div>
										</span>
									</div>
								</div>
							`


						marker1.addListener("click", () => {
							that.openwin(contentString1,marker1,map)
						});
					}
				} else if (that.$i18n.locale == 'en-US') {
					for (let i = 0; i < features.length; i++) {
						const marker1 = new google.maps.Marker({
							position: features[i].position,
							icon: icons[features[i].type].icon,
							map: map,
						});
						
						const contentString1 = 
							`
								<div class="sb" style="height: 100px;">
									<div style="width: 150px;height: 100px;overflow: hidden;">
										<img style="height: 109%;" src= ${dimg}  onclick="onPreview()">
									</div>
									<div style="width: 150px;height: 100px;overflow: hidden;
										margin:0 7px;">
										<img style="height: 109%;" src= ${dimg}  onclick="onPreview()">
									</div>
									<div style="width: 150px;height: 100px;overflow: hidden;">
										<img style="height: 109%;" src= ${dimg}  onclick="onPreview()">
									</div>
								</div>
							` +
							`
								<div class="sb" style="margin-top:5px;">
									<div class='bold tc'>${features[i].msg}(${features[i].area})</div>
									<div class="contentString1_address" 
									style="text-decoration: underline;
									font-size:12px;">${features[i].area}</div>
								</div>
							` + 
							`
								<div class="size12">
									<div>
										<span>size (height x width) of adv display:</span>
										<span style="color: blue;">${features[i].widthAndHeihth}</span>
									</div>
									<div>
										<span>available hour opened for advertisers:</span>
										<span style="color: blue;">${features[i].timeIntervalNames}</span>
									</div>
									<div>
										<span>type of business unaccepted for adv:</span>
										<span style="color: blue;">${features[i].typeNames}</span>
									</div>
									<div>
										<span>monthly price at rush/non-rush hour:</span>
										<span style="color: blue;">
											<div>rush(20000HKD/month)</div>
											<div>non-rush(10000HKD/month)</div>
										</span>
									</div>
								</div>
							`

						marker1.addListener("click", () => {
							that.openwin(contentString1,marker1,map)
						});
					}
				}
			}
		},
		shopadd (val) {
			this.addStore(val)
		},
		openwin (contentString1,marker1,map) {
			if (this.infowindow) {
				this.infowindow.close()
			}
			this.infowindow = new google.maps.InfoWindow({
				content: contentString1,
			});
			this.infowindow.open({
				anchor: marker1,
				map,
				shouldFocus: false,
			});
		},
		closewin (val) {
			this.infowindow.close()
		},
		lightArea () {
			let that = this
			let map = this.map
			// Construct the polygon.
			const bermudaTriangle = new google.maps.Polygon({
				paths: that.deLight,
				strokeColor: "#FF0000",
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: "#FF0000",
				fillOpacity: 0.35,
			})
			this.delelightArea(bermudaTriangle)
			bermudaTriangle.setMap(map);
		},
		delelightArea (bermudaTriangle) {
			bermudaTriangle.setMap(null);
		},
		fun () {
			if (window.innerWidth <= 564) {
                this.labelPosition = 'top'
            } else {
                this.labelPosition = 'left'
            }
			if (window.innerWidth <= 666) {
				this.position = 'top'
			} else {
				this.position = 'left-end'
			}
		},
		STIME (val) {
			let D = new Date(val)
			let start = D.getTime()
			if (this.ruleForm.endDate) {
				if (start > this.ruleForm.endDate.getTime()) {
					this.ruleForm.endDate = ''
				}
			}
		},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
			if (valid) {
				alert('submit!');
			} else {
				console.log('error submit!!');
				return false;
			}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		submitG () {
			this.genPackageOrder()
			
		},
		goBack () {
			this.$router.back()
		},
		addType (item) {
			if (item) {
				this.typeList.push(item)
				let arr = new Set(this.typeList)
				this.typeList = Array.from(arr)
			}
		},
		addArea (item) {
			if (item) {
				this.areaList.push(item)
				let arr = new Set(this.areaList)
				this.areaList = Array.from(arr)
			}
		},
        addStore (item) {
			this.infowindow.close()
			if (item) {
				this.storeList.push(item)
				let arr = new Set(this.storeList)
				this.storeList = Array.from(arr)
			}
		},
        addStreet (item) {
			if (item) {
				this.streetList.push(item)
				let arr = new Set(this.streetList)
				this.streetList = Array.from(arr)
			}
		},
		deleType (i) {
			this.taocanDetail = false
			this.typeList.splice(i,1)
		},
        deleStore (i) {
			this.storeList.splice(i,1)
		},
        deleStreet (i) {
			this.streetList.splice(i,1)
		},
		deleArea (i) {
			this.areaList.splice(i,1)
		},
		addTime (item) {
			if (item) {
				this.timeList.push(item)
				let arr = new Set(this.timeList)
				this.timeList = Array.from(arr)
			}
		},
		deleTime (i) {
			this.timeList.splice(i,1)
		},
		getType (e) {
			this.ruleForm.imageList = []
			// this.ruleForm.inp = ''
			this.minute = []
			if (e == 1) {
				this.listLength = 10
				this.video = false
				this.ruleForm.mediaType = 'image'
				this.ruleForm.cmediaType = this.$t('lang.image')
				this.ruleForm.cmediaType1 = 1
			} else if (e == 3) {
				this.listLength = 5
				this.video = true
				this.ruleForm.mediaType = 'video'
				this.ruleForm.cmediaType = this.$t('lang.video')
				this.ruleForm.cmediaType1 = 3
			}
		},
		deleImg (i) {
			if (this.ruleForm.mediaType == 'video') {
				this.minute.splice(i,1)
				this.ruleForm.inp = 0
				for (let i=0;i<Array.from(this.minute).length;i++) {
					this.ruleForm.inp = this.ruleForm.inp*1 + this.minute[i]
					this.$forceUpdate()
				}
				this.ruleForm.imageList.splice(i,1)
			} else {
				this.ruleForm.imageList.splice(i,1)
			}
		},
		initialize (ff) {
			var scale = 0.8;
			var output = this.$refs.output[ff]
			var video = this.$refs.video[ff]
			console.log(ff)
			video.addEventListener('loadeddata',this.captureImage(video,output,scale));
		},
		captureImage (video,output,scale) {
			setTimeout(() => {
				var canvas = document.createElement("canvas");
				canvas.width = video.videoWidth * scale;
				canvas.height = video.videoHeight * scale;
				canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
				var img = document.createElement("img");
				img.src = canvas.toDataURL("image/png");
				
				// img.width = 400;
				// img.height = 100;
				output.appendChild(img);
			},100)
		}
    }
}
</script>

<style lang='less' scoped>
@import "@/less/style.less";
	.content_down {
		width: calc(100% + 111px);
		position: relative;
		margin-top: 35px;
		margin-left: -105px;
		@media screen and (max-width: 564px) {
            margin-left: 5px;
			margin-top: 0px;
			width: 98%;
        }
	}
	.content_down1 {
		width: calc(100% + 111px);
		// margin-top: 35px;
		margin-left: -105px;
		@media screen and (max-width: 564px) {
            margin-left: 5px;
			width: 98%;
        }
	}
	.scale {
		@media screen and (max-width: 564px) {
			margin-top: -50px;
			transform: scale(0.8);
			width: calc(100% + 100px);
			margin-left: -50px;
		}
	}
	.float320 {
		margin-right: 15px;
		@media screen and (max-width: 315px) {
			margin-right: 0px;
		}
	}
	.time_duan {
		background: white;
		padding: 17px 10px;
	}
	.technology_price {
        // width: 70px;
        min-width: 60px;
        display: inline-block;
    }
    .taocan_title {
        font-size: 16px;
        color: gray;
        padding: 0 15px;
        height: 0;
    }
    .technology {
        height: 102%;
        padding-top: 20px;
        background: white;
    }
    .technology_content_item {
		// min-width: 530px;
        border: solid 2px #e9e8e8;
        position: relative;
        border-radius: 5px;
        margin-bottom: 15px;
		min-height: 125px;
		padding-top: 20px;
        transition: 0.2s;
		@media screen and (max-width: 970px) {
			padding-top: 15px;
			padding-bottom: 10px;
		}
        .drawer_arrow {
            position: absolute;
			z-index: 100;
            width: 20px;
            height: 20px;
            right: 10px;
            top: 60px;
            transform: translate(0,-20%);
            img {
                transition: 0.2s; 
            }
			@media screen and (max-width: 970px) {
                top: 20px;
            }
        }
        .content_msg {
            font-size: 13px;
            width: 100%;
            padding: 10px 20px 20px 20px;
            border-radius: 4px;
            max-height: 300px;
            transition: 0.2s;
            overflow: hidden;
        }
    }
    .technology_content_item_border {
        // border: solid 2px #3DFFFC;
		border: solid 2px #e9e8e8;
    }
    .rotate {
        transform: rotateZ(-180deg);
    }
    .maxheight {
        max-height: 0 !important;
        padding: 0 20px 0px 20px !important;
        border: none !important;
    }
    .msg_item {
        color: rgb(156, 156, 156);
        font-size: 13px;
        padding: 25px 10px 10px 10px;
        border-bottom: solid 1px rgb(230, 230, 230);
    }
    .technology_content {
        width: 100%;
        max-width: 900px;
        height: 100%;
        overflow: auto;
    }
    .title_p {
        min-width: 300px;
        width: 43%;
        height: 100px;
        @media screen and (max-width: 970px) {
            height: 75px;
            width: 100%;
        }
    }
    .title_p1 {
        min-width: 300px;
        width: 53%;
        height: 100px;
        @media screen and (max-width: 970px) {
            height: 55px;
            width: 100%;
        }
    }
    .width166 {
        @media screen and (max-width: 753px) {
            min-width: 166px;
            width: 166px;
        }
    }
    .youhui {
        width: 95px;
        @media screen and (max-width: 970px) {
            width: 55px;
        }
        img {
            width: 100%;
        }
    }
    .technology_bold {
        font-size: 14px;
        font-weight: bold;
        @media screen and (max-width: 753px) {
            font-size: 12px;
        }
    }
    .technology_bold_red {
        font-size: 14px;
        font-weight: bold;
        color: red;
        white-space: nowrap;
        @media screen and (max-width: 753px) {
            font-size: 12px;
        }
    }
    .technology_bold_red1 {
        font-size: 14px;
        font-weight: bold;
        color: red;
        white-space: nowrap;
        @media screen and (max-width: 753px) {
            font-size: 12px;
        }
        min-width: 75px;
        max-width: 75px;
    }
    .technology_size12 {
        font-size: 12px;
        color: gray;
    }
    .dor {
        width: 45px;
        height: 45px;
        background: rgb(235, 235, 235);
        margin-right: 10px;
    }
    .hkd {
        color: gray;
        font-size: 12px;
        margin: 0 10px;
    }
	.video_outWrap {
		height: 100%
	}
    .choose_btn {
        color: #1BFEF7;
        border: solid 1px #1BFEF7;
        border-radius: 17px;
        padding: 5px 17px;
    }
    .choose_btn_background {
        background: #1BFEF7 !important;
        color: white !important;
    }
    .content {
        width: 85%;
        // height: calc(100% - 35px);
        padding: 7px 7px;
        background: white;
		// margin-top: 15px;
        // overflow: auto;
		@media screen and (max-width: 564px) {
			width: 100%;
		}
    }
	.heigh {
		height: auto !important;
	}
	.elbtn {
		margin-left: 20px;
		@media screen and (max-width: 564px) {
			margin-left: 0;
		}
	}
	.l_time {
		width: 72px;
		text-align: end;
	}
	.footer_text {
		font-size: 12px;
		color: gray;
	}
	.sfooter_text {
		color: rgb(13, 219, 255);
		font-size: 12px;
	}
	.dra_content {
		height: calc(100% - 98px);
		overflow: auto;
		padding: 0 20px;
	}
	.AdvertisingOperation_back {
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
    .AdvertisingAddPlus {
        margin-top: 20px;
        height: 100%;
		position: relative;
		.back_a {
			position: absolute;
			top: 5px;
			left: 20px;
			width: 30px;
		}
    }
    .content_title {
        font-size: 22px;
        font-weight: 500;
        padding: 15px 0;
        background: white;
    }
	.width384 {
		@media screen and (max-width: 384px) {
			margin-top: 20px;
		}
	}
    .basicsMsg {
        margin-bottom: 15px;
        padding: 0 20px 20px 20px;
    }
    .basicsMsg_item {
        padding: 20px 0;
        font-size: 15px;
    }
    .detailPlan {
        // margin-bottom: 15px;
        padding: 0 20px 20px 20px;
    }
    .iden {
        border: solid 4px;
		background: black;
        width: 0;
        height: 0;
        margin-right: 7px;
    }
    // .detailPlan {
    //     // height: 1000px;
	// 	padding-bottom: 30px;
	// 	margin-bottom: 20px;
    // }
    .addCate {
        border: solid 1px rgb(206, 206, 206);
        padding: 0 20px;
        box-shadow: 2px 2px 6px rgb(224, 224, 224) inset;
        height: 39px;
        margin-left: 15px;
		white-space: nowrap;
    }
    .inp_time {
		width: 70px;
		background: #F5F7FA;
		border: solid 1px #E4E7ED;
		color: rgb(168, 168, 168);
		height: 37px;
		margin-right: 5px;
    }
    .textarea_wrap {
		width: 100%;
		min-height: 250px;
		background: white;
		box-shadow: 0 0 8px rgb(212, 212, 212) inset;
		padding: 20px 27px;
		@media screen and (max-width: 564px) {
			padding: 10px 17px;
		}
    }
	.addImg {
		border: dashed 1px rgb(201, 201, 201);
		width: 100px;
		height: 100px;
		margin: 5px;
		@media screen and (max-width: 564px) {
			width: 70px;
			height: 70px;
		}
	}
	.addImg:hover {
		border: dashed 1px rgb(148, 148, 148);
	}
	.textarea_wrap_item {
		width: 100px;
		height: 110px;
		margin: 5px;
		position: relative;
		.imageList_wrap {
			border: solid 1px rgb(230, 230, 230);
			width: 100px;
			height: 100px;
			@media screen and (max-width: 564px) {
				width: 70px;
				height: 70px;
			}
		}
		@media screen and (max-width: 564px) {
			width: 70px;
			height: 70px;
		}
	}
	.imageList_name, .imageList_size {
		max-width: 100px;
		text-overflow: ellipsis; /*有些示例里需要定义该属性，实际可省略*/
		display: -webkit-box;
		-webkit-line-clamp: 1;/*规定超过两行的部分截断*/
		-webkit-box-orient: vertical;
		overflow : hidden; 
		word-break: break-all;/*在任何地方换行*/
		font-size: 12px;
		color: #A7A7A7;
		line-height: 15px;
		@media screen and (max-width: 564px) {
			max-width: 70px;
		}
	}
	.textarea_wrap_item_child {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.deleImg {
		background: rgb(224, 224, 224);
		position: absolute;
		top: -5px;
		right: -5px;
		width: 20px;
		height: 20px;
		z-index: 22;
		// opacity: 0.9;
	}
	.br1185 {
		@media screen and (max-width: 1185px) {
			display: block;
		}
	}
	.total {
		width: 90%;
		font-size: 14px;
		@media screen and (max-width: 774px) {
			font-size: 12px;
			// width: 100%;
		}
		.total_msg {
			width: 60%;
			padding: 20px 25px;
			background: white;
			position: relative;
			@media screen and (max-width: 774px) {
				width: 100%;
			}
			.arrow_br {
				position: absolute;
				bottom: 0;
				right: -40px;
				width: 0;
				height: 0;
				border: solid 20px;
				z-index: 10;
				border-color: transparent transparent transparent white;
			}
		}
		.total_price {
			width: 30%;
			padding: 10px;
			min-width: 224px;
			@media screen and (max-width: 774px) {
				width: 45%;
			}
		}
	}
	.total_item {
		margin-bottom: 10px;
		@media screen and (max-width: 414px) {
			display: block;
		}
	}
	.l_msg {
		width: 200px;
		@media screen and (max-width: 564px) {
			width: 124px;
		}
	}
	.r_msg {
		color: gray;
		@media screen and (max-width: 414px) {
			margin-left: 15px;
		}
	}
	.t_price {
		font-size: 16px;
		.math_price {
			color: rgb(250, 25, 25);
		}
	}
	.total_price_item {
		font-size: 13px;
		margin-top: 10px;
	}
	.price_plan {
		margin-top: 17px;
		// transform: translate(0px, -17px);
		font-size: 16px;
		color: rgb(92, 92, 92);
		text-decoration: underline;
		white-space: nowrap;
		img {
			width: 20px;
			height: 20px;
			margin-right: 4px;
		}
	}
	.sure_plan_wrap {
		width: 85%;
		display: flex;
		justify-content: flex-end;
		@media screen and (max-width: 564px) {
			width: 100%;
			justify-content: center;
		}
	}
	.sure_plan {
		color: rgb(250, 25, 25);
		display: inline-block;
		padding: 18px 50px;
		font-size: 16px;
		box-shadow: 0 0 5px gray inset;
		margin-top: 50px;
		@media screen and (max-width: 564px) {
			white-space: nowrap;
			font-size: 14px;
			padding: 18px 40px;
			margin-top: 30px;
		}
	}
	.elbtnsure {
		margin-top: 50px;
		@media screen and (max-width: 564px) {
			margin-top: 30px;
		}
	}
	.true_title {
		width: 80%;
		padding-bottom: 50px;
		img {
			margin-right: 5px;
			width: 35px;
		}
	}
	.size27 {
		font-size: 27px;
	}
	.size15 {
		font-size: 27px;
		@media screen and (max-width: 870px) {
			font-size: 17px;
		}
	}
	.size_13 {
		width: 90%;
		font-size: 15px;
		@media screen and (max-width: 870px) {
			font-size: 12px;
		}
	}
	.padding {
		padding: 85px 0;
	}
	.list {
		@media screen and (max-width: 870px) {
			// margin-top: 10px !important;
		}
	}
	.list1 {
		margin-left: 10px;
		margin-top: 10px;
		@media screen and (max-width: 870px) {
			margin-left: -10px !important;
			margin-top: 10px !important;
		}
	}
	.list_item {
		border: dashed 2px #d3d3d3;
		margin-right: 10px;
		height: 36px;
		padding: 0 15px;
		// white-space: nowrap;
		@media screen and (max-width: 870px) {
			margin-top: 5px;
		}
	}
	.list_item1 {
		border: dashed 2px #d3d3d3;
		margin-right: 10px;
		// height: 36px;
		min-width: 36px;
		line-height: 15px;
		padding: 9px 15px;
		// // white-space: nowrap;
		// @media screen and (max-width: 1090px) {
		// 	padding: 0px 15px;
		// }
		// @media screen and (max-width: 870px) {
		// 	margin-top: 5px;
		// }
	}
	.br {
		@media screen and (max-width: 870px) {
			display: block !important;
		}
	}
	.br1 {
		@media screen and (max-width: 774px) {
			display: block !important;
		}
	}
	.iknow {
        margin-top: 30px;
        div {
            color: white;
            background: @themeColor;
            padding: 15px 40px;
        }
    } 
    .map_wrap {
        margin-left: 1px;
        margin-top: 10px;
		@media screen and (max-width: 564px) {
            margin-left: 1px;
        }
    }
    .gooleMap {
        width: 60%; 
        height: 400px;
        min-width: 500px;
        @media screen and (max-width: 564px) {
            min-width: 300px;
            width: 100%;
            height: 300px;
        }
    }

	#map {
        height: 500px;
        width: 100%;
		box-shadow: 0 0 3px gray;
    }
    #description {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
    }

    #infowindow-content .title {
    font-weight: bold;
    }

    #infowindow-content {
    display: none;
    }

    #map #infowindow-content {
    display: inline;
    }

    .pac-card {
    background-color: #fff;
    border: 0;
    border-radius: 2px;
    box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);
    margin: 10px;
    padding: 0 0.5em;
    font: 400 18px Roboto, Arial, sans-serif;
    overflow: hidden;
    font-family: Roboto;
    padding: 0;
    }

    #pac-container {
    padding-bottom: 12px;
    margin-right: 12px;
    }

    .pac-controls {
    display: inline-block;
    padding: 5px 11px;
    }

    .pac-controls label {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 300;
    }

    #pac-input {
        background-color: #fff;
        font-family: Roboto;
        font-size: 15px;
        font-weight: 300;
        margin-left: 12px;
        padding: 0 11px 0 13px;
        text-overflow: ellipsis;
        width: 250px;
        top: 16px !important;
        left: -3px !important;
        border-radius: 3px;
        height: 25px;
		border: black solid 2px;
    }

    #pac-input:focus {
    border-color: #4d90fe;
    }

    #title {
    color: #fff;
    background-color: #4d90fe;
    font-size: 25px;
    font-weight: 500;
    padding: 6px 12px;
    }

    #target {
    width: 345px;
    }
</style>