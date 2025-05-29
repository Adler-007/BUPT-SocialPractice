<script setup>
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
</script>

<template>
  <div>
    <!-- 头部 -->
    <Header />
    <!-- 主体部分 -->
    <main>
      <div class="slide">
        <img src="@/assets/images/innerPages/项目招募.png" alt="" />
        <div>
          <p>联系我们</p>
        </div>
      </div>
      <!-- 内容1 -->
      <div class="main1">
        <div class="left">
          <p>
            亲爱的同学们、热心的社会实践爱好者以及各企事业单位、社会组织：
            <br />
            欢迎访问北京邮电大学社会实践网站！在这里，我们为同学们搭建起走向社会、了解国情、增长才干、服务群众的桥梁，也为社会各界提供了与学校携手共育人才、推动社会发展的合作平台。
            无论你是想咨询关于学校社会实践活动的参与方式、项目详情，还是希望与我们探讨校企合作、公益联动等事宜，亦或是单纯想要分享你在这方面的想法与经验，我们都无比期待与你取得联系！
            学校社会实践负责老师及团队始终在这里，热忱欢迎你的来电、来信或到访，让我们共同努力，为社会实践事业添砖加瓦，为同学们的成长成才助力！
          </p>
        </div>
        <img src="@/assets/images/innerPages/网站简介.png" alt="" />
      </div>
      <!-- 联系我们部分 -->
      <div class="contact">
        <form action="">
          <span class="one">
            <p>您的名字</p>
            <input type="text" />
          </span>
          <span class="two">
            <p>您的邮箱</p>
            <input type="text" />
          </span>
          <span class="three">
            <p>您的手机号</p>
            <input type="text" />
          </span>
          <span class="four">
            <p>主题</p>
            <input type="text" />
          </span>
          <span class="five">
            <p>您的留言</p>
            <textarea name="" id=""></textarea>
          </span>
          <button>提交</button>
        </form>
      </div>
    </main>
    <!-- 底部 -->
    <Footer />
  </div>
</template>

<style scoped>
/* 滑动块部分 */
.slide img {
  width: 100%;
  height: 600px;
  z-index: -10;
  position: relative;
}

.slide div {
  position: absolute;
  top: 30%;
  left: 35%;
  font-size: 88px;
  color: #000000;
  font-weight: bold;
}

/* 内容1 */
.main1 {
  padding-top: 100px;
  background-color: #fff;
  display: flex;
}

.main1 img {
  width: 50%;
  margin: auto 20px;
  border-radius: 10px;
}

.main1 .left {
  width: 50%;
  margin: auto 20px;
  background-color: #d9e8f8;
  border-radius: 10px;
}

.main1 .left p {
  font-size: 20px;
  text-indent: 2em;
  padding: 15px 30px;
}

/* 联系我们 */
.contact {
  margin-top: 100px;
  background-color: #d9e8f8;
}

form {
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.contact span {
  font-size: 20px;
  flex-basis: 100%;
}

.contact span input {
  width: 640%;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact span textarea {
  width: 710%;
  height: 50px;
  border-radius: 5px;
}

form button {
  height: 30px;
  width: 100%;
  background-color: #f60;
  color: #fff;
  border: none;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
