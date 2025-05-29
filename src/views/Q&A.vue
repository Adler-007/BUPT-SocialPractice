<script setup>
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
import "@/tools/jquery-3.7.1.js";

const answer = $("#answer");

const answerArr = [
  "答：我们提供的大学生社会实践活动类型丰富多样，主要类型包括：社区服务类：志愿者深入社区，为弱势群体提供生活帮扶等服务。环保公益类：志愿者参与环保宣传活动及实际环保行动。企业实习类：我们与企业合作，为大学生提供实习机会。",
  "答：我们高度重视志愿者安全，活动前对志愿者进行安全培训，活动过程中安排专人负责安全管理，为有风险的项目购买保险，同时要求志愿者遵守安全规定和操作流程，听从指挥。",
  "答：完成实践活动后，按要求提交实践报告，审核团队评估后给予实践学分或证书认定。表现优秀者将获荣誉称号并宣传展示，实践经历也将记入个人社会实践档案。",
  "答：我们会密切关注天气情况和相关安全因素。如果遇到恶劣天气或其他不可抗力因素导致活动无法正常进行，我们会提前通过电话、短信和网站公告等方式通知您活动延期或取消的消息，并及时安排补救措施，如调整活动时间、改变活动形式等，确保活动能够顺利开展或尽量减少对您的影响。",
];

window.onload = function () {
  $(".question")
    .find("li:first-child")
    .css({ backgroundColor: "#0066cc", color: "white" });
  $(".question")
    .find("li:first-child")
    .find("img")
    .css("display", "inline-block");
};

//点击事件
$(".question")
  .find("li")
  .click(function () {
    answer.html(answerArr[$(this).index()]);
    //$(this)表示当前点击的li元素，index()方法获取当前元素的索引值，并根据索引值获取相应的答案
    $(this).css({ "background-color": "#0066cc", color: "white" });
    $(this).find("img").css("display", "inline-block");
    $(".question")
      .find("li")
      .not($(this))
      .css({ "background-color": "white", color: "black" });
    $(".question").find("li").not($(this)).find("img").css({ display: "none" });
  });
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
          <p>常见问题</p>
        </div>
      </div>
      <!-- 问答部分 -->
      <div class="question">
        <div class="left">
          <h1>FAQs.</h1>
          <ul>
            <li>
              问：大学生社会实践活动有哪些类型？
              <img src="@/assets/images/innerPages/focus.png" alt="" />
            </li>
            <li>
              问：在社会实践活动期间，如何保障志愿者的安全？

              <img src="@/assets/images/innerPages/focus.png" alt="" />
            </li>
            <li>
              问：参与社会实践活动后，如何获得实践成果认定？
              <img src="@/assets/images/innerPages/focus.png" alt="" />
            </li>
            <li>
              问：如果遇到特殊情况（如天气原因）导致活动无法正常进行怎么办？
              <img src="@/assets/images/innerPages/focus.png" alt="" />
            </li>
          </ul>
        </div>
        <div class="right">
          <h1>Ans.</h1>
          <div>
            <img src="@/assets/images/innerPages/answer.png" alt="" />
            <p id="answer">
              答：我们提供的大学生社会实践活动类型丰富多样，主要类型包括：<br />
              社区服务类：志愿者深入社区，为弱势群体提供生活帮扶等服务。<br />
              环保公益类：志愿者参与环保宣传活动及实际环保行动。<br />
              文化教育类：志愿者前往偏远地区或教育资源匮乏的学校支教。<br />
              企业实习类：我们与企业合作，为大学生提供实习机会。
            </p>
          </div>
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

/* 问答部分 */
.question {
  margin-top: 50px;
  display: flex;
  align-items: center;
  padding-bottom: 100px;
  border: 2px solid #000;
  border-radius: 10px;
}

.question .left {
  width: 50%;
  height: 300px;
}

.question .right {
  width: 43%;
  height: 300px;
  padding-left: 20px;
  margin-left: 20px;
}

.question .left h1 {
  font-size: 36px;
  font-weight: bold;
  margin-left: 60px;
  color: #0c513f;
}

.question .left ul li {
  list-style: none;
  height: 100%;
  border: 1px solid #e7eeec;
  margin: 10px;
  border-radius: 5px;
  line-height: 50px;
  padding-left: 10px;
  position: relative;
}

.question .left ul li img {
  width: 30px;
  height: 30px;
  display: none;
  position: absolute;
  top: 20%;
  right: 10px;
}

.question .right h1 {
  font-size: 36px;
  font-weight: bold;
  margin-left: 60px;
  color: #0c513f;
}

.question .right div {
  background-color: #f3f8fd;
  padding: 30px;
  border-radius: 10px;
}

.question .right div img {
  width: 30px;
  height: 30px;
}

.question .right div p {
  font-size: 16px;
  line-height: 22px;
}
</style>
