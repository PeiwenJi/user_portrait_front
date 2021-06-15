<template>
  <body id="userInfo">
  <div>
    <el-card class="main_card">
      <el-row>
        <el-col :span="12">
          <el-card class="info_card">
            <div slot="header">
              <span class="info_title">About me</span>
            </div>
            <div class="info_avatar">
              <el-avatar
                :size="150"
                :src="require('@/assets/avatar01.png')"
                style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)" alt >
              </el-avatar>
            </div>
            <div style="margin-top: 50px">
              <el-row>
                <el-col :span="13">
                  <!--用户名-->
                  <div>
                    <el-row>
                      <el-col :span="10">
                        <el-tag color="#F7C777" style="color: white; font-weight: bold"><i class="el-icon-user"></i>  Name</el-tag>
                      </el-col>
                      <el-col :span="14">
                        <span class="info">{{name}}</span>
                        <el-divider></el-divider>
                      </el-col>
                    </el-row>
                  </div>
                  <!--用户所在单位-->
                  <div>
                    <el-row>
                      <el-col :span="10">
                        <el-tag color="#41AA7F" style="color: white; font-weight: bold"><i class="el-icon-office-building"></i>  Company</el-tag>
                      </el-col>
                      <el-col :span="14">
                        <span class="info">{{company}}</span>
                        <el-divider></el-divider>
                      </el-col>
                    </el-row>
                  </div>
                  <!--用户邮箱-->
                  <div>
                    <el-row>
                      <el-col :span="10">
                        <el-tag color="#052aae" style="color: white; font-weight: bold"><i class="el-icon-chat-dot-round"></i>  Email</el-tag>
                      </el-col>
                      <el-col :span="14">
                        <span class="info">{{email}}</span>
                        <el-divider></el-divider>
                      </el-col>
                    </el-row>
                  </div>
                  <!--用户身份-->
                  <div>
                    <el-row>
                      <el-col :span="10">
                        <el-tag color="#0000FF" style="color: white; font-weight: bold"><i class="el-icon-s-opportunity"></i>  Identity</el-tag>
                      </el-col>
                      <el-col :span="14">
                        <span class="info">{{identity}}</span>
                        <el-divider></el-divider>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="11">
                  <el-card style="height: 250px; margin-left: 45px">
                    <el-button
                      icon="el-icon-edit"
                      circle
                      style="background-color: #db5860; color: white;" @click="edit_visible = true"></el-button>
                    <span class="info" style="margin-left: 15px">Edit myself</span>
                    <el-divider></el-divider>
                    <el-button
                      icon="el-icon-lock"
                      circle
                      style="background-color: #8e8eff; color: white;" @click="reset_visible = true"></el-button>
                    <span class="info" style="margin-left: 15px">Reset password</span>
                    <el-divider></el-divider>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <!--编辑个人信息-->
        <el-col :span="6" style="margin-left: -50px; background-color: #db5860; height: 850px" v-show="edit_visible">
          <el-card>
            <div style="margin-left: 20px">
              <div class="edit_title">
                <span>Edit Information</span>
              </div>
              <div style="margin-top: 20px">
                <el-form ref="edit_form" :model="edit_form" :rules="edit_rule">
                  <el-form-item prop="name">
                    <el-input v-model="edit_form.name" placeholder="Name"></el-input>
                  </el-form-item>
                  <el-form-item prop="company">
                    <el-input v-model="edit_form.company" placeholder="Company"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      class="edit_button"
                      @click="edit_loading"
                      v-loading.fullscreen.lock="edit_loading_visible"
                      element-loading-text="Updating your information">
                      <i class="el-icon-edit"></i>  Edit
                    </el-button>
                    <el-link :underline="false" @click="edit_visible = false" class="edit_cancel_link">Cancel</el-link>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </el-card>
        </el-col>
        <!--重置密码-->
        <el-col :span="6" style="margin-left: 50px; background-color: #8e8eff; height: 850px" v-show="reset_visible">
          <el-card style="margin-top: 128%">
            <div class="reset_title">
              <span>Reset Password</span>
            </div>
            <div style="margin-top: 20px">
              <el-form ref="reset_form" :model="reset_form" :rules="reset_rule">
                <el-form-item prop="old_password">
                  <el-input v-model="reset_form.old_password" type="password" show-password placeholder="Old Password"></el-input>
                </el-form-item>
                <el-form-item prop="new_password">
                  <el-input v-model="reset_form.new_password" type="password" show-password placeholder="New Password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    class="reset_button"
                    @click="reset_loading"
                    v-loading.fullscreen.lock="reset_loading_visible"
                    element-loading-text="Resetting your password">
                    Reset Password
                  </el-button>
                  <el-link :underline="false" @click="reset_visible = false" class="reset_cancel_link">Cancel</el-link>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
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
    name: "UserInfo",
    data() {
      let check = (rule,value,callback) => {
        if(value != Base64.decode(window.sessionStorage.getItem("Password")))
          callback(new Error("Password Error"));
        else
          callback();
      }

      return {
        name: window.sessionStorage.getItem("Name"),
        company: window.sessionStorage.getItem("Company"),
        email: window.sessionStorage.getItem("Email"),
        identity: window.sessionStorage.getItem("Identity"),

        edit_visible: false,
        reset_visible: false,
        edit_loading_visible: false,
        reset_loading_visible: false,

        edit_form: {
          name: window.sessionStorage.getItem("Name"),
          company: window.sessionStorage.getItem("Company"),
        },

        reset_form: {
          old_password: '',
          new_password: '',
        },

        edit_rule: {
          name: [{required: true, trigger: 'blur'}],
          company: [{required: true, trigger: 'blur'}]
        },

        reset_rule: {
          old_password: [
            {required: true, trigger: 'blur'},
            {validator: check, trigger: 'blur'}
          ],
          new_password: [{required: true, trigger: 'blur'}]
        }

      }
    },
    methods: {
      edit_loading() {
        this.$refs.edit_form.validate(async (valid) => {
          if(valid) {
            if(this.edit_form.name == this.name && this.edit_form.company == this.company)
              this.$message.info("Nothing will be updated")
            else {
              this.edit_loading_visible = true;
              setTimeout(async () => {
                const {data: res} = await this.$http.get("/edit?email=" + this.email + "&name=" + this.edit_form.name + "&company=" + this.edit_form.company)
                if(res == "success"){
                  this.name = this.edit_form.name;
                  this.company = this.edit_form.company;

                  window.sessionStorage.setItem("Name", this.name);
                  window.sessionStorage.setItem("Company", this.company);
                }
                else
                  this.$message.error("Fail to update");

                this.edit_visible = false;
                this.edit_loading_visible = false;
              }, 2000)
            }
          }
          else
            this.$message.error("Something may be wrong")
        })
      },

      reset_loading() {
        this.$refs.reset_form.validate(async (valid) => {
          if(valid) {
            this.reset_loading_visible = true;
            setTimeout(async () => {
              const {data: res} = await this.$http.get("resetPassword?email=" + this.email + "&new_password=" + this.reset_form.new_password);
              if(res == "success"){
                window.sessionStorage.setItem("Password", Base64.encode(this.reset_form.new_password));
                this.setCookie("Password", Base64.encode(this.reset_form.new_password));

                this.reset_form = {};
                this.reset_visible = false;
                this.reset_loading_visible = false;
              }
            }, 2000)
          }
          else
            this.$message.error("Something may be wrong")
        })
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
  .el-image {
    width: 25%;
  }

  .main_card {
    z-index: -1;
    box-shadow: 0 2px 4px #052aae, 0 0 6px rgba(0, 0, 0, .04);
    height: 900px;
  }

  .info_card {
    z-index: 0;
    height: 850px;
    width: 650px;
    margin-left: 50px;
  }

  .info_title {
    font-family: PingFang SC;
    font-size: xx-large;
    font-weight: bolder;
    color: #3e3ba7
  }

  .info_avatar {
    margin-left: 70%;
    margin-top: -90px;
  }

  .info {
    font-family: 'Agency FB';
    font-weight: bolder;
    color: black;
    font-size: large
  }

  .reset_title {
    font-family: PingFang SC;
    font-size: xx-large;
    font-weight: bolder;
    margin-left: 5px;
    color: #8e8eff;
  }

  .reset_cancel_link {
    font-weight: bold;
    color: #8e8eff;
  }

  .reset_button {
    background-color: #8e8eff;
    color: white;
    width: 100%;
  }

  .edit_title {
    font-family: PingFang SC;
    font-size: xx-large;
    font-weight: bolder;
    margin-left: 5px;
    color: #db5860;
  }

  .edit_cancel_link {
    font-weight: bold;
    color: #db5860;
  }

  .edit_button {
    background-color: #db5860;
    color: white;
    width: 100%;
  }
</style>
