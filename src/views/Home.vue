<script setup>
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
import { ref, onMounted } from "vue";

const isShow = ref(false);

onMounted(() => {
  // 页面加载后执行
  window.onload = function () {
    // 1、找到页面中的按钮
    // const toTop = document.getElementById("btn");
    // toTop.isShow = false;

    // 2、给按钮绑定点击事件
    function toTopClick() {
      let timer = null;
      // 周期性定时器
      timer = setInterval(function () {
        // 3、获取滚动条距离浏览器顶端的距离
        const backTop =
          document.documentElement.scrollTop || document.body.scrollTop;

        // 越滚越慢
        const speedTop = backTop / 5;

        document.documentElement.scrollTop = backTop - speedTop;
        if (backTop == 0) {
          clearInterval(timer);
        }
      }, 30);
    }
    // 设置临界值
    const pageHeight = 600;
    // 按键是否显示功能
    window.onscroll = function () {
      const backTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (backTop > pageHeight) {
        toTop.style.display = "block";
      } else {
        toTop.style.display = "none";
      }
    };
  };
});

// 页面加载后执行
// window.onload = function () {
//   // 1、找到页面中的按钮

//   const toTop = document.getElementById("btn");
//   toTop.style.display = "none";

//   let timer = null;
//   // 2、给按钮绑定点击事件
//   toTop.onclick = function () {
//     // 周期性定时器
//     timer = setInterval(function () {
//       // 3、获取滚动条距离浏览器顶端的距离
//       const backTop =
//         document.documentElement.scrollTop || document.body.scrollTop;

//       // 越滚越慢
//       const speedTop = backTop / 5;

//       document.documentElement.scrollTop = backTop - speedTop;
//       if (backTop == 0) {
//         clearInterval(timer);
//       }
//     }, 30);
//   };
//   // 设置临界值
//   const pageHeight = 600;
//   // 按键是否显示功能
//   window.onscroll = function () {
//     const backTop =
//       document.documentElement.scrollTop || document.body.scrollTop;
//     if (backTop > pageHeight) {
//       toTop.style.display = "block";
//     } else {
//       toTop.style.display = "none";
//     }
//   };
// };
</script>

<template>
  <div id="home">
    <!-- 导航栏部分 -->
    <Header />
    <!-- 主体部分 -->
    <div class="container">
      <!-- 广告位 -->
      <div class="slide">
        <img src="@/assets/images/homepage/slide1.jpg" alt="" />
        <div id="text">
          <p class="top animate__animated animate__fadeInDown">
            探索社会，实践成长
          </p>
          <p class="text animate__animated animate__fadeInLeft">
            我们的社会实践平台旨在为全校学生提供丰富的实践活动信息，鼓励大家走出校园，深入社会，积极参与各类实践活动。通过实践，你将获得宝贵的经验，提升个人能力，实现自我成长。
          </p>
          <button id="more" class="animate__animated animate__fadeInLeft">
            <a href="#main1" style="color: #fff; font-weight: bold">
              了解更多
            </a>
          </button>
        </div>
      </div>
      <!-- 内容部分 -->
      <div class="main">
        <div class="main1" id="main1">
          <h2 class="animate__animated animate__fadeInDown">
            关于我们的社会实践项目
          </h2>
          <div class="animate__animated animate__fadeInLeft">
            <p>
              作为一项推动学生全面发展的重要举措，我们的社会实践项目自成立以来，始终秉持着服务与学习相结合的理念。如今，我们的项目不仅是学生锻炼个人能力的舞台，更是他们探索社会、理解世界的知识平台。
            </p>
            <p>
              通过多样化的实践活动，参与者能够在真实的社会环境中应用所学知识，培养批判性思维与团队合作能力，积极影响他们所服务的社区。我们的使命是激励每一位学生，通过实践活动，引导他们成为具备社会责任感和领导力的未来人才。
            </p>
          </div>
          <div class="animate__animated animate__fadeInRight">
            <img src="@/assets/images/homepage/main1.jpeg" alt="" />
          </div>
        </div>
        <div class="main2" id="main2">
          <h2 class="animate__animated animate__fadeInUp">
            加入我们，开启你的社会探索之旅！
          </h2>
          <div class="list animate__animated animate__fadeInUp">
            <div class="text">
              <h3>丰富活动选择</h3>
              <p>
                从志愿者服务到实践机会，我们提供多种活动，欢迎你积极参与。无论是城市环保活动、社区支援项目，还是各类讲座和座谈会，这里都有适合你的机会，让你在服务中成长，提升自我价值，拓宽视野。加入我们，成为积极改变的一份子！
              </p>
            </div>
            <div class="img1">
              <img src="@/assets/images/homepage/main2-1.jpeg" alt="" />
            </div>
          </div>
          <div class="list animate__animated animate__fadeInUp">
            <div class="img2">
              <img src="@/assets/images/homepage/main2-2.jpg" alt="" />
            </div>
            <div class="text">
              <h3>提升个人能力</h3>
              <p>
                通过参与实践活动，提升你的沟通、组织和解决问题的能力。每一次实践都是一次成长的机会，让你在真实的环境中锻炼自我，拓展视野，积极塑造自己的未来。
              </p>
            </div>
          </div>
          <div class="list animate__animated animate__fadeInUp">
            <div class="text">
              <h3>结识志同道合的伙伴</h3>
              <p>
                在社会实践中结交新朋友，共同成长。通过参与各种活动，你将与有共同理想的人携手，并在互动中相互学习与支持，拓展你的社交圈，收获珍贵的友谊与经验。
              </p>
            </div>
            <div class="img3">
              <img src="@/assets/images/homepage/main2-3.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div class="main3" id="main3">
          <h2>我们的活动</h2>
          <ul>
            <li class="list animate__animated animate__fadeInLeft">
              <img src="@/assets/images/homepage/main3-1.jpeg" alt="" />
              <div class="left">
                <p>
                  31号<br />
                  9月<br />
                  10:00AM
                </p>
              </div>
              <div class="right">
                <p>社区环保清理活动</p>
                <p>主持人:张伟</p>
              </div>
            </li>
            <li class="list animate__animated animate__fadeInRight">
              <img src="@/assets/images/homepage/main3-2.jpeg" alt="" />
              <div class="left">
                <p>
                  5号<br />
                  11月<br />
                  2:00PM
                </p>
              </div>
              <div class="right">
                <p>大学生志愿服务座谈会</p>
                <p>主持人:李四</p>
              </div>
            </li>
            <li class="list animate__animated animate__fadeInLeft">
              <img src="@/assets/images/homepage/main3-3.jpeg" alt="" />
              <div class="left">
                <p>
                  28号<br />
                  10月<br />
                  3:00PM
                </p>
              </div>
              <div class="right">
                <p>社区义务教育辅导</p>
                <p>主持人:张老师</p>
              </div>
            </li>
            <li class="list animate__animated animate__fadeInRight">
              <img src="@/assets/images/homepage/main3-4.jpeg" alt="" />
              <div class="left">
                <p>
                  7号<br />
                  11月<br />
                  9:00AM
                </p>
              </div>
              <div class="right">
                <p>城市绿化志愿服务</p>
                <p>主持人:李明</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 页脚部分 -->
    <Footer style="background-color: #fff" />

    <!-- 返回顶部 -->
    <div id="toTop">
      <!-- <a href="javascript:;" id="btn"> -->
      <img
        id="btn"
        @click="toTopClick"
        src="@/assets/images/common/toTop.png"
        v-if="isShow"
      />
      <!-- </a> -->
    </div>
  </div>
</template>

<style scoped>
/* 主体部分 */
.container {
  margin: auto;
}

/* 轮播部分 */
.slide {
  width: 100%;
  height: 600px;
  margin-top: 0;
  float: left;
  position: relative;
}

.slide img {
  width: 100%;
  height: 600px;
  z-index: -100;
}

.slide #text {
  position: absolute;
  top: 70px;
  left: 40px;
}

.slide .top {
  color: #fff;
  font-size: 56px;
  font-weight: bold;
  letter-spacing: 5px;
}

.slide .text {
  width: 30%;
  color: #fff;
  font-size: 16px;
  letter-spacing: 2px;
  text-indent: 2em;
  font-weight: lighter;
}

.slide button {
  width: 120px;
  height: 35px;
  margin-top: 20px;
  margin-left: 10px;
  background-color: #4a73ff;
  color: #fff;
  font-size: 16px;
  border: 1.5px solid #000;
  border-radius: 7px;
  box-shadow: 2px 2px 0px #222;
  cursor: pointer;
}

.slide button:hover {
  background-color: #d2833f;
  color: #fff;
}

/* 内容1 */
.container .main1 {
  padding-top: 40px;
  padding-left: 5%;
  width: 100%;
  float: left;
  background-color: #e6f7ff;
}

.container .main1 h2 {
  margin: 10px;
  text-align: center;
}

.container .main1 div {
  float: left;
  margin: 20px 20px;
}

.container .main1 p {
  display: flex;
  width: 500px;
  margin: 50px 30px;
  text-indent: 2em;
}

.container .main1 img {
  width: 600px;
  height: 400px;
}

/* 内容2 */
.main2 {
  width: 100%;
  float: left;
  padding-left: 10%;
  background-color: #bccdff5f;
}

.container .main2 h2 {
  margin-top: 30px;
  text-align: center;
}

.container .main2 .list {
  float: left;
  margin: 20px;
  margin-top: 40px;
}

.container .main2 .list div {
  float: left;
  margin: 20px 20px;
}

.container .main2 .list .text {
  float: left;
  width: 500px;
  margin: 50px 30px;
}

.container .main2 .list .text h3 {
  text-align: center;
}

.container .main2 .list .text p {
  height: 100px;
  margin: 60px 30px 0px 30px;
  border: 2px solid #e2c1a6;
  border-radius: 10px;
  padding: 30px 20px;
  text-indent: 2em;
}

.container .main2 .list .img1 img {
  width: 500px;
  height: 450px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
}

.container .main2 .list .img2 img {
  width: 400px;
  height: 500px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
}

.container .main2 .list .img3 img {
  width: 600px;
  height: 400px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

/* 内容3 */
.main3 {
  width: 100%;
  float: left;
  padding-left: 5%;
  border-bottom: 1px solid #ddd;
  background-color: #e6f7ff;
}

.container .main3 h2 {
  margin-top: 30px;
  text-align: center;
}

.container .main3 ul {
  float: left;
}

.main3 .list {
  list-style: none;
  width: 500px;
  height: 600px;
  margin: 50px;
  float: left;
}

.main3 .list img {
  height: 500px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.main3 .list .left {
  margin-top: 0;
  width: 30%;
  height: 100px;
  background-color: #486ce1;
  float: left;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.main3 .list p {
  margin: 0;
}

.main3 .list .right {
  width: 70%;
  height: 100px;
  background-color: #c0deff;
  float: left;
  text-align: center;
  font-size: 24px;
}

.main3 .list .right p:first-child {
  font-weight: bold;
  margin: 10px auto;
  letter-spacing: 2px;
  font-size: 26px;
}

/* 返回顶部 */
#toTop img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  right: 50px;
  bottom: 80px;
  position: fixed;
  transform: rotateX("90deg");
  display: inline-block;
}
</style>
