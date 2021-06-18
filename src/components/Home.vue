<template>
  <body id="home">
  <el-container>
    <el-aside width="200px">
      <div class="avatar" style="margin-top: 20px">
        <el-avatar
          :size="100"
          :src="require('@/assets/avatar01.png')"
          style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)" alt >
        </el-avatar>
      </div>
      <div style="margin-top: 10px">
        <el-link :underline="false" @click="openUserInfo">
          <i class="el-icon-thumb"></i>
          Welcome
        </el-link>
      </div>
      <el-divider></el-divider>
      <div class="router">
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="goHome">
            <i class="el-icon-s-data"></i>
            Data
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="labelSearch">
            <i class="el-icon-search"></i>
            Label Search
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="userSearch">
            <i class="el-icon-user"></i>
            User Search
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="userManagement">
            <i class="el-icon-user"></i>
            User Management
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="tagManagement">
            <i class="el-icon-collection-tag"></i>
            Tag Management
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="adminManagement">
            <i class="el-icon-user"></i>
            Admin Management
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="rolePermission">
            <i class="el-icon-setting"></i>
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
            <i class="el-icon-switch-button"></i>
            Exit
          </el-link>
        </div>
      </div>
    </el-aside>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
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
      openUserInfo() {
        this.$router.push({path: '/UserInfo'});
      },

      goHome() {
        this.$router.push({path: '/DataPage'});
      },

      labelSearch() {
        this.$router.push({path: '/LabelSearch'});
      },

      userSearch() {
        this.$router.push({path: '/UserSearch'});
      },

      userManagement() {
        this.$router.push({path: '/UserManagement'});
      },

      tagManagement() {
        this.$router.push({path: '/TagManagement'});
      },

      adminManagement() {
        this.$router.push({path: '/AdminManagement'});
      },

      rolePermission() {
        this.$router.push({path: '/RolePermission'});
      },

      tagCheck() {
        this.$router.push({path: '/TagCheck'});
      },

      exit() {
        this.exit_loading_visible = true;
        setTimeout(() => {
          window.sessionStorage.clear();
          this.exit_loading_visible = false;
          this.$router.push({path: '/'});
        }, 2000);
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

  /*.el-main {*/
  /*  margin-left: 3px;*/
  /*  border-radius: 20px;*/
  /*  box-shadow: 0 2px 4px #052aae, 0 0 6px rgba(0, 0, 0, .04)*/
  /*}*/

  .el-container {
    height: 100%;
  }

  .el-link {
    font-family: 'Agency FB';
    font-weight: bolder;
    color: white;
    font-size: large
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
