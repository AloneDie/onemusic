<template>
  <div id="songList">
    <div class="mian">
      <img :src="songListInfor.playlist.coverImgUrl" alt="歌单图片" />
      <div class="songInfor">
        <h3 class="titile">{{songListInfor.playlist.name}}</h3>
        <div class="user">
          <span>作者：</span>
          <span>{{songListInfor.playlist.creator.nickname}}</span>
          <br />
          <span>创建时间：</span>
          <span>{{createDate}}</span>
        </div>
        <div class="control">
          <button>播放</button>
          <button>收藏</button>
          <button>分享</button>
          <button>下载</button>
        </div>
        <div class="label">
          <el-tag
            v-for="(tags,index) in songListInfor.playlist.creator.expertTags"
            :key="index"
          >{{tag[index]}}</el-tag>
        </div>
        <div class="direction">
          <p>描述</p>
        </div>
        <div class="songs"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSongDetail } from '../api/songList'
export default {
  data () {
    return {
      songListId: undefined,
      songListInfor: {}
    }
  },
  computed: {
    createDate () {
      return this.$moment(this.songListInfor.playlist.createTime).format("YYYY年MM月D日")
    }
  },
  created () {
    this.songListId = this.$store.state.songId
    getSongDetail(this.songListId).then(value => {
      this.songListInfor = value.data
    })
  },
  mounted () {
  },
}
</script>

<style>
</style>