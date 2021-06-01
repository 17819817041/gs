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
						<div class="btn al ju cursor" @click="sure">Sure</div>
						
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
						<div class="btn al ju cursor" @click="sure2">Sure</div>
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
			loading: false
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
		mask () {return this.$store.state.user.mask}
    },
	methods: {
		sure () {
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
		border: none !important;
	}
	.el-input .el-input__inner::placeholder {
		text-align: center;
	}
	.el-select .el-input__inner {
		border: solid #787878 1px;
		border-radius: 4px;
		background: white;
		box-shadow: 0 0 1px 1px #959595;
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
	.vet_form .el-radio__input{
		display: none !important;
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
