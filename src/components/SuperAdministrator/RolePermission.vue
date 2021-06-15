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
      :data="tableData"
      :header-cell-style="{background:'#000066',color:'white', opacity:0.8}"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="roleName"
        label="Role Name"
        width="300"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        prop="description"
        label="Description"
        width="800">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="Operation"
        header-align="center"
        align="center">
        <i class="el-icon-edit-outline" style="font-size: 24px; cursor: pointer;" @click="visible_editRole_form = true" ></i>
      </el-table-column>
    </el-table>
  </el-card>

<!--  <el-dialog title="Edit Role" :visible.sync="visible_editRole_form" :append-to-body="true">-->
<!--      <el-form ref="editRole_form" :model="editRole_form" label-width="100px">-->
<!--        <el-form-item label="Role Name">-->
<!--          <el-input v-model="editRole_form.name"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="Description">-->
<!--          <el-input type="textarea" v-model="editRole_form.desc"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="Menus">-->
<!--          <el-checkbox-group v-model="form.type">-->
<!--            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
<!--            <el-checkbox label="地推活动" name="type"></el-checkbox>-->
<!--            <el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
<!--            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
<!--          </el-checkbox-group>-->
<!--        </el-form-item>-->
<!--        <el-row type="flex" justify="end">-->
<!--          <el-button type="danger" icon="el-icon-delete" circle @click="visible_editRole_form = false"></el-button>-->
<!--          <el-button type="success" icon="el-icon-check" circle @click=""></el-button>-->
<!--        </el-row>-->
<!--      </el-form>-->
<!--    </el-dialog>-->

  </body>
</template>

<script>
export default {
  name: 'RolePermission',
  data () {
    return {
      // 设置添加问题表单不可见
      visible_editRole_form: false,

      // 表格数据
      tableData: [{
        roleName: 'Super Administrator',
        description: 'Super Administrator '
      }, {
        roleName: 'Administrator',
        description: 'Administrator '
      }, {
        roleName: 'User',
        description: 'User '
      }],

      // 修改权限的表单
      editRole_form: {
        name: '',
        desc: '',
        type: []
      }
    }
  },

  methods: {
    // 修改用户权限
    // editRole(){
    //   visible_editRole_form: false;
    //   roleName: this.editRole_form.name
    //   description: this.editRole_form.desc
    //
    // }
  }
}
</script>

<style scoped>
  .el-card {
    box-shadow: 0 2px 4px #000066, 0 0 6px rgba(0, 0, 0, .04)
  }

</style>
