<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:02:36
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-04 16:29:10
 * @FilePath: \vite_vue3_ts\src\pages\login\Login.vue
-->
<template>
  <div class="login">
    <el-form id="el-form_4F4F2B2A3A5EEC503A348" ref="loginForm" :model="state.loginForm" :rules="state.loginRules" class="login-form">
      <h3 id="h3_7E0ABB5890A1DEF419AFB" class="title">
        星斗云管理系统
      </h3>
      <el-form-item id="el-form-item_494C75F27AD68A6F4EEA6" prop="username">
        <el-input id="el-input_818FA266E737BE67BF704" v-model="state.loginForm.username" type="text" auto-complete="off" placeholder="账号">
        </el-input>
      </el-form-item>
      <el-form-item id="el-form-item_F262759BCB95615BD3A40" prop="password">
        <el-input id="el-input_46A80A3DA3751ACB065CE" v-model="state.loginForm.password" type="password" auto-complete="off" placeholder="密码">
        </el-input>
      </el-form-item>
      <el-form-item id="el-form-item_8E47B879489A5C69C4DC5" style="width: 100%">
        <el-button id="el-button_6F73EEE95EE9757D00AB7" :loading="state.loading" size="medium" type="primary" style="width: 100%" @click="state.urlClick">
          <span id="span_6435290E04FD20A5A36B9" v-if="!state.loading"> 登 录 </span>
          <span id="span_D76386A41C9CBCFA3CD7D" v-else> 登 录 中... </span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/modules/user";

const $router = useRouter();
const state = reactive({
  /** 登录按钮 loading */
  loading: false,
  loginForm: {
    username: "admin",
    password: "12345678",
    // code: "1134",
  },
  /** 登录表单校验规则 */
  loginRules: {
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" },
    ],
    code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
  },
  urlClick: async () => {
    state.loading = true;
    const res = await useUserStore().login(state.loginForm);
    state.loading = false;
    if (res.code == 20000) $router.push({ path: "/" });
  },
});
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("@/assets/image/login-background.jpg");
  background-size: cover;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  height: 38px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
.login-code-img {
  height: 38px;
}
</style>
