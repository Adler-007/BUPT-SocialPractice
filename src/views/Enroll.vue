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
        <img src="@/assets/images/innerPages/项目招募.png" alt="" />
        <div>
          <p>项目招募</p>
        </div>
      </div>
      <!-- 标题 -->
      <div class="title">
        <h1>项目招募</h1>
      </div>

      <!-- 内容 -->
      <div class="main" id="main">
        <ul>
          <a href="#">
            <li class="list animate__animated animate__fadeInLeft">
              <img src="@/assets/images/innerPages/项目招募-01.png" alt="" />
              <div class="left">
                <p>
                  <span>SEP</span><br />
                  14<br />
                </p>
              </div>
              <div class="right">
                <p>「乡土中国」乡村教育支持计划</p>
                <p>
                  招募12名志愿者赴云南红河州，为彝族村寨中小学生提供暑期
                  课业辅导（语文/英语/科学）、非遗文化传承工作坊（彝族
                  刺绣/民歌传唱）以及乡村图书馆数字化建设支持。
                </p>
              </div>
            </li>
          </a>
          <a href="#">
            <li class="list animate__animated animate__fadeInRight">
              <img src="@/assets/images/innerPages/项目招募-02.png" alt="" />
              <div class="left">
                <p>
                  <span>SEP</span><br />
                  20<br />
                </p>
              </div>
              <div class="right">
                <p>社区银龄数字助老行动</p>
                <p>
                  每周日开展智能手机培训课程，服务内容包含微信使用、医院挂号、防诈知识教学，为老人拍摄金婚纪念照并制作影集，招募要求：耐心细致，每周可保障3小时服务。
                </p>
              </div>
            </li>
          </a>
          <a href="#">
            <li class="list animate__animated animate__fadeInLeft">
              <img src="@/assets/images/innerPages/项目招募-03.png" alt="" />
              <div class="left">
                <p>
                  <span>SEP</span><br />
                  18<br />
                </p>
              </div>
              <div class="right">
                <p>城市生态守护者计划</p>
                <p>
                  海淀区河道生态修复项目，参与河岸外来物种清理（每周六上午）、市民环保意识调研（小组制），可获得环境学院教授签发的实践证明。
                </p>
              </div>
            </li>
          </a>
          <a href="#">
            <li class="list animate__animated animate__fadeInRight">
              <img src="@/assets/images/innerPages/项目招募-04.png" alt="" />
              <div class="left">
                <p>
                  <span>SEP</span><br />
                  14<br />
                </p>
              </div>
              <div class="right">
                <p>少数民族文化传承行动</p>
                <p>
                  深入黔东南侗寨开展侗族大歌数字化记录（需基础摄影技能）、双语儿童绘本创作（中/侗文对照）、特色民宿运营支持（旅游管理专业优先）。
                </p>
              </div>
            </li>
          </a>
          <a href="#">
            <li class="list animate__animated animate__fadeInRight">
              <img src="@/assets/images/innerPages/项目招募-05.png" alt="" />
              <div class="left">
                <p>
                  <span>SEP</span><br />
                  15<br />
                </p>
              </div>
              <div class="right">
                <p>筑梦未来·流动儿童关怀</p>
                <p>
                  为城市务工人员子女提供课后托管服务（工作日16:30-18:30）、周末艺术启蒙课程（戏剧/绘画/舞蹈），服务地点：海淀区清河街道活动中心。
                </p>
              </div>
            </li>
          </a>
          <a href="#">
            <li class="list animate__animated animate__fadeInRight">
              <img src="@/assets/images/innerPages/项目招募-06.png" alt="" />
              <div class="left">
                <p>
                  <span>SEP</span><br />
                  19<br />
                </p>
              </div>
              <div class="right">
                <p>红色文化寻访实践团</p>
                <p>
                  重走京津冀红色教育基地，开展口述历史采集（采访老党员）、微纪录片拍摄（提供设备支持），成果将参展校庆主题展览。
                </p>
              </div>
            </li>
          </a>
        </ul>
        <div class="btn">
          <button>查看更多</button>
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

.slide div {
  position: absolute;
  top: 30%;
  left: 35%;
  font-size: 88px;
  color: #000000;
  font-weight: bold;
}

/* 标题部分 */

main .title {
  background-color: #0066cc;
  width: 100%;
  height: 140px;
}

main .title h1 {
  font-size: 24px;
  color: #fff;
  padding-left: 10%;
  padding-top: 2%;
  margin: 0 auto;
}

/* 内容部分 */
.main {
  margin: 20px 8%;
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
  height: 300px;
  margin: auto 10px;
  margin-bottom: 20px;
  list-style: none;
  border-radius: 20px;
}

.main ul li img {
  width: 100%;
  height: 160px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.main .list .left {
  margin-top: 0;
  width: 20%;
  height: 130px;
  border-right: 1px solid #bababa;
  margin-top: -4px;
  float: left;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
}

.main .list p {
  margin: 5px auto;
}

.main .list .left p {
  font-size: 26px;
}

.main .list .left p span {
  color: #3e38f1;
  font-size: 14px;
}

.main .list .right {
  width: 240px;
  height: 120px;
  display: block;
  margin-top: -4px;
  padding-left: 21%;
}

.main .list .right p {
  margin: 0;
  padding-left: 5px;
}

.main .list .right p:first-child {
  font-weight: bold;
  margin: 5px;
  font-size: 16px;
}

.main .list .right p:last-child {
  font-size: 14px;
  color: #6b6b6b;
  text-align: justify;
  padding-right: 7px;
}

.main .btn button {
  margin: 20px 45%;
  width: 120px;
  height: 40px;
  margin-bottom: 100px;
  background-color: #ff6600;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 16px;
}

.main .btn button:hover {
  box-shadow: 0px 0px 5px #898989;
  cursor: pointer;
}
</style>
