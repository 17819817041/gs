<template>
    <div class="Gdetail">
		<!-- <img class="back_a cursor" v-show="!submit" @click="submit = true" src="@/assets/img/back_arrow.png" alt=""> -->
		<div class="back mg al">
			<img class="cursor" src="@/assets/img/back_arrow.png" @click="goBack" alt="">廣告詳細計劃
		</div>
        <div class="content mg bar">
			<div class="noBar" style="height: calc(100% - 0px); overflow:auto">
			<div class="basicsMsg theme">
                <div class=" basicsMsg_item bold al">
                    <div class="iden radius"></div> 基礎信息
                </div>
                <el-form :model="ruleForm" :label-position="labelPosition" ref="ruleForm" label-width="130px" class="demo-ruleForm">
                    <el-form-item label="廣告計劃名稱">
                        <div class="al" style="color: gray;">{{ruleForm.name}}</div>
                    </el-form-item>
                    <el-form-item label="廣告投放類型">
                        <div class="flex br">
							<div class="list clear">
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
                <el-form :model="ruleForm" :label-position="labelPosition" ref="ruleForm" label-width="130px" class="demo-ruleForm">
                    <el-form-item label="廣告投放時段">
                        <div class="flex br">
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
						<div class="textarea_wrap clear">
							<div class="textarea_wrap_item float" v-for="(item,i) in imageList" :key="i">
								<div class="imageList_wrap">
									<div class="deleImg radius ju al"><img style="heihgt: 100%;" src="@/assets/img/cha.png" alt=""></div>
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
				<div class="total mg sb br1">
					<!-- <div class="total_msg " v-show="drawer">
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
					</div> -->
					<div v-show="!drawer"></div>
					<div class="total_price">
						<div class="t_price bold">
							<span>計劃投放總價:</span><span class="math_price"> $ 6000 </span><span class="p_d">HKD</span>
						</div>
						<div class="total_price_item">繁忙時段價格: $4000 HKD</div>
						<div class="total_price_item">非繁忙時段價格: $2000 HKD</div>
						<!-- <div class="price_plan flex cursor" @click="drawer = !drawer">
							<img src="@/assets/img/help.png" alt="">
							<div>價格計數方案</div>
						</div> -->
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
				mediaType: '圖片',
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
			typeList: ['醫療', '美食', '科技'],
			areaList: ['九龍','旺角'],
			timeList: ['繁忙时段(9am-9pm)','非繁忙时段(9pm-9am)'],
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
        width: 85%;
        height: calc(100% - 36px);
        padding: 10px 7px 0 7px;
        background: white;
        overflow: auto;
		margin-top: 15px;
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
      width: 100%;
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