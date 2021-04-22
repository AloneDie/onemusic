<template>
  <div>
    this is a loginHtml
    <div class="email">
      <input type="text" name id v-model="user.email" />
    </div>
    <div class="password">
      <input type="password" name id v-model="user.password" />
    </div>
    <div class="submit">
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import { getLogin } from '../api/songList'
// import config from '../config'
export default {
  created () {

  },
  data () {
    return {
      user: {
        email: "try200801@163.com",
        password: "zjmtry99..."
      },
      isShow: false
    }
  },
  beforeCreate () {

  },
  methods: {
    login () {
      console.log(this.user)
      getLogin(this.user).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
</style>