<template>
	<div id="app">
		<router-view></router-view>

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
import { min, addMetting } from "@/axios/request.js"
export default {
	data () {
		return {
			loading: false,
			timer: "",
      		value: 0,
		}
	},
	created () {
		let userId = localStorage.getItem("userId")
		if (userId) {
			this.$store.dispatch("IMLogin")
		}
		this.start()
		this.getNotice()
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
                    console.log(val,1312132131236666666666666666666666666666666666666666666661)
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
		petId: {
			get () { return this.$store.state.user.petId },
			set (val) {
				this.$store.commit("setUser", {
                    key: "petId",
                    value: val
                })
			}
		},
		pet () {return this.$store.state.user.pet},
		sureCall: {
			get () { return this.$store.state.user.sureCall },
            set (val) {
                this.$store.commit("setUser", {
                    key: "sureCall",
                    value: val
                })
            },
		}
    },
	methods: {
		saveRecord (val) {
            localStorage.setItem('adminList',JSON.stringify(this.adminList))
        },
		getNotice () {
			let that = this
			let page = {
				vm: that,
				pageNum: 1,
				pageSize: 100
			}
			this.$store.dispatch('getNoticeList', page)
		},
		start(){
			this.timer = setInterval(this.valChange, 60000); // 注意: 第一个参数为方法名的时候不要加括号;
		},
		valChange() {
			this.value++;
			let data = {
				platform: 1,
				userId: 486
			}
			min(data).then(res => {
				console.log(res)
			})
			console.log(this.value);
		},
		async sure () {
			this.$router.push("/agora")
			this.callLoading = true
			let params = {
				roomName: this.$store.state.user.IMuser.username,
				password: "123456",
				role: 3,
				config:{ 
					rec: false, 
					recMerge:false, //是否开启合并录制
            		supportWechatMiniProgram: true //是否允许小程序加入会议
				}
			}
			const user_room = await emedia.mgr.joinRoom(params);
			this.addConfr(user_room.confrId)
			console.log("room",user_room,params)
			let constraints = { audio: true, video: true };
			const stream = await emedia.mgr.publish(constraints)
			this.$store.commit('setApp',{ key: 'localStream', value: stream.localStream })
			// this.callModal = false
			// this.$router.push("/agora")
			this.sendMsg(params)
		},
		sendMsg (params) {
			let data = {
                type: "Call",
				user: this.userDetail,
				platform: localStorage.getItem('platform'),
				petId: this.petId,
				params
            }
            let id = this.$conn.getUniqueId();                 // 生成本地消息id
            let msg = new this.$WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: JSON.stringify(data),                  // 消息内容
                to: JSON.stringify(this.callTo.doctorId) + 'A2',     
                // to: '322_2',                     // 接收消息对象（用户id）
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
			window.eMedia.mgr.exitConference()
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
			// this.$router.back()
		},
		async sure2 () {
			this.$router.push("/agora")
			this.callModal2 = false
			let that = this
			setTimeout(async function ()  {
				const user_room = await emedia.mgr.joinRoom(that.joinParams);
				let constraints = { audio: true, video: true };
				const stream = await emedia.mgr.publish(constraints)
				console.log(stream)
				// this.$store.commit('setApp',{ key: 'localStream', value: stream.localStream })
				let data = {
					type: "confirmCall"
				}
				let id = that.$conn.getUniqueId();                 // 生成本地消息id
				let msg = new that.$WebIM.message('txt', id);      // 创建文本消息
				msg.set({
					msg: JSON.stringify(data),                  // 消息内容
					to: JSON.stringify(that.caller.userId) + 'A1',     
					chatType: 'singleChat',                  // 设置为单聊   
				});
				that.$conn.send(msg.body);

			},500)
			
		},
		addConfr (val) {
			let D = new Date
			var date = D.toLocaleDateString()
			let detail = {
				petName: this.pet.name,
				petId: this.petId,                 
				caller: this.userDetail,
				callTo: this.callTo,
				createdTime: date,
				password: '123456'
			}
			let data = {
				'jo': [{
					confrId: val,
					userId: this.userDetail.userId + 'A' + localStorage.getItem('platform'),
					doctorId: this.callTo.doctorId + 'A2',
					password: JSON.stringify(detail),
					// password: '123456',
				}]
			}
			addMetting(data).then(res => {
				console.log(res)
			})
		},
		cancel2 () {
			this.callModal2 = false
			let data = {
                type: "HangUp"
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

	.form_select .el-select .el-input__inner {
		// border: solid #787878 1px !important;
		border-radius: 4px !important;
		background: white !important;
		box-shadow: 0 0 2px 1px #818080 !important;
		outline: none !important;
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
	}
	.cursor:hover {
		opacity: 0.8;
	}
	.cursor:active {
		opacity: 0.6;
		user-select: none;
	}
	.mg {
		margin: auto;
	}
	.white {
		color: white;
	}
	.mask {
		position: fixed;
		z-index: 800;
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
		transition: opacity 0.3s;
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
	.calendar .calendarMini .el-calendar-day {
		height: 30px !important;
		text-align: center;
	}
	.calendar .calendarMini .el-calendar-table__row .prev, .calendar .calendarMini .el-calendar-table__row .current, 
	.calendar .calendarMini .el-calendar-table__row .next {
		border: none !important;
	}
	.calendar .calendarMini thead {
		font-size: 14px !important;
	}
	.calendar .calendarMini tbody {
		font-size: 12px !important;
	}
</style>
