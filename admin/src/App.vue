<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	name: 'App',
	components: {

	}
}
</script>

<style>
	body,html {
		margin: 0;
		padding: 0;
		height: 100%;
	}
	div {
		box-sizing: border-box;
	}
	#app {
		height: 100%;
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
</style>
