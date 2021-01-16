<template>
  <div class="layout-container">
    <jz-header></jz-header>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title"/>
    <jz-footer></jz-footer>
  </div>
</template>

<script>
import JzHeader from '../components/JzHeader'
import JzFooter from '../components/JzFooter'

export default {
  name: 'JzLayout',
  components: {
    JzHeader,
    JzFooter
  }
}
</script>

<style scoped lang="less">
.layout-container {
}
</style>