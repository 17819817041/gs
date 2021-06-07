<template>
	<div id="app">
		<router-view></router-view>

		<transition name='fade'>
			<div class="mask flex" v-if="callModal">
				<div class="confirmBox mg">
					<div class="flex al mg" style="width:70%">
						<el-image class="IMAGE_HEAD" :src="mask.userHead" fit="cover">
							<div slot="error" class="image-slot ju al" style="height: 100%;width:100%">
								<i class="el-icon-picture-outline" style="font-size:40px;color:gray"></i>
							</div>
						</el-image> 
						<div style="margin-top:30px">{{mask.doctorName}}</div>
					</div>
					<div class="loading" v-if="loading">
						loading...
					</div>
					<div class="wrap_btn sa">
						<div class="btn al ju cursor" @click="cancel">Cancel</div>
						<transition name="fade">
							<div class="btn al ju cursor" v-show="sureCall" @click="sure">Dial</div>
						</transition>
					</div>
				</div>
			</div>
		</transition>

		<transition name='fade'>
			<div class="mask flex" v-if="callModal2">
				<div class="confirmBox mg">
					<div class="sa al">
						<el-image class="IMAGE_HEAD" :src="img" fit="cover"></el-image> Name
					</div>
					<div class="wrap_btn sa">
						<div class="btn al ju cursor" @click="cancel2">Cancel</div>
						<div class="btn al ju cursor" @click="sure2">Dial</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import img from "@/assets/img/0000.png"
export default {
	data () {
		return {
			img: "",
			loading: false,
			// sureCall: true
		}
	},
	created () {
		this.img = img
		let userId = localStorage.getItem("userId")
		if (userId) {
			this.$store.dispatch("IMLogin")
		}
	},
	watch: {
		callModal: {
			handler (val) {
				if (val) {
					this.loading = false
				}
			}
		}
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
		IMuser () { return this.$store.state.user.IMuser },
		mask () {return this.$store.state.user.mask},
		sureCall () { return this.$store.state.user.sureCall }
    },
	methods: {
		sure () {
			this.sureCall = false
			// this.$router.push("/agora")
			console.log(this.callTo)
			console.log(this.callTo.doctorId + '_2')
			this.loading = true
			var config = {
                push: false, // 对方(app端)不在线时是否推送
                timeoutTime: 30000, // 超时时间
                txtMsg: 'I gave you a video call.', // 给对方发送的消息
                pushMsg: 'user is calling you' //推送内容
            };
            // this.$rtcCall.caller = 'mengyuanyuan'; // 指定呼叫方名字
            this.$rtcCall.makeVideoCall(this.callTo.doctorId + '_2',null,true,true,config);

		},
		cancel () {
			this.sureCall = true
			this.callModal = false
			this.$rtcCall.endCall()
		},
		sure2 () {
			this.$rtcCall.acceptCall()
		},
		cancel2 () {
			this.callModal2 = false
			this.$rtcCall.endCall()
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
		z-index: 500;
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
		padding-top: 40px;
	}
	.btn {
		width: 80px;
		border: solid 1px;
		border-radius: 8px;
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
</style>
