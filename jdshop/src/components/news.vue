<template>
	<div class="scroll-wrap">
		<!--滚动新闻页面-->
		<ul class="scroll-content" :style="{ top }">
			<li v-for="item in prizeList">{{item.name}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				prizeList: [{
						name: 0
					},
					{
						name: 1
					},
					{
						name: 2
					},
					{
						name: 3
					},
					{
						name: 4
					}
				],
				activeIndex: 0
			}
		},
		methods: {

		},
		mounted() {
			setInterval(_ => {
				if(this.activeIndex < this.prizeList.length) {
					this.activeIndex += 1;
				} else {
					this.activeIndex = 0;
				}
			}, 1000);
		}
	}
</script>

<style>
	.scroll-wrap {
		width: 200px;
		height: 50px;
		border: 1px solid blue;
		overflow: hidden;
	}
	
	.scroll-content {
		position: relative;
		transition: top 0.5s;
		li {
			line-height: 50px;
			text-align: center;
		}
	}
</style>