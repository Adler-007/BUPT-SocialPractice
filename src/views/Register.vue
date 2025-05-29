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
          <p>报名流程</p>
        </div>
      </div>
      <!-- 流程 -->
      <div class="main">
        <div class="bg">
          <img src="@/assets/images/innerPages/registerBg.jpg" alt="" />
        </div>
        <div class="step">
          <p class="one">
            Step 1：账号注册与认证<br />
            学生身份验证<br />
            ——点击右上角「注册」，输入学号+校内邮箱，自动同步教务系统信息。<br />
            完善个人档案<br />
            ——补充技能标签（如摄影/编程/文案）、实践经历（支持上传往期作品链接）。
          </p>
          <p class="two">
            Step 2：浏览与匹配项目<br />
            智能推荐<br />
            ——登录后首页自动显示「匹配度80%+」的实践项目（根据专业、技能、兴趣标签）。<br />
            多维筛选<br />
            ——通过「项目招募」页按分类（乡村振兴/国际交流）、时间（寒暑假/学期中）、难度（新手/进阶）精准查找。
          </p>
          <p class="three">
            Step 3：提交报名申请 个人报名<br />
            ——点击「立即申请」填写基础表单（意向岗位/可参与时段/紧急联系人）。<br />
            ——支持上传个性化材料：实践计划书（模板下载）、特长证明（证书/作品）。<br />
            团队报名<br />
            ——队长创建团队页面→邀请队员（输入学号或绑定邮箱）→统一提交团队申请书。<br />
            ——协作工具：自动生成团队任务分工表（在线编辑）。
          </p>
          <p class="four">
            Step 4：审核与确认<br />
            进度实时追踪<br />
            ——报名后24小时内显示「审核中」状态，可在线催促处理。<br />
            结果通知<br />
            ——通过站内信+短信通知结果，入选者需48小时内点击「确认参与」锁定席位。<br />
            ——候补机制：若未入选热门项目，可一键勾选「接受调剂」至相似项目。
          </p>
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

/* 流程 */
.main {
  position: relative;
}

.main img {
  width: 100%;
  height: 100%;
  z-index: -10;
}

.main p {
  width: 320px;
}

.one {
  position: absolute;
  top: 40px;
  left: 400px;
}

.two {
  position: absolute;
  top: 300px;
  right: 380px;
}

.three {
  position: absolute;
  top: 620px;
  left: 260px;
}

.four {
  position: absolute;
  bottom: 120px;
  right: 120px;
}
</style>
