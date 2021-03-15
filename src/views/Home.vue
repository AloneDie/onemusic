<template>
  <div>
    <charousel :imgs="indexImg"></charousel>
    <div class="songlist clearfix mian">
      <recommen :lists="playlists" :name="name[0]"></recommen>
      <recommen :name="name[1]" :lists="newSong"></recommen>
    </div>
  </div>
</template>

<script>
import Charousel from '../components/charousel'
import Recommen from '../components/recommen'
// @ is an alias to /src
// 引入api
import { getSongList, getNewSong, getIndex } from '@/api/songList'

export default {
  data () {
    return {
      playlists: [],
      name: ['歌单推荐', '新歌', 'MV推荐'],
      newSong: [],
      indexImg: []
    }
  },
  name: 'Home',
  components: {
    Charousel,
    Recommen
  },
  //  使用生命周期函数
  created () {
    //  歌单推荐
    getSongList(6).then((response) => {
      let playlists = response.data.playlists;
      playlists.forEach(item => {
        this.playlists.push(item)
      });
      // console.log(this.playlists)

    })
    // 新歌
    getNewSong().then(res => {
      let playlists = res.data.data.slice(0, 6)
      playlists.forEach(item => {
        item.coverImgUrl = item.album.picUrl
        this.newSong.push(item)
      });
    })
    // 首页推荐
    getIndex(true).then(res => {
      let indexImg = res.data.data.blocks[0].extInfo.banners
      indexImg.forEach(item => {
        this.indexImg.push(item)
      })
    })
  }

}
</script>
<style scoped>
.songlist {
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  padding-top: 40px;
}
</style>
