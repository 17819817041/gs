<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import d_img from "@/assets/img/defaultimg.jpg"
export default {
	name: 'App',
	created () {
		this.$store.dispatch("default", d_img)
	},
	watch: {
        message: {
            handler (val) {
                if (val) {
                    this.message = val
                    this.saveRecord(val)
                }
            },
            deep: true
        },
		fromIM: {
            handler (val) {
                if (val) {
                    this.fromIM = val
                }
            },
            deep: true
        },
		messageList: {
            handler (val) {
                if (val) {
                    this.messageList = val
                    // this.saveRecord(val)
                }
            },
            deep: true
        }
    },
    computed: {
        message: {
            get () { return this.$store.state.user.message },
            set (val) {
                this.$store.commit("setUser", {
                    key: "message",
                    value: val
                })
            },
        },
		messageList: {
            get () { return this.$store.state.user.messageList },
            set (val) {
                this.$store.commit("setUser", {
                    key: "messageList",
                    value: val
                })
            },
        },
		fromIM: {
            get () { return this.$store.state.user.fromIM },
            set (val) {
                this.$store.commit("setUser", {
                    key: "fromIM",
                    value: val
                })
            },
        },
    },
	methods: {
		saveRecord (val) {
			if (this.fromIM) {
                this.messageList = this.message[this.fromIM].messageList
            }
            localStorage.setItem('message',JSON.stringify(this.message))
        },
	}
}
</script>

<style lang='less'>
	body,html {
		margin: 0;
		padding: 0;
		height: 100%;
	}
	div {
		box-sizing: border-box;
	}
	.flexEnd {
		display: flex;
		justify-content: flex-end;
	}
	#app {
		height: 100%;
		min-width: 1170px;
	}
	.white {
		color: white;
	}
	.float {
		float: left;
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
	.tc {
		text-align: center;
	}
	.te {
		text-align: end;
	}
	.ts {
		text-align: start;
	}
	.mg {
		margin: auto;
	}
	.width100 {
		width: 100%;
	}
	.size12 {
		font-size: 12px;
		color: #7C7D7E;
	}

	/* <!-- input --> */
	.el-input .el-input__inner {
		border: none !important;
		outline: none !important;
	}
	.pwdContent .el-input .el-input__inner {
		padding-right: 0 !important;
	}

	.el-rate__icon {
		margin-right: 0 !important;
	}
	.clear:after{
		content: '';
		display: block;
		clear: both;
		height:0;
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
	.size12b {
		font-size: 12px;
		color: white;
	}

	.paymentHistory .el-select .el-input--suffix .el-input__inner, .appointment .el-select .el-input--suffix .el-input__inner {
		background: white !important;
	}

	.paymentHistory_cus .el-pagination .btn-prev, .paymentHistory_cus .el-pagination .btn-next, 
	.paymentHistory_cus .el-pagination .el-pager .number, .paymentHistory_cus .el-pagination .el-pager .el-icon-more,
	.record .el-pagination .btn-prev, .record .el-pagination .btn-next, 
	.record .el-pagination .el-pager .number, .record .el-pagination .el-pager .el-icon-more {      
		background: #F2F2F2 !important;
	}

	.appointment .calendar .fc {
		min-height: 430px !important;
		height: 100% !important;
	}
	.appointment .calendar .fc .fc-scroller-liquid-absolute {
		-ms-overflow-style:none !important;scrollbar-width: none !important;
	}
	.appointment .calendar .fc-button {
		@media screen and (max-width: 1350px) {
			padding: 2px;
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
</style>
