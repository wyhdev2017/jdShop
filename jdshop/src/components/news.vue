<template>
	<!--滚动新闻窗口-->
	<div class="box">
		<ul ref="con1" :class="{anim:animate==true}">
			<li v-for='item in items'>{{item.name}}</li>
		</ul>
		<img src="../assets/jd-news-tit.png"/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				animate: false,
				items: [{
						name: "世界首例“贯入式大体积嵌岩拱座基础”大桥建成投用"
					},
					{
						name: "中国考古学家发现古月氏遗存 属公元前文化"
					},
					{
						name: "哈尔滨银行港漂4年市值缩水50亿 报告期内收23张罚单"
					},
					{
						name: "南京艺考现场：待考队伍绵延数百米"
					}
				]
			}
		},
		created() {
			setInterval(this.scroll, 3000)
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
	.box {
		width: 100%;
		height: 30px;
		line-height: 30px;
		border: none;
		overflow: hidden;
		padding: 0 86/@bs 0 150/@bs;
		position:relative;
		background-color: pink;
		ul {
			width: 100%;
			list-style: none;
			&.anim {
				transition: all 0.5s;
				margin-top: -30px;
			}
			li {
				list-style: none;
				line-height: 30px;
				height: 30px;
			}
		}
		img{
			position: absolute;
			top: 12/@bs;
			left: 7/@bs;
			width: 146/@bs;
			height: 32/@bs;
		}
	}
	/*.anim {
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
	}*/
</style>