<template>
  <header class="header mian clearfix">
    <h1 class="logo fl">OMusic</h1>
    <div class="nav fl" id="nav">
      <ul class="clearfix" id="navMeau" @click="active">
        <li class="active">
          <a href="#">我的音乐</a>
        </li>
        <li>
          <a href="#">榜单</a>
        </li>
        <li>
          <a href="#">音乐人</a>
        </li>
        <li>
          <a href="#">客户中心</a>
        </li>
      </ul>
    </div>
    <div class="search fl">
      <input type="text" name id placeholder="搜索音乐、歌手" />
      <button class="iconfont icon-sousuo"></button>
    </div>
    <div class="login fr clearfix">
      <i class="iconfont icon-vip fl">VIP</i>
      <i class="iconfont icon-login fr">登录</i>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    //   切换选项卡
    active (e) {
      // 获取元素
      var navMeau = document.getElementById('navMeau');
      var navList = navMeau.getElementsByTagName('li');
      let tar = e.target.parentNode
      console.log(e.target.innerText)
      // 清理active
      navList.forEach(element => {
        element.classList.remove('active')
      });
      //   添加active
      tar.classList.add('active')
    }
  }

}
</script>

<style>
/* 头部logo */
.header .logo {
  background: no-repeat url('../assets/images/logo.jpg');
  background-size: 50%;
  background-position: center center;
  height: 70px;
  line-height: 20em;
  overflow: hidden;
  margin-right: 25px;
}

/* 导航栏 */
.nav ul li {
  margin: 0 20px;
  padding: 0 20px;
  line-height: 70px;
  float: left;
}
.nav ul li.active {
  background-color: rgb(12, 99, 99);
  color: #fff;
}
.nav ul li:not([class='active']):hover a {
  color: rgb(12, 99, 99);
}
.nav ul li a {
  font-weight: 600;
  letter-spacing: 2px;
}

/* 搜索 */
.header .search {
  margin-top: 15px;
  margin-left: 30px;
  box-shadow: 0 0 0 1px rgba(12, 99, 99, 0.6);
  border-radius: 0.4em;
  font-size: 18px;
  text-align: center;
  padding: 5px;
}
.header .search input {
  width: 150px;
  height: 30px;
  letter-spacing: 1px;
  color: rgb(12, 99, 99);
  font-weight: 600;
}
.header .search button {
  font-size: 1.25em;
  vertical-align: middle;
  color: rgb(12, 99, 99);
}

/* 登录注册 */
.header .login {
  margin-right: 30px;
  text-align: center;
  font-size: 20px;
  color: rgb(12, 99, 99);
}
.header .login i {
  display: block;
  padding-right: 20px;
  line-height: 70px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  font-weight: 700;
  color: currentColor;
}
</style>