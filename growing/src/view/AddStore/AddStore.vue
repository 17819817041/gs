<template>
    <div class="AddStore" id="AddStore" v-loading='loading'>
		<!-- <img class="back_a cursor" v-show="!submit" @click="submit = true" src="@/assets/img/back_arrow.png" alt=""> -->
		<div class="AdvertisingOperation_back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" alt="" @click="goBack">新增店鋪
        </div>
		<div class="noBar" style="height: calc(100% - 11px);overflow-y: auto;overflow-x: hidden;padding-bottom: 30px;">
			<div class="content mg">
				<!-- <div class="content_title al"><img class="cursor" v-show="submit" style="width: 25px;" @click="goBack" src="@/assets/img/back_arrow.png" alt="">店鋪管理</div> -->
				<div style="height: calc(100% - 27px)">
					<div class="basicsMsg boxs theme" v-show="submit">
					<div class="flex divider_message_title">
						<div class="divider"></div>
						<div class="divider_text">店鋪信息管理</div>
					</div>
					<el-form :model="ruleForm" :label-position="labelPosition" 
					:rules="rules" ref="ruleForm" label-width="135px" class="demo-ruleForm">
						<el-form-item label="店鋪名" prop="name" class="bcolor">
							<div class="elinput width30">
								<el-input class="width100" v-model="ruleForm.name"></el-input>
							</div>
						</el-form-item>
						<el-form-item label="店鋪所屬類型" prop="storeType">
							<div class="al br">
								<div class="al width30">
									<el-select v-model="ruleForm.storeType" class="width100" placeholder="請選擇類型" 
										@change="addType">
										<el-option v-for="(item,i) in getTypeList" :key="i"
											:label='item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
											item.find( res => res.language == "zh-TW").guangGaoTypeName: 
											item.find( res => res.language == "en-US").guangGaoTypeName '
											:value="item[0].id">
										</el-option>
									</el-select>
								</div>
							</div>
						</el-form-item>
						<el-form-item label="店鋪所在區域" prop="area" class="bcolor">
							<div class="flex br">
								<div class="flex">
									<el-select v-model="ruleForm.area" @change="changeArea"
										:placeholder="$t('lang.pldselectarea')" style="margin-right: 10px;">
										<el-option v-for="(item,i) in addressList" :key="i"
											:label='item.addressLanguageDtos.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
											item.addressLanguageDtos.find( res => res.language == "zh-TW").addressName: 
											item.addressLanguageDtos.find( res => res.language == "en-US").addressName '
											:value="item.id">
										</el-option>
									</el-select>
									<el-select v-model="ruleForm.street" :placeholder="$t('lang.pldselectstreet')">
										<el-option :label="$t('lang.Kowloon') + $t('lang.street')" @click.native="changeCen(22.8, 114.6)"
										v-if="ruleForm.area == $t('lang.jiulong')" :value="$t('lang.Kowloon') + $t('lang.street')"></el-option>
										<el-option :label="$t('lang.MongKok') + $t('lang.street')"  @click.native="changeCen(23.8, 114.6)"
										v-if="ruleForm.area == $t('lang.wangjiao')" :value="$t('lang.MongKok') + $t('lang.street')"></el-option>
										<el-option :label="$t('lang.Central') + $t('lang.street')"  @click.native="changeCen(22.8, 116.6)"
										v-if="ruleForm.area == $t('lang.zhonghuan')" :value="$t('lang.Central') + $t('lang.street')"></el-option>
									</el-select>
								</div>
							</div>
						</el-form-item>
						<el-form-item label="店鋪詳細位置地址" prop="latLng.lat">
							<div class="mapwrap_w">
								<div class="size12 latlngShow" v-show="ruleForm.latLng.lat"
								> lat: {{ruleForm.latLng.lat}}, lng: {{ruleForm.latLng.lng}} </div>
								<div class="size12 streetText"></div>
								<div :class="['map_wrap']">
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
							</div>
						</el-form-item>
						<el-form-item label="店鋪描述" prop="message" class="bcolor">
							<div class="al content_down">
								<div class="al textarea">
									<textarea v-model="ruleForm.message" id="" cols="60" rows="8"></textarea>
								</div>
							</div>
						</el-form-item>
						<el-form-item label="廣告顯示的尺寸" prop="chicun" class="bcolor" style="background: #F2F2F2;">
							<div class="al" style="margin-top: -20px;">
								<div class="inp_time1 al">
									<!-- <input type="text" v-model="ruleForm.size.width"> -->
									<el-form-item label=""  prop="size.width">
										<el-input class="width100" v-model="ruleForm.size.width"></el-input>
									</el-form-item>
								</div>
								<div> m(寬)</div>
								<div style="margin: 0 10px;"> × </div>
								<div class="inp_time1 al">
									<!-- <input type="text" v-model="ruleForm.size.height"> -->
									<el-form-item label=""  prop="size.height">
										<el-input class="width100" v-model="ruleForm.size.height"></el-input>
									</el-form-item>
								</div>
								<div> m(高)</div>
							</div>
						</el-form-item>
						<el-form-item label="店鋪展示圖片" prop="imageList1" class="bcolor">
							<div class="textarea_wrap clear content_down">
								<label for="img1">
									<div class="addImg ju al float">
										<img src="@/assets/img/add.png" alt="">
									</div>
									<input type="file" id="img1" v-show="false" multiple="multiple" @change="changeFile1">
								</label>
								<div class="textarea_wrap_item float" v-for="(item,i) in ruleForm.imageList1" :key="i">
									<div class="imageList_wrap">
										<div class="deleImg radius ju al" @click.stop="deleImg1(i)">
											<img style="heihgt: 100%;" src="@/assets/img/cha.png" alt="">
										</div>
										<div class="textarea_wrap_item_child ju al" @click="imgPreview(item.url)">
											<img style="height: 100%;" :src="item.url" alt="">
										</div>
									</div>
									<div class="imageList_name tc">{{item.name}}</div>
									<div class="imageList_size tc">{{item.size}}</div>
								</div>
							</div>
							<div style='font-size: 12px;line-height: 15px;margin-top: 5px;'>
								圖片格式限制PNG \JPG \JPEG \GIF，数量限制10張，大小限制3M。視頻格式限制 MP4，大小限制100M(媒體建議尺寸1920*1080)。
							</div>
						</el-form-item>
					</el-form>
				</div>
				<div class="detailPlan boxs theme" v-show="submit">
					<div class="flex divider_message_title">
						<div class="divider"></div>
						<div class="divider_text">接受外來廣告設定</div>
					</div>
					<el-form :model="ruleForm1" label-position="top" 
					:rules="rules1" ref="ruleForm1"
					label-width="245px" class="demo-ruleForm">
						<el-form-item :label='$t("lang.set_price")' prop="price" class="bcolor">
							<div class="al sb" slot="label"
								:style="{'min-width': $i18n.locale == 'zh-CN'? '200px': '250px' ,
								'margin': '-40px 0 0 10px',
								'line-height': '26px',
								'font-size': '13px'}">
								<div>{{$t("lang.set_price")}}</div>
								<div class="addCate al cursor" @click="dialogVisible = true">
									選擇
								</div>
							</div>
							<div class="flex">
								<div class=" clear">
									<div style="color: #B0B0B0;" class="list_item float al" 
									v-for="(item,i) in ruleForm1.priceList" :key="i">
										$ {{item.price}} HKD<span class="al" style="margin-left: 5px">
											<img class="cursor" 
											@click="delePrice(i)" src="@/assets/img/cha.png" alt="">
										</span>
									</div>
								</div>
							</div>
						</el-form-item>
						<el-form-item :label='$t("lang.receivingad")' prop="adTimeList">
							<div class="al sb" slot="label"
							:style="{'min-width': $i18n.locale == 'zh-CN'? '200px': '250px' ,
							'margin': '-40px 0 0 10px',
							'line-height': '26px',
							'font-size': '13px'}">
								<div>{{$t("lang.receivingad")}}</div>
								<div class="addCate al cursor" @click="dialogVisible3 = true,radio4 = '1'">
									選擇
								</div>
							</div>
							<div class="flex content_down1">
								<div class="clear" style="margin-left: 13px;">
									<div style="color: #B0B0B0;" class="list_item1 float al" 
									v-for="(item,i) in ruleForm1.adTimeList" :key="i">
										{{item.time}} <span class="al" style="margin-left: 5px">
											<img class="cursor" @click="deleOutTime(i)" 
											src="@/assets/img/cha.png" alt="">
										</span>
									</div>
								</div>
							</div>
						</el-form-item>
						<el-form-item :label='$t("lang.set_type1")' prop="typeList" class="bcolor">
							<div class="al sb" slot="label"
							:style="{'min-width': $i18n.locale == 'zh-CN'? '200px': '250px' ,
							'margin': '-40px 0 0 10px',
							'line-height': '26px',
							'font-size': '13px'}">
								<div>{{$t("lang.set_type1")}}</div>
								<div class="addCate al cursor" @click="dialogVisible2 = true,radio3 = '1'">
									選擇
								</div>
							</div>
							<div class="flex br">
								<div class="clear">
									<div style="color: #B0B0B0;" class="list_item float al" 
									v-for="(item,i) in ruleForm1.typeList" :key="i">
										{{item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
										item.find( res => res.language == "zh-TW").guangGaoTypeName: 
										item.find( res => res.language == "en-US").guangGaoTypeName}} <span class="al" style="margin-left: 5px">
											<img class="cursor" @click="deleTime(i)" 
											src="@/assets/img/cha.png" alt="">
										</span>
									</div>
								</div>
							</div>
						</el-form-item>
					</el-form>
				</div>
				
				<div class="detailPlan boxs theme" v-show="submit">
					<div class="flex divider_message_title">
						<div class="divider"></div>
						<div class="divider_text">店鋪廣告媒體內容信息</div>
					</div>
					<el-form :model="ruleForm2" :label-position="labelPosition" :rules="rules2" ref="ruleForm2"
					:label-width="$i18n.locale == 'zh-CN'? '135px': '165px'" class="demo-ruleForm">
						<el-form-item label="廣告媒體類型" prop="cmediaType" class="bcolor">
							<div class="al">
								<el-select v-model="ruleForm2.cmediaType" placeholder="請選擇類型" @change="getType">
									<el-option :label="$t('lang.image')" value="1"></el-option>
									<!-- <el-option label="GIF" value="2"></el-option> -->
									<el-option :label="$t('lang.video')" value="3"></el-option>

								</el-select>
							</div>
						</el-form-item>
						<el-form-item label="廣告媒體時長" prop="videoMinute">
							<div class="al">
								<div class="al inp_time">
									<el-input-number v-model="ruleForm2.videoMinute" :step="1" size="small" 
									:min="1" :max="5" label=""></el-input-number>
								</div>
								<div>{{$t('lang.minute')}}</div>
							</div>
						</el-form-item>
						<el-form-item label="廣告媒體內容" prop="imageList" class="bcolor">
							<div class="textarea_wrap clear content_down">
								<label for="img">
									<div class="addImg ju al float">
										<img src="@/assets/img/add.png" alt="">
									</div>
									<input type="file" id="img" v-show="false" multiple="multiple" @change="changeFile">
								</label>
								<div class="textarea_wrap_item float" v-for="(item,i) in ruleForm2.imageList" :key="i">
									<div class="imageList_wrap">
										<div class="deleImg cursor radius ju al" @click.stop="deleImg(i)">
											<img style="heihgt: 100%;" src="@/assets/img/cha.png" alt="">
										</div>
										<div class="textarea_wrap_item_child cursor ju al">
											<img v-if="ruleForm.mediaType == 'image'"  @click="imgPreview(item.url)"
											style="height: 100%;" :src="item.url" alt="">
											<div class="video_outWrap" v-else-if="ruleForm.mediaType == 'video'">
												<img class="img" src="@/assets/img/start.png" alt="">
												<div class="videoImage ju al" id="output" ref="output"  
													@click="previewVideo(item)">
													
												</div>
												<video style="height: 100%;" id="video1" ref="video" v-if="previewV"
													:controls="false">
													<source :src="item.url" type="video/mp4">
												</video>
											</div>
										</div>
									</div>
									<div class="imageList_name tc">{{item.name}}</div>
									<div class="imageList_size tc">{{item.size}}</div>
									<div class="imageList_long tc" 
									v-if="ruleForm.mediaType == 'video'"
										>時長：{{item.videoTime}}</div>
								</div>
							</div>
							<div style='font-size: 12px;line-height: 15px;margin-top: 5px;'>
								圖片格式限制PNG \JPG \JPEG \GIF，数量限制10張，大小限制3M。視頻格式限制 MP4，大小限制100M(媒體建議尺寸1920*1080)。
							</div>
							<div style='font-size: 12px; line-height: 15px;'>媒體內容時長限制5分鐘.</div>
						</el-form-item>
					</el-form>
				</div>

				<div class="addorcancel tc ju al" v-show="submit">
					<div class="addorcancel_btn cursor" style="margin-right: 30px;" @click="submitG">確認提交</div>
					<div class="addorcancel_btn cursor" @click="goBack">取消</div>
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
		<el-image-viewer 
		v-if="showViewer" 
		:on-close="closeViewer" 
		:url-list="[dimg]" />
		<el-image-viewer v-if="showViewer1" :on-close="closeViewer1" :url-list="[dimg1]" />

		<el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div class="">
                <div class="size12">(*店鋪接入每分鐘廣告收入=期望廣告收入/30天/24小時/60分鐘)</div>
                <div style="margin-top: 20px;">
                    <el-form :label-position="labelPosition" class="demo-ruleForm">
						<el-form-item :label="$t('lang.set_price')">
                            <el-select v-model="incomePrice1" @change="getIncomePrice"
							:placeholder="$t('lang.pldselecttype')">
                                <el-option v-for="(item,i) in incomePriceIdList" :key="i" 
                                :label="'$ ' + item.price + ' HKD'" :value="item">
                                </el-option>
                            </el-select>
						</el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addPrice(incomePrice)">确 定</el-button>
            </span>
        </el-dialog>

		<el-dialog
            :visible.sync="dialogVisible2"
            width="30%"
            :before-close="handleClose">
            <div class="">
                <div>
                    <el-form label-position="top"
					 class="demo-ruleForm">
						<el-form-item :label="$t('lang.set_type')">
                            <el-radio-group v-model="radio3" size="small">
                                <el-radio label="1" border style="margin-right: 0;">接收全部行業廣告</el-radio>
                                <el-radio label="2" border>自定義接收外來廣告行業</el-radio>
                            </el-radio-group>
                            <div class="flex" style="margin-top: 5px" v-if="radio3 == '2'">
                                <el-select v-model="t_name" :placeholder="$t('lang.pldselecttype')" @change="chooseT">
                                    <el-option v-for="(item,i) in getTypeList" :key="i"
										:label='item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
										item.find( res => res.language == "zh-TW").guangGaoTypeName: 
										item.find( res => res.language == "en-US").guangGaoTypeName '
										:value="item">
									</el-option>
                                </el-select>
                                <div class="addCate cursor al" @click="addType1(chooseType)">
                                    {{$t("lang.addbtn")}}
                                </div>
                            </div>
                            <div class="clear" v-if="radio3 == '2'" style="margin-top: 15px;">
                                <div style="color: #B0B0B0;" class="list_item1 float al" v-for="(item,i) in typeList1" :key="i">
                                    {{item.find( res => res.language == "zh-TW") && $i18n.locale == "zh-CN" ? 
										item.find( res => res.language == "zh-TW").guangGaoTypeName: 
										item.find( res => res.language == "en-US").guangGaoTypeName}} <span class="al" style="margin-left: 5px">
										<img class="cursor" @click="deleType1(i)" src="@/assets/img/cha.png" alt="">
									</span>
                                </div>
                            </div>
						</el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="changeType(chooseType)">确 定</el-button>
            </span>
        </el-dialog>

		<el-dialog
            :visible.sync="dialogVisible3"
            id="delele"
            width="40%"
            style="min-width: 350px;"
            title="接收外來廣告時段及時間比例"
            :before-close="handleClose">
            <div class="">
                <div>
                    <el-radio-group v-model="radio4" size="small">
                        <el-radio label="1" border style="margin-right: 0;">接收全部時段</el-radio>
                        <el-radio label="2" border style="margin-right: 0;" @click.native="drawers = true">自定義接收的廣告時間</el-radio>
                        <el-radio label="3" border>不接受外來廣告</el-radio>
                    </el-radio-group>
                    <el-form v-show="radio4 == '2'" :label-position="$i18n.locale == 'zh-CN'? labelPosition: 'top'"
						:label-width="$i18n.locale == 'zh-CN'? '100px': '205px'" style="margin-top: 15px;">
						<div class="clear" style="margin-top: 10px;">
						<div style="color: #B0B0B0;" class="list_item1 float al" v-for="(item,i) in outTimeList" :key="i">
							{{item.time}} <span class="al" style="margin-left: 5px">
								<img class="cursor" @click="deleOutTime1(i)" 
								src="@/assets/img/cha.png" alt="">
							</span>
						</div>
					</div>
                    </el-form>
					
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelDele">取 消</el-button>
                <el-button type="primary" @click="sureaddadList(radio4)">确 定</el-button>
            </span>
        </el-dialog>

		<el-drawer
			title="請選擇您需要投放的時間段及廣告播放時長:"
			:visible.sync="drawers"
			:direction="direction"
			:before-close="handleClose">
			<div class="dra_content noBar">
				<div class="list_wrap">
					<el-form label-position="top"
						:label-width="$i18n.locale == 'zh-CN'? '80px': '205px'" class="demo-ruleForm">
						<el-form-item label="繁忙時段:">
							<div class="clear">
                                <div class="al size12 ju float" v-for="(item,i) in addTimeList" :key="i+11" style="margin-left: 15px;">
                                    <span class="l_time">{{item.time}}</span> 
                                    <!-- <el-input-number @change="handleChange" 
                                    style="margin: 0 5px;width: 107px;" v-model="item.num"
                                    :min="20" :step="10" :max="100" label="描述文字" size="mini"></el-input-number> % -->
                                    <el-button plain size="mini" style="margin-left: 7px;" @click.native="deleList(i)">刪除</el-button>
                                </div>
                            </div>
						</el-form-item>
						<el-form-item label="超繁忙時段:">
							<div class="clear">
                                <div class="al size12 ju float" v-for="(item,i) in addTimeList1" :key="i+16" style="margin-left: 15px;">
                                    <span class="l_time">{{item.time}}</span> 
                                    <!-- <el-input-number @change="handleChange" 
                                    style="margin: 0 5px;width: 107px;" v-model="item.num"
                                    :min="20" :step="10" :max="100" label="描述文字" size="mini"></el-input-number> % -->
                                    <el-button plain size="mini" style="margin-left: 7px;" @click.native="deleList1(i)">刪除</el-button>
                                </div>
                            </div>
						</el-form-item>
						<el-form-item label="非繁忙時段:">
							<div class="clear">
                                <div class="al size12 ju float" v-for="(item,i) in addTimeList2" :key="i+30" style="margin-left: 15px;">
                                    <span class="l_time">{{item.time}}</span> 
                                    <!-- <el-input-number @change="handleChange" 
                                    style="margin: 0 5px;width: 107px;" v-model="item.num"
                                    :min="20" :step="10" :max="100" label="描述文字" size="mini"></el-input-number> % -->
                                    <el-button plain size="mini" style="margin-left: 7px;" @click.native="deleList2(i)">刪除</el-button>
                                </div>
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
								<el-form label-position="top"
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
							<span>沒有選中的時間</span><span style="color: red">則代表不接受外來廣告</span>
						</div>
					</div>
				</div>
				<div class="dra_footer">
					<div class="flexEnd">
						<el-button size="small" @click="drawers = false">取消</el-button>
  						<el-button size="small" type="primary" @click="sueraddList1">確定</el-button>
					</div>
				</div>
			</div>
		</el-drawer>
    </div>
</template>

<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
import dimg from "@/assets/img/growing.jpg"
import mapPoint from "@/assets/img/marker.png"
import { AddStore } from '@/axios/request.js'
export default {
    data() {
        return {
			previewV: true,
			addTimeList: [],
            addTimeList1: [],
            addTimeList2: [],
			dialogVisible: false,
			dialogVisible2: false,
			dialogVisible3: false,
			price_list: [],
			idsList: [],
			drawers: false,
			direction: 'rtl',
			adList: ['8:00~9:.00'],
			copy1: [],
			copy2: [],
			copy3: [],
			ggbili: '',
			
			typeList1: [],
			storeTypeList: [],

			checkedCities1: [],
			busyTimeList1: [],

            checkedCities11: [],
			sbusyTimeList1: [{ time: '12:00~13:00', num: 1 },{ time:'18:00~19:00', num: 1 }],

            checkedCities21: [],
			unbusyTimeList1: [],

			checkedCities: [],
			busyTimeList: [],

			checkedCities12: [],
			sbusyTimeList: ['12:00~13:00','18:00~19:00'],

			sbusyTimeList1: [{ time: '12:00~13:00', num: 1 },{ time:'18:00~19:00', num: 1 }],

			checkedCities2: [],
			unbusyTimeList: [],

			cityOptions: [],
            checkAll: false,
            isIndeterminate: false,

            cityOptions1: ['12:00~13:00','18:00~19:00'],
            checkAll1: false,
            isIndeterminate1: false,

            cityOptions2: [],
            checkAll2: false,
            isIndeterminate2: false,
            radio3: '1',
			radio4: '1',

			videoWrap: false,
			showVideo: false,
			showViewer1: false,
			showViewer: false,
			preload: 'auto',  //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            src:'',               //视频的路径
            type: '',                //视频的类型
            Controls: true,              //确定播放器是否具有用户可以与之交互的控件
            Autoplay: '',              //是否自动播放
            Poster: '',         
            video: true,
			submit: true,
			t_name: '',
			chooseType: null,
			incomePrice1: '',
			incomePrice: {
				id: '',
				price: '',
				state: '',
			},
            ruleForm: {
				chicun: '666',//
                name: '',  //
                area: '',//
                time: '',
                type: '',
				size: {//
					width: '',
					height: ''
				},
				latLng: { lat: '', lng: '' },//
                storeType: '',//
                mediaType: '',
                
                inp: 1,
				
                date: '',
                content: '',
                address: '',
                message: "",//
				imageList1: [],
            },
			ruleForm1: {
				priceList: [], //
				adTimeList: [],   //
				price: '',   //
				typeList: [],  //
			},
			rules1: {
				priceList: [
					{ required: true, message: '請选择期望收入', trigger: 'change' }
				],
				adTimeList: [
					{ required: true, message: '請添加接收外來廣告時段', trigger: 'change' }
				],
				price: [
                    { required: true, message: '請選擇期望收入', trigger: 'change' }
                ],
				typeList: [
                    { required: true, message: '請添加接收外來廣告行業', trigger: 'change' }
                ],
			},
			ruleForm2: {
				cmediaType: '',  //
				cmediaType1: 0,  //
				videoMinute: 0,   //
				imageList: [],//
			},
			rules2: {
				cmediaType: [
                    { required: true, message: '請選擇廣告媒體類型', trigger: 'change' }
                ],
				videoMinute: [
                    { required: true, message: '', trigger: 'change' }
                ],
				imageList: [
					{ required: true, message: '請添加媒體內容', trigger: 'change' }
				],
				
			},
			labelPosition: 'left',
            rules: {
                name: [
                    { required: true, message: '請輸入廣告名稱', trigger: 'blur' },
                    { min: 3, max: 15, message: '長度需3 到 15 個字符', trigger: 'blur' }
                ],
				chicun: [
                    { required: true, message: '', trigger: 'change' }
                ],
				imageList1: [
					{ required: true, message: '請添加圖片', trigger: 'change' }
				],
                area: [
                    { required: true, message: '請選擇投放區域', trigger: 'change' }
                ],
                time: [
                    { required: true, message: '請選擇时间段', trigger: 'blur' }
                ],
                type: [
                    { required: true, message: '請選擇媒體類型', trigger: 'change' }
                ],
                storeType: [
                    { required: true, message: '請選擇媒體類型', trigger: 'change' }
                ],
                mediaType: [
                    { required: true, message: '請選擇媒體類型', trigger: 'change' }
                ],
                inp: [
                    { required: true, message: '請選擇媒體時長', trigger: 'blur' }
                ],
                date: [
                    { required: true, message: '請選擇投放週期', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '請選擇媒體內容', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: '請輸入詳細地址', trigger: 'blur' }
                ],
                message: [
                    { required: true, message: '請輸入店鋪描述', trigger: 'blur' }
                ],
				'size.width': [
					{ required: true, message: '請輸入寬度', trigger: 'blur' }
				],
				'size.height': [
					{ required: true, message: '請輸入高度', trigger: 'blur' }
				],
				'latLng.lat': [
					{ required: true, message: '请选择详细地址', trigger: 'blur' }
				]
            },
			outTimeList: [],
			areaList: [],
			timeList: [],
            
            
            minute: [],
			dimg1: '',
			map: null,
			marker: null,
			

			dnum: null,
			dnum1: null,
			dnum2: null,
			dnum3: null,
			dnum4: null,
			dnum5: null,
			dList: [],   //需删除勾选繁忙时段列表
			dList1: [],  //需删除drawer繁忙时段列表
			dList2: [],  //需删除drawer超繁忙时段列表
			dList3: [],  //需删除drawer非繁忙时段列表
			dList4: [],  //需删除勾选超繁忙时段列表
			dList5: [],  //需删除勾选非繁忙时段列表
        };
    },
	created () {
		// AK().then(res => {
		// 	console.log(res)
		// })
		this.$store.dispatch('getAddress',this) 
        this.$store.dispatch('getTypeList',this)
        this.$store.dispatch('incomePriceId',this)
        let num = 10000
        for (let i=0;i<10;i++) {
            num += 5000
            this.price_list.push({price: num})
        }
        let num1 = 110
        for (let i=0;i<11;i++) {
            num1 -= 10
            this.idsList.push({val: num1})
        }
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
	beforeMount () {
        let that = this
        window.addEventListener('resize', (e) => {
            that.fun()
        })
		this.fun()
    },
    mounted () {
        this.initMap1(22.6,114.1,1)
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
		loading: {
			handler (val) {
				if (val) {
					this.loading = val
				}
			},
		},
		incomePriceIdList: {
			handler (val) {
				if (val) {
					this.incomePriceIdList = val
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
        loading: {
			get () { return this.$store.state.user.loading },
			set (val) {
				this.$store.commit('setUser', {
					key: 'loading',
					value: val
				})
			}
		},
		incomePriceIdList:{             //期望收入
			get () { return this.$store.state.user.incomePriceIdList },
			set (val) {
				this.$store.commit('setUser', {
					key: 'incomePriceIdList',
					value: val
				})
			}
		},
	},
	components: { ElImageViewer },
    methods: {
		flag () {
			this.$refs.ruleForm.validate(flag => {
                if (flag) {  }
            })
			this.$refs.ruleForm1.validate(flag => {
				if (flag) {  }
			})
			this.$refs.ruleForm2.validate(flag => {
				if (flag) {  }
			})
		},
		AddStore () {       //添加店鋪
			this.loading = true
			let that = this
			let boo = false
			let boo1 = false
			let boo2 = false
            this.$refs.ruleForm.validate(flag => {
                if (flag) { boo = true }
            })
			this.$refs.ruleForm1.validate(flag => {
				if (flag) { boo1 = true }
			})
			this.$refs.ruleForm2.validate(flag => {
				if (flag) { boo2 = true }
			})

			if (boo && boo1 && boo2) {
				let arr = []
				this.ruleForm2.imageList.forEach((item,i) => {
					arr.push({
						"id": null,
						"fileUrl": item.url,
						"step": i,
						"type": that.ruleForm2.cmediaType1,
						"shopGuangGaoId": null,
						"fileName": item.name,
						"fileSize": item.size,
						"filePlayTime": item.videoTime
					})
				})
				let imgList = []
				that.ruleForm.imageList1.forEach(item => {
					imgList.push(item.url)
				})
				let data = {
					shopDtoJson: {
						"shopName": that.ruleForm.name,
						"addressParentId": that.ruleForm.area,
						"shopAddressId": 0,
						"addressName": "",
						"longitude": String(that.ruleForm.latLng.lng),
						"latitude": String(that.ruleForm.latLng.lat),
						"content": that.ruleForm.message,
						"types": that.storeTypeList,
						"shopTypeId": that.ruleForm.storeType,
						"userId": Number(localStorage.getItem('compoundeyesUserId')),
						"shopDiscountDtos": [{
							"timeIntervalId": 1,
							"discount": 0,
							"timeIntervalDetailsDtos": [{
								"timeIntervalDetailsId": 1,
								"discount": 70,
								"isReceiving": true
							}],
							"isReceiving": true,
							"isUnified": true
						}],
						"shopGuangGaoDto": {
							"shopGuangGaoTitle": "",
							"shopGuangGaoLength": 6,
							// "shopGuangGaoContents": [{
							// 	"id": null,
							// 	"fileUrl": "www.baidu.com",
							// 	"step": 1,
							// 	"type": that.ruleForm2.cmediaType,
							// 	"shopGuangGaoId": 1
							// }],
							"shopGuangGaoContents": arr
						},
						"width": that.ruleForm.size.width,
						"heigth": that.ruleForm.size.height,
						// "shopImages": ["12313513032"],
						"shopImages": imgList,
						"incomePriceId": that.ruleForm1.price
					}
				}
				let str = JSON.stringify(data.shopDtoJson)
				const qs = require('qs')
				let data1 = qs.stringify({
					shopDtoJson: str
				})
				AddStore(data1).then(res => {
					that.loading = false
					if (res.data.rtnCode == 200) {
						that.$message({
							type: 'success',
							message: that.$t('lang.addSuccess')
						})
						that.submit = false
					} else {
						this.$message({
							type: 'error',
							message: '修改失敗'
						})
					}
				}).catch(e => {
					this.$message({
						type: 'error',
						message: '修改失敗'
					})
				})
			} else {
				this.loading = false
				this.$message({
					type: 'warning',
					message: '請完善信息'
				})
			}
        },
        fun () {
			if (window.innerWidth <= 564) {
                this.labelPosition = 'top'
            } else {
                this.labelPosition = 'left'
            }
		},
		previewVideo (item) {
			this.src = item.url
			this.showVideo = true
			this.videoWrap = true
		},
		imgPreview (url) {
			this.dimg1 = url
			this.showViewer1 = true
		},
		closeViewer1() {
          	this.showViewer1 = false
        },
		closeVideo () {
			this.showVideo = false
			this.videoWrap = false
		},
		changeArea (val) {
			console.log(val)
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
					// that.marker = marker
					map.setCenter(pos);
				})
			}
			// const myLatLng = {lat: 22.6, lng: 114.1}
			// new google.maps.Marker({
			// 	position: myLatLng,
			// 	map,
			// 	title: "Hello World!",
			// });
			var pos = {
				lat: 0,
				lng: 0
			}
			var markerr = new google.maps.Marker({position: pos, map: map})
			that.marker = markerr
			map.addListener('click', function(e) {   //点击获取经纬度
				// console.log(e.latLng.lat(),e.latLng.lng()); 
				let a = that.map.getBounds()
				console.log(123, a)
				that.ruleForm.latLng.lat = e.latLng.lat()
				that.ruleForm.latLng.lng = e.latLng.lng()
				that.marker.setMap(null)
				that.flag()
				that.marker = new google.maps.Marker({
					position: new google.maps.LatLng(e.latLng.lat(), e.latLng.lng()),
					icon: mapPoint,
					map: map,
				})

				// var pos = {
				// 	lat: e.latLng.lat(),
				// 	lng: e.latLng.lng()
				// };
				// var marker = new google.maps.Marker({position: pos, map: map});  //添加标记点

				// marker.setMap(null)   //清除标记点
				// map.setCenter(pos);  //修改中心点
				
			});

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
		},
		handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
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
			this.ruleForm2.imageList = []
			this.$forceUpdate()
			this.ruleForm.inp = ''
			this.minute = []
			if (e == 1) {
				this.video = false
				this.ruleForm.mediaType = 'image'
				this.ruleForm.cmediaType = this.$t('lang.image')
				this.ruleForm2.cmediaType1 = 1
			} else if (e == 3) {
				this.video = true
				this.ruleForm.mediaType = 'video'
				this.ruleForm.cmediaType = this.$t('lang.video')
				this.ruleForm2.cmediaType1 = 3
			}
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		submitG () {
			this.AddStore()
			return
			this.submit = false
		},
		handleCheckAllChange(val) {
            this.checkedCities = val ? this.cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckAllChange1(val) {
            this.checkedCities12 = val ? this.cityOptions1 : [];
            this.isIndeterminate1 = false;
        },
        handleCheckAllChange2(val) {
            this.checkedCities2 = val ? this.cityOptions2 : [];
            this.isIndeterminate2 = false;
        },
		goBack () {
			this.$router.back()
		},
		addType (item) {
			// if (item) {
				this.storeTypeList = []
				this.storeTypeList.push(item)
				// let arr = new Set(this.storeTypeList)
				// this.storeTypeList = Array.from(arr)
			// }
		},
		addArea (item) {
			this.areaList.push(item)
		},
		deleOutTime (k) {
			for (let i=0;i<this.checkedCities1.length;i++) {
				if (this.checkedCities1[i].time == this.ruleForm1.adTimeList[k].time) {
					this.checkedCities1.splice(i,1)
				}
			}

			this.ruleForm1.adTimeList.splice(k,1)        //删除已有列表之一
			this.addTimeList = this.ruleForm1.adTimeList //同步drawer列表
		},
		deleOutTime1 (k) {
			this.ruleForm1.adTimeList = JSON.parse(JSON.stringify(this.ruleForm1.adTimeList))
			let that = this
			this.checkedCities1.findIndex((res,i) => {   //同步勾选繁忙时段列表
				if (res.time == that.outTimeList[k].time) {
					this.dnum = i
				}
			})
			this.checkedCities11.findIndex((res,i) => {   //同步勾选超繁忙时段列表
				if (res.time == that.outTimeList[k].time) {
					this.dnum4 = i
				}
			})
			this.checkedCities21.findIndex((res,i) => {   //同步勾选非繁忙时段列表
				if (res.time == that.outTimeList[k].time) {
					this.dnum5 = i
				}
			})
			this.addTimeList.findIndex((res,i) => {   //同步drawer繁忙时段列表
				if (res.time == that.outTimeList[k].time) {
					this.dnum1 = i
				}
			})
			this.addTimeList1.findIndex((res,i) => {   //同步drawer超繁忙时段列表
				if (res.time == that.outTimeList[k].time) {
					this.dnum2 = i
				}
			})
			this.addTimeList2.findIndex((res,i) => {   //同步drawer非繁忙时段列表
				if (res.time == that.outTimeList[k].time) {
					this.dnum3 = i
				}
			})
			if (this.checkedCities1[this.dnum]) {
				// this.checkedCities1.splice(dnum,1)     //同步勾选繁忙时段列表
				this.dList.push(this.checkedCities1[this.dnum])
			}
			if (this.checkedCities11[this.dnum4]) {
				// this.checkedCities11.splice(dnum4,1)     //同步勾选超繁忙时段列表
				this.dList4.push(this.checkedCities11[this.dnum4])
			}
			if (this.checkedCities21[this.dnum5]) {
				// this.checkedCities21.splice(dnum5,1)     //同步勾选非繁忙时段列表
				this.dList5.push(this.checkedCities21[this.dnum5])
			}
			if (this.addTimeList[this.dnum1]) {
				// this.addTimeList.splice(dnum1,1)     //同步drawer繁忙时段列表
				this.dList1.push(this.addTimeList[this.dnum1])
			}
			if (this.addTimeList1[this.dnum2]) {
				// this.addTimeList1.splice(dnum2,1)     //同步drawer超繁忙时段列表
				this.dList2.push(this.addTimeList1[this.dnum2])
			}
			if (this.addTimeList2[this.dnum3]) {
				// this.addTimeList2.splice(dnum3,1)     //同步drawer非繁忙时段列表
				this.dList3.push(this.addTimeList2[this.dnum3])
			}
			

			this.outTimeList.splice(k,1)		  //删除dialog任意之一
		},
		cancelDele () {
			this.dialogVisible3 = false
			this.outTimeList = this.ruleForm1.adTimeList //取消修改后同步dialog列表
		},
		sureaddadList (val) {
			if (val == '1') {
				this.ruleForm1.adTimeList = []
				this.ruleForm1.adTimeList.push( { time: '接受全部時段' , num: 0} )
			} else if (val == '2') {
				this.tongbu()
				if (this.outTimeList.length == 0) {
					this.ruleForm1.adTimeList = []
					this.ruleForm1.adTimeList.push( { time: '不接受外來廣告' , num: 0} )
				} else {
					this.ruleForm1.adTimeList = this.outTimeList
				}
			} else if (val == '3') {
				this.ruleForm1.adTimeList = []
				this.ruleForm1.adTimeList.push( { time: '不接受外來廣告' , num: 0} )
			}
			this.flag()
			this.dialogVisible3 = false
		},
		tongbu () {
			this.dList.forEach(item => {
				for (let i=0;i<this.checkedCities1.length;i++) {
					if (this.checkedCities1[i].time == item.time) {
						this.checkedCities1.splice(i,1)   //同步勾选繁忙时段列表
					}
				}
			})
			this.dList4.forEach(item => {
				for (let i=0;i<this.checkedCities11.length;i++) {
					if (this.checkedCities11[i].time == item.time) {
						this.checkedCities11.splice(i,1)   //同步勾选超繁忙时段列表
					}
				}
			})
			this.dList5.forEach(item => {
				for (let i=0;i<this.checkedCities21.length;i++) {
					if (this.checkedCities21[i].time == item.time) {
						this.checkedCities21.splice(i,1)   //同步勾选非繁忙时段列表
					}
				}
			})
			this.dList1.forEach(item => {
				for (let i=0;i<this.addTimeList.length;i++) {
					if (this.addTimeList[i].time == item.time) {
						this.addTimeList.splice(i,1)   //同步drawer繁忙时段列表
					}
				}
			})
			this.dList2.forEach(item => {
				for (let i=0;i<this.addTimeList1.length;i++) {
					if (this.addTimeList1[i].time == item.time) {
						this.addTimeList1.splice(i,1)   //同步drawer超繁忙时段列表
					}
				}
			})
			this.dList3.forEach(item => {
				for (let i=0;i<this.addTimeList2.length;i++) {
					if (this.addTimeList2[i].time == item.time) {
						this.addTimeList2.splice(i,1)   //同步drawer非繁忙时段列表
					}
				}
			})
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
		addPrice (item) {
			if (item.price) {
				this.ruleForm1.price = this.incomePrice.id
				this.ruleForm1.priceList = []
				this.ruleForm1.priceList.push(item)
				let arr = new Set(this.ruleForm1.priceList)
				this.ruleForm1.priceList = Array.from(arr)
				this.flag()
				this.dialogVisible = false
			} else {
				this.$message({
					type:'warning',
					message: '請選擇期望收入'
				})
			}
		},
		getIncomePrice (item) {
			this.incomePrice = item
			this.incomePrice1 = '$ ' + item.price + ' HKD'
		},
		deleTime (i) {
			this.ruleForm1.typeList.splice(i,1)
		},
		delePrice (i) {
			this.ruleForm1.priceList.splice(i,1)
		},
        changeFile (e) {
			var files = e.target.files
			let that = this
			if (this.ruleForm.mediaType) {
				if (this.video) {
					if (this.ruleForm.mediaType == 'video') {
						if (e.target.files.length<=5 && this.ruleForm2.imageList.length < 5 && e.target.files.length + this.ruleForm2.imageList.length <= 5) {
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

										let audioElement = new Audio(fileurl);
										audioElement.addEventListener("loadedmetadata", function (_event) {
											var time = Math.ceil(audioElement.duration)
											var sTime = parseInt(time);// 秒
											var mTime = 0;// 分
											if ( sTime > 60 ) {//如果秒数大于60，将秒数转换成整数
												//获取分钟，除以60取整数，得到整数分钟
												mTime = parseInt(sTime / 60);
												//获取秒数，秒数取佘，得到整数秒数
												sTime = parseInt(sTime % 60);
											}
											that.ruleForm2.imageList.push({ 
												url: fileurl, 
												name: name, 
												size: size, 
												time: time, 
												videoTime: mTime + '分' + sTime + '秒'
											})
											let index = that.ruleForm2.imageList.length -1
											setTimeout(() => {
												that.initialize(index)
											},200)
											
											// that.minute.push(Math.ceil(audioElement.duration))
											that.minute.push(time)
											that.$forceUpdate()
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
								let that = this
								this.$nextTick(() => {
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
									// console.log(sTime, mTime, mTime + '.' + sTime, Number(mTime + '.' + sTime))
									time = Math.ceil(Number(mTime + '.' + sTime))
									that.ruleForm2.videoMinute = time
									that.$forceUpdate()
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
						if (e.target.files.length<=10 && this.ruleForm2.imageList.length <= 10) {
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
										that.ruleForm2.imageList.push({ url: fileurl, name: name, size: size })
									} else {
										this.$message({
											type: 'error',
											message: '單個圖片最大限制3M !'
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
		initialize (ff) {
			var scale = 0.8;
			var output = this.$refs.output[ff]
			var video = this.$refs.video[ff]
			// console.log(ff)
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
		changeFile1 (e) {
			var files = e.target.files
			let that = this
			if (e.target.files.length<=10 && that.ruleForm.imageList1.length <= 10) {
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
							that.ruleForm.imageList1.push({ url: fileurl, name: name, size: size })
						} else {
							this.$message({
								type: 'error',
								message: '單個圖片最大限制3M !'
							})
						}
					} else { 
						this.$message({
							type: 'error',
							message: '請選擇圖片類型'
						})
					}
				}
			} else {
				this.$message({
					type: 'error',
					message: '最大限制10個圖片文件!'
				})
			}
		},
		deleImg (i) {
			let that = this
			if (this.ruleForm.mediaType == 'video') {
				// this.previewV = false
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
				that.ruleForm2.videoMinute = time
				
				this.ruleForm2.imageList.splice(i,1)
			} else {
				this.ruleForm2.imageList.splice(i,1)
			}
		},
		deleImg1 (i) {
			let that = this
			if (this.ruleForm.mediaType == 'video') {
				this.minute.splice(i,1)
				this.ruleForm.inp = 0
				for (let i=0;i<Array.from(this.minute).length;i++) {
					this.ruleForm.inp = this.ruleForm.inp*1 + this.minute[i]
					this.$forceUpdate()
				}
				that.ruleForm.imageList1.splice(i,1)
			} else {
				that.ruleForm.imageList1.splice(i,1)
			}
		},
		adListadd (val) {
            let checkedCount = val.length;
            this.checkAll = checkedCount === this.cityOptions.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityOptions.length;
			this.copy1 = Array.from(val)
		},
		adsListadd (val) {
            let checkedCount = val.length;
            this.checkAll1 = checkedCount === this.cityOptions1.length;
            this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.cityOptions1.length;
			this.copy2 = Array.from(val)
		},
		adunListadd (val) {
            let checkedCount = val.length;
            this.checkAll2 = checkedCount === this.cityOptions2.length;
            this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.cityOptions2.length;
            this.copy3 = Array.from(val)
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
		group (val) {
			this.addTimeList = Array.from(val)
		},
		group1 (val) {
			this.addTimeList1 = Array.from(val)
		},
		group2 (val) {
			this.addTimeList2 = Array.from(val)
		},
		sueraddList1 () {
			let i = 0
			let arr = this.addTimeList.concat(this.addTimeList1.concat(this.addTimeList2))
			arr.forEach(item => {
				i = i + item.num
			})
            this.outTimeList = this.addTimeList.concat(this.addTimeList1.concat(this.addTimeList2))
            this.drawers = false
            // this.ruleForm.inp = i
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
		addType1 (item) {
			if (item) {
				this.typeList1.push(item)
				let arr = new Set(this.typeList1)
				this.typeList1 = Array.from(arr)
				// this.changeType()
			}
		},
		chooseT (item) {
			this.chooseType = item
		},
		deleType1 (i) {
			this.typeList1.splice(i,1)
            // this.changeType()
		},
		changeType (item) {
            this.dialogVisible2 = false
			
			if (this.radio3 == '1') {
				this.ruleForm1.typeList = []
				this.ruleForm1.typeList.push([
					{
						guangGaoTypeName:"接收全部行業廣告",
						id:0,
						language:"zh-TW",
					},
					{
						guangGaoTypeName:"Receive all industry advertisements",
						id:0,
						language:"en-US",
					}
				])
			} else if (this.radio3 == '2') {
				if (this.typeList1.length != 0) {
					this.ruleForm1.typeList = JSON.parse(JSON.stringify(this.typeList1))
				} else {
					this.ruleForm1.typeList = []
					this.ruleForm1.typeList.push([
						{
							guangGaoTypeName:"接收全部行業廣告",
							id:0,
							language:"zh-TW",
						},
						{
							guangGaoTypeName:"Receive all industry advertisements",
							id:0,
							language:"en-US",
						}
					])
				}
				
			}
			this.flag()
            // if (this.typeList1.length != 0) {
            //     let obj = this.typeList1[0]
            //     for (let i=0;i<this.typeList1.length-1;i++) {
            //         obj = obj + ',' + this.typeList1[i+1]
            //     }
            //     this.arr2[0].name = this.$t("lang.set_type") + ': ' + obj
            // } else {
            //     this.arr2[0].name = this.$t("lang.nodata")
            // }
        },
    }
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
	.latlngShow {
		height: 0;
		color: gray;
		@media screen and (max-width: 564px) {
            height: 27px;
			margin-top: -25px;
			margin-left: 10px;
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
    .AddStore {
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
        width: 35%;
        min-width: 275px;
        padding: 3px;
        // box-shadow: 0 0 5px rgb(199, 199, 199) inset !important;
    }
    .content {
        width: 85%;
        // height: calc(100% - 11px);
        padding: 0px 20px;
        // overflow: auto;
		margin-top: 15px;
		@media screen and (max-width: 564px) {
			padding: 0px 10px;
			width: 100%;
		}
    }
    .bcolor {
        background: #E5E5E5;
    }
    .content_title {
        font-size: 22px;
        font-weight: 500;
        padding: 15px 0;
    }
    .basicsMsg {
        margin-bottom: 15px;
        padding: 0 2px 0px 2px;
    }
    .detailPlan {
        margin-bottom: 15px;
        padding: 0 2px 2px 2px;
    }
    .addCate {
        border: solid 1px rgb(206, 206, 206);
        padding: 0 17px;
        box-shadow: 2px 2px 6px rgb(224, 224, 224) inset;
        height: 30px;
        margin-left: 15px;
		white-space: nowrap;
    }
    .inp_time {
    //   width: 217px;
      background: white;
      margin-right: 5px;
      overflow: hidden;
    }
    .textarea_wrap {
		width: 98%;
		height: 300px;
		background: white;
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
		z-index: 22;
		// opacity: 0.9;
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
	.addImg:hover {
		border: dashed 1px rgb(148, 148, 148);
	}
	.dra_content {
		height: calc(100% - 98px);
		overflow: auto;
		padding: 0 20px;
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
		@media screen and (max-width: 870px) {
			margin-top: 5px;
		}
	}
	.list_item1 {
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
        padding: 15px 15px;
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
        width: 100%;
        height: 200px;
        // padding: 3px;
        textarea {
			padding: 3px;
            width: 100%;
            height: 97%;
            border: none;
            outline: none;
            resize: none;
        }
    }
	.inp_time1 {
		width: 70px;
		// background: #F5F7FA;
		// border: solid 1px #E4E7ED;
		// color: rgb(168, 168, 168);
		// height: 37px;
		margin-right: 5px;
		// overflow: hidden;
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
    .iknow {
        margin-top: 30px;
        div {
            color: white;
            background: @themeColor;
            padding: 15px 40px;
        }
    } 
	.streetText {
		color: gray;
		height: 40px;
		text-decoration: underline;
		@media screen and (max-width: 564px) {
            margin-left: 3px;
			margin-top: -25px;
        }
	}
	.mapwrap_w {
		width: calc(100% + 120px);
		@media screen and (max-width: 564px) {
			width: 100%;
        }
	}
	.content_down {
		width: calc(100% + 115px);
		position: relative;
		margin-top: 35px;
		margin-left: -125px;
		@media screen and (max-width: 564px) {
            margin-left: 5px;
			margin-top: 0px;
			width: 98%;
        }
	}
	.content_down1 {
		width: calc(100% + 246px);
		position: relative;
		// margin-top: 55px;
		// margin-left: -247px;
		margin-left: -5px;
		@media screen and (max-width: 564px) {
            margin-left: 0px;
			margin-top: 0px;
			width: 100%;
        }
	}
    .map_wrap {
		width: 100%;
		position: relative;
		margin-top: 5px;
		margin-left: -125px;
		@media screen and (max-width: 564px) {
            margin-left: 3px;
			margin-top: 0px;
			width: 98%;
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