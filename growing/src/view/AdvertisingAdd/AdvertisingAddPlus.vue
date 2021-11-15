<template>
    <div class="AdvertisingAdd">
		<!-- <img class="back_a cursor" v-show="!submit" @click="submit = true" src="@/assets/img/back_arrow.png" alt=""> -->
		<div class="AdvertisingOperation_back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" alt="" @click="goBack">{{$t("lang.newad")}}
        </div>
        <div :class="['content mg bar',{ heigh: !submit }]">
            <!-- <div class="content_title al"><img class="cursor" style="width: 25px;" @click="goBack" src="@/assets/img/back_arrow.png" alt="">新增廣告計劃</div> -->
			<div class="noBar" style="height: calc(100% - 0px); overflow:auto" v-show="submit">
				<div class="basicsMsg theme" v-show="submit">
					<div class=" basicsMsg_item bold al">
						<div class="iden radius"></div> {{$t("lang.message")}}
					</div>
					<el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" 
					:label-width="$i18n.locale == 'zh-CN'? '100px': '165px'" class="demo-ruleForm">
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
									<div class="addCate cursor al" @click="addType(ruleForm.type)">
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
                        <el-form-item>
							<el-radio-group v-model="radio" size="small">
                                <el-radio label="1" border>指定店鋪</el-radio>
                                <el-radio label="2" border>指定區域</el-radio>
                                <el-radio label="3" border>指定街道</el-radio>
                            </el-radio-group>
						</el-form-item>
                        <el-form-item :label="$t('lang.chooseStore')" prop="store" v-show="radio == 1">
							<div class="flex br">
								<div class="flex">
									<el-select v-model="ruleForm.store" :placeholder="$t('lang.pldselectstore')">
										<el-option :label="$t('lang.ks')" :value="$t('lang.ks')"></el-option>
										<el-option :label="$t('lang.mks')" :value="$t('lang.mks')"></el-option>
										<el-option :label="$t('lang.cs')" :value="$t('lang.cs')"></el-option>
									</el-select>
									<div class="addCate cursor al" @click="addStore(ruleForm.store)">
										{{$t("lang.addbtn")}}
									</div>
								</div>
								<div class="list clear">
									<div style="color: #B0B0B0;" class="list_item float al" 
									v-for="(item,i) in storeList" :key="i">
										{{item}} <span class="al" style="margin-left: 5px">
											<img class="cursor" @click="addStore(i)" src="@/assets/img/cha.png" alt="">
										</span>
									</div>
								</div>
							</div>
                            <div class="map_wrap">
                                <gmap-map :center="centers" :zoom="11" class="gooleMap" 
                                    @click="updateMaker">
                                    <gmap-marker :position="positionse" :draggable="true" @dragend="updateMaker"/>
                                </gmap-map>
                            </div>
						</el-form-item>
						<el-form-item :label="$t('lang.AdvertisingArea')" prop="area" v-show="radio == 2">
							<div class="flex br">
								<div class="flex">
									<el-select v-model="ruleForm.area" :placeholder="$t('lang.pldselectarea')">
										<el-option :label="$t('lang.jiulong')" :value="$t('lang.jiulong')"></el-option>
										<el-option :label="$t('lang.wangjiao')" :value="$t('lang.wangjiao')"></el-option>
										<el-option :label="$t('lang.zhonghuan')" :value="$t('lang.zhonghuan')"></el-option>
									</el-select>
									<div class="addCate cursor al" @click="addArea(ruleForm.area)">
										{{$t("lang.addbtn")}}
									</div>
								</div>
								<div class="list clear">
									<div style="color: #B0B0B0;" class="list_item float al" 
									v-for="(item,i) in areaList" :key="i">
										{{item}} <span class="al" style="margin-left: 5px">
											<img class="cursor" @click="deleArea(i)" src="@/assets/img/cha.png" alt="">
										</span>
									</div>
								</div>
							</div>
						</el-form-item>
                        <el-form-item :label="$t('lang.AdvertisingArea')" prop="street" v-show="radio == 3">
							<div class="flex br">
								<div class="flex">
									<el-select v-model="ruleForm.area" 
                                    :placeholder="$t('lang.pldselectarea')" style="margin-right: 10px;">
										<el-option :label="$t('lang.jiulong')" :value="$t('lang.jiulong')"></el-option>
										<el-option :label="$t('lang.wangjiao')" :value="$t('lang.wangjiao')"></el-option>
										<el-option :label="$t('lang.zhonghuan')" :value="$t('lang.zhonghuan')"></el-option>
									</el-select>
                                    <el-select v-model="ruleForm.street" :placeholder="$t('lang.pldselectstreet')">
										<el-option :label="$t('lang.Kowloon') + $t('lang.street')" 
                                        v-if="ruleForm.area == $t('lang.jiulong')" :value="$t('lang.Kowloon') + $t('lang.street')"></el-option>
										<el-option :label="$t('lang.MongKok') + $t('lang.street')" 
                                        v-if="ruleForm.area == $t('lang.wangjiao')" :value="$t('lang.MongKok') + $t('lang.street')"></el-option>
										<el-option :label="$t('lang.Central') + $t('lang.street')" 
                                        v-if="ruleForm.area == $t('lang.zhonghuan')" :value="$t('lang.Central') + $t('lang.street')"></el-option>
									</el-select>
									<div class="addCate cursor al" @click="addStreet(ruleForm.street)">
										{{$t("lang.addbtn")}}
									</div>
								</div>
								<div class="list clear">
									<div style="color: #B0B0B0;" class="list_item float al" 
									v-for="(item,i) in streetList" :key="i">
										{{item}} <span class="al" style="margin-left: 5px">
											<img class="cursor" @click="deleStreet(i)" src="@/assets/img/cha.png" alt="">
										</span>
									</div>
								</div>
							</div>
						</el-form-item>
					</el-form>
				</div>
				<div class="detailPlan theme" v-show="submit">
					<div class=" basicsMsg_item bold al">
						<div class="iden radius"></div> {{$t("lang.DetailedPlan")}}
					</div>
					<el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" 
					:label-width="$i18n.locale == 'zh-CN'? '100px': '205px'" class="demo-ruleForm">
                        <el-form-item>
							<el-radio-group v-model="radio1" size="small">
                                <el-radio label="1" border>按時間段</el-radio>
                                <el-radio label="2" border>按具體時間</el-radio>
                            </el-radio-group>
						</el-form-item>
						<el-form-item :label="$t('lang.addTime')" prop="time" v-show="radio1 == '1'">
							<div class="flex br">
								<div class="flex">
									<el-select v-model="ruleForm.time" :placeholder="$t('lang.pldselecttime')">
										<el-option :label="$t('lang.busyhour')" :value="$t('lang.busyhour')"></el-option>
										<el-option :label="$t('lang.unbusyhour')" :value="$t('lang.unbusyhour')"></el-option>
									</el-select>
									<div class="addCate cursor al" @click="addTime(ruleForm.time)">
										{{$t("lang.addbtn")}}
									</div>
								</div>
								<div class="list clear">
									<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in timeList" :key="i">
										{{item}} <span class="al" style="margin-left: 5px"><img class="cursor" @click="deleTime(i)" src="@/assets/img/cha.png" alt=""></span>
									</div>
								</div>
							</div>
						</el-form-item>
                        <el-form-item :label="$t('lang.addTime1')" prop="time" v-show="radio1 == '2'">
							<div class="flex br">
								<div class="flex">
									<el-select v-model="ruleForm.time" :placeholder="$t('lang.pldselecttime')" 
                                        style="margin-right: 10px;">
										<el-option :label="$t('lang.busyhour')" :value="$t('lang.busyhour')"></el-option>
										<el-option :label="$t('lang.unbusyhour')" :value="$t('lang.unbusyhour')"></el-option>
									</el-select>
                                    <el-select v-model="ruleForm.tclock" :placeholder="$t('lang.pldselecttime')">
										<el-option v-show="ruleForm.time == $t('lang.busyhour')" v-for="(item,i) in busyList" :key="i" :label="item.label" :value="item.value"></el-option>
                                        <el-option v-show="ruleForm.time == $t('lang.unbusyhour')" v-for="(item) in unBusyList" :key="item.label" :label="item.label" :value="item.value"></el-option>
									</el-select>
									<div class="addCate cursor al" @click="addTime(ruleForm.tclock)">
										{{$t("lang.addbtn")}}
									</div>
								</div>
								<div class="list clear">
									<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in timeList" :key="i">
										{{item}} <span class="al" style="margin-left: 5px"><img class="cursor" @click="deleTime(i)" src="@/assets/img/cha.png" alt=""></span>
									</div>
								</div>
							</div>
						</el-form-item>
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
									<div>{{$t('lang.minute')}} <span style="color: gray;margin-left: 5px;">{{$t('lang.int')}}</span></div>
								</div>
							</el-form-item>
						</div>
						<el-form-item :label="$t('lang.adcontent')" prop="content">
							<div class="textarea_wrap clear">
								<label for="img">
									<div class="addImg ju al cursor float">
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
								<span>{{$t('lang.total')}}:</span><span class="math_price"> $ 6000 </span><span class="p_d">HKD</span>
							</div>
							<div class="total_price_item">{{$t('lang.phprice')}}: $4000 HKD</div>
							<div class="total_price_item">{{$t('lang.unphprice')}}: $2000 HKD</div>
							<!-- <div class="price_plan flex cursor" @click="drawer = !drawer"> -->
							<el-popover
								:placement="position1"
								trigger="click"
								v-model="visible">
								<div>
									<div class="flex total_item">
										<div class="l_msg">{{$t('lang.base')}}: </div>
										<div class="r_msg">100{{$t('lang.hdk')}}</div>
									</div>
									<div class="flex total_item">
										<div class="l_msg">{{$t('lang.phprice')}}: </div>
										<div class="r_msg">{{$t('lang.base')}}*2/{{$t('lang.minute')}}</div>
									</div>
									<div class="flex total_item">
										<div class="l_msg">{{$t('lang.unphprice')}}: </div>
										<div class="r_msg">{{$t('lang.base')}}/{{$t('lang.minute')}}</div>
									</div>
								</div>
								<div>
									{{$t('lang.detailgetprice')}}
								</div>
								<div class="arrow_br"></div>
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

import { gmapApi } from 'vue2-google-maps'

export default {
    data() {
        return {
			position1: 'left-end',
			visible: false,
			drawer: false,
			submit: true,
			video: true,
            radio: '1',
            radio1: '1',
            busyList: [
                { label: '9am-10am', value:"9am-10am" },
                { label: '10am-11am', value:"10am-11am" },
                { label: '11am-1pm', value:"11am-1pm" },
                { label: '1pm-2pm', value:"1pm-2pm" },
                { label: '2pm-3pm', value:"2pm-3pm" },
                { label: '3pm-4pm', value:"3pm-4pm" },
                { label: '4pm-5pm', value:"4pm-5pm" },
                { label: '5pm-6pm', value:"5pm-6pm" },
                { label: '6pm-7pm', value:"6pm-7pm" },
                { label: '7pm-8pm', value:"7pm-8pm" },
                { label: '8pm-9pm', value:"8pm-9pm" },
            ],
            unBusyList: [
                { label: '9pm-10pm', value:"9pm-10pm" },
                { label: '10pm-11pm', value:"10pm-11pm" },
                { label: '11pm-1am', value:"11pm-1am" },
                { label: '1am-2am', value:"1am-2am" },
                { label: '2am-3am', value:"2am-3am" },
                { label: '3am-4am', value:"3am-4am" },
                { label: '4am-5am', value:"4am-5am" },
                { label: '5am-6am', value:"5am-6am" },
                { label: '6am-7am', value:"6am-7am" },
                { label: '7am-8am', value:"7am-8am" },
                { label: '8am-9am', value:"8am-9am" },
            ],
            ruleForm: {
                name: '',
                area: '',
                store: '',
                street: '',
                tclock: '',
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
                store: [
                    { required: true, message: '請選擇店鋪', trigger: 'blur' }
                ],
                street: [
                    { required: true, message: '請選擇街道', trigger: 'blur' }
                ],
                time: [
                    { required: true, message: '請選擇时间段', trigger: 'blur' }
                ],
                tclock: [
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
			minute: [],
            storeList: [],
            streetList: [],
            map: '',
            place: null,
            positionse: {
                lat: 43.648509660046656,
                lng: -79.3789402652274
            }

        };
    },
    props: {
        // position: {
        //     type: Object,
        //     default: () => {
        //         return {
        //         lat: 43.648509660046656,
        //         lng: -79.3789402652274
        //         }
        //     }
        // }
    },
    computed: {
        google: gmapApi, // 获取官方的OBject 使用官方API的时候可以用
        centers() {
            return {
                lat: this.positionse.lat,
                lng: this.positionse.lng
            }
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
    mounted () {
        
    },
    methods: {
        updateMaker (event) {
            console.log('updateMaker, ', event.latLng.lat(), event.latLng.lng());
            this.positionse = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            }
            this.pointToAddress(this.positionse.lat, this.positionse.lng, this.pushAddress)
        },
        pushAddress(res) {
            this.$emit('mark', res, this.positionse)
        },
        pointToAddress(lat, lng, backcall) {
            // 实例化Geocoder服务用于解析地址
            var geocoder = new this.google.maps.Geocoder();
            // 地理反解析
            geocoder.geocode({ location: new this.google.maps.LatLng(lat, lng) }, function geoResults(results, status) {
                if (status === this.google.maps.GeocoderStatus.OK) {
                backcall(results[0].formatted_address);
                } else {
                console.log('：error ' + status);
                }
            });
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
        addStore (item) {
			if (item) {
				this.storeList.push(item)
				let arr = new Set(this.storeList)
				this.storeList = Array.from(arr)
			}
		},
        addStreet (item) {
			if (item) {
				this.streetList.push(item)
				let arr = new Set(this.streetList)
				this.streetList = Array.from(arr)
			}
		},
		deleType (i) {
			this.typeList.splice(i,1)
		},
        deleStore (i) {
			this.storeList.splice(i,1)
		},
        deleStreet (i) {
			this.streetList.splice(i,1)
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
											message: '單個圖片最大限制3M!'
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
		border: dashed 2px rgb(201, 201, 201);
		width: 100px;
		height: 100px;
		margin: 5px;
		@media screen and (max-width: 564px) {
			width: 50px;
			height: 50px;
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
    .map_wrap {
        margin-left: -90px;
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
</style>