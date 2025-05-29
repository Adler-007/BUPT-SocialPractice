<script setup>
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
</script>

<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- 主体部分 -->
    <main>
      <div class="slide">
        <img src="@/assets/images/innerPages/志愿风采.png" alt="" />
        <div>
          <h1>志愿者风采</h1>
          <p>
            我们的社会实践平台旨在为全校学生提供丰富的实践活动信息，鼓励大家走出校园，深入社会，
            积极参与各类实践活动。通过实践，你将获得宝贵的经验，提升个人能力，实现自我成长。
          </p>
        </div>
      </div>
      <!-- 标题 -->
      <div class="title">
        <img src="@/assets/images/innerPages/优秀事迹.png" alt="" />
        <h1>优秀事迹</h1>
        <p>踏上这些充满卓越与奉献精神的激励人心的旅程</p>
      </div>

      <!-- 内容 -->
      <div class="main" id="main">
        <ul>
          <a href="#">
            <li class="list animate__animated animate__fadeInLeft">
              <img src="@/assets/images/innerPages/优秀事迹_01.png" alt="" />
              <div class="right">
                <p>社区「春雨助学」周末课堂</p>
                <p>
                  简介：文学院、教育学院学生组成的团队，连续两年每周六在清河社区开展义务助学，开设美术、
                  科学实验等特色课程，累计48场活动。<br />
                  成果：服务超600人次，获评北京市“优秀志愿服务团队”，项目模式被3个兄弟高校复制。
                </p>
                <span>12 Mar -春雨助学队</span>
              </div>
            </li>
          </a>
          <a href="#">
            <li class="list animate__animated animate__fadeInRight">
              <img src="@/assets/images/innerPages/优秀事迹_02.png" alt="" />
              <div class="right">
                <p>校园「绿芽行动」环保计划</p>
                <p>
                  简介：通过“废品回收-绿植培育-环保教育”模式，每周三收集可回收物，建成“生态角”，并举办环保工作坊。<br />
                  成果：年均回收物资2.3吨，培育植物42种，获全国大学生环保项目大赛铜奖。
                </p>
                <span>5 Jun - 绿芽环保社</span>
              </div>
            </li>
          </a>
          <a href="#">
            <li class="list animate__animated animate__fadeInRight">
              <img src="@/assets/images/innerPages/优秀事迹_03.png" alt="" />
              <div class="right">
                <p>「银龄关怀」敬老服务工程</p>
                <p>
                  简介：每周日在3家敬老院开展服务，创新“老物件故事展”“代际技能交换”等活动。<br />
                  成果：服务超5000小时，整理故事集200余篇，获评“首都最佳志愿服务组织”。
                </p>
                <span>12 Dec - 暖阳志愿者联盟</span>
              </div>
            </li>
          </a>
        </ul>
        <div class="btn">
          <button>加载更多</button>
        </div>
      </div>
    </main>
    <!-- 底部 -->
    <Footer></Footer>
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

.slide h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  font-size: 80px;
  color: #fff;
  font-weight: bold;
}

.slide p {
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(99, 99, 99, 0.382);
  width: 40%;
  font-size: 24px;
  color: #ffffff;
  font-weight: lighter;
  text-indent: 2em;
  position: absolute;
  top: 40%;
  left: 5%;
}

/* 标题部分 */

main .title {
  background-color: #0066cc;
  width: 100%;
  height: 140px;
  position: relative;
  margin-top: 100px;
}

main .title img {
  width: 30%;
  height: 120%;
  position: absolute;
  top: -28px;
}

main .title h1 {
  font-size: 28px;
  color: #fff;
  padding-left: 10%;
  padding-top: 2%;
  margin: 0 auto;
  position: absolute;
  top: 0px;
  left: 35%;
}

main .title p {
  position: absolute;
  top: 50%;
  left: 45%;
  color: #fff;
  font-size: 18px;
}

/* 内容部分 */
.main {
  margin: 50px 8%;
}

.main ul {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
}

.main ul li:hover {
  box-shadow: 5px 5px 5px #d5d5d5;
}

.main ul li {
  height: 340px;
  margin: auto 10px;
  margin-bottom: 20px;
  list-style: none;
  border-radius: 20px;
  position: relative;
}

.main ul li img {
  width: 100%;
  height: 160px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.main .list {
  background-color: #fff;
}

.main .list .right {
  width: 320px;
  height: 120px;
  display: block;
  margin-top: -4px;
}

.main .list .right p {
  margin: 0;
  padding-left: 5px;
}

.main .list .right p:first-child {
  font-weight: bold;
  margin: 5px;
  font-size: 16px;
  color: #242565;
}

.main .list .right p {
  font-size: 12px;
  color: #000;
  text-align: justify;
  padding-right: 7px;
}

.main .list .right span {
  color: #a5a5a5;
  position: absolute;
  bottom: 5px;
  left: 10px;
}

.main .list .right span:hover {
  color: #0066cc;
}

.main .btn button {
  margin: 20px 45%;
  width: 120px;
  height: 40px;
  margin-bottom: 100px;
  background-color: #ff6600;
  color: #fff;
  border: 1px solid #000;
  border-radius: 20px;
  font-size: 16px;
}

.main .btn button:hover {
  box-shadow: 0px 0px 5px #898989;
  cursor: pointer;
}
</style>
