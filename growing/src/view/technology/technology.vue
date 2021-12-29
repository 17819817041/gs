<template>
    <div class="AdvertisingAddPlus" v-loading='loading'>
		<div class="AdvertisingOperation_back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="" @click="goBack">套餐預覽
        </div>
		<div class="noBar" style="height: calc(100% - 35px);overflow: auto;margin-top: 15px;">
			<div :class="['content mg bar',{ heigh: !submit }]">
				<div class="noBar" style="height: calc(100% - 0px); overflow:auto" v-show="submit">
					<div class="basicsMsg theme" v-show="submit">
						<div
							:class="['technology_content_item cursor']" 
							>
							<div class="taocan_title bold">{{preview.packageName}}</div>
							<div class="clear">
								<div class="float title_p sa al">
									<div>
										<div class="technology_bold">{{preview.titleOne}}</div>
										<div class="technology_size12">{{preview.titleOneContent}}</div>
									</div>
									<div>
										<div class="technology_bold">{{preview.titleTwo}}</div>
										<div class="technology_size12">{{preview.titleTwoContent}}</div>
									</div>
								</div>
								<div class="float title_p1 sa al">
									<div>
										<div class="technology_bold_red">計劃原價</div>
										<div class="technology_bold_red1" style="text-decoration: line-through;">
											${{preview.oldPrice}} HKD
										</div>
									</div>
									<div>
										<div class="youhui">{{preview.concessionalRate}}%</div>
									</div>
									<div class="flex al">
										<div class="technology_bold dor radius ju al">$</div>
										<div class="technology_bold technology_price">{{preview.presentPrice}}</div>
										<div class="hkd">HKD</div>
									</div>
								</div>
							</div>
						</div>
						<div :class="['content_msg1']">
							<div class="bold">套餐內容</div>
							<!-- <div class="msg_item">廣告計劃播放於9am-9pm黃金繁忙時段</div>
							<div class="msg_item">精確投放到指定旺角街道店鋪，由高人流量店鋪組成</div>
							<div class="msg_item">可指定時段的某個準確時間進行投放廣告媒體內容</div>
							<div class="msg_item">套餐所選的指定街道商鋪，在廣告計劃播放時段，會同步播放廣告媒體內容</div> -->
							<div class="msg_item" v-for="(item,i) in preview.contentList" :key="i">{{item}}</div>
						</div>
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
											{{preview['length']}}
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
										<div class="clear" v-for="(item,i) in preview.packageTimeInterVos" :key="i">
											<div class="float float320" style="width: 70px;min-width: 70px;">{{item.name}}</div>
											<div class="float" v-for="(child,i) in item.timeIntervalDetailsName" :key="i">
												<el-checkbox v-model="checked2" disabled>{{child}}</el-checkbox>
											</div>
										</div>
									</div>
								</el-form-item>

								<el-form-item label="套餐指定(店鋪/街道/區域)">
									<div class="list clear">
										<div style="color: #B0B0B0;" class="list_item float al cursor" 
										@click="storehit(i)"
										v-for="(item,i) in tc_storeList" :key="i">
											{{item}} <span class="al" style="margin-left: 5px"></span>
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
										<span>{{$t('lang.total')}}:</span><span class="math_price"> $ 6000 </span><span class="p_d">HKD</span>
									</div>
									<div class="total_price_item">{{$t('lang.ppotd')}}: <span style="color: red;">$ 1000 HKD</span></div>
									<div class="total_price_item">{{$t('lang.days')}}: <span style="color: red;">6天</span></div>
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
							<div class="sure_plan_wrap ju">
                                <el-button type="primary" @click.native="goBack">返回</el-button>
							</div>
						</div>
						<div v-show="!taocanDetail">請先選擇廣告所屬類型</div>
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
		<el-image-viewer v-if="showViewer" :on-close="closeViewer" :url-list="[dimg]" />
		<el-image-viewer v-if="showViewer1" :on-close="closeViewer1" :url-list="[dimg1]" />
    </div>
</template>

<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
import dimg from "@/assets/img/growing.jpg"
import { previewAD } from "@/axios/request.js"
export default {
    data() {
        return {
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
			taocanDetail: true,
			checked2: true,
			tc_storeList: ['九龍店', '車展會','科技大廈', '醫院', '時尚大廳'],

			copy1: [],
			copy2: [],
			copy3: [],


			position1: 'left-end',
			visible: false,
			drawer: false,
			submit: true,
			video: true,
            radio: '1',
			labelPosition: 'left',
            ruleForm: {
                name: '食品會投放',
                area: '',
                store: '',
                street: '',
                // time: '',
                type: '',
				date: '',
                startDate: '2021-12-06',
				endDate: '2021-12-07',
                content: '',
				mediaType: '',
				cmediaType: '',
				inp: 5,
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
            startDate: '',
			endDate: '',
            value2: '',
			typeList: ['旺角街道高流量商鋪廣告套餐($10000HKD/day)/旺角區域店鋪/廣告100分鐘'],
			minute: [],         //时长
            storeList: [],
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

			preview: {
				concessionalRate: 0,
				contentList: [],
				endTime: "",
				length: 9,
				oldPrice: 0,
				packageName: "",
				packageShopVos: [],
				packageTimeInterVos:[],
				pageckageId: 8,
				presentPrice: 0,
				startTime: "",
				titleOne: "",
				titleOneContent: "",
				titleTwo: "",
				titleTwoContent: "",
				totalLength: 3,
				typeId: 2
			},
			loading: false

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
		this.dimg = dimg
		this.previewAD()
	},
    mounted () {
        this.initMap(22.6,114.1,1)
		window.shopadd = this.shopadd;
		window.onPreview = this.onPreview;
		window.closewin = this.closewin;
    },
    methods: {
		previewAD () {
			this.loading = true
			let data = {
				packageId: this.$route.query.id
			}
			previewAD(data).then(res => {
				console.log(res)
				this.loading = false
				if (res.data.rtnCode == 200) {
					this.preview = res.data.data
				} else {
					this.$message({
						type: 'error',
						message: this.$t('lang.loading')
					})
				}
			}).catch(e => {
				that.loading = false
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
					map.setCenter(pos);
				})
			}
			// const myLatLng = {lat: 22.6, lng: 114.1}
			// new google.maps.Marker({
			// 	position: myLatLng,
			// 	map,
			// 	title: "Hello World!",
			// });

			let msg = this.msg
			var data = [
				{id:1,name:'小李'},
			]
			this.$nextTick(() => {
				// const contentString = `
				// 	<div>
				// 		${data.map((item) => {
				// 			return `<div><span>${item.name}</span></div>`
				// 		}).join('')}
				// 	</div>
				// `
				// const infowindow = new google.maps.InfoWindow({
				// 	content: contentString,
				// });
				// const marker = new google.maps.Marker({
				// 	position: myLatLng,
				// 	map,
				// 	title: "Uluru (Ayers Rock)",
				// });
				// marker.addListener("click", () => {
				// 	infowindow.open({
				// 		anchor: marker,
				// 		map,
				// 		shouldFocus: false,
				// 	});
				// })
				// this.lightArea(map)
			})

			if (val == 1) {
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
						// 	+
						// 	`<div style='margin-top: 10px;' class='ju al'>
						// 		<div onclick="closewin()" class='cursor close'
						// 		style='padding: 5px 20px;
						// 		color: gray;
						// 		font-size: 12px;
						// 		border: solid 1px rgb(201, 201, 201);
						// 		border-radius: 4px;
						// 		margin-right: 5px;'>取消</div>

						// 		<div onclick="shopadd('${features[i].msg}')"
						// 		class='cursor' style='padding: 5px 20px;
						// 		color: rgb(253, 253, 253);
						// 		background: rgb(0, 153, 255);
						// 		font-size: 12px;
						// 		border-radius: 4px;'>添加</div>
						// 	</div>
						// `

						marker1.addListener("click", () => {
							that.openwin(contentString1,marker1,map)
						});
					}
				} else if (that.$i18n.locale == 'en-US') {
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
						// 	+ `<div style='margin-top: 10px;' class='ju al'>
						// 		<div onclick="closewin()" class='cursor close'
						// 		style='padding: 5px 20px;
						// 		color: gray;
						// 		font-size: 12px;
						// 		border: solid 1px rgb(201, 201, 201);
						// 		border-radius: 4px;
						// 		margin-right: 5px;'>Cancel</div>

						// 		<div onclick="shopadd('${features[i].msg}')"
						// 		class='cursor' style='padding: 5px 20px;
						// 		color: rgb(253, 253, 253);
						// 		background: rgb(0, 153, 255);
						// 		font-size: 12px;
						// 		border-radius: 4px;'>Add</div>
						// 	</div>
						// `

						marker1.addListener("click", () => {
							that.openwin(contentString1,marker1,map)
						});
					}
				}
			}
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
		goBack () {
			this.$router.back()
		},
    }
}
</script>

<style lang='less' scoped>
@import "@/less/style.less";
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
		@media screen and (max-width: 402px) {
			height: 10px;
		}
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
        // margin-top: 15px;
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
            top: 50%;
            transform: translate(0,-20%);
            img {
                transition: 0.2s; 
            }
			@media screen and (max-width: 970px) {
                top: 20px;
            }
        }
        .content_msg {
            position: absolute;
            left: 0;
            top: 121px;
            font-size: 13px;
            width: 100%;
            padding: 10px 20px 20px 20px;
            border-radius: 4px;
            max-height: 300px;
            transition: 0.2s;
            overflow: hidden;
            border: solid 1px rgb(230, 230, 230);
            @media screen and (max-width: 970px) {
                top: 155px;
            }
        }
    }
	.content_msg1 {
		margin-top: 5px;
		font-size: 13px;
		width: 100%;
		padding: 10px 20px 20px 20px;
		border-radius: 4px;
		max-height: 300px;
		transition: 0.2s;
		overflow: hidden;
		border: solid 1px rgb(230, 230, 230);
	}
    .technology_content_item_border {
        // border: solid 2px #3DFFFC;
		border: solid 2px #e9e8e8;
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
        // width: 95px;
		color: red;
		font-weight: bold;
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
        padding: 10px 20px 20px 20px;
		@media screen and (max-width: 564px) {
			padding: 10px 5px 20px 5px;
		}
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
		width: 100%;
        margin-top: 25px;
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
			margin-top: 10px !important;
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
		height: 38px;
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
		// white-space: nowrap;
		@media screen and (max-width: 1090px) {
			padding: 0px 15px;
		}
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