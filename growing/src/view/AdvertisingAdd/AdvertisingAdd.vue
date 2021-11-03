<template>
    <div class="AdvertisingAdd">
		<!-- <img class="back_a cursor" v-show="!submit" @click="submit = true" src="@/assets/img/back_arrow.png" alt=""> -->
		<div class="AdvertisingOperation_back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" alt="" @click="goBack">新增廣告計劃
        </div>
        <div class="content mg bar">
            <!-- <div class="content_title al"><img class="cursor" style="width: 25px;" @click="goBack" src="@/assets/img/back_arrow.png" alt="">新增廣告計劃</div> -->
			<div class="noBar" style="height: calc(100% - 10px); overflow:auto">
			<div class="basicsMsg theme" v-show="submit">
                <div class=" basicsMsg_item bold al">
                    <div class="iden radius"></div> 基礎信息
                </div>
                <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="廣告計劃名稱" prop="name">
                        <el-input style="width: 40%;min-width: 200px;" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="廣告投放類型" prop="type">
                        <div class="flex br">
                            <div class="flex">
								<el-select v-model="ruleForm.type" placeholder="請選擇類型">
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
                    <el-form-item label="廣告投放區域" prop="area">
                        <div class="flex br">
                            <div class="flex">
								<el-select v-model="ruleForm.area" placeholder="請選擇區域">
									<el-option label="九龍區" value="九龍區"></el-option>
									<el-option label="旺角區" value="旺角區"></el-option>
									<el-option label="中環區" value="中環區"></el-option>
								</el-select>
								<div class="addCate al" @click="addArea(ruleForm.area)">
									添加
								</div>
							</div>
							<div class="list clear">
								<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in areaList" :key="i">
									{{item}} <span class="al" style="margin-left: 5px"><img class="cursor" @click="deleArea(i)" src="@/assets/img/cha.png" alt=""></span>
								</div>
							</div>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
            <div class="detailPlan theme" v-show="submit">
                <div class=" basicsMsg_item bold al">
                    <div class="iden radius"></div> 詳細計劃
                </div>
                <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="廣告投放時段" prop="time">
                        <div class="flex br">
                            <div class="flex">
								<el-select v-model="ruleForm.time" placeholder="請選擇時間段">
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
                    <el-form-item label="廣告投放週期" prop="date">
                        <div style="min-width: 200px;width: 100%" class='clear'>
							<div class="float" style="margin-right: 15px;width: 140px;">
								<el-form-item prop="startDate">
									<el-date-picker
										@change="STIME"
										class="width100"
										v-model="ruleForm.startDate"
										type="date"
										placeholder="起始日期"
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
										placeholder="結束日期"
										:picker-options="pickerOptions2"
										>
									</el-date-picker>
								</el-form-item>
								
							</div>
						</div>
                    </el-form-item>
                    <div class="flex br">
                        <el-form-item label="廣告媒體類型" prop="mediaType" style="margin-right: 30px;">
                            <div class="al">
                                <el-select v-model="ruleForm.cmediaType" placeholder="請選擇類型" @change="getType">
                                    <el-option label="圖片" value="1"></el-option>
                                    <el-option label="視頻" value="2"></el-option>
                                </el-select>
                            </div>
                        </el-form-item>
                        <el-form-item label="廣告媒體時長" prop="inp">
                            <div class="al">
								<div class="al inp_time ju">
									<!-- <input type="text" class="tc"> -->
									<el-input class="width100"
									oninput ="value=value.replace(/[^0-9]/g,'')" :disabled="video" v-model="ruleForm.inp"></el-input>
								</div>
								分鐘 <span style="color: gray;margin-left: 5px;">(請輸入整數)</span>
                            </div>
                        </el-form-item>
                    </div>
                    <el-form-item label="廣告媒體內容" prop="content">
						<div class="textarea_wrap clear">
							<label for="img">
								<div class="addImg ju al cursor float">
									<img src="@/assets/img/add.png" alt="">
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
							圖片格式限制PNG \JPG \JPEG \GIF，数量限制10張，大小限制3M。視頻格式限制 MP4，大小限制100M(媒體建議尺寸1920*1080)。
						</div>
						<div style='font-size: 12px; line-height: 15px;'>媒體時長按每分鐘計數。不足1分鐘按1分鐘計算.</div>
                    </el-form-item>
                </el-form>
				<div class="total mg sb">
					<div></div>
					<div class="total_price">
						<div class="t_price bold">
							<span>計劃投放總價:</span><span class="math_price"> $ 6000 </span><span class="p_d">HKD</span>
						</div>
						<div class="total_price_item">繁忙時段價格: $4000 HKD</div>
						<div class="total_price_item">非繁忙時段價格: $2000 HKD</div>
						<!-- <div class="price_plan flex cursor" @click="drawer = !drawer"> -->
						<el-popover
							:placement="position"
							trigger="manual"
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
							<el-button slot="reference" @click="visible = !visible">手动激活</el-button>
						</el-popover>
						<div class="price_plan flex cursor" @click="visible = !visible">
							<img src="@/assets/img/help.png" alt="">
							<div>價格計數方案</div>
						</div>
					</div>
				</div>
				<div class="flexEnd" style="width: 85%;">
					<div class="sure_plan cursor" @click="submitG">確認廣告計劃</div>
				</div>
            </div>
			</div>
			<div class="basicsMsg theme padding" v-show="!submit">
				<div class="true_title al ju">
					<img src="@/assets/img/success_sign.png" alt="">確認廣告計劃成功 ！
				</div>
				<div class="ju">您的廣告計劃已提交至後台，管理員将盡快審核您的廣告計劃.</div>
			</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
			position: 'left-end',
			visible: false,
			drawer: false,
			submit: true,
			video: true,
            ruleForm: {
                name: '',
                area: '',
                time: '',
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
                area: [
                    { required: true, message: '請選擇投放區域', trigger: 'blur' }
                ],
                time: [
                    { required: true, message: '請選擇时间段', trigger: 'blur' }
                ],
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
                    return time.getTime() < this.ruleForm.startDate || time.getTime() < Date.now();
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
        };
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
        height: calc(100% - 30px);
        padding: 15px 20px;
        background: white;
        overflow: auto;
		@media screen and (max-width: 564px) {
			width: 100%;
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
    .addCate {
        border: solid 1px rgb(206, 206, 206);
        padding: 0 20px;
        box-shadow: 2px 2px 6px rgb(224, 224, 224) inset;
        height: 37px;
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
      width: 90%;
      min-height: 250px;
      background: white;
      box-shadow: 0 0 8px rgb(190, 190, 190) inset;
	  padding: 20px 27px;
    }
	.addImg {
		border: dashed 2px rgb(201, 201, 201);
		width: 100px;
		height: 100px;
		margin: 5px;
		@media screen and (max-width: 564px) {
			width: 70px;
			height: 70px;
		}
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
		// margin-top: 17px;
		transform: translate(0px, -17px);
		font-size: 16px;
		color: rgb(92, 92, 92);
		text-decoration: underline;
		img {
			width: 20px;
			height: 20px;
			margin-right: 4px;
		}
	}
	.sure_plan {
		color: rgb(250, 25, 25);
		display: inline-block;
		padding: 18px 50px;
		font-size: 16px;
		box-shadow: 0 0 5px gray inset;
		margin-top: 50px;
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