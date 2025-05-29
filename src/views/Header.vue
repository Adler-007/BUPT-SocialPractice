<script setup></script>

<template>
  <header>
    <div id="logo">
      <router-link to="/Home">
        <img src="@/assets/images/common/logo.png" alt="" />
        <p>北邮社会实践网</p>
      </router-link>
    </div>
    <nav>
      <ul>
        <li class="firstBar">
          <!-- <a href="" style="color: #296ac0; font-weight: bold"> -->
          <router-link to="/Home">首页</router-link>
          <!-- </a> -->
        </li>
        <li class="firstBar">
          <a href="#">活动资讯</a>
          <ul class="secondBar">
            <li class="submenu"><a href="#main2">活动预告</a></li>
            <li class="submenu"><a href="#main3">活动报道</a></li>
            <li class="submenu"><a href="#">成果展示</a></li>
          </ul>
        </li>
        <li class="firstBar">
          <a href="#">参与指南</a>
          <ul class="secondBar">
            <li class="submenu">
              <router-link to="/Register">报名流程</router-link>
            </li>
            <li class="submenu">
              <router-link to="/Enroll">项目招募</router-link>
            </li>
            <li class="submenu">
              <router-link to="/Q&A">常见问题</router-link>
            </li>
          </ul>
        </li>
        <li class="firstBar">
          <a href="#">志愿风采</a>
          <ul class="secondBar">
            <li class="submenu">
              <!-- <a href=""> -->
              <router-link to="/VolunteerWork">优秀事迹</router-link>
              <!-- </a> -->
            </li>
            <li class="submenu">
              <!-- <a href=""> -->
              <router-link to="/Experience">心得分享</router-link>
              <!-- </a> -->
            </li>
          </ul>
        </li>
        <li class="firstBar">
          <a href="#">关于我们</a>
          <ul class="secondBar">
            <li class="submenu">
              <router-link to="/AboutUs">网站简介</router-link>
            </li>
            <li class="submenu">
              <router-link to="/Contact">联系我们</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div id="login">
      <ul>
        <li>
          <!-- <router-link to="/Login">登录</router-link> -->
          <a href="" id="login"><router-link to="/Login">登录</router-link></a>
        </li>
        <li>
          <a href="" id="sign"><router-link to="/Sign">注册</router-link></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
/* 导航栏部分 */
header {
  height: 50px;
  background-color: #fff;
  position: relative;
  background-image: url("@/assets/images/common/navBg.png");
  background-size: cover;
}

header #logo {
  width: 20%;
  height: 50px;
  float: left;
}

header #logo img {
  margin: 10px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  float: left;
}

@font-face {
  font-family: "STXINGKA";
  src: url("@/assets/fonts/STXINGKA.TTF");
}

header #logo p {
  margin-top: 14px;
  font-size: 24px;
  text-align: center;
  font-family: "STXINGKA";
}

nav {
  height: 40px;
  float: left;
  margin-left: 30%;
}

nav ul {
  padding: 0;
  margin-top: 0;
  position: relative;
}

nav .firstBar {
  height: 30px;
  float: left;
  list-style: none;
  margin-left: 15px;
}

nav li a {
  display: block;
  height: 30px;
  padding: 10px 5px;
  font-size: 18px;
}

nav li a:hover {
  font-weight: bold;
  color: #296ac0;
  box-shadow: 0 0 4px #222;
}

@keyframes showSecondBar {
  from {
    max-height: 0;
  }
  to {
    max-height: 100px;
  }
}

/* 二级导航 */
nav li .secondBar {
  display: none;
  overflow: hidden;
  background-color: #eee;
  position: absolute;
  top: 50px;
  z-index: 2;
  list-style: none;
  animation: showSecondBar 0.5s ease forwards;
}

nav li:hover .secondBar {
  display: block;
}

nav li .secondBar a {
  margin: 0;
  padding: 0;
  font-size: 16px;
  padding: 0px 9px;
}

nav li .secondBar a:hover {
  background-color: #ffffff;
  color: #d2833f;
  font-weight: lighter;
  box-shadow: 0 0 3px #222;
}

header #login {
  height: 50px;
  float: left;
}

header #login ul {
  height: 30px;
  padding: 0;
  margin: 10px 5px 10px 10px;
}

header #login li {
  height: 30px;
  padding: 0px 10px;
  float: left;
  list-style: none;
  margin: auto 5px;
  border-radius: 5px;
  background-color: #6990fe;
}
header #login li:hover {
  transform: translateY(1px);
  background-color: #d2833f;
}

header #login li a {
  margin-top: 4px;
  color: #fff;
  font-size: 14px;
  font-weight: lighter;
}
</style>
