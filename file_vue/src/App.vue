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

<style lang='less' scoped>
@import "@/less/style.less";
  body, html {
    padding: 0;
    margin: 0;
  }
  div {
    box-sizing: border-box;
  }
  .flexEnd {
    display: flex;
    justify-content: flex-end;
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
		@media screen and (max-width: 800px) {
			cursor: none;
		}
	}
	.cursor:hover {
		opacity: 0.8;
		@media screen and (max-width: 800px) {
			cursor: none;
		}
	}
	.cursor:active {
		opacity: 0.6;
		user-select: none;
		@media screen and (max-width: 800px) {
			cursor: none;
			user-select: auto;
		}
	}
	.mg {
		margin: auto;
	}
	.white {
		color: white;
	}
</style>
