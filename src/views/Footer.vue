<script setup>
import Home from "@/views/Home.vue";
</script>

<template>
  <!-- 页脚部分 -->
  <footer id="footer">
    <div class="left">
      <div>
        <img src="@/assets/images/common/logo.jpg" alt="" />
        <h3><router-link to="/Home">北邮社会实践平台</router-link></h3>
      </div>
      <p>致力于推动社会责任与实践学习，提供一个连接学生与社会的全新平台。</p>
    </div>
    <table class="right" id="right">
      <tr class="us">
        <td>关于我们</td>
        <td></td>
        <td>联系我们</td>
      </tr>
      <tr>
        <td>
          <a href=""><router-link to="/AboutUs">关于我们</router-link></a>
        </td>
        <td><a href="#">学校云</a></td>
        <td class="num">邮箱:<a href="#">support@socialpractice.org</a></td>
      </tr>
      <tr>
        <td>
          <a href=""><router-link to="/Contact">联系我们</router-link></a>
        </td>
        <td>
          <a href=""><router-link to="/Q&A">常见问题</router-link></a>
        </td>
        <td class="num">电话:<a href="#">400-123-4567</a></td>
      </tr>
      <tr>
        <td><a href="#">意见反馈</a></td>
        <td><a href="#">法律条款</a></td>
      </tr>
    </table>
  </footer>
</template>

<style scoped>
/* 页脚部分 */
#footer {
  width: 100%;
  height: 220px;
  border-top: 1px solid #ddd;
  background-color: #ffffff;
}

footer .left {
  width: 40%;
  margin: 50px 10px 10px 80px;
  float: left;
}

footer .left a {
  color: #000000;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
}

footer .left img {
  width: 50px;
  height: 50px;
  float: left;
  border-radius: 25px;
}

footer .left h3 {
  margin-left: 60px;
  font-weight: lighter;
  color: #fff;
  line-height: 50px;
  font-family: "STXINGKA";
  font-weight: lighter;
}

footer .left p {
  width: 80%;
  margin-top: 5px;
}

footer .right {
  width: 40%;
  float: right;
  margin: 50px 20px 10px 130px;
  color: #444;
}

footer .right a {
  color: #444;
}

footer .right a:hover {
  color: #d2833f;
}

footer .right .us td {
  font-weight: bold;
  color: #000;
}

footer .right .num a {
  color: #444;
}

footer .right .num a:hover {
  color: rgb(0, 0, 201);
  text-decoration: underline;
}
</style>
