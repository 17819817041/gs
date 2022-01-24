<template>
  <div id="app" :class="[{ font: $i18n.locale == 'en-US' }]">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
	name: 'App',
	data () {
		return {
			
		}
	},
	mounted () {
		// window.onload=function () {
		// 	document.addEventListener('touchstart',function (event) {
		// 		if(event.touches.length>1){
		// 			event.preventDefault();
		// 		}
		// 	})
		// 	var lastTouchEnd=0;
		// 	document.addEventListener('touchend',function (event) {
		// 		var now=(new Date()).getTime();
		// 		if(now-lastTouchEnd<=300){
		// 			event.preventDefault();
		// 		}
		// 		lastTouchEnd=now;
		// 	},false)
		// }

		setTimeout(() => {
			try {
				if (!google) {
					//在这里调用动态创建script的fangfa
					this.createScript()
				}
			} catch {
				//在这里调用动态创建script的fangfa
				this.createScript()
			}
		},3000)
	},
	created () {
		if ( localStorage.getItem('compoundeyesToken') ) {
			this.$store.dispatch('getTimeIntervaDetailslList',this)
			this.$store.dispatch('getAddress',this) 
			this.$store.dispatch('getTypeList',this)
			this.$store.dispatch('incomePriceId',this)
		}
	},
	methods: {
		createScript () {
			// 创建script标签，引入外部文件
			let script = document.createElement('script')
			script.type = 'text/javascript'
			script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4UE1P5tLy0aSibmA0WzZq-yFi9cpyrW0&language=zh_HK&libraries=places&v=weekly'
			document.getElementsByTagName('head')[0].appendChild(script)
		}
	}
}
</script>

<style lang='less'>
@import "@/less/style.less";
	body, html {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		background: #F2F2F2;
		position: relative;
	}
	.theme {
		background: #F2F2F2;
	}
	.font {
		font-family: "Segoe UI" !important;
	}
	#app {
		width: 100%;
		height: 100%;
		background: white;
		overflow: scroll;
		-webkit-overflow-scrolling: touch;
		position: absolute;
		left:0;
		top:0;
		padding-bottom: 0rem
	}
	#app::-webkit-scrollbar { display: none !important; }
	
	.cover {
		width: 100%;
		height: 100%;
		object-fit: cover !important;
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
	textarea {
		color: gray;
	}
	.addFile {
		margin: 5px;
		border: dashed 1px #C0CCDA;
		border-radius: 3px;
		width: 100px;
		height: 100px;
		float: left;
		position: relative;
		img {
			width: 32px;
			height: 32px;
			@media screen and (max-width: 564px) {
				width: 25px !important;
				height: 25px !important;
			}
		}
		@media screen and (max-width: 564px) {
			width: 70px !important;
			height: 70px !important;
		}
	}
	.addFile:hover {
		border-color: rgb(64, 158, 255);
	}
	.el-progress{
		width: 80px !important;
    	height: 80px !important;
		// line-height: 106px !important;
		// transform: translate(0px, -97px);
		position: absolute !important;
		background: white;
		@media screen and (max-width: 564px) {
			// transform: translate(0px, -105px);
			width: 50px !important;
			height: 50px !important;
		}
	}
	.el-progress-circle {
		width: 80px !important;
    	height: 80px !important;
		@media screen and (max-width: 564px) {
			width: 50px !important;
			height: 50px !important;
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
		color: rgb(105, 105, 105);
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
	.AdvertisingAddPlus .el-select .el-input .el-select__caret::before {
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
	.AdvertisingAdd .el-form .el-form-item__label, .AdvertisingAddPlus .el-form .el-form-item__label {
		white-space: nowrap;
	}
	.AdvertisingAdd .el-date-editor, .AdvertisingAddPlus .el-date-editor {
		width: 100% !important;
	} 
	.AdvertisingAdd .el-popover__reference, .AdvertisingAddPlus .el-popover__reference {
		// transform: translate(0px, 20px);
		width: 140px;
		// opacity: 0;
		border: none;
		outline: none;
	}  
	.AdvertisingAdd .basicsMsg .el-radio-group, .AdvertisingAddPlus .basicsMsg .el-radio-group {
		margin-left: 20px;
		margin-right: 10px;
		@media screen and (max-width: 564px) {
			margin-left: 0px !important;
			margin-top: 0px;
		}
	}
	.AdvertisingAdd .basicsMsg .el-radio-group .el-radio, .AdvertisingAddPlus .basicsMsg .el-radio-group .el-radio {
		margin-right: 0px !important;
		@media screen and (max-width: 352px) {
			margin-bottom: 10px !important;
		}
	}  
	.AdvertisingAdd .detailPlan .el-radio-group, .AdvertisingAddPlus .detailPlan .el-radio-group {
		margin-left: 0px !important;
		@media screen and (max-width: 564px) {
			margin-top: -10px;
			margin-left: 0px !important;
		}
	}
	.AdvertisingAdd .detailPlan .el-radio-group .el-radio, .AdvertisingAddPlus .detailPlan .el-radio-group .el-radio {
		margin-right: 10px !important;
		@media screen and (max-width: 564px) {
			margin-top: 7px;
			margin-left: 0px !important;
		}
	}
	.AdvertisingAdd .el-drawer {
		width: 90% !important;
		max-width: 500px !important;
	}
	.AdvertisingAddPlus .el-drawer {
		width: 95% !important;
		max-width: 1100px !important;
	}
	.AdvertisingAdd1 .el-input.is-disabled .el-input__inner {
		color: rgb(170, 170, 170);
	}
	
	.AdvertisingAdd1 .el-dialog,
	.AdvertisingAdd2 .el-dialog,
	.Gdetail .el-dialog, 
	.AddStore .el-dialog, 
	.AdvertisingAddPlus .el-dialog, 
	.PreviewMsg .el-dialog {
		max-width: 800px;
		max-height: 591px;
		// height: 85% !important;
		@media screen and (max-width: 1000px) and (max-height: 620px) {
			height: 80%;
		}
	}
	.AdvertisingAdd1 .el-dialog__wrapper .el-dialog__body,
	.AdvertisingAdd2 .el-dialog__wrapper .el-dialog__body,
	.Gdetail .el-dialog__wrapper .el-dialog__body, 
	.AdAdmin .el-dialog__wrapper .el-dialog__body {
		display: flex;
		justify-content: center;
		height: 82%;
		max-height: 489px;
	}

	


	.el-checkbox__label {
		font-size: 12px !important;
	}
	.el-checkbox {
		margin-right: 20px !important;
		@media screen and (max-width: 564px) {
			margin-right: 8px;
		}
	}
	.gm-style .gm-style-iw-d, .gm-style .gm-style-iw {
		height: auto !important;
		max-height: 400px !important;
	}


	.technology .el-form .el-form-item__label {
		height: 40px;
		line-height: 15px;
		display: flex;
		align-items: center;
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
		padding: 20px 5px;
	}
	.AddStore .el-dialog .el-radio {
		margin-left: 0 !important;
		margin-right: 5px !important;
		margin-bottom: 7px;
	}
	.AddStore .el-dialog {
		min-width: 300px !important;
	}
	
	.UserDetailEdit .el-dialog {
		max-width: 300px !important;
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


	.StoreAdministrator .el-select .el-input .el-input__inner, .AdvertiserManagement .el-select .el-input .el-input__inner {
		border: none !important;
		outline: none !important;
		background: white !important;
		height: 28px !important;
		display: flex;
	}
	.StoreAdministrator .el-select .el-input .el-select__caret::before , .AdvertiserManagement .el-select .el-input .el-select__caret::before {
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
	.AuditList .el-dialog, .AdAdmin .el-dialog {
		border-radius: 7px;
		min-width: 516px;
		@media screen and (max-width: 600px) {
			min-width: 285px;
		}
	}
	.AuditList .el-dialog__wrapper .el-dialog__header, .AdAdmin .el-dialog__wrapper .el-dialog__header {
		height: 0px !important;
		padding: 0 !important;
	}  
	.AuditList .el-dialog__wrapper .el-dialog__body, .AdAdmin .el-dialog__wrapper .el-dialog__body {
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


	.el-collapse-item__content {
		background: #F1F1F1;
		min-height: 48px !important;
		padding-bottom: 0 !important;
		display: flex !important;
		align-items: center !important;
	}
	.el-collapse-item__header,.el-collapse-item__content {
		padding: 0 20px;
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
		padding: 20px 5px;
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
		padding: 20px 5px;
	}

	.Settingadvertising .el-dialog {
		min-width: 300px !important;
	}
	.Settingadvertising #delele .el-dialog {
		min-width: 300px !important;
		// max-height: 820px;
		@media screen and (max-width: 1601px) {
			max-height: 80% !important;
			overflow: auto;
		}
		
	}
	.Settingadvertising .el-drawer, .AddStore .el-drawer {
		width: 90% !important;
		max-width: 500px !important;
	}
	.el-message-box {
		width: 300px !important;
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


	.video-js {
		width: 100% !important;
		max-width: 750px;
		// height: 100%;
	}
	.video_outWrap {
		position: relative;
		z-index: 20;
		.videoImage {
			background: white;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 21;
			height: 100%;
			img {
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
		}
	}
	.fade-enter-active {
		transition: opacity 1s;
	}
	.fade-leave-active {
		transition: opacity 0.1s;
	}
	.fade-enter, .leave-active {
		opacity: 0;
	}

	.fade1-enter-active {
		transition: opacity .1s;
	}
	.fade1-leave-active {
		transition: opacity 0.1s;
	}
	.fade1-enter, .leave-active {
		opacity: 0;
	}

	.storeDetail .el-radio {
		margin-right: 0 !important;
	}

	.storeDetail .el-checkbox, .storeDetail .time_wrap .el-form-item__content {
		line-height: 20px !important;
	}
	.storeDetail .time_wrap .el-form-item {
		margin-bottom: 7px !important;
	}
	.storeDetail .time_wrap .el-form-item__label {
		padding: 0 !important;
	}
</style>
