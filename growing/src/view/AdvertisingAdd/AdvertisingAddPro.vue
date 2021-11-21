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
								<div style="color: #B0B0B0;" class="list_item float al" 
									v-for="(item,i) in storeList" :key="i">
									{{item}} <span class="al" style="margin-left: 5px">
										<img class="cursor" @click="deleStore(i)" src="@/assets/img/cha.png" alt="">
									</span>
								</div>
								<!-- <div class="flex">
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
											<img class="cursor" @click="deleStore(i)" src="@/assets/img/cha.png" alt="">
										</span>
									</div>
								</div> -->
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
						<el-form-item>
							<div class="map_wrap">
								<input
								id="pac-input"
								class="controls"
								type="text"
								placeholder="Search Box"
								/>
								<div id="map"></div>
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
						<el-form-item :label="$t('lang.adserving')" prop="time">
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
						<el-form-item label="廣告媒體投放時間">
							<div class="">
								<el-radio-group v-model="radio1" size="small">
									<el-radio label="1" border>均分廣告時間</el-radio>
									<el-radio label="2" border>自定義廣告時間</el-radio>
								</el-radio-group> 
								<el-button type="primary" size="small" @click="openDra(radio1)"
								class="elbtn" v-show="radio1">選擇時間</el-button>
							</div>
							<div class="list1 clear" v-show="radio1 == '1'">
								<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in adList" :key="i">
									{{item}} <span class="al" style="margin-left: 5px"><img class="cursor" @click="deleItem(i)" src="@/assets/img/cha.png" alt=""></span>
								</div>
							</div>
							<div class="list1 clear" v-show="radio1 == '2'">
								<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in adList1" :key="i">
									{{item.time}} <span class="al" style="margin-left: 5px"><img class="cursor" @click="deleItem1(i)" src="@/assets/img/cha.png" alt=""></span>
								</div>
							</div>
						</el-form-item>

						<el-form-item :label="$t('lang.adcontent')" prop="content">
							<div class="textarea_wrap clear">
								<label for="img">
									<div class="addImg ju al float">
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
		<el-drawer
			title="請選擇您需要投放的時間段"
			:visible.sync="drawer1"
			:direction="direction"
			:before-close="handleClose">
			<div class="dra_content noBar">
				<div>
					<el-form :label-position="labelPosition"  ref="ruleForm" 
						:label-width="$i18n.locale == 'zh-CN'? '80px': '205px'" class="demo-ruleForm">
						<el-form-item label="繁忙時段">
							<el-checkbox-group v-model="checkedCities" @change="adListadd">
								<el-checkbox v-for="item in busyTimeList" :label="item" :key="item">{{item}}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="超繁忙時段">
							<el-checkbox-group v-model="checkedCities1" @change="adsListadd">
								<el-checkbox v-for="item in sbusyTimeList" :label="item" :key="item">{{item}}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="繁忙時段">
							<el-checkbox-group v-model="checkedCities2" @change="adunListadd">
								<el-checkbox v-for="item in unbusyTimeList" :label="item" :key="item">{{item}}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
					</el-form>
					<div class="footer_text tc">將會把廣告投放時長平均分配於選中時間段播放</div>
					<div class="footer_text tc" style="margin-bottom: 100px;">
						如需指定時間端廣告播放時長，請切換至<span class="sfooter_text">自定義廣告時間</span>選項
					</div>
				</div>
				<div class="dra_footer">
					<div class="flexEnd">
						<el-button size="small" @click="drawer1 = false">取消</el-button>
  						<el-button size="small" type="primary" @click="sureaddadList">確定</el-button>
					</div>
				</div>
			</div>
		</el-drawer>
		<el-drawer
			title="請選擇您需要投放的時間段及廣告播放時長:"
			:visible.sync="drawer2"
			:direction="direction"
			:before-close="handleClose">
			<div class="dra_content noBar">
				<div class="list_wrap">
					<div class="al size12 ju" v-for="(item,i) in addTimeList" :key="i" style="margin-bottom: 15px;">
						<span class="l_time">{{item.time}}</span> <el-input-number @change="handleChange" 
						style="margin: 0 5px;width: 107px;" v-model="item.num"
						:min="1" :max="100" label="描述文字" size="mini"></el-input-number> 分鐘
					</div>
					
					<div class="ju" style="margin-top: 20px;">
						<!-- <el-button size="small" style="margin-right: 10px;" type="primary">確定</el-button> -->
						<el-popover
							style="width: 80px;"
							placement="right"
							width="260"
							trigger="click">
							<el-form label-position="top">
								<el-form-item label="請選擇時間:">
									<el-checkbox-group v-model="checkedCities" @change="group">
										<el-checkbox v-for="item in fList"
											:label="item" :key="item.time">{{item.time}}
										</el-checkbox>
									</el-checkbox-group>
								</el-form-item>
							</el-form>
							<div slot="reference"><el-button type="" size="small">新增時間</el-button></div>
						</el-popover>
						<el-popconfirm
							style="width: 56px;"
							title="確定重置嗎？"
							@confirm='reset'>
							<div slot="reference"><el-button size="small" style="margin-left: 10px;">重置</el-button></div>
						</el-popconfirm>
					</div>
					<div class="size12 ju" style="margin-top: 20px;">
						請確認選擇的<span style="color: red">廣告播放時長(分鐘)總數</span>與<span style="color: red">廣告媒體投放時長</span>一致
					</div>
				</div>
				<div class="dra_footer">
					<div class="flexEnd">
						<el-button size="small" @click="drawer2 = false">取消</el-button>
  						<el-button size="small" type="primary" @click="sueraddList1">確定</el-button>
					</div>
				</div>
			</div>
		</el-drawer>
    </div>
</template>

<script>
var abc = null
export default {
    data() {
        return {
			adList: [],
			adList1: [],
			copy1: [],
			copy2: [],
			copy3: [],

			addTimeList: [],

			checkedCities: [],
			busyTimeList: [],

			checkedCities1: [],
			sbusyTimeList: ['12:00~13:00','18:00~19:00'],

			checkedCities2: [],
			unbusyTimeList: [],

			fList: [],


			position1: 'left-end',
			visible: false,
			drawer: false,
			drawer1: false,
			drawer2: false,
			direction: 'rtl',
			submit: true,
			video: true,
            radio: '1',
            radio1: '',
			labelPosition: 'left',
            ruleForm: {
                name: '',
                area: '',
                store: '',
                street: '',
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
			infowindow: null
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
		let h = 9
		let s = 10
		for (let i=0;i<11;i++) {
			s += 1
			h += 1
			this.busyTimeList.push(h + ':00~' + s + ':00')
		}

		let hour = -1
		let second = 0
		for (let i=0;i<24;i++) {
			hour += 1
			second += 1
			this.fList.push( {time: hour + ':00~' + second + ':00', num: 1} )
		}

		let unh = 22
		let uns = 23
		for (let i=0;i<11;i++) {
			uns -= 1
			unh -= 1
			this.unbusyTimeList.push(unh + ':00~' + uns + ':00')
		}
	},
    mounted () {
        this.initMap()
		window.shopadd = this.shopadd;
		window.closewin = this.closewin;
    },
    methods: {
		adListadd (val) {
			this.copy1 = Array.from(val)
		},
		adsListadd (val) {
			this.copy2 = Array.from(val)
		},
		adunListadd (val) {
			this.copy3 = Array.from(val)
		},
		deleItem (i) {
			this.adList.splice(i,1)
		},
		deleItem1 (i) {
			this.adList1.splice(i,1)
		},
		sureaddadList () {
			this.adList = this.copy1.concat(this.copy2.concat(this.copy3))
			this.drawer1 = false
		},
		sueraddList1 () {
			this.adList1 = this.addTimeList
			this.drawer2 = false
		},

		initMap () {
			let that = this
			let boolean = true
			let map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 22.6, lng: 114.1},
				zoom: 8,
				mapTypeId: "roadmap",
				disableDefaultUI: true,
				zoomControl: boolean,
				mapTypeControl: boolean,
				scaleControl: boolean,
				streetViewControl: boolean,
				rotateControl: boolean,
				fullscreenControl: boolean,
			});

			const myLatLng = {lat: 22.6, lng: 114.1}
			new google.maps.Marker({
				position: myLatLng,
				map,
				title: "Hello World!",
			});

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
				const triangleCoords = [
					{ lat: 22.27, lng: 113.46 },
					{ lat: 22.28, lng: 113.50 },
					{ lat: 22.30, lng: 113.55 },
					{ lat: 22.32, lng: 113.57 },
					{ lat: 22.35, lng: 113.59 },
					{ lat: 22.37, lng: 113.60 },
					{ lat: 22.40, lng: 113.62 },
				];
				// Construct the polygon.
				const bermudaTriangle = new google.maps.Polygon({
					paths: triangleCoords,
					strokeColor: "#FF0000",
					strokeOpacity: 0.8,
					strokeWeight: 2,
					fillColor: "#FF0000",
					fillOpacity: 0.35,
				});
				bermudaTriangle.setMap(map);
			})
			const input = document.getElementById("pac-input");
			const searchBox = new google.maps.places.SearchBox(input);
			console.log(searchBox)
			map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
			map.addListener("bounds_changed", () => {
				searchBox.setBounds(map.getBounds());
			});
			let markers = [];
			searchBox.addListener("places_changed", () => {
				const places = searchBox.getPlaces();

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
				msg: '美食店'
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
			for (let i = 0; i < features.length; i++) {
				const marker1 = new google.maps.Marker({
					position: features[i].position,
					icon: icons[features[i].type].icon,
					map: map,
				});

				const contentString1 = `
					<div class='bold tc'>${features[i].msg}</div>` + 
					`<div style='margin-top: 10px;' class='ju al'>
						<div onclick="closewin()" class='cursor close'
						style='padding: 5px 20px;
						color: gray;
						font-size: 12px;
						border: solid 1px rgb(201, 201, 201);
						border-radius: 4px;
						margin-right: 5px;'>取消</div>

						<div onclick="shopadd('${features[i].msg}')"
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

		},
		shopadd (val) {
			this.addStore(val)
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


		reset () {
			this.addTimeList = []
			this.checkedCities = []
		},
		group (val) {
			this.addTimeList = Array.from(val)
		},
		handleChange(value) {
			console.log(value);
		},
		openDra (i) {
			if (i == 1) {
				this.drawer1 = true
			} else if (i == 2) {
				this.drawer2 = true
			}
		},
		handleClose(done) {
			this.$confirm('确认关闭？')
			.then(_ => {
				done();
			})
			.catch(_ => {});
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
		height: 100%;
		overflow: auto;
		padding: 0 20px;
	}
	.dra_footer {
		position: absolute;
		padding: 30px 20px;
		bottom: 0;
		left: 0;
		width: 100%;
		background: white;
		box-shadow: 0 0 5px gray;
		z-index: 10;
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
		border: dashed 1px rgb(201, 201, 201);
		width: 100px;
		height: 100px;
		margin: 5px;
		@media screen and (max-width: 564px) {
			width: 70px;
			height: 70px;
		}
	}
	.addImg:hover {
		border: dashed 1px rgb(148, 148, 148);
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

	#map {
        height: 400px;
        width: 100%;
		max-width: 900px;
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
        top: 66px !important;
        left: -3px !important;
        border-radius: 3px;
        height: 25px;
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