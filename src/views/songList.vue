<template>
  <div id="songList" >
      <div class="mian">
          <img src="/assets/images/songlist/jpg" alt="歌单图片">
          <div class="songInfor">
              <h3 class="titile">{{songListInfor.name}}</h3>
              <div class="user">
                  <span>作者</span>
                  <span>创建时间</span>
              </div>
              <div class="control">
                  <button>播放</button>
                  <button>收藏</button>
                  <button>分享</button>
                  <button>下载</button>
              </div>
              <div class="label">
                  <el-tag>标签一</el-tag>
              </div>
              <div class="direction">
                  <p>
                      描述
                  </p>
              </div>
              <div class="songs">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {getSongDetail} from '../api/songList'
export default {
    data(){
        return{
            songListId: undefined,
            songListInfor: {}
        }
    },
    created(){
        this.songListId = this.$store.state.songId
            getSongDetail(this.songListId).then(value=>{
            this.songListInfor = value.data
        })
    },
    mounted(){
        console.log(this.songListId)
    },
}
</script>

<style>

</style>