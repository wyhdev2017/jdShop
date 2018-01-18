<template>
	<!--滚动新闻窗口-->
	<div class="box">
		<ul id="con1" ref="con1" :class="{anim:animate==true}">
			<li v-for='item in items'>{{item.name}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				animate: false,
				items: [{
						name: "马云"
					},
					{
						name: "雷军"
					},
					{
						name: "王勤"
					}
				]
			}
		},
		created() {
			setInterval(this.scroll, 1500)
		},
		methods: {
			scroll() {
				this.animate = true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
				setTimeout(() => { //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
					this.items.push(this.items[0]); // 将数组的第一个元素添加到数组的
					this.items.shift(); //删除数组的第一个元素
					this.animate = false; // margin-top 为0 的时候取消过渡动画，实现无缝滚动
				}, 500)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	@import url("../common/less/variables.less");
	.anim {
		transition: all 0.5s;
		margin-top: -30px;
	}
	ul{
		list-style: none;
	}
	#con1 li {
		list-style: none;
		line-height: 30px;
		height: 30px;
	}
</style>