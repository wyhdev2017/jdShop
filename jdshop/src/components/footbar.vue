<template>
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <mu-bottom-nav-item value="home" title="主页" icon=":bili-icon icon-home" />
      <mu-bottom-nav-item value="recents" title="分区" icon=":bili-icon icon-partition" />

      <mu-bottom-nav-item value="favorites" title="动态" icon=":bili-icon icon-dynamic"/>
      <mu-bottom-nav-item value="nearby" title="消息" icon=":bili-icon icon-message"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 'recents'
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
      }
    }
  }
</script>
