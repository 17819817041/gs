<template>
    <div class="Gdetail" v-loading='loading'>
		<!-- <img class="back_a cursor" v-show="!submit" @click="submit = true" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt=""> -->
		<div class="back mg al">
			<img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" @click="goBack" alt="">廣告詳細計劃
		</div>
		<div class="ju noBar" style="height: calc(100% - 36px);overflow: auto;margin-top: 15px;">
			<div class="content mg bar">
				<div class="noBar" style="height: calc(100% - 0px); overflow:auto">
				<div class="basicsMsg theme">
					<div class=" basicsMsg_item bold al">
						<div class="iden radius"></div> 基礎信息
					</div>
					<el-form :model="ruleForm" :label-position="$i18n.locale == 'zh-CN'? 'left' : 'top'"  
					ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="廣告計劃名稱">
							<div class="al" style="color: gray;">{{ruleForm.name}}</div>
						</el-form-item>
						<el-form-item label="廣告投放類型">
							<div class="flex">
								<div class=" clear">
									<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in typeList" :key="i">
										{{item}}
									</div>
								</div>
							</div>
						</el-form-item>
						<el-form-item label="廣告投放區域">
							<div class="flex br">
								<div class="list clear">
									<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in areaList" :key="i">
										{{item}}
									</div>
								</div>
							</div>
						</el-form-item>
					</el-form>
				</div>
				<div class="detailPlan theme">
					<div class=" basicsMsg_item bold al">
						<div class="iden radius"></div> 詳細計劃
					</div>
					<el-form :model="ruleForm" :label-position="$i18n.locale == 'zh-CN'? 'left' : 'top'" 
					ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="廣告投放時段">
							<div :class="['flex', { content_down: $i18n.locale == 'zh-CN' }]">
								<div class="list clear">
									<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in timeList" :key="i">
										{{item}}
									</div>
								</div>
							</div>
						</el-form-item>
						<el-form-item label="廣告投放週期">
							<div style="min-width: 200px;width: 100%;color:gray;">
								{{ruleForm.date}}
							</div>
						</el-form-item>
						<div class="flex br">
							<el-form-item label="廣告媒體類型" prop="mediaType" style="margin-right: 130px;">
								<div class="al" style="color: gray;">
									{{ruleForm.mediaType}}
								</div>
							</el-form-item>
							<el-form-item label="廣告媒體時長" prop="inp">
								<div class="al" style="color: gray;">
									{{ruleForm.inp}}分鐘
								</div>
							</el-form-item>
						</div>
						<el-form-item label="廣告媒體內容">
							<div :class="['textarea_wrap clear', { content_down: $i18n.locale == 'zh-CN' }]">
								<div class="textarea_wrap_item float" v-for="(item,i) in imageList" :key="i">
									<div class="imageList_wrap">
										<!-- <div class="deleImg radius ju al"><img style="heihgt: 100%;" src="@/assets/img/cha.png" alt=""></div> -->
										<div class="textarea_wrap_item_child ju al cursor"  @click="imgPreview(item.url)"
										v-if="ruleForm.mediaType == 'image' || ruleForm.mediaType == '圖片'">
											<img style="height: 100%;" :src="item.url" alt="">
										</div>
										<div class="textarea_wrap_item_child ju al cursor" 
										v-if="ruleForm.mediaType == 'video' || ruleForm.mediaType == '視頻'" @click="previewVideo(item)">
											<img style="height: 100%;" v-if="!item.imageSrc" :src="item.imageSrc" alt="">
											<img v-if="!item.imageSrc" style="height: 50%" src="@/assets/img/video_file.png" alt="">
										</div>
									</div>
									<div class="imageList_name tc">{{item.fileName}}</div>
									<div class="imageList_size tc">{{item.fileSize}}</div>
									<div class="imageList_size tc" v-if="ruleForm.mediaType == 'video' || ruleForm.mediaType == '視頻'"
									>{{item.filePlayTime}}</div>
								</div>
							</div>
							<div style='font-size: 12px;line-height: 15px;margin-top: 5px;'
								:class="[{ content_down: $i18n.locale == 'zh-CN' }]">
									{{$t('lang.becare')}}
								</div>
								<div style='font-size: 12px; line-height: 15px;'
								:class="[{ content_down1: $i18n.locale == 'zh-CN' }]">{{$t('lang.becare1')}}</div>
						</el-form-item>
					</el-form>
					<!-- <div class="total mg sb br1">
						<div v-show="!drawer"></div>
						<div class="total_price">
							<div class="t_price bold">
								<span>計劃投放總價:</span><span class="math_price"> $ 6000 </span><span class="p_d">HKD</span>
							</div>
							<div class="total_price_item">繁忙時段價格: $4000 HKD</div>
							<div class="total_price_item">非繁忙時段價格: $2000 HKD</div>
							<el-popover
								:placement="position"
								trigger="click"
								v-model="visible">
								<div>
									<div class="flex total_item">
										<div class="l_msg">基礎價格: </div>
										<div class="r_msg">100港幣</div>
									</div>
									<div class="flex total_item">
										<div class="l_msg">繁忙時段價格: </div>
										<div class="r_msg">基礎價格*2/分鐘</div>
									</div>
									<div class="flex total_item">
										<div class="l_msg">非繁忙時段價格: </div>
										<div class="r_msg">基礎價格/分鐘</div>
									</div>
								</div>
								<div>
									計劃投放總價=(繁忙畤段價格+非繁忙畤段價格)*廣告媒體時長*所選區數*廣告投放過期
								</div>
								<div class="arrow_br"></div>
								<div slot="reference" class="price_plan flex cursor">
									<img src="@/assets/img/help.png" alt="">
									<div>價格計數方案</div>
								</div>
							</el-popover>
						</div>
					</div> -->
				</div>
				</div>
			</div>
		</div>
		<el-dialog
			:visible.sync="showVideo"
			width="90%"
			@close='closeVideo'>
			<video id="myVideo" class="video-js" :poster="Poster" v-if="videoWrap"
				:controls="Controls">
				<source :src="src" type="video/mp4">
			</video>
			<!-- <span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="closeVideo">确 定</el-button>
			</span> -->
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
import { examinegetGuangGaoDetailsById } from "@/axios/request.js"
export default {
    data() {
        return {
			showVideo: false,
			videoWrap: false,
            preload: 'auto',  //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            src:'',               //视频的路径
            type: '',                //视频的类型
            Controls: true,              //确定播放器是否具有用户可以与之交互的控件
            Autoplay: '',              //是否自动播放
            Poster: '',      
			showViewer: false, 
			showViewer1: false,  


			position: 'left-end',
			drawer: false,
			visible: false,
			video: true,
            ruleForm: {
                name: 'XXX廣告',
                area: '九龍',
                time: '',
                type: '',
				date: '2021-06-06 ~ 2021-12-21',
                startDate: '',
				endtDate: '',
                content: '',
				mediaType: '',
				inp: '2',
            },
			labelPosition: 'left',
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
				disabledDate(time) {
					return time.getTime() < Date.now() - 8.64e7;
				},
			},
            startDate: '',
			endDate: '',
            value2: '',
			typeList: [],
			areaList: [],
			timeList: [],
			imageList: [],
			minute: [],
			loading: false
        };
    },
	beforeMount() {
		let that = this
        window.addEventListener('resize', (e) => {
            that.fun()
        })
		this.fun()
    },
	components: { ElImageViewer },
	created () {
		this.$store.dispatch('getTimeIntervaDetailslList',this)
		this.$store.dispatch('getTypeList',this)
		
	},
	watch: {
        lang: {
            handler (val) {
                if (val) {
					// let that = this
					// this.$nextTick(() => {
					// 	that.initMap1(22.6,114.1,1)
					// })
					// if (val == 'zh-CN') {
					// 	if (this.ruleForm.cmediaType == 'image') {
					// 		this.ruleForm.cmediaType = '圖片'
					// 	}else if (this.ruleForm.cmediaType == 'video') {
					// 		this.ruleForm.cmediaType = '視屏'
					// 	}
					// } else if (val == 'en-US') {
					// 	if (this.ruleForm.cmediaType == '圖片') {
					// 		this.ruleForm.cmediaType = 'image'
					// 	}else if (this.ruleForm.cmediaType == '視屏') {
					// 		this.ruleForm.cmediaType = 'video'
					// 	}
					// }
                }
            }
        },
		getTypeList: {
			handler (val) {
				if (val) {
					this.getTypeList = val
					this.$store.dispatch('getAddress',this) 
					this.examinegetGuangGaoDetailsById()
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
		clockList: {
			handler (val) {
				if (val) {
					this.clockList = val
				}
			}
		},
		mapstoreList: {
			handler (val) {
				let that = this
				if (val) {
					this.$nextTick(() => {
						that.mapStoreListShow = []
						that.mapstoreList = val
						val.forEach((child,i) => {
							child.area = '暫無地區'
							that.addressList.forEach(item => {
								if (child.addressParentId == item.id) {
									child.area = item.addressLanguageDtos.find( res => res.language == "zh-TW") && this.$i18n.locale == "zh-CN" ? 
									item.addressLanguageDtos.find( res => res.language == "zh-TW").addressName: 
									item.addressLanguageDtos.find( res => res.language == "en-US").addressName
								}
							})
							that.mapStoreListShow.push({
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
						that.initMap1(22.6,114.1,1)
					})
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
		clockList: {             //時間列表
			get () { return this.$store.state.user.clockList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'clockList',
					value: val
				})
			}
		},
    },
    methods: {
		closeVideo () {
			this.showVideo = false
			this.videoWrap = false
		},
		closeViewer1() {
          this.showViewer1 = false
        },
        imgPreview (url) {
			this.dimg1 = url
			this.showViewer1 = true
		},
        previewVideo (item) {
			this.src = item.videoSrc
			this.showVideo = true
			this.videoWrap = true
		},
		toPreview () {

		},

		examinegetGuangGaoDetailsById () {
			this.loading = true
			this.typeList = []
			let data = {
				guangGaoId: this.$route.query.id
			}
			examinegetGuangGaoDetailsById(data).then(res => {
				console.log(res)
				this.loading = false
				if (res.data.rtnCode == 200) {
					let obj = res.data.data
					this.ruleForm.name = obj.title
					this.ruleForm.date = 
					new Date(obj.startTime).toLocaleDateString().split('/').join('-')
					 + ' ~ ' + 
					new Date(obj.endTime).toLocaleDateString().split('/').join('-')
					this.ruleForm.inp = obj['length']
					this.getTypeList.forEach(item => {
						item.forEach(child => {
							if (child.id == res.data.data.typeId && child.language == 'zh-TW' && this.$i18n.locale == 'zh-CN') {
								console.log(child.guangGaoTypeName)
								this.typeList.push(child.guangGaoTypeName)
							} else if (child.id == res.data.data.shopTypeId && child.language == 'en-US' && this.$i18n.locale == 'en-US') {
								this.typeList.push(child.guangGaoTypeName)
							}
						})
					})
					if (obj.guangGaoAddressAndTimeDto.shopVoList) {
						this.addressList.forEach(item => {
							obj.guangGaoAddressAndTimeDto.shopVoList.forEach(child => {
								if (item.id == child.addressParentId) {
									item.addressLanguageDtos
									this.areaList.push(item.addressName)
								}
							})
							
						})
						
					}
					if (obj.guangGaoAddressAndTimeDto.guangGaoTimeDtos) {
						this.clockList.forEach(item => {
							item.timeIntervalList.forEach(val => {
								obj.guangGaoAddressAndTimeDto.guangGaoTimeDtos.forEach(child => {
									child.guangGaoTimeMinDtos.forEach(key => {
										if (val.id == key.timeIntervalDetailsId) {
											key.time = val.packageName
											this.timeList.push( val.packageName)
										}
									})
									
								})
							})
							
						})
					}
					if (obj.guangGaoContentDto) {
						if (obj.guangGaoContentDto[0].fileType == 1 && this.$i18n.locale == "zh-CN") {
							this.ruleForm.mediaType = '圖片'
						} else if (obj.guangGaoContentDto[0].fileType == 1 && this.$i18n.locale == "en-US") {
							this.ruleForm.mediaType = 'image'
						}
						if (obj.guangGaoContentDto[0].fileType == 3 && this.$i18n.locale == "zh-CN") {
							this.ruleForm.mediaType = '視頻'
						} else if (obj.guangGaoContentDto[0].fileType == 3 && this.$i18n.locale == "en-US") {
							this.ruleForm.mediaType = 'video'
						}
						obj.guangGaoContentDto.forEach(key => {
							if (key.fileType == 3) {
								key.videoSrc = key.url.split('&#&')[0]
								key.imageSrc = key.url.split('&#&')[1]
							}
						})
						this.imageList = obj.guangGaoContentDto
					}
				}
			}).catch(e => {
				this.loading = false
			})
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
			this.submit = false
		},
		goBack () {
			this.$router.back()
		},
    }
}
</script>

<style lang='less' scoped>
	.content_down {
		width: calc(100% + 100px);
		position: relative;
		margin-top: 35px;
		margin-left: -100px;
	}
	.content_down1 {
		width: calc(100% + 100px);
		position: relative;
		// margin-top: 35px;
		margin-left: -100px;
	}
    .Gdetail {
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
    .content {
        // width: 85%;
        // height: calc(100% - 36px);
        padding: 10px 7px 0 7px;
        background: white;
        // overflow: auto;
		// margin-top: 15px;
		@media screen and (max-width: 564px) {
			width: 100%;
		}
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
        margin-bottom: 15px;
        padding: 0 20px 20px 20px;
    }
    .iden {
        border: solid 4px;
		background: black;
        width: 0;
        height: 0;
        margin-right: 7px;
    }
    .detailPlan {
        // height: 1000px;
		padding-bottom: 30px;
		margin-bottom: 20px;
    }
    .inp_time {
		width: 70px;
		background: white;
		height: 37px;
		margin-right: 5px;
    }
    .textarea_wrap {
    //   width: 100%;
      min-height: 250px;
      background: white;
      box-shadow: 0 0 8px rgb(207, 207, 207) inset;
	  padding: 20px 27px;
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
		// opacity: 0.9;
	}
	
	.total {
		width: 90%;
		font-size: 14px;
		@media screen and (max-width: 774px) {
			font-size: 12px;
			width: 100%;
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
			@media screen and (max-width: 774px) {
				width: 100%;
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
		font-size: 16px;
		color: rgb(92, 92, 92);
		text-decoration: underline;
		img {
			width: 20px;
			height: 20px;
			margin-right: 4px;
		}
	}
	.footer_w {
		height: 50px;
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
		// margin-left: 15px;
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
		white-space: nowrap;
		// @media screen and (max-width: 870px) {
		// 	margin-top: 5px;
		// }
		margin-bottom: 5px;
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
</style>