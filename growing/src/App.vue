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
		background: #F2F2F2;
	}
	.theme {
		background: #F2F2F2;
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
	.radius {
		border-radius: 50%;
		overflow: hidden;
	}
	.bold {
		font-weight: bold;
	}
	.float {
		float: left;
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
	.boxs {
		box-shadow: 0 0 5px rgb(163, 163, 163) inset;
	}

	.el-table__header .has-gutter {
		color: black !important;
	}
	.el-table .el_color {
        background: #E5E5E5;
    }

	
	.AdvertisingOperation .el-table .el-table__header-wrapper {
		background: black !important;
	}

	.Sign .el-select .el-input .el-select__caret::before {
		content: "";
		background: url('~@/assets/img/arrow.png') center center no-repeat;
		position: absolute;
		width: 23px;
		height: 17px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden !important;
	}
	.Sign .el-select .el-input .el-input__inner {
		color: white;
		border: none !important;
		outline: none !important;
		background: none !important;
	}


	.AdvertisingAdd .el-select .el-input .el-select__caret::before {
		content: "";
		background: url('~@/assets/img/arrow_up.png') center center no-repeat;
		position: absolute;
		width: 23px;
		height: 17px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden !important;
	}
	.AdvertisingAdd .el-form .el-form-item__label {
		white-space: nowrap;
	}
	.AdvertisingAdd .el-date-editor {
		width: 100% !important;
	} 
	.Gdetail .el-select .el-input .el-select__caret::before {
		content: "";
		background: url('~@/assets/img/arrow_up.png') center center no-repeat;
		position: absolute;
		width: 23px;
		height: 17px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden !important;
	}
	.Gdetail .el-form .el-form-item__label {
		white-space: nowrap;
	}
	.Gdetail .el-date-editor {
		width: 100% !important;
	}


	.AddStore .block .el-input .el-input__inner, .AddStore .block .el-input {
		border: none !important;
		outline: none !important;
		height: 32px !important;
		line-height: 32px !important;
	}

	.AddStore .el-form .el-form-item__label {
		white-space: nowrap;
	}
	.AddStore .el-select .el-input .el-select__caret::before {
		content: "";
		background: url('~@/assets/img/arrow_up.png') center center no-repeat;
		position: absolute;
		width: 23px;
		height: 17px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden !important;
	}
	.AddStore .el-select {
		box-shadow: 0 0 5px rgb(163, 163, 163) inset;
		padding: 4px;
	}
	.AddStore .elinput .el-input .el-input__inner {
		box-shadow: 0 0 5px rgb(163, 163, 163) inset;
		border: none !important;
		outline: none !important;
	}
	.AddStore .el-select .el-input .el-input__inner {
		border: none !important;
		outline: none !important;
		background: white !important;
		height: 30px !important;
		display: flex;
	}
	.AddStore .el-select .el-input .el-input__suffix {
		display: flex;
		align-items: center;
	}
	.AddStore .el-date-editor {
		width: 100% !important;
	}
	.AddStore .el-form-item {
		margin-bottom: 0;
		padding: 20px 0;
	}



	.Income .selectBtn .el-date-editor .el-input__inner {
		height: 30px !important;
	}   
	.Income .el-select .el-input .el-select__caret::before {
		content: "";
		background: url('~@/assets/img/arrow_up.png') center center no-repeat;
		position: absolute;
		width: 23px;
		height: 17px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden !important;
	}
	.Income .el-date-editor .el-input__prefix .el-input__icon {
		line-height: 30px !important;
	}
	.Income .el-date-editor .el-input__inner {
		background: @themeColor;
	}
	.Income .el-select .el-input .el-input__inner {
		color: white !important;
		border: none !important;
		outline: none !important;
		background: none !important;
		height: 30px !important;
		display: flex;
	}
	.Income .el-select .el-input .el-input__inner::-webkit-input-placeholder{
		color:#DCDCDC;
	}
	.Income .el-select .el-input .el-input__suffix {
		display: flex;
		align-items: center;
	}


	.StoreAdministrator .el-select .el-input .el-input__inner {
		border: none !important;
		outline: none !important;
		background: white !important;
		height: 28px !important;
		display: flex;
	}
	.StoreAdministrator .el-select .el-input .el-select__caret::before {
		content: "";
		background: url('~@/assets/img/arrow_up.png') center center no-repeat;
		position: absolute;
		width: 23px;
		height: 17px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden !important;
	}  

	.AuditList .el-select .el-input .el-input__inner {
		border: none !important;
		outline: none !important;
		background: white !important;
		height: 28px !important;
		display: flex;
	}
	.AuditList .el-select .el-input .el-select__caret::before {
		content: "";
		background: url('~@/assets/img/arrow_up.png') center center no-repeat;
		position: absolute;
		width: 23px;
		height: 17px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden !important;
	}

	.StoreSet .block .el-input .el-input__inner, .StoreSet .block .el-input {
		border: none !important;
		outline: none !important;
		height: 32px !important;
		line-height: 32px !important;
	}
	.StoreSet .el-form .el-form-item__label {
		white-space: nowrap;
	}
	.StoreSet .el-select .el-input .el-select__caret::before {
		content: "";
		background: url('~@/assets/img/arrow_up.png') center center no-repeat;
		position: absolute;
		width: 23px;
		height: 17px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden !important;
	}
	.StoreSet .el-select {
		box-shadow: 0 0 5px rgb(163, 163, 163) inset;
		padding: 4px;
	}
	.StoreSet .elinput .el-input .el-input__inner {
		box-shadow: 0 0 5px rgb(163, 163, 163) inset;
		border: none !important;
		outline: none !important;
	}
	.StoreSet .el-select .el-input .el-input__inner {
		border: none !important;
		outline: none !important;
		background: white !important;
		height: 30px !important;
		display: flex;
	}
	.StoreSet .el-select .el-input .el-input__suffix {
		display: flex;
		align-items: center;
	}
	.StoreSet .el-date-editor {
		width: 100% !important;
	}
	.StoreSet .el-form-item {
		margin-bottom: 0;
		padding: 20px 0;
	}


	.PreviewMsg .el-form .el-form-item__label {
		white-space: nowrap;
	}
	.PreviewMsg .el-form-item {
		margin-bottom: 0;
		padding: 20px 0;
	}

	

	.el-picker-panel {
		width: 240px !important;
	}
	.el-picker-panel__content {
		width: 200px !important;
	}

	.el-message {
		width: 80%;
		max-width: 450px;
		min-width: 275px !important;
	}
</style>
