<template>
  <div>
    <charousel :imgs="indexImg"></charousel>
    <div class="songlist clearfix mian">
      <recommen :lists="playlists" :name="name[0]" type="list"></recommen>
      <recommen :name="name[1]" :lists="newSong"></recommen>
    </div>
  </div>
</template>

<script>
import Charousel from '../components/charousel'
import Recommen from '../components/recommen'
// @ is an alias to /src
// 引入api
import { getIndex } from '@/api/songList'

export default {
  data () {
    return {
      playlists: [],
      name: ['歌单推荐', '新歌', 'MV推荐'],
      newSong: [],
      indexImg: [],
      homeInfor: null
    }
  },
  name: 'Home',
  components: {
    Charousel,
    Recommen
  },
  //  使用生命周期函数
  created () {
    // 首页推荐
    getIndex(true).then(res => {
      let result = res.data
      if (result.code === 200) {
        result = res.data.data
        // console.log(result)
        result.blocks.forEach(item => {
          // 获取首页banners，显示一些baner
          if (item.blockCode === "HOMEPAGE_BANNER") {
            item.extInfo.banners.forEach(item => {
              this.indexImg.push(item)
            })
          } else if (item.blockCode === 'HOMEPAGE_BLOCK_PLAYLIST_RCMD') {
            item.creatives.forEach(item => {
              this.playlists.push(item)
            })
          } else if (item.blockCode === 'HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG') {
            let result = item.creatives.slice(0, 2)
            this.newSong = [...result[0].resources, ...result[1].resources]
          }
        })
      }
      this.homeInfor = res.data
      //   获取推荐歌单

      //   indexImg.forEach(item => {
      //     this.indexImg.push(item)
      //   })
    })
  }

}
</script>
<style scoped>
.songlist {
  padding-top: 40px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
}
</style>
