<template>
  <body id="login">
  <div>

    <!--登录卡片-->
    <el-card class="card" v-show="login_visible">
      <el-row>
        <el-col :span="12">
          <!--登录-->
          <div style="margin-left: 20px">
            <div class="title">
              <span>Sign in</span>
            </div>
            <div class="description">
              <span>Login to stay connected...</span>
            </div>
            <div style="margin-top: 20px">
              <el-form ref="login_form" :model="login_form">
                <el-form-item>
                  <el-input v-model="login_form.email" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="login_form.password" type="password" show-password placeholder="Password"></el-input>
                  <el-checkbox v-model="checked">Remember me</el-checkbox>
                </el-form-item>
                <el-form-item>
                  <el-button @click="login"
                             v-loading.fullscreen.lock="login_loading_visible"
                             element-loading-text="Signing in...">
                    Sign in
                  </el-button>
                  <el-link :underline="false" @click="login_visible=false; register_visible=true">Sign up</el-link>
                  <el-link :underline="false" style="margin-left: 45%" @click="login_visible=false; password_forget_visible=true">Forget Password</el-link>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="image">
            <el-image
              :src="require('@/assets/login.png')"
              :fit="fit">
            </el-image>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <!--注册卡片-->
    <el-card class="card" v-show="register_visible">
      <el-row>
        <el-col :span="12">
          <!--注册-->
          <div style="margin-left: 20px">
            <div class="title">
              <span>Sign up</span>
            </div>
            <div class="description">
              <span>Create your own account...</span>
            </div>
            <div style="margin-top: 20px">
              <el-form ref="register_form" :model="register_form">
                <el-form-item>
                  <el-row>
                    <el-col :span="8">
                      <el-input v-model="register_form.name" placeholder="Name" style=""></el-input>
                    </el-col>
                    <el-col :span="15">
                      <el-input v-model="register_form.email" placeholder="Email"style="margin-left: 10px"></el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item>
                  <el-row>
                    <el-col :span="10">
                      <el-input v-model="register_form.password" type="password" show-password placeholder="Password"></el-input>
                    </el-col>
                    <el-col :span="13">
                      <el-input v-model="register_form.confirm_password" type="password" show-password placeholder="Confirm Password"style="margin-left: 10px"></el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item>
                  <el-button
                    @click="register_loading"
                    v-loading.fullscreen.lock="register_loading_visible"
                    element-loading-text="Creating your own account">
                    Sign up
                  </el-button>
                  <el-link :underline="false" @click="register_visible=false; login_visible=true">Back</el-link>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="image">
            <el-image
              :src="require('@/assets/login.png')"
              :fit="fit">
            </el-image>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <!--注册成功卡片-->
    <el-card class="card" v-show="register_success_visible">
      <el-row>
        <el-col :span="12">
          <!--注册成功-->
          <div style="margin-left: 20px">
            <div style="width: 80px; height: 80px; margin-top: 50px">
              <el-image
                :src="require('@/assets/success.png')"
                :fit="fit">
              </el-image>
            </div>
            <div class="description">
              <span>Sign up successfully...</span>
            </div>
            <div style="margin-top: 20px; margin-left: 5px">
              <el-link :underline="false" @click="register_success_visible=false; login_visible=true">Back to sign in</el-link>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="image">
            <el-image
              :src="require('@/assets/login.png')"
              :fit="fit">
            </el-image>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <!--忘记密码卡片-->
    <el-card class="card" v-show="password_forget_visible">
      <el-row>
        <el-col :span="12">
          <!--重置密码-->
          <div style="margin-left: 20px">
            <div class="title">
              <span>Reset Password</span>
            </div>
            <div class="description">
              <span>Reset your own password...</span>
            </div>
            <div style="margin-top: 20px">
              <el-form ref="reset_form" :model="reset_form">
                <el-form-item>
                  <el-row>
                    <el-col :span="24">
                      <el-input v-model="reset_form.email" placeholder="Email"></el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item>
                  <el-row>
                    <el-col :span="15">
                      <el-input v-model="reset_form.code" placeholder="Code"></el-input>
                    </el-col>
                    <el-col :span="8">
                      <el-button
                        @click="code_loading"
                        v-loading.fullscreen.lock="code_loading_visible"
                        element-loading-text="A code will be sent to your email" style="margin-left: 10px">
                        Get code
                      </el-button>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item>
                  <el-row>
                    <el-col :span="10">
                      <el-input v-model="reset_form.password" type="password" show-password placeholder="Password"></el-input>
                    </el-col>
                    <el-col :span="13">
                      <el-input v-model="reset_form.confirm_password" type="password" show-password placeholder="Confirm Password"style="margin-left: 10px"></el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item>
                  <el-button
                    @click="reset_loading"
                    v-loading.fullscreen.lock="reset_loading_visible"
                    element-loading-text="Resetting your password">
                    Reset Password
                  </el-button>
                  <el-link :underline="false" @click="password_forget_visible=false; login_visible=true">Back</el-link>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="image">
            <el-image
              :src="require('@/assets/login.png')"
              :fit="fit">
            </el-image>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <!--重置密码成功卡片-->
    <el-card class="card" v-show="reset_success_visible">
      <el-row>
        <el-col :span="12">
          <!--重置密码成功-->
          <div style="margin-left: 20px">
            <div style="width: 80px; height: 80px; margin-top: 50px">
              <el-image
                :src="require('@/assets/success.png')"
                :fit="fit">
              </el-image>
            </div>
            <div class="description">
              <span>Reset password successfully...</span>
            </div>
            <div style="margin-top: 20px; margin-left: 5px">
              <el-link :underline="false" @click="reset_success_visible=false; login_visible=true">Back to sign in</el-link>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="image">
            <el-image
              :src="require('@/assets/login.png')"
              :fit="fit">
            </el-image>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
  </body>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        //登录表单
        login_form: {
          email: '2931473049@qq.com',
          password: '123456',
        },
        //注册表单
        register_form: {
          name: '',
          email: '',
          password: '',
          confirm_password: ''
        },
        //密码重置表单
        reset_form: {
          email: '',
          code: '',
          password: '',
          confirm_password: ''
        },

        login_visible: true,
        register_visible: false,
        register_success_visible: false,
        password_forget_visible: false,
        reset_success_visible: false,

        login_loading_visible: false,
        register_loading_visible: false,
        code_loading_visible: false,
        reset_loading_visible: false
      }
    },
    methods: {

      //注册加载
      register_loading() {
        this.register_loading_visible = true;
        setTimeout(() => {
          this.register_form = {};
          this.register_loading_visible = false;
          this.register_visible = false;
          this.register_success_visible = true;
        }, 2000);
      },

      //验证码加载
      code_loading() {
        this.code_loading_visible = true;
        setTimeout(() => {
          this.code_loading_visible = false;
        }, 2000);
      },

      //重置加载
      reset_loading() {
        this.reset_loading_visible = true;
        setTimeout(() => {
          this.reset_form = {};
          this.reset_loading_visible = false;
          this.password_forget_visible = false;
          this.reset_success_visible = true;
        }, 2000);
      },

      //登录
      login() {
        //验证电子邮箱和密码
        if(this.login_form.email == "2931473049@qq.com" && this.login_form.password == "123456"){
          this.login_loading_visible = true;
          setTimeout(() => {
            this.login_form = {};
            this.register_loading_visible = false;
            this.$router.push({path: "/Home"})
          }, 2000);
        }
        else
          this.$message.error("电子邮箱或密码错误")
      }

    }
  }
</script>

<style scoped>
  #login {
    background:url("../assets/background.jpg");
    height: 100%;
    width: 100%;
    margin: -8px 20px 30px -8px;
    background-size: cover;
    position: fixed;
  }

  .card {
    width: 728px;
    height: 480px;
    margin-left: 50%;
    transform:translateX(-50%);
    margin-top: 10%;
  }

  .title {
    font-family: PingFang SC;
    font-size: xx-large;
    font-weight: bolder;
    margin-left: 5px;
    margin-top: 50px;
    color: #3e3ba7
  }

  .description {
    font-family: PingFang SC;
    margin-left: 5px;
    margin-top: 10px;
  }

  .image {
    width: 400px;
    height: 400px;
  }

  .el-form-item {
    width: 100%;
  }

  .el-checkbox {
    font-weight: bold;
    color: #4d49bf;
    margin-left: 60%;
  }

  .el-link {
    font-weight: bold;
    color: #4d49bf;
  }

  .el-button {
    background-color: #4d49bf;
    color: white;
    width: 100%;
  }
</style>
