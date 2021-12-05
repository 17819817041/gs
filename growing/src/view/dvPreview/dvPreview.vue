<template>
    <div class="AdvertisingAdd AdvertisingAdd1">
		<div class="AdvertisingOperation_back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" alt="" @click="goBack">廣告計劃詳細內容預覽
        </div>
		<div class="noBar" style="height: calc(100% - 35px);overflow: auto;margin-top: 15px;">
			<div :class="['content mg bar',{ heigh: !submit }]">
				<!-- <div class="content_title al"><img class="cursor" style="width: 25px;" @click="goBack" src="@/assets/img/back_arrow.png" alt="">新增廣告計劃</div> -->
				<div class="noBar" style="height: calc(100% - 0px); overflow:auto" v-show="submit">
					<div class="basicsMsg theme" v-show="submit">
						<div class=" basicsMsg_item bold al">
							<div class="iden radius"></div> {{$t("lang.message")}}
						</div>
						<el-form :model="ruleForm" :label-position="$i18n.locale == 'zh-CN'? labelPosition: 'top'" ref="ruleForm" 
						:label-width="$i18n.locale == 'zh-CN'? '100px': '165px'" class="demo-ruleForm">
							<el-form-item :label="$t('lang.adname')" prop="name">
								<el-input style="width: 40%;min-width: 200px;" v-model="ruleForm.name" disabled></el-input>
							</el-form-item>
							<el-form-item :label="$t('lang.industry')" prop="type">
								<div class="flex br">
									<div class="flex">
                                        <el-input style="width: 40%;min-width: 200px;" :value="$t('lang.Technology')" disabled></el-input>
									</div>
									<div class="list clear">
										<div style="color: #B0B0B0;" class="list_item1 float al" v-for="(item,i) in typeList" :key="i">
											{{item}}
										</div>
									</div>
								</div>
							</el-form-item>
							<el-form-item :label="$t('lang.cycle')" prop="date">
								<div style="min-width: 200px;width: 100%" class='clear'>
									<div class="float" style="margin-right: 15px;width: 140px;">
										<el-form-item prop="startDate">
											<el-date-picker disabled
												@change="STIME"
												class="width100"
												v-model="ruleForm.startDate"
												type="date"
												:placeholder="$t('lang.sdate')">
											</el-date-picker>
										</el-form-item>
									</div>
									<div class="float width384" style="width: 140px;">
										<el-form-item prop="endDate">
											<el-date-picker disabled
												class="width100"
												v-model="ruleForm.endDate"
												type="date"
												:placeholder="$t('lang.enddate')">
											</el-date-picker>
										</el-form-item>
										
									</div>
								</div>
							</el-form-item>
							<div :class="['flex br',{ br1185: $i18n.locale == 'en-US' }]">
								<el-form-item :label="$t('lang.admediatype')" prop="mediaType" style="margin-right: 30px;">
									<div class="al">
                                        <el-input style="width: 40%;min-width: 200px;" :value="$t('lang.image')" disabled></el-input>
									</div>
								</el-form-item>
								<el-form-item :label="$t('lang.duration')" prop="inp" v-show="$i18n.locale == 'zh-CN'">
									<div :class="['al',{ mar20: $i18n.locale == 'zh-CN'  }]">
										<div class="al inp_time ju">
											<el-input-number v-model="ruleForm.inp" :step="10" step-strictly size="small" disabled
											:min="60" :max="900" label="描述文字"></el-input-number>
										</div>
										<div>{{$t('lang.minute')}}</div>
									</div>
								</el-form-item>
							</div>
							<el-form-item :label="$t('lang.duration')" prop="inp" v-show="$i18n.locale == 'en-US'">
								<div class="al">
									<div class="al inp_time ju">
										<el-input-number v-model="ruleForm.inp" size="small"  :step="10" step-strictly
										:min="60" :max="1000" label="描述文字" disabled></el-input-number>
									</div>
									<div>{{$t('lang.minute')}}</div>
								</div>
							</el-form-item>
							<el-form-item :label="$t('lang.adcontent')" prop="content">
								<div class="textarea_wrap clear">
									<div class="textarea_wrap_item float cursor" v-for="(item,i) in imageList" :key="i">
										<div class="imageList_wrap">
											<div class="textarea_wrap_item_child ju al" @click="imgPreview(item.url)">
												<img style="height: 100%;" :src="item.url" alt="">
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
							<el-form-item :label="$t('lang.amt')">
								<div>
									<el-radio-group v-model="radio1" size="small" :class="[{marl: $i18n.locale == 'en-US' }]">
										<el-radio style="margin-right: 20px !important;" label="1" border>{{$t('lang.sate')}}</el-radio>
										<el-radio :class="[{ 'en_martop': $i18n.locale == 'en-US' }]" 
										style="margin-left: 0;margin-right: 15px !important;" label="2" border>{{$t('lang.cat')}}</el-radio>
									</el-radio-group> 
								</div>
								<div class="list1 clear" v-show="radio1 == '1'">
									<div style="color: #B0B0B0;font-size: 13px;" class="list_itemjunfen ju float al" v-for="(item,i) in adList" :key="i">
										<span>{{item}} </span>
									</div>
								</div>
								<div class="list1 clear" v-show="radio1 == '2'">
									<div style="color: #B0B0B0;font-size: 12px;" class="list_itemzdy float ju al" v-for="(item,i) in adList1" :key="i">
										<span>{{item.time}} </span>
										<span class="" style="margin-left: 3px;">({{item.num}}分鐘)</span>
									</div>
								</div>
							</el-form-item>
						</el-form>
					</div>
					<div class="detailPlan theme" v-show="submit">
						<div class=" basicsMsg_item bold al">
							<div class="iden radius"></div> {{$t("lang.DetailedPlan")}}
						</div>
						<el-form :model="ruleForm" :label-position="$i18n.locale == 'zh-CN'? labelPosition: 'top'" 
						:rules="rules" ref="ruleForm" 
						:label-width="$i18n.locale == 'zh-CN'? '100px': '100px'" class="demo-ruleForm">
							<el-form-item :label="$t('lang.aplan')">
								<el-radio-group v-model="radio" size="small" @change="mount">
									<el-radio label="1" border>{{$t("lang.dp")}}</el-radio>
									<el-radio style="margin-right: 20px !important;" @click.native="changeLight" label="2" border>{{$t("lang.sa")}}</el-radio>
									<el-radio style="margin-left: 0 !important;" label="3" border>{{$t("lang.ds")}}</el-radio>
								</el-radio-group>
							</el-form-item>
						</el-form>
						<el-form :model="ruleForm" label-position="top" ref="ruleForm" 
						:label-width="$i18n.locale == 'zh-CN'? '100px': '100px'" class="demo-ruleForm">
							<!-- <el-form-item :label="$t('lang.adserving')" prop="time">
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
							</el-form-item> -->

							<!-- <el-form-item :label="$t('lang.aplan')">
								<el-radio-group v-model="radio" size="small" @change="mount">
									<el-radio label="1" border>{{$t("lang.dp")}}</el-radio>
									<el-radio label="2" border>{{$t("lang.sa")}}</el-radio>
									<el-radio label="3" border>{{$t("lang.ds")}}</el-radio>
								</el-radio-group>
							</el-form-item> -->
							
							<el-form-item :label="$t('lang.chooseStore')" 
							prop="store" v-show="radio == 1" style="position: relative;">
								<!-- <div class="fixedt"> (請在下放地圖選取店鋪)</div> -->
								<div class="flex br">
									<div style="color: #B0B0B0;" class="list_item float al cursor"
										@click="storehit(i)" 
										v-for="(item,i) in storeList" :key="i">
										{{item}}
									</div>
								</div>
							</el-form-item>
							<el-form-item :label="$t('lang.AdvertisingArea')" prop="area" v-show="radio == 2">
								<div class="flex br">
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
										<!-- <el-select v-model="ruleForm.area" @change="changeArea"
											:placeholder="$t('lang.pldselectarea')" style="margin-right: 10px;">
											<el-option :label="$t('lang.jiulong')" :value="$t('lang.jiulong')"></el-option>
											<el-option :label="$t('lang.wangjiao')" :value="$t('lang.wangjiao')"></el-option>
											<el-option :label="$t('lang.zhonghuan')" :value="$t('lang.zhonghuan')"></el-option>
										</el-select> -->
                                        <el-input style="width: 40%;min-width: 200px;" v-model="ruleForm.area" disabled></el-input>
                                        <el-input style="width: 40%;min-width: 200px;margin-left: 10px;" v-model="ruleForm.street" disabled></el-input>
										<!-- <el-select v-model="ruleForm.street" :placeholder="$t('lang.pldselectstreet')">
											<el-option :label="$t('lang.Kowloon') + $t('lang.street')" @click.native="changeCen(22.8, 114.6)"
											v-if="ruleForm.area == $t('lang.jiulong')" :value="$t('lang.Kowloon') + $t('lang.street')"></el-option>
											<el-option :label="$t('lang.MongKok') + $t('lang.street')"  @click.native="changeCen(23.8, 114.6)"
											v-if="ruleForm.area == $t('lang.wangjiao')" :value="$t('lang.MongKok') + $t('lang.street')"></el-option>
											<el-option :label="$t('lang.Central') + $t('lang.street')"  @click.native="changeCen(22.8, 116.6)"
											v-if="ruleForm.area == $t('lang.zhonghuan')" :value="$t('lang.Central') + $t('lang.street')"></el-option>
										</el-select> -->
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
								<div :class="['map_wrap', { 'map_wrap1': $i18n.locale == 'en-US' }]">
									<img class="searchImg" src="@/assets/img/search.png" alt="">
									<input
									id="pac-input"
									ref="pac"
									class="controls"
									type="text"
									placeholder="Search"
									/>
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
						<div class="sure_plan_wrap mg ju" >
							<!-- <div class="sure_plan cursor" @click="submitG">{{$t('lang.adconfirm')}}</div> -->
                            <el-button type="primary" @click.native="goBack">返回</el-button>
						</div>
					</div>
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
								<el-checkbox v-for="(item,i) in busyTimeList" :label="item" :key="i">{{item}}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="超繁忙時段">
							<el-checkbox-group v-model="checkedCities12" @change="adsListadd">
								<el-checkbox v-for="(item,i) in sbusyTimeList" :label="item" :key="i">{{item}}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="非繁忙時段">
							<el-checkbox-group v-model="checkedCities2" @change="adunListadd">
								<el-checkbox v-for="(item,i) in unbusyTimeList" :label="item" :key="i">{{item}}</el-checkbox>
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
					<el-form label-position="top"
						:label-width="$i18n.locale == 'zh-CN'? '80px': '205px'" class="demo-ruleForm">
						<el-form-item label="繁忙時段:">
							<div class="al size12 ju" v-for="(item,i) in addTimeList" :key="i+11" style="margin-bottom: 15px;">
								<span class="l_time">{{item.time}}</span> <el-input-number @change="handleChange" 
								style="margin: 0 5px;width: 107px;" v-model="item.num"
								:min="1" :max="100" label="描述文字" size="mini"></el-input-number> 分鐘
								<el-button plain size="mini" style="margin-left: 7px;" @click.native="deleList(i)">刪除</el-button>
							</div>
						</el-form-item>
						<el-form-item label="超繁忙時段:">
							<div class="al size12 ju" v-for="(item,i) in addTimeList1" :key="i+16" style="margin-bottom: 15px;">
								<span class="l_time">{{item.time}}</span> <el-input-number @change="handleChange" 
								style="margin: 0 5px;width: 107px;" v-model="item.num"
								:min="1" :max="100" label="描述文字" size="mini"></el-input-number> 分鐘
								<el-button plain size="mini" style="margin-left: 7px;" @click.native="deleList1(i)">刪除</el-button>
							</div>
						</el-form-item>
						<el-form-item label="非繁忙時段:">
							<div class="al size12 ju" v-for="(item,i) in addTimeList2" :key="i+30" style="margin-bottom: 15px;">
								<span class="l_time">{{item.time}}</span> <el-input-number @change="handleChange" 
								style="margin: 0 5px;width: 107px;" v-model="item.num"
								:min="1" :max="100" label="描述文字" size="mini"></el-input-number> 分鐘
								<el-button plain size="mini" style="margin-left: 7px;" @click.native="deleList2(i)">刪除</el-button>
							</div>
						</el-form-item>
					</el-form>

					
					<div class="ju" style="margin-top: 20px;">
						<el-popover
							style="width: 80px;"
							placement="right"
							width="270"
							trigger="click">
							<div class="popover_item" ref='popover'>
								<el-form label-position="top"  ref="ruleForm" 
									:label-width="$i18n.locale == 'zh-CN'? '80px': '205px'" class="demo-ruleForm">
									<el-form-item label="繁忙時段">
										<el-checkbox-group v-model="checkedCities1" @change="group">
											<el-checkbox v-for="(item,i) in busyTimeList1" :label="item" :key="i+1">{{item.time}}</el-checkbox>
										</el-checkbox-group>
									</el-form-item>
									<el-form-item label="超繁忙時段">
										<el-checkbox-group v-model="checkedCities11" @change="group1">
											<el-checkbox v-for="(item,i) in sbusyTimeList1" :label="item" :key="i+2">{{item.time}}</el-checkbox>
										</el-checkbox-group>
									</el-form-item>
									<el-form-item label="繁忙時段">
										<el-checkbox-group v-model="checkedCities21" @change="group2">
											<el-checkbox v-for="(item,i) in unbusyTimeList1" :label="item" :key="i">{{item.time}}</el-checkbox>
										</el-checkbox-group>
									</el-form-item>
								</el-form>
							</div>
							<div slot="reference"><el-button type="" size="small">新增時間</el-button></div>
						</el-popover>
						<el-popconfirm
							style="width: 56px;"
							title="確定重置嗎？"
							@confirm='reset'>
							<div slot="reference"><el-button size="small" style="margin-left: 10px;">重置</el-button></div>
						</el-popconfirm>
					</div>
					<div class="ju" style="margin-top: 20px;">
						<div class="size12" style="display: inline-block;">
							<span>請確認選擇的</span><span style="color: red">廣告播放時長(分鐘)總數</span>與<span style="color: red">廣告媒體投放時長</span>一致
						</div>
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
		<el-image-viewer 
		v-if="showViewer" 
		:on-close="closeViewer" 
		:url-list="[dimg]" />
        <el-image-viewer v-if="showViewer1" :on-close="closeViewer1" :url-list="[dimg1]" />
    </div>
</template>

<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
import dimg from "@/assets/img/growing.jpg"
import img1 from "@/assets/img/backimg.png"
export default {
    data() {
        return {
			showViewer: false, 
			showViewer1: false, 

			adList: ['9:00~10:00','10:00~11:00','14:00~15:00'],
			adList1: [{ time: '9:00~10:00', num: 5 }, { time: '10:00~11:00', num: 10 }, { time: '15:00~16:00', num: 5 }],
			copy1: [],
			copy2: [],
			copy3: [],

			addTimeList: [],
			addTimeList1: [],
			addTimeList2: [],

			checkedCities: [],
			busyTimeList: [],

			checkedCities1: [],
			busyTimeList1: [],

			checkedCities12: [],
			sbusyTimeList: ['12:00~13:00','18:00~19:00'],

			checkedCities11: [],
			sbusyTimeList1: [{ time: '12:00~13:00', num: 1 },{ time:'18:00~19:00', num: 1 }],

			checkedCities2: [],
			unbusyTimeList: [],

			checkedCities21: [],
			unbusyTimeList1: [],



			position1: 'left-end',
			visible: false,
			drawer: false,
			drawer1: false,
			drawer2: false,
			direction: 'rtl',
			submit: true,
			video: true,
            radio: '1',
            radio1: '1',
			labelPosition: 'left',
            ruleForm: {
                name: '食品會投放',
                area: '九龍區',
                store: '',
                street: '九龍街道',
                // time: '',
                type: '',
				date: '',
                startDate: '2021-12-06',
				endDate: '2021-12-07',
                content: '',
				mediaType: '',
				inp: 10,
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
            value2: '',
			typeList: ['旺角街道高流量商鋪廣告套餐($10000HKD/day)/旺角區域店鋪/廣告100分鐘'],
			areaList: ['九龍區'],
			timeList: [],
			imageList: [{url: img1,name: 'image1',size: '13KB'}, {url: dimg,name: 'image2',size: '500KB'}],
			minute: [],
            storeList: ['九龍店', '車展會','科技大廈', '醫院', '時尚大廳'],
            streetList: [],
            map: '',
            place: null,
			infowindow: null,
			deLight: [],
			last: [],
			dimg: '',
			dimg1: '',
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
		let that = this
		let h = 8
		let s = 9
		for (let i=0;i<12;i++) {
			s += 1
			h += 1
			this.busyTimeList.push(h + ':00~' + s + ':00')
			this.busyTimeList1.push( {time: h + ':00~' + s + ':00', num: 1} )
		}
		this.$nextTick(() => {
			that.busyTimeList.splice(3,1)
			that.busyTimeList.splice(8,1)
			that.busyTimeList1.splice(3,1)
			that.busyTimeList1.splice(8,1)
		})

		let unh = 20
		let uns = 21
		for (let i=0;i<2;i++) {
			uns += 1
			unh += 1
			this.unbusyTimeList.push(unh + ':00~' + uns + ':00')
			this.unbusyTimeList1.push( {time: unh + ':00~' + uns + ':00', num: 1} )
		}
		this.unbusyTimeList.push('23:00~00:00')
		this.unbusyTimeList1.push( { time: '23:00~00:00', num: 1 } )
		let unh1 = -1
		let uns1 = 0
		for (let i=0;i<9;i++) {
			uns1 += 1
			unh1 += 1
			this.unbusyTimeList.push(unh1 + ':00~' + uns1 + ':00')
			this.unbusyTimeList1.push( {time: unh1 + ':00~' + uns1 + ':00', num: 1} )
		}
	},
    mounted () {
        this.initMap1(22.6,114.1,1)
		window.shopadd = this.shopadd;
		window.onPreview = this.onPreview;
		window.closewin = this.closewin
    },
	watch: {
        lang: {
            handler (val) {
                if (val) {
					let that = this
					this.$nextTick(() => {
						that.initMap1(22.6,114.1,1)
					})
					// if (val == 'zh-CN') {
					// 	this.labelPosition = 'left'
					// } else if (val == 'en-US') {
					// 	this.labelPosition = 'top'
					// }
                }
            }
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
    computed: {
        lang () { return this.$i18n.locale }
    },
    methods: {
        imgPreview (url) {
			this.dimg1 = url
			this.showViewer1 = true
		},
		previewVideo (item) {
			this.src = item.url
			this.showVideo = true
			this.videoWrap = true
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
						// +
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
		onPreview() {
			console.log(123)
			this.showViewer = true
        },
        // 关闭查看器
        closeViewer() {
          this.showViewer = false
        },
		mount (i) {
			if (i == '1') {
				this.initMap1(22.6,114.1,1)
			} else if (i == '2') {
				this.initMap1(22.6,114.1,2)
			} else if (i == '3') {
				this.initMap1(22.6,114.1,3)
			}
		},
		adListadd (val) {
			this.copy1 = Array.from(val)
		},
		adsListadd (val) {
			this.copy2 = Array.from(val)
		},
		adunListadd (val) {
			this.copy3 = Array.from(val)
		},
		sureaddadList () {
			this.adList = this.copy1.concat(this.copy2.concat(this.copy3))
			this.drawer1 = false
		},
		sueraddList1 () {
			this.adList1 = this.addTimeList.concat(this.addTimeList1.concat(this.addTimeList2))
			this.drawer2 = false
		},
		changeArea (val) {
			this.ruleForm.street = ''
		},
		
		changeCen (lat,lng) {
			this.map.panTo({ lat: lat,lng: lng });
		},
		initMap1 (lat,lng,val) {
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
			// let input = document.getElementById("pac-input");
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
					msg: this.$t("lang.car")
					},
					{
					position: new google.maps.LatLng(22.87, 114.13),
					type: "info",
					msg: this.$t("lang.Technology")
					},
					{
					position: new google.maps.LatLng(22.66, 114.10),
					type: "info",
					msg: this.$t("lang.medical")
					},
					{
					position: new google.maps.LatLng(22.8, 114.1),
					type: "info",
					msg: this.$t("lang.foodclient")
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
							` +
							`<div style='margin-top: 10px;' class='ju al'>
								<div onclick="closewin()" class='cursor close'
								style='padding: 5px 20px;
								color: gray;
								font-size: 12px;
								border: solid 1px rgb(201, 201, 201);
								border-radius: 4px;
								margin-right: 5px;'>Cancel</div>

								<div onclick="shopadd('${features[i].msg}')"
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
		changeLight () {
            let val = this.$t('lang.jiulong')
			this.last = JSON.parse(JSON.stringify(this.deLight))
			if (val == this.$t('lang.jiulong')) {
				this.deLight = [
					{ lat: 22.27, lng: 113.46 },
					{ lat: 22.28, lng: 113.50 },
					{ lat: 22.30, lng: 113.55 },
					{ lat: 22.32, lng: 113.57 },
					{ lat: 22.35, lng: 113.59 },
					{ lat: 22.37, lng: 113.60 },
					{ lat: 22.40, lng: 113.62 },
				]
			} else if (val == this.$t('lang.wangjiao')) {
				this.deLight = [
					{ lat: 22.37, lng: 113.56 },
					{ lat: 22.38, lng: 113.60 },
					{ lat: 22.40, lng: 113.55 },
					{ lat: 22.52, lng: 113.67 },
					{ lat: 22.45, lng: 113.69 },
					{ lat: 22.47, lng: 113.70 },
					{ lat: 22.50, lng: 113.72 },
				]
			} else if (val == this.$t('lang.zhonghuan')) {
				this.deLight = [
					{ lat: 22.37, lng: 113.66 },
					{ lat: 22.48, lng: 113.70 },
					{ lat: 22.50, lng: 113.65 },
					{ lat: 22.62, lng: 113.77 },
					{ lat: 22.55, lng: 113.79 },
					{ lat: 22.57, lng: 113.80 },
					{ lat: 22.60, lng: 113.82 },
				]
			}
			this.lightArea()
			
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



		reset () {
			this.checkedCities21 = []
			this.checkedCities11 = []
			this.checkedCities1 = []
			this.adList1 = []
			this.addTimeList = []
			this.addTimeList1 = []
			this.addTimeList2 = []
			this.checkedCities = []
		},
		group (val) {
			this.addTimeList = Array.from(val)
		},
		group1 (val) {
			this.addTimeList1 = Array.from(val)
		},
		group2 (val) {
			this.addTimeList2 = Array.from(val)
		},
		handleChange(value) {
			console.log(value);
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
        addStore (item) {
			this.infowindow.close()
			if (item) {
				this.storeList.push(item)
				let arr = new Set(this.storeList)
				this.storeList = Array.from(arr)
			}
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
		deleList (i) {
			this.addTimeList.splice(i,1)
		},
		deleList1 (i) {
			this.addTimeList1.splice(i,1)
		},
		deleList2 (i) {
			this.addTimeList2.splice(i,1)
			this.checkedCities21.splice(i,1)
		},
    }
}
</script>

<style lang='less' scoped>
@import "@/less/style.less";
	.popover_item {
		height: 600px !important;
		overflow: auto;
		@media screen and (max-width: 1000px) and (max-height: 500px) {
            // font-size: 12px;
			height: 300px !important;
        }
	}
	.fixedt {
		position: absolute;
		top: -48px;
		left: 100px;
		color: rgb(172, 172, 172);
		font-size: 12px;
	}
	.en_martop {
		@media screen and (max-width: 601px) {
			margin-top: 10px !important;
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
	.dra_footer {
		position: absolute;
		padding: 15px 20px;
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
	.marl {
		margin-left: 0 !important;
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
		width: 105px;
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
	.mar20 {
		margin-left: 30px;
		@media screen and (max-width: 564px) {
			margin-left: 0;
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
			margin-left: 0px !important;
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
		height: 36px;
		padding: 0 15px;
		white-space: nowrap;
		// @media screen and (max-width: 870px) {
		// 	margin-top: 5px;
		// }
		margin-bottom: 5px;
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
	.list_itemzdy,.list_itemjunfen {
		border: dashed 2px #d3d3d3;
		margin-right: 7px;
		height: 36px;
		// padding: 0 15px;
		width: 160px;
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
        // margin-left: -90px;
        // margin-top: 10px;
		
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
	// #pac-input:hover {
    //     border-color: #03e9f4;
    //     box-shadow: 0 0 2px #03e9f4;
    //     box-shadow: 0 0 4px #03e9f4;
    //     box-shadow: 0 0 6px #03e9f4;
    //     box-shadow: 0 0 8px #03e9f4;
    // }

    // #pac-input:focus {
    // 	border-color: #03e9f4;
	// 	box-shadow: 0 0 2px #03e9f4;
    //     box-shadow: 0 0 4px #03e9f4;
    //     box-shadow: 0 0 6px #03e9f4;
    //     box-shadow: 0 0 8px #03e9f4;
    // }

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