<template>
  <div id="app">
    <headers></headers>
    <router-view />
    <!-- 如何使用懒加载图片以及如何使用缓存机制 -->
    <myfooter></myfooter>
  </div>
</template>

<script>
import Headers from './components/headers.vue'
import Myfooter from './components/myfooter'

export default {
  name: 'Home',
  components: {
    Headers,
    Myfooter,
  }
}
</script>

<style>
</style>
