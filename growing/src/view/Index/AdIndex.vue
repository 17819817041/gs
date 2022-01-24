<template>
    <div class="Index noBar" v-loading='loading'>
        <div class="content">
            <div class="header_item sb">
                <div class="domWhite"></div>
                <div class="al logo_wrap ju"><img class="LOGO" @click="home" src="@/assets/img/LogoTop.png" alt=""></div>
                <div class="ju al">
                    <div class="lang bold al">
                        <div class="al cursor lang_item" @click="active = !active">
                            <div class="al" v-if="$i18n.locale == 'zh-CN'">
                                <img src="@/assets/img/hk.gif" alt=""><span class="media564" style="margin: 0 27px 0 5px;white-space: nowrap;">中文</span> 
                                <img :class="['l_arrow', { 'rota': active } ]" src="@/assets/img/arrow_up.png" alt="">
                            </div>
                            <div class="al" v-else-if="$i18n.locale == 'en-US'">
                                <img src="@/assets/img/us.gif" alt=""><span class="media564" style="margin: 0 8px 0 5px;">English</span> 
                                <img :class="['l_arrow', { 'rota': active } ]" src="@/assets/img/arrow_up.png" alt="">
                            </div>
                        </div>
                        <div :class="['changeLang',{ 'height': !active }]">
                            <div class="al cursor" @click="zh">
                                <img src="@/assets/img/hk.gif" alt=""><span style="margin: 0 25px 0 5px;">中文</span>
                            </div>
                            <div class="al cursor" @click="en">
                                <img src="@/assets/img/us.gif" alt=""><span style="margin: 0 18px 0 5px;">English</span>
                            </div>
                        </div>
                    </div>
                    <div class="headImg radius ju al cursor" @click="UserMessage">
                        <img style="height: 100%;" v-if="user.userHead" :src="user.userHead" alt="">
                        <img style="height: 160%;" v-else src="@/assets/img/defaultImg.png" alt="">
                    </div>
                    <div class="al my_wrap" slot="reference" @click="visible = !visible" style="height: 100%">
                        <img class="my cursor" src="@/assets/img/arrow-down_set.png" alt="">
                        <div class="userMsg tc" v-show="visible">
                            <div class="cursor" @click.stop="UserMessage">{{$t('lang.pCenter')}}</div>
                            <div class="cursor" @click.stop="outLogin">{{$t('lang.logout')}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu mg">
                <div :class="['category', { 'list_height': list_height }]">
                    <div class="category_item tc bold" @click="AdvertisingAdd">{{$t("lang.add")}}</div>
                    <div class="category_item tc bold" @click="advertisingOperation">{{$t("lang.management")}}</div>
                    <div class="category_item tc bold" @click="statistics">{{$t("lang.statistics")}}</div>
                    <div class="category_item tc bold">{{$t("lang.contact1")}}</div>
                    <div class="category_item tc bold">{{$t("lang.problem")}}</div>
                </div>
            </div>
            <div class="moble_watch ju" @click="list_height = !list_height">
                <img src="@/assets/img/list.png" alt="">
            </div>
        </div>
        <router-view ref="child"></router-view>
        <div class="Back" v-show="visible" @click="visible = false"></div>
        <div class="Back1" v-show="active" @click="active = false"></div>
    </div>
</template>

<script>
import { setLang } from "@/axios/request.js"
import mar from "@/assets/img/marker.png"
export default {
    data () {
        return {
            streetObj: "",
            list_height: false,
            input2: '',
            category_list: false,
            loading: false,
            message: {},
            area: '',
            area1: '',
            activeIndex: '1',
            active: false,
            visible: false,
            street: ''
        }
    },
    created () {
        this.$store.dispatch('getUser', this)
    },
    mounted () {
        let that = this
        window.addEventListener('resize', (e) => {
            that.getResize()
        })
		this.getResize()
        // this.initMap1(22.322,114.17,1)
        document.getElementsByClassName('Index')[0].addEventListener('scroll', (e) => {
            that.scrollHandle()
        })
        that.scrollHandle()
    },
    watch: {
		user: {
			handler (val) {
				if (val) {
					this.user = val
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
    },
    computed: {
		user:{             //類型列表
			get () { return this.$store.state.user.user },
			set (val) {
				this.$store.commit('setUser', {
					key: 'user',
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
    },
    methods: {
        scrollHandle (e) {
            let that = this
            this.$nextTick(()=>{
                if (that.$router.name == '/cAdIndex') {
                    that.$refs.child.getData()    //这里要注意判断 有的子路由没有getData()这个方法的话会报错
                }
            })
        },
        closeList () {
            this.list_height = false
        },
        initMap1 (lat,lng,val) {
			let that = this
			let boolean = true
			let map = new google.maps.Map(document.getElementById('map'), {
				// center: {lat: lat, lng: lng},
				zoom: 11,
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
					// lat: position.coords.latitude,
					// lng: position.coords.longitude
                        lat: lat,
                        lng: lng
					};
					var marker = new google.maps.Marker({position: pos, map: map});
					map.setCenter(pos);
				})
			}
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
            return
			if (val == 1) {
				const iconBase = mar
				const icons = {
					info: {
						icon: iconBase
					},
				};
				const features = this.mapStoreListShow
				// Create markers.
				if (that.$i18n.locale == 'zh-CN') {
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
									<div class='bold tc'>${features[i].msg}(${features[i].area})</div>
									<div class="contentString1_address" 
									style="text-decoration: underline;
									font-size:12px;">${features[i].area}</div>
								</div>
							` + 
							`
								<div class="size12">
									<div>
										<span>廣告顯示的尺寸(寬 × 高):</span>
										<span style="color: blue;">${features[i].widthAndHeihth}</span>
									</div>
									<div>
										<span>為廣告商開放的可用時間:</span>
										<span style="color: blue;">${features[i].timeIntervalNames}</span>
									</div>
									<div>
										<span>廣告不接受的業務類型:</span>
										<span style="color: blue;">${features[i].typeNames}</span>
									</div>
									<div>
										<span>高峰/非高峰時段的每月價格:</span>
										<span style="color: blue;">
											<div>高峰(20000HKD/month)</div>
											<div>非高峰(10000HKD/month)</div>
										</span>
									</div>
								</div>
							` +
							`<div style='margin-top: 10px;' class='ju al'>
								<div onclick="closewin()" class='cursor close'
								style='padding: 5px 20px;
								color: gray;
								font-size: 12px;
								border: solid 1px rgb(201, 201, 201);
								border-radius: 4px;
								margin-right: 5px;'>取消</div>

								<div onclick="shopadd('${i}')"
								class='cursor' style='padding: 5px 20px;
								color: rgb(253, 253, 253);
								background: rgb(0, 153, 255);
								font-size: 12px;
								border-radius: 4px;'>添加</div>
							</div>
						`

						marker1.addListener("click", () => {
							that.openwin(contentString1,marker1,map)
						});
					}
				} else if (that.$i18n.locale == 'en-US') {
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
									<div class='bold tc'>${features[i].msg}(${features[i].area})</div>
									<div class="contentString1_address" 
									style="text-decoration: underline;
									font-size:12px;">${features[i].area}</div>
								</div>
							` + 
							`
								<div class="size12">
									<div>
										<span>size (height x width) of adv display:</span>
										<span style="color: blue;">${features[i].widthAndHeihth}</span>
									</div>
									<div>
										<span>available hour opened for advertisers:</span>
										<span style="color: blue;">${features[i].timeIntervalNames}</span>
									</div>
									<div>
										<span>type of business unaccepted for adv:</span>
										<span style="color: blue;">${features[i].typeNames}</span>
									</div>
									<div>
										<span>monthly price at rush/non-rush hour:</span>
										<span style="color: blue;">
											<div>rush(20000HKD/month)</div>
											<div>non-rush(10000HKD/month)</div>
										</span>
									</div>
								</div>
							` +
							`<div style='margin-top: 10px;' class='ju al'>
								<div onclick="closewin()" class='cursor close'
								style='padding: 5px 20px;
								color: gray;
								font-size: 12px;
								border: solid 1px rgb(201, 201, 201);
								border-radius: 4px;
								margin-right: 5px;'>Cancel</div>

								<div onclick="shopadd('${i}')"
								class='cursor' style='padding: 5px 20px;
								color: rgb(253, 253, 253);
								background: rgb(0, 153, 255);
								font-size: 12px;
								border-radius: 4px;'>Add</div>
							</div>
						`

						marker1.addListener("click", () => {
							that.openwin(contentString1,marker1,map)
						});
					}
				}
			} else if (val == 2) {
				this.lightArea(map)
			} else if (val == 3) {
				
			}
		},
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        advertisingOperation () {
            this.$router.push('/AdvertisingOperation')    //廣告管理
        },
        AdvertisingAdd () {
            // this.$router.push('/AdvertisingAdd')         //新增廣告
            this.$router.push('/Combo')
        },
        statistics () {
            this.$router.push('/Statistics')          //廣告統計
        },

        getResize () {
            if (document.getElementsByClassName('Back')[0] != undefined) {
                document.getElementsByClassName('Back')[0].style.width = window.innerWidth + 'px'
                document.getElementsByClassName('Back')[0].style.height = window.innerHeight + 'px'
            }
            if (document.getElementsByClassName('Back1')[0] != undefined) {
                document.getElementsByClassName('Back1')[0].style.width = window.innerWidth + 'px'
                document.getElementsByClassName('Back1')[0].style.height = window.innerHeight + 'px'
            }
        },
        home () {
            if (localStorage.getItem('platform') == 1) {
                this.$router.push('/Index')
            } else if (localStorage.getItem('platform') == 2) {
                this.$router.push('/platIndex')
            } else if (localStorage.getItem('platform') == 3) {
                this.$router.push('/AdminIndex')
            }
        },
        UserMessage () {
            this.visible = false
            this.$router.push('/UserMessage')
        },
        outLogin () {
            localStorage.removeItem('compoundeyesToken')
            localStorage.removeItem('compoundeyesUserId')
            this.$router.push('/Login')
        },
        zh () {
            localStorage.setItem('locale','zh-CN')
            this.$i18n.locale = 'zh-CN'
            this.active = false
            this.setLang('zh-TW')
        },
        en () {
            localStorage.setItem('locale','en-US')
            this.$i18n.locale = 'en-US'
            this.active = false
            this.setLang('en-US')
        },
        setLang (val) {           //修改語言
            let data = {
                lang: val
            }
            setLang(data).then(res => {
                // console.log(res)
            })
        },
        changeArea (val) {
			// this.ruleForm.area = val.id
			this.addressList.forEach(item => {
				if (item.id == val) {
					this.streetObj = item.childrenAddress
				}
			})
			this.street = ''
		},
    }
}
</script>

<style lang='less' scoped>
    .moble_watch {
        padding: 7px 0;
        box-shadow: 0 5px 10px rgb(156, 156, 156);
        display: none;
        @media screen and (max-width: 564px) {
            display: flex;
        }
        img {
            width: 28px;
            height: 27px;
        }
    }
    .category {
        transition: 0.2s;
        height: 0px;
        width: 100%;
        padding: 0 20px;
        opacity: 0.7;
        overflow: hidden;
        
    }
    .list_height {
        height: 240px !important;
    }
    .category_item {
        padding: 15px 0 7px 0;
        font-size: 14px;
        border-bottom: solid 1px rgb(230, 230, 230);
    }
    .content {
        position: fixed;
        top: 0;
        z-index: 15;
        background: white;
        width: 100%;
    }
    .pc_watch {
        @media screen and (max-width: 564px) {
            display: none;
        }
    }
    .searchInp {
        width: 96%;
        max-width: 300px;
        margin: 20px 0;
    }
    .title {
        font-size: 15px;
        margin-right: 20px;
    }
    .message {
        font-size: 15px;
        color: gray;
    }
    .content_msg {
        display: flex;
        border: solid 1px rgb(175, 175, 175);
        width: calc(65%);
        justify-content: space-between;
        flex-direction: column;
        height: 300px;
        padding-left: 30px;
        @media screen and (max-width: 700px) {
            width: 100%;
            padding: 20px 5px;
        }
    }
    .msg_wrap {
        font-size: 14px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .theHot {
        margin-top: 30px;
        width: 100%;
        position: relative;
        .theHot_content {
            width: 100%;
            @media screen and (max-width: 700px) {
                display: block !important;
            }
        }
        .detail {
            position: absolute;
            bottom: 5px;
            font-size: 14px;
            right: 20px;
            text-decoration: underline;
        }
    }
    .card {
        width: 35%;
        min-width: 300px;
        @media screen and (max-width: 700px) {
            width: 100%;
        }
    }
    .myMap {
        margin-top: 30px;
    }
    .Index {
        background: white;
        // padding-bottom: 60px;
        position: relative;
        height: 100%;
        overflow: auto;
        padding-top: 85px;
        @media screen and (max-width: 564px) {
            padding-top: 125px;
        }
        .Back {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9;
        }
        .Back1 {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9;
        }
    }
    .menu {
        width: 95%;
        position: relative;
    }
    .domWhite {
        width: 210px;
        @media screen and (max-width: 564px) {
            display: none;
        }
    }
    .logo_wrap {
        width: 100%;
    }
    .LOGO {
        width: 100%;
        margin-right: 10px;
        max-width: 270px;
    }
    // .LOGO {
    //     height: 130px;
    //     margin-left: -30px;
    //     @media screen and (max-width: 700px) {
    //         height: 100px;
    //     }
    //     @media screen and (max-width: 564px) {
    //         height: 80px;
    //     }
    //     @media screen and (max-width: 400px) {
    //         height: 70px;
    //     }
    // }
    .header_item {
        padding: 5px 20px;
        height: 85px;
        background: white;
    }
    .headImg {
        width: 40px;
        height: 40px;
        margin-left: 7px;
        margin: 3px 5px;
    }
    .my {
        height: 20px;
        width: 20px;
        margin-right: 40px;
        @media screen and (max-width: 564px) {
            margin-right: 10px;
        }
    }
    .my_wrap {
        position: relative;
        .userMsg {
            position: absolute;
            padding: 5px;
            top: 50px;
            right: 0;
            background: white;
            z-index: 10;
            width: 109px;
            border-radius: 3px;
            border: solid 1px rgb(185, 185, 185);
        }
        .userMsg>div {
            padding: 7px 0;
            color: gray;
            font-size: 13px;
        }
        .userMsg>div:hover {
            background: #F5F5F5;
        }
    }
    .lang {
        width: 100px;
        height: 30px;
        background: rgb(255, 255, 255);
        font-size: 12px !important;
        border: solid 1px rgb(231, 231, 231);
        border-radius: 2px;
        color: gray;
        position: relative;
        @media screen and (max-width: 564px) {
            width: 40px;
        }
        .lang_item {
            white-space: nowrap;
            padding: 5px;
        }
    }
    .changeLang {
        position: absolute;
        z-index: 10;
        left: -1px;
        top: 28px;
        width: 100px;
        overflow: hidden;
        font-size: 12px !important;
        color: gray;
        border-top: none;
        border: solid 1px rgb(231, 231, 231);
        border-radius: 0 0 2px 2px;
        background: white;
        transition: 0.2s;
        max-height: 60px;
        div {
            padding: 5px;
        }
    }
    .rota {
        transform: rotateZ(0deg) !important;
    }
    .height {
        max-height: 0 !important;
        transition: 0.2s;
        border: none;
        div {
            padding: 6px;
        }
    }
    .l_arrow {
        width: 16px;
        height: 16px;
        transition: 0.2s;
        transform: rotateZ(180deg);
    }
    .media564 {
        @media screen and (max-width: 564px) {
            display: none;
        }
    }
    .map_wrap {
		position: relative;
		@media screen and (max-width: 564px) {
            margin-left: 1px;
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
</style>