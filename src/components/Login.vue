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
              <el-form ref="login_form" :model="login_form" :rules="login_rule">
                <el-form-item prop="email">
                  <el-input v-model="login_form.email" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input v-model="login_form.password" type="password" show-password placeholder="Password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-checkbox v-model="login_form.remember">Remember me</el-checkbox>
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
              fit="fill">
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
              <el-form ref="register_form" :model="register_form" :rules="register_rule">
                  <el-row>
                    <el-col :span="8">
                      <el-form-item prop="name">
                        <el-input v-model="register_form.name" placeholder="Name"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="15">
                      <el-form-item prop="email">
                        <el-input v-model="register_form.email" placeholder="Email"style="margin-left: 10px"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                <el-form-item prop="company">
                  <el-input v-model="register_form.company" placeholder="Company"></el-input>
                </el-form-item>
                  <el-row>
                    <el-col :span="10">
                      <el-form-item prop="password">
                        <el-input v-model="register_form.password" type="password" show-password placeholder="Password"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="13">
                      <el-form-item prop="confirm_password">
                        <el-input v-model="register_form.confirm_password" type="password" show-password placeholder="Confirm Password"style="margin-left: 10px"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
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
              fit="fill">
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
                fit="fill">
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
              fit="fill">
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
              <el-form ref="reset_form" :model="reset_form" :rules="reset_rule">
                <el-form-item prop="email">
                  <el-row>
                    <el-col :span="24">
                      <el-input v-model="reset_form.email" placeholder="Email"></el-input>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item prop="code">
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
                  <el-row>
                    <el-col :span="10">
                      <el-form-item prop="password">
                        <el-input v-model="reset_form.password" type="password" show-password placeholder="Password"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="13">
                      <el-form-item prop="confirm_password">
                        <el-input v-model="reset_form.confirm_password" type="password" show-password placeholder="Confirm Password"style="margin-left: 10px"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
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
              fit="fill">
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
                fit="fill">
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
              fit="fill">
            </el-image>
          </div>
        </el-col>
      </el-row>
    </el-card>

  </div>
  </body>
</template>

<script>
  // 引入base64
  const Base64 = require('js-base64').Base64

  export default {
    created() {

      if(this.getCookie("Remember") == "true")
        this.login_form.remember = true;
      else
        this.login_form.remember = false;

      this.login_form.email = this.getCookie("Email");
      this.login_form.password = Base64.decode(this.getCookie("Password"));
    },

    name: "Login",
    data() {
      //校验注册两次输入的密码是否一致
      let register_check = (rule,value,callback) => {
        if(value != this.register_form.password)
          callback(new Error("Input password again"));
        else
          callback();
      }

      //校验重置两次输入的密码是否一致
      let reset_check = (rule,value,callback) => {
        if(value != this.reset_form.password)
          callback(new Error("Input password again"));
        else
          callback();
      }

      //校验邮箱格式是否正确
      let email_check = (rule,value,callback) => {
        let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (!reg.test(value))
          callback(new Error('Email format error'));
        else
          callback();
      }

      return {
        //登录表单
        login_form: {
          email: '',
          password: '',
          remember: ''
        },
        //注册表单
        register_form: {
          name: '',
          email: '',
          password: '',
          confirm_password: '',
          company: ''
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
        reset_loading_visible: false,

        //登录表单验证
        login_rule: {
          email: [
            {required: true, trigger: 'blur'},
            {validator: email_check, trigger: 'blur'}
          ],
          password: [{required: true, trigger: 'blur'}],
        },

        //注册表单验证
        register_rule: {
          name: [{required: true, trigger: 'blur'}],
          email: [
            {required: true, trigger: 'blur'},
            {validator: email_check, trigger: 'blur'}
          ],
          company: [{required: true, trigger: 'blur'}],
          password: [{required: true, trigger: 'blur'}],
          confirm_password: [
            {required: true, trigger: 'blur'},
            {validator: register_check, trigger: 'blur'}
          ]
        },

        //忘记密码表单验证
        reset_rule: {
          email: [
            {required: true, trigger: 'blur'},
            {validator: email_check, trigger: 'blur'}
          ],
          code: [{required: true, trigger: 'blur'}],
          password: [{required: true, trigger: 'blur'}],
          confirm_password: [
            {required: true, trigger: 'blur'},
            {validator: reset_check, trigger: 'blur'}
          ]
        },

        //验证码
        code: '',
      }
    },
    methods: {

      //注册加载
      register_loading() {
        this.$refs.register_form.validate(async (valid) => {
          if(valid){
            this.register_loading_visible = true;
            setTimeout(async () => {
              //注册用户
              const {data: res} = await this.$http.post("register", {
                name: this.register_form.name,
                email: this.register_form.email,
                company: this.register_form.company,
                password: this.register_form.password
              })
              if(res == "success"){
                this.register_form = {};
                this.register_visible = false;
                this.register_success_visible = true;
              }
              else if(res == "fail")
                this.$message.error("Fail to sign up");
              else
                this.$message.info(res);

              this.register_loading_visible = false;
            }, 2000);
          }
          else
            this.$message.error("Something may be wrong")
        })
      },

      //验证码加载
      code_loading() {
        this.code_loading_visible = true;
        setTimeout(async () => {
          //获取验证码
          const {data: res} = await this.$http.get("getCode?email=" + this.reset_form.email);
          if (res == "fail")
            this.$message.error("Fail to send a code to your email");
          else {
            this.code = res;
          }
          this.code_loading_visible = false;
        }, 2000);
      },

      //重置加载
      reset_loading() {
        if(this.reset_form.code != this.code)
          this.$message.error("Code Error");
        else{
          this.$refs.reset_form.validate(async (valid) => {
            if(valid){
              this.reset_loading_visible = true;
              setTimeout(async () => {
                const {data: res} = await this.$http.get("reset?email=" + this.reset_form.email + "&password=" + this.reset_form.password);
                if (res == "success"){
                  this.setCookie("Email", "");
                  this.setCookie("Password", "");
                  this.setCookie("Remember", false)

                  this.reset_form = {};
                  this.password_forget_visible = false;
                  this.reset_success_visible = true;
                }
                else if (res == "fail")
                  this.$message.error("Fail to reset");
                else
                  this.$message.info(res);

                this.reset_loading_visible = false;
              }, 2000);
            }
            else
              this.$message.error("Something may be wrong")
          })
        }
      },

      //登录
      login() {
        this.$refs.login_form.validate(async (valid) => {
          if(valid){
            this.login_loading_visible = true;
            setTimeout(async () => {
              //验证电子邮箱和密码
              const {data: res} = await this.$http.get("login?email=" + this.login_form.email + "&password=" + this.login_form.password);
              if(res == "success") {
                //查看用户是否选择记住密码
                if (this.login_form.remember) {
                  this.setCookie("Email", this.login_form.email);
                  this.setCookie("Password", Base64.encode(this.login_form.password));
                  this.setCookie("Remember", true)
                } else {
                  this.setCookie("Email", "");
                  this.setCookie("Password", "");
                  this.setCookie("Remember", false)
                }

                const {data: userInfo} = await this.$http.get("getUserInfo?email=" + this.login_form.email);
                window.sessionStorage.setItem("Name", userInfo.name);
                window.sessionStorage.setItem("Company", userInfo.company);
                window.sessionStorage.setItem("Email", this.login_form.email);
                window.sessionStorage.setItem("Identity", userInfo.identity);
                window.sessionStorage.setItem("Password", Base64.encode(this.login_form.password));

                this.login_form = {};
                this.$router.push({path: "/LabelSearch"})
              }
              else if(res == "Password error")
                this.$message.error(res);
              else
                this.$message.info(res);

              this.login_loading_visible = false;
            }, 2000);
          }
          else
            this.$message.error("Something may be wrong")
        })
      },

      // 获取cookie
      getCookie: function (key) {
        if (document.cookie.length > 0) {
          let start = document.cookie.indexOf(key + '=')
          if (start !== -1) {
            start = start + key.length + 1
            let end = document.cookie.indexOf(';', start)
            if (end === -1) end = document.cookie.length
            return unescape(document.cookie.substring(start, end))
          }
        }
        return ''
      },

      // 保存cookie
      setCookie: function (cName, value, expiredays) {
        let exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = cName + '=' + decodeURIComponent(value) +
          ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
      },

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
