<template>
	<div class="sn_layout">
		<header-bar class="ahead"></header-bar>
		<router-view class="abody"></router-view>
		<footer-bar class="aft"></footer-bar>
	</div>
</template>

<script>
	import FooterBar from 'components/footbar'
	import HeaderBar from 'components/headbar.vue'
	export default {
		data() {
			return {}
		},
		components: {
			FooterBar,
			HeaderBar
		}

	}
</script>

<style scoped="scoped" lang="less">
	@import url("./common/less/variables.less");
	.sn_layout {
		width: 100%;
		max-width: 750px;
		min-width: 320px;
		margin: 0 auto;
		padding-top: 90/@bs;
		padding-bottom: 100/@bs;
		.ahead {
			/*width: 100%;
    height: 5rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index:10;*/
		}
		.abody {
			width: 100%;
			/*height: 100%;
			min-height: 46rem;*/
			background-color: hotpink;
			/*//padding: 5rem 0;*/
		}
		.aft {
			width: 100%;
			height: 100/@bs;
			position: fixed;
			bottom: 0;
			left: 0;
		}
	}
	/*https://m.jd.com/index/recommend.action?_format_=json&page=1*/
</style>