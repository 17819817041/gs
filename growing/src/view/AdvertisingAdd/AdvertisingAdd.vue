<template>
    <div class="AdvertisingAdd AdvertisingAdd2" v-loading='loading'>
		<!-- <img class="back_a cursor" v-show="!submit" @click="submit = true" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt=""> -->
		<div class="AdvertisingOperation_back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="" @click="goBack">Basic{{$t('lang.comboPlan')}}
        </div>
        <div class="noBar" style="height: calc(100% - 35px);overflow: auto;margin-top: 15px;">
			<div :class="['content mg bar',{ heigh: !submit }]">
				<!-- <div class="content_title al"><img class="cursor" style="width: 25px;" @click="goBack" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="">新增廣告計劃</div> -->
				<div class="noBar" style="height: calc(100% - 0px); overflow:auto" v-show="submit">
					<div class="basicsMsg theme" v-show="submit">
						<div class=" basicsMsg_item bold al">
							<div class="iden radius"></div> {{$t("lang.message")}}
						</div>
						<el-form :model="ruleForm1" :label-position="$i18n.locale == 'zh-CN'? labelPosition: 'top'" :rules="rules1" ref="ruleForm1" 
						:label-width="$i18n.locale == 'zh-CN'? '100px': '165px'" class="demo-ruleForm">
							<el-form-item :label="$t('lang.adname')" prop="name">
								<el-input style="width: 40%;min-width: 200px;" v-model="ruleForm1.name"></el-input>
							</el-form-item>
							<el-form-item :label="$t('lang.adtype')" prop="type">
								<div class="flex br">
									<div class="flex">
										<el-select v-model="ruleForm1.type" :placeholder="$t('lang.pldselecttype')" @change="cutType">
											<el-option v-for="(item,i) in getTypeList" :key="i"
												:label='item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
												item.find( res => res.language == "zh-TW").guangGaoTypeName: 
												item.find( res => res.language == "en-US").guangGaoTypeName '
												:value="item">
											</el-option>
										</el-select>
										<div class="addCate al" @click="addType(ruleForm1.type)">
											{{$t("lang.addbtn")}}
										</div>
									</div>
									<div class="list clear">
										<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in typeList" :key="i">
											{{item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
												item.find( res => res.language == "zh-TW").guangGaoTypeName: 
												item.find( res => res.language == "en-US").guangGaoTypeName}} <span class="al" style="margin-left: 5px">
													<img class="cursor" @click="deleType(i)" src="@/assets/img/cha.png" alt="">
												</span>
										</div>
									</div>
								</div>
							</el-form-item>
						</el-form>
					</div>
					<div class="detailPlan theme" v-show="submit">
						<div class=" basicsMsg_item bold al">
							<div class="iden radius"></div> {{$t("lang.DetailedPlan")}}
						</div>
						<el-form :model="ruleForm" :label-position="$i18n.locale == 'zh-CN'? labelPosition: 'top'" :rules="rules" ref="ruleForm" 
							:label-width="$i18n.locale == 'zh-CN'? '100px': '205px'" class="demo-ruleForm">
							<el-form-item :label="$t('lang.cycle')">
								<div style="min-width: 200px;width: 100%" class='clear'>
									<div class="float" style="margin-right: 15px;width: 140px;">
										<el-form-item prop="startDate">
											<el-date-picker
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
								<el-form-item :label="$t('lang.duration')" prop="inp">
									<div class="al">
										<div :class="['al inp_time ju', { marleft0: $i18n.locale == 'en-US' }]">
											<!-- <input type="text" class="tc"> -->
											<!-- <el-input class="width100"
											oninput ="value=value.replace(/[^0-9]/g,'')" :disabled="video" v-model="ruleForm.inp"></el-input> -->
											<el-input-number v-model="ruleForm.inp" :disabled="video" size="small" 
											:min="60" :step="10" step-strictly :max="1000" label="描述文字"></el-input-number>
										</div>
										<div>{{$t('lang.minute')}} </div>
									</div>
								</el-form-item>
							</div>
							<el-form-item :label="$t('lang.adcontent')" prop="imageList">
								<div :class="['textarea_wrap clear', { content_down: $i18n.locale == 'zh-CN' }]">
                                    <!-- <el-upload action="" list-type="picture-card" 
                                        ref="fileUpload" :headers="uploadHeaders" :on-change="videoChange" :show-file-list="false" :limit='5'
                                        :http-request="fnUploadRequest" :on-success="handleSuccess"
										:on-error="handleError" :before-upload="handleUpload" :on-exceed='outFile' :on-progress="uploadProcess">
                                        <i class="el-icon-plus"></i>
										<el-progress v-show="imgFlag == true" type="circle" :percentage="percent"></el-progress>
                                    </el-upload> -->
									<label for="upload1">
										<input type="file" :id="id" @change="handleUpload" v-show="false">
										<div class="addFile ju al">
											<img src="@/assets/img/add.png" alt="">
											<el-progress v-show="imgFlag == true" type="circle" :percentage="percent"></el-progress>
										</div>
									</label>
									
									<div class="textarea_wrap_item float" v-for="(item,i) in ruleForm.imageList" :key="i">
										<div class="imageList_wrap">
											<div class="deleImg radius cursor ju al" @click.stop="deleImg(i)">
												<img style="height: 100%;width: 100%; object-fit:cover;" src="@/assets/img/cha.png" alt=""></div>
											<div class="textarea_wrap_item_child cursor ju al">
												<img v-if="ruleForm.mediaType == 'image'"  @click="imgPreview(item.url)"
												style="height: 100%;" :src="item.url" alt="">
												<!-- <img v-else-if="ruleForm.mediaType == 'video'" style="height: 50%;" src="@/assets/img/video_file.png" alt=""> -->

												<div class="video_outWrap" v-else-if="ruleForm.mediaType == 'video'">
													<img class="img" src="@/assets/img/start.png" alt="" @click="previewVideo(item)">
													<div class="cutImage ju al"><img style="height: 100%;" 
													@click="previewVideo(item)" :src="item.imageUrl" alt=""></div>

													<div class="videoImage ju al" id="output" ref="output" @click="previewVideo(item)">
														
													</div>
													<video class="width100" id="video1" ref="video"
														:controls="false">
														<source :src="item.url" type="video/mp4">
													</video>
												</div>
											</div>
										</div>
										<div class="imageList_name tc">{{item.name}}</div>
										<div class="imageList_size tc">{{item.size}}</div>
										<div class="imageList_long tc" v-if="ruleForm.mediaType == 'video'"
										>時長：{{item.videoTime}}</div>
									</div>
								</div>
								<div :class="[{content_down1: $i18n.locale == 'zh-CN'}]" 
								style='font-size: 12px;line-height: 15px;margin-top: 5px;'>
									{{$t('lang.becare')}}
								</div>
								<div :class="[{content_down1: $i18n.locale == 'zh-CN'}]" 
								style='font-size: 12px; line-height: 15px;'>{{$t('lang.becare1')}}</div>
							</el-form-item>
						</el-form>
						<div class="total mg sb">
							<div></div>
							<div class="total_price">
								<div class="t_price bold">
									<span>{{$t('lang.total')}}:</span><span class="math_price"> $ 6000 </span><span class="p_d">HKD</span>
								</div>
								<div class="total_price_item">{{$t('lang.phprice')}}: $4000 HKD</div>
								<div class="total_price_item">{{$t('lang.unphprice')}}: $2000 HKD</div>
								<!-- <div class="price_plan flex cursor" @click="drawer = !drawer"> -->
								<el-popover
									:placement="position"
									trigger="click"
									v-model="visible">
									<div>
										<div class="flex total_item">
											<div class="l_msg">{{$t('lang.base')}}: </div>
											<div class="r_msg">100{{$t('lang.hdk')}}</div>
										</div>
										<div class="flex total_item">
											<div class="l_msg">{{$t('lang.phprice')}}: </div>
											<div class="r_msg">{{$t('lang.base')}}*2/{{$t('lang.minute')}}</div>
										</div>
										<div class="flex total_item">
											<div class="l_msg">{{$t('lang.unphprice')}}: </div>
											<div class="r_msg">{{$t('lang.base')}}/{{$t('lang.minute')}}</div>
										</div>
									</div>
									<div>
										{{$t('lang.detailgetprice')}}
									</div>
									<div class="arrow_br"></div>
									<div slot="reference" class="price_plan flex cursor">
										<img src="@/assets/img/help.png" alt="">
										<div>{{$t('lang.scheme')}}</div>
									</div>
								</el-popover>
								
							</div>
						</div>
						<div class="sure_plan_wrap">
							<div class="sure_plan cursor" @click="submitG">{{$t('lang.adconfirm')}}</div>
						</div>
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
import { genOrder, getuploadtoken  } from "@/axios/request.js"
import Client from '@/utils/client'
import  axios  from 'axios'
export default {
    data() {
        return {
			uploadHeaders: {
				authorization: '*'
			},
			region: 'oss-cn-beijing',
			bucket: '',//这里选择OSS容器
			url: '',//后台获取token地址
			ClientObj: null,
			id: 'upload1',
			urls:[],
			getToken:{
				sign:'',
			},

			percent: 0,
			imgFlag: false,
			showViewer: false, 
			showViewer1: false, 

			showVideo: false,
			videoWrap: false,
			videolong: false,
			preload: 'auto',  //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            src:'',               //视频的路径
            type: '',                //视频的类型
            Controls: true,              //确定播放器是否具有用户可以与之交互的控件
            Autoplay: '',              //是否自动播放
            Poster: '',         


			position: 'left-end',
			visible: false,
			drawer: false,
			submit: true,
			video: true,
            ruleForm: {
                cmediaType1: 1,
                startDate: '',
				endDate: '',
                content: '',
				mediaType: '',
				cmediaType: '',
				inp: 60,
				videoMinute: 1,
				imageList: [],
            },
			labelPosition: 'left',
            rules: {
				mediaType: [
                    { required: true, message: '請選擇媒體類型', trigger: 'blur' }
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
                ],
				imageList: [
					{ required: true, message: '請添加媒體內容', trigger: 'change' }
				],
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
                        return time.getTime() < Date.now()  || time.getTime() < this.ruleForm.startDate;
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
			ruleForm1: {
				name: '',
                type: '',
			},
			rules1: {
				name: [
                    { required: true, message: '請輸入廣告名稱', trigger: 'blur' },
                    { min: 3, max: 15, message: '長度需3 到 15 個字符', trigger: 'blur' }
                ],
                type: [
                    { required: true, message: '請選擇媒體類型', trigger: 'blur' }
                ], 
			},
            value2: '',
			typeList: [],
			areaList: [],
			timeList: [],
			loading: false,
			minute: [],
		};
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
	components: { ElImageViewer },
	beforeMount() {
		let that = this
        window.addEventListener('resize', (e) => {
            that.fun()
        })
		this.fun()
    },
	created () {
		this.$store.dispatch('getAddress',this) 
        this.$store.dispatch('getTypeList',this)
		this.$store.dispatch('getuploadtoken')
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
							progress: function* (percentage, cpt) {
								// 上传进度
								// _this.percent = percentage
							}
						}).then((res) => {
							console.log(res)
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
									console.log('http://osshongk.oss-cn-hongkong.aliyuncs.com/'+res.name,)
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



			
		genOrder () {
			
			let that = this
			let boo = false
			let boo1 = false
			this.$refs.ruleForm.validate(flag => {
                if (flag) { boo = true }
            })
			this.$refs.ruleForm1.validate(flag => {
				if (flag) { boo1 = true }
			})
			// return
			if (boo && boo1) {
				let arr = []
				this.loading = true	
				this.ruleForm.imageList.forEach(item => {
					arr.push({
						"fileType": Number(this.ruleForm.cmediaType1),
						"url": item.url + '&#&' + item.imageUrl,
						"fileName": item.name,
						"fileSize": item.size,
						"filePlayTime": item.videoTime
					})
				})
				let data = {
					guangGaoDtoJson: {
						"endTime": String(new Date(this.ruleForm.endDate).toLocaleDateString().split('/').join('-')),
						"guangGaoAddressAndTimeDto": {
							"guangGaoTimeDtos": [{
								"guangGaoTimeMinDtos": [{
									"timeIntervalDetailsId": 1,
									"timeMin": 2
								}],
								"timeIntervalId": 1,
								"totalMinLength": 12
							}],
							"shopAndAddressDtos": [{
								"addressId": 19,
								"addressParentId": 9,
								"shopId": 52
							}]
						},
						// "guangGaoContentDto": [{
						// 	"fileType": this.ruleForm.cmediaType1,
						// 	"url": "www.csada.sc"
						// }],
						"guangGaoContentDto": arr,
						"length": this.ruleForm.videoMinute,
						"startTime": String(new Date(this.ruleForm.startDate).toLocaleDateString().split('/').join('-')),
						"title": this.ruleForm1.name,
						"totalLength": this.ruleForm.inp, 
						"type": 2,    //隨機
						"typeId": this.ruleForm1.type[0].id,
						"userId": localStorage.getItem('compoundeyesUserId')
					},
				}
				console.log(data.guangGaoDtoJson)
				let str = JSON.stringify(data.guangGaoDtoJson)
				const qs = require('qs')
				let data1 = qs.stringify({
					guangGaoDtoJson: str
				})
				genOrder(data1).then(res => {
					that.loading = false
					if (res.data.rtnCode == 200) {
						that.$message({
							type: 'success',
							message: that.$t('lang.addSuccess')
						})
						that.submit = false
					} else {
						this.$message({
							type: 'error',
							message: this.$t('lang.addFail')
						})
					}
				}).catch(e => {
					that.loading = false
					this.$message({
						type: 'error',
						message: this.$t('lang.addFail')
					})
				})
			}
			
		},
		uploadProcess(event, file, fileList) {
			if (Math.floor(event.percent) == 100) {
				// this.percent = 0
				this.imgFlag = false
			} else {
				this.imgFlag = true;
				// console.log(event.percent);
				this.percent = Math.floor(event.percent);
			}
		},
		closeVideo () {
			this.showVideo = false
			this.videoWrap = false
		},
		closeViewer1() {
          this.showViewer1 = false
        },
		previewVideo (item) {
			console.log(item.url)
			this.src = item.url
			this.showVideo = true
			this.videoWrap = true
		},
		imgPreview (url) {
			this.dimg1 = url
			this.showViewer1 = true
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
			this.genOrder()
			// this.submit = false
		},
		goBack () {
			this.$router.back()
		},
		addType (item) {
			if (item) {
				this.typeList = []
				this.typeList.push(item)
				let arr = new Set(this.typeList)
				this.typeList = Array.from(arr)
			}
		},
		cutType (val) {
			console.log(val)
		},
		addArea (item) {
			if (item) {
				this.areaList.push(item)
				let arr = new Set(this.areaList)
				this.areaList = Array.from(arr)
			}
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
		getType (e) {
			this.ruleForm.imageList = []
			this.ruleForm.inp = ''
			this.minute = []
			if (e == 1) {
				this.video = false
				this.ruleForm.mediaType = 'image'
				this.ruleForm.cmediaType = this.$t('lang.image')
				this.ruleForm.cmediaType1 = 1
			} else if (e == 3) {
				this.video = true
				this.ruleForm.mediaType = 'video'
				this.ruleForm.cmediaType = this.$t('lang.video')
				this.ruleForm.cmediaType1 = 3
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
				this.ruleForm.imageList.splice(i,1)
			} else {
				this.ruleForm.imageList.splice(i,1)
			}
		},
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
    .AdvertisingAdd {
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
    .content_title {
        font-size: 22px;
        font-weight: 500;
        padding: 15px 0;
        background: white;
    }
	.width384 {
		@media screen and (max-width: 348px) {
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
    .addCate {
        border: solid 1px rgb(206, 206, 206);
        padding: 0 20px;
        box-shadow: 2px 2px 6px rgb(224, 224, 224) inset;
        height: 39px;
        margin-left: 15px;
		white-space: nowrap;
    }
    .inp_time {
		width: 105px;
		// background: rgb(97, 24, 24);
		height: 37px;
		margin-right: 5px;
		margin-left: 30px;
		@media screen and (max-width: 564px) {
			margin-left: 0px;
		}
    }
	.marleft0 {
		margin-left: 0 !important;
	}
    .textarea_wrap {
		// width: 100%;
		min-height: 250px;
		background: white;
		box-shadow: 0 0 8px rgb(212, 212, 212) inset;
		padding: 20px 27px;
		@media screen and (max-width: 564px) {
			padding: 10px 17px;
		}
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
		.cutImage {
			position: absolute;
			left: 0;
			z-index: 124;
			top: 0;
			width: 100%;
			height: 100%;
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
	.br1185 {
			display: block;
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
	.iknow {
        margin-top: 30px;
        div {
            color: white;
            background: @themeColor;
            padding: 15px 40px;
        }
    } 
</style>