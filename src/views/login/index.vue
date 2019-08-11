<template>
  <div id="app">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field
      placeholder="请输入手机号"
      clearable left-icon="phone-o"
      v-model="user.mobile"
      v-validate="'required|digits:11'"
      name="mobile"
      :error-message="errors.first('mobile')"
      ></van-field>
      <van-field
      clearable
      placeholder="请输入验证码"
      left-icon="more-o"
      v-model="user.code"
      name="code"
      :error-message="errors.first('code')"
      v-validate="'required|digits:6'">
        <van-button slot="button" size="small" type="primary" round>获取验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="login-btn">
      <van-button
      type="info"
      class="btn"
      @click="logins"
      :loading="btnLoading"
      loading-type="spinner"
      loading-text="登录中...">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
// import * as auth from '@/utils/auth'
export default {
  name: 'login',
  created () {
    const dict = {
      custom: {
        mobile: {
          required: '请输入手机号码',
          digits: '手机号码必须是11位数字'
        },
        code: {
          required: '请输入验证码',
          digits: '验证码必须是6位数字'
        }
      }
    }
    this.$validator.localize('zh_CN', dict)
  },
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      btnLoading: false
    }
  },
  methods: {
    async logins () {
      this.btnLoading = true
      try {
        const valid = await this.$validator.validate()
        if (!valid) {
          return
        }
        const res = await login(this.user)
        this.$store.commit('setToken', res.token)

        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        this.$toast.fail('登陆失败')
      }
      this.btnLoading = false
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  background-color: #f5f7f9;
  height: 100%;

  .van-field {
    background-color: #fff;
  }
  .login-btn {
    padding:0 15px;
    margin: 20px 0 ;

    .btn {
      width: 100%;
      border-radius: 10px;

    }
  }
}
</style>
