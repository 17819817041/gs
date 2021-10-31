<template>
    <div class="AddStore" id="AddStore">
		<img class="back_a cursor" v-show="!submit" @click="submit = true" src="@/assets/img/back_arrow.png" alt="">
        <div class="content mg bar">
            <div class="content_title al"><img class="cursor" v-show="submit" style="width: 25px;" @click="goBack" src="@/assets/img/back_arrow.png" alt="">店鋪管理</div>
            <div class="noBar" style="height: calc(100% - 109px); overflow:auto">
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
                    <el-form-item label="店鋪所屬類型" prop="type">
                        <div class="al br">
                            <div class="al width30">
								<el-select v-model="ruleForm.type" class="width100" placeholder="請選擇類型">
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
                            <div class="al textarea boxs">
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
                <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="廣告媒體類型" prop="mytype" class="bcolor">
                        <div class="al">
                            <el-select v-model="ruleForm.mytype" placeholder="請選擇類型" @change="getType">
                                <el-option label="圖片" value="1"></el-option>
                                <el-option label="視頻" value="2"></el-option>
                            </el-select>
                        </div>
                    </el-form-item>
                    <el-form-item label="廣告媒體時長" prop="long">
                        <div class="al block">
                            <div class="al inp_time ju boxs">
									<!-- <input type="text" class="tc"> -->
									<el-input class="width100"
									oninput ="value=value.replace(/[^0-9.]/g,'')" :disabled="video" v-model="inp"></el-input>
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
								<input type="file" id="img" v-show="false" @change="cahngeFile">
							</label>
							<div class="textarea_wrap_item float" v-for="(item,i) in imageList" :key="i">
								<div class="deleImg radius ju al" @click.stop="deleImg(i)"><img style="heihgt: 100%;" src="@/assets/img/cha.png" alt=""></div>
								<div class="textarea_wrap_item_child ju al"><img style="height: 100%;" :src="item.url" alt=""></div>
							</div>
						</div>
						<div style='font-size: 12px;line-height: 15px;margin-top: 5px;'>
							圖片格式限制PNG \JPG \JPEG \GIF，数量限制10張，大小限制3M。視頻格式限制 MP4，大小限制10OM(媒體建議尺寸1920*1080)。
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
					<img src="@/assets/img/success_sign.png" alt="">店鋪信息修改申請提交成功!
				</div>
				<div class="ju">您的店鋪信息修改申請已提交至後台，管理员将蛊快蕃核您的店鋪信息.</div>
                <div class="iknow ju al">
                    <div class="cursor" @click="submit = true">確定</div>
                </div>
			</div>
            </div>

			<div class="footer_w"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            video: null,
			inp: '',
			submit: true,
            ruleForm: {
                name: '',
                area: '',
                time: '',
                type: '',
                mytype: '',
                long: '',
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
                mytype: [
                    { required: true, message: '請選擇媒體類型', trigger: 'change' }
                ],
                long: [
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
            imageList: []
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
        getType (e) {
			if (e == 1) {
				this.video = false
				this.inp = ''
			} else if (e == 2) {
				this.video = true
				this.inp = ''
			}
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
			this.typeList.push(item)
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
			this.timeList.push(item)
		},
		deleTime (i) {
			this.timeList.splice(i,1)
		},
        cahngeFile (e) {
			let url = URL.createObjectURL(e.target.files[0])
			this.imageList.push({ url: url })
		},
		deleImg (i) {
			this.imageList.splice(i,1)
		}
    }
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
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
		@media screen and (max-width: 564px) {
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
        padding: 0 4px 20px 4px;
    }
    .detailPlan {
        margin-bottom: 15px;
        padding: 0 4px 20px 4px;
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
      width: 217px;
      background: white;
      height: 37px;
      margin-right: 5px;
      padding: 3px;
      overflow: hidden;
    }
    .textarea_wrap {
      width: 90%;
      height: 300px;
      background: white;
      box-shadow: 0 0 8px rgb(112, 112, 112) inset;
	  padding: 20px 27px;
    }
    .textarea_wrap_item {
		border: solid 1px rgb(230, 230, 230);
		width: 100px;
		height: 100px;
		margin: 5px;
		position: relative;
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
		@media screen and (max-width: 564px) {
			width: 50px;
			height: 50px;
		}
	}
	.addImg {
		border: dashed 2px rgb(201, 201, 201);
		width: 100px;
		height: 100px;
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
        padding: 15px 0px;
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
        width: 80%;
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