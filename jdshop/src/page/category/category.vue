<template>
	<div class="category-viewport">
		<div id="rootlist" class="category-tab">
			<div class="ctab">
				<ul ref="culist">
					<li v-for="(item, index) in categories" :key="index" :class="{'active':item.active}" @click="liclick(item, index)">
						<router-link :to="{name:item.urlPath}">{{item.name}}</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="category-content">
			<div class="branchScroll">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: false,
				categories: [{
						id: '0',
						name: '热门推荐',
						urlPath: 'hotpage',
						active:true
					},
					{
						id: '1',
						name: '京东超市',
						urlPath: 'supermarket'
					},
					{
						id: '2',
						name: '国际名牌',
						urlPath: 'hotpage'
					},
					{
						id: '3',
						name: '奢侈品',
						urlPath: 'hotpage'
					},
					{
						id: '4',
						name: '全球购',
						urlPath: 'hotpage'
					},
					{
						id: '5',
						name: '男装',
						urlPath: 'hotpage'
					},
					{
						id: '6',
						name: '女装',
						urlPath: 'hotpage'
					},
					{
						id: '7',
						name: '男鞋',
						urlPath: 'hotpage'
					},
					{
						id: '8',
						name: '女鞋',
						urlPath: 'hotpage'
					},
					{
						id: '9',
						name: '内衣配饰',
						urlPath: 'hotpage'
					},
					{
						id: '10',
						name: '箱包手袋',
						urlPath: 'hotpage'
					},
					{
						id: '11',
						name: '没装个护',
						urlPath: 'hotpage'
					},
					{
						id: '12',
						name: '钟表珠宝',
						urlPath: 'hotpage'
					},
					{
						id: '13',
						name: '手机数码',
						urlPath: 'hotpage'
					},
					{
						id: '14',
						name: '电脑办公',
						urlPath: 'hotpage'
					},
					{
						id: '15',
						name: '家用电器',
						urlPath: 'hotpage'
					},
					{
						id: '16',
						name: '食品生鲜',
						urlPath: 'hotpage'
					},
					{
						id: '17',
						name: '酒水饮料',
						urlPath: 'hotpage'
					},
					{
						id: '18',
						name: '母婴童装',
						urlPath: 'hotpage'
					},
					{
						id: '19',
						name: '玩具乐器',
						urlPath: 'hotpage'
					}
				]
			}
		},
		methods: {
			liclick(item, index) {
				this.$nextTick(function() {
					this.categories.forEach(item => {
						this.$set(item, 'active', false)
					});
					this.$set(item, 'active', true)
					this.$refs.culist.style.transform = "translate3d(0,0px,0)";
//					let moveLength=0;
//					if(index<this.categories.length-11){
//						moveLength=-index*50;
//					}
//					console.log(moveLength)
//					this.$refs.culist.style.transform = "translate3d(0,"+moveLength+"px,0)";
				});
				
			}
		},
		computed: {

		},
		mounted() {

		}
	}
</script>

<style scoped="scoped" lang="less">
	@import url("../../common/less/variables.less");
	.category-viewport {
		width: 100%;
		.category-tab {
			float: left;
			min-width: 152/@bs;
			width: 192/@bs;
			height: auto;
			overflow-y: auto;
			min-height: 100%;
			.ctab {
				overflow-y: scroll;
				height: 570*2/@bs;
				ul {
					transform: translateY(0px);
					/*width: 150/@bs;*/
					list-style: none;
					background-color: #fff;
					li {
						height: 100/@bs;
						line-height: 100/@bs;
						background: #fff;
						text-align: center;
						position: relative;
						a{
							color: #808080;
						}
						&.active {
							background-color: #f3f5f7;
							a{
								color: #f23030;
							}
						}
					}
				}
				&::-webkit-scrollbar {
					display: none;
				}
			}
		}
		.category-content {
			width: 100%;
			font-size: 12px;
			color: #252525;
			height: auto;
			.branchScroll {
				padding-left: 190/@bs;
				background-color: #795DA3;
				.bc {
					width: 100%;
				}
			}
		}
	}
</style>