<script setup>
import Header from "@/views/Header.vue";

// const login = document.querySelector(".login-button");
// const newUserNameValue = document.querySelector("#newUserName").value;
// const newUserIdValue = document.querySelector("#newUserId").value;
// login.onclick = function () {
//   if ((newUserNameValue == "") & (newUserIdValue == "")) {
//     alert("账号密码不能为空");
//   } else {
//     alert("注册成功！");
//   }
// };
</script>

<template>
  <div>
    <!-- 头部 -->
    <Header></Header>

    <!-- 主体部分 -->
    <div class="body">
      <div class="container">
        <div class="left-side">
          <img
            src="@/assets/images/sign/signLeft.jpg"
            alt=""
            class="leftPicture"
          />
          <img
            src="@/assets/images/common/logo.png"
            alt="Neuron Logo"
            class="logo"
          />
        </div>
        <div class="right-side">
          <h1>注册</h1>
          <form action="#" method="">
            <input type="text" placeholder="用户名" id="newUserName" />
            <input type="password" placeholder="密码" id="newUserId" />
            <input type="password" placeholder="确认密码" />
            <input type="submit" value="注册" class="login-button" />
            <hr />
            <div class="others">
              <a href=""
                ><img src="@/assets/images/common/phone.png" alt=""
              /></a>
              <a href="@/assets/images/common/WeChatQRcode.jpg">
                <img src="@/assets/images/common/wechat.png" alt="" />
              </a>
              <a href="@/assets/images/common/qqQRcode.jpg">
                <img src="@/assets/images/common/QQ.png" alt="" />
              </a>
              <a href="@/assets/images/common/moreQRcode.jpg">
                <img src="@/assets/images/common/more.png" alt="" />
              </a>
            </div>
            <p>已有账号？<router-link to="/login">登录</router-link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 主体部分 */
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

body .container {
  border-radius: 30px;
}

.container {
  display: flex;
  width: 60%;
  height: 80%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.128);
}

/* 左侧样式 */
.left-side {
  width: 60%;
  background-color: #e6f7ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  position: relative;
}

.left-side .leftPicture {
  width: 100%;
  height: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.logo {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 40px;
  margin-bottom: 20px;
  border-radius: 20px;
}

/* 右侧样式 */
.right-side {
  width: 40%;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
}

h1 {
  margin-bottom: 30px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.right-side a {
  color: #007bff;
}

.right-side a:hover {
  text-decoration: underline;
}

.login-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.others {
  display: flex;
  justify-content: center;
}

.others a:hover {
  transform: translateY(-5px);
  transition: all linear 0.2s;
}

.others img {
  width: 30px;
  height: 30px;
  margin: auto 5px;
}
</style>
