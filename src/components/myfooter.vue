<template>
  <div class="footer">
    <div class="mian">
      <ul class="clearfix">
        <li>
          <a href>服务条款</a>
        </li>
        <li>
          <a href>隐私政策</a>
        </li>
        <li>
          <a href>儿童隐私政策</a>
        </li>
        <li>
          <a href>版权投诉索引</a>
        </li>
        <li>
          <a href>意见反馈</a>
        </li>
      </ul>
      <span>网易公司版权所有©1997-2021</span>
      <span>杭州乐读科技有限公司运营：浙网文[2018]3506-263号</span>
      <br />
      <span>违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com</span>
      <br />
      <span>粤B2-20090191-18 工业和信息化部备案管理系统网站 浙公网安备 33010902002564号</span>
    </div>
    <div class="information">
      <p>由AloneDied提供支持</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* 底部信息 */
.footer {
  margin-top: 20px;
  border-top: 1px solid rgb(197, 197, 197, 0.5);
}
.footer .mian {
  padding: 15px;
  color: rgb(92, 88, 88);
  font-size: 12px;
}
.footer .mian ul li {
  margin-right: 20px;
  margin-bottom: 5px;
}
.footer .mian span {
  display: inline-block;
  padding: 5px 0;
}
.information {
  position: fixed;
  width: 12.5em;
  height: 1.7em;
  background-color: #fff;
  bottom: 0;
  right: 10em;
  font-size: 12px;
  box-shadow: 0 0 15px 3px rgb(196, 195, 195);
  border: 1px solid rgba(1196, 196, 196, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  line-height: 1.5;
  padding: 0 3px;
  text-align: center;
}
</style>