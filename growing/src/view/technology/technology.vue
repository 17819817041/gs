<template>
    <div class="technology">
        <div class="technology_content mg noBar">
            <div :class="['technology_content_item',{ mgb: active, 'technology_content_item_border': choose == 1 }]" v-show="submit">
                <div class="drawer_arrow" @click="active = !active">
                    <img style="height: 90%;" :class="[{'rotate': active}]" src="@/assets/img/pull_down.png" alt="">
                </div>
                <div class="taocan_title bold">旺角街道高流量商鋪廣告套餐</div>
                <div class="clear">
                    <div class="float title_p sa al">
                        <div>
                            <div class="technology_bold">繁忙時段</div>
                            <div class="technology_size12">9am-9pm廣告高曝光時間</div>
                        </div>
                        <div>
                            <div class="technology_bold">旺角街道高流量商鋪</div>
                            <div class="technology_size12">由多加旺角街道中人流量集中店鋪組成</div>
                        </div>
                    </div>
                    <div class="float title_p1 sa al">
                        <div>
                            <div class="technology_bold_red">計劃原價</div>
                            <div class="technology_bold_red1" style="text-decoration: line-through;">
                                $49999 HKD
                            </div>
                        </div>
                        <div>
                            <div class="youhui"><img src="@/assets/img/youhui.png" alt=""></div>
                        </div>
                        <div class="flex al">
                            <div class="technology_bold dor radius ju al">$</div>
                            <div class="technology_bold technology_price">39999</div>
                            <div class="hkd">HKD</div>
                            <div :class="['choose_btn cursor technology_bold',
                            { 'choose_btn_background':choose == 1 }]" @click="choose = 1,allprice = '39999'">選中</div>
                        </div>
                    </div>
                </div>
                <div :class="['content_msg',{ maxheight: !active }]">
                    <div class="bold">套餐內容</div>
                    <div class="msg_item">廣告計劃播放於9am-9pm黃金繁忙時段</div>
                    <div class="msg_item">精確投放到指定旺角街道店鋪，由高人流量店鋪組成</div>
                    <div class="msg_item">可指定時段的某個準確時間進行投放廣告媒體內容</div>
                    <div class="msg_item">套餐所選的指定街道商鋪，在廣告計劃播放時段，會同步播放廣告媒體內容</div>
                </div>
            </div>
            <div :class="['technology_content_item',{ mgb: active1, 'technology_content_item_border': choose == 2 }]" v-show="submit">
                <div class="drawer_arrow" @click="active1 = !active1">
                    <img style="height: 90%;" :class="[{'rotate': active1}]" src="@/assets/img/pull_down.png" alt="">
                </div>
                <div class="taocan_title bold">中環街道高流量商鋪廣告套餐</div>
                <div class="clear">
                    <div class="float title_p sa al">
                        <div>
                            <div class="technology_bold">非繁忙時段</div>
                            <div class="technology_size12">9pm-9am廣告播放時間</div>
                        </div>
                        <div>
                            <div class="technology_bold">中環街道高流量商鋪</div>
                            <div class="technology_size12">由多加中環街道中人流量集中店鋪組成</div>
                        </div>
                    </div>
                    <div class="float title_p1 sa al">
                        <div>
                            <div class="technology_bold_red">計劃原價</div>
                            <div class="technology_bold_red1" style="text-decoration: line-through;">
                                $69999 HKD
                            </div>
                        </div>
                        <div>
                            <div class="youhui"><img src="@/assets/img/youhui.png" alt=""></div>
                        </div>
                        <div class="flex al">
                            <div class="technology_bold dor radius ju al">$</div>
                            <div class="technology_bold technology_price">59999</div>
                            <div class="hkd">HKD</div>
                            <div :class="['choose_btn cursor technology_bold',
                            { 'choose_btn_background':choose == 2 }]" @click="choose = 2,allprice='59999'">選中</div>
                        </div>
                    </div>
                </div>
                <div :class="['content_msg',{ maxheight: !active1 }]">
                    <div class="bold">套餐內容</div>
                    <div class="msg_item">廣告計劃播放於9am-9pm黃金繁忙時段</div>
                    <div class="msg_item">精確投放到指定中環街道店鋪，由高人流量店鋪組成</div>
                    <div class="msg_item">可指定時段的某個準確時間進行投放廣告媒體內容</div>
                    <div class="msg_item">套餐所選的指定街道商鋪，在廣告計劃播放時段，會同步播放廣告媒體內容</div>
                </div>
            </div>
            <div :class="['technology_content_item',{ mgb: active2, 'technology_content_item_border': choose == 3 }]" v-show="submit">
                <div class="drawer_arrow" @click="active2 = !active2">
                    <img style="height: 90%;" :class="[{'rotate': active2}]" src="@/assets/img/pull_down.png" alt="">
                </div>
                <div class="taocan_title bold">黃大仙街道高流量商鋪廣告套餐</div>
                <div class="clear">
                    <div class="float title_p sa al">
                        <div>
                            <div class="technology_bold">繁忙時段</div>
                            <div class="technology_size12">9am-9pm廣告高曝光時間</div>
                        </div>
                        <div>
                            <div class="technology_bold">黃大仙街道高流量商鋪</div>
                            <div class="technology_size12">由多加黃大仙街道中人流量集中店鋪組成</div>
                        </div>
                    </div>
                    <div class="float title_p1 sa al">
                        <div>
                            <div class="technology_bold_red">計劃原價</div>
                            <div class="technology_bold_red1" style="text-decoration: line-through;">
                                $79999 HKD
                            </div>
                        </div>
                        <div>
                            <div class="youhui"><img src="@/assets/img/youhui.png" alt=""></div>
                        </div>
                        <div class="flex al">
                            <div class="technology_bold dor radius ju al">$</div>
                            <div class="technology_bold technology_price">69999</div>
                            <div class="hkd">HKD</div>
                            <div :class="['choose_btn cursor technology_bold',
                            { 'choose_btn_background':choose == 3 }]" @click="choose = 3,allprice = '69999'">選中</div>
                        </div>
                    </div>
                </div>
                <div :class="['content_msg',{ maxheight: !active2 }]">
                    <div class="bold">套餐內容</div>
                    <div class="msg_item">廣告計劃播放於9am-9pm黃金繁忙時段</div>
                    <div class="msg_item">精確投放到指定黃大仙街道店鋪，由高人流量店鋪組成</div>
                    <div class="msg_item">可指定時段的某個準確時間進行投放廣告媒體內容</div>
                    <div class="msg_item">套餐所選的指定街道商鋪，在廣告計劃播放時段，會同步播放廣告媒體內容</div>
                </div>
            </div>

            <div v-show="submit">
				<div class="basicsMsg" v-show="submit">
					<div class=" basicsMsg_item bold al">
						<div class="iden radius"></div> {{$t("lang.message")}}
					</div>
					<el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" 
					:label-width="$i18n.locale == 'zh-CN'? '115px': '145px'" class="demo-ruleForm">
						<el-form-item :label="$t('lang.adname')" prop="name">
							<el-input style="width: 40%;min-width: 200px;" v-model="ruleForm.name"></el-input>
						</el-form-item>
						<el-form-item :label="$t('lang.adtype')" prop="type">
							<div class="flex br">
								<div class="flex">
									<el-select v-model="ruleForm.type" :placeholder="$t('lang.pldselecttype')">
										<el-option :label="$t('lang.food')" :value="$t('lang.food')"></el-option>
										<el-option :label="$t('lang.Technology')" :value="$t('lang.Technology')"></el-option>
										<el-option :label="$t('lang.medical')" :value="$t('lang.medical')"></el-option>
										<el-option :label="$t('lang.car')" :value="$t('lang.car')"></el-option>
									</el-select>
									<div class="addCate al" @click="addType(ruleForm.type)">
										{{$t("lang.addbtn")}}
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
				<div class="detailPlan" v-show="submit">
					<div class=" basicsMsg_item bold al">
						<div class="iden radius"></div> {{$t("lang.DetailedPlan")}}
					</div>
					<el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" 
						:label-width="$i18n.locale == 'zh-CN'? '125px': '165px'" class="demo-ruleForm">
						<el-form-item :label="$t('lang.cycle')" prop="date">
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
										<el-option :label="$t('lang.video')" value="2"></el-option>
									</el-select>
								</div>
							</el-form-item>
							<el-form-item :label="$t('lang.duration')" prop="inp">
								<div class="al">
									<div class="al inp_time ju">
										<!-- <input type="text" class="tc"> -->
										<el-input class="width100"
										oninput ="value=value.replace(/[^0-9]/g,'')" :disabled="video" v-model="ruleForm.inp"></el-input>
									</div>
									<div>{{$t('lang.minute')}} <span style="color: gray;margin-left: 5px;">{{$t('lang.int1')}}</span></div>
								</div>
							</el-form-item>
						</div>
						<el-form-item :label="$t('lang.adcontent')" prop="content">
							<div class="textarea_wrap clear">
								<label for="img">
									<div class="addImg ju al float">
										<img style="height: 70%;" src="@/assets/img/add.png" alt="">
									</div>
									<input type="file" id="img" v-show="false" multiple="multiple" @change="cahngeFile">
								</label>
								<div class="textarea_wrap_item float" v-for="(item,i) in imageList" :key="i">
									<div class="imageList_wrap">
										<div class="deleImg radius ju al" @click.stop="deleImg(i)"><img style="heihgt: 100%;" src="@/assets/img/cha.png" alt=""></div>
										<div class="textarea_wrap_item_child ju al">
											<img v-if="ruleForm.mediaType == 'image'" style="height: 100%;" :src="item.url" alt="">
											<img v-else-if="ruleForm.mediaType == 'video'" style="height: 50%;" src="@/assets/img/video_file.png" alt="">
										</div>
									</div>
									<div class="imageList_name tc">{{item.name}}</div>
									<div class="imageList_size tc">{{item.size}}</div>
								</div>
							</div>
							<div style='font-size: 12px;line-height: 15px;margin-top: 5px;'>
								{{$t('lang.becare')}}
							</div>
							<div style='font-size: 12px; line-height: 15px;'>{{$t('lang.becare1')}}</div>
						</el-form-item>
					</el-form>
					<div class="total mg sb">
						<div></div>
						<div class="total_price">
							<div class="t_price bold">
								<span>{{$t('lang.total')}}:</span><span class="math_price"> $ {{allprice}} </span><span class="p_d">HKD</span>
							</div>
							<el-popover
								:placement="position"
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
</template>

<script>
export default {
    data () {
        return {
            allprice: '39999',
            active: false,
            active1: false,
            active2: false,
            choose: 1,
            position: 'left-end',
			visible: false,
			drawer: false,
			video: true,
            submit: true,
            ruleForm: {
                name: '',
                // area: '',
                // time: '',
                type: '',
				date: '',
                startDate: '',
				endtDate: '',
                content: '',
				mediaType: '',
				cmediaType: '',
				inp: '',
            },
			labelPosition: 'left',
            rules: {
                name: [
                    { required: true, message: '請輸入廣告名稱', trigger: 'blur' },
                    { min: 3, max: 5, message: '長度需3 到 5 個字符', trigger: 'blur' }
                ],
                // area: [
                //     { required: true, message: '請選擇投放區域', trigger: 'blur' }
                // ],
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
                        return time.getTime() < Date.now() - 8.64e7 || time.getTime() < this.ruleForm.startDate;
                    } else {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                }
            },
            pickerOptions2: {
                disabledDate: (time) => {
                    return time.getTime() < this.ruleForm.startDate || time.getTime() < Date.now() + 8.64e7*4;
                }
            },
            startDate: '',
			endDate: '',
            value2: '',
			typeList: [],
			areaList: [],
			timeList: [],
			imageList: [],
			minute: []
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
		
	},
    methods: {
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
			this.imageList = []
			this.ruleForm.inp = ''
			this.minute = []
			if (e == 1) {
				this.video = false
				this.ruleForm.mediaType = 'image'
				this.ruleForm.cmediaType = '圖片'
			} else if (e == 2) {
				this.video = true
				this.ruleForm.mediaType = 'video'
				this.ruleForm.cmediaType = '視頻'
			}
		},
		cahngeFile (e) {
			var files = e.target.files
			let that = this
			if (this.ruleForm.mediaType) {
				if (this.video) {
					if (this.ruleForm.mediaType == 'video') {
						if (e.target.files.length<=5 && this.imageList.length <= 5) {
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
										that.imageList.push({ url: fileurl, name: name, size: size })
										let audioElement = new Audio(fileurl);
										audioElement.addEventListener("loadedmetadata", function (_event) {
											var time = Math.ceil(audioElement.duration)
											if (null != time && "" != time) {
												if (time > 60 && time < 60 * 60) {
													time = parseInt(time / 60.0)
												}
												// else if (time >= 60 * 60 && time < 60 * 60 * 24) {
												// 	time = parseInt(time / 3600.0) + "小时" + parseInt((parseFloat(time / 3600.0) -
												// 	parseInt(time / 3600.0)) * 60) + "分钟" +
												// 	parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
												// 	parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
												// }
												else {
													// time = parseInt(time) + "秒";
													time =	1;
												}
											}
											// that.minute.push(Math.ceil(audioElement.duration))
											that.minute.push(time)
											that.$forceUpdate()
											// that.ruleForm.inp = that.ruleForm.inp*1 +  Math.ceil(audioElement.duration)                   //时长为秒，小数，182.36   / 向上取整
											// console.log(audioElement.duration)
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
								this.$nextTick(() => {
									this.ruleForm.inp = 0
									for (let i=0;i<Array.from(this.minute).length;i++) {
										this.ruleForm.inp = this.ruleForm.inp*1 + this.minute[i]
										this.$forceUpdate()
									}
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
						if (e.target.files.length<=10 && this.imageList.length <= 10) {
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
										that.imageList.push({ url: fileurl, name: name, size: size })
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
		deleImg (i) {
			if (this.ruleForm.mediaType == 'video') {
				this.minute.splice(i,1)
				this.ruleForm.inp = 0
				for (let i=0;i<Array.from(this.minute).length;i++) {
					this.ruleForm.inp = this.ruleForm.inp*1 + this.minute[i]
					this.$forceUpdate()
				}
				this.imageList.splice(i,1)
			} else {
				this.imageList.splice(i,1)
			}
		},
    }
}
</script>

<style lang='less' scoped>
@import "@/less/style.less";
    .technology_price {
        // width: 70px;
        min-width: 60px;
        display: inline-block;
    }
    .taocan_title {
        font-size: 15px;
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
        border: solid 2px #f7f7f7;
        position: relative;
        border-radius: 5px;
        margin-bottom: 15px;
        transition: 0.2s;
        .drawer_arrow {
            position: absolute;
            width: 20px;
            height: 20px;
            right: 10px;
            top: 50%;
            transform: translate(0,-50%);
            img {
                transition: 0.2s; 
            }
        }
        .content_msg {
            position: absolute;
            left: 0;
            top: 100px;
            font-size: 13px;
            width: 100%;
            padding: 10px 20px 20px 20px;
            border-radius: 4px;
            max-height: 300px;
            transition: 0.2s;
            overflow: hidden;
            border: solid 1px rgb(230, 230, 230);
            @media screen and (max-width: 753px) {
                top: 130px;
            }
        }
    }
    .technology_content_item_border {
        border: solid 2px #3DFFFC;
    }
    .mgb {
        margin-bottom: 285px;
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
        @media screen and (max-width: 753px) {
            height: 75px;
            width: 100%;
        }
    }
    .title_p1 {
        min-width: 300px;
        width: 53%;
        height: 100px;
        @media screen and (max-width: 753px) {
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
        @media screen and (max-width: 753px) {
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
        height: calc(100% - 35px);
        padding: 7px 7px;
        background: white;
		margin-top: 15px;
        overflow: auto;
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
		background: white;
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
		width: 80px;
		height: 90px;
		margin: 5px;
		position: relative;
		.imageList_wrap {
			border: solid 1px rgb(230, 230, 230);
			width: 80px;
			height: 80px;
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