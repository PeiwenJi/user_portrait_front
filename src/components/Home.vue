<template>
  <body id="home">
  <el-container>
    <el-aside width="200px">
      <div class="avatar" style="margin-top: 20px" @click="user_info_visible=true">
        <el-avatar
          :size="100"
          :src="require('@/assets/avatar01.png')"
          style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)" alt >
        </el-avatar>
      </div>
<!--      <div style="margin-top: 10px">-->
<!--        <span style="font-family: 'Agency FB'; font-weight: bolder; color: white; font-size: large">Welcome, {{name}}</span>-->
        <div style="margin-top: 10px">
          <el-link
            :underline="false"
            @click="openUserInfo">
            <i class="el-icon-thumb"></i>
            Welcome
          </el-link>
        </div>
        <el-divider></el-divider>
      <div class="router">
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="labelSearch">
            Label Search
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="userManagement">
            User Management
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="tagManagement">
            Tag Management
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="adminManagement">
            Admin Management
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="rolePermission">
            Role Permission
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="tagCheck">
            Tag Check
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link
            :underline="false"
            @click="exit"
            v-loading.fullscreen.lock="exit_loading_visible"
            element-loading-text="Exiting...">
            Exit
          </el-link>
        </div>
      </div>
    </el-aside>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>

  <!--用户信息-->
  <el-drawer title="User Information" :visible.sync="user_info_visible" :before-close="handleClose" :append-to-body="true">
    <el-form>

    </el-form>
  </el-drawer>
  </body>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        exit_loading_visible: false,
        user_info_visible: false,
      }
    },
    methods: {
      exit() {
        this.exit_loading_visible = true;
        setTimeout(() => {
          window.sessionStorage.clear();
          this.exit_loading_visible = false;
          this.$router.push({path: '/'});
        }, 2000);
      },

      labelSearch() {
        this.$router.push({path: '/LabelSearch'});
      },

      userManagement() {
        this.$router.push({path: '/UserManagement'});
      },
      tagManagement() {
        this.$router.push({path: '/TagManagement'});
      },

      openUserInfo() {
        this.$router.push({path: '/UserInfo'});
      },

      rolePermission() {
        this.$router.push({path: '/RolePermission'});
      },

      adminManagement() {
        this.$router.push({path: '/AdminManagement'});
      },

      tagCheck() {
        this.$router.push({path: '/TagCheck'});
      },

      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style scoped>
  .el-aside {
    background-color: #000066;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }

  .el-main {
    margin-left: 3px;
    border-radius: 20px;
    box-shadow: 0 2px 4px #000066, 0 0 6px rgba(0, 0, 0, .04)
  }

  .el-container {
    height: 100%;
  }

  .el-link {
    font-family: 'MV Boli';
    font-size: large;
    font-weight: bolder;
    color: #d4d4d4
  }

  .el-drawer_title{
    font-family: PingFang SC;
    font-size: xx-large;
    font-weight: bolder;
    color: #551657
  }

  .el-drawer {
    background-color: #000066;
  }

  .el-card {
    width: 80%;
    box-shadow: 0 2px 4px #000066, 0 0 6px rgba(0, 0, 0, .04)
  }


  #home {
    height: 100%;
    width: 100%;
    margin: -5px 17px 27px -5px;
    background-size: cover;
    position: fixed;
  }
</style>
