<template>
  <div v-if="isShow">
    this is a loginHtml
    <img :src="qrImg" alt />
  </div>
</template>

<script>
import { getUserKey, getUserCreate, testStatus } from '../api/songList'
export default {
  created () {
    getUserKey().then(res => {
      let data = res.data
      if (data.code === 200) {
        this.uniKey = data.data.unikey
        getUserCreate(this.uniKey).then(res => {
          let data = res.data
          if (data.code === 200) {
            this.qrImg = data.data.qrimg
            this.isShow = true
            let timer = setInterval(() => {
              testStatus(this.uniKey).then(res => {
                console.log(res)
              })
            }, 5000)
            console.log(timer)
          }
        })
      }
    })
  },
  data () {
    return {
      uniKey: undefined,
      qrImg: undefined,
      isShow: false
    }
  },
  beforeCreate () {

  }
}
</script>

<style>
</style>