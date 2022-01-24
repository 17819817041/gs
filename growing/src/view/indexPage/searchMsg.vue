<template>
    <div class="AdIndex" id="AdIndex" v-loading='loading'>
        <div class="backMenu al flexEnd">
            <div class="flex al">
                <div class="menu_item cursor" @click="AdvertisingAdd">{{$t("lang.add")}}</div>
                <div class="menu_item cursor" @click="advertisingOperation">{{$t("lang.management")}}</div>
                <div class="menu_item cursor" @click="statistics">{{$t("lang.statistics")}}</div>
                <div class="menu_item cursor">{{$t("lang.contact1")}}</div>
                <div class="menu_item cursor">{{$t("lang.problem")}}</div>
                <div class="mlist  al cursor" @click="showMenu = !showMenu"><img src="@/assets/img/blackList.png" alt=""></div>
            </div>
        </div>

        <div class="adBackDom flexEnd" @click="showMenu = false" v-show="showMenu" >
            <div :class="['menuRight bold drawer_top', { showMenu: showMenu }]">
                <div class="wClose cursor" @click="showMenu = false">
                    <img src="@/assets/img/whiteClose.png" alt="">
                </div>
                <div class="drawer_item cursor" @click="AdvertisingAdd">{{$t("lang.add")}}</div>
                <div class="drawer_item cursor" @click="advertisingOperation">{{$t("lang.management")}}</div>
                <div class="drawer_item cursor" @click="statistics">{{$t("lang.statistics")}}</div>
                <div class="drawer_item cursor">{{$t("lang.contact1")}}</div>
                <div class="drawer_item cursor">{{$t("lang.problem")}}</div>
                <div class="ju" style="margin-top: 40px;">
                    <div class="logo_wrap ju al">
                        <img src="@/assets/img/a.png" alt="">
                    </div>
                    <div class="logo_wrap ju al" style="margin: 0 50px;">
                        <img src="@/assets/img/b.png" alt="">
                    </div>
                    <div class="logo_wrap ju al">
                        <img src="@/assets/img/c.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="menu mg">
            <el-collapse accordion v-model="activeName">
                <el-collapse-item name="1">
                    <template slot="title">
                        搜索<i class="header-icon el-icon-info"></i>
                    </template>
                    <div class="backImg">
                        <img class="cover" src="@/assets/img/backImage.jpg" alt="">
                        <div class="infoWindows al">
                            <div class=" width100">
                                <div style="height: 110px;overflow: hidden;">
                                    <transition name='fade'>
                                        <div style="height: 110px;" v-show="searchBack == 1">
                                            <div style="margin: 0 0 7px 0;">
                                                <el-input size="small"
                                                    placeholder="请输入内容"
                                                    prefix-icon="el-icon-search"
                                                    v-model="input2">
                                                </el-input>
                                            </div>
                                            <div class="ju">
                                                <el-select v-model="parentAddressId" @change="changeArea" size="small" clearable
                                                    :placeholder="$t('lang.pldselectarea')" style="margin-right: 8px;">
                                                    <el-option v-for="(item,i) in addressList" :key="i"
                                                        :label='item.addressName '
                                                        :value="item.id">
                                                    </el-option>
                                                </el-select>
                                                <el-select v-model="addressId" @change="getStreet" :placeholder="$t('lang.pldselectstreet')" size="small"
                                                :disabled='streetObj == "" ' clearable>
                                                    <el-option v-for="(item,i) in streetObj" :key="i"
                                                        :label='item.addressName '
                                                        :value='item.id '>
                                                    </el-option>
                                                </el-select>
                                            </div>
                                            <div style="margin: 7px 0;" class="ju">
                                                <el-select v-model="typeId" :placeholder="$t('lang.pldselecttype')" clearable @change="getType"
                                                size="small" style="margin-right: 8px;">
                                                    <el-option v-for="(item,i) in getTypeList" :key="i"
                                                        :label='item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
                                                        item.find( res => res.language == "zh-TW").guangGaoTypeName: 
                                                        item.find( res => res.language == "en-US").guangGaoTypeName '
                                                        :value="item[0].id">
                                                    </el-option>
                                                </el-select>
                                                <el-select v-model="AdtypeName" placeholder="店鋪接受的廣告類型" clearable @change="getAdtypeName"
                                                size="small">
                                                    <el-option v-for="(item,i) in getTypeList" :key="i"
                                                        :label='item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
                                                        item.find( res => res.language == "zh-TW").guangGaoTypeName: 
                                                        item.find( res => res.language == "en-US").guangGaoTypeName '
                                                        :value="item[0].id">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </div>
                                    </transition>
                                    <transition name='fade'>
                                        <div style="height: 110px;" v-show="searchBack == 2">
                                            <div class="sb tc">
                                                <div class="led">LCD展示框</div>
                                                <div class="led">透明OLED顯示器</div>
                                                <div class="led">透明LED顯示器</div>
                                            </div>
                                            <div class="sb tc" style="margin-top: 10px">
                                                <div class="led">智能販賣機</div>
                                                <div class="led">廣告牌</div>
                                                <div class="led">交通工具</div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <div class="sb">
                                    <div class="searchBtn1" href="#map" v-show="searchBack == 1" @click="searchBack = 2">
                                        下一項
                                    </div>
                                    <div class="searchBtn1" href="#map" v-show="searchBack == 2" @click="searchBack = 1">
                                        上一項
                                    </div>
                                    <!-- <div class="searchBtn" href="#map" @click="getStore">
                                        搜索店鋪
                                    </div> -->
                                    <div class="searchBtn" href="#map" @click="popular">
                                        搜索店鋪
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="大地圖搜索" name="2">
                    <div class="myMap">
                        <div :class="['map_wrap', { 'map_wrap1': $i18n.locale == 'en-US' }]">
                            <transition name='tran'>
                                <div class="window" v-if="active">
                                    <div class="windows_wrap">
                                        <div class="poImg cursor" @click="active = false">
                                            <img src="@/assets/img/cha.png" alt="">
                                        </div>
                                        <div class="sb" style="height: 100px;">
                                            <div class="windowImg cursor" v-for="(item,i) in obj.images" :key='i'>
                                                <img class="cover" :src='item' @click="imgPreview(item)">
                                            </div>
                                        </div>
                                        <div class="sb" style="margin-top:5px;">
                                            <div class='bold tc' style="font-size: 13px;">{{obj.msg}}({{obj.area}})</div>
                                            <div class="contentString1_address" 
                                            style="text-decoration: underline; color: gray;
                                            font-size:12px;">{{obj.area}}</div>
                                        </div>
                                        <div class="size12 detailBtn_wrap">
                                            <div class="detailBtn" @click="moreDetail(obj.shopId, obj.addressParentId)">
                                                更多詳細
                                            </div>
                                            <div>
                                                <span style="color: gray;">廣告顯示的尺寸(寬 × 高):</span>
                                                <span style="color: blue;">{{obj.widthAndHeihth}}</span>
                                            </div>
                                            <div>
                                                <span style="color: gray;">為廣告商開放的可用時間:</span>
                                                <span style="color: blue;">{{obj.timeIntervalNames}}</span>
                                            </div>
                                            <div>
                                                <span style="color: gray;">廣告接受的業務類型:</span>
                                                <span style="color: blue;" v-for="(res,k) in obj.typeNames" :key="k">{{res}} </span>
                                            </div>
                                            <div>
                                                <span style="color: gray;">高峰/非高峰時段的每月價格:</span>
                                                <span style="color: blue;">
                                                    <div v-for="(res,k) in obj.priceContents" :key="k">{{res}}</div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                            <img class="searchImg" src="@/assets/img/search.png" alt="">
                            <input
                            id="pac-input"
                            ref="pac"
                            class="controls"
                            type="text"
                            placeholder="Search"/>
                            <div id="map"></div>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <div class="bold" style="font-size: 15px;padding: 5px;margin: 30px 10px 0 10px;">
                搜尋結果
            </div>
            <div class="store_list_wrap">
                <div v-for="(item,i) in popularData" :key="i">
                    <div class="theHot">
                        <div class="theHot_content flex">
                            <div class="card">
                                <el-carousel :interval="5000" arrow="always">
                                    <el-carousel-item v-for="(img,i) in item.images" :key="i">
                                        <div class='img_wrap'>
                                            <img class="img" :src="img" alt="">
                                        </div>
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                            <div class="content_msg">
                                <div class="flex msg_wrap"> 
                                    <div class="title">店鋪:</div>
                                    <div class="message">{{item.shopName}}</div>
                                </div>
                                <div class="flex msg_wrap"> 
                                    <div class="title">地區:</div>
                                    <div class="message">{{item.addressName}}</div>
                                </div>
                                <div class="flex msg_wrap"> 
                                    <div class="title">投放尺寸:</div>
                                    <div class="message">{{item.widthAndHeihth}}</div>
                                </div>
                                <div class="flex msg_wrap"> 
                                    <div class="title">營業時間:</div>
                                    <div class="message">
                                        {{item.businessHours}}
                                    </div>
                                </div>
                                <div class="flex msg_wrap"> 
                                    <div class="title">平均收費:</div>
                                    <div class="message">
                                        <div style="color: red;">$ {{item.prices}} HKD</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="detail cursor" @click="moreDetail(item.shopId,item.addressId)">更多詳情...</div>
                    </div>
                </div>

                <!-- <el-carousel indicator-position="outside" arrow="never" ref="carousel" :height="showCard == false? '300px':'600px'">
                    <el-carousel-item v-for="(item,i) in popularData" :key="i">
                        <div class="theHot">
                            <div class="theHot_content flex">
                                <div class="card">
                                    <el-carousel :interval="5000" arrow="always">
                                        <el-carousel-item v-for="(img,i) in item.images" :key="i">
                                            <div class='img_wrap'>
                                                <img class="img" :src="img" alt="">
                                            </div>
                                        </el-carousel-item>
                                    </el-carousel>
                                </div>
                                <div class="content_msg">
                                    <div class="flex msg_wrap"> 
                                        <div class="title">店鋪:</div>
                                        <div class="message">{{item.shopName}}</div>
                                    </div>
                                    <div class="flex msg_wrap"> 
                                        <div class="title">地區:</div>
                                        <div class="message">{{item.addressName}}</div>
                                    </div>
                                    <div class="flex msg_wrap"> 
                                        <div class="title">投放尺寸:</div>
                                        <div class="message">{{item.widthAndHeihth}}</div>
                                    </div>
                                    <div class="flex msg_wrap"> 
                                        <div class="title">營業時間:</div>
                                        <div class="message">
                                            {{item.businessHours}}
                                        </div>
                                    </div>
                                    <div class="flex msg_wrap"> 
                                        <div class="title">平均收費:</div>
                                        <div class="message">
                                            <div style="color: red;">$ {{item.prices}} HKD</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="detail cursor" @click="moreDetail(item.shopId,item.addressId)">更多詳情</div>
                        </div>

                    </el-carousel-item>
                </el-carousel> -->
            </div>
            <div class="flexEnd">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    small
                    :pager-count="5"
                    :current-page="1"
                    :page-size="10"
                    layout=" jumper, prev, pager, next"
                    :total="totalRecordsCount">
                </el-pagination>
            </div>
        </div>
        <el-image-viewer 
		v-if="showViewer" 
		:on-close="closeViewer" 
		:url-list="[imgSrc]" />
    </div>
</template>

<script>
import { getShopList, userGuangGaosearch } from "@/axios/request.js"
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
import mar from "@/assets/img/marker.png"
import dimg from "@/assets/img/growing.jpg"
export default {
    data () {
        return {
            showMenu: true,
            activeName: '0',
            searchBack: 1,
            showCard: false,
            imgSrc: '',
            showViewer: false,
            streetObj: "",
            input2: '',
            category_list: false,
            loading: false,
            message: {},
            area: '',
            area1: '',
            activeIndex: '1',
            active: false,
            visible: false,
            popularData: null,
            map: null,
            street: '',
            type: '',
            mapStoreListShow: [],
            obj: null,
            loading: false,
            marker1: [],
            Adtype: '',
            AdtypeName: '',

            pageNum: 0,
            pageSize: 5,

            parentAddressId: '',
            addressId: '',
            typeId: '',

            totalRecordsCount: 1
        }
    },
    created () {
        this.area1 = this.$route.params.parentAddressId
        this.street = this.$route.params.addressId
        this.type = this.$route.params.typeId
        this.Adtype = this.$route.params.Adtype
        this.input2 = this.$route.params.shopName
        this.getName()
        this.popular()
    }, 
    mounted () {
        document.getElementsByClassName('Index')[0].scrollTop = 0;
        let that = this
        if (window.innerWidth < 700) {
            that.showCard = true
        } else {
            that.showCard = false
        }
        window.addEventListener('resize', (e) => {
            if (e.target.innerWidth < 700) {
                that.showCard = true
            } else {
                that.showCard = false
            }
        })
        this.initMap1(22.322,114.17,1)
    },
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
		},
    },
    components: { ElImageViewer },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        getName () {
            if (this.$route.params.parentAddressId) {
                this.addressList.forEach(item => {
                    if (item.id == this.$route.params.parentAddressId) {
                        this.streetObj = item.childrenAddress
                        this.parentAddressId = item.addressName
                    }
                })
            }
            if (this.$route.params.addressId) {
                this.addressList.forEach(item => {
                    item.childrenAddress.forEach(child => {
                        if (child.id == this.$route.params.addressId) {
                            this.addressId = child.addressName
                        }
                    })
                    
                })
            }
            if (this.$route.params.typeId) {
                this.getTypeList.forEach(item => {
                    item.forEach(child => {
                        if (child.id == this.$route.params.typeId && child.language == 'zh-TW' && this.$i18n.locale == 'zh-CN') {
                            this.typeId = child.guangGaoTypeName
                        } else if (child.id == this.$route.params.typeId && child.language == 'en-US' && this.$i18n.locale == 'en-US') {
                            this.typeId = child.guangGaoTypeName
                        }
                    })
                })
            }
            if (this.$route.params.Adtype) {
                this.getTypeList.forEach(item => {
                    item.forEach(child => {
                        if (child.id == this.$route.params.Adtype && child.language == 'zh-TW' && this.$i18n.locale == 'zh-CN') {
                            this.AdtypeName = child.guangGaoTypeName
                        } else if (child.id == this.$route.params.Adtype && child.language == 'en-US' && this.$i18n.locale == 'en-US') {
                            this.AdtypeName = child.guangGaoTypeName
                        }
                    })
                })
            }
        },
        getStore () {
            this.loading = true
            let that = this
			let data = {
				parentAddressId: this.area1,
				shopName: this.input2,
				addressId: this.street,
				typeId: this.type
			}
			getShopList(data).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    that.active = false
                    this.mapStoreListShow = []
                    res.data.data.forEach(child => {
                        this.addressList.forEach(item => {
                            if (child.addressParentId == item.id) {
                                child.area = item.addressName
                            }
                        })
                        this.mapStoreListShow.push({
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
                    const iconBase = mar
                    const icons = { info: { icon: iconBase } };
                    const features = this.mapStoreListShow
                    document.querySelector('#AdIndex').scrollIntoView({behavior: "smooth"});
                    for (let i = 0; i < this.marker1.length; i++) {
                        that.marker1[i].setMap(null)
                    }
                    this.marker1 = []
                    if (that.$i18n.locale == 'zh-CN') {
                        for (let i = 0; i < features.length; i++) {
                            const marker1 = new google.maps.Marker({
                                position: features[i].position,
                                icon: icons[features[i].type].icon,
                                map: that.map,
                            });
                            that.marker1.push(marker1) 
                            marker1.addListener("click", () => {
                                that.active = false
                                that.obj = features[i]
                                setTimeout(() => {
                                    that.active = true
                                }, 200)
                                // that.openwin(contentString1,marker1,map)
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
                } else {
                    this.$message.warning('查找不到店鋪')
                }
            }).catch(e => {
                this.loading = false
            })
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
        popular () {
            let data = {
                addressId: this.street,
                guangGaotype: this.Adtype,
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                parentAddressId: this.area1,
                shopName: this.input2,
                typeId: this.type
            }
            userGuangGaosearch(data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.totalRecordsCount = res.data.data.totalRecordsCount
                    this.activeName = '0'
                    res.data.data.pageT.forEach(item => {
                        item.prices = item.price.toFixed(1)
                    })
                    this.popularData = res.data.data.pageT
                } else {
                    this.activeName = '1'
                    this.$message.warning('暫無店鋪')
                }

            })
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
        changeArea (val) {
			// this.ruleForm.area = val.id
            this.area1 = val
			this.addressList.forEach(item => {
				if (item.id == val) {
					this.streetObj = item.childrenAddress
				}
			})
			this.addressId = ''
		},
        getType (val) {
            this.type = val
        },
        getAdtypeName (val) {
            this.Adtype = val
        },
        getStreet (val) {
            this.street = val
        },
        moreDetail (id, area) {
            this.$router.push({
                name: 'storeDetail',
                query: {
                    id: id,
                    area: area
                }
            })
        },
        imgPreview (url) {
			this.imgSrc = url
			this.showViewer = true
		},
        closeViewer() {
            this.showViewer = false
        },
        AdvertisingAdd () {
            this.$router.push('/AdvertisingAdd')         //新增廣告
        },
        AdvertisingAddPro () {
            this.$router.push('/AdvertisingAddPro')
        },
        AdvertisingAddPlus () {
            this.$router.push('/AdvertisingAddPlus')
        },

    }
}
</script>

<style lang='less' scoped>
@import "@/less/style.less";
    .mlist {
        height: 25px;
        width: 30px;
        margin-left: 20px;
        img {
            height: 100%;
            width: 100%;
        }
    }
    .menu_item {
        color: rgb(0, 0, 0);
        font-size: 13px;
        padding: 10px 20px;
    }
    .backMenu {
        overflow: hidden;
        transition: 0.5s;
        height: 77px;
        padding-right: 25px;
    }
    .adBackDom {
        position: fixed;
        top: 0px;
        left: 0;
        background: rgba(0,0,0,0.6);
        z-index: 20;
        width: 100%;
        height: 100%;
        transition: 0.2s;
    }
    .menuRight {
        width: 0px;
        height: 100%;
        transition: 0.2s;
        background: @miniBlue;
    }
    .drawer_top {
        position: relative;
        padding-top: 5%;
        @media screen and (max-height: 564px) {
            padding-top: 38px;
        }
        .wClose {
            position: absolute;
            right: 50px;
            top: 50px;
            width: 50px;
            height: 50px;
            img {
                height: 70%;
            }
            @media screen and (max-height: 564px) {
                right: 50px;
                top: 20px;
            }
        }
    }
    .drawer_item {
        color: white;
        width: 100%;
        padding: 25px 30%;
        font-size: 13px;
        @media screen and (max-height: 564px) {
            padding: 17px 30%;
        }
    }
    .logo_wrap {
        width: 29px;
        height: 29px;
        overflow: hidden;
        border-radius: 50%;
        img {
            height: 70%;
        }
    }
    .showMenu {
        width: 360px;
    }



    .store_list_wrap {
        margin: 0 10px;
    }
    .led {
        width: 30%;
        padding: 10px;
        background: white;
        font-size: 13px;
        color: gray;
        border-radius: 7px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: auto;
        @media screen and (max-width: 564px) {
            font-size: 12px;
            padding: 10px 0;
            line-height: 12px;
        }
    }
    .detailBtn_wrap {
        position: relative;
        .detailBtn {
            position: absolute;
            bottom: 0;
            right: 0;
            color: gray;
            cursor: pointer;
            text-decoration: underline;
        }
    }
    .windowImg {
        width: 33%;
        height: 100px;
        overflow: hidden;
        border-radius: 5px;

    }
    .searchBtn {
        width: 49%;
        background: @miniBlue;
        color: white;
        font-size: 15px;
        font-weight: bold;
        padding: 7px 0;
        text-align: center;
        border-radius: 7px;
        margin-top: 25px;
        cursor: pointer;
    }
    .searchBtn1 {
        width: 49%;
        background: white;
        color: rgb(107, 107, 107);
        font-size: 15px;
        font-weight: bold;
        padding: 7px 0;
        text-align: center;
        border-radius: 7px;
        margin-top: 25px;
        cursor: pointer;
    }
    .backImg {
        margin: 15px 0;
        height: 360px;
        width: 100%;
        position: relative;
        .infoWindows {
            position: absolute;
            padding: 5px 15px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 96%;
            max-width: 430px;
            height: 200px;
            border-radius: 7px;
            background: black;
            background: rgba(0,0,0,0.5)
        }
    }
    .img_wrap {
        width: 100%;
        height: 100%;
        .img {
            width: 100%;
            height: 100%;
            object-fit: cover !important;
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
        background: white;
        width: calc(55%);
        justify-content: space-between;
        flex-direction: column;
        height: 300px;
        padding: 15px 0 15px 30px;
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
        // background-color: #99a9bf;
        background-color: #ffffff;
    }
    .el-carousel__item:nth-child(2n+1) {
        // background-color: #99a9bf;
        background-color: #ffffff;
    }
    .theHot {
        width: 100%;
        position: relative;
        border-radius: 5px;
        border: solid 1px rgb(192, 190, 190);
        box-shadow: 0 5px 10px rgb(168, 168, 168);
        overflow: hidden;
        margin-bottom: 25px;
        height: 300px;
        @media screen and (max-width: 700px) {
            height: 600px;
        }
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
        width: 45%;
        min-width: 300px;
        @media screen and (max-width: 700px) {
            width: 100%;
        }
    }
    .myMap {
        width: 100%;
        margin: 15px 0;
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
        .window {
            background: white;
            width: calc(100% - 72px);
            max-width: 400px;
            border-radius: 7px;
            box-shadow: 0 2px 7px rgb(112, 112, 112);
            padding: 5px 15px;
            position: absolute;
            bottom: 30px;
            left: 10px;
            // transform: translate(-50%, -50%);
            z-index: 1000;
        }
    }
    .windows_wrap {
        position: relative;
        .poImg {
            position: absolute;
            right: -15px;
            top: -4px;
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

    .tran-enter-active, .tran-leave-active {
		transition: opacity 0.2s;
	}
	.tran-enter, .leave-active {
		opacity: 0;
	}

    .combo_content {
        width: 100%;
        max-width: 1200px;
        // box-shadow: 0 0 5px rgb(206, 206, 206) inset;
    }
    .combo_wrap {
        margin-top: 20px;
        @media screen and (max-width: 730px) {
            display: block;
        }
    }
    .combo_item {
        width: 30%;
        background: white;
        border-radius: 7px;
        color: gray;
        padding: 30px;
        background: rgb(247, 247, 247);
        @media screen and (max-width: 888px) {
            width: 30%;
        }
        @media screen and (max-width: 730px) {
            width: 100%;
            margin: auto;
        }
        .combo_item_title {
            font-size: 20px;
        }
    }
    .center_item {
        margin: 0 15px;
        @media screen and (max-width: 730px) {
            margin: 20px auto;
        }
    }
    .combo_msg {
        margin-top: 80px;
        @media screen and (max-width: 730px) {
            margin-top: 40px;
        }
    }
    .combo_msg_item {
        font-size: 14px;
        margin-top: 20px;
        margin-left: 20px;
        img {
            width: 18px;
            height: 18px;
        }
    }
    .kong {
        height: 19px;
        margin-left: 20px;
        max-width: 136px;
        min-width: 100px;
        width: 20%;
        border-bottom: solid 1px rgb(187, 187, 187);
        margin-top: 20px;
    }
    .start {
        margin-top: 30px;
        color: white;
        font-size: 13px;
        padding: 12px 45px;
        border-radius: 20px;
        background: #23D378;
    }
</style>