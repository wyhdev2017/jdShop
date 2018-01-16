<template>
	<div>
		<div class="bili-head">
			<span class="bili-icon icon-menu menu" @click="toggle(true)"></span>
			<div class="photo">
				<img src="../../static/bililogo.png" />
			</div>
		</div>
		<mu-drawer :open="open" :docked="docked">
			<!--头部-->
			<div class="dc-header">
				<div class="iconhead">
					<img src="../../static/bililogo.png" />
				</div>
				<span id="login">
					点击头像登录
				</span>
			</div>
			<!--中间部分-->
			<mu-list @itemClick="sitemClick" :value="itemSelected" class="dc-body">
				<mu-list-item title="首页" value="home">
					<mu-icon slot="left" value=":bili-icon icon-home" />
				</mu-list-item>
				<mu-list-item title="历史记录" value="history">
					<mu-icon slot="left" value=":bili-icon icon-history" />
				</mu-list-item>
				<mu-list-item title="离线缓存" value="offline">
					<mu-icon slot="left" value=":bili-icon icon-offline" />
				</mu-list-item>
				<mu-list-item title="我的收藏" value="collection">
					<mu-icon slot="left" value=":bili-icon icon-collection" />
				</mu-list-item>
				<mu-list-item title="我的关注" value="concern">
					<mu-icon slot="left" value=":bili-icon icon-concern" />
				</mu-list-item>
				<mu-list-item title="稍后再看" value="rest">
					<mu-icon slot="left" value=":bili-icon icon-rest" />
				</mu-list-item>
				<mu-divider />
				<mu-list-item title="直播中心" value="live">
					<mu-icon slot="left" value=":bili-icon icon-live" />
				</mu-list-item>
				<mu-list-item title="我的大会员" value="member">
					<mu-icon slot="left" value=":bili-icon icon-member" />
				</mu-list-item>
				<mu-list-item title="免流量服务" value="free">
					<mu-icon slot="left" value=":bili-icon icon-free" />
				</mu-list-item>
				<mu-list-item title="会员订购单" value="list">
					<mu-icon slot="left" value=":bili-icon icon-list" />
				</mu-list-item>
				<mu-list-item title="联系客服" value="customer-service">
					<mu-icon slot="left" value=":bili-icon icon-customer-service" />
				</mu-list-item>
				<mu-divider />
				<!--	<mu-list-item v-if="docked" @click.native="open = false" title="Close" />-->
			</mu-list>
			<!--顶部操作栏-->
			<!--<div class="dc-footer">

			</div>-->
		</mu-drawer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				itemSelected: "",
				open: false,
				docked: true
			}
		},
		methods: {
			toggle(flag) {
				this.open = true
			},
			sitemClick(e) {
				this.itemSelected = e.value;
				this.open = false
			}
		},
		components: {}
	}
</script>
<style scoped="scoped" lang="less">
	@import url("../common/styles/variable.less");
	@import url("../common/styles/mixin.less");
	.bili-head {
		position: fixed;
		width: 100%;
		height: 5rem;
		background-color: @bilibgc;
		top: 0;
		left: 0;
		.menu {
			position: absolute;
			left: -1rem;
			font-size: 3rem;
			top: 1rem;
		}
		.photo {
			position: absolute;
			left: 2.5rem;
			font-size: 3rem;
			top: 0.5rem;
			width: 4rem;
			height: 4rem;
			border: 1px solid #fff;
			border-radius: 50%;
			overflow: hidden;
			img {
				width: 4rem;
				height: 4rem;
			}
		}
	}
	
	.mu-drawer {
		width: 20rem;
		padding: 7rem 0 3rem 0;
		position: fixed;
		overflow: hidden;
		.dc-header {
			background-color: hotpink;
			height: 7rem;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 2;
			.iconhead {
				position: absolute;
				left: 2.5rem;
				font-size: 3rem;
				top: 0.5rem;
				width: 4rem;
				height: 4rem;
				border: 1px solid #fff;
				border-radius: 50%;
				overflow: hidden;
				img {
					width: 4rem;
					height: 4rem;
				}
			}
			#login {
				color: #fff;
				position: absolute;
				left: 1.7rem;
				bottom: 0.8rem;
				font-size: 12px;
			}
		}
		.dc-body {
			z-index: 1;
			height: 100%;
			overflow-y: auto;
			width: 100%;
			position: absolute;
			top: 7rem;
			left: 0rem;
			border: 1px solid #868686;
		}
		.dc-footer {
			background-color: skyblue;
			height: 3rem;
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			z-index: 2;
		}
	}
</style>