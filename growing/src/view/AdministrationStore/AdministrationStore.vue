<template>
    <div class="AddStore" id="AddStore">
		<!-- <img class="back_a cursor" v-show="!submit" @click="submit = true" src="@/assets/img/back_arrow.png" alt=""> -->
		<div class="AdvertisingOperation_back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" alt="" @click="goBack">店鋪管理
        </div>
		<div class="noBar" style="height: calc(100% - 11px);overflow-y: auto;overflow-x:hidden;padding-bottom: 30px;">
			<div class="content mg">
				<!-- <div class="content_title al"><img class="cursor" v-show="submit" style="width: 25px;" @click="goBack" src="@/assets/img/back_arrow.png" alt="">店鋪管理</div> -->
				<div style="height: calc(100% - 27px)">
					<div class="basicsMsg boxs theme" v-show="submit">
					<div class="flex divider_message_title">
						<div class="divider"></div>
						<div class="divider_text">店鋪信息管理</div>
					</div>
					<el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="135px" class="demo-ruleForm">
						<el-form-item label="店鋪名" prop="name" class="bcolor">
							<div class="elinput boxs width30">
								<el-input class="width100" v-model="ruleForm.name"></el-input>
							</div>
						</el-form-item>
						<el-form-item label="店鋪所屬類型" prop="storeType">
							<div class="al br">
								<div class="al width30">
									<el-select v-model="ruleForm.storeType" class="width100" placeholder="請選擇類型" 
										@change="addType">
										<el-option v-for="(item,i) in getTypeList" :key="i"
											:label='item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
											item.find( res => res.language == "zh-TW").guangGaoTypeName: 
											item.find( res => res.language == "en-US").guangGaoTypeName '
											:value="item[0].id">
										</el-option>
									</el-select>
								</div>
							</div>
						</el-form-item>
						<el-form-item label="店鋪所在區域" prop="area" class="bcolor">
							<div class="flex br">
									<div class="flex">
										<el-select v-model="ruleForm.area" @change="changeArea"
											:placeholder="$t('lang.pldselectarea')" style="margin-right: 10px;">
											<el-option v-for="(item,i) in addressList" :key="i"
												:label='item.addressLanguageDtos.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
												item.addressLanguageDtos.find( res => res.language == "zh-TW").addressName: 
												item.addressLanguageDtos.find( res => res.language == "en-US").addressName '
												:value="item.id">
											</el-option>
										</el-select>
										<el-select v-model="ruleForm.street" :placeholder="$t('lang.pldselectstreet')">
											<el-option :label="$t('lang.Kowloon') + $t('lang.street')" @click.native="changeCen(22.8, 114.6)"
											v-if="ruleForm.area == $t('lang.jiulong')" :value="$t('lang.Kowloon') + $t('lang.street')"></el-option>
											<el-option :label="$t('lang.MongKok') + $t('lang.street')"  @click.native="changeCen(23.8, 114.6)"
											v-if="ruleForm.area == $t('lang.wangjiao')" :value="$t('lang.MongKok') + $t('lang.street')"></el-option>
											<el-option :label="$t('lang.Central') + $t('lang.street')"  @click.native="changeCen(22.8, 116.6)"
											v-if="ruleForm.area == $t('lang.zhonghuan')" :value="$t('lang.Central') + $t('lang.street')"></el-option>
										</el-select>
									</div>
								</div>
						</el-form-item>
						<el-form-item label="店鋪詳細位置地址" prop="latLng.lat">
							<div class="mapwrap_w">
								<div class="size12 latlngShow" v-show="ruleForm.latLng.lat"
								> lat: {{ruleForm.latLng.lat}}, lng: {{ruleForm.latLng.lng}} </div>
								<div class="size12 streetText"></div>
								<div :class="['map_wrap']">
									<img class="searchImg" src="@/assets/img/search.png" alt="">
									<input
									id="pac-input"
									ref="pac"
									class="controls"
									type="text"
									placeholder="Search"
									/>
									<div id="map"></div>
								</div>
							</div>
						</el-form-item>
						<el-form-item label="店鋪描述" prop="message" class="bcolor">
							<div class="al">
								<div class="al textarea">
									<textarea v-model="ruleForm.message" id="" cols="60" rows="8"></textarea>
								</div>
							</div>
						</el-form-item>
						<el-form-item label="廣告顯示的尺寸" prop="message" class="bcolor" style="background: #F2F2F2;">
							<div class="al">
								<div class="inp_time1 al"><input type="text" v-model="ruleForm.size.width"></div>
								<div> m(寬)</div>
								<div style="margin: 0 15px;"> × </div>
								<div class="inp_time1 al"><input type="text" v-model="ruleForm.size.height"></div>
								<div> m(高)</div>
							</div>
						</el-form-item>
						<el-form-item label="店鋪展示圖片" prop="imageList1" class="bcolor">
							<div class="textarea_wrap clear">
								<label for="img1">
									<div class="addImg ju al float">
										<img src="@/assets/img/add.png" alt="">
									</div>
									<input type="file" id="img1" v-show="false" multiple="multiple" @change="changeFile1">
								</label>
								<div class="textarea_wrap_item float" v-for="(item,i) in ruleForm.imageList1" :key="i">
									<div class="imageList_wrap cursor">
										<div class="deleImg radius ju al" @click.stop="deleImg1(i)">
											<img style="heihgt: 100%;" src="@/assets/img/cha.png" alt="">
										</div>
										<div class="textarea_wrap_item_child ju al"  @click="imgPreview(item.url)">
											<img style="height: 100%;" :src="item.url" alt="">
										</div>
									</div>
									<div class="imageList_name tc">{{item.fileName}}</div>
									<div class="imageList_size tc">{{item.fileSize}}</div>
								</div>
							</div>
							<div style='font-size: 12px;line-height: 15px;margin-top: 5px;'>
								圖片格式限制PNG \JPG \JPEG \GIF，数量限制10張，大小限制3M。視頻格式限制 MP4，大小限制100M(媒體建議尺寸1920*1080)。
							</div>
						</el-form-item>
					</el-form>
				</div>
				<div class="detailPlan boxs theme" v-show="false">
					<div class="flex divider_message_title">
						<div class="divider"></div>
						<div class="divider_text">接受外來廣告設定</div>
					</div>
					<el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm1" label-width="145px" class="demo-ruleForm">
						<el-form-item label="接受外來廣告比例" prop="ratio"  class="bcolor">
							<div class="width30">
								<!-- <el-input v-model="ruleForm.ratio "></el-input> -->
								<el-select v-model="ruleForm.ratio" class="width100" placeholder="請選擇比例">
									<el-option label="80%" value="1"></el-option>
									<el-option label="50%" value="2"></el-option>
								</el-select>
							</div>
						</el-form-item>
						<el-form-item label="接收外來廣告時段" prop="time">
							<div class="al br">
								<div class="al width30">
									<el-select class="width100" v-model="ruleForm.time" placeholder="請選擇時間段">
										<el-option label="繁忙时段(9am-9pm)" value="繁忙时段(9am-9pm)"></el-option>
										<el-option label="非繁忙时段(9pm-9am)" value="非繁忙时段(9pm-9am)"></el-option>
									</el-select>
									<div class="addCate al" @click="addTime(ruleForm.time)">
										添加
									</div>
								</div>
								<div class="list clear">
									<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in timeList" :key="i">
										{{item}} <span class="al" style="margin-left: 5px"><img class="cursor" @click="deleTime(i)" src="@/assets/img/cha.png" alt=""></span>
									</div>
								</div>
							</div>
						</el-form-item>
						
						<el-form-item label="可接收外來廣告類型" prop="type" class="bcolor">
							<div class="al br">
								<div class="al width30">
									<el-select class="width100" v-model="ruleForm.type" placeholder="請選擇類型">
										<el-option label="食品" value="食品"></el-option>
										<el-option label="科技" value="科技"></el-option>
										<el-option label="醫療" value="醫療"></el-option>
										<el-option label="汽車" value="汽車"></el-option>
									</el-select>
									<div class="addCate al" @click="addType(ruleForm.type)">
										添加
									</div>
								</div>
								<div class="list clear">
									<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in typeList" :key="i">
										{{item}} <span class="al" style="margin-left: 5px"><img class="cursor" @click="deleType(i)" src="@/assets/img/cha.png" alt=""></span>
									</div>
								</div>
							</div>
						</el-form-item>
					</el-form>
				</div>
				
				<div class="detailPlan boxs theme" v-show="submit">
					<div class="flex divider_message_title">
						<div class="divider"></div>
						<div class="divider_text">店鋪廣告媒體內容信息</div>
					</div>
					<el-form :model="ruleForm2" :label-position="labelPosition" :rules="rules2" ref="ruleForm2" 
					:label-width="$i18n.locale == 'zh-CN'? '125px': '165px'" class="demo-ruleForm">
						<el-form-item label="廣告媒體類型" prop="cmediaType" class="bcolor">
							<div class="al">
								<el-select v-model="ruleForm2.cmediaType" placeholder="請選擇類型" @change="getType">
									<el-option :label="$t('lang.image')" value="1"></el-option>
									<!-- <el-option label="GIF" value="2"></el-option> -->
									<el-option :label="$t('lang.video')" value="3"></el-option>
								</el-select>
							</div>
						</el-form-item>
						<el-form-item label="廣告媒體時長" prop="videoMinute">
							<div class="al">
								<div class="al inp_time">
										<!-- <input type="text" class="tc"> -->
									<el-input-number v-model="ruleForm2.videoMinute" :step="1" size="small" 
									:min="1" :max="5" label="描述文字"></el-input-number>
								</div>
								<div>{{$t('lang.minute')}}</div>
							</div>
						</el-form-item>
						<el-form-item label="廣告媒體內容" prop="imageList" class="bcolor">
							<div class="textarea_wrap clear">
								<label for="img">
									<div class="addImg ju al float">
										<img src="@/assets/img/add.png" alt="">
									</div>
									<input type="file" id="img" v-show="false" multiple="multiple" @change="changeFile">
								</label>
								<div class="textarea_wrap_item float" v-for="(item,i) in ruleForm2.imageList" :key="i">
									<div class="imageList_wrap">
										<div class="deleImg radius cursor ju al" @click.stop="deleImg(i)">
											<img style="heihgt: 100%;" src="@/assets/img/cha.png" alt="">
										</div>
										<div class="textarea_wrap_item_child ju al cursor">
											<img v-if="ruleForm.mediaType == 'image'"  @click="imgPreview(item.fileUrl)"
											style="height: 100%;" :src="item.fileUrl" alt="">

											<div class="video_outWrap" v-else-if="ruleForm.mediaType == 'video'">
												<img class="img" src="@/assets/img/start.png" alt="">
												<div class="videoImage ju al" id="output" ref="output"  
												@click="previewVideo(item)">
													
												</div>
												<video class="width100" id="video1" ref="video"
													:controls="false">
													<source :src="item.fileUrl" type="video/mp4">
												</video>
											</div>
										</div>
									</div>
									<div class="imageList_name tc">{{item.fileName}}</div>
									<div class="imageList_size tc">{{item.fileSize}}</div>
									<div class="imageList_long tc" v-if="ruleForm.mediaType == 'video'"
										>時長：{{item.filePlayTime}}</div>
								</div>
							</div>
							<div style='font-size: 12px;line-height: 15px;margin-top: 5px;'>
								圖片格式限制PNG \JPG \JPEG \GIF，数量限制10張，大小限制3M。視頻格式限制 MP4，大小限制100M(媒體建議尺寸1920*1080)。
							</div>
							<div style='font-size: 12px; line-height: 15px;'>媒體內容時長限制5分鐘.</div>
						</el-form-item>
					</el-form>
				</div>

				<div class="addorcancel tc ju al" v-show="submit">
					<div class="addorcancel_btn cursor" style="margin-right: 30px;" @click="submitG">確認修改</div>
					<div class="addorcancel_btn cursor" @click="goBack">取消修改</div>
				</div>  

				<div class="basicsMsg boxs padding backWhite" v-show="!submit">
					<div class="true_title al ju">
						<img src="@/assets/img/success_sign.png" alt="">店鋪信息修改申請提交成功!
					</div>
					<div class="ju">您的店鋪信息修改申請已提交至後台，管理员将蛊快蕃核您的店鋪信息.</div>
					<div class="iknow ju al">
						<div class="cursor" @click="goBack">確定</div>
					</div>
				</div>
				</div>
			</div>
		</div>
		<el-dialog
			:visible.sync="showVideo"
			width="90%">
			<video id="myVideo" class="video-js" :poster="Poster" v-if="videoWrap"
				:controls="Controls">
				<source :src="src" type="video/mp4">
			</video>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="closeVideo">确 定</el-button>
			</span>
		</el-dialog>
		<el-image-viewer 
		v-if="showViewer" 
		:on-close="closeViewer" 
		:url-list="[dimg]" />
		<el-image-viewer v-if="showViewer1" :on-close="closeViewer1" :url-list="[dimg1]" />
    </div>
</template>

<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
import mapPoint from "@/assets/img/marker.png"
import { updateShop, getShopDetailsById } from "@/axios/request.js"
export default {
    data() {
        return {
			videoWrap: false,
			showVideo: false,
			showViewer1: false,
			showViewer: false,
			preload: 'auto',  //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            src:'',               //视频的路径
            type: '',                //视频的类型
            Controls: true,              //确定播放器是否具有用户可以与之交互的控件
            Autoplay: '',              //是否自动播放
            Poster: '',         
            video: true,
			submit: true,
            ruleForm: {
                name: '',
                area: '',
                time: '',
                type: '',
                storeType: '',
				size: {//
					width: '',
					height: ''
				},
				latLng: { lat: '', lng: '' },//
                mediaType: '',
                inp: 1,
				street: '',
                ratio: '',
                date: '',
                content: '',
                address: '',
				imageList1: [],//
                message: ""
            },
			labelPosition: 'left',
            rules: {
				'size.width': [
					{ required: true, message: '請輸入寬度', trigger: 'blur' }
				],
				'size.height': [
					{ required: true, message: '請輸入高度', trigger: 'blur' }
				],
				'latLng.lat': [
					{ required: true, message: '请选择详细地址', trigger: 'blur' }
				],
				imageList1: [
					{ required: true, message: '請添加圖片', trigger: 'change' }
				],
                name: [
                    { required: true, message: '請輸入廣告名稱', trigger: 'blur' },
                    { min: 3, max: 15, message: '長度需3 到 15 個字符', trigger: 'blur' }
                ],
                area: [
                    { required: true, message: '請選擇投放區域', trigger: 'change' }
                ],
                time: [
                    { required: true, message: '請選擇时间段', trigger: 'blur' }
                ],
                type: [
                    { required: true, message: '請選擇媒體類型', trigger: 'change' }
                ],
                storeType: [
                    { required: true, message: '請選擇媒體類型', trigger: 'change' }
                ],
                mediaType: [
                    { required: true, message: '請選擇媒體類型', trigger: 'change' }
                ],
                inp: [
                    { required: true, message: '請選擇媒體時長', trigger: 'blur' }
                ],
                ratio: [
                    { required: true, message: '請選擇廣告比例', trigger: 'blur' }
                ],
                date: [
                    { required: true, message: '請選擇投放週期', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '請選擇媒體內容', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: '請輸入詳細地址', trigger: 'blur' }
                ],
                message: [
                    { required: true, message: '請輸入店鋪描述', trigger: 'blur' }
                ]
            },
			ruleForm2: {
				cmediaType: '',  //
				cmediaType1: 0,  //
				videoMinute: 0,   //
				imageList: [],
			},
			rules2: {
				cmediaType: [
                    { required: true, message: '請選擇廣告媒體類型', trigger: 'change' }
                ],
				videoMinute: [
                    { required: true, message: '', trigger: 'change' }
                ],
				imageList: [
					{ required: true, message: '請添加媒體內容', trigger: 'change' }
				],
			},
			typeList: [],
			areaList: [],
			timeList: [],
            
            minute: [],
			dimg1: '',
			map: null,
			marker: null,



			storeTypeList: [],
        };
    },
	beforeMount () {
        let that = this
        window.addEventListener('resize', (e) => {
            that.fun()
        })
		this.fun()
    },
    mounted () {
        this.initMap1(22.6,114.1,1)
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
					this.getShopDetailsById()
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
		lang: {
            handler (val) {
                if (val) {
					this.getShopDetailsById()
                }
            }
        },
	},
	computed: {
		lang () { return this.$i18n.locale },
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
        loading: {
			get () { return this.$store.state.user.loading },
			set (val) {
				this.$store.commit('setUser', {
					key: 'loading',
					value: val
				})
			}
		},
	},
	components: { ElImageViewer },
	created () {
		this.$store.dispatch('getAddress',this) 
        this.$store.dispatch('getTypeList',this)
        this.$store.dispatch('incomePriceId',this)
		
	},
    methods: {
		getShopDetailsById () {
			this.loading = true
			let that = this
			let data = {
				shopId: Number(this.$route.query.id)
			}
			getShopDetailsById(data).then(res => {
				this.loading = false
				console.log(res)
				if (res.data.rtnCode == 200) {
					that.ruleForm.name = res.data.data.shopName
					that.ruleForm.latLng.lat = res.data.data.latitude
					that.ruleForm.latLng.lng = res.data.data.longitude
					that.ruleForm.size.width = res.data.data.width
					that.ruleForm.size.height = res.data.data.heigth
					this.getTypeList.forEach(item => {
						item.forEach(child => {
							if (child.id == res.data.data.shopTypeId && child.language == 'zh-TW' && this.$i18n.locale == 'zh-CN') {
								that.ruleForm.storeType = child.guangGaoTypeName
							} else if (child.id == res.data.data.shopTypeId && child.language == 'en-US' && this.$i18n.locale == 'en-US') {
								that.ruleForm.storeType = child.guangGaoTypeName
							}
						})
					})
					res.data.data.shopImages.forEach(item => {
						this.ruleForm.imageList1 = []
						this.ruleForm.imageList1.push({ url: item })
					})
					this.ruleForm2.imageList = res.data.data.shopGuangGaoDto.shopGuangGaoContents
					this.addressList.forEach(item => {
						if (item.id == res.data.data.addressParentId) {
							item.addressLanguageDtos.find( res => res.language == "zh-TW") && this.$i18n.locale == "zh-CN" ? 
							this.ruleForm.area = item.addressLanguageDtos.find( res => res.language == "zh-TW").addressName: 
							this.ruleForm.area = item.addressLanguageDtos.find( res => res.language == "en-US").addressName
						}
					})
					
					if (res.data.data.shopGuangGaoDto.shopGuangGaoContents[0].type == 1 && this.$i18n.locale == 'zh-CN') {
						this.ruleForm2.cmediaType = '圖片'
					} else if (res.data.data.shopGuangGaoDto.shopGuangGaoContents[0].type == 1 && this.$i18n.locale == 'en-US') {
						this.ruleForm2.cmediaType = 'image'
					}

					if (res.data.data.shopGuangGaoDto.shopGuangGaoContents[0].type == 3 && this.$i18n.locale == 'zh-CN') {
						this.ruleForm2.cmediaType = '視頻'
					} else if (res.data.data.shopGuangGaoDto.shopGuangGaoContents[0].type == 3 && this.$i18n.locale == 'en-US') {
						this.ruleForm2.cmediaType = 'video'
					}
					this.ruleForm.message = res.data.data.content
				}
			})
		},
		updateShop () {
			let that = this
			let boo = true
			// let boo1 = false
			let boo2 = false
			this.$refs.ruleForm.validate(flag => {
                if (flag) { boo = true }
            })
			// this.$refs.ruleForm1.validate(flag => {
			// 	if (flag) { boo1 = true }
			// })
			this.$refs.ruleForm2.validate(flag => {
				if (flag) { boo2 = true }
			})
			if (boo && boo2) {
				let arr = []
				this.ruleForm2.imageList.forEach((item,i) => {
					arr.push({
						"id": null,
						"fileUrl": item.url,
						"step": i,
						"type": that.ruleForm2.cmediaType1,
						"shopGuangGaoId": null,
						"fileName": item.name,
						"fileSize": item.size,
						"filePlayTime": item.videoTime
					})
				})
				let imgList = []
				that.ruleForm.imageList1.forEach(item => {
					imgList.push(item.url)
				})
				let data = {
					shopDtoJson: {
						"shopId": that.$route.query.id,
						"shopName": that.ruleForm.name,
						"addressParentId": that.ruleForm.area,
						"shopAddressId": 0,
						"addressName": "",
						"longitude": String(that.ruleForm.latLng.lng),
						"latitude": String(that.ruleForm.latLng.lat),
						"content": that.ruleForm.message,
						"shopTypeId": that.ruleForm.storeType,
						"shopGuangGaoDto": {
							"shopGuangGaoTitle": "",
							"shopGuangGaoLength": 6,
							// "shopGuangGaoContents": [{
							// 	"id": null,
							// 	"fileUrl": "www.baidu.mp4",
							// 	"step": 1,
							// 	"type": 3,
							// 	"shopGuangGaoId": 0
							// }]
							"shopGuangGaoContents": arr
						},
						"width": that.ruleForm.size.width,
						"heigth": that.ruleForm.size.height,
						// "shopImages": ["12313513032"],
						"shopImages": imgList,
					}
				}
				let str = JSON.stringify(data.shopDtoJson)
				const qs = require('qs')
				let data1 = qs.stringify({
					shopDtoJson: str
				})
				updateShop(data1).then(res => {
					if (res.data.rtnCode == 200) {
						that.$message({
							type: 'success',
							message: that.$t('lang.addSuccess')
						})
						that.submit = false
					} else {
						this.$message({
							type: 'error',
							message: '修改失敗'
						})
					}
				}).catch(e => {
					this.$message({
						type: 'error',
						message: '修改失敗'
					})
				})
			}
			
		},
        fun () {
			if (window.innerWidth <= 564) {
                this.labelPosition = 'top'
            } else {
                this.labelPosition = 'left'
            }
		},
		previewVideo (item) {
			this.src = item.fileUrl
			this.showVideo = true
			this.videoWrap = true
		},
		imgPreview (url) {
			this.dimg1 = url
			this.showViewer1 = true
		},
		closeViewer1() {
          	this.showViewer1 = false
        },
		closeVideo () {
			this.showVideo = false
			this.videoWrap = false
		},
		changeArea (val) {
			this.ruleForm.street = ''
		},
		changeCen (lat,lng) {
			this.map.panTo({ lat: lat,lng: lng });
		},
		initMap1 (lat,lng,val) {
			let that = this
			let boolean = true
			let map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: lat, lng: lng},
				zoom: 8,
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
					lat: position.coords.latitude,
					lng: position.coords.longitude
					};
					var marker = new google.maps.Marker({position: pos, map: map});
					// that.marker = marker
					map.setCenter(pos);
				})
			}
			var pos = {
				lat: 0,
				lng: 0
			}
			
			var markerr = new google.maps.Marker({position: pos, map: map})
			that.marker = markerr
			map.addListener('click', function(e) {   //点击获取经纬度
				// console.log(e.latLng.lat(),e.latLng.lng()); 
				let a = that.map.getBounds()
				that.ruleForm.latLng.lat = e.latLng.lat()
				that.ruleForm.latLng.lng = e.latLng.lng()
				that.marker.setMap(null)

				that.marker = new google.maps.Marker({
					position: new google.maps.LatLng(e.latLng.lat(), e.latLng.lng()),
					icon: mapPoint,
					map: map,
				})

				// var pos = {
				// 	lat: e.latLng.lat(),
				// 	lng: e.latLng.lng()
				// };
				// var marker = new google.maps.Marker({position: pos, map: map});  //添加标记点

				// marker.setMap(null)   //清除标记点
				// map.setCenter(pos);  //修改中心点
				
			});

			let msg = this.msg
			var data = [
				{id:1,name:'小李'},
			]
			// let input = document.getElementById("pac-input");
			let input = this.$refs.pac
			let searchBox = new google.maps.places.SearchBox(input);
			map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
			map.addListener("bounds_changed", () => {
				searchBox.setBounds(map.getBounds());
			});
			let markers = [];
			searchBox.addListener("places_changed", () => {
				let places = searchBox.getPlaces();

				if (places.length == 0) {
					return;
				}

				// Clear out the old markers.
				markers.forEach((marker) => {
				marker.setMap(null);
				});
				markers = [];

				// For each place, get the icon, name and location.
				const bounds = new google.maps.LatLngBounds();

				places.forEach((place) => {
				if (!place.geometry || !place.geometry.location) {
					console.log("Returned place contains no geometry");
					return;
				}

				const icon = {
					url: place.icon,
					size: new google.maps.Size(71, 71),
					origin: new google.maps.Point(0, 0),
					anchor: new google.maps.Point(17, 34),
					scaledSize: new google.maps.Size(25, 25),
				};

				// Create a marker for each place.
				markers.push(
					new google.maps.Marker({
					map,
					icon,
					title: place.name,
					position: place.geometry.location,
					})
				);
				if (place.geometry.viewport) {
					// Only geocodes have viewport.
					bounds.union(place.geometry.viewport);
				} else {
					bounds.extend(place.geometry.location);
				}
				});
				map.fitBounds(bounds);
			});
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
        getType (e) {
			this.imageList = []
			this.ruleForm.inp = ''
			this.minute = []
			if (e == 1) {
				this.video = false
				this.ruleForm.mediaType = 'image'
				this.ruleForm.cmediaType = '圖片'
			} else if (e == 3) {
				this.video = true
				this.ruleForm.mediaType = 'video'
				this.ruleForm.cmediaType = '視頻'
			}
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		submitG () {
			this.updateShop()
			return
			this.submit = false
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
		addType (item) {
			// if (item) {
				this.storeTypeList = []
				this.storeTypeList.push(item)
				// let arr = new Set(this.storeTypeList)
				// this.storeTypeList = Array.from(arr)
			// }
		},
		addArea (item) {
			this.areaList.push(item)
		},
		deleType (i) {
			this.typeList.splice(i,1)
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
        changeFile (e) {
			var files = e.target.files
			let that = this
			if (this.ruleForm.mediaType) {
				if (this.video) {
					if (this.ruleForm.mediaType == 'video') {
						if (e.target.files.length<=5 && this.ruleForm2.imageList.length < 5) {
							for(var ff=0;ff<e.target.files.length;ff++){
								let file = e.target.files[ff].type.split('/')[0]
								let fileSize = e.target.files[ff].size
								if (file == 'video') {
									if (fileSize <= 100000000) {
										let fileurl = URL.createObjectURL(e.target.files[ff])
										let name = files[ff].name
										let size
										if (files[ff].size >= 1000000) {
											var s = files[ff].size/1000000
											size = s.toFixed(1) + 'M'
											// size = Math.ceil(files[ff].size/1000000) + 'm'
										} else {
											var s = files[ff].size/1000
											size = s.toFixed(0) + 'KB'
											// size = Math.ceil(files[ff].size/1000) + 'kb'
										}

										let audioElement = new Audio(fileurl);
										audioElement.addEventListener("loadedmetadata", function (_event) {
											var time = Math.ceil(audioElement.duration)
											var sTime = parseInt(time);// 秒
											var mTime = 0;// 分
											if ( sTime > 60 ) {//如果秒数大于60，将秒数转换成整数
												//获取分钟，除以60取整数，得到整数分钟
												mTime = parseInt(sTime / 60);
												//获取秒数，秒数取佘，得到整数秒数
												sTime = parseInt(sTime % 60);
											}
											that.ruleForm2.imageList.push({ 
												fileUrl: fileurl, 
												fileName: name, 
												fileSize: size, 
												time: time, 
												filePlayTime: mTime + '分' + sTime + '秒'
											})
											let index = that.ruleForm2.imageList.length -1
											setTimeout(() => {
												that.initialize(index)
											},200)
											
											// that.minute.push(Math.ceil(audioElement.duration))
											that.minute.push(time)
											that.$forceUpdate()
										});
									} else {
										this.$message({
											type: 'error',
											message: '單個視頻最大限制100M !'
										})
									}
								} else {}
							}
							setTimeout(() => {
								let that = this
								this.$nextTick(() => {
									let num = 0
									for (let i=0;i<that.minute.length;i++) {
										num += that.minute[i]
									}
									let time = num
									var sTime = parseInt(time);// 秒
									var mTime = 0;// 分
									if ( sTime > 60 ) {//如果秒数大于60，将秒数转换成整数
										//获取分钟，除以60取整数，得到整数分钟
										mTime = parseInt(sTime / 60);
										//获取秒数，秒数取佘，得到整数秒数
										sTime = parseInt(sTime % 60);
									}
									// console.log(sTime, mTime, mTime + '.' + sTime, Number(mTime + '.' + sTime))
									time = Math.ceil(Number(mTime + '.' + sTime))
									that.ruleForm.videoMinute = time
									that.$forceUpdate()
								})
							},100)
						} else {
							this.$message({
								type: 'error',
								message: '最大限制5個視頻文件!'
							})
						}
					} else {}
				}
				if (!this.video) {
					if (this.ruleForm.mediaType == 'image') {
						if (e.target.files.length<=10 && this.ruleForm2.imageList.length <= 10) {
							for(var ff=0;ff<e.target.files.length;ff++){
								let file = e.target.files[ff].type.split('/')[0]
								let fileSize = e.target.files[ff].size
								if (file == 'image') {
									if (fileSize <= 3000000) {
										let fileurl = URL.createObjectURL(e.target.files[ff])
										let name = files[ff].name
										let size
										if (files[ff].size >= 1000000) {
											var s = files[ff].size/1000000
											size = s.toFixed(1) + 'M'
											// size = Math.ceil(files[ff].size/1000000) + 'm'
										} else {
											var s = files[ff].size/1000
											size = s.toFixed(0) + 'KB'
											// size = Math.ceil(files[ff].size/1000) + 'kb'
										}
										that.ruleForm2.imageList.push({ fileUrl: fileurl, fileName: name, fileSize: size })
									} else {
										this.$message({
											type: 'error',
											message: '單個圖片最大限制3M !'
										})
									}
								} else { }
							}
						} else {
							this.$message({
								type: 'error',
								message: '最大限制10個圖片文件!'
							})
						}
					} else { }
				}
			} else {
				this.$message({
					type: 'warning',
					message: '請選擇文件類型!'
				})
			}
		},
		changeFile1 (e) {
			var files = e.target.files
			let that = this
			if (e.target.files.length<=10 && this.ruleForm.imageList1.length <= 10) {
				for(var ff=0;ff<e.target.files.length;ff++){
					let file = e.target.files[ff].type.split('/')[0]
					let fileSize = e.target.files[ff].size
					if (file == 'image') {
						if (fileSize <= 3000000) {
							let fileurl = URL.createObjectURL(e.target.files[ff])
							let name = files[ff].name
							let size
							if (files[ff].size >= 1000000) {
								var s = files[ff].size/1000000
								size = s.toFixed(1) + 'M'
								// size = Math.ceil(files[ff].size/1000000) + 'm'
							} else {
								var s = files[ff].size/1000
								size = s.toFixed(0) + 'KB'
								// size = Math.ceil(files[ff].size/1000) + 'kb'
							}
							that.ruleForm.imageList1.push({ url: fileurl, name: name, size: size })
						} else {
							this.$message({
								type: 'error',
								message: '單個圖片最大限制3M !'
							})
						}
					} else { 
						this.$message({
							type: 'error',
							message: '請選擇圖片類型'
						})
					}
				}
			} else {
				this.$message({
					type: 'error',
					message: '最大限制10個圖片文件!'
				})
			}
		},
		deleImg (i) {
			let that = this
			if (this.ruleForm.mediaType == 'video') {
				this.minute.splice(i,1)
				let num = 0
				for (let i=0;i<that.minute.length;i++) {
					num += that.minute[i]
				}
				let time = num
				var sTime = parseInt(time);// 秒
				var mTime = 0;// 分
				if ( sTime > 60 ) {//如果秒数大于60，将秒数转换成整数
					//获取分钟，除以60取整数，得到整数分钟
					mTime = parseInt(sTime / 60);
					//获取秒数，秒数取佘，得到整数秒数
					sTime = parseInt(sTime % 60);
				}
				time = Math.ceil(Number(mTime + '.' + sTime))
				that.ruleForm.videoMinute = time
				this.$forceUpdate()
				this.ruleForm2.imageList.splice(i,1)
				console.log(this.$refs.output)
				this.$refs.output.splice(i,1)
				console.log(this.$refs.output)
			} else {
				this.ruleForm2.imageList.splice(i,1)
			}
		},
		deleImg1 (i) {
			if (this.ruleForm.mediaType == 'video') {
				this.minute.splice(i,1)
				this.ruleForm.inp = 0
				for (let i=0;i<Array.from(this.minute).length;i++) {
					this.ruleForm.inp = this.ruleForm.inp*1 + this.minute[i]
					this.$forceUpdate()
				}
				this.ruleForm.imageList1.splice(i,1)
			} else {
				this.ruleForm.imageList1.splice(i,1)
			}
		},
		initialize (ff) {
			var scale = 0.8;
			var output = this.$refs.output[ff]
			var video = this.$refs.video[ff]
			// console.log(ff)
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
	.latlngShow {
		height: 0;
		color: gray;
		@media screen and (max-width: 564px) {
            height: 27px;
			margin-top: -25px;
			margin-left: 10px;
        }
	}
	.video_outWrap {
		height: 100%;
		position: relative;
		.img {
			position: absolute;
			left: 50%;
			top: 50%;
			z-index: 125;
			transform: translate(-50%, -50%);
			pointer-events: none;
		}
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
    .AddStore {
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
    .backWhite {
        background: white !important;
    }
    .width30 {
        width: 35%;
        min-width: 275px;
        // padding: 3px;
        // box-shadow: 0 0 5px rgb(199, 199, 199) inset !important;;
    }
    .content {
        width: 85%;
        // height: calc(100% - 11px);
        padding: 0px 20px;
        // overflow: auto;
		margin-top: 15px;
		@media screen and (max-width: 564px) {
			padding: 0px 10px;
			width: 100%;
		}
    }
    .bcolor {
        background: #E5E5E5;
    }
    .content_title {
        font-size: 22px;
        font-weight: 500;
        padding: 15px 0;
    }
    .basicsMsg {
        margin-bottom: 15px;
        padding: 0 2px 0px 2px;
    }
    .detailPlan {
        margin-bottom: 15px;
        padding: 0 2px 2px 2px;
    }
    .addCate {
        border: solid 1px rgb(206, 206, 206);
        padding: 0 20px;
        box-shadow: 2px 2px 6px rgb(224, 224, 224) inset;
        height: 37px;
        margin-left: 15px;
		white-space: nowrap;
    }
    .inp_time {
    //   width: 217px;
      background: white;
      margin-right: 5px;
      overflow: hidden;
    }
    .textarea_wrap {
		width: 98%;
		height: 300px;
		background: white;
		padding: 20px 27px;
    }
    .textarea_wrap_item {
		width: 100px;
		height: 140px;
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
			height: 110px;
		}
	}
	.imageList_long {
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
			transform: scale(0.8);
			width: 90px;
			margin-left: -9.5px;
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

	.true_title {
		font-size: 27px;
		padding-bottom: 50px;
		img {
			width: 35px;
		}
	}
	.padding {
		padding: 125px 0;
	}
	.list {
		margin-left: 15px;
		@media screen and (max-width: 870px) {
			margin-left: -10px !important;
			margin-top: 10px !important;
		}
	}
	.list_item {
		border: dashed 2px #d3d3d3;
		margin-left: 10px;
		height: 36px;
		padding: 0 15px;
		white-space: nowrap;
		@media screen and (max-width: 870px) {
			margin-top: 5px;
		}
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
    .block {
        @media screen and (max-width: 564px) {
			display: block !important;
		}
    }
    .divider_message_title {
        padding: 15px 15px;
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
    .textarea {
        width: 98%;
        height: 200px;
        // padding: 3px;
        textarea {
			padding: 3px;
            width: 100%;
            height: 97%;
            border: none;
            outline: none;
            resize: none;
        }
    }
	.inp_time1 {
		width: 70px;
		background: #F5F7FA;
		border: solid 1px #E4E7ED;
		color: rgb(168, 168, 168);
		height: 37px;
		// margin-left: 30px;
		margin-right: 5px;
		overflow: hidden;
		input {
			border: none;
			outline: none;
			width: 100%;
			background: #F5F7FA;
			// height: 100%;
		}
    }
    .addorcancel {
        margin-top: 30px;
    }
    .addorcancel_btn {
        color: white;
        font-size: 16px;
        padding: 15px;
        width: 150px;
        background: #409EFF;
		border-radius: 5px;
    }
    .iknow {
        margin-top: 30px;
        div {
            color: white;
            background: @themeColor;
            padding: 15px 40px;
        }
    } 
	.streetText {
		color: gray;
		height: 40px;
		text-decoration: underline;
		@media screen and (max-width: 564px) {
            margin-left: 3px;
			margin-top: -25px;
        }
	}
	.mapwrap_w {
		width: calc(100% + 120px);
		@media screen and (max-width: 564px) {
			width: 100%;
        }
	}
    .map_wrap {
		width: 100%;
		position: relative;
		margin-top: 5px;
		margin-left: -125px;
		@media screen and (max-width: 564px) {
            margin-left: 3px;
			margin-top: 0px;
			width: 98%;
        }
		.searchImg {
			position: absolute;
			left: 15px;
			top: 24px;
			z-index: 200;
			width: 23px;
			height: 23px;
		}
    }
	.map_wrap1 {
		margin-left: 0 !important;
		margin-top: -10px !important;
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
		padding-left: 25px;
        background-color: #fff;
        font-family: Roboto;
        font-size: 15px;
        font-weight: 300;
        margin-left: 12px;
        padding: 0 11px 0 33px;
        text-overflow: ellipsis;
        width: 230px;
        top: 16px !important;
        left: -3px !important;
        border-radius: 7px;
        height: 35px;
		// border: #5C48B7 solid 3px;
		// border: #13dafd solid 3px;
		border: rgb(165, 165, 165) solid 1px;
		outline: none;
    }
	// #pac-input:hover {
    //     border-color: #03e9f4;
    //     box-shadow: 0 0 2px #03e9f4;
    //     box-shadow: 0 0 4px #03e9f4;
    //     box-shadow: 0 0 6px #03e9f4;
    //     box-shadow: 0 0 8px #03e9f4;
    // }

    // #pac-input:focus {
    // 	border-color: #03e9f4;
	// 	box-shadow: 0 0 2px #03e9f4;
    //     box-shadow: 0 0 4px #03e9f4;
    //     box-shadow: 0 0 6px #03e9f4;
    //     box-shadow: 0 0 8px #03e9f4;
    // }

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