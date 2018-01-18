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
	import { mapState} from 'vuex';
	export default {
		data() {
			return {
				active: false,
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
			},
		},
		computed: {
			...mapState(["categories"]),
		},
		mounted() {

		},
		
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
						a {
							color: #808080;
						}
						&.active {
							background-color: #f3f5f7;
							a {
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