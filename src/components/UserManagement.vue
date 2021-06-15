<template>
  <body id="user_management">
  <div style="width: 100%">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户总览" name="first" >
        <el-row>
          <el-col span="8"> <el-card class="box-card" style="width: 90%;margin-left: 15px">
            <div slot="header" class="clearfix">
              <el-row :gutter="20">
                <el-col :span="18"><span class="graph_title">用户数目</span></el-col>
                <el-col :span="6"><span class="ant-tag-green" style="margin-left:50px ">总</span></el-col>
              </el-row>
            </div>
            <div class="text item">
              <el-row :gutter="20" type="flex" justify="center">
                <span class="text-2xl">3</span>
              </el-row>
            </div>
          </el-card> </el-col>
          <el-col span="8">   <el-card class="box-card" style="width: 90%;margin-left: 15px">
            <div slot="header" class="clearfix">
              <el-row :gutter="20">
                <el-col :span="18"><span class="graph_title">管理员数目</span></el-col>
                <el-col :span="6"><span class="ant-tag-green" style="margin-left:50px ">总</span></el-col>
              </el-row>
            </div>
            <div class="text item">
              <el-row :gutter="20" type="flex" justify="center">
                <span class="text-2xl" ref="adminNum" >{{adminNum}}位</span>
              </el-row>
            </div>
          </el-card></el-col>
          <el-col span="8">   <el-card class="box-card" style="width: 90%;margin-left: 15px">
            <div slot="header" class="clearfix">
              <el-row :gutter="20">
                <el-col :span="18"><span class="graph_title">超级管理员数量</span></el-col>
                <el-col :span="6"><span class="ant-tag-green" style="margin-left:50px ">总</span></el-col>
              </el-row>
            </div>
            <div class="text item">
              <el-row :gutter="20" type="flex" justify="center">
                <span class="text-2xl" >500家</span>
              </el-row>
            </div>
          </el-card></el-col>
          <!-- 用户变化的折线图-->
          <div style="width: 100%;margin-top: 300px">
            <div style="width: auto;height: 400px" id="main"></div>
          </div>

        </el-row>



      </el-tab-pane>
      <el-tab-pane label="用户管理" name="second">
        <el-card>
          <el-row :gutter="20" style="margin-top: 20px" >
           <el-col span="18"><span class="graph_title">用户管理</span></el-col>

          </el-row>
          <el-row :gutter="20" style="margin-top: 20px" >
            <el-col :span="6">
              <span>邮箱</span>
              <el-input v-model="userInfo.email" placeholder="请输入内容" class="input"></el-input>
            </el-col>
            <el-col :span="6">
              <span>公司组织</span>
              <el-input v-model="userInfo.company" placeholder="请输入内容" class="input"></el-input>
            </el-col>
            <el-col :span="6" style="text-align: center">
              <el-button icon="el-icon-search" circle style="background-color: #052aae; color: white" @click="clickSearch"></el-button>
            </el-col>
            <el-col span="2"> <el-button
              size="large"
              type="primary"
              @click="addUserVisible = true">添加用户</el-button></el-col>
          </el-row>
          <el-table
            :data="userTableData"
            border

            style="width: 100%;margin-top: 20px">
            <el-table-column
              fixed
              type="index"
              prop="num"
              label="序号"
              width="100"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="昵称"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮箱"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="company"
              label="公司"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="identity"
              label="角色"
              align="center"
            >
            </el-table-column>
            <el-table-column label="操作" align="center" >
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row) ">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteUserInfo(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-tab-pane>

    </el-tabs>


  </div>
<!--  用户信息修改的弹出框-->
  <div style="width: 100%;margin-top: 20px">
    <el-dialog title="修改用户信息" :visible.sync ="handleEditVisible" :modal-append-to-body="false" >
      <el-form :model="form">
        <el-form-item label="昵称" :label-width="formLabelWidth" >
          <el-input v-model="form.name"  autocomplete="off" ref="editUserName"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth" >
          <el-input v-model="form.email" autocomplete="off" disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司" :label-width="formLabelWidth">
          <el-input v-model="form.company" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="form.identity" placeholder="请选择用户角色" disabled="true">
            <el-option label="user" value="user"></el-option>
            <el-option label="admin" value="admin"></el-option>
            <el-option label="super-admin" value="super-admin"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUserInfo">确 定</el-button>
      </div>
    </el-dialog>
  </div>
  <!-- 添加用户的弹出框-->
  <div style="width: 100%;margin-top: 20px" >
    <el-dialog title="添加用户信息" :visible.sync="addUserVisible" :modal-append-to-body="false"  >
      <el-form :model="addForm" :rules="addRule" ref="addForm">
        <el-form-item label="昵称" :label-width="formLabelWidth"  prop="name">
          <el-input v-model="addForm.name"  autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
          <el-input v-model="addForm.email" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input v-model="addForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司" :label-width="formLabelWidth" prop="company">
          <el-input v-model="addForm.company" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="addForm.identity" placeholder="请选择用户角色">
            <el-option label="user" value="user"></el-option>
            <el-option label="admin" value="admin"></el-option>
            <el-option label="super-admin" value="super-admin"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addUserVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">保 存</el-button>
      </div>
    </el-dialog>
  </div>



  </body>
</template>

<script>
  export default {
    name: "user_management",
    data() {
      return {
        activeName: 'second',
        handleEditVisible: false,
        addUserVisible:false,
        userTableData: [],
        form: {  },
        addForm:{ },
        userInfo: {
          email: '',
          company: ''
        },
        addRule: {
          name: [{required: true, trigger: 'blur'}],
          company: [{required: true, trigger: 'blur'}],
          password: [{required: true, trigger: 'blur'}],
          email: [
            {required: true, message: '请输入邮箱信息', trigger: 'blur'},
            {pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '邮箱格式错误', trigger: 'blur'},
          ],
        },
        adminNum :''
      }
    },
    mounted() {
      this.myecharts();
    },

    //显示用户列表
    created() {
      this.initUserList();

    },
    methods: {
      initUserList() {
        this.$http.get("showUsers").then(response => {
         console.log("length"+response.data.length)
          this.userTableData = response.data;
          this.adminNum.valueOf(response.data.length)
          }, response => {
            console.log("error")
          }
        )
      },
      //响应查看详情事件
      handleEdit(index, row) {
        this.$set(this.form,'name',row["name"]);
        this.$set(this.form,'email',row["email"]);
        this.$set(this.form,'company',row["company"]);
        this.$set(this.form,'identity',row["identity"]);
        this.$set(this.form,'password',row["password"]);
        this.handleEditVisible = true;

      },
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      clickSearch() {
        this.$http.get("showUsers?company=" + this.userInfo.company + "&email=" + this.userInfo.email).then(response => {
            //console.log(this.userInfo.company)
            this.userTableData = response.data;
          }, response => {
            console.log("error")
          }
        )
      },
      //在对话框内部修改用户的信息
      editUserInfo() {
        this.$http.post("editUserInfo", {
          name: this.form.name,
          email: this.form.email,
          company: this.form.company,
          password: this.form.password,
          identity: this.form.identity
        }).then(response => {
          console.log(response);
          this.handleEditVisible = false;
          this.clickSearch()
        })
      },
      //删除用户信息
      deleteUserInfo(index,row){
        //console.log(row["email"])
        this.$http.get("deleteUser?email=" + row["email"]).then(response => {
            //this.$message.info(response.data)
            this.clickSearch()
          }, response => {
            console.log("error")
          }
        )

      },

      //保存新建用户信息
      addUser(){
     //保存用户信息
        this.$refs.addForm.validate(async (valid) => {
          if(valid){
             this.$http.post("addUser", {
              name: this.addForm.name,
              email: this.addForm.email,
              company: this.addForm.company,
              password: this.addForm.password,
              identity:this.addForm.identity
            });
            this.clickSearch()
          }
          else{
            this.$message.error("Something may be wrong")
          }
          }
        )
        this.addUserVisible = false;
        //  if(res == "success"){
        //   this.$message({
        //     message: 'sucess',
        //     type: 'success',
        //     offset: 2000,
        //     duration:1000
        //   })
        // }
        // else if(res == "fail")
        //   this.$message.error("Fail to sign up");
        // else
        //   this.$message.info(res);
      }
    }
  }
</script>

<style scoped>
  .el-card {
    box-shadow: 0 2px 4px #052aae, 0 0 6px rgba(0, 0, 0, .04)
  }

  .input{
    width: 250px;
  }

  .ant-tag-green {
    color: #52c41a;
    background: #f6ffed;
    border-color: #b7eb8f;
  }
  .graph_title {
    font-family: PingFang SC;
    font-size: x-large;
    font-weight: bolder;
    color: #3e3ba7
  }
  .graph_Num {
    font-family: PingFang SC;
    font-size: x-large;
    font-weight: bolder;
    color: #3e3ba7
  }
  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
</style>
