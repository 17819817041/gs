<template>
    <div class="AdIndex noBar flex" id="AdIndex" v-loading='loading'>
        <transition name='fade1'>
            <div class="adBackDom flexEnd" @click="showMenu = false" v-show="showMenu">
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
        </transition>
        <div style="width: 100%;position: relative;">
            <div class="topMenu flexEnd">
                <div class="flex al">
                    <div class="menu_item1 cursor" @click="AdvertisingAdd">新增廣告</div>
                    <div class="menu_item1 cursor" @click="advertisingOperation">廣告管理</div>
                    <div class="menu_item1 cursor" @click="statistics">廣告統計</div>
                    <div class="menu_item1 cursor">聯繫我們</div>
                    <div class="menu_item1 cursor">常見問題</div>
                    <div class="mlist al cursor" @click="showMenu = !showMenu"><img src="@/assets/img/blackList.png" alt=""></div>
                </div>
                <div :class="['menuRight1', { showMenu1: showMenu }]"></div>
            </div>
            <div class="menu mg">
                <div class="backImg flex">
                    <div class="menuLeft">
                        <div class="backMenu al flexEnd">
                            <div class="flex al">
                                <div class="menu_item cursor" @click="AdvertisingAdd">{{$t("lang.add")}}</div>
                                <div class="menu_item cursor" @click="advertisingOperation">{{$t("lang.management")}}</div>
                                <div class="menu_item cursor" @click="statistics">{{$t("lang.statistics")}}</div>
                                <div class="menu_item cursor">{{$t("lang.contact1")}}</div>
                                <div class="menu_item cursor">{{$t("lang.problem")}}</div>
                                <div class="mlist  al cursor" @click="showMenu = !showMenu"><img src="@/assets/img/mlist.png" alt=""></div>
                            </div>
                        </div>
                        <img class="cover" src="@/assets/img/backImage.jpg" alt="">
                        <div :class="['infoWindows al', { infoWindowsHeight: $i18n.locale == 'en-US' }]">
                            <div class=" width100">
                                <div :class="[{'window_content': $i18n.locale == 'zh-CN', 'window_content_en': $i18n.locale == 'en-US' }]">
                                    <transition name='fade'>
                                        <div class="" style="height: 100%;"  v-show="searchBack == 1">
                                            <div class="homePageSearch mg">
                                                <div style="margin-bottom: 7px;">
                                                    <el-input size="small"
                                                        placeholder="區域(可直接輸入)"
                                                        prefix-icon="el-icon-search"
                                                        v-model="input2">
                                                    </el-input>
                                                </div>
                                            </div>
                                            <div class="clear">
                                                <div :class="['float areaName tc bold', { get: areaName == i }]" @click="areaNameget(i,item.id)"
                                                v-for="(item,i) in addressList" :key="i">{{item.addressName}}</div>
                                            </div>
                                        </div>
                                    </transition>
                                    <transition name='fade'>
                                        <div style="height: 170px;" v-show="searchBack == 2">
                                            <div class="homePageSearch mg">
                                                <div style="margin-bottom: 7px;">
                                                    <el-input size="small"
                                                        placeholder="投放設備(可直接輸入)"
                                                        prefix-icon="el-icon-search"
                                                        v-model="input3">
                                                    </el-input>
                                                </div>
                                            </div>
                                            <div class="clear">
                                                <div :class="['float labelName tc bold', { get: labelName == i }]" @click="getlabelName(i)"
                                                v-for="(item,i) in lobalList" :key="i">{{item}}</div>
                                            </div>
                                        </div>
                                    </transition>
                                    <transition name='fade'>
                                        <div class="" style="height: 170px;"  v-show="searchBack == 3">
                                            <div class="homePageSearch mg">
                                                <div style="margin-bottom: 7px;">
                                                    <el-input size="small"
                                                        placeholder="店鋪類型(可直接輸入)"
                                                        prefix-icon="el-icon-search"
                                                        v-model="input4">
                                                    </el-input>
                                                </div>
                                            </div>
                                            <div class="clear">
                                                <div :class="['float areaName tc bold', { get: typeName == i }]" @click="typeNameget(i, item[0].id)"
                                                v-for="(item,i) in getTypeList" :key="i">{{item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
                                                item.find( res => res.language == "zh-TW").guangGaoTypeName: 
                                                item.find( res => res.language == "en-US").guangGaoTypeName}}</div>
                                            </div>
                                        </div>
                                    </transition>
                                    <transition name='fade'>
                                        <div class="" style="height: 170px;"  v-show="searchBack == 4">
                                            <div class="homePageSearch mg">
                                                <div style="margin-bottom: 7px;">
                                                    <el-input size="small"
                                                        placeholder="準備投放的廣告類型(可直接輸入)"
                                                        prefix-icon="el-icon-search"
                                                        v-model="input5">
                                                    </el-input>
                                                </div>
                                            </div>
                                            <div class="clear">
                                                <div :class="['float areaName tc bold', { get: adtypeName == i }]" @click="adtypeNameget(i, item[0].id)"
                                                v-for="(item,i) in getTypeList" :key="i">{{item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
                                                item.find( res => res.language == "zh-TW").guangGaoTypeName: 
                                                item.find( res => res.language == "en-US").guangGaoTypeName}}</div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <div class="ju">
                                    <div class="searchBtn1" @click="lastPage">
                                        上一項
                                    </div>
                                    <!-- <div class="searchBtn" href="#map" @click="getStore">
                                        搜索店鋪
                                    </div> -->
                                    <div class="searchBtn" @click="searchMsg">
                                        搜索店鋪
                                    </div>
                                    <div class="searchBtn1" @click="nextPage">
                                        下一項
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="searchMessage">
                    <img class="cover" src="@/assets/img/city.jpg" alt="">
                    <div class="mobile_infoWindows ju">
                        <div class="mobile_searchBtn" @click="searchMsg">
                            搜尋
                        </div>
                    </div>
                </div>
                <div class="myMap">
                    <div class="bold mapTitle">
                        大地圖搜尋
                    </div>
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
                <div class="bold mapTitle" style="margin-top: 20px;">
                    選擇套餐
                </div>
                <div class="combo_wrap sb">
                    <div class="combo_item">
                        <div class="combo_item_title tc">Basic{{$t("lang.comboPlan")}}</div>
                        <div class="combo_msg">
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.basic")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.custom")}}
                                </div>
                            </div>
                            <div class="clear">
                                <div class="clear">
                                    <div class="al float1 kong"></div>
                                    <div class="al float1 kong"></div>
                                </div>
                                <div class="clear">
                                    <div class="al float1 kong"></div>
                                    <div class="al float1 kong"></div>
                                    <div class="al float1 kong"></div>
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.fee")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.serviceFile")}}
                                </div>
                            </div>
                        </div>
                        <div class="ju">
                            <div class="start cursor bold" @click="AdvertisingAdd1">{{$t("lang.startPlan")}}</div>
                        </div>
                    </div>
                    <div class="combo_item center_item">
                        <div class="combo_item_title tc">Pro{{$t("lang.comboPlan")}}</div>
                        <div class="combo_msg">
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.basic")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.custom")}}
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.moreShop")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.Precise")}}
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 kong"></div>
                                <div class="al float1 kong"></div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.specify")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.fee")}}
                                </div>
                            </div>
                            <div class="">
                                <div class="al combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.serviceFile")}}
                                </div>
                            </div>
                        </div>
                        <div class="ju">
                            <div class="start cursor bold" @click="AdvertisingAddPro">{{$t("lang.startPlan")}}</div>
                        </div>
                    </div>
                    <div class="combo_item">
                        <div class="combo_item_title tc">Plus{{$t("lang.comboPlan")}}</div>
                        <div class="combo_msg">
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.basic")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.custom")}}
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.moreShop")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.Precise")}}
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.specify")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.effect")}}
                                </div>
                            </div>
                            <div class="clear">
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.bprice")}}
                                </div>
                                <div class="al float1 combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.fee")}}
                                </div>
                            </div>
                            <div class="">
                                <div class="al combo_msg_item">
                                    <img src="@/assets/img/check.png" alt=""> {{$t("lang.serviceFile")}}
                                </div>
                            </div>
                        </div>
                        <div class="ju">
                            <div class="start cursor bold" @click="AdvertisingAddPlus">{{$t("lang.startPlan")}}</div>
                        </div>
                    </div>
                </div>
                <div class="bold" style="font-size: 15px;margin-top: 30px;padding: 5px 10px;">
                    最熱門選擇
                </div>
                <div style="padding: 0 10px;">
                    <el-carousel indicator-position="outside" arrow="never" ref="carousel" :height="showCard == false? '400px':'500px'">
                        <el-carousel-item v-for="(item,i) in popularData" :key="i">
                            <div class="theHot">
                                <div class="theHot_content flex">
                                    <div class="card">
                                        <el-carousel :interval="5000" arrow="always" :height="!showCard == false? '200px':'400px'">
                                            <el-carousel-item v-for="(img,i) in item.images" :key="i">
                                                <div class='img_wrap'>
                                                    <img class="img" :src="img" alt="">
                                                </div>
                                            </el-carousel-item>
                                        </el-carousel>
                                    </div>
                                    <div class="content_msg">
                                        <div class="flex msg_wrap"> 
                                            <div class="title">店　　鋪:</div>
                                            <div class="message">{{item.shopName}}</div>
                                        </div>
                                        <div class="flex msg_wrap"> 
                                            <div class="title">地　　區:</div>
                                            <div class="message">{{item.addressName}}</div>
                                        </div>
                                        <div class="flex msg_wrap"> 
                                            <div class="title">投放尺寸:</div>
                                            <div class="message">{{item.widthAndHeihth}}</div>
                                        </div>
                                        <!-- <div class="flex msg_wrap"> 
                                            <div class="title">地點:</div>
                                            <div class="message">{{popularData.shopAddressName}}</div>
                                        </div> -->
                                        <div class="flex msg_wrap"> 
                                            <div class="title">營業時間:</div>
                                            <div class="message">
                                                {{item.businessHours}}
                                                <!-- <div>繁忙時段:</div>
                                                <div>非繁忙時段:</div>
                                                <div>超繁忙時段:</div> -->
                                            </div>
                                        </div>
                                        <div class="flex msg_wrap"> 
                                            <div class="title">平均收費:</div>
                                            <div class="message">
                                                <div style="color: red;">$ {{item.prices}} HKD</div>
                                                <!-- <div v-for="(msg,i) in popularData.priceContents" :key="i">
                                                    {{msg}}
                                                </div> -->
                                                <!-- <div>繁忙時段: $ 1000 HKD</div>
                                                <div>非繁忙時段: $ 700 HKD</div>
                                                <div>超繁忙時段: $ 1500 HKD</div> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="detail cursor" @click="moreDetail(item.shopId,item.addressId)">更多詳情</div>
                            </div>

                        </el-carousel-item>
                    </el-carousel>
                </div>

                <div class="flooter">
                    <img class="cover" src="@/assets/img/floorimg.png" alt="">
                    <div class="f_content tc">
                        <h1>最新消息</h1>
                        <div style="font-size: 12px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
                        <div class="f_input flex">
                            <input type="text" name="" id="" placeholder="Type your email here">
                            <div class="f_button cursor al ju blod">SUBMIT</div>
                        </div>
                    </div>
                </div>
                <div class="bimg_wrap">
                    <img class="img1" src="@/assets/img/leftLogo.png" alt="">
                    <img class="img2" src="@/assets/img/img2.png" alt="">
                    <img class="img3" src="@/assets/img/img2.png" alt="">
                    <div class="posi">
                        <div class="bottom sa">
                            <div class="l_fire ju">   
                                <div>
                                    <div style="font-size: 19px;">CompoundEyes.HK</div>
                                    <div class="cat_message">一站式廣告平台，把你的櫥窗變為生財工具。</div>
                                    <div class="logo_1">
                                        <img src="@/assets/img/t_logo.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="solid1"></div>
                            <div class="flex center_wrap">
                                <div class="sb f_center">
                                    <div class="t_child">
                                        <div class="f_title">連結</div>
                                        <div>關於</div>
                                        <div>聯絡我們</div>
                                        <div>會員守則</div>
                                        <div>幫助中心</div>
                                        <div>常見問題</div>
                                    </div>
                                    <div class="t_child">
                                        <div class="f_title">快捷鍵</div>
                                        <div @click="AdvertisingAdd">投放廣告</div>
                                        <div @click="AdvertisingAdd1">Basic套餐</div>
                                        <div @click="AdvertisingAddPro">Pro套餐</div>
                                        <div @click="AdvertisingAddPlus">Plus套餐</div>
                                    </div>
                                    <div class="t_child">
                                        <div class="f_title">我的賬號</div>
                                        <div>我的資料</div>
                                        <div>我的最愛</div>
                                        <div>我的留言</div>
                                        <div>我的套餐</div>
                                    </div>
                                </div>
                                <div class="solid2"></div>
                                <div class="f_message">
                                    <div class="f_title">聯絡資料</div>
                                    <div class="al">
                                        <div class="logoPng_wrap ju al">
                                            <img src="@/assets/img/pnga.png" alt="">
                                        </div>
                                        123 Street, Old Trafford, New South London , UK
                                    </div>
                                    <div class="al">
                                        <div class="logoPng_wrap ju al">
                                            <img src="@/assets/img/pngb.png" alt="">
                                        </div>
                                        info@sitename.com
                                    </div>
                                    <div class="al">
                                        <div class="logoPng_wrap ju al">
                                            <img src="@/assets/img/pngc.png" alt="">
                                        </div>
                                        + 457 789 789 65
                                    </div>
                                    <div class="friend">we accept</div>
                                    <div class="friendsLogo">
                                        <img src="@/assets/img/friends.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="downBack ju al">
                            <img src="@/assets/img/bottomLogo.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="['menuRight', { showMenu: showMenu }]"></div>
        <el-image-viewer 
		v-if="showViewer" 
		:on-close="closeViewer" 
		:url-list="[imgSrc]" />
    </div>
</template>

<script>
import { popular, getShopList } from "@/axios/request.js"
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
import mar from "@/assets/img/marker.png"
import dimg from "@/assets/img/growing.jpg"
export default {
    data () {
        return {
            showMenu: false,
            lobalList: ['LCD展示框', '透明OLED顯示器', '透明LED顯示器', '智能販賣機', '廣告牌', '交通工具'],
            searchBack: 1,
            showCard: false,
            imgSrc: '',
            showViewer: false,
            streetObj: "",
            input2: '',
            input3: '',
            input4: '',
            input5: '',
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
            Adtype: '',
            mapStoreListShow: [],
            obj: null,
            loading: false,
            marker1: [],

            areaName: null,
            typeName: null,
            adtypeName: null,
            labelName: null
        }
    },
    created () {
        this.popular()
    }, 
    mounted () {
        document.getElementsByClassName('backImg')[0].style.height = (window.innerHeight - 85) + 'px' 
        let that = this
        window.addEventListener('resize', (e) => {
            that.getResize()
        })
        
        document.getElementsByClassName('AdIndex')[0].addEventListener('scroll', (e) => {
            that.getData()
        })

		this.getResize()
        document.getElementsByClassName('Index')[0].scrollTop = 0;
        this.slideBanner();
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
        getData () {
            // this.showMenu = false
            if (document.getElementsByClassName('AdIndex')[0].scrollTop != 0) {
                document.getElementsByClassName('topMenu')[0].style.height = '80px'
                document.getElementsByClassName('topMenu')[0].style.transition = '0.8s'
                document.getElementsByClassName('backMenu')[0].style.height = '0px'
            } else {
                document.getElementsByClassName('topMenu')[0].style.height = '0px'
                document.getElementsByClassName('topMenu')[0].style.transition = '0.1s'
                document.getElementsByClassName('backMenu')[0].style.height = '77px'
            }
        },
        areaNameget (i, id) {
            this.areaName = i
            this.area1 = id
        },
        typeNameget (i,id) {
            this.typeName = i
            this.type = id
        },
        adtypeNameget (i,id) {
            this.adtypeName = i
            this.Adtype = id
        },
        getlabelName (i) {
            this.labelName = i
        },
        nextPage () {
            if ( this.searchBack == 4 ) {
                this.searchBack = 4
            } else {
                this.searchBack += 1
            }
        },
        lastPage () {
            if (this.searchBack == 1) {
                this.searchBack = 1
            } else {
                this.searchBack -= 1
            }
            
        },
        getResize () {
            if (this.$route.name == 'cAdIndex') {
                document.getElementsByClassName('backImg')[0].style.height = (window.innerHeight - 85) + 'px'
            }
        },
        parentPage () {
            this.$parent.closeList()
        },
        searchMsg () {
            this.$router.push({
                name: 'searchMsg',
                params: {
                    shopName: this.input2,
                    parentAddressId: this.area1,
                    addressId: this.street,
                    typeId: this.type,
                    Adtype: this.Adtype
                }
            })
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
            popular().then(res => {
                if (res.data.rtnCode == 200) {
                    res.data.data.forEach(item => {
                        item.prices = item.price.toFixed(1)
                    })
                    this.popularData = res.data.data
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
        statistics () {
            this.$router.push('/Statistics')          //廣告統計
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
        AdvertisingAdd1 () {
            this.$router.push('/AdvertisingAdd')         //新增廣告
            // this.$router.push('/Combo')
        },
        AdvertisingAdd () {
            // this.$router.push('/AdvertisingAdd')         //新增廣告
            this.$router.push('/Combo')
        },
        AdvertisingAddPro () {
            this.$router.push('/AdvertisingAddPro')
        },
        AdvertisingAddPlus () {
            this.$router.push('/AdvertisingAddPlus')
        },

        
        
        //移动端可滑动Element走马灯
        startAuto:function(){
			if(this.autoplay == false){
				this.autoplay = true;
			}
		},
		stopAuto:function(){
			if(this.autoplay == true){
				this.autoplay = false;
			}
		},
		slideBanner:function(){
			//选中item的盒子
            let vm = this
			var box = document.querySelector('.el-carousel__container');
		    //手指起点X坐标
		    var startPoint = 0;
			//手指滑动重点X坐标
			var stopPoint = 0;
			
			//重置坐标
			var resetPoint =  function(){
				startPoint = 0;
				stopPoint = 0;
			}
		    
		    //手指按下
		    box.addEventListener("touchstart",function(e){
		    	//手指按下的时候停止自动轮播
		    	vm.stopAuto();
		    	//手指点击位置的X坐标
		        startPoint = e.changedTouches[0].pageX;
		    });
		    //手指滑动
		    box.addEventListener("touchmove",function(e){
		    	//手指滑动后终点位置X的坐标
		        stopPoint = e.changedTouches[0].pageX;
		    });
		    //当手指抬起的时候，判断图片滚动离左右的距离
		   	box.addEventListener("touchend",function(e){
		   		// console.log("1："+startPoint);
		   		// console.log("2："+stopPoint);
				if(stopPoint == 0 || startPoint - stopPoint == 0){
					resetPoint();
		   			return;
		   		}
		   		if(startPoint - stopPoint > 0){
		   			resetPoint();
		   			vm.$refs.carousel.next();
		   			return;
		   		}
		   		if(startPoint - stopPoint < 0){
		   			resetPoint();
		   			vm.$refs.carousel.prev();
		   			return;
		   		}
		    });
		}
    }
}
</script>

<style lang='less' scoped>
@import "@/less/style.less";
    .logoPng_wrap {
        width: 25px;
        height: 25px;
        min-width: 25px;
        min-height: 25px;
        margin: 0 5px 0 0 !important;
        border-radius: 50%;
        overflow: hidden;
        img {
            height: 100%;
            width: 100%;
        }
    }
    .window_content {
        height: 170px;
        overflow: hidden;
    }
    .window_content_en {
        height: 270px;
        overflow: hidden;
    }
    .bimg_wrap {
        overflow: hidden;
        position: relative;
        .posi {
            width: 100%;
            // position: absolute;
            top: 0;
            left: 0;
        }
        .img1 {
            position: absolute;
            width: 500px;
            top: 130px;
            left: -200px;
            z-index: 1;
            @media screen and (max-width: 1036px) {
                display: none;
            }
        } 
        .img2 {
            position: absolute;
            width: 500px;
            top: 20px;
            right: 0;
            @media screen and (max-width: 1036px) {
                display: none;
            }
        }  
        .img3 {
            position: absolute;
            width: 600px;
            top: 20px;
            right: 0;
            @media screen and (max-width: 1036px) {
                display: none;
            }
        }   
    }
    .downBack {
        background: #303030;
        width: 100%;
        height: 50px;
        img {
            height: 70%;
        }
    }
    .cat_message {
        font-size: 12px;
        color: gray;
        margin-top: 15px;
    }
    .logo_1 {
        margin-top: 50px;
        height: 30px;
        @media screen and (max-width: 860px) {
            margin-top: 25px;
        }
        img {
            height: 100%;
        }
    }
    .t_child, .f_message {
        div {
            font-size: 13px;
            margin-bottom: 25px;
            
            color: gray;
            cursor: pointer;
        }
    }
    .f_message {
        min-width: 250px;
        @media screen and (max-width: 610px) {
            margin-left: 30px;
        }
    }
    .f_title {
        color: black !important;
    }
    .f_center {
        width: 80%;
        max-width: 600px;
        margin-right: 18%;
        min-width: 290px;
        @media screen and (max-width: 1000px) {
            margin-right: 10%;
        }
        @media screen and (max-width: 900px) {
            margin-right: 60px;
        }
        @media screen and (max-width: 610px) {
            width: 100%;
            margin-right: 0;
            justify-content: space-around !important;
        }
    }
    .friend {
        margin-bottom: 0px !important;
    }
    .friendsLogo {
        height: 30px;
        img {
            height: 100%;
        }
    }
    .bottom {
        padding: 15px 10px;
        @media screen and (max-width: 860px) {
            display: block !important;
        }
    }
    .solid1 {
        display: none;
        border: solid 1px rgb(236, 236, 236);
        @media screen and (max-width: 860px) {
            display: block !important;
        }
    }
    .solid2 {
        display: none;
        border: solid 1px rgb(236, 236, 236);
        margin-bottom: 25px;
        margin-top: -20px;
        @media screen and (max-width: 610px) {
            display: block !important;
        }
    }
    .center_wrap {
        margin: 0 50px;
        width: 70%;
        @media screen and (max-width: 1000px) {
            margin: 0 0px;
        }
        @media screen and (max-width: 860px) {
            margin-top: 25px;
            width: 100%;
        }
        @media screen and (max-width: 610px) {
            display: block !important;
        }
    }
    .l_fire {
        width: 30%;
        @media screen and (max-width: 860px) {
            min-width: 290px;
        }
    }
    .flooter {
        margin: 20px auto;
        width: calc(100% - 20px);
        height: 550px;
        position: relative;
        .f_content {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 90%;
            transform: translate(-50%, -50%);
            max-width: 400px;
            color: white;
        }
    }
    .f_input {
        margin-top: 25px;
        background: white;
        border-radius: 30px;
        height: 41px;
        overflow: hidden;
        input {
            border: none;
            outline: none;
            height: 100%;
            width: 100%;
            font-size: 15px;
            padding: 0 7px;
            color: gray !important;
        }
        .f_button {
            width: 125px;
            background: #3E52F0;
            border-radius: 30px;
            font-size: 12px;
        }
    }
    
    .areaName {
        font-size: 13px;
        width: 15%;
        background: white;
        color: gray;
        border-radius: 10px;
        padding: 8px 0;
        margin: 5px 5px;
        transition: 0.1s;
        cursor: pointer;
        @media screen and (max-width: 675px) {
            font-size: 12px;
            width: 17%;
            margin: 5px 8px;
        }
        @media screen and (max-width: 606px) {
            width: 20%;
            margin: 5px 12px;
        }
    }
    .labelName {
        font-size: 13px;
        width: 30%;
        background: white;
        color: gray;
        border-radius: 10px;
        padding: 8px 0;
        margin: 5px 10px;
        transition: 0.1s;
        cursor: pointer;
        @media screen and (max-width: 676px) {
            font-size: 12px;
            width: 28%;
            margin: 5px 14px;
        }
    }
    .get {
        background: gray !important;
        color: white !important;
    }
    .AdIndex {
        height: 100%;
        overflow: auto;
        position: relative;
        .topMenu {
            height: 0;
            overflow: hidden;
            width: 100%;
            padding: 0 25px;
            position: fixed;
            top: 85px;
            left: 0;
            background: white;
            z-index: 10;
            transition: 0.8s;
            @media screen and (max-width: 564px) {
                display: none;
            }
        }
        .adBackDom {
            position: fixed;
            top: 0px;
            left: 0;
            background: rgba(0,0,0,0.6);
            z-index: 20;
            width: 100%;
            height: 100%;
        }
    }
    .searchMessage {
        display: none;
        margin-top: 20px;
        height: 80px;
        width: 100%;
        position: relative;
        @media screen and (max-width: 910px) and (max-height: 564px) {
            display: flex;
        }
        @media screen and (max-width: 564px) {
            display: flex;
        }
        .mobile_infoWindows {
            position: absolute;
            padding: 5px 15px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 96%;
            max-width: 430px;
            border-radius: 7px;
            // background: rgba(0,0,0,0.5)
        }
    }
    .mobile_searchBtn {
        width: 49%;
        background: @miniBlue;
        color: white;
        font-size: 15px;
        font-weight: bold;
        padding: 7px 0;
        text-align: center;
        border-radius: 7px;
        margin: 7px 0;
    }
    .mapTitle {
        padding: 5px 10px;
        font-size: 15px;
    }
    .homePageSearch {
        max-width: 400px;
        margin: auto;
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
        width: 30%;
        background: @miniBlue;
        color: white;
        font-size: 15px;
        font-weight: bold;
        padding: 7px 0;
        text-align: center;
        border-radius: 7px;
        margin: 25px 10px 0 10px;
        cursor: pointer;
    }
    .searchBtn1 {
        width: 30%;
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
    .drawer_item {
        color: white;
        width: 100%;
        padding: 25px 30%;
        font-size: 13px;
        @media screen and (max-height: 564px) {
            padding: 17px 30%;
        }
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
    .logo_wrap {
        width: 29px;
        height: 29px;
        overflow: hidden;
        border-radius: 50%;
        img {
            height: 70%;
        }
    }
    .menuLeft {
        position: relative; 
        height: 100%;
        width: calc(100%);
    }
    .menuRight {
        width: 0px;
        height: 100%;
        transition: 0.2s;
        background: @miniBlue;
    }
    .menuRight1 {
        width: 0px;
        height: 100%;
        transition: 0.2s;
        background: rgb(255, 255, 255);
    }
    .showMenu {
        width: 360px;
    }
    .showMenu1 {
        width: 305px;
    }
    .backImg {
        width: 100%;
        position: relative;
        @media screen and (max-width: 910px) and (max-height: 564px) {
            display: none;
        }
        @media screen and (max-width: 564px) {
            display: none;
        }
        .infoWindows {
            position: absolute;
            padding: 5px 15px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 96%;
            max-width: 650px;
            height: 270px;
            border-radius: 7px;
            background: rgba(0,0,0,0.5)
        }
        .backMenu {
            position: absolute;
            top: 0;
            right: 0;
            overflow: hidden;
            transition: 0.5s;
            height: 77px;
            padding-right: 25px;
        }
    }
    .infoWindowsHeight {
        height: 370px !important;
    }
    .menu_item {
        color: white;
        font-size: 13px;
        padding: 10px 20px;
    }
    .menu_item1 {
        color: rgb(65, 65, 65);
        font-size: 13px;
        padding: 10px 20px;
    }
    .mlist {
        height: 25px;
        width: 30px;
        margin-left: 20px;
        img {
            height: 100%;
            width: 100%;
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
        min-width: 70px;
        text-align: justify;
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
        border: solid 1px rgb(175, 175, 175);
        overflow: hidden;
        height: 400px;
        @media screen and (max-width: 700px) {
            height: 500px;
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
        min-width: 200px;
        @media screen and (max-width: 700px) {
            width: 100%;
        }
    }
    .myMap {
        margin-top: 30px;
        padding: 0 10px;
        @media screen and (max-width: 564px) {
            margin-top: 15px;
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
			top: 21px;
			z-index: 1;
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
        @media screen and (max-width: 564px) {
            height: 300px;
        }
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
        top: 13px !important;
        left: -3px !important;
        border-radius: 7px;
        height: 35px;
		// border: #5C48B7 solid 3px;
		// border: #13dafd solid 3px;
		border: rgb(165, 165, 165) solid 1px;
		outline: none;
        @media screen and (max-width: 564px) {
            width: 180px;
        }
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
        padding: 0 10px;
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