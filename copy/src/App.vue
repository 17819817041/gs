<template>
	<div id="app">
		<router-view></router-view>
		<!-- <keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view> -->
		<transition name='fade'>
			<div class="mask flex" v-if="callModal">
				<div class="confirmBox mg">
					<div class="flex al mg" style="width:90%;height:70px;">
						<el-image class="IMAGE_HEAD" :src="mask.userHead" fit="cover">
							<div slot="error" class="image-slot ju al" style="height: 100%;width:100%">
								<i class="el-icon-picture-outline" style="font-size:40px;color:gray"></i>
							</div>
						</el-image> 
						<div style="margin-left:20px;height:100%;line-height:109px;">
							<span style="font-size:22px;" class="bold">Dr.</span> 
							{{mask.doctorName}}
						</div>
					</div>
					<div class="loading ju" v-if="!callLoading">
						Are you sure to call?
					</div>
					<div class="loading ju al" v-else>
						Waiting for the answer...
					</div>
					<div class="wrap_btn sa">
						<div class="btn al ju cursor" @click="cancel">
							<el-button class="width100 cancelBtn" round size="mini">Cancel</el-button>
						</div>
						<div class="btn al ju cursor" v-if="sureCall" @click="sure">
							<el-button type="danger" class="width100" round size="mini">Dial</el-button>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<transition name='fade'>
			<div class="mask flex" v-if="callModal2">
				<div class="confirmBox mg">
					<div class="flex al mg"  style="width:80%;height:70px;">
						<div>
							<el-image class="IMAGE_HEAD" :src="caller.userImage" fit="cover"></el-image>
						</div>
						<div style="margin-left:20px;height:100%;line-height:109px">{{caller.userName}}</div>
					</div>
					<div class="loading ju al">
						Whether to answer the call
					</div>
					<div class="wrap_btn sa">
						<div class="btn al ju cursor" @click="cancel2">
							<el-button class="width100 cancelBtn" round size="mini">Hand Up</el-button>
						</div>
						<div class="btn al ju cursor" v-if="sureCall" @click="sure2">
							<el-button type="danger" class="width100" round size="mini">Answer</el-button>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import d_img from "@/assets/img/defaultimg.jpg"
import { min } from "@/axios/request.js"
export default {
	data () {
		return {
			loading: false,
			timer: "",
      		value: 0,
			mettingId: 0
		}
	},
	created () {
		this.$store.dispatch("default", d_img)
		let userId = localStorage.getItem("userId")
		let platform = localStorage.getItem('platform')
		if (userId && platform == 2) {
			this.start()
		}
	},
	watch: {
		callModal: {
			handler (val) {
				if (val) {
					this.loading = false
				}
			}
		},
		adminList: {
            handler (val) {
                if (val) {
                    this.adminList = val
                    this.saveRecord(val)
                }
            },
            deep: true
        },
		petId: {
            handler (val) {
                if (val) {
                    this.petId = val
                }
            }
        },
		pet: {
            handler (val) {
                if (val) {
                    this.pet = val
                }
            }
        },
		my_Balance: {
            handler (val) {
                if (val) {
                    this.my_Balance = val
                }
            },
			deep:true
        },
	},
	computed: {
        callModal: {
            get () { return this.$store.state.user.callModal },
            set (val) {
                this.$store.commit("setUser", {
                    key: "callModal",
                    value: val
                })
            },
        },
		adminList: {
            get () { return this.$store.state.user.adminList },
            set (val) {
                this.$store.commit("setUser", {
                    key: "adminList",
                    value: val
                })
            },
        },
		callLoading: {
            get () { return this.$store.state.user.callLoading },
            set (val) {
                this.$store.commit("setUser", {
                    key: "callLoading",
                    value: val
                })
            },
        },
		callModal2: {
            get () { return this.$store.state.user.callModal2 },
            set (val) {
                this.$store.commit("setUser", {
                    key: "callModal2",
                    value: val
                })
            },
        },
		callTo () { return this.$store.state.user.callTo },
		caller () { return this.$store.state.user.caller },
		joinParams () { return this.$store.state.user.joinParams },
		userDetail () { return this.$store.state.user.userDetail },
		IMuser () { return this.$store.state.user.IMuser },
		mask () {return this.$store.state.user.mask},
		cut_metting () { return this.$store.state.user.mettingId },
		my_Balance: {
			get () { return this.$store.state.user.balance },
			set (val) {
                this.$store.commit("setUser", {
                    key: "balance",
                    value: val
                })
            },
		},
		petId: {
			get () { return this.$store.state.user.petId },
			set (val) {
				this.$store.commit("setUser", {
                    key: "petId",
                    value: val
                })
			}
		},
		pet: {
			get () { return this.$store.state.user.pet },
			set (val) {
				this.$store.commit("setUser", {
                    key: "pet",
                    value: val
                })
			}
		},
		dom () {return this.$store.state.user.dom},
		rtc () {return this.$store.state.user.rtc},
		sureCall: {
			get () { return this.$store.state.user.sureCall },
            set (val) {
                this.$store.commit("setUser", {
                    key: "sureCall",
                    value: val
                })
            },
		},
		scrollTop: {
			get () { return this.$store.state.user.scrollTop },
            set (val) {
                this.$store.commit("setUser", {
                    key: "scrollTop",
                    value: val
                })
            },
		}
    },
	methods: {
		saveRecord (val) {
            localStorage.setItem('adminList',JSON.stringify(this.adminList))
        },
		start(){
			this.timer = setInterval(this.valChange, 60000); // 注意: 第一个参数为方法名的时候不要加括号;
		},
		valChange() {
			this.value++;
			let data = {
				userId: localStorage.getItem('userId'),
				platform: localStorage.getItem('platform')
			}
			min(data).then(res => {
			})
		},
		sure () {
			if (this.my_Balance.balance >= 20) {
				this.callLoading = true
				this.sendMsg()
			} else {
				this.$message({
					type:'error',
					message: 'Your balance is insufficient!'
				})
			}
		},
		sendMsg () {
			let D = new Date().getTime()
            localStorage.setItem('sroom',D)
			let data = {
                type: "Call",
				user: this.userDetail,
				platform: localStorage.getItem('platform'),
				petId: this.petId,
				mettingId: this.mettingId,
				sroom: D
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: JSON.stringify(data),                  // 消息内容
                to: JSON.stringify(this.callTo.doctorId) + 'A2',      // 接收消息对象（用户id）
                chatType: 'singleChat',                  // 设置为单聊                       
                success: function (id, serverMsgId) {
                    console.log('send private text Success');  
                }, 
                fail: function(e){
                    console.log(e)
                    console.log("Send private text error");  
                }
            });
            this.$conn.send(msg.body);
            this.$store.commit("setUser",{ key: 'callerIM', value: this.userDetail.userId + 'A' + localStorage.getItem('platform') })
		},
		cancel () {
			this.sureCall = true
			this.callModal = false
			this.callLoading = false
			let data = {
                type: "HangUp1"
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: JSON.stringify(data),                  // 消息内容
                to: JSON.stringify(this.callTo.doctorId) + 'A2',     
                chatType: 'singleChat',                  // 设置为单聊   
            });
            this.$conn.send(msg.body);
		},
		sure2 () {
			this.$router.push("/agora")
			this.callModal2 = false
		},
		cancel2 () {
			this.callModal2 = false
			let data = {
                type: "HangUp",
				mettingId: this.cut_metting
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: JSON.stringify(data),                  // 消息内容
                to: JSON.stringify(this.caller.userId) + 'A1',     
                chatType: 'singleChat',                  // 设置为单聊   
            });
            this.$conn.send(msg.body);
		}
	}
}
</script>

<style lang="less">
	@import "@/less/css.less";
	html, body {
		padding: 0;
		margin: 0;
		height: 100%;
	}
	#app {
		height: 100%;
		// min-width: 830px;
		@media screen and (max-width: 564px) {
			min-width: 0;
		}
		.scrollTop {
			position: fixed;
			right: 25px;
			bottom: 30px;
			z-index: 100;
			padding: 12px;
			color: @callBtn;
			background: #F2F5F6;
			overflow: hidden;
			border-radius: 50%;
		}
	}
	div {
		box-sizing: border-box;
	}
	.flexEnd {
		display: flex;
		justify-content: flex-end;
	}
	.el-input .el-input__inner {
		outline: none !important;
		border: none !important;
	}
	
	.FormL .el-input .el-input__inner {
		border: none !important;
		padding-right: 0 !important;
	}
	.FormL .el-input .el-input__inner::placeholder {
		text-align: center !important;
	}

    .el-select .el-input .el-select__caret::before {
		content: "";
		background: url('~@/assets/img/arrowUp.png') center center no-repeat;
		position: absolute;
		width: 16px;
		height: 12px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden !important;
	}

	.vetSetting .profile .el-select .el-input, 
	.vetSetting .profile .el-select .el-input .el-input__inner, 
	.vetSetting .profile .timeInp_wrap .el-input__inner {
		background: white !important;
		color: rgb(199, 199, 199) !important;
		height: 100% !important;
	}

	.form_select .el-select .el-input__inner {
		// border: solid #787878 1px !important;
		border-radius: 4px !important;
		background: white !important;
		box-shadow: 0 0 2px 1px #818080 !important;
		outline: none !important;
	}
	.form_select .el-select .el-input__inner::-webkit-input-placeholder {
		@media screen and (max-width: 564px) {
			font-size: 12px !important;
		}
	}
	.form_select .typeFlex .el-form-item__error {
		width: 100%;
		text-align: center !important;
		padding: 0 !important;
	}
	.form_select .el-input--suffix .el-icon-time {
		display: none;
	}
	.form_select .el-date-editor .el-input__suffix {
		display: none;
	}
	.typeFlex .el-form-item__content {
		display: flex;
		line-height: 20px;
	}
	.form_select .el-radio__input{
		display: none !important;
	}
	.form_select .el-radio {
		margin:auto
	}
	.form_select .el-form-item__label {
		color: #B6B7B7 !important;
	}

	
	.el-select {
		width: 100% !important;
		
	}
	.el-form-item__label {
		padding: 15px 0 !important;
		line-height: 0 !important;
	}
	.el-rate__icon {
		margin-right: 0 !important;
	}


	.vetSetting .el-icon-time, .vetSetting .el-input__suffix {
		display: none !important;
	}


	.setting .gender .el-input {
		height: 100% !important;
	}
	.setting .gender .el-input .el-input__inner {
		height: 100% !important;
		background: white !important;
	}
	.setting .Remark .el-textarea .el-textarea__inner {
		height: 70px !important;
		background: white !important;
		border: none !important;
		outline: none !important;
		resize: none !important;
	}


	.vet_form .el-input .el-input__inner {
		border: none !important;
		padding-right: 0 !important;
	}
	.vet_form .el-input .el-input__inner::placeholder {
		text-align: center !important;
	}
	.vet_form .el-radio__input{
		display: none !important;
	}
	.vet_form .el-radio {
		@media screen and (max-width:564px) {
			margin-right: 0 !important;
		}
	}
	// .docHead_img .docHead .image-slot .el-icon-picture-outline {
	// 	display: flex;
	// 	justify-content: center;
    //     width: 100px;
    //     height: 100px;
	// 	background: red;
    // }
	// .el-icon-picture-outline {
	// 	width: 1100px !important;
	// 	height: 100px !important;
	// }
	.message_form .el-select .el-input {
		border: solid 1px !important;
		color: rgb(112,112,112);
		border-radius: 10px;
		overflow: hidden;
	}
	.message_form .el-select .el-input .el-input__inner {
		background: white !important;
	}
	.message_form .el-cascader .el-icon-arrow-down {
		display: none !important;
	}


	.star_time .el-date-editor {
		// border: solid #787878 1px !important;
		border-radius: 4px !important;
		background: white !important;
		box-shadow: 0 0 2px 1px #818080 !important;
		outline: none !important;
		width: 100% !important;
	}
	.star_time .el-date-editor .el-input__inner {
		background: white !important;
		
	}
	.star_time .el-date-editor .el-input__inner::-webkit-input-placeholder {
		@media screen and (max-width: 564px) {
			font-size: 12px !important;
		}
	}
	.end_time .el-date-editor {
		width: 100% !important;
		// border: solid #787878 1px !important;
		border-radius: 4px !important;
		background: white !important;
		box-shadow: 0 0 2px 1px #818080 !important;
		outline: none !important;
		width: 100% !important;
	}
	.end_time .el-date-editor .el-input__inner {
		background: white !important;
	}


	.person .el-input__inner {
		background: white !important;
	}
	// .person .el-icon-time, .person .el-input__suffix {
	// 	display: none !important;
	// }
	.person .el-input__inner {
		height: 100% !important;
		background: white !important;
	}
	.person .el-input--suffix {
		height: 100% !important;
	}


	.day_time .el-input__inner {
		padding: 0 !important;
		text-align: center !important;
	}
	.day_time .el-input__suffix {
		display: none !important;
	}

	.vetReset .el-input, .vetReset .el-input .el-input__inner {
		border-radius: 4px;
		background: #f2f2f2 !important;
	}
	.vetReset .el-input .el-input__inner::placeholder {
		text-align: center !important;
	}
	.reset .el-input .el-input__inner::placeholder {
		text-align: center !important;
	}


	.float {
		float: left;
	}
	.size14 {
		font-size: 14px;
		color: #767676;
	}
	.size15 {
		font-size: 15px;
        color: #767676;
	}
	.size16 {
		font-size: 16px;
		@media screen and(max-width: 1100px) {
			font-size: 14px;
		}
	}
	.width100 {
		width: 100%;
	}
	.al {
		display: flex;
		align-items: center;
	}
	.flex {
		display: flex;
	}
	.ju {
		display: flex;
		justify-content: center;
	}
	.sb {
		display: flex;
		justify-content: space-between;
	}
	.sa {
		display: flex;
		justify-content: space-around;
	}
	.bold {
		font-weight: bold;
	}
	.size12 {
		font-size: 12px;
		color: #7C7D7E;
	}
	.size12b {
		font-size: 12px;
		color: white;
	}
	.size13 {
		font-size: 13px;
	}
	.clear:after{
		content: '';
		display: block;
		clear: both;
		height:0;
	}
	.size12a {
		font-size: 12px;
		color: #9F9F9F;
	}
	.size21 {
		font-size: 24px;
	}
	.tc {
		text-align: center;
	}
	.te {
		text-align: end;
	}
	.ts {
		text-align: start;
	}
	.cursor {
		cursor: pointer;
		user-select: none;
		@media screen and (max-width: 800px) {
			cursor: none;
		}
	}
	.cursor:hover {
		opacity: 0.8;
		@media screen and (max-width: 800px) {
			cursor: none;
		}
	}
	.cursor:active {
		opacity: 0.6;
		user-select: none;
		@media screen and (max-width: 800px) {
			cursor: none;
			user-select: auto;
		}
	}
	.mg {
		margin: auto;
	}
	.white {
		color: white;
	}
	.mask {
		position: fixed;
		z-index: 2800;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.4);
		left: 0;
		top: 0;
	}
	.confirmBox {
		background: white;
		box-shadow: 0 2px 2px 2px gray;
		padding: 15px;
		width: 300px;
		border-radius: 10px;
	}
	.wrap_btn {
		padding-top: 10px;
	}
	.btn {
		width: 90px;
		border-radius: 8px;
		transition: 0.2s;
	}
	.cancelBtn {
		background: @denger !important;
		color: white !important;
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity 0.1s;
	}
	.fade-enter, .leave-active {
		opacity: 0;
	}
	.IMAGE_HEAD {
		width: 70px;
		height: 70px;
		padding: right 20px;
		border-radius: 50%;
		border: solid 1px rgb(207, 202, 202);
	}
	.loading {
		padding: 20px 0;
		font-size: 14px;
		color: gray;
	}
	.el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }
	.first_pet .el-carousel__container {
		height: 243px;
		@media screen and (max-width: 1500px) {
            height: 203px;
        }
        @media screen and (max-width: 1200px) {
            height: 180px;
        }
        @media screen and (max-width: 1100px) {
            height: 150px;
        }
        @media screen and (max-width: 800px) {
            height: 125px;
        }
        @media screen and (max-width: 600px) {
            height: 85px;
        }
        @media screen and (max-width: 440px) {
            height: 65px;
        }
	}
	.first_pet .el-carousel__container .el-carousel__arrow--left {
		left: 0 !important;
	}
	.first_pet .el-carousel__container .el-carousel__arrow--right {
		right: 0 !important;
	}
	.agora .el-button {
		border-radius: 20px !important;
	}
	.agora .el-button--submit {
		background: @hdColor !important;
	}
	.first_item .first_pet .is-active {
		display: flex;
		padding: 0 40px;
		justify-content: space-between !important;
		@media screen and (max-width: 600px) {
            padding: 0 10px;
        }
	}
	.first_item .first_pet .el-carousel__container {
		width: 100% !important;
	}
	.first_item .first_pet .el-carousel__indicators--horizontal {
		// transform: translate(-50%) !important;
		// position: absolute !important;
		display: none !important;
	}

	.headerLogoPage .mobile_s .oicq_inp .el-input__inner, 
	.headerLogoPage .mobile_s .oicq_inp .el-input__inner .el-input--small{
		height: 100% !important;
		background: white !important;
	}
	.headerLogoPage .mobile_s .oicq_inp .el-input--small .el-input__icon {
		line-height: 0 !important;
	}

	.el-message-box__wrapper .el-message-box {
		@media screen and (max-width: 564px) {
			width: 293px;
		}
	}
	.v-modal {
		display: none;
		@media screen and (max-width: 800px) {
			display: block;
		}
	}
	.record .el-collapse .el-collapse-item .el-collapse-item__header {
		height: 60px !important;
	}

	.customer_content .pet_message .el-drawer__wrapper .el-drawer__body {
		height: 100% !important;
	}


	.appointment .calendar .fc {
		min-height: 430px !important;
		height: 100% !important;
	}
	.appointment .calendar .fc .fc-scroller-liquid-absolute {
		-ms-overflow-style:none !important;scrollbar-width: none !important;
	}
	.appointment .calendar .fc .fc-scroller-liquid-absolute::-webkit-scrollbar { display: none !important; }
	.appointment .calendar .fc .fc-scroller-liquid-absolute .fc-daygrid-event-dot {
		@media screen and (max-width: 564px) {
			margin: 0;
		}
		@media screen and (max-width: 310px) {
			display: none;
		}
	}
	.appointment .calendar .fc .fc-scroller-liquid-absolute .fc-daygrid-event {
		@media screen and (max-width: 564px) {
			font-size: 12px !important;
		}
	}
	.appointment .calendar .fc-header-toolbar {
		@media screen and (max-width: 564px) {
			flex-direction: column !important;
		}
	}
	.appointment .calendar .fc-button {
		@media screen and (max-width: 1350px) {
			padding: 2px;
			height: 32px;
		}
		@media screen and (max-width: 564px) {
			padding: 0 12px;
			height: 32px;
		}
	}
	.appointment .calendar .fc-toolbar-title {
		@media screen and (max-width: 1350px) {
			font-size: 1.50em;
		}
		@media screen and (max-width: 1350px) {
			font-size: 1.50em;
			padding: 5px 0;
		}
	}

	.myAppointment .el-select .el-input--suffix .el-input__inner {
		background: white !important;
	}

	.notice .el-pagination .btn-prev, .notice .el-pagination .btn-next, 
	.notice .el-pagination .el-pager .number, .notice .el-pagination .el-pager .el-icon-more,
	.vetNotice .el-pagination .btn-prev, .vetNotice .el-pagination .btn-next, 
	.vetNotice .el-pagination .el-pager .number, .vetNotice .el-pagination .el-pager .el-icon-more,
	.paymentHistory_cus .el-pagination .btn-prev, .paymentHistory_cus .el-pagination .btn-next, 
	.paymentHistory_cus .el-pagination .el-pager .number, .paymentHistory_cus .el-pagination .el-pager .el-icon-more,
	.paymentHistory_vet .el-pagination .btn-prev, .paymentHistory_vet .el-pagination .btn-next, 
	.paymentHistory_vet .el-pagination .el-pager .number, .paymentHistory_vet .el-pagination .el-pager .el-icon-more,
	.myAppointment .el-pagination .btn-prev, .myAppointment .el-pagination .btn-next, 
	.myAppointment .el-pagination .el-pager .number, .myAppointment .el-pagination .el-pager .el-icon-more {      
		background: #F2F2F2 !important;
	}

	.vet .el-form-item__content {
		white-space: nowrap !important;
	}
</style>
