<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang='less'>
@import "@/less/style.less";
	body, html {
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

	.width100 {
		width: 100% !important;
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
  	.clear:after{
		content: '';
		display: block;
		clear: both;
		height:0;
	}
	.footer {
        color: #7C8FC1;
        margin-top: 30px;
    }
	.float {
		float: left;
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
	// .cursor:hover {
	// 	opacity: 0.8;
	// 	@media screen and (max-width: 800px) {
	// 		cursor: none;
	// 	}
	// }
	.cursor:active {
		opacity: 0.6;
		user-select: none;
		@media screen and (max-width: 800px) {
			user-select: auto;
		}
	}
	.mg {
		margin: auto;
	}
	.white {
		color: white;
	}
	.el-drawer__header {
		display: none !important;
	}
	.el-dialog {
		min-width: 350px !important;
		@media screen and (max-width: 800px) {
			margin-top: 7vh !important;
		}
	}
	.el-dialog__body {
		@media screen and (max-width: 564px) {
			padding: 0 20px !important;
		}
	}
	.el-form-item--feedback {
		@media screen and (max-width: 564px) {
			margin-bottom: 6px !important;
		}
	}
	.el-button {
		padding: 7px 20px !important;
	}
	.el-form-item__label {
		font-size: 14px !important;
		padding: 0 !important;
		@media screen and (max-width: 564px) {
			font-size: 12px !important;
		}
	}
</style>
