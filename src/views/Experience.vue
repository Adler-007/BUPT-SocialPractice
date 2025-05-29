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
      <!-- 标题 -->
      <div class="title">
        <img src="@/assets/images/innerPages/优秀事迹.png" alt="" />
        <h1>心得分享</h1>
        <p>
          在这里，同学们将分享社会实践中的真实经历与感悟，每一段都是成长的见证与启发。
        </p>
      </div>

      <!-- 内容 -->
      <div class="main" id="main">
        <div class="top">
          <h1>实践者说</h1>
          <p>来自3000+参与者的真实心声</p>
        </div>
        <ul>
          <a href="#">
            <li class="list animate__animated animate__fadeInLeft">
              <img src="@/assets/images/innerPages/评分.png" alt="" />
              <div class="right">
                <p>在乡土实践中重新认识中国</p>
                <p>
                  张雨薇 · 乡村教育支持计划队员<br />
                  云南红河州实践分队 · 2023暑期
                </p>
                <p>
                  "本以为只是简单的支教，却在彝族村寨收获了双重教育。孩子们教我刺绣针法，
                  我带他们用编程制作电子族谱。这种双向的文化传递，让我真正理解了
                  ‘乡村振兴’的重量。最难忘离别时，阿嬷塞给我的那句彝语：‘ꉢꎭꀋꉆ
                  （我们是一家人）’"。
                </p>
              </div>
            </li>
          </a>
          <a href="#">
            <li class="list animate__animated animate__fadeInRight">
              <img src="@/assets/images/innerPages/评分.png" alt="" />
              <div class="right">
                <p>走出实验室的生态觉醒</p>
                <p>
                  陈昊 · 城市生态守护者计划组长<br />
                  海淀河道修复项目 · 2023秋季
                </p>
                <p>
                  "每天盯着显微镜的环科生，第一次徒手清理了2吨外来物种。
                  数据记录本上不仅有水质PH值，还有市民访谈中68%的人
                  不知道本地濒危植物。这份实践让我明白：环保不仅是实验室里的论文，
                  更是手掌的老茧和鞋底的泥土。"
                </p>
              </div>
            </li>
          </a>
          <a href="#">
            <li class="list animate__animated animate__fadeInRight">
              <img src="@/assets/images/innerPages/评分.png" alt="" />
              <div class="right">
                <p>被需要的感觉如此真实</p>
                <p>
                  李思雨 · 银龄数字助老行动志愿者<br />
                  学院路街道服务点 · 持续服务1年
                </p>
                <p>
                  "教会王奶奶视频通话的那天，她第一时间打给了海外孙女。
                  看着镜头两边泪眼模糊的祖孙，突然懂了什么是‘数字时代的
                  人文温度’。现在每周日的培训课，已经成为我和老人们的双向奔赴。"
                </p>
              </div>
            </li>
          </a>
        </ul>
      </div>
    </main>
    <!-- 底部 -->
    <Footer />
  </div>
</template>

<style scoped>
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
  width: 30%;
  position: absolute;
  top: 40%;
  left: 45%;
  color: #fff;
  font-size: 18px;
}

/* 内容部分 */
.main {
  margin: 50px auto;
  background-color: #f3f8fd;
  padding-bottom: 40px;
}

.main .top {
  padding: 30px 100px;
}

.main .top p {
  margin-top: -15px;
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
  height: 260px;
  margin: auto 20px;
  margin-bottom: 20px;
  list-style: none;
  border-radius: 20px;
  position: relative;
  background-color: #fff;
}

.main ul li img {
  width: 40%;
  height: 15px;
  padding-left: 15px;
  padding-top: 10px;
}

.main .list .right {
  width: 280px;
  height: 120px;
  display: block;
}

.main .list .right p {
  margin: 0;
  padding: 1px 15px;
  font-size: 14px;
  color: #000;
  text-align: justify;
}

.main .list .right p:first-child {
  font-weight: bold;
  margin: 5px;
  font-size: 18px;
}

.main .list .right p:nth-child(2) {
  margin-top: -5px;
  font-size: 12px;
  color: #898989;
}

.main .list .right p:last-child {
  margin-top: 10px;
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
