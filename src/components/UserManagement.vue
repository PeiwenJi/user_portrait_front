<template>
  <body id="user_management">
  <div style="width: 100%">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户总览" name="first" style="margin-top: 50px;margin-bottom: 10px" >
        <el-row>
          <el-col :span="8">
            <el-card class="box-card" style="width: 90%;margin-left: 15px">
              <div slot="header" class="clearfix">
                <el-row :gutter="20">
                  <el-col :span=18><span class="graph_title">用户数目</span></el-col>
                  <el-col :span=6><span class="ant-tag-green" style="margin-left:50px ">总</span></el-col>
                </el-row>
              </div>
              <div class="text item">
                <el-row :gutter="20" type="flex" justify="center">
                  <span class="text-2xl">{{count.userNum}}人</span>
                </el-row>
              </div>
            </el-card> </el-col>
          <el-col :span="8">   <el-card class="box-card" style="width: 90%;margin-left: 15px">
            <div slot="header" class="clearfix">
              <el-row :gutter="20">
                <el-col :span=18><span class="graph_title">管理员数目</span></el-col>
                <el-col :span=6><span class="ant-tag-green" style="margin-left:50px ">总</span></el-col>
              </el-row>
            </div>
            <div class="text item">
              <el-row :gutter="20" type="flex" justify="center">
                <span class="text-2xl" ref="adminNum"  >{{count.adminNum}}位</span>
              </el-row>
            </div>
          </el-card></el-col>
          <el-col :span="8">
            <el-card class="box-card" style="width: 90%;margin-left: 15px">
              <div slot="header" class="clearfix">
                <el-row :gutter="20">
                  <el-col :span="18"><span class="graph_title">超级管理员数量</span></el-col>
                  <el-col :span="6"><span class="ant-tag-green" style="margin-left:50px ">总</span></el-col>
                </el-row>
              </div>
              <div class="text item">
                <el-row :gutter="20" type="flex" justify="center">
                  <span class="text-2xl" >{{count.superAdminNum}}位</span>
                </el-row>
              </div>
            </el-card></el-col>
          <!-- 用户变化的折线图-->
          <el-card class="box-card"style="width:90%;margin-top: 200px;margin-left: 5%" >
            <div >
              <div style="width: 100%;height: 400px" id="userChanged"  ref="userChanged"></div>
            </div>
          </el-card>
        </el-row>



      </el-tab-pane>
      <el-tab-pane label="用户管理" name="second" style="margin-bottom: 10px">
        <el-card class="box-card" style="width: 95%;margin-left: 2.5%">
          <el-row :gutter="20" style="margin-top: 20px" >
            <el-col :span="18"><span class="graph_title">用户管理</span></el-col>

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
            <el-col :span="9" style="text-align: left">
              <el-button icon="el-icon-search" circle style="background-color: #052aae; color: white" @click="clickSearch"></el-button>
            </el-col>
            <el-col :span="2"> <el-button
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
        <el-form-item label="昵称"  >
          <el-input v-model="form.name"  autocomplete="off" ref="editUserName"></el-input>
        </el-form-item>
        <el-form-item label="邮箱"   >
          <el-input v-model="form.email" autocomplete="off" disabled=true></el-input>
        </el-form-item>
        <el-form-item label="密码"  >
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司"  >
          <el-input v-model="form.company" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色"  >
          <el-select v-model="form.identity" placeholder="请选择用户角色" disabled= true>
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
        <el-form-item label="昵称"    prop="name">
          <el-input v-model="addForm.name"  autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="邮箱"   prop="email">
          <el-input v-model="addForm.email" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="密码"   prop="password">
          <el-input v-model="addForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司"   prop="company">
          <el-input v-model="addForm.company" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色"  >
          <el-select v-model="addForm.identity" placeholder="请选择用户角色"  disabled= true>
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
        activeName: 'first',      //默认的标签页
        handleEditVisible: false,
        addUserVisible:false,
        userTableData: [],
        form: {  },
        addForm:{identity:'user' },
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
        count:{
        },
        numChanged:false

      }
    },
    mounted() {
      //在这里读取数据之后传入
      //企图使用全局变量失败：echart参数的传递可能是在 $set改变之前已经传递过去了？
      //不能使用函数传递：script当中对于基本数据类型函数是按值传递，对于object类型是按引用传递
      // this.$http.get也是一个函数
      this.$http.get("countUserChanged").then(response=> {
          let datelist= response.data[0]
          let userChangedLits =response.data[1]
          this.myecharts(datelist,userChangedLits)
        }, response => {
          console.log("error")
        }
      )
    },

    //html渲染前调用
    created() {
      this.initUserList();
      this.initCountINfo();

    },
    methods: {
      //初始化用户管理界面当中的用户表格
      initUserList() {
        this.$http.get("showUsers").then(response => {
            this.userTableData = response.data;
          }, response => {
            console.log("error")
          }
        )
      },
      initCountINfo(){
        this.$http.get("showUsers").then(response => {
          this.$set(this.count,"userNum",response.data.length)
        }, response => {
          console.log("error")
        })
        this.$http.get("showUsers?identity=admin").then(response => {
          this.$set(this.count,"adminNum",response.data.length)
        }, response => {
          console.log("error")
        })
        this.$http.get("showUsers?identity=super-admin").then(response => {
            this.$set(this.count,"superAdminNum",response.data.length)
          }, response => {
            console.log("error")
          }
        )
      },
      //编辑用户信息对话框
      handleEdit(index, row) {
        //初始化这个对话框input内容不够
        //使用vue this.$set全局绑定可以动态修改变量值
        this.$set(this.form,'name',row["name"]);
        this.$set(this.form,'email',row["email"]);
        this.$set(this.form,'company',row["company"]);
        this.$set(this.form,'identity',row["identity"]);
        this.$set(this.form,'password',row["password"]);
        //error：
        //this.form.name = row["name"] 赋值成功，但是无法修改

        //
        this.handleEditVisible = true;

      },
      //切换用户管理、用户总览标签栏事件
      handleClick(tab, event) {
        this.initCountINfo()
        if( this.activeName =="first" && this.numChanged ){
          this.numChanged=false;
          window.location.reload()
        }

      },
      //点击搜素图标进行搜索
      clickSearch() {
        this.$http.get("showUsers?company=" + this.userInfo.company + "&email=" + this.userInfo.email).then(response => {
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

        })
      },
      //删除用户信息
      deleteUserInfo(index,row){
        //console.log(row["email"])
        this.$http.get("deleteUser?email=" + row["email"]).then(response => {
            this.clickSearch()
            this.numChanged =true
            this.$message.success("success delete")
          }, response => {
            console.log("error")
          }
        )

      },

      //保存新建用户信息
      addUser(){
        //保存用户信息
        //加入验证规则，所有均为必填项目，邮箱格式检验
        this.$refs.addForm.validate(async (valid) => {
            if(valid){
              this.$http.post("addUser", {
                name: this.addForm.name,
                email: this.addForm.email,
                company: this.addForm.company,
                password: this.addForm.password,
                identity:this.addForm.identity
              });
              this.addUserVisible = false;
              this.numChanged=true
              this.$message.success("success",1000)
              setTimeout(this.clickSearch,1000)   //hbase加入数据需要一点时间，需要晚点执行才可以

            }
            else{
              this.addUserVisible = false;
              this.$message.error("Something may be wrong")
            }
          }
        )

      },
      //初始化option数据
      initCharts(){
        //从数据库当中获取数据

      },
      //绘制用户变化数量图像
      myecharts(dateList,userChangedList){
        var myChart = this.$echarts.init(document.getElementById('userChanged')); //需要去获得元素id，所以需要在mounted当中i盗用
        // 指定图表的配置项和数据
        var option={
          title: {
            text: '近十天用户净变化',
            left:'center'
          },
          tooltip: {},
          legend: {
            data:['数量']
          },
          xAxis: {
            data:dateList
          },
          yAxis: {},
          series:{
            type: 'line',
            data:userChangedList
          }
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
      }
    }

  }
</script>

<style scoped>
  /*.el-card {*/
  /*  box-shadow: 0 2px 4px #052aae, 0 0 6px rgba(0, 0, 0, .04)*/
  /*}*/

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
