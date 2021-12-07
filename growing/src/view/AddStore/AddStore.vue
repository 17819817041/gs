<template>
    <div class="AddStore" id="AddStore">
		<!-- <img class="back_a cursor" v-show="!submit" @click="submit = true" src="@/assets/img/back_arrow.png" alt=""> -->
		<div class="AdvertisingOperation_back mg al">
            <img class="cursor" src="@/assets/img/back_arrow.png" alt="" @click="goBack">新增店鋪
        </div>
		<div class="noBar" style="height: calc(100% - 11px);overflow: auto;padding-bottom: 30px;">
			<div class="content mg bar">
				<!-- <div class="content_title al"><img class="cursor" v-show="submit" style="width: 25px;" @click="goBack" src="@/assets/img/back_arrow.png" alt="">店鋪管理</div> -->
				<div class="noBar" style="height: calc(100% - 27px); overflow:auto">
					<div class="basicsMsg theme" v-show="submit">
					<div class="flex divider_message_title">
						<div class="divider"></div>
						<div class="divider_text">店鋪信息管理</div>
					</div>
					<el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="135px" class="demo-ruleForm">
						<el-form-item label="店鋪名" prop="name" class="bcolor">
							<div class="elinput width30">
								<el-input class="width100" v-model="ruleForm.name"></el-input>
							</div>
						</el-form-item>
						<el-form-item label="店鋪所屬類型" prop="storeType">
							<div class="al br">
								<div class="al width30">
									<el-select v-model="ruleForm.storeType" class="width100" placeholder="請選擇類型" @change="addType">
										<el-option v-for="(item,i) in getTypeList" :key="i"
											:label='item.find(child => { 
												child.language == "zh-TW" && $i18n.locale == "zh-CN"? 
												"child.guangGaoTypeName" : "123"
											})'
											:value="1">
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
									</div>
								</div>
						</el-form-item>
						<el-form-item label="店鋪詳細位置地址" prop="address">
							<div class="mapwrap_w">
								<!-- <div class="al width30" style='min-width: 217px;'>
									<div class="elinput width100">
										<el-input class="width100" v-model="ruleForm.address"></el-input>
									</div>
								</div> -->
								<div class="size12 streetText">{{ruleForm.street}}</div>
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
							<div class="al">
								<div class="al textarea">
									<textarea v-model="ruleForm.message" id="" cols="60" rows="8"></textarea>
								</div>
							</div>
						</el-form-item>
						<el-form-item label="廣告顯示的尺寸" prop="message" class="bcolor" style="background: #F2F2F2;">
							<div class="al">
								<div class="inp_time1 al"><input type="text"></div>
								<div> m(高)</div>
								<div style="margin: 0 15px;"> × </div>
								<div class="inp_time1 al"><input type="text"></div>
								<div> m(寬)</div>
							</div>
						</el-form-item>
						<el-form-item label="店鋪展示圖片" prop="type" class="bcolor">
							<div class="textarea_wrap clear">
								<label for="img1">
									<div class="addImg ju al float">
										<img src="@/assets/img/add.png" alt="">
									</div>
									<input type="file" id="img1" v-show="false" multiple="multiple" @change="changeFile1">
								</label>
								<div class="textarea_wrap_item float" v-for="(item,i) in imageList1" :key="i">
									<div class="imageList_wrap">
										<div class="deleImg radius ju al" @click.stop="deleImg1(i)"><img style="heihgt: 100%;" src="@/assets/img/cha.png" alt=""></div>
										<div class="textarea_wrap_item_child ju al"  @click="imgPreview(item.url)">
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
					<el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="145px" class="demo-ruleForm">
						<el-form-item :label='$t("lang.set_price")' prop="ratio"  class="bcolor">
							<div class="al br">
								<div class="al">
									<!-- <el-select class="width100" v-model="ruleForm.time" placeholder="請選擇時間段">
										<el-option label="繁忙时段(9am-9pm)" value="繁忙时段(9am-9pm)"></el-option>
										<el-option label="非繁忙时段(9pm-9am)" value="非繁忙时段(9pm-9am)"></el-option>
									</el-select> -->
									<div class="addCate al cursor" @click="dialogVisible = true">
										選擇
									</div>
								</div>
								<div class="list clear">
									<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in priceList" :key="i">
										{{item}} <span class="al" style="margin-left: 5px"><img class="cursor" @click="delePrice(i)" src="@/assets/img/cha.png" alt=""></span>
									</div>
								</div>
							</div>
						</el-form-item>
						<el-form-item :label='$t("lang.receivingad")' prop="time">
							<div class="al br">
								<div class="al">
									<!-- <el-select class="width100" v-model="ruleForm.time" placeholder="請選擇時間段">
										<el-option label="繁忙时段(9am-9pm)" value="繁忙时段(9am-9pm)"></el-option>
										<el-option label="非繁忙时段(9pm-9am)" value="非繁忙时段(9pm-9am)"></el-option>
									</el-select> -->
									<!-- <div class="addCate al cursor" @click="addTime(ruleForm.time)"> -->
									<div class="addCate al cursor" @click="dialogVisible3 = true">
										選擇
									</div>
								</div>
								<div class="list clear">
									<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in outTimeList" :key="i">
										{{item.time}} <span class="al" style="margin-left: 5px"><img class="cursor" @click="deleOutTime(i)" src="@/assets/img/cha.png" alt=""></span>
									</div>
								</div>
							</div>
						</el-form-item>
						
						<el-form-item :label='$t("lang.set_type1")' prop="type" class="bcolor">
							<div class="al br">
								<div class="al">
									<!-- <el-select class="width100" v-model="ruleForm.type" placeholder="請選擇類型">
										<el-option label="食品" value="食品"></el-option>
										<el-option label="科技" value="科技"></el-option>
										<el-option label="醫療" value="醫療"></el-option>
										<el-option label="汽車" value="汽車"></el-option>
									</el-select> -->
									<div class="addCate al cursor" @click="dialogVisible2 = true">
										選擇
									</div>
								</div>
								<div class="list clear">
									<div style="color: #B0B0B0;" class="list_item float al" v-for="(item,i) in typeList" :key="i">
										{{item}} <span class="al" style="margin-left: 5px"><img class="cursor" @click="deleTime(i)" src="@/assets/img/cha.png" alt=""></span>
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
					<el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" 
					:label-width="$i18n.locale == 'zh-CN'? '125px': '165px'" class="demo-ruleForm">
						<el-form-item label="廣告媒體類型" prop="mediaType" class="bcolor">
							<div class="al">
								<el-select v-model="ruleForm.cmediaType" placeholder="請選擇類型" @change="getType">
									<el-option label="圖片" value="1"></el-option>
									<el-option label="視頻" value="2"></el-option>
								</el-select>
							</div>
						</el-form-item>
						<el-form-item label="廣告媒體時長" prop="inp">
							<div class="al">
								<div class="al inp_time">
										<!-- <input type="text" class="tc"> -->
									<el-input-number v-model="ruleForm.inp" :step="1" size="small" 
									:min="1" :max="5" label="描述文字"></el-input-number>
								</div>
								<div>{{$t('lang.minute')}}</div>
							</div>
						</el-form-item>
						<el-form-item label="廣告媒體內容" prop="content" class="bcolor">
							<div class="textarea_wrap clear">
								<label for="img">
									<div class="addImg ju al float">
										<img src="@/assets/img/add.png" alt="">
									</div>
									<input type="file" id="img" v-show="false" multiple="multiple" @change="changeFile">
								</label>
								<div class="textarea_wrap_item float" v-for="(item,i) in imageList" :key="i">
									<div class="imageList_wrap">
										<div class="deleImg radius ju al" @click.stop="deleImg(i)"><img style="heihgt: 100%;" src="@/assets/img/cha.png" alt=""></div>
										<div class="textarea_wrap_item_child ju al">
											<img v-if="ruleForm.mediaType == 'image'"  @click="imgPreview(item.url)"
											style="height: 100%;" :src="item.url" alt="">
											<img v-else-if="ruleForm.mediaType == 'video'" @click="previewVideo(item)"
											style="height: 50%;" src="@/assets/img/video_file.png" alt="">
										</div>
									</div>
									<div class="imageList_name tc">{{item.name}}</div>
									<div class="imageList_size tc">{{item.size}}</div>
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
					<div class="addorcancel_btn cursor" style="margin-right: 30px;" @click="submitG">確認修改</div>
					<div class="addorcancel_btn cursor" @click="goBack">取消修改</div>
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
                    <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" 
					 class="demo-ruleForm">
						<el-form-item :label="$t('lang.set_price')" prop="name">
                            <el-select v-model="ruleForm.price" :placeholder="$t('lang.pldselecttype')">
                                <el-option v-for="(item,i) in price_list" :key="i" 
                                :label="'$ ' + item.price + ' HKD'" :value="'$ ' + item.price + ' HKD'">
                                </el-option>
                            </el-select>
						</el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addPrice(ruleForm.price)">确 定</el-button>
            </span>
        </el-dialog>

		<el-dialog
            :visible.sync="dialogVisible2"
            width="30%"
            :before-close="handleClose">
            <div class="">
                <div>
                    <el-form :model="ruleForm" label-position="top" :rules="rules" ref="ruleForm" 
					 class="demo-ruleForm">
						<el-form-item :label="$t('lang.set_type')" prop="t_name">
                            <el-radio-group v-model="radio3" size="small">
                                <el-radio label="1" border style="margin-right: 0;">接收全部行業廣告</el-radio>
                                <el-radio label="2" border>自定義接收外來廣告行業</el-radio>
                            </el-radio-group>
                            <div class="flex" style="margin-top: 5px" v-if="radio3 == '2'">
                                <el-select v-model="ruleForm.t_name" :placeholder="$t('lang.pldselecttype')">
                                    <el-option :label="$t('lang.food')" :value="$t('lang.food')"></el-option>
                                    <el-option :label="$t('lang.Technology')" :value="$t('lang.Technology')"></el-option>
                                    <el-option :label="$t('lang.medical')" :value="$t('lang.medical')"></el-option>
                                    <el-option :label="$t('lang.car')" :value="$t('lang.car')"></el-option>
                                </el-select>
                                <div class="addCate cursor al" @click="addType1(ruleForm.t_name)">
                                    {{$t("lang.addbtn")}}
                                </div>
                            </div>
                            <div class="clear" v-if="radio3 == '2'" style="margin-top: 15px;">
                                <div style="color: #B0B0B0;" class="list_item1 float al" v-for="(item,i) in typeList1" :key="i">
                                    {{item}} <span class="al" style="margin-left: 5px"><img class="cursor" @click="deleType1(i)" src="@/assets/img/cha.png" alt=""></span>
                                </div>
                            </div>
						</el-form-item>
                    </el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="changeType">确 定</el-button>
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
                    <el-form v-show="radio4 == '1'" :label-position="$i18n.locale == 'zh-CN'? labelPosition: 'top'"
						:label-width="$i18n.locale == 'zh-CN'? '100px': '205px'" style="margin-top: 15px;">
                    </el-form>
                    <el-form ref="ruleForm" v-show="radio4 == '22'" style="margin-top: 15px;"
                        :label-position="$i18n.locale == 'zh-CN'? labelPosition: 'top'"
						:label-width="$i18n.locale == 'zh-CN'? '90px': '205px'" class="demo-ruleForm">
						<el-form-item label="繁忙時段">
                            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" 
                            @change="handleCheckAllChange">全选</el-checkbox>
                            <div style="margin: 15px 0;"></div>
							<el-checkbox-group v-model="checkedCities" @change="adListadd">
								<el-checkbox v-for="(item,i) in busyTimeList" :label="item" :key="i">{{item}}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="超繁忙時段">
                            <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" 
                            @change="handleCheckAllChange1">全选</el-checkbox>
                            <div style="margin: 15px 0;"></div>
							<el-checkbox-group v-model="checkedCities12" @change="adsListadd">
								<el-checkbox v-for="(item,i) in sbusyTimeList" :label="item" :key="i">{{item}}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="非繁忙時段">
                            <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" 
                            @change="handleCheckAllChange2">全选</el-checkbox>
                            <div style="margin: 15px 0;"></div>
							<el-checkbox-group v-model="checkedCities2" @change="adunListadd">
								<el-checkbox v-for="(item,i) in unbusyTimeList" :label="item" :key="i">{{item}}</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
					</el-form>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible3 = false">取 消</el-button>
                <el-button type="primary" @click="sureaddadList">确 定</el-button>
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
			addTimeList: [],
            addTimeList1: [],
            addTimeList2: [],
			dialogVisible: false,
			dialogVisible2: false,
			dialogVisible3: false,
			price_list: [],
			idsList: [],
			priceList: [],
			drawers: false,
			direction: 'rtl',
			adList: ['8:00~9:.00'],
			copy1: [],
			copy2: [],
			copy3: [],
			ggbili: '',
			typeList: [],
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
            ruleForm: {
                name: '',
				t_name: '',
				price: '',
                area: '',
                time: '',
                type: '',
                storeType: '',
                mediaType: '',
                cmediaType: '',
                inp: 1,
				street: '',
                ratio: '',
                date: '',
                content: '',
                address: '',
                message: ""
            },
			labelPosition: 'left',
            rules: {
                name: [
                    { required: true, message: '請輸入廣告名稱', trigger: 'blur' },
                    { min: 3, max: 5, message: '長度需3 到 5 個字符', trigger: 'blur' }
                ],
				price: [
                    { required: true, message: '請選擇', trigger: 'change' }
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
				t_name: [
                    { required: true, message: '請選擇媒體類型', trigger: 'change' }
                ],
                mediaType: [
                    { required: true, message: '請選擇媒體類型', trigger: 'change' }
                ],
                inp: [
                    { required: true, message: '請選擇媒體時長', trigger: 'blur' }
                ],
                ratio: [
                    { required: true, message: '請選擇廣告比例', trigger: 'blur' }
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
                ]
            },
			outTimeList: [],
			areaList: [],
			timeList: [],
            imageList: [],
            imageList1: [],
            minute: [],
			dimg1: '',
			map: null,
			marker: null,
        };
    },
	created () {
		this.$store.dispatch('getAddress',this) 
        this.$store.dispatch('getTypeList',this)
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
		addressList (val) {
			if (val) {
				this.addressList = val
			}
		},
        getTypeList (val) {
			if (val) {
				this.getTypeList = val
			}
		},
        loading (val) {
			if (val) {
				this.loading = val
			}
		}
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
		}
	},
	components: { ElImageViewer },
    methods: {
		AddStore () {       //添加店鋪
			let that = this
            this.$refs.forms.validate(flag => {
                if (flag) {
					let data = {
						shopDtoJson: {
							"shopName": that.ruleForm.name,
							"addressParentId": 1,
							"shopAddressId": 5,
							"addressName": "地址",
							"longitude": "95.65",
							"latitude": "30.15",
							"content": "内容",
							"types": that.storeTypeList,
							"shopTypeId": 2,
							"userId": 6,
							"shopDiscountDtos": [{
								"timeIntervalId": 1,
								"discount": 70,
								"timeIntervalDetailsDtos": [{
									"timeIntervalDetailsId": 1,
									"discount": 70,
									"receiving": true
								}],
								"receiving": true,
								"unified": true
							}],
							"shopGuangGaoDto": {
								"shopGuangGaoTitle": "广告标题",
								"shopGuangGaoLength": 6,
								"shopGuangGaoContents": [{
									"id": null,
									"fileUrl": "www.baidu.com",
									"step": 1,
									"type": 1,
									"shopGuangGaoId": 1
								}]
							},
							"width": "12",
							"heigth": "12",
							"shopImages": ["12313513032"],
							"incomePriceId": 3
						}
					}
					let str = JSON.stringify(data.shopDtoJson)
					const qs = require('qs')
					let data1 = qs.stringify({
						shopDtoJson: str
					})
					AddStore(data1).then(res => {
						console.log(res)
					})
                }
            })
            
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
				that.marker.setMap(null)

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
			return
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
							` +
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
		deleOutTime (i) {
			this.outTimeList.splice(i,1)
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
			this.dialogVisible = false
			if (item) {
				this.priceList = []
				this.priceList.push(item)
				let arr = new Set(this.priceList)
				this.priceList = Array.from(arr)
			}
		},
		deleTime (i) {
			this.typeList.splice(i,1)
		},
		delePrice (i) {
			this.priceList.splice(i,1)
		},
        changeFile (e) {
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
		changeFile1 (e) {
			var files = e.target.files
			let that = this
			if (e.target.files.length<=10 && this.imageList1.length <= 10) {
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
							that.imageList1.push({ url: fileurl, name: name, size: size })
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
		deleImg1 (i) {
			if (this.ruleForm.mediaType == 'video') {
				this.minute.splice(i,1)
				this.ruleForm.inp = 0
				for (let i=0;i<Array.from(this.minute).length;i++) {
					this.ruleForm.inp = this.ruleForm.inp*1 + this.minute[i]
					this.$forceUpdate()
				}
				this.imageList1.splice(i,1)
			} else {
				this.imageList1.splice(i,1)
			}
		},
		sureaddadList () {
			this.dialogVisible3 = false
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
		deleType1 (i) {
			this.typeList1.splice(i,1)
            // this.changeType()
		},
		changeType () {
            this.dialogVisible2 = false
			this.typeList = this.typeList1
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
        overflow: auto;
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
        padding: 0 20px;
        box-shadow: 2px 2px 6px rgb(224, 224, 224) inset;
        height: 37px;
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
        width: 98%;
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
		background: #F5F7FA;
		border: solid 1px #E4E7ED;
		color: rgb(168, 168, 168);
		height: 37px;
		// margin-left: 30px;
		margin-right: 5px;
		overflow: hidden;
		input {
			border: none;
			outline: none;
			width: 100%;
			background: #F5F7FA;
			// height: 100%;
		}
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