<template>
  <body id="role_permission">
<!-- 面包屑导航栏 -->
  <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px">
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item>Role Permission</el-breadcrumb-item>
  </el-breadcrumb>

<!-- 权限管理表格 -->

  <el-card style="margin-top: 50px">
    <el-table
      :data="data"
      :header-cell-style="{background:'#339999',color:'white', opacity:0.8}"
      stripe
      border
      style="width: 100%; font-size: 16px; margin: 20px 0px">
      <el-table-column
        prop="identity"
        label="Identity"
        width="300"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="description"
        label="Description">
      </el-table-column>
      <el-table-column
        prop="permission"
        label="Permission"
        header-align="center"
        align="center"
        width="300">
        <template slot-scope="scope">
          <i class="el-icon-view" style="font-size: 24px; cursor: pointer;"  @click="viewPermission(scope.row)" ></i>
        </template>
      </el-table-column>
      <el-table-column
        prop="operation"
        label="Operation"
        header-align="center"
        align="center"
        width="300">
        <template slot-scope="scope">
          <i class="el-icon-edit-outline" style="font-size: 24px; cursor: pointer;"  @click="openEditForm(scope.row)" ></i>
        </template>
      </el-table-column>
    </el-table>
  </el-card>

  <!-- 查看权限表单 -->
  <el-dialog title="View" :visible.sync="visible_viewPermission_form" :append-to-body="true">
    <el-form ref="viewPermission_form" :model="viewPermission_form" label-width="100px">
      <el-form-item label="Permission">
        <el-checkbox-group v-model="viewPermission_form.mypermission">
          <el-checkbox label="Lable Search" name="lableSearch"></el-checkbox>
          <el-checkbox label="Admin Management" name="adminManagement"></el-checkbox>
          <el-checkbox label="User Management" name="userManagement"></el-checkbox>
          <el-checkbox label="User Search" name="userSearch"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
  </el-dialog>

  <!--修改权限表单-->
  <el-dialog title="Edit" :visible.sync="visible_editRole_form" :append-to-body="true">
      <el-form ref="editRole_form" :model="editRole_form" label-width="100px">
        <el-form-item label="Identity" >
          <el-input v-model="editRole_form.identity" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input type="textarea" v-model="editRole_form.description"></el-input>
        </el-form-item>
        <el-form-item label="Permission">
          <el-checkbox-group v-model="editRole_form.permission">
            <el-checkbox label="Lable Search" name="lableSearch"></el-checkbox>
            <el-checkbox label="Admin Management" name="adminManagement"></el-checkbox>
            <el-checkbox label="User Management" name="userManagement"></el-checkbox>
            <el-checkbox label="User Search" name="userSearch"></el-checkbox>
          </el-checkbox-group>
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

      // 设置查看权限表单不可见
      visible_viewPermission_form: false,

      data: [],

      // 修改权限的表单
      editRole_form: {
        identity: '',
        description: '',
        permission: []
      },

      // 查看权限的表单
      viewPermission_form:{
        mypermission: []
      }
    }
  },
  created(){
    this.getRoleList();
  },

  methods: {
    // 获取管理员列表
    getRoleList () {
      this.$http.get("getRoleList").then(response=>{
          console.log(response.data);
          this.data = response.data;
          this.total_admin = response.data.length;
          console.log(this.total_admin);
        },response => {
          console.log("error")
        }
      )
    },

    // 查看权限表单
    viewPermission(row){
      this.$set(viewPermission_form.permission,'permission',row["permission"])
      this.visible_viewPermission_form = true
    },

    // 打开编辑表单
    openEditForm(row){
      this.$set(this.editRole_form,'identity',row["identity"])
      this.$set(this.editRole_form,'description',row["description"])
      this.$set(this.editRole_form,'permission',row["permission"])
      this.visible_editRole_form = true
    },

    // 关闭表单
    closeForm(){
      this.visible_editRole_form = false
    },

    // 修改用户权限
    confirmEdit(){
      this.visible_editRole_form=false;
      if(this.editRole_form.description != ""){
        this.$http.post("editRole", {
          identity: this.editRole_form.identity,
          description: this.editRole_form.description,
          // permission: this.editRole_form.permission
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
      else{
        this.$message.success("Please input full information!");
      }
    }
  }
}
</script>

<style scoped>
  .el-card {
    box-shadow: 0 2px 4px #000066, 0 0 6px rgba(0, 0, 0, .04)
  }

</style>
