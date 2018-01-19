<template>
	<div class="demo-infinite-container">
		<div class="clearfix swp">
			<swiper :options="swiperOption" class="clearfix">
				<swiper-slide v-for="(item,index) in img" :key="index" class="clearfix">
					<img :src="item.url" class="swimg " />
				</swiper-slide>

				<div class="swiper-pagination" slot="pagination"></div>
				<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>
			</swiper>
		</div>
		<div class="center-nav-outer clearfix">
			<nav class="center-nav clearfix">
				<ul class="center-nav-items clearfix">
					<li class="item-li">
						<a href="#"><img src="../../assets/5a5ec8c2N5d23879c.png" alt="京东超市" /><span>京东超市</span></a>
					</li>
					<li class="item-li">
						<a href="#"><img src="../../assets/5a5ee7abNef54e799.png" alt="全球购" /><span>全球购</span></a>
					</li>
					<li class="item-li">
						<a href="#"><img src="../../assets/5a5ec95dN10b18c94.png" alt="京东服饰" /><span>京东服饰</span></a>
					</li>
					<li class="item-li">
						<a href="#"><img src="../../assets/5a5ec985N8d10b0c5.png" alt="京东生鲜" /><span>京东生鲜</span></a>
					</li>
					<li class="item-li">
						<a href="#"><img src="../../assets/5a5ec9a6Ne0f3804e.png" alt="排行榜" /><span>排行榜</span></a>
					</li>
					<li class="item-li">
						<a href="#"><img src="../../assets/5a5ec9bbN5660203b.png" alt="充值缴费" /><span>充值缴费</span></a>
					</li>
					<li class="item-li">
						<a href="#"><img src="../../assets/5a5ec9d7Ncbf13902.png" alt="领金豆" /><span>领金豆</span></a>
					</li>
					<li class="item-li">
						<a href="#"><img src="../../assets/5a5ec9f2N4ab56374.png" alt="领券" /><span>领券</span></a>
					</li>
					<li class="item-li">
						<a href="#"><img src="../../assets/5a5eebfeNe33ef422.png" alt="赚钱" /><span>赚钱</span></a>
					</li>
					<li class="item-li">
						<a href="#"><img src="../../assets/5a5eca37N74154d4f.png" alt="物流查询" /><span>物流查询</span></a>
					</li>
				</ul>
			</nav>
		</div>
		<!--滚动新闻-->
		<div class="scroll-news clearfix">
			<news></news>
		</div>
		<!--每日福利-->
		<div class="days-J clearfix">
			<a href="#"><img src="../../assets/5a4c3e44Ncb613ea0.png" alt="" /></a>
		</div>
		<div class="tit-img clearfix">
			<img src="../../assets/58b64705Nce641d00.jpg" />
		</div>
		<div class="real-show f_left">
			<div class="graphic-text">
				<strong>玩3C</strong>
				<p class="graphic-wz" style="color:#FF5959">iPhone 8 4899元限量抢！</p>
			</div>
			<div class="graphic-img"><img src="../../assets/5a163dd1Ne09fad4b.jpg" alt="" /><img src="../../assets/5a5d5605Nee8075e6.jpg" alt="" /></div>
			<span class="graphic-btn">
				抢6期免息券
				<i></i>
			</span>
		</div>
		<div class="real-show f_left">
			<div class="graphic-text">
				<strong>京东家电</strong>
				<p class="graphic-wz" style="color:#FF5959">iPhone 8 4899元限量抢！</p>
			</div>
			<div class="graphic-img"><img src="../../assets/5a163dd1Ne09fad4b.jpg" alt="" /><img src="../../assets/5a5d5605Nee8075e6.jpg" alt="" /></div>
			<!--<span class="graphic-btn">
				抢6期免息券
				<i></i>
			</span>-->
		</div>
		<div class="real-show f_left">
			<div class="graphic-text">
				<strong>京东超市</strong>
				<p class="graphic-wz" style="color:#FF5959">iPhone 8 4899元限量抢！</p>
			</div>
			<div class="graphic-img"><img src="../../assets/5a163dd1Ne09fad4b.jpg" alt="" /><img src="../../assets/5a5d5605Nee8075e6.jpg" alt="" /></div>
			<!--<span class="graphic-btn">
				抢6期免息券
				<i></i>
			</span>-->
		</div><div class="real-show f_left">
			<div class="graphic-text">
				<strong>爱家</strong>
				<p class="graphic-wz" style="color:#FF5959">iPhone 8 4899元限量抢！</p>
			</div>
			<div class="graphic-img"><img src="../../assets/5a163dd1Ne09fad4b.jpg" alt="" /><img src="../../assets/5a5d5605Nee8075e6.jpg" alt="" /></div>
			<span class="graphic-btn">
				打造厨艺大师
				<i></i>
			</span>
		</div>
		<!--.f_left{
  float: left;
}
.f_right{
  float: right;
}-->
		<!--<mu-list>
			<template v-for="item in list">
				<mu-list-item :title="item" />
				<mu-divider/>
			</template>
		</mu-list>-->
		<!--<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />-->
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import News from 'components/news'
	export default {
		data() {
			const list = []
			for(let i = 0; i < 15; i++) {
				list.push('item' + (i + 1))
			}
			return {
				list,
				num: 10,
				loading: false,
				scroller: null,
				img: {},
				swiperOption: {
					slidesPerView: 1,
					spaceBetween: 30,
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				}
			}
		},
		mounted() {
			this.scroller = this.$el
			//			console.log(this.$el)
		},
		methods: {
			loadMore() {
				this.loading = true
				setTimeout(() => {
					for(let i = this.num; i < this.num + 10; i++) {
						this.list.push('item' + (i + 1))
					}
					this.num += 10
					this.loading = false
				}, 2000)
			},
			getswiper() {
				//轮播图
				//return this.$axios.get('https://api.imjad.cn/cloudmusic/?type=comments&id=400162138&br=128000');
				return this.$axios.get('/swipe');
			},

		},
		created() {
			this.$axios.all([this.getswiper()]).then(this.$axios.spread((res) => {
				console.log(res)
				this.img = res.data.data.img;
			})).catch(res => {
				console.log("请求失败了Recommend");
			});
			//			this.$axios.get("https://www.easy-mock.com/mock/5a4d85d3e5f9cd651a7fbe77/test/swipe").then(res => {
			//				console.log(res)
			//				this.imgUrls = res.data.hotComments;;
			//			}).catch(res => {
			//				console.log("sss");
			//			})
		},
		computed: {
			//...mapState(["topimgs"]),
		},
		components: {
			News
		},
	}
</script>

<style scoped="scoped" lang="less">
	@import url("../../common/less/variables.less");
	.demo-infinite-container {
		width: 100%;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		border: 1px solid #d9d9d9;
		position: relative;
		&::-webkit-scrollbar {
			display: none;
		}
		.swp {
			width: 100%;
			.swimg {
				width: 100%;
				height: 360/@bs;
			}
		}
		.center-nav-outer {
			width: 100%;
			.center-nav {
				width: 100%;
				background: url(../../assets/nav-bgimg.jpg) no-repeat fixed;
				background-size: 100% 100%;
				.center-nav-items {
					width: 100%;
					box-sizing: border-box;
					list-style: none;
					li {
						float: left;
						width: 20%;
						box-sizing: border-box;
						padding: 5px;
						a {
							width: 100%;
							display: block;
							img {
								display: block;
								width: 90/@bs;
								height: 90/@bs;
								margin: 0 auto;
							}
							span {
								font-size: 12/@bs;
								color: #fff;
								padding-top: 3/@bs;
								text-align: center;
								display: block;
								width: 100%;
							}
						}
					}
				}
			}
		}
		.scroll-news {
			/*position: relative;*/
			/*width: 100%;
			height: 30px;
			line-height: 30px;
			border: none;
			overflow: hidden;
			padding: 0 86/@bs 0 150/@bs;*/
		}
		.days-J {
			width: 100%;
			a {
				width: 100%;
				float: left;
				img {
					width: 100%;
					
				}
			}
		}
		.tit-img {
			width: 100%;
			background-color: #F6F6F6;
			img {
				width: 192*2/@bs;
				height: 70/@bs;
				margin: 0 auto;
				display: block;
			}
		}
		.real-show {
			position: relative;
			width: 50%;
			box-sizing: border-box;
			background-color: #fff;
			padding: 12/@bs 0 10/@bs 10/@bs;
			border-bottom: 1PX solid #F5F5F5;
			border-right: 1PX solid #F5F5F5;
			.graphic-text {
				padding-left:10/@bs;
				strong {
					font-size: 35/@bs;
				}
				p {
					font-size: 20/@bs;
				}
			}
			.graphic-img {
				width: 100%;
				padding: 0 10px;
				img {
					float: left;
					margin-left: 2px;
					width: 130/@bs;
					height: 130/@bs;
				}
			}
			.graphic-btn {
				display: inline-block;
				text-align: center;
				padding: 0 3PX;
				color: #fff;
				font-size: 28/@bs;
				height: 28/@bs;
				line-height: 28/@bs;
				z-index: 2;
				position: absolute;
				left: 0;
				bottom: 0;
				background-image: linear-gradient(to right, rgb(255, 110, 0), rgb(255, 86, 68), rgb(255, 74, 125));
				i {
					background: url(../../assets/arrow.png) no-repeat;
					width: 16/@bs;
					height: 16/@bs;
					background-size: contain;
					display: inline-block;
					vertical-align: top;
					position: relative;
					top: 6/@bs;
					margin: 0 3/@bs 0 7/@bs;
				}
			}
		}
		/*<div class="real-show f_left">
			<div class="graphic-text">
				<strong>玩3C</strong>
				<p class="graphic-wz" style="color:#FF5959">iPhone 8 4899元限量抢！</p>
			</div>
			<div class="graphic-img"><img src="" alt="" /><img src="" alt="" /></div>
			<span class="graphic-btn">
				
			</span>*/
	}
</style>