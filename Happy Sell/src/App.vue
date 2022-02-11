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
	}
	div {
		box-sizing: border-box;
	}
	.fade-enter-active{
		transition: opacity .5s;
	}
	.fade-enter{
		opacity: 0;
	}
	.fade-leave-active{
		transition: opacity .5s;
	}
	.fade-leave-to{
		opacity: 0;
	}

	.flexEnd {
		display: flex;
		justify-content: flex-end;
	}
	.cover {
		width: 100%;
		height: 100%;
		object-fit: cover !important;
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
	.clear:after{
		content: '';
		display: block;
		clear: both;
		height:0;
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
	.media564 {
		@media screen and (max-width: 564px) {
			display: block !important;
		}
	}

	.Login .loginPage .el-input .el-input__icon::before {
		content: "";
		background: url('~@/assets/img/Show.png') center center no-repeat;
		position: absolute;
		width: 33px;
		height: 17px;
		top: 50%;
		left: 20%;
		// color: red !important;
		transform: translate(-50%, -50%);
	}
	.Login .loginPage1 .el-input .el-input__inner {
		background: #F5F6F8 !important;
		height: 52px !important;
	}
	.Login .el-form .el-form-item__label::before {
		display: none !important;
	}
	.Login .signPage1 .el-input .el-input__inner {
		border-top: none !important;
		border-right: none !important;
		border-left: none !important;
		border-radius: 0 !important;
		border-bottom: solid 1px #DCDFE6;
	}
</style>
