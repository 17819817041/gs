<template>
    <div class="AddStore">
		<!-- <img class="back_a cursor" v-show="!submit" @click="submit = true" src="@/assets/img/back_arrow.png" alt=""> -->
		<div class="AdvertisingOperation_back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" alt="" @click="goBack">新增店鋪
        </div>
        <div class="content mg bar">
            <!-- <div class="content_title al"><img class="cursor" v-show="submit" style="width: 25px;" @click="goBack" src="@/assets/img/back_arrow.png" alt="">新增店鋪</div> -->
            <div class="noBar" style="height: calc(100% - 36px); overflow:auto">
            <div class="basicsMsg boxs theme" v-show="submit">
                <div class="flex divider_message_title">
                    <div class="divider"></div>
                    <div class="divider_text">新增店鋪信息</div>
                </div>
                <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="135px" class="demo-ruleForm">
                    <el-form-item label="店鋪名" prop="name" class="bcolor">
                        <div class="elinput width30">
                            <el-input class="width100" v-model="ruleForm.name"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="店鋪所屬類型" prop="storeType">
                        <div class="al br">
                            <div class="al width30">
								<el-select v-model="ruleForm.storeType" class="width100" placeholder="請選擇類型">
									<el-option label="食品" value="食品"></el-option>
									<el-option label="科技" value="科技"></el-option>
									<el-option label="醫療" value="醫療"></el-option>
									<el-option label="汽車" value="汽車"></el-option>
								</el-select>
							</div>
                        </div>
                    </el-form-item>
                    <el-form-item label="店鋪所在區域" prop="area" class="bcolor">
                        <div class="al br">
                            <div class="al width30">
								<el-select v-model="ruleForm.area" class="width100" placeholder="請選擇區域">
									<el-option label="九龍區" value="九龍區"></el-option>
									<el-option label="旺角區" value="2旺角區"></el-option>
									<el-option label="中環區" value="中環區"></el-option>
								</el-select>
							</div>
                        </div>
                    </el-form-item>
                    <el-form-item label="店鋪詳細位置地址" prop="address">
                        <div class="al">
                            <div class="al width30" style='min-width: 217px;'>
								<div class="elinput width100">
                                    <el-input class="width100" v-model="ruleForm.address"></el-input>
                                </div>
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
                </el-form>
            </div>
            <div class="detailPlan boxs theme" v-show="submit">
                <div class="flex divider_message_title">
                    <div class="divider"></div>
                    <div class="divider_text">接受外來廣告設定</div>
                </div>
                <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="145px" class="demo-ruleForm">
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
                        <div class="flex br">
                            <div class="flex width30">
								<el-select class="width100" style="height: 38px;" v-model="ruleForm.time" placeholder="請選擇時間段">
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
                        <div class="flex br">
                            <div class="flex width30">
								<el-select class="width100" style="height: 38px;" v-model="ruleForm.type" placeholder="請選擇類型">
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
                <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="廣告媒體類型" prop="mediaType" class="bcolor">
                        <div class="al">
                            <el-select v-model="ruleForm.cmediaType" placeholder="請選擇類型" @change="getType">
                                <el-option label="圖片" value="1"></el-option>
                                <el-option label="視頻" value="2"></el-option>
                            </el-select>
                        </div>
                    </el-form-item>
                    <el-form-item label="廣告媒體時長" prop="inp">
                        <div class="al block">
                            <div class="al inp_time ju">
									<!-- <input type="text" class="tc"> -->
									<el-input class="width100"
									oninput ="value=value.replace(/[^0-9.]/g,'')" :disabled="video" v-model="ruleForm.inp"></el-input>
                            </div>
                            <div class="al">分鐘 <span style="color: gray;margin-left: 5px;">(請輸入整數)</span></div>
                        </div>
                    </el-form-item>
                    <el-form-item label="廣告媒體內容" prop="content" class="bcolor">
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
						<div style='font-size: 12px; line-height: 15px;'>媒體時長按每分鐘针数。不足1分鐘按1分鐘計算.</div>
                    </el-form-item>
                </el-form>
            </div>

            <div class="addorcancel tc ju al" v-show="submit">
                <div class="addorcancel_btn cursor" style="margin-right: 30px;" @click="submitG">確認新增</div>
                <div class="addorcancel_btn cursor" @click="goBack">取消</div>
            </div>  

			<div class="basicsMsg boxs padding backWhite" v-show="!submit">
				<div class="true_title al ju">
					<img src="@/assets/img/success_sign.png" alt="">確認提交新增店鋪成功 ！
				</div>
				<div class="ju">您的新增店铺信息已提交至後台，管理夤将蛊快蜜核您的店铺信息.</div>
                <div class="iknow ju al">
                    <div class="cursor" @click="goBack">確定</div>
                </div>
			</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            video: true,
			submit: true,
            ruleForm: {
                name: '',
                area: '',
                time: '',
                type: '',
                storeType: '',
                mediaType: '',
                cmediaType: '',
                inp: '',
                ratio: '',
                date: '',
                content: '',
                address: '',
                message: ""
            },
			labelPosition: 'left',
            rules: {
                name: [
                    { required: true, message: '請輸入廣告名稱', trigger: 'blur' },
                    { min: 3, max: 5, message: '長度需3 到 5 個字符', trigger: 'blur' }
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
    methods: {
        fun () {
			if (window.innerWidth <= 564) {
                this.labelPosition = 'top'
            } else {
                this.labelPosition = 'left'
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
        min-width: 225px;
        // padding: 3px;
        // box-shadow: 0 0 5px rgb(199, 199, 199) inset !important;;
    }
    .content {
        width: 85%;
        height: 100%;
        padding: 0px 20px;
        overflow: auto;
		margin-top: 15px;
		@media screen and (max-width: 564px) {
			width: 100%;
        	padding: 0px 7px;
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
        padding: 0 2px 20px 2px;
    }
    .detailPlan {
        margin-bottom: 15px;
        padding: 0 2px 0px 2px;
    }
    .detailPlan {
        // height: 1000px;
		// padding-bottom: 30px;
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
      width: 217px;
      margin-right: 5px;
    }
    .textarea_wrap {
      width: 90%;
      height: 300px;
      background: white;
      box-shadow: 0 0 5px rgb(197, 197, 197) inset;
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
            margin-left: -10px;
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
    .block {
        @media screen and (max-width: 564px) {
			display: block !important;
		}
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
    .textarea {
        width: 100%;
        height: 200px;
        padding: 3px;
        textarea {
            width: 100%;
            height: 97%;
            border: none;
            outline: none;
            resize: none;
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
        background: @themeColor;
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