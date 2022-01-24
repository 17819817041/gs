<template>
    <div class="AdvertisingAdd AdvertisingAdd1" v-loading='loading'>
		<div class="AdvertisingOperation_back mg al">
            <img class="cursor" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="" @click="goBack">{{$t('lang.editAd')}}
        </div>
		<div class="noBar" style="height: calc(100% - 35px);overflow: auto;margin-top: 15px;">
			<div :class="['content mg noBar',{ heigh: !submit }]">
				<!-- <div class="content_title al"><img class="cursor" style="width: 25px;" @click="goBack" style="padding: 0 15px;" src="@/assets/img/back_arrow.png" alt="">新增廣告計劃</div> -->
				<div class="noBar" style="height: calc(100% - 0px); overflow:auto" v-show="submit">
					<div class="basicsMsg theme" v-show="submit">
						<div class=" basicsMsg_item bold al">
							<div class="iden radius"></div> {{$t("lang.message")}}
						</div>
						<el-form :model="ruleForm" :label-position="$i18n.locale == 'zh-CN'? labelPosition: 'top'" 
						:rules="rules" ref="ruleForm" 
						:label-width="$i18n.locale == 'zh-CN'? '100px': '165px'" class="demo-ruleForm">
							<el-form-item :label="$t('lang.adname')" prop="name">
								<el-input style="width: 40%;min-width: 200px;" v-model="ruleForm.name"></el-input>
							</el-form-item>
							<el-form-item :label="$t('lang.industry')" prop="type">
								<div class="flex br">
									<div class="flex">
										<el-select v-model="stype" :placeholder="$t('lang.pldselecttype')"
                                        @change="changeType">
											<el-option v-for="(item,i) in getTypeList" :key="i"
												:label='item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
												item.find( res => res.language == "zh-TW").guangGaoTypeName: 
												item.find( res => res.language == "en-US").guangGaoTypeName '
												:value="item">
											</el-option>
										</el-select>
										<!-- <div class="addCate cursor al" @click="addType(ruleForm.type)">
											{{$t("lang.addbtn")}}
										</div> -->
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
							<div :class="['flex br',{ br1185: $i18n.locale == 'en-US' }]">
								<el-form-item :label="$t('lang.admediatype')" prop="mediaType" style="margin-right: 30px;">
									<div class="al">
										<el-select v-model="msgType" :placeholder="$t('lang.pldselecttype')" 
										@change="getType">
											<el-option :label="$t('lang.image')" value="1" @click.native="videolong = false"></el-option>
											<el-option :label="$t('lang.video')" value="3" @click.native="videolong = true"></el-option>
										</el-select>
									</div>
								</el-form-item>
								<el-form-item :label="$t('lang.duration')" prop="inp" v-show="$i18n.locale == 'zh-CN'">
									<div :class="['al',{ mar20: $i18n.locale == 'zh-CN'  }]">
										<div class="al inp_time ju">
											<!-- <el-input-number v-model="ruleForm.inp" :step="10" step-strictly size="small" 
											:min="10" :max="900" label="描述文字" disabled></el-input-number> -->
											<el-input-number v-model="ruleForm.inp" :step="10" size="small" 
											:min="60" :max="900" label="描述文字"></el-input-number>
										</div>
										<div>{{$t('lang.minute')}}</div>
									</div>
								</el-form-item>
							</div>
							<el-form-item :label="$t('lang.duration')" prop="inp" v-show="$i18n.locale == 'en-US'">
								<div class="al">
									<div class="al inp_time ju">
										<el-input-number v-model="ruleForm.inp" :disabled="video" size="small" :step="10" step-strictly
										:min="60" :max="1000" label="描述文字"></el-input-number>
									</div>
									<div>{{$t('lang.minute')}}</div>
								</div>
							</el-form-item>
							<el-form-item :label="$t('lang.adcontent')" prop="imageList">
								<div :class="['textarea_wrap clear', { content_down: $i18n.locale == 'zh-CN' }]">
									<label for="uploadUrl">
										<input type="file" :id="id" @change="handleUpload" v-show="false">
										<div class="addFile ju al">
											<img src="@/assets/img/add.png" alt="">
											<el-progress v-show="imgFlag == true" type="circle" :percentage="percent"></el-progress>
										</div>
									</label>
									<div class="textarea_wrap_item float" v-for="(item,i) in ruleForm.imageList" :key="i">
										<div class="imageList_wrap cursor">
											<div class="deleImg radius ju al" @click.stop="deleImg(i)">
												<img style="heihgt: 100%;" src="@/assets/img/cha.png" alt="">
											</div>
											<div class="textarea_wrap_item_child ju al cursor">
												<img v-if="ruleForm.mediaType == 'image'"  @click="imgPreview(item.url)"
												style="height: 100%;" :src="item.url" alt="">

												<div class="video_outWrap" v-else-if="ruleForm.mediaType == 'video'">
													<img class="img" src="@/assets/img/start.png" alt="">
													<div class="cutImage ju al"><img style="height: 100%;" 
													@click="previewVideo(item)" :src="item.imageUrl" alt=""></div>
													<div class="videoImage ju al" id="output" ref="output">
														
													</div>
													<video class="width100" id="video1" ref="video"
														:controls="false">
														<source :src="item.url" type="video/mp4">
													</video>
												</div>
											</div>
										</div>
										<div class="imageList_name tc">{{item.fileName}}</div>
										<div class="imageList_size tc">{{item.fileSize}}</div>
										<div class="imageList_long tc" v-if="ruleForm.mediaType == 'video'"
										>時長：{{item.videoTime}}</div>
									</div>
								</div>
								<div :class="[{content_down1: $i18n.locale == 'zh-CN'}]" style='font-size: 12px;line-height: 15px;margin-top: 5px;'>{{$t('lang.becare')}}</div>
								<div :class="[{content_down1: $i18n.locale == 'zh-CN'}]" style='font-size: 12px; line-height: 15px;'>{{$t('lang.becare1')}}</div>
							</el-form-item>
							<el-form-item label="廣告視頻時長" prop="videoMinute" v-show="$i18n.locale == 'zh-CN'" v-if="videolong">
								<div class="al media564">
										<div class="al">
											<div class="al inp_time1 ju">
												{{ruleForm.videoMinute}}
											</div>
											<div style="font-size: 13px;margin-left: 5px; color: gray; margin-right: 17px;">
												{{$t('lang.minute')}}
											</div>
										</div>
										<div class="size12" style="color: gray;">( 媒體時長按每分鐘計數，不足一分鐘按一分鐘計算. )</div>
									</div>
							</el-form-item>
							<el-form-item :label="$t('lang.amt')">
								<div>
									<el-radio-group v-model="radio1" size="small" :class="[{marl: $i18n.locale == 'en-US' }]">
										<el-radio style="margin-right: 20px !important;" label="1" border>{{$t('lang.sate')}}</el-radio>
										<el-radio :class="[{ 'en_martop': $i18n.locale == 'en-US' }]" 
										style="margin-left: 0;margin-right: 15px !important;" label="2" border>{{$t('lang.cat')}}</el-radio>
									</el-radio-group> 
									<el-button type="primary" size="small" @click="openDra(radio1)"
									class="elbtn" v-show="radio1">{{$t('lang.sptime')}}</el-button>
								</div>
								<div class="list1 clear" v-show="radio1 == '1'">
									<div style="color: #B0B0B0;font-size: 13px;" class="list_itemjunfen ju float al" v-for="(item,i) in ruleForm.adList" :key="i">
										<span>{{item.packageName}} </span>
										<span class="" style="margin-left: 3px;">({{item.num}}分鐘)</span>
										<span class="al" style="margin-left: 5px">
											<img class="cursor" @click="deleItem(i)" src="@/assets/img/cha.png" alt="">
										</span>
									</div>
								</div>
								<div class="list1 clear" v-show="radio1 == '2'">
									<div style="color: #B0B0B0;font-size: 12px;" class="list_itemzdy float ju al" v-for="(item,i) in adList1" :key="i">
										<span>{{item.packageName}} </span>
										<span class="" style="margin-left: 3px;">({{item.num}}分鐘)</span>
										<span class="al" style="margin-left: 5px">
											<img class="cursor" @click="deleItem1(i)" src="@/assets/img/cha.png" alt="">
										</span>
									</div>
								</div>
							</el-form-item>
						</el-form>
					</div>
					<div class="detailPlan theme" v-show="submit">
						<div class=" basicsMsg_item bold al">
							<div class="iden radius"></div> {{$t("lang.DetailedPlan")}}
						</div>
						<el-form :label-position="$i18n.locale == 'zh-CN'? labelPosition: 'top'" 
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
						:rules="rules1" ref="ruleForm1" 
						:label-width="$i18n.locale == 'zh-CN'? '100px': '100px'" class="demo-ruleForm">
							<el-form-item :label="$t('lang.chooseStore')" 
								 v-show="radio == 1" style="position: relative;">
								<div class="fixedt"> (請在下放地圖選取店鋪)</div>
								<div class="flex br">
									<div style="color: #B0B0B0;" class="list_item float al cursor"
										@click="storehit(item)" 
										v-for="(item,i) in ruleForm1.storeList" :key="i">
										{{item.msg}} <span class="al" style="margin-left: 5px">
											<img class="cursor" @click.stop="deleStore(i)" src="@/assets/img/cha.png" alt="">
										</span>
									</div>
								</div>
							</el-form-item>
							<el-form-item :label="$t('lang.AdvertisingArea')" v-show="radio == 2">
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
						<div :class="['total mg sb',{ colorMsg: !btnActive }]">
							<div></div>
							<div class="total_price">
								<div class="t_price bold">
									<span>{{$t('lang.total')}}:</span><span class="math_price"> $ {{orderPrice.price}} </span><span class="p_d">HKD</span>
								</div>
								<div class="total_price_item">{{$t('lang.phprice')}}: ${{orderPrice.fMprice}} HKD</div>
								<div class="total_price_item">{{$t('lang.unphprice')}}: ${{orderPrice.fFMprice}} HKD</div>  
								<div class="total_price_item">{{$t('lang.sphprice')}}: ${{orderPrice.cFMprice}} HKD</div>
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
							<div class="sure_plan cursor" v-if="btnActive" @click="genOrder">計算價格</div>

							<el-button :class="['elbtnsure',{ colorMsg: !btnActive }]" v-else 
                            style="width: 150px;height: 50px;" @click.native="updateGuangGao"
								type="primary">{{$t('lang.adconfirm')}}</el-button>
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
		<el-drawer
			title="請選擇您需要投放的時間段"
			:visible.sync="drawer1"
			:direction="direction"
			:before-close="handleClose">
			<div class="dra_content noBar">
				<div>
					<el-form :label-position="labelPosition" v-if="clockList.length != 0"
						:label-width="$i18n.locale == 'zh-CN'? '80px': '205px'" class="demo-ruleForm">
						<el-form-item :label="clockList[0].timeIntervalName">
							<el-checkbox-group v-model="checkedCities" @change="adListadd">
								<el-checkbox v-for="(item,i) in clockList[0].timeIntervalList" :label="item" :key="i">{{item.packageName}}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item :label="clockList[2].timeIntervalName">
							<el-checkbox-group v-model="checkedCities12" @change="adsListadd">
								<el-checkbox v-for="(item,i) in clockList[2].timeIntervalList" :label="item" :key="i">{{item.packageName}}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item :label="clockList[1].timeIntervalName">
							<el-checkbox-group v-model="checkedCities2" @change="adunListadd">
								<el-checkbox v-for="(item,i) in clockList[1].timeIntervalList" :label="item" :key="i">{{item.packageName}}</el-checkbox>
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
								:min="1" :max="100" label="描述文字" size="mini"></el-input-number> 分鐘
								<el-button plain size="mini" style="margin-left: 7px;" @click.native="deleList(i)">刪除</el-button>
							</div>
						</el-form-item>
						<el-form-item label="超繁忙時段:">
							<div class="al size12 ju" v-for="(item,i) in addTimeList1" :key="i+16" style="margin-bottom: 15px;">
								<span class="l_time">{{item.packageName}}</span> <el-input-number @change="handleChange" 
								style="margin: 0 5px;width: 107px;" v-model="item.num"
								:min="1" :max="100" label="描述文字" size="mini"></el-input-number> 分鐘
								<el-button plain size="mini" style="margin-left: 7px;" @click.native="deleList1(i)">刪除</el-button>
							</div>
						</el-form-item>
						<el-form-item label="非繁忙時段:">
							<div class="al size12 ju" v-for="(item,i) in addTimeList2" :key="i+30" style="margin-bottom: 15px;">
								<span class="l_time">{{item.packageName}}</span> <el-input-number @change="handleChange" 
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
							<div class="popover_item noBar" ref='popover'>
								<el-form label-position="top"  v-if="clockList.length != 0"
									:label-width="$i18n.locale == 'zh-CN'? '80px': '205px'" class="demo-ruleForm">
									<el-form-item :label="clockList[0].timeIntervalName">
										<el-checkbox-group v-model="checkedCities1" @change="group">
											<el-checkbox v-for="(item,i) in clockList[0].timeIntervalList" 
											:label="item" :key="i+1">{{item.packageName}}</el-checkbox>
										</el-checkbox-group>
									</el-form-item>
									<el-form-item :label="clockList[2].timeIntervalName">
										<el-checkbox-group v-model="checkedCities11" @change="group1">
											<el-checkbox v-for="(item,i) in clockList[2].timeIntervalList" 
											:label="item" :key="i+2">{{item.packageName}}</el-checkbox>
										</el-checkbox-group>
									</el-form-item>
									<el-form-item :label="clockList[1].timeIntervalName">
										<el-checkbox-group v-model="checkedCities21" @change="group2">
											<el-checkbox v-for="(item,i) in clockList[1].timeIntervalList" 
											:label="item" :key="i">{{item.packageName}}</el-checkbox>
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
import  axios  from 'axios'
import Client from '@/utils/client'
import { genOrder, gaode, gerArea, getShopList, updateGuangGao,
submit, getGuangGaoDetailsById, getPriceByGuangGaoId } from "@/axios/request.js"
export default {
    data() {
        return {
			uploadHeaders: {
				authorization: '*'
			},
			region: 'oss-cn-beijing',
			bucket: '',//这里选择OSS容器
			url: '',//后台获取token地址
			ClientObj: null,
			id: 'uploadUrl',
			urls:[],
			getToken:{
				sign:'',
			},

			listLength: 1,
			orderPrice: {
				"price": 0,
				"fMprice": 0,
				"fFMprice": 0,
				"cFMprice": 0
			},
			gen: '',
			imageUrl: '',
			imgFlag: false,
			percent: 0,
			btnActive: true,
			showVideo: false,
			videoWrap: false,
			videolong: false,
			preload: 'auto',  //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            src:'',               //视频的路径
            type: '',                //视频的类型
            Controls: true,              //确定播放器是否具有用户可以与之交互的控件
            Autoplay: '',              //是否自动播放
            Poster: '',         

			showViewer: false, 
			showViewer1: false, 

			
			adList1: [],
			copy1: [],
			copy2: [],
			copy3: [],

			addTimeList: [],
			addTimeList1: [],
			addTimeList2: [],

			checkedCities: [],

			checkedCities1: [],

			checkedCities12: [],

			checkedCities11: [],

			checkedCities2: [],

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
            radio1: '1',
			labelPosition: 'left',
            ruleForm: {
                name: '',
				date: 'full',
                // store: '',
                // street: '',
                // time: '',
				adList: [],
                type: '',
                startDate: '',
				endDate: '',
                content: '',
				mediaType: '',
				cmediaType: '',
				cmediaType1: 1,
				imageList: [],
				inp: 60,
				videoMinute: 1
            },
            stype: '',
            msgType: '',



            rules: {
                name: [
                    { required: true, message: '請輸入廣告名稱', trigger: 'blur' },
                    { min: 3, max: 15, message: '長度需3 到 15 個字符', trigger: 'blur' }
                ],
                store: [
                    { required: true, message: '請選擇店鋪', trigger: 'blur' }
                ],
				date: [
					{ required: true, message: '', trigger: 'change' }
				],
				
                // street: [
                //     { required: true, message: '請選擇街道', trigger: 'blur' }
                // ],
                // time: [
                //     { required: true, message: '請選擇时间段', trigger: 'blur' }
                // ],
                type: [
                    { required: true, message: '請選擇媒體類型', trigger: 'blur' }
                ], 
				mediaType: [
                    { required: true, message: '請選擇媒體類型', trigger: 'blur' }
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
                ],
				imageList: [
					{ required: true, message: '請添加媒體內容', trigger: 'change' }
				],
            },
			ruleForm1: {
				area: '',
				storeList: []
			},
			rules1: {
				area: [
                    { required: true, message: '請選擇投放區域', trigger: 'blur' }
                ], 
				storeList: [
                    { required: true, message: '請選擇店鋪', trigger: 'change' }
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
			
			minute: [],
            
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
			totalContentLength: 0,

			loading: false
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
		this.getPriceByGuangGaoId()
		this.$store.dispatch('getuploadtoken')
		this.dimg = dimg
	},
    mounted () {
		this.$store.dispatch('getTimeIntervaDetailslList',this)
		this.$store.dispatch('getTypeList',this)
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
						that.initMap1(22.33,114.17,1)
					})
					if (val == 'zh-CN') {
						if (this.ruleForm.cmediaType == 'image') {
							this.ruleForm.cmediaType = '圖片'
						}else if (this.ruleForm.cmediaType == 'video') {
							this.ruleForm.cmediaType = '視屏'
						}
					} else if (val == 'en-US') {
						if (this.ruleForm.cmediaType == '圖片') {
							this.ruleForm.cmediaType = 'image'
						}else if (this.ruleForm.cmediaType == '視屏') {
							this.ruleForm.cmediaType = 'video'
						}
					}
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
                    this.getGuangGaoDetailsById()
				}
			}
		},
		mapstoreList: {
			handler (val) {
				let that = this
				if (val) {
					this.$nextTick(() => {
						that.mapStoreListShow = []
						that.mapstoreList = val
						val.forEach((child,i) => {
							child.area = '暫無地區'
							that.addressList.forEach(item => {
								if (child.addressParentId == item.id) {
									child.area = item.addressName
								}
							})
							that.mapStoreListShow.push({
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
						that.initMap1(22.33,114.17,1)
					})
				}
			},
		},
		ossData: {
			handler (val) {
				if (val) {
					this.ossData = val
				}
			},
		},
		percent: {
			handler (val) {
				if (val == 75) {
					const interval1 = setInterval(() => {
						if (this.percent >= 99) {
							clearInterval(interval1)
							return
						}
						this.percent += 1 //进度条进度
					}, 350)
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
		ossData: {
			get () { return this.$store.state.user.ossData },
			set (val) {
				this.$store.commit('setUser', {
					key: 'ossData',
					value: val
				})
			}
		}
    },
    methods: {
		getPriceByGuangGaoId () {
			let data = {
				guangGaoId: this.$route.query.id
			}
			getPriceByGuangGaoId(data).then(res => {
				console.log(res)
				if (res.data.rtnCode == 200) {
					this.orderPrice.price = res.data.data.price
					this.orderPrice.cFMprice = res.data.data.cfmPrice
					this.orderPrice.fFMprice = res.data.data.ffmPrice
					this.orderPrice.fMprice = res.data.data.fmPrice
				}
			})
		},
        updateGuangGao () {
            let arr = []
            this.loading = true	
            this.ruleForm.imageList.forEach(item => {
                arr.push({
                    "fileType": Number(this.ruleForm.cmediaType1),
                    "url": item.url,
                    "fileName": item.name,
                    "fileSize": item.size,
                    "filePlayTime": item.videoTime
                })
            })
            let shopAndAddressDtos = []
            this.ruleForm1.storeList.forEach(item => {
                shopAndAddressDtos.push({
                    "addressId": Number(item.addressId),
                    "addressParentId": Number(item.addressParentId),
                    "shopId": Number(item.shopId)
                })
            })
            let timeArr = []
            if (this.radio1 == '2') {
                let clock = []
                if (this.addTimeList.length != 0) { clock.push(this.addTimeList) }
                if (this.addTimeList1.length != 0) { clock.push(this.addTimeList1) }
                if (this.addTimeList2.length != 0) { clock.push(this.addTimeList2) }
                clock.forEach(item => {
                    let arrc = []
                    let total = 0
                    item.forEach(child => {
                        total += child.num
                        arrc.push({
                            "timeIntervalDetailsId": child.id,
                            "timeMin": child.num
                            // "timeMin": 2
                        })
                    })
                    timeArr.push({
                        "guangGaoTimeMinDtos": arrc,
                        "timeIntervalId": item[0].timeIntervalId,
                        "totalMinLength": total
                        // "totalMinLength": 20
                    })
                })
            } else if (this.radio1 == '1') {
                let clock = []
                if (this.copy1.length != 0) { clock.push(this.copy1) }
                if (this.copy2.length != 0) { clock.push(this.copy2) }
                if (this.copy3.length != 0) { clock.push(this.copy3) }

                clock.forEach(item => {
                    let arrc = []
                    let total = this.ruleForm.inp/this.ruleForm.adList.length
                    item.forEach(child => {
                        arrc.push({
                            "timeIntervalDetailsId": child.id,
                            "timeMin": child.num
                        })
                    })
                    timeArr.push({
                        "guangGaoTimeMinDtos": arrc,
                        "timeIntervalId": item[0].timeIntervalId,
                        "totalMinLength": total
                    })
                })
            }
            let data = {
                guangGaoDtoJson: {
                    "endTime": String(new Date(this.ruleForm.endDate).toLocaleDateString().split('/').join('-')),
                    "guangGaoAddressAndTimeDto": {
                        "guangGaoTimeDtos": timeArr,
                        "shopAndAddressDtos": shopAndAddressDtos
                    },
                    "guangGaoContentDto": arr,
                    "length": this.ruleForm.videoMinute,
                    "startTime": String(new Date(this.ruleForm.startDate).toLocaleDateString().split('/').join('-')),
                    "title": this.ruleForm.name,
                    "totalLength": this.ruleForm.inp, 
                    "type": 1,    //精準
                    "typeId": this.ruleForm.type,
                    "userId": localStorage.getItem('compoundeyesUserId')
                },
            }
			
            let str = JSON.stringify(data.guangGaoDtoJson)
            const qs = require('qs')
            let data1 = qs.stringify({
                guangGaoDtoJson: str,
                guangGaoId: Number(this.$route.query.id)
            })
            updateGuangGao(data1).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
					this.$message({
						type: 'success',
						message: this.$t('lang.editSuccess')
					})
					this.submit = false
				} else {
					this.$message({
						type: 'error',
						message: this.$t('lang.editError')
					})
				}
			}).catch(e => {
				this.loading = false
				this.$message({
					type: 'error',
					message: this.$t('lang.editError')
				})
			})
        },
        getGuangGaoDetailsById () {
            let data = {              
                guangGaoId: this.$route.query.id
            }
            getGuangGaoDetailsById(data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    let obj = res.data.data
                    this.ruleForm.name = obj.title
                    this.ruleForm.type = obj.typeId
                    this.getTypeList.forEach(item1 => {
						item1.forEach(child => {
							if (child.id == res.data.data.typeId && child.language == 'zh-TW' && this.$i18n.locale == 'zh-CN') {
								this.stype = child.guangGaoTypeName
							} else if (child.id == res.data.data.typeId && child.language == 'en-US' && this.$i18n.locale == 'en-US') {
								this.stype = child.guangGaoTypeName
							}
						})
					})
                    this.ruleForm.startDate = new Date(obj.startTime)
					this.ruleForm.endDate = new Date(obj.endTime)
                    this.ruleForm.cmediaType = obj.guangGaoContentDto[0].fileType
                    if (obj.guangGaoContentDto[0].fileType == 1) {
                        this.msgType = this.$t('lang.image')
                        this.ruleForm.mediaType = 'image'
                    } else {
                        if (obj.guangGaoContentDto[0].fileType == 3) {
                            this.msgType = this.$t('lang.video')
                            this.ruleForm.mediaType = 'video'
                        }
                    }
                    this.ruleForm.inp = obj.totalLength
                    this.ruleForm.imageList = obj.guangGaoContentDto
                    this.clockList.forEach(item1 => {
						item1.timeIntervalList.forEach(child => {
							if (obj.guangGaoAddressAndTimeDto) {
								if (obj.guangGaoAddressAndTimeDto.guangGaoTimeDtos) {
									obj.guangGaoAddressAndTimeDto.guangGaoTimeDtos.forEach(val => {
										val.guangGaoTimeMinDtos.forEach(last => {
											if (child.id == last.timeIntervalDetailsId) {
												last.packageName = child.packageName
											}
										})
									})
								}
							}
						})
					})
                    if (obj.guangGaoAddressAndTimeDto) {
						if (obj.guangGaoAddressAndTimeDto.guangGaoTimeDtos) {
							obj.guangGaoAddressAndTimeDto.guangGaoTimeDtos.forEach(item => {
								item.guangGaoTimeMinDtos.forEach(res => {
									this.ruleForm.adList.push({
										id: res.timeIntervalDetailsId,
										num: res.timeMin,
										packageName: res.packageName,
										timeIntervalId: item.timeIntervalId
									})
								})
							})
							this.ruleForm.adList.forEach(item => {
								if (item.timeIntervalId == 1) {
									this.addTimeList.push(item)
									this.copy1.push(item)
								} else if (item.timeIntervalId == 2) {
									this.addTimeList2.push(item)
									this.copy3.push(item)
								} else if (item.timeIntervalId == 3) {
									this.addTimeList1.push(item)
									this.copy2.push(item)
								}
							})
						}
                       
					}
                    if (res.data.data.guangGaoAddressAndTimeDto.shopVoList.length != 0) {
						res.data.data.guangGaoAddressAndTimeDto.shopVoList.forEach(child => {
							this.addressList.forEach(item1 => {
								if (child.addressParentId == item1.id) {
									child.area = item1.addressLanguageDtos
                                    .find( res => res.language == "zh-TW") && this.$i18n.locale == "zh-CN" ? 
									item1.addressName: 
									item1.addressName
								}
								child.position = new google.maps.LatLng(child.latitude,child.longitude),
								child.type= "info",
								child.msg= child.shopName,
								child.area= child.area,
								child.address= child.shopAddressName,
								child.widthAndHeihth= child.widthAndHeihth,
								child.shopId= child.shopId,
								child.timeIntervalName= child.timeIntervalNames,
								child.typeNames= child.typeNames,
								child.priceContents= child.priceContents,
								child.addressParentId= child.addressParentId,
								child.addressId= child.addressId,
								child.images= child.images
							})
						})
						this.ruleForm1.storeList = res.data.data.guangGaoAddressAndTimeDto.shopVoList
					}
                }
            })
        },
        changeType (val) {
            this.ruleForm.type = val[0].id
        },
		getStore () {
			let data = {
				parentAddressId: this.ruleForm1.area,
				shopName: '',
				addressId: this.ruleForm1.area,
				typeId: this.ruleForm.type
			}
			this.$store.dispatch('getShopList',data)
		},
		genOrder () {    //tinajie
			let that = this
			let boo = false
			let boo1 = false
			// let boo = true
			// let boo1 = true
			this.$refs.ruleForm.validate(flag => {
                if (flag) { boo = true }
            })
			this.$refs.ruleForm1.validate(flag => {
				if (flag) { boo1 = true }
			})
			if (boo && boo1) {
				let arr = []
				this.loading = true	
				this.ruleForm.imageList.forEach(item => {
					if (item.filePlayTime === null) {
						item.filePlayTime = ''
					}
					arr.push({
						"fileType": Number(this.ruleForm.cmediaType1),
						"url": item.url,
						"fileName": item.fileName,
						"fileSize": item.fileSize,
						"filePlayTime": item.filePlayTime
					})
				})
				let shopAndAddressDtos = []
				this.ruleForm1.storeList.forEach(item => {
					shopAndAddressDtos.push({
						"addressId": Number(item.addressId),
						"addressParentId": Number(item.addressParentId),
						"shopId": Number(item.shopId)
					})
				})
				let timeArr = []
				if (this.radio1 == '2') {
					let clock = []
					if (this.addTimeList.length != 0) { clock.push(this.addTimeList) }
					if (this.addTimeList1.length != 0) { clock.push(this.addTimeList1) }
					if (this.addTimeList2.length != 0) { clock.push(this.addTimeList2) }
					clock.forEach(item => {
						let arrc = []
						let total = 0
						item.forEach(child => {
							total += child.num
							arrc.push({
								"timeIntervalDetailsId": child.id,
								"timeMin": child.num
								// "timeMin": 2
							})
						})
						timeArr.push({
							"guangGaoTimeMinDtos": arrc,
							"timeIntervalId": item[0].timeIntervalId,
							"totalMinLength": total
							// "totalMinLength": 20
						})
					})
				} else if (this.radio1 == '1') {
					let clock = []
					if (this.copy1.length != 0) { clock.push(this.copy1) }
					if (this.copy2.length != 0) { clock.push(this.copy2) }
					if (this.copy3.length != 0) { clock.push(this.copy3) }
					clock.forEach(item => {
						let arrc = []
						let total = this.ruleForm.inp/this.ruleForm.adList.length
						item.forEach(child => {
							arrc.push({
								"timeIntervalDetailsId": child.id,
								"timeMin": child.num
							})
						})
						timeArr.push({
							"guangGaoTimeMinDtos": arrc,
							"timeIntervalId": item[0].timeIntervalId,
							"totalMinLength": total
						})
					})
				}
				let data = {
					guangGaoDtoJson: {
						"endTime": String(new Date(this.ruleForm.endDate).toLocaleDateString().split('/').join('-')),
						"guangGaoAddressAndTimeDto": {
							"guangGaoTimeDtos": timeArr,
							"shopAndAddressDtos": shopAndAddressDtos
						},
						"guangGaoContentDto": arr,
						"length": this.ruleForm.videoMinute,
						"startTime": String(new Date(this.ruleForm.startDate).toLocaleDateString().split('/').join('-')),
						"title": this.ruleForm.name,
						"totalLength": this.ruleForm.inp, 
						"type": 1,    //精準
						"typeId": this.ruleForm.type,
						"userId": localStorage.getItem('compoundeyesUserId')
					},
				}
				// console.log(data.guangGaoDtoJson)
				// return
				let str = JSON.stringify(data.guangGaoDtoJson)
				const qs = require('qs')
				let data1 = qs.stringify({
					guangGaoDtoJson: str
				})
				genOrder(data1).then(res => {
					that.loading = false
					if (res.data.rtnCode == 200) {
						this.gen = data1
						this.orderPrice = res.data.data
						this.btnActive = false
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
						message: this.$t('lang.addFail')
					})
				})
			}
		},
		submitMsg () {
			let that = this
			this.loading = true
			let data = this.gen
			submit(data).then(res => {
				this.loading = false
				if (res.data.rtnCode == 200) {
					this.$message({
						type: 'success',
						message: that.$t('lang.addSuccess')
					})
					this.submit = false
				} else {
					this.$message({
						type: 'error',
						message: this.$t('lang.addFail')
					})
				}
			}).catch(e => {
				this.loading = false
				this.$message({
					type: 'error',
					message: this.$t('lang.addFail')
				})
			})
		},


		doUpload () {
			const _this = this;
			let that = this
			axios('https://compoundeyes.hk/api/oss/token',_this.getToken).then((result) => {
				this.ossData = result.data.data
				let oss = {
					region: 'oss-cn-hongkong',
					bucket: this.ossData.buketName,
					accessKeyId: this.ossData.accessKeyId,
					accessKeySecret: this.ossData.accessKeySecret,
					stsToken: this.ossData.securityToken
				}
				var client = Client(oss)
				_this.percentage = 0;
				_this.imgFlag = true
				const files = document.getElementById(_this.id)
				if (files.files) {
					const fileLen = document.getElementById(_this.id).files
					for (let i = 0; i < fileLen.length; i++) {
						const file = fileLen[i]
						file.uid = new Date().getTime()
						// 随机命名
						let random_name = 'File' + new Date().getTime() + '.' + file.name.split('.').pop()
						// 上传
						this.imgFlag = true //进度条显示
						const interval = setInterval(() => {
							if (_this.percent >= 75) {
								clearInterval(interval)
								return
							}
							this.percent += 1 //进度条进度
						}, 160)
						client.multipartUpload(random_name, file, {
							progress: function* (percentage, cpt) {
								// 上传进度
								// _this.percent = percentage
							}
						}).then((res) => {
							if (res.res.statusCode == 200) {
								let size
								if (file.size >= 1000000) {
									var s = file.size/1000000
									size = s.toFixed(1) + 'M'
									// size = Math.ceil(files[ff].size/1000000) + 'm'
								} else {
									var s = file.size/1000
									size = s.toFixed(0) + 'KB'
									// size = Math.ceil(files[ff].size/1000) + 'kb'
								}
								this.percent = 100;
								setTimeout(() => {
									that.imgFlag = false;
									that.percent = 0;
								},1000)
								if (that.ruleForm.mediaType == 'video') {
									let audioElement = new Audio(res.res.requestUrls[0].split('?')[0]);
									audioElement.addEventListener("loadedmetadata", function (_event) {
										var time = Math.ceil(audioElement.duration)
										console.log(time)
										var sTime = parseInt(time);// 秒
										var mTime = 0;// 分
										if ( sTime > 60 ) {//如果秒数大于60，将秒数转换成整数
											//获取分钟，除以60取整数，得到整数分钟
											mTime = parseInt(sTime / 60);
											//获取秒数，秒数取佘，得到整数秒数
											sTime = parseInt(sTime % 60);
										}
										that.ruleForm.imageList.push({ 
											url: res.res.requestUrls[0].split('?')[0], 
											name: res.name, 
											size: size, 
											time: time,
											videoTime: mTime + '分' + sTime + '秒'
										})
										let obj = {
											url: res.res.requestUrls[0].split('?')[0], 
											name: res.name, 
											size: size, 
											time: time,
											videoTime: mTime + '分' + sTime + '秒'
										}
										let index = that.ruleForm.imageList.length -1
										setTimeout(() => {
											that.initialize(index,obj)
										},200)
										// that.minute.push(Math.ceil(audioElement.duration))
										that.minute.push(time)
										that.$forceUpdate()
									});
								} else if (that.ruleForm.mediaType == 'image') {
									that.ruleForm.imageList.push({ 
										// url: res.res.requestUrls[0], 
										url: 'http://osshongk.oss-cn-hongkong.aliyuncs.com/'+res.name,
										name: res.name, 
										size: size, 
										time: null, 
										videoTime: null
									})
								}
								return res.res.requestUrls
							} else {
								that.$message.error('上传附件失败！');
							}
							// 上传完成
							// const url = 'http://osshongk.oss-cn-hongkong.aliyuncs.com/'+res.name; 
							// _this.$store.dispatch("changeUrl", _this.url); 
							// _this.url = url; 
							// console.log(url); 
						}).catch((err) => { console.log(err) }) 
					} 
				} 
			}) 
		}, 
        handleUpload(e){
			let file = e.target.files[0]
			if (this.ruleForm.mediaType == 'image') {
				let boo = false
				if (this.ruleForm.imageList.length <= 10 ) { boo = true }

				if (boo) {
					var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
					const extension =  testmsg === 'png' || testmsg === 'jpeg' || testmsg === 'gif' || testmsg === 'jpg'

					const isLimit10M = file.size / 1024 / 1024 < 3
					var bool = false;
					if (extension && isLimit10M) { bool = true; } else { bool = false; }
					if (!extension) {
						this.$message.error('請選擇圖片文件！');
						return bool;
					}
					if (!isLimit10M) {
						this.$message.error('上傳失敗，不能超過3M！');
						return bool;
					}
					if (bool) {
						this.doUpload()
					}
					return bool;
				}
				
			} else if (this.ruleForm.mediaType == 'video') {
				let boo = false
				if ( this.ruleForm.imageList.length <= 5 ) { boo = true }

				if (boo) {
					var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
					const extension = testmsg === 'mp4'

					const isLimit10M = file.size / 1024 / 1024 < 100
					var bool = false;
					if (extension && isLimit10M) { bool = true; } else { bool = false; }
					if (!extension) {
						this.$message.error('請選擇視頻文件！');
						return bool;
					}
					if (!isLimit10M) {
						this.$message.error('上傳失敗，不能超過100M！');
						return bool;
					}
					if (bool) {
						this.doUpload()
					}
					return bool;
				}
			} else {
				this.$message.warning('請選擇媒體廣告類型')
			}
        },
		initialize (ff, obj) {
			var scale = 0.8;
			var output = this.$refs.output[ff]
			var video = this.$refs.video[ff]
			// console.log(ff)
			video.addEventListener('loadeddata',this.captureImage(video,output,scale, obj));
		},
		captureImage (video,output,scale,obj) {
			let that = this
			setTimeout(() => {
				var canvas = document.createElement("canvas");
				canvas.width = video.videoWidth * scale;
				canvas.height = video.videoHeight * scale;
				canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
				var img = document.createElement("img");
				img.src = canvas.toDataURL("image/png");
				canvas.toBlob(function (blob) {
					console.log(blob)
					let files = new window.File([blob], 'image.png', {type: blob.type})
					files.uid = new Date().getTime()
					that.cutVideo(files,obj)
				})
				// img.width = 400;
				// img.height = 100;
				output.appendChild(img);
			},100)
		},
		async cutVideo(options,obj) {
			let that = this
            try {
                let file = options; // 拿到 file
				console.log(file)
				let oss = {
					region: 'oss-cn-hongkong',
					bucket: that.ossData.buketName,
					accessKeyId: that.ossData.accessKeyId,
					accessKeySecret: that.ossData.accessKeySecret,
					stsToken: that.ossData.securityToken
				}
				var client = Client(oss)
				var random_name = 'image' + new Date().getTime();
				// 分片上传文件
				await client.multipartUpload(random_name, file, {
					
				}).then(res => {
					let url = res.res.requestUrls[0].split('?')[0]
					obj.imageUrl = url
					that.ruleForm.imageList.forEach(item => {
						if (item.url == obj.url) {
							console.log(item)
							item.imageUrl = obj.imageUrl
						}
					})
				})
				that.$forceUpdate()
                // 返回数据
                // this.$emit("fileData", res);
                that.$message.success("視頻截幀成功！");
            } catch (e) {
                that.$message.error('上传附件失败！');
            }
        },



		

		imgPreview (url) {
			this.dimg1 = url
			this.showViewer1 = true
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
		closeViewer1() {
          this.showViewer1 = false
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
			if (i == '1') {
				this.initMap1(22.32,114.17,1)
			} else if (i == '2') {
				this.initMap1(22.32,114.17,2)
			} else if (i == '3') {
				this.initMap1(22.32,114.17,3)
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
		deleItem (k) {
			for (let i=0;i<this.checkedCities.length;i++) {
				if (this.checkedCities[i].packageName == this.ruleForm.adList[k].packageName) {
					this.checkedCities.splice(i,1) 
				}
				if (this.copy1[i].packageName == this.ruleForm.adList[k].packageName) {
					this.copy1.splice(i,1) 
				}
			}
			for (let i=0;i<this.checkedCities12.length;i++) {
				if (this.checkedCities12[i].packageName == this.ruleForm.adList[k].packageName) {
					this.checkedCities12.splice(i,1) 
				}
				if (this.copy2[i].packageName == this.ruleForm.adList[k].packageName) {
					this.copy2.splice(i,1) 
				}
			}
			for (let i=0;i<this.checkedCities2.length;i++) {
				if (this.checkedCities2[i].packageName == this.ruleForm.adList[k].packageName) {
					this.checkedCities2.splice(i,1) 
				}
				if (this.copy3[i].packageName == this.ruleForm.adList[k].packageName) {
					this.copy3.splice(i,1) 
				}
			}
			this.ruleForm.adList.splice(k,1)
		},
		deleItem1 (k) {
			for (let i=0;i<this.addTimeList.length;i++) {
				if (this.addTimeList[i].packageName == this.adList1[k].packageName) {
					this.addTimeList.splice(i,1) 
				}
				if (this.checkedCities1[i].packageName == this.adList1[k].packageName) {
					this.checkedCities1.splice(i,1) 
				}
			}
			for (let i=0;i<this.addTimeList1.length;i++) {
				if (this.addTimeList1[i].packageName == this.adList1[k].packageName) {
					this.addTimeList1.splice(i,1) 
				}
				if (this.checkedCities11[i].packageName == this.adList1[k].packageName) {
					this.checkedCities11.splice(i,1) 
				}
			}
			for (let i=0;i<this.addTimeList2.length;i++) {
				if (this.addTimeList2[i].packageName == this.adList1[k].packageName) {
					this.addTimeList2.splice(i,1) 
				}
				if (this.checkedCities21[i].packageName == this.adList1[k].packageName) {
					this.checkedCities21.splice(i,1) 
				}
			}
			this.adList1.splice(k,1)
		},
		sureaddadList () {
			this.ruleForm.adList = this.copy1.concat(this.copy2.concat(this.copy3))
            this.ruleForm.adList.forEach(item => {
                item.num =  Math.floor(this.ruleForm.inp/this.ruleForm.adList.length)
            })
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
				this.ruleForm.inp = i
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
		
		changeCen (lat,lng) {
			this.map.panTo({ lat: lat,lng: lng });
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
			// map.addListener('click', function(e) {   //点击获取经纬度
			// 	console.log(e.latLng.lat(),e.latLng.lng()); 
			// 	let data = {
			// 		key: '66b48ee066b6ada810d662b110cfc463',
			// 		location: String(e.latLng.lng()) + ',' + String(e.latLng.lat())
			// 	}
			// 	gaode(data).then(res => {
			// 		console.log(res)    //地理解析，详细地址
			// 	})
			// });
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
				this.ruleForm1.storeList.push(this.mapStoreListShow[item])
				let arr = new Set(this.ruleForm1.storeList)
				this.ruleForm1.storeList = Array.from(arr)
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
		changeLight (id) {
			let areaName
			this.addressList.forEach(item => {
				if (id == item.id) {
					areaName = item.addressLanguageDtos.find( res => res.language == "zh-TW") ? 
					item.addressLanguageDtos.find( res => res.language == "zh-TW").addressName: 
					item.addressLanguageDtos.find( res => res.language == "en-US").addressName
				}
			})
			
			let data = {
				// keywords: areaName,
				id: 810000,
				// keyword: areaName,
				// key: '66b48ee066b6ada810d662b110cfc463',
				key: 'SXXBZ-ZPCKD-GI24C-HLC2D-YUKYS-LYFLK',
				get_polygon: 2,
				max_offset: 100
				// subdistrict: 0,
				// extensions: 'all'
			}
			// gerArea(data).then(res => {
			// 	console.log(res)
				if (areajs.data.message == 'query ok') {
					let arr
					areajs.data.result[0].forEach(item => {
						if (item.fullname == areaName) {
							arr = item.polygon[0]
						}
					})
					this.deLight = []
					for (let i=0;i<arr.length;i++) {
						if (i%2 == 0) {
							arr[i] -= 0.005
							arr[i+1] += 0.003
							// console.log(i)
							this.deLight.push({ lng: arr[i],lat: arr[i+1] })
						}
					}
					this.lightArea()
				}
			// })
			
		},
		lightArea () {
			this.delelightArea(this.bermudaTriangle)

			let that = this
			let map = this.map
			// Construct the polygon.
			const bermudaTriangle = new google.maps.Polygon({
				paths: that.deLight,
				strokeColor: "#FF0000",
				strokeOpacity: 0.4,
				strokeWeight: 2,
				fillColor: "#EBF2FF",
				fillOpacity: 0.45,
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
		addArea (id) {
			let data1 = {
				parentAddressId: this.ruleForm1.area,
				shopName: '',
				addressId: '',
				typeId: this.ruleForm.type[0].id
			}
			getShopList(data1).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
					res.data.data.forEach(child => {
						this.ruleForm1.storeList.push({
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
                } else {
					this.$message({
						type: 'warning',
						message: '該地區暫無店鋪'
					})
				}
            }).catch(e => {
				this.$message({
					type: 'error',
					message: '加載失敗'
				})
			})
			// this.ruleForm1.storeList = this.ruleForm1.storeList.concat(this.mapStoreListShow)  
			var arr = this.ruleForm1.storeList.filter(function(element,index,self){
				return self.findIndex(el => el.shopId == element.shopId ) === index  //如果是根据name去重就江id改为name
			})
			this.ruleForm1.storeList = arr

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
			this.ruleForm1.storeList.splice(i,1)
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
		deleList (k) {
			for (let i=0;i<this.checkedCities1.length;i++) {
				if (this.checkedCities1[i].packageName == this.addTimeList[k].packageName) {
					console.log(this.checkedCities1[i])
					this.checkedCities1.splice(i,1)   //同步勾选繁忙时段列表
				}
			}
			this.addTimeList.splice(k,1)
		},
		deleList1 (i) {
			this.addTimeList1.splice(i,1)
			this.checkedCities11.splice(i,1)
		},
		deleList2 (i) {
			this.addTimeList2.splice(i,1)
			this.checkedCities21.splice(i,1)
		},

		getType (e) {
			this.ruleForm.imageList = []
			this.ruleForm.inp = ''
			this.minute = []
			if (e == 1) {
				this.listLength = 10
				this.video = false
				this.ruleForm.mediaType = 'image'
				this.ruleForm.cmediaType = this.$t('lang.image')
				this.ruleForm.cmediaType1 = 1
			} else if (e == 3) {
				this.listLength = 5
				this.video = true
				this.ruleForm.mediaType = 'video'
				this.ruleForm.cmediaType = this.$t('lang.video')
				this.ruleForm.cmediaType1 = 3
			}
		},
		deleImg (i) {
			let that = this
			if (this.ruleForm.mediaType == 'video') {
				this.minute.splice(i,1)
				let num = 0
				for (let i=0;i<that.minute.length;i++) {
					num += that.minute[i]
				}
				let time = num
				var sTime = parseInt(time);// 秒
				var mTime = 0;// 分
				if ( sTime > 60 ) {//如果秒数大于60，将秒数转换成整数
					//获取分钟，除以60取整数，得到整数分钟
					mTime = parseInt(sTime / 60);
					//获取秒数，秒数取佘，得到整数秒数
					sTime = parseInt(sTime % 60);
				}
				time = Math.ceil(Number(mTime + '.' + sTime))
				that.ruleForm.videoMinute = time
				this.$forceUpdate()
				this.ruleForm.imageList.splice(i,1)
			} else {
				this.ruleForm.imageList.splice(i,1)
			}
		},
    }
}
</script>

<style lang='less' scoped>
@import "@/less/style.less";
	.content_down {
		width: calc(100% + 111px);
		position: relative;
		margin-top: 35px;
		margin-left: -105px;
		@media screen and (max-width: 564px) {
            margin-left: 5px;
			margin-top: 0px;
			width: 98%;
        }
	}
	.content_down1 {
		width: calc(100% + 111px);
		// margin-top: 35px;
		margin-left: -105px;
		@media screen and (max-width: 564px) {
            margin-left: 5px;
			width: 98%;
        }
	}
	.colorMsg {
		border-radius: 7px;
		animation: key 2s;
		// transition: 2s;
	}
	@keyframes key {
		0%{border-color: #67C23A;}
		30%{border-color: #F2F2F2 ;}
		60%{border-color: #67C23A;}
		100%{border-color: #F2F2F2; padding: 2px !important;}
	}

	.video_outWrap {
		height: 100%;
		position: relative;
		.img {
			position: absolute;
			left: 50%;
			top: 50%;
			z-index: 125;
			transform: translate(-50%, -50%);
			pointer-events: none;
		}
		.cutImage {
			position: absolute;
			left: 0;
			z-index: 124;
			top: 0;
			width: 100%;
			height: 100%;
		}
	}
	.elbtnsure {
		margin-top: 50px;
		border: solid 2px #F2F2F2;
		@media screen and (max-width: 564px) {
			margin-top: 30px;
		}
	}
	.popover_item {
		height: 600px !important;
		overflow: auto;
		@media screen and (max-height: 640px) {
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
	.elbtn {
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
    .textarea_wrap {
		// width: 100%;
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
	.imageList_long {
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
			transform: scale(0.8);
			width: 90px;
			margin-left: -9.5px;
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
		z-index: 22;
		// opacity: 0.9;
	}
	.br1185 {
		@media screen and (max-width: 1185px) {
			display: block;
		}
	}
	.total {
		width: 90%;
		border: 2px;
		// padding: 2px;
		border: solid 2px #F2F2F2;
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