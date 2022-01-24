<template>
    <div class="AdvertisingAdd AdvertisingAdd1" v-loading='loading'>
		<!-- <img class="back_a cursor" v-show="!submit" @click="submit = true" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt=""> -->
		<div class="AdvertisingOperation_back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="" @click="goBack">編輯套餐
        </div>
		<div class="noBar" style="height: calc(100% - 35px);overflow: auto;margin-top: 15px;">
			<div :class="['content mg bar',{ heigh: !submit }]">
				<!-- <div class="content_title al"><img class="cursor" style="width: 25px;" @click="goBack" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="">新增廣告計劃</div> -->
				<div class="noBar" style="height: calc(100% - 0px); overflow:auto" v-show="submit">
					<div class="basicsMsg theme" v-show="submit">
						<div class=" basicsMsg_item bold al">
							<div class="iden radius"></div> {{$t("lang.message")}}
						</div>
						<el-form :model="ruleForm" :label-position="$i18n.locale == 'zh-CN'? labelPosition: 'top'" :rules="rules" ref="ruleForm" 
						:label-width="$i18n.locale == 'zh-CN'? '100px': '165px'" class="demo-ruleForm">
							<el-form-item :label="$t('lang.adname')" prop="name">
								<el-input style="width: 40%;min-width: 200px;" v-model="ruleForm.name"></el-input>
							</el-form-item>
							<el-form-item :label="$t('lang.industry')" prop="type">
								<div class="flex br">
									<div class="flex">
										<el-select v-model="showType" :placeholder="$t('lang.pldselecttype')" @change="getStore1">
											<el-option v-for="(item,i) in getTypeList" :key="i"
												:label='item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
												item.find( res => res.language == "zh-TW").guangGaoTypeName: 
												item.find( res => res.language == "en-US").guangGaoTypeName '
												:value="item[0].id">
											</el-option>
										</el-select>
									</div>
									<div class="list clear">
										<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in typeList" :key="i">
											{{item}} <span class="al" style="margin-left: 5px"><img class="cursor"
											@click="deleType(i)" src="@/assets/img/cha.png" alt=""></span>
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
                            <el-form-item label="標題1" prop="title">
								<el-input style="width: 40%;min-width: 200px;" v-model="ruleForm.title"></el-input>
							</el-form-item>
                            <el-form-item label="標題1描述" prop="title1">
								<el-input style="width: 40%;min-width: 200px;" v-model="ruleForm.title1"></el-input>
							</el-form-item>
                            <el-form-item label="標題2" prop="title2">
								<el-input style="width: 40%;min-width: 200px;" v-model="ruleForm.title2"></el-input>
							</el-form-item>
                            <el-form-item label="標題2描述" prop="title3">
								<el-input style="width: 40%;min-width: 200px;" v-model="ruleForm.title3"></el-input>
							</el-form-item>
                            <el-form-item label="廣告計劃原價" prop="lastPrice">
                                <div class="flex">
                                    <div class="lastPrice">
                                        <el-input class="width100" @input="enterPrice"
										onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" v-model="ruleForm.lastPrice"></el-input>
                                    </div>
                                    <div style="margin-left: 5px;">HKD</div>
                                </div>
							</el-form-item>
                            <el-form-item label="套餐折扣率" prop="ids">
                                <div :class="['al']">
                                    <div class="al inp_time ju">
                                        <el-input-number v-model="ruleForm.ids" :step="1" size="small" @change="enterIds"
                                        :min="1" :max="100" label="描述文字"></el-input-number>
                                    </div>
                                    <div style="margin-left: 10px;">%</div>
                                </div>
                            </el-form-item>
                            <el-form-item label="套餐價格" prop="Price">
                                <div class="" style="color: red;">
                                    HK$ {{ruleForm.Price}}
                                </div>
							</el-form-item>
                            <el-form-item label="套餐內容描述" prop="content.value">
								<div class="flex">
                                    <el-input style="width: 40%;min-width: 200px;" 
                                    v-model="ruleForm.content.value"></el-input>
                                    <el-button type="primary" style="margin-left: 5px;" @click.native="addContentList">添加</el-button>
                                </div>
								<div class="flex" v-for="(item,i) in ruleForm.contentList" :key="i" style="margin-top: 10px;">
                                    <el-input style="width: 40%;min-width: 200px;" 
                                    v-model="ruleForm.contentList[i].value"></el-input>

                                    <div class="flex">
										<el-button type="primary" style="margin-left: 5px;" 
										@click.native="addContentList">添加</el-button>
										<div class="cursor addCate" style="margin: 2px 0 0 10px;" @click="delContentList(i)">刪除</div>
									</div>

                                </div>
							</el-form-item>
							<el-form-item :label="$t('lang.amt')" prop="radio">
								<div>
									<el-radio-group v-model="radio1" size="small" 
                                    :class="[{marl: $i18n.locale == 'en-US' }]">
										<!-- <el-radio style="margin-right: 20px !important;" label="1" border>{{$t('lang.sate')}}</el-radio> -->
										<el-radio :class="['elradio', { 'en_martop': $i18n.locale == 'en-US' }]" 
										 label="2" border>{{$t('lang.cat')}}</el-radio>
									</el-radio-group> 
									<el-button type="primary" size="small" @click="openDra(radio1)"
									class="elbtn" v-show="radio1">{{$t('lang.sptime')}}</el-button>
								</div>
								<div class="list2 clear" v-show="radio1 == '2'">
									<div style="color: #B0B0B0;font-size: 12px;" class="list_itemzdy float ju al" v-for="(item,i) in adList1" :key="i">
										<span>{{item.packageName}} </span>
										<span class="" style="margin-left: 3px;">({{item.num}}分鐘)</span>
										<span class="al" style="margin-left: 5px">
											<img class="cursor" @click="delechild(i)" src="@/assets/img/cha.png" alt="">
										</span>
									</div>
								</div>
							</el-form-item>
                            <el-form-item :label="$t('lang.duration')" prop="inp" >
								<div :class="['al',{ mar20: $i18n.locale == 'zh-CN'  }]">
										<div class="al inp_time ju">
											<!-- <el-input-number v-model="ruleForm.inp" :step="10" step-strictly size="small" 
											:min="10" :max="900" label="描述文字" disabled></el-input-number> -->
											<el-input-number v-model="ruleForm.inp" :step="1" size="small" 
											:min="1" :max="100" label="描述文字"></el-input-number>
										</div>
										<div>{{$t('lang.minute')}}</div>
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
									<el-radio style="margin-right: 20px !important;" label="2" border>{{$t("lang.sa")}}</el-radio>
									<el-radio style="margin-left: 0 !important;" label="3" border>{{$t("lang.ds")}}</el-radio>
								</el-radio-group>
							</el-form-item>
						</el-form>
						<el-form :model="ruleForm1" label-position="top" 
						:rules="rules" ref="ruleForm1" 
						:label-width="$i18n.locale == 'zh-CN'? '100px': '100px'" class="demo-ruleForm">
							<el-form-item :label="$t('lang.chooseStore')" 
							prop="store" v-show="radio == 1" style="position: relative;">
								<div class="fixedt"> (請在下放地圖選取店鋪)</div>
								<div class="flex br">
									<div style="color: #B0B0B0;" class="list_item float al cursor"
										@click="storehit(item)" 
										v-for="(item,i) in storeList" :key="i">
										{{item.msg}} <span class="al" style="margin-left: 5px">
											<img class="cursor" @click.stop="deleStore(i)" src="@/assets/img/cha.png" alt="">
										</span>
									</div>
								</div>
							</el-form-item>
							<el-form-item :label="$t('lang.AdvertisingArea')" prop="area" v-show="radio == 2">
								<div class="flex br">
									<div class="flex">
										<el-select v-model="ruleForm1.area" :placeholder="$t('lang.pldselectarea')" @change="changeLight">
											<el-option v-for="(item,i) in addressList" :key="i"
												:label='item.addressName '
												:value="item.id">
											</el-option>
										</el-select>
										<div class="addCate cursor al" @click="addArea(ruleForm1.area)">
											{{$t("lang.addbtn")}}
										</div>
									</div>
									<div class="list clear">
										<div style="color: #B0B0B0;" class="list_item float al" 
										v-for="(item,i) in areaList" :key="i">
											{{item.addressName}} <span class="al" style="margin-left: 5px">
												<img class="cursor" @click="deleArea(i)" src="@/assets/img/cha.png" alt="">
											</span>
										</div>
									</div>
								</div>
							</el-form-item>
							<el-form-item :label="$t('lang.AdvertisingArea')" prop="street" v-show="radio == 3">
								<div class="flex br">
									<div class="flex">
										<el-select v-model="ruleForm.area" @change="changeArea"
											:placeholder="$t('lang.pldselectarea')" style="margin-right: 10px;">
											<el-option :label="$t('lang.jiulong')" :value="$t('lang.jiulong')"></el-option>
											<el-option :label="$t('lang.wangjiao')" :value="$t('lang.wangjiao')"></el-option>
											<el-option :label="$t('lang.zhonghuan')" :value="$t('lang.zhonghuan')"></el-option>
										</el-select>
										<el-select v-model="ruleForm.street" :placeholder="$t('lang.pldselectstreet')">
											<el-option :label="$t('lang.Kowloon') + $t('lang.street')" @click.native="changeCen(22.8, 114.6)"
											v-if="ruleForm.area == $t('lang.jiulong')" :value="$t('lang.Kowloon') + $t('lang.street')"></el-option>
											<el-option :label="$t('lang.MongKok') + $t('lang.street')"  @click.native="changeCen(23.8, 114.6)"
											v-if="ruleForm.area == $t('lang.wangjiao')" :value="$t('lang.MongKok') + $t('lang.street')"></el-option>
											<el-option :label="$t('lang.Central') + $t('lang.street')"  @click.native="changeCen(22.8, 116.6)"
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
					</div>
                    <div class="addorcancel tc ju al" v-show="submit">
                        <div class="addorcancel_btn cursor" style="margin-right: 30px;" 
                        @click="addCombo">確認新增套餐</div>
                        <div class="addorcancel_btn cursor" @click="goBack">取消</div>
                    </div>  
                    
                    
				</div>
                <div class="basicsMsg boxs padding backWhite" v-show="!submit">
                    <div class="true_title al ju">
                        <img src="@/assets/img/success_sign.png" alt="">店鋪信息修改申請提交成功!
                    </div>
                    <div class="ju">您的店鋪信息修改申請已提交至後台，管理员将蛊快蕃核您的店鋪信息.</div>
                    <div class="iknow ju al">
                        <div class="cursor" @click="goBack">確定</div>
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
								<span class="l_time">{{item.packageName}}</span> <el-input-number @change="handleChange" 
								style="margin: 0 5px;width: 107px;" v-model="item.num"
								:min="1" :max="50" label="描述文字" size="mini"></el-input-number> 分鐘
								<el-button plain size="mini" style="margin-left: 7px;" @click.native="deleList(i)">刪除</el-button>
							</div>
						</el-form-item>
						<el-form-item label="超繁忙時段:">
							<div class="al size12 ju" v-for="(item,i) in addTimeList1" :key="i+16" style="margin-bottom: 15px;">
								<span class="l_time">{{item.packageName}}</span> <el-input-number @change="handleChange" 
								style="margin: 0 5px;width: 107px;" v-model="item.num"
								:min="1" :max="50" label="描述文字" size="mini"></el-input-number> 分鐘
								<el-button plain size="mini" style="margin-left: 7px;" @click.native="deleList1(i)">刪除</el-button>
							</div>
						</el-form-item>
						<el-form-item label="非繁忙時段:">
							<div class="al size12 ju" v-for="(item,i) in addTimeList2" :key="i+30" style="margin-bottom: 15px;">
								<span class="l_time">{{item.packageName}}</span> <el-input-number @change="handleChange" 
								style="margin: 0 5px;width: 107px;" v-model="item.num"
								:min="1" :max="50" label="描述文字" size="mini"></el-input-number> 分鐘
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
							<div class="popover_item noBar" ref='popover' v-if="clockList.length != 0">
								<el-form label-position="top"  ref="ruleForm" 
									:label-width="$i18n.locale == 'zh-CN'? '80px': '205px'" class="demo-ruleForm">
									<el-form-item label="繁忙時段">
										<el-checkbox-group v-model="checkedCities1" @change="group">
											<el-checkbox v-for="(item) in clockList[0].timeIntervalList" 
											:label="item" :key="item.id">{{item.packageName}}</el-checkbox>
										</el-checkbox-group>
									</el-form-item>
									<el-form-item label="超繁忙時段">
										<el-checkbox-group v-model="checkedCities11" @change="group1">
											<el-checkbox v-for="(item) in clockList[2].timeIntervalList" 
											:label="item" :key="item.id">{{item.packageName}}</el-checkbox>
										</el-checkbox-group>
									</el-form-item>
									<el-form-item label="繁忙時段">
										<el-checkbox-group v-model="checkedCities21" @change="group2">
											<el-checkbox v-for="(item) in clockList[1].timeIntervalList" 
											:label="item" :key="item.id">{{item.packageName}}</el-checkbox>
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
		<el-dialog
			:visible.sync="showVideo"
			width="90%"
			@close='closeVideo'>
			<video id="myVideo" class="video-js" :poster="Poster" v-if="videoWrap"
				:controls="Controls">
				<source :src="src" type="video/mp4">
			</video>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="closeVideo">确 定</el-button>
			</span>
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
import dimg from "@/assets/img/growing.jpg"
import mar from "@/assets/img/marker.png"
import areajs from "@/assets/js/area.js"
import { addCombo, previewAD } from "@/axios/request.js"
export default {
    data() {
        return {
			showVideo: false,
			videoWrap: false,
			videolong: false,
			preload: 'auto',  //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            src:'',               //视频的路径
            type: '',                //视频的类型
            Controls: true,              //确定播放器是否具有用户可以与之交互的控件
            Autoplay: '',              //是否自动播放
            Poster: '',       
			
			loading: false,

			showViewer: false, 
			showViewer1: false, 

			adList: [],
			adList1: [],
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



			position1: 'left-end',
			visible: false,
			drawer: false,
			drawer1: false,
			drawer2: false,
			direction: 'rtl',
			submit: true,
			video: true,
            radio: '1',
            radio1: '2',
			labelPosition: 'left',
            showType: '',
            ruleForm: {
                name: '',
                area: '',
                store: '',
                street: '',
                title: '',
                title1: '',
                title2: '',
                title3: '',
                lastPrice: '',
                ids: '100',
                // time: '',
				radio: '1',
                type: '',
				date: '',
                startDate: '',
				endDate: '',
                content: {
					value: ''
				},
				Price: '0',
				mediaType: '',
				inp: 1,
				videoMinute: 0,
				contentList: []
            },
            rules: {
                name: [
                    { required: true, message: '請輸入廣告名稱', trigger: 'blur' },
                    { min: 3, max: 15, message: '長度需3 到 15 個字符', trigger: 'blur' }
                ],
                area: [
                    { required: true, message: '請選擇投放區域', trigger: 'blur' }
                ], 
				radio: [
                    { required: true, message: '請選擇投放區域', trigger: 'blur' }
                ], 
				lastPrice: [
                    { required: true, message: '請輸入廣告計劃原價', trigger: 'blur' }
                ], 
				Price: [
                    { required: true, message: '請輸入廣告計劃原價', trigger: 'blur' }
                ], 
                store: [
                    { required: true, message: '請選擇店鋪', trigger: 'blur' }
                ],
				ids: [
                    { required: true, message: '請調整套餐折扣率', trigger: 'blur' }
                ],
                street: [
                    { required: true, message: '請選擇街道', trigger: 'blur' }
                ],
                title: [
                    { required: true, message: '請輸入標題', trigger: 'blur' }
                ],
                title2: [
                    { required: true, message: '請輸入標題', trigger: 'blur' }
                ],
                title1: [
                    { required: true, message: '請輸入標題描述', trigger: 'blur' }
                ],
                title3: [
                    { required: true, message: '請輸入標題描述', trigger: 'blur' }
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
                'content.value': [
                    { required: true, message: '請選擇媒體內容', trigger: 'blur' }
                ]
            },
			ruleForm1: {
				area: ''
			},
			rules1: {
				area: [
                    { required: true, message: '請選擇投放區域', trigger: 'blur' }
                ], 
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
                        return time.getTime() < Date.now() || time.getTime() < this.ruleForm.startDate;
                    } else {
                        return time.getTime() < Date.now();
                    }
                }
            },
            pickerOptions2: {
                disabledDate: (time) => {
                    return time.getTime() < this.ruleForm.startDate || time.getTime() < Date.now() + 8.64e7;
                }
            },
            value2: '',
			typeList: [],
			areaList: [],
			timeList: [],
			imageList: [],
			minute: [],
            storeList: [],
            streetList: [],
            map: '',
			bermudaTriangle: null,
            place: null,
			infowindow: null,
			deLight: [],
			last: [],
			dimg: '',
			dimg1: '',
			mapStoreListShow: [],

			totalContentLength: 0
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
        this.previewAD()
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
		}
		this.unbusyTimeList.push('23:00~00:00')
		let unh1 = -1
		let uns1 = 0
		for (let i=0;i<9;i++) {
			uns1 += 1
			unh1 += 1
			this.unbusyTimeList.push(unh1 + ':00~' + uns1 + ':00')
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
                }
            }
        },
		getTypeList: {
			handler (val) {
				if (val) {
					this.getTypeList = val
					this.$store.dispatch('getAddress',this) 
				}
			},
		},
		addressList: {
			handler (val) {
				if (val) {
					this.addressList = val
					this.getStore()
				}
			}
		},
		clockList: {
			handler (val) {
				if (val) {
					this.clockList = val
				}
			}
		},
		mapstoreList: {
			handler (val) {
				if (val) {
					this.mapStoreListShow = []
					this.mapstoreList = val
					val.forEach((child,i) => {
						child.area = '暫無地區'
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
							addressId: child.addressId
						})
					})
				}
			},
		},
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
        lang () { return this.$i18n.locale },
        getTypeList:{             //類型列表
			get () { return this.$store.state.user.typeList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'typeList',
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
		mapstoreList:{             //店鋪列表
			get () { return this.$store.state.user.storeList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'storeList',
					value: val
				})
			}
		},
		clockList: {             //時間列表
			get () { return this.$store.state.user.clockList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'clockList',
					value: val
				})
			}
		},
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
                    let obj = res.data.data
					this.ruleForm.name = obj.packageName
                    this.ruleForm.startDate = new Date(obj.startTime.split(' ')[0])
                    this.ruleForm.endDate = new Date(obj.endTime.split(' ')[0])
                    this.ruleForm.title = obj.titleOne
                    this.ruleForm.title1 = obj.titleOneContent
                    this.ruleForm.title2 = obj.titleTwo
                    this.ruleForm.title3 = obj.titleTwoContent
                    this.ruleForm.lastPrice = obj.oldPrice
                    this.ruleForm.Price = obj.presentPrice
                    this.ruleForm.ids = obj.concessionalRate
                    this.ruleForm.inp = obj['length']
                    this.ruleForm.type = obj.typeId
                    this.ruleForm.content = { value: obj.contentList[0] }
                    obj.contentList.splice(1,1)
                    obj.contentList.forEach(item => {
                        this.ruleForm.contentList.push({value: item})
                    })
                    obj.packageTimeInterVos.forEach(item => {
                        item.timeIntervalDetailsName.forEach(child => {
                            
                        })
                    })
                    this.getTypeList.forEach(item => {
                        if (item[0].id == obj.typeId) {
                            this.showType = item.find( key => key.language == "zh-TW") && this.$i18n.locale == "zh-CN" ? 
                            item.find( key => key.language == "zh-TW").guangGaoTypeName: 
                            item.find( key => key.language == "en-US").guangGaoTypeName
                        }
                    })
					this.storeList = obj.shopVoList
					this.storeList.forEach(child => {
						this.addressList.forEach(item => {
							if (item.addressParentId == child.id) {
								item.addressName
							}
						})
						child.type = 'info'
						child.position = new google.maps.LatLng(child.latitude,child.longitude)
						child.address = child.shopAddressName
						child.addressId = child.addressId
						child.addressParentId = child.addressParentId
						// child.area = "暫無地區"
						child.msg = child.shopName
						child.priceContents = child.priceContents
						child.shopId = child.shopId
						child.timeIntervalNames = child.timeIntervalNames
						child.typeNames = child.typeNames
						child.widthAndHeihth = child.widthAndHeihth

					})
				} else {
					this.$message({
						type: 'error',
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
		getStore () {
			let data = {
				parentAddressId: this.ruleForm1.area,
				shopName: '',
				addressId: '',
				typeId: this.ruleForm.type
			}
			this.$store.dispatch('getShopList',data)
		},
        getStore1 (id) {
            this.ruleForm.type = id
            this.getStore()
        },
		addCombo () {
			this.ruleForm.contentList.unshift(this.ruleForm.content)
			let con = []
			this.ruleForm.contentList.forEach(item => {
				con.push(item.value)
			})
			let arr = []
			let timeList = []
			this.storeList.forEach(item => {
				arr.push({
					"addressId": item.addressId,
					"addressParentId": item.addressParentId,
					"shopId": item.shopId
				})
			})
			this.adList1.forEach(item => {
				timeList.push({
					"guangGaoTimeMinDtos":[{
						"timeIntervalDetailsId": item.id,
						"timeMin": item.num
					}],
					"timeIntervalId": item.timeIntervalId,
					"totalMinLength": null
				})
			})
			let data = {
				guangGaoPackageDtoJson: {
					"concessionalRate": this.ruleForm.ids,
					"contentList": con,
					"endTime": String(new Date(this.ruleForm.endDate).toLocaleDateString().split('/').join('-')),
					// "guangGaotimeDtos":[{
					// 	"guangGaoTimeMinDtos":[{
					// 		"timeIntervalDetailsId":1,
					// 		"timeMin":5
					// 	}],
					// 	"timeIntervalId":1,
					// 	"totalMinLength":20
					// }],
					"guangGaotimeDtos": timeList,
					"length": Number(this.ruleForm.inp),
					"oldPrice": this.ruleForm.lastPrice,
					"packageName": this.ruleForm.name,
					"presentPrice": this.ruleForm.Price,
					// "shopAndAddressDtos":[{
					// 	"addressId":19,
					// 	"addressParentId":9,
					// 	"shopId":52
					// }],
					"shopAndAddressDtos": arr,
					"startTime": String(new Date(this.ruleForm.startDate).toLocaleDateString().split('/').join('-')),
					"titleOne": this.ruleForm.title,
					"titleOneContent": this.ruleForm.title1,
					"titleTwo": this.ruleForm.title2,
					"titleTwoContent": this.ruleForm.title3,
					"totalLength": Number(this.totalContentLength),
					"typeId": Number(this.ruleForm.type)
				}
			}
			let str = JSON.stringify(data.guangGaoPackageDtoJson)
				const qs = require('qs')
				let data1 = qs.stringify({
					guangGaoPackageDtoJson: str
				})
			addCombo(data1).then(res => {
				this.loading = false
				console.log(res)
				if (res.data.rtnCode == 200) {
					this.submit = false
				} else {
					this.$message({
						type: 'error',
						message: res.data.msg
					})
				}
			}).catch(e => {
				this.loading = false
				this.$message({
					type: 'error',
					message: '新增失敗'
				})
			})
		},
		imgPreview (url) {
			this.dimg1 = url
			this.showViewer1 = true
		},
		previewVideo (item) {
			console.log(item.url)
			this.src = item.url
			this.showVideo = true
			this.videoWrap = true
		},
		closeVideo () {
			this.showVideo = false
			this.videoWrap = false
		},
		enterPrice (val) {
			this.ruleForm.Price = Number(val) * this.ruleForm.ids/100
		},
		closeViewer1() {
          this.showViewer1 = false
        },
		enterIds (val) {
			this.ruleForm.Price = Number(this.ruleForm.lastPrice) * val/100
		},
		storehit (i) {
			let that = this
			let map = this.map
			const iconBase = mar
			const icons = {
				info: {
					icon: iconBase
				},
			};
			const features = this.mapStoreListShow
			features.forEach(item => {
				if (item.shopId == i.shopId) {
					// Create markers.
				if (that.$i18n.locale == 'zh-CN') {
					const marker1 = new google.maps.Marker({
						position: item.position,
						icon: 'info',
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
								<div class='bold tc'>${item.msg}(${item.area})</div>
								<div class="contentString1_address" 
								style="text-decoration: underline;
								font-size:12px;">${item.area}</div>
							</div>
						` + 
						`
							<div class="size12">
								<div>
									<span>廣告顯示的尺寸(${item.widthAndHeihth}):</span>
									<span style="color: blue;">2m × 1m</span>
								</div>
								<div>
									<span>為廣告商開放的可用時間:</span>
									<span style="color: blue;">${item.timeIntervalNames}</span>
								</div>
								<div>
									<span>廣告不接受的業務類型:</span>
									<span style="color: blue;">${item.typeNames}</span>
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
				} else if (that.$i18n.locale == 'en-US') {
					const marker1 = new google.maps.Marker({
						position: item.position,
						icon: 'info',
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
								<div class='bold tc'>${item.msg}(Mong Kok Store)</div>
								<div class="contentString1_address" 
								style="text-decoration: underline;
								font-size:12px;">HongKong street at six</div>
							</div>
						` + 
						`
							<div class="size12">
								<div>
									<span>廣告顯示的尺寸(${item.widthAndHeihth}):</span>
									<span style="color: blue;">2m × 1m</span>
								</div>
								<div>
									<span>為廣告商開放的可用時間:</span>
									<span style="color: blue;">${item.timeIntervalNames}</span>
								</div>
								<div>
									<span>廣告不接受的業務類型:</span>
									<span style="color: blue;">${item.typeNames}</span>
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
					}
				}
			})
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
			let data = {
				parentAddressId: '',
				shopName: '',
				addressId: '',
				typeId: ''
			}
			this.$store.dispatch('getShopList',data)
			this.storeList = []
			this.areaList = []
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
			let i = 0
			let arr = this.addTimeList.concat(this.addTimeList1.concat(this.addTimeList2))
			arr.forEach(item => {
				i = i + item.num
			})
			// if (i == this.ruleForm.inp) {
				this.adList1 = this.addTimeList.concat(this.addTimeList1.concat(this.addTimeList2))
				this.drawer2 = false
				this.totalContentLength = i
			// } else {
			// 	this.$message({
			// 		type: 'error',
			// 		message: '確認自定義時間等於投放時長'
			// 	})
			// }
		},
		changeArea (val) {
			this.ruleForm.street = ''
		},
        openDra (i) {
			if (i == 1) {
				this.drawer1 = true
			} else if (i == 2) {
				this.drawer2 = true
			}
		},
		changeCen (lat,lng) {
			this.map.panTo({ lat: lat,lng: lng });
		},
		initMap1 (lat,lng,val) {
			let that = this
			let boolean = true
			let map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: lat, lng: lng},
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
					lat: position.coords.latitude,
					lng: position.coords.longitude
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
		shopadd (item) {
			this.infowindow.close()
			if (item) {
				this.storeList.push(this.mapStoreListShow[item])
				let arr = new Set(this.storeList)
				this.storeList = Array.from(arr)
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
		changeLight (val) {
			this.getStore()
			
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
			this.delelightArea(this.bermudaTriangle)

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
			this.bermudaTriangle = bermudaTriangle
			bermudaTriangle.setMap(map);
		},
		delelightArea (bermudaTriangle) {
			if (bermudaTriangle) {
				bermudaTriangle.setMap(null);
			}
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
		addArea (id) {
			this.storeList = this.storeList.concat(this.mapStoreListShow) 
			var arr = this.storeList.filter(function(element,index,self){
				return self.findIndex(el => el.shopId == element.shopId ) === index  //如果是根据name去重就江id改为name
			})
			this.storeList = arr

			this.addressList.forEach(item => {
				if (item.id == id) {
					this.areaList.push(item)
				}
			})
			var arr1 = this.areaList.filter(function(element,index,self){
				return self.findIndex(el => el.id == element.id ) === index  //如果是根据name去重就江id改为name
			})
			this.areaList = arr1
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
		cahngeFile (e) {
			var files = e.target.files
			let that = this
			if (this.ruleForm.mediaType) {
				if (this.video) {
					if (this.ruleForm.mediaType == 'video') {
						
						if (e.target.files.length<=5 && this.imageList.length <= 5) {
							for(let ff=0;ff<e.target.files.length;ff++){
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
										let index = that.imageList.length -1
										setTimeout(() => {
											that.initialize(index)
										},200)
										
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
									this.ruleForm.videoMinute = 0
									for (let i=0;i<Array.from(this.minute).length;i++) {
										this.ruleForm.videoMinute = this.ruleForm.videoMinute*1 + this.minute[i]
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
				this.ruleForm.videoMinute = 0
				for (let i=0;i<Array.from(this.minute).length;i++) {
					this.ruleForm.videoMinute = this.ruleForm.videoMinute*1 + this.minute[i]
					this.$forceUpdate()
				}
				this.imageList.splice(i,1)
			} else {
				this.imageList.splice(i,1)
			}
		},
		initialize (ff) {
			var scale = 0.8;
			var output = this.$refs.output[ff]
			var video = this.$refs.video[ff]
			console.log(ff)
			video.addEventListener('loadeddata',this.captureImage(video,output,scale));
		},
		captureImage (video,output,scale) {
			setTimeout(() => {
				var canvas = document.createElement("canvas");
				canvas.width = video.videoWidth * scale;
				canvas.height = video.videoHeight * scale;
				canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
				var img = document.createElement("img");
				img.src = canvas.toDataURL("image/png");
				
				// img.width = 400;
				// img.height = 100;
				output.appendChild(img);
			},100)
		},
		addContentList () {
			this.ruleForm.contentList.push({ value: '' })
		},
		delContentList (i) {
			this.ruleForm.contentList.splice(i,1)
		}
    }
}
</script>

<style lang='less' scoped>
@import "@/less/style.less";
.true_title {
		font-size: 27px;
		padding-bottom: 50px;
		img {
			width: 35px;
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
.backWhite {
        background: white !important;
    }
.addorcancel {
        margin-top: 30px;
    }
    .addorcancel_btn {
        color: white;
        font-size: 16px;
        padding: 15px;
        width: 150px;
        background: #409EFF;
		border-radius: 5px;
    }
    .lastPrice {
        width: 75px;
        background: white;
        // border: solid 1px rgb(224, 224, 224);
    }
	.popover_item {
		height: 600px !important;
		overflow: auto;
		@media screen and (max-width: 1000px) and (max-height: 500px) {
            // font-size: 12px;
			height: 300px !important;
        }
	}
	.elradio {
		margin-left: 20px;
		margin-right: 15px !important;
		@media screen and (max-width: 564px) {
            margin-left: 0px !important;
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
	.elbtn {
		@media screen and (max-width: 352px) {
			margin-left: 0;
			transform: translate(0,-5px);
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
		@media screen and (max-width: 348px) {
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
	.media564 {
		@media screen and (max-width: 680px) {
			display: block;
		}
	}
    .inp_time {
		width: 105px;
		margin-right: 5px;
    }
	.inp_time1 {
		width: 70px;
		background: #F5F7FA;
		border: solid 1px #E4E7ED;
		color: rgb(168, 168, 168);
		height: 37px;
		// margin-left: 30px;
		margin-right: 5px;
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
	.size27 {
		font-size: 27px;
	}
	.size15 {
		font-size: 27px;
		@media screen and (max-width: 870px) {
			font-size: 17px;
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
	.list2 {
		margin-top: 10px;
		margin-left: -100px;
		@media screen and (max-width: 564px) {
			margin-left: 0px !important;
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