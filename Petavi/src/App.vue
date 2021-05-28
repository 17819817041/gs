<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {

}
</script>

<style>
	html, body {
		padding: 0;
		margin: 0;
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
</style>
