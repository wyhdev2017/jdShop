<template>
	<div>
		<!--头部搜索-->
		<header class="sn_search">
			<a href="#" class="icon_category"></a>
			<form action="#">
				<span class="icon_search"></span>
				<input type="search" placeholder="60寸电视免费拿" />
			</form>
			<a href="#" class="icon_cart"></a>
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped="scoped" lang="less">
	@import url("../common/less/variables.less");
	/*头部搜索*/
	
	.sn_search {
		width: 100%;
		height: 90/@bs;
		background: @snColor;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		a {
			width: 90/@bs;
			height: 90/@bs;
			position: absolute;
			top: 0;
			&.icon_category {
				left: 0;
				background: url("../common/images/icon_category.png") no-repeat center / 44/@bs 70/@bs;
			}
			&.icon_cart {
				right: 0;
				background: url("../common/images/icon_cart.png") no-repeat center / 63/@bs 68/@bs ;
			}
		}
		form {
			width: 100%;
			padding: 0 90/@bs;
			.icon_search {
				width: 30/@bs;
				height: 30/@bs;
				position: absolute;
				left: 100/@bs;
				top: 30/@bs;
				background: url("../common/images/icon_search.png") no-repeat center / 27/@bs 28/@bs;
			}
			input {
				width: 100%;
				height: 60/@bs;
				margin-top: 15/@bs;
				border: none;
				background: rgba(255, 255, 255, 0.6);
				border-radius: 6/@bs;
				font-size: 24/@bs;
				outline: none;
				padding-left: 50/@bs;
			}
		}
	}
</style>