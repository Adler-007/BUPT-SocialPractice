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
        <img src="@/assets/images/innerPages/志愿风采.png" alt="" />
        <div>
          <p>网站简介</p>
        </div>
      </div>
      <div class="main1">
        <img src="@/assets/images/innerPages/网站简介.png" alt="" />
        <div class="right">
          <h2>连接校园与社会的青春桥梁</h2>
          <p>
            连接校园与社会的青春桥梁北邮星火实践团成立于2015年，由一群心怀社会理想的北邮学子自发组建。
            我们秉持"科技向善，服务育人"的核心理念，九年来持续探索大学生社会实践的创新模式。
            通过系统化的项目运作和专业化的志愿服务，已形成覆盖数字助老、社区教育、
            乡村振兴三大领域的实践体系。在人工智能与信息技术高速发展的时代背景下，
            我们致力于将北邮学子的技术优势转化为社会服务动能。每个项目均配备专业导师团队，
            确保在服务社会的同时，实现参与者的多维能力提升。我们相信，真正的教育发生在课堂之外，
            而青年的成长需要扎根于真实的社会土壤。
          </p>
        </div>
      </div>
      <div class="main2">
        <div>
          <h2>38000+</h2>
          <p>累计志愿服务时长（小时）</p>
        </div>
        <div>
          <h2>92%</h2>
          <p>项目持续运营率</p>
        </div>
        <div id="three">
          <h2>56</h2>
          <p>合作社区与机构</p>
        </div>
        <div>
          <h2>1200+</h2>
          <p>参与志愿者人次</p>
        </div>
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
  top: 10%;
  left: 8%;
  font-size: 88px;
  color: #fff;
  font-weight: bold;
}

.slide div p {
  text-shadow: 0px 0px 10px #000;
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

.main1 .right {
  width: 50%;
  margin: auto 20px;
}

.main1 .right h2 {
  font-size: 36px;
}

.main1 .right p {
  font-size: 20px;
  text-indent: 2em;
}

/* 内容2 */
.main2 {
  margin-top: 50px;
  background-color: #d4ddff;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 100px;
}

.main2 div {
  justify-items: center;
}

.main2 div:first-child {
  border-right: 2px solid #8290c2;
}

.main2 #three {
  border-right: 2px solid #8290c2;
  border-top: 2px solid #8290c2;
}

.main2 div:last-child {
  border-top: 2px solid #8290c2;
}
</style>
