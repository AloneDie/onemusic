<template>
  <el-carousel :interval="4000" type="card" height="300px" class="mian" indicator-position="none">
    <el-carousel-item v-for="(item,index) in imgs" :key="index" class="clearfix">
      <a @click.prevent="open" :data-index="index">
        <img :src="item.pic" alt />
      </a>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import bus from '@/bus/bus.js'

export default {
  props: ['imgs'],
  methods: {
    open (e) {
      let tar = e.target.parentNode.getAttribute('data-index');
      if (this.imgs[tar].url == null) {
        // console.log(this.imgs[tar].song.id)
        bus.$emit('songUrl', this.imgs[tar].song.id)
        this.$store.commit('changeSongId', this.imgs[tar].song.id)
        this.$router.push('/play')
      } else {
        window.open(this.imgs[tar].url)
      }
    }
  }
}
</script>
<style scoped>
img {
  width: 100%;
  height: 300px;
}
a {
  display: block;
}
</style>