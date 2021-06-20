<template>
  <body id="role_permission">
  <!-- 面包屑导航栏 -->
  <!--  <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px">-->
  <!--    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>-->
  <!--    <el-breadcrumb-item>Role Permission</el-breadcrumb-item>-->
  <!--  </el-breadcrumb>-->

  <!-- 权限管理表格 -->

  <el-card>
    <el-table
      :data="data"
      :header-cell-style="{background:'#339999',color:'white', opacity:0.8}"
      stripe
      border
      style="width: 100%; font-size: 16px; margin: 20px 0px">
      <el-table-column
        prop="identity"
        label="角色"
        width="250"
        fixed
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column label="权限" header-align="center">
        <el-table-column label="数据" header-align="center">
          <el-table-column
            prop="data_1"
            label="用户群画像"
            width="200"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="data_2"
            label="组合标签一览"
            width="200"
            header-align="center"
            align="center">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="userSearch"
          label="用户画像"
          width="200"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column label="用户管理" header-align="center">
          <el-table-column
            prop="userManagement_1"
            label="用户总览"
            width="200"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="userManagement_2"
            label="用户管理"
            width="200"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="userManagement_3"
            label="管理员管理"
            width="200"
            header-align="center"
            align="center">
          </el-table-column>
        </el-table-column>
        <el-table-column label="标签管理" header-align="center">
          <el-table-column
            prop="tagManagement_1"
            label="标签总览"
            width="200"
            header-align="center"
            align="center">
          </el-table-column>
          <el-table-column
            prop="tagManagement_2"
            label="标签管理"
            width="200"
            header-align="center"
            align="center">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="tagManagement_3"
          label="标签审核"
          width="200"
          header-align="center"
          align="center">
        </el-table-column>
        <el-table-column
          prop="rolePermission"
          label="权限设置"
          width="200"
          header-align="center"
          align="center">
        </el-table-column>
      </el-table-column>
      <!--      <el-table-column-->
      <!--        prop="permission"-->
      <!--        label="权限"-->
      <!--        header-align="center"-->
      <!--        align="center">-->

      <!--        <template slot-scope="scope">-->


      <!--&lt;!&ndash;          <el-tag v-if="viewPermission_form.data_1 == 'true'" name="viewPermission_form.data_1">数据->用户群画像</el-tag>&ndash;&gt;-->
      <!--&lt;!&ndash;          <i class="el-icon-view" style="font-size: 24px; cursor: pointer;"  @click="viewPermission(scope.$index,scope.row)" ></i>&ndash;&gt;-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <el-table-column
        prop="operation"
        label="Operation"
        header-align="center"
        align="center"
        fixed
        width="250">
        <template slot-scope="scope">
          <el-tag type="warning">edit</el-tag>
          <i class="el-icon-edit-outline" style="font-size: 24px; cursor: pointer;"  @click="openEditForm(scope.row)" ></i>
        </template>
      </el-table-column>
    </el-table>
  </el-card>

  <!-- 查看权限表单 -->
  <!--  <el-dialog title="View" :visible.sync="visible_viewPermission_form" :append-to-body="true">-->
  <!--    <el-form ref="viewPermission_form" :model="viewPermission_form" label-width="100px">-->
  <!--      <el-form-item label="权限">-->
  <!--        <el-row>-->
  <!--&lt;!&ndash;          <el-tag :disabled="true" v-if="viewPermission_form.data_1" name="viewPermission_form.data_1">数据->用户群画像</el-tag>&ndash;&gt;-->
  <!--          <el-tag :disabled="true" v-model="viewPermission_form.data_2" label="" name="viewPermission_form.data_2">数据->组合标签一览</el-tag>-->
  <!--        </el-row>-->
  <!--        <el-row>-->
  <!--          <el-tag :disabled="true" v-model="viewPermission_form.userSearch" label="" name="viewPermission_form.userSearch">用户画像</el-tag>-->
  <!--        </el-row>-->
  <!--        <el-row>-->
  <!--          <el-tag :disabled="true" v-model="viewPermission_form.userManagement_1" label="" name="viewPermission_form.userManagement_1">用户管理->用户总览</el-tag>-->
  <!--          <el-tag :disabled="true" v-model="viewPermission_form.userManagement_2" label="" name="viewPermission_form.userManagement_2">用户管理->用户管理</el-tag>-->
  <!--          <el-tag :disabled="true" v-model="viewPermission_form.userManagement_3" label="" name="viewPermission_form.userManagement_3">用户管理->管理员管理</el-tag>-->
  <!--        </el-row>-->
  <!--        <el-row>-->
  <!--          <el-tag :disabled="true" v-model="viewPermission_form.tagManagement_1" label="" name="viewPermission_form.tagManagement_1">标签管理->标签总览</el-tag>-->
  <!--          <el-tag :disabled="true" v-model="viewPermission_form.tagManagement_2" label="" name="viewPermission_form.tagManagement_2">标签管理->标签管理</el-tag>-->
  <!--          <el-tag :disabled="true" v-model="viewPermission_form.tagManagement_3" label="" name="viewPermission_form.tagManagement_3">标签管理->标签审核</el-tag>-->
  <!--        </el-row>-->
  <!--        <el-row>-->
  <!--          <el-tag :disabled="true" v-model="viewPermission_form.rolePermission" label="" name="viewPermission_form.rolePermission">权限设置</el-tag>-->
  <!--        </el-row>-->
  <!--      </el-form-item>-->
  <!--    </el-form>-->
  <!--  </el-dialog>-->

  <!--修改权限表单-->
  <el-dialog title="Edit" :visible.sync="visible_editRole_form" :append-to-body="true">
    <el-form ref="editRole_form" :model="editRole_form" label-width="100px">
      <el-form-item label="角色" >
        <el-input v-model="editRole_form.identity" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="权限">
        <el-row>
          <el-checkbox v-model="editRole_form.data_1" label="数据->用户群画像" name="editRole_form.data_1"></el-checkbox>
          <el-checkbox v-model="editRole_form.data_2" label="数据->组合标签一览" name="editRole_form.data_2"></el-checkbox>
        </el-row>
        <el-row>
          <el-checkbox v-model="editRole_form.userSearch" label="用户画像" name="editRole_form.userSearch"></el-checkbox>
        </el-row>
        <el-row>
          <el-checkbox v-model="editRole_form.userManagement_1" label="用户管理->用户总览" name="editRole_form.userManagement_1"></el-checkbox>
          <el-checkbox v-model="editRole_form.userManagement_2" label="用户管理->用户管理" name="editRole_form.userManagement_2"></el-checkbox>
          <el-checkbox v-model="editRole_form.userManagement_3" label="用户管理->管理员管理" name="editRole_form.userManagement_3"></el-checkbox>
        </el-row>
        <el-row>
          <el-checkbox v-model="editRole_form.tagManagement_1" label="标签管理->标签总览" name="editRole_form.tagManagement_1"></el-checkbox>
          <el-checkbox v-model="editRole_form.tagManagement_2" label="标签管理->标签管理" name="editRole_form.tagManagement_2"></el-checkbox>
          <el-checkbox v-model="editRole_form.tagManagement_3" label="标签管理->标签审核" name="editRole_form.tagManagement_3"></el-checkbox>
        </el-row>
        <el-row>
          <el-checkbox v-model="editRole_form.rolePermission" label="权限设置" name="editRole_form.rolePermission"></el-checkbox>
        </el-row>
      </el-form-item>
      <el-row type="flex" justify="end">
        <el-button type="danger" icon="el-icon-delete" circle @click="closeForm"></el-button>
        <el-button type="success" icon="el-icon-check" circle @click="confirmEdit"></el-button>
      </el-row>
    </el-form>
  </el-dialog>

  </body>
</template>

<script>
  export default {
    name: 'RolePermission',
    data () {
      return {
        // 设置添加问题表单不可见
        visible_editRole_form: false,

        data: [],

        // 修改权限的表单
        editRole_form: {
          identity: '',
          data_1: true,
          data_2: true,
          userSearch: true,
          userManagement_1: true,
          userManagement_2: true,
          userManagement_3: true,
          tagManagement_1: true,
          tagManagement_2: true,
          tagManagement_3: true,
          rolePermission: true
        },
      }
    },
    created(){
      this.getRoleList();
    },

    methods: {
      // 获取管理员列表
      getRoleList () {
        this.$http.get("getRoleListRolePermission").then(response=>{
            console.log(response.data);
            this.data = response.data;
          console.log(this.data);
          },response => {
            console.log("error")
          }
        )
      },

      // 打开编辑表单
      openEditForm(row){
        this.$set(this.editRole_form,'identity',row["identity"])
        this.visible_editRole_form = true;
      },

      // 关闭表单
      closeForm(){
        this.visible_editRole_form = false
      },

      // 修改用户权限
      confirmEdit(){
        this.visible_editRole_form=false;
        console.log(this.editRole_form.data_1)
        this.$http.post("editRole", {
          identity: this.editRole_form.identity,
          data_1: this.editRole_form.data_1,
          data_2: this.editRole_form.data_2,
          userSearch: this.editRole_form.userSearch,
          userManagement_1: this.editRole_form.userManagement_1,
          userManagement_2: this.editRole_form.userManagement_2,
          userManagement_3: this.editRole_form.userManagement_3,
          tagManagement_1: this.editRole_form.tagManagement_1,
          tagManagement_2: this.editRole_form.tagManagement_2,
          tagManagement_3: this.editRole_form.tagManagement_3,
          rolePermission: this.editRole_form.rolePermission
        }).then(
          response=>{
            if(response.data == "ok"){
              console.log(response);
              this.getRoleList()
              this.$message.success("edit successfully!");
              console.log("sucess")
            }
            else{
              console.log(response);
              this.$message.success("edit failure!");
              console.log("error")
            }
          })
      }

    }
  }
</script>

<style scoped>
  /*.el-card {*/
  /*  box-shadow: 0 2px 4px #000066, 0 0 6px rgba(0, 0, 0, .04)*/
  /*}*/

</style>
