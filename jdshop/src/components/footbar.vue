<template>
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <mu-bottom-nav-item value="home" title="主页" icon=":bili-icon icon-home" :to="{name:'home'}"  />
      <mu-bottom-nav-item value="category" title="分类" icon=":bili-icon icon-category"  :to="{name:'category'}"  />
      <mu-bottom-nav-item value="discover" title="发现" icon=":bili-icon icon-discover"  :to="{name:'discover'}"/>
      <mu-bottom-nav-item value="shoppingcart" title="购物车" icon=":bili-icon icon-shoppingcart" :to="{name:'shoppingcart'}"/>
      <mu-bottom-nav-item value="mine" title="我的" icon=":bili-icon icon-mine" :to="{name:'mine'}" />
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex';
  export default {
    data () {
      return {
        bottomNav: 'home',
        name:{home:'主页',category:'分类',discover:'发现',shoppingcart:'购物车',mine:'我的'}
      }
    },
    methods: {
    	...mapActions(['changeotherHeaderBarTitle', 'reduceCarNum']),
      handleChange (val) {
        this.bottomNav = val;
       
        this.$store.dispatch('changeotherHeaderBarTitle', this.name[val])
      },
       itemclick(event){console.log("sdsdddddd")}
    }
  }
</script>
