<template>
  <div id="app">
    <header-bar class="ahead"></header-bar>
    <router-view class="abody"></router-view>
    <footer-bar class="aft"></footer-bar>
  </div>
</template>

<script>
  import FooterBar from 'components/footbar'
  import HeaderBar from 'components/headbar.vue'
  export default {
    data(){
      return {}
    },
    components: {
      FooterBar, HeaderBar
    }

  }
</script>

<style scoped="scoped" lang="less">
  @import url("./common/styles/variable.less");
  @import url("./common/styles/mixin.less");

  #app {
    background-color: #ffbdfd;
   	padding: 5rem 0 5rem 0;
  .ahead {
    width: 100%;
    height: 5rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index:10;
  }
  .abody{
    width: 100%;
    height:100%;
    min-height: 46rem;
    background-color: hotpink;
    /*//padding: 5rem 0;*/
  }

  .aft {
    width: 100%;
    height: 5rem;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  }
</style>
