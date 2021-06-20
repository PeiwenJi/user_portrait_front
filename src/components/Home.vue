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
        <div style="margin-top: 10px" v-if="dataVisible =='true'">
          <el-link :underline="false" @click="goHome"   >
            <i class="el-icon-s-data"></i>
            数据
          </el-link>
        </div>
        <div style="margin-top: 10px"  v-if="userSearchVisible == 'true'">
          <el-link :underline="false" @click="userSearch" >
            <i class="el-icon-picture-outline"></i>
            用户画像
          </el-link>
        </div>
        <div style="margin-top: 10px" v-if="userManagementVisible == 'true'">
          <el-link :underline="false" @click="userManagement" >
            <i class="el-icon-user"></i>
            用户管理
          </el-link>
        </div>
<!--        <div style="margin-top: 10px">-->
<!--          <el-link :underline="false" @click="adminManagement">-->
<!--            <i class="el-icon-user"></i>-->
<!--            管理员管理-->
<!--          </el-link>-->
<!--        </div>-->
        <div style="margin-top: 10px"  v-if="tagManagementVisible == 'true'">
          <el-link :underline="false"
                   @click="tagManagement"
                   v-loading.fullscreen.lock="loading_visible"
                   element-loading-text="Loading"
                  >
            <i class="el-icon-collection-tag"></i>
            标签管理
          </el-link>
        </div>
        <div style="margin-top: 10px" v-if="tagManagement3Visible == 'true'">
          <el-link :underline="false" @click="tagCheck" >
            <i class="el-icon-collection-tag"></i>
            审核标签
          </el-link>
        </div>
        <div style="margin-top: 10px" v-if = "roleList.rolePermissionVisible=='true'">
          <el-link :underline="false" @click="rolePermission"   >
            <i class="el-icon-setting"></i>
            权限设置
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
        loading_visible: false,
        //rolePermissionVisible: false,
        //根据用户登录信息显示界面的权限变量
        dataVisible: false,
        userSearchVisible: false,
        userManagementVisible: false,
        tagManagement3Visible: true,
        tagManagementVisible: false,
        roleList:[{
          rolePermissionVisible: true,
        }]

      }
    },
    created(){

      console.log(window.sessionStorage.getItem("Identity"))
      this.$http.get("getRoleList").then(response=> {
          let map= null
          if (window.sessionStorage.getItem("Identity")=="user") {
            this.tagManagement3Visible=response.data[0]["user"]["tagManagement_3"]
            //console.log(this.tagManagement3Visible)
            this.userSearchVisible =response.data[0]["user"]["userSearch"]
            //this.rolePermissionVisible=response.data[0]["user"]["rolePermission"]
            this.$set(this.roleList,"rolePermissionVisible",response.data[0]["user"]["rolePermission"])
            //console.log(response.data[0]["user"]["rolePermission"])
           // console.log(this.roleList.rolePermissionVisible)
            map = response.data[0]["user"]
          }
          if (window.sessionStorage.getItem("Identity")== "admin") {
            this.tagManagement3Visible=response.data[0]["admin"]["tagManagement_3"]
            this.userSearchVisible =response.data[0]["admin"]["userSearch"]
            this.rolePermissionVisible=response.data[0]["admin"]["rolePermission"]
            map = response.data[0]["admin"]
          }
          if (window.sessionStorage.getItem("Identity")=="super-admin") {
            this.tagManagement3Visible=response.data[0]["super-admin"]["tagManagement_3"]
            this.userSearchVisible =response.data[0]["super-admin"]["userSearch"]
            this.$set(this.roleList,"rolePermissionVisible",response.data[0]["super-admin"]["rolePermission"])
            map = response.data[0]["super-admin"]
          }
          console.log(this.roleList.rolePermissionVisible)
          console.log(response.data)
          if(map["userManagement_1"] =='true' || map["userManagement_2"] =='true' || map["userManagement_3"] =='true'){
            this.userManagementVisible='true'
          }
          if(map["tagManagement_1"] =='true'|| map["tagManagement_2"]=='true'){
            this.tagManagementVisible='true'
          }
          if(map["data_1"] =='true'|| map["data_2"]=='true'){
            this.dataVisible='true'
          }

        }
      )
    },
    mounted(){

    },

    methods: {
      openUserInfo() {
        this.$router.push({path: '/UserInfo'});
      },

      goHome() {
        this.$router.push({path: '/MainPage'});
      },

      labelSearch() {
        this.$router.push({path: '/TagSearch'});
      },

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
        }, 100);
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
