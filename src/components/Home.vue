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
            数据
          </el-link>
        </div>
<!--        <div style="margin-top: 10px">-->
<!--          <el-link :underline="false" @click="labelSearch">-->
<!--            <i class="el-icon-search"></i>-->
<!--            Label Search-->
<!--          </el-link>-->
<!--        </div>-->
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="userSearch">
            <i class="el-icon-picture-outline"></i>
            用户画像
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="userManagement">
            <i class="el-icon-user"></i>
            用户管理
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false"
                   @click="tagManagement"
                   v-loading.fullscreen.lock="loading_visible"
                   element-loading-text="拼命加载中">
            <i class="el-icon-collection-tag"></i>
            标签管理
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="adminManagement">
            <i class="el-icon-setting"></i>
            管理员设置
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="rolePermission">
            <i class="el-icon-setting"></i>
            权限设置
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link :underline="false" @click="tagCheck">
            <i class="el-icon-check"></i>
            标签审核
          </el-link>
        </div>
        <div style="margin-top: 10px">
          <el-link
            :underline="false"
            @click="exit"
            v-loading.fullscreen.lock="exit_loading_visible"
            element-loading-text="Exiting...">
            <i class="el-icon-switch-button"></i>
            退出
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
        //标签总览：loading选项
        loading_visible:false
      }
    },
    methods: {
      openUserInfo() {
        this.$router.push({path: '/UserInfo'});
      },

      goHome() {
        this.$router.push({path: '/MainPage'});
      },

      // labelSearch() {
      //   this.$router.push({path: '/LabelSearch'});
      // },

      userSearch() {
        this.$router.push({path: '/UserSearch'});
      },

      userManagement() {
        this.$router.push({path: '/UserManagement'});
      },

      tagManagement() {

        this.loading_visible = true;
        this.$router.push({path: '/TagManagement'});
        //跳转页面之前需要先加载一下
        setTimeout( () => {

          this.loading_visible = false
        }, 500);
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
