<template>
	<div class="sn_layout" @mousewheel="scrollToTop">
		<header-bar class="ahead" v-show='headerBarShow'></header-bar>
		<router-view class="abody" id="myData"></router-view>
		<footer-bar class="aft"></footer-bar>
	</div>
</template>

<script>
	import FooterBar from 'components/footbar'
	import HeaderBar from 'components/headbar.vue'
	import { mapState, mapActions, mapGetters } from 'vuex';
	export default {
		data() {
			return {}
		},
		components: {
			FooterBar,
			HeaderBar
		},
		methods: {
			...mapActions(['changeTopShow', 'reduceCarNum']),
			scrollToTop(e) {
				let curHeight = document.documentElement.scrollTop || document.body.scrollTop;
				var offsetTop = document.querySelector('.abody').offsetTop
				if(curHeight > offsetTop) {
					this.$store.dispatch('changeTopShow', true)
				} else {
					this.$store.dispatch('changeTopShow', false)
				}
			}
		},
		computed: {
			...mapState(["topShow","headerBarShow"]),
			...mapGetters(["gettersCount"])

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