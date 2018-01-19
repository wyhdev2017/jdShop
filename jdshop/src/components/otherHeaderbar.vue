<template>
	<div>
		<!--头部搜索-->
		<header class="m-header">
			<div href="#" class="header-bar-back" @click="goback"></div>
			<div class="header-bar-title">{{otherHeaderBarTitle}}</div>
			<div class="header-bar-menu"></div>
		</header>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {

			}
		},
		methods: {
			//			返回上一级
			goback() {
				this.$router.go(-1);
			}
		},
		computed: {
			...mapState(["otherHeaderBarTitle"]),
		},
	}
</script>

<style scoped="scoped" lang="less">
	@import url("../common/less/variables.less");
	.m-header {
		width: 100%;
		height: 90/@bs;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		line-height: 90/@bs;
		text-align: center;
		font-size: 16px;
		color: #333;
		background: -webkit-linear-gradient(top, #fff, #efefef);
		background: linear-gradient(180deg, #fff, #efefef);
		&::before {
			content: "";
			position: absolute;
			z-index: 1;
			pointer-events: none;
			background-color: #e5e5e5;
			height: 1px;
			left: 0;
			right: 0;
			top: 0;
		}
		.header-bar-back {
			position: absolute;
			top: 0;
			left: 0;
			width: 90/@bs;
			height: 90/@bs;
			&::after {
				content: "";
				display: block;
				width: 12px;
				height: 12px;
				border-top: 1px solid #848689;
				border-left: 1px solid #848689;
				-webkit-transform-origin: 50%;
				transform-origin: 50%;
				-webkit-transform: rotate(-45deg);
				transform: rotate(-45deg);
				position: absolute;
				top: 50%;
				left: 18px;
				margin-top: -6px;
			}
		}
		.header-bar-menu {
			position: absolute;
			top: 0;
			right: 0;
			width: 90/@bs;
			height: 90/@bs;
			background: url(../assets/otehr-header-menu.png) no-repeat 50%;
			background-size: 18px;
		}
	}
</style>