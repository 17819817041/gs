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
	.size12 {
		font-size: 12px !important;
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
		box-shadow: 0 0 7px rgb(207, 207, 207) inset;
	}

	.el-table__header .has-gutter {
		color: black !important;
	}
	.el-table .el-table__row {
		background: #F2F2F2;
	}
	.el-table .el_color {
        background: #E5E5E5 !important;
    }
	.el-table .el-table__body-wrapper {
		height: auto !important;
	}
	.footpage {
		padding-right: 20px;
		@media screen and (max-width: 564px) {
			padding-right: 0px;
			display: flex;
			justify-content: center;
		}
	}


	.header .el-popover__reference {
		// transform: translate(0px, 20px);
		width: 40px;
		border: none;
		outline: none;
	}  
	.header .el-popover {
		@media screen and (max-width: 888px) {
			width: 50px !important;
		}
		@media screen and (max-width: 564px) {
			width: 100px !important;
		}
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
	.AdvertisingAdd .el-popover__reference {
		// transform: translate(0px, 20px);
		width: 140px;
		// opacity: 0;
		border: none;
		outline: none;
	}  
	.AdvertisingAdd .el-radio-group {
		margin-left: -90px;
		@media screen and (max-width: 564px) {
			margin-left: 10px !important;
			margin-top: 10px;
		}
	}
	.AdvertisingAdd .el-radio-group .el-radio {
		margin-right: 0px !important;
	}



	.el-popover {
		max-width: 800px;
		@media screen and (max-width: 888px) {
			width: 350px;
		}
		@media screen and (max-width: 564px) {
			width: 270px;
		}
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


		
	.el-textarea .el-textarea__inner{ // 然后找到对应的类名，在这里将拉伸去掉即可
		resize: none;
	}


	// .AddStore .block .el-input .el-input__inner, .AddStore .block .el-input {
	// 	// border: none !important;
	// 	// outline: none !important;
	// 	height: 32px !important;
	// 	line-height: 32px !important;
	// }

	// .AddStore .el-form .el-form-item__label {
	// 	white-space: nowrap;
	// }
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
	.AddStore .el-select .el-input .el-input__inner {
		background: white !important;
		// height: 35px !important;
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
		color: white ;
		border: none ;
		outline: none ;
		background: none ;
		height: 30px ;
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
	.AuditList .el-dialog {
		border-radius: 7px;
		min-width: 516px;
		@media screen and (max-width: 600px) {
			min-width: 285px;
		}
	}
	.AuditList .el-dialog__wrapper .el-dialog__header {
		height: 0px !important;
		padding: 0 !important;
	}  
	.AuditList .el-dialog__wrapper .el-dialog__body {
		padding: 0 !important;
		height: 328px;
	}


	.PlatSetting .el-select .el-input .el-input__inner {
		border: none !important;
		outline: none !important;
		background: white !important;
		height: 28px !important;
		display: flex;
	}
	.PlatSetting .el-select .el-input .el-select__caret::before {
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

	
	.Setting .el-dialog {
		border-radius: 7px;
		min-width: 516px;
		@media screen and (max-width: 600px) {
			min-width: 285px;
		}
	}
	.Setting .el-dialog__wrapper .el-dialog__header {
		height: 0px !important;
		padding: 0 !important;
	}  
	.Setting .el-dialog__wrapper .el-dialog__body {
		// padding: 0 !important;
		height: 371px;
	}
	.el-popconfirm .el-button--primary {
		background-color: #FF0000 !important;
		border: #FF0000;
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


	.EchartsMsg .el-select .el-input, .EchartsMsg .el-select .el-input .el-input__inner {
		height: 25px;
		border: none;
		outline: none;
	}
	.EchartsMsg .el-select .el-input .el-input__suffix {
		display: flex;
		align-items: center;
		background: #DEE7EF;
		right: 0;
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
