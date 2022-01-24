<template>
    <div class="PreviewMsg" id="AddStore" v-loading='loading'>
        <div class="back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" @click="goBack" alt="">店鋪詳細計劃
        </div>
        <div class="content mg bar">
            <!-- <div class="content_title al"><img class="cursor" style="width: 25px;" @click="goBack" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="">預覽全部資料</div> -->
            
            <div class="noBar allcontent_wrap">
                <div class="basicsMsg boxs theme">
                <div class="flex divider_message_title">
                    <div class="divider"></div>
                    <div class="divider_text">店鋪詳細資料</div>
                </div>
                <el-form :model="ruleForm" label-position="left" 
                ref="ruleForm" label-width="155px" class="demo-ruleForm">
                    <el-form-item label="店鋪名" prop="name" class="bcolor">
                        <div class="al width30">
                            {{ruleForm.name}}
                        </div>
                    </el-form-item>
                    <el-form-item label="店鋪所屬類型">
                        <div class="al width30">
                            {{ruleForm.storeType}}
                        </div>
                    </el-form-item>
                    <el-form-item label="店鋪所在區域" class="bcolor">
                        <div class="al width30">
                            {{ruleForm.area}}
                        </div>
                    </el-form-item>
                    <el-form-item label="店鋪詳細位置地址">
                        <div class="al width30">
                            {{ruleForm.address}}
                        </div>
                    </el-form-item>
                    <el-form-item label="店鋪描述" class="bcolor">
                        <div class="al width30 content_down">
                            {{ruleForm.content}}
                        </div>
                    </el-form-item>
                    <el-form-item label="廣告顯示的尺寸" prop="message" class="bcolor" style="background: #F2F2F2;">
                        <div class="al adSize" style="color: gray;">
                            <div class="inp_time1 al">{{ruleForm.size.width}}</div>
                            <div> cm(寬)</div>
                            <div style="margin: 0 15px;"> × </div>
                            <div class="inp_time1 al">{{ruleForm.size.height}}</div>
                            <div> cm(高)</div>
                        </div>
                    </el-form-item>
                    <el-form-item label="店鋪展示圖片" prop="imageList1" class="bcolor">
                        <div class="textarea_wrap clear content_down">
                            <div class="textarea_wrap_item float" v-for="(item,i) in ruleForm.imageList1" :key="i">
                                <div class="imageList_wrap cursor">
                                    <div class="textarea_wrap_item_child ju al"  @click="imgPreview(item.fileUrl)">
                                        <img style="height: 100%;" :src="item" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
            
            <div class="detailPlan boxs theme">
                <div class="flex divider_message_title">
                    <div class="divider"></div>
                    <div class="divider_text">店鋪廣告媒體內容信息</div>
                </div>
                <el-form :model="ruleForm" label-position="left" 
                ref="ruleForm" label-width="155px" class="demo-ruleForm">
                    <el-form-item label="店鋪廣告媒體類型" class="bcolor">
                        <div class="al" style="color: gray;">
                            <span v-if="ruleForm.cmediaType == '1'">圖片</span>
                            <span v-else-if="ruleForm.cmediaType == '3'">視頻</span>
                        </div>
                    </el-form-item>
                    <el-form-item label="店鋪廣告媒體時長">
                        <div class="al" style="color: gray;">
                            <div style="margin-right: 20px;"> {{ruleForm.inp}} </div>分鐘
                        </div>
                    </el-form-item>
                    <el-form-item label="店鋪廣告媒體內容" class="bcolor">
                        <div :class="['textarea_wrap clear content_down']">
							<div class="textarea_wrap_item float" v-for="(item,i) in ruleForm.adContentList" :key="i">
								<div class="imageList_wrap">
									<div class="textarea_wrap_item_child ju al cursor">
										<img v-if="ruleForm.cmediaType == '1'"  @click="imgPreview(item.fileUrl)"
                                        style="height: 100%;" :src="item.fileUrl" alt="">
										<img v-else-if="ruleForm.cmediaType == '3'" @click="previewVideo(item)"
                                        style="height: 100%;" :src="item.imageSrc" alt="">
									</div>
								</div>
								<div class="imageList_name tc">{{item.fileName}}</div>
								<div class="imageList_size tc">{{item.fileSize}}</div>
                                <div class="imageList_size tc" v-if="ruleForm.cmediaType == '3'"
                                >{{item.filePlayTime}}</div>
							</div>
						</div>
                    </el-form-item>
                </el-form>
            </div>

            <div class="addorcancel tc ju al">
                <div class="addorcancel_btn cursor" @click="goBack">返回</div>
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
import { getShopDeta } from "@/axios/request.js"
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


            loading: false,
            video: true,
            ruleForm: {
                name: '',
                area: '',
                time: '',
                type: '',
                storeType: '',
                mediaType: '',
                cmediaType: '',
                size: {
                    width: '',
                    height: ''
                },
                inp: '',
                ratio: '',
                date: '',
                content: '',
                address: '',
                message: "",
                imageList1: []
            },
			labelPosition: 'left',
			areaList: [],
            imageList: [],
            minute: []
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
    components: { ElImageViewer },
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
				}
			},
		},
	},
	computed: {
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
		}
	},
    created () {
        this.getShopDetailsById()
    },
    methods: {
        getShopDetailsById () {
            this.loading = true
            let that = this
            let data = {
                shopId: this.$route.query.id
            }
            getShopDeta(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    let item = res.data.data
                    res.data.data.shopGuangGaoDto.shopGuangGaoContents.forEach(key => {
                        if (key.type == 3) {
                            key.videoSrc = key.fileUrl.split('&#&')[0]
                            key.imageSrc = key.fileUrl.split('&#&')[1]
                        }
                    })
                    this.ruleForm = {
                        name: item.shopName,
                        area: item.addressParentId,
                        address: item.addressName,
                        time: item.timeIntervals,
                        type: item.types,
                        storeType: item.shopTypeId,
                        mediaType: '',
                        cmediaType: item.shopGuangGaoDto.shopGuangGaoContents[0].type,
                        inp: item.shopGuangGaoDto.shopGuangGaoLength,
                        ratio: '',
                        date: '',
                        content: item.content,
                        message: "",
                        size: {
                            width: item.width,
                            height: item.heigth
                        },
                        imageList: item.shopImages,
                        adContentList: item.shopGuangGaoDto.shopGuangGaoContents,
                        imageList1: item.shopImages
                    }
                    this.addressList.forEach(item => {
						if (item.id == res.data.data.addressParentId) {
							this.ruleForm.area = item.addressName
						}
					})
                    this.getTypeList.forEach(item => {
						item.forEach(child => {
							if (child.id == res.data.data.shopTypeId && child.language == 'zh-TW' && this.$i18n.locale == 'zh-CN') {
								that.ruleForm.storeType = child.guangGaoTypeName
							} else if (child.id == res.data.data.shopTypeId && child.language == 'en-US' && this.$i18n.locale == 'en-US') {
								that.ruleForm.storeType = child.guangGaoTypeName
							}
						})
					})
                } else {
                    this.$message({
                        type: 'warning',
                        message: this.$t('lang.loading')
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: this.$t('lang.loading')
                })
            })
        },
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
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		goBack () {
			this.$router.back()
		},
		addArea (item) {
			this.areaList.push(item)
		},
		deleArea (i) {
			this.areaList.splice(i,1)
		},
        closeVideo () {
			this.showVideo = false
			this.videoWrap = false
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
        closeViewer1() {
          this.showViewer1 = false
        },
    }
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
    .adSize {
        @media screen and (max-width: 564px) {
            margin-top: 35px;
		    margin-left: -155px;
        }
    }
    .inp_time1 {
        padding: 0 5px;
    }
    .content_down {
		width: calc(100% + 155px);
		position: relative;
		margin-top: 35px;
		margin-left: -155px;
	}
    .content_down1 {
		width: calc(100% + 130px);
		position: relative;
		// margin-top: 35px;
		margin-left: -155px;
	}
    .allcontent_wrap {
		height: calc(100% - 42px); 
		overflow:auto;
		margin-top: 15px;
		@media screen and (max-width: 564px) {
			height: calc(100% - 36px); 
		}
	}
    .PreviewMsg {
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
        // width: 35%;
        min-width: 225px;
        color: gray;
        // padding: 3px;
        // box-shadow: 0 0 5px rgb(199, 199, 199) inset !important;;
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
    .content {
        width: 85%;
        height: 100%;
        padding: 0px 7px;
        overflow: auto;
		@media screen and (max-width: 564px) {
			width: 100%;
		}
    }
    .bcolor {
        background: #E5E5E5;
    }
    .basicsMsg {
        margin-bottom: 15px;
        padding: 0 2px 20px 2px;
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
      width: 217px;
      background: white;
      height: 37px;
      margin-right: 5px;
      padding: 3px;
      overflow: hidden;
    }
    .textarea_wrap {
    //   width: 90%;
      height: 300px;
      background: white;
      box-shadow: 0 0 8px rgb(182, 182, 182) inset;
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
		@media screen and (max-width: 564px) {
			margin-left: 10px !important;
		}
	}
	.list_item {
		border: dashed 2px #d3d3d3;
		margin-right: 10px;
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
        padding: 15px 10px;
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