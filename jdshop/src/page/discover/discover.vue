<template>
	<div>
		发现
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {
			console.log(this.$el);
			this.scroller = this.$el
		},
		methods: {
			getSwipe() {
				return this.$axios.get('swipe');
			},
			getProducts() {
				return this.$axios.get('products');
				//return this.$axios.get('https://api.imjad.cn/cloudmusic/?type=comments&id=400162138&br=128000');
			},
			loadMore() {
				this.loading = true
				//					setTimeout(() => {
				//						this.$axios.get('products').then(res => {
				//							this.products.push.apply(this.products, res.data.products)
				//						})
				//						this.loading = false
				//					}, 2000)
				this.$axios.get('products').then(res => {
					this.products.push.apply(this.products, res.data.products)
				})
				this.loading = false
			},
		},
		created() {
			this.$axios.all([this.getSwipe(), this.getProducts()]).then(this.$axios.spread((swipe, pro) => {
				console.log(swipe.data.data.img);

				//this.imgUrls = pro.data.hotComments.user;
				this.imgUrls = swipe.data.data.img;
				this.products = pro.data.products;
				console.log(this.products);
			})).catch(res => {
				console.log("请求失败了Recommend");
			});
		}
	}
</script>

<style>

</style>