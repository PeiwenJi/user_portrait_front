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
                <span class="text-2xl" >500人</span>
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
                <span class="text-2xl" >200位</span>
              </el-row>
            </div>
          </el-card></el-col>
          <el-col span="8">   <el-card class="box-card" style="width: 90%;margin-left: 15px">
            <div slot="header" class="clearfix">
              <el-row :gutter="20">
                <el-col :span="18"><span class="graph_title">公司数目</span></el-col>
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
          <div>
            <span class="graph_title">用户管理</span>
          </div>
          <el-row :gutter="20" style="margin-top: 20px" >
            <el-col :span="6">
              <span>邮箱</span>
              <el-input v-model="mail" placeholder="请输入内容" class="input"></el-input>
            </el-col>
            <el-col :span="6">
              <span>公司组织</span>
              <el-select v-model="company" placeholder="请选择用户公司">
                <el-option label="全部" value="all"></el-option>
                <el-option label="**公司" value="user"></el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <span>角色</span>
              <el-select v-model="identity" placeholder="请选择用户角色">
                <el-option label="全部" value="all"></el-option>
                <el-option label="用户" value="user"></el-option>
                <el-option label="管理员" value="admin"></el-option>
                <el-option label="超级管理员" value="super-admin"></el-option>
              </el-select>
            </el-col>
            <el-col :span="4" style="text-align: center">
              <el-button icon="el-icon-search" circle style="background-color: #052aae; color: white"></el-button>
            </el-col>
          </el-row>
          <el-table
            :data="tableData"
            border
            style="width: 100%;margin-top: 20px">
            <el-table-column
              fixed
              prop="num"
              label="序号"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="昵称"
            >
            </el-table-column>
            <el-table-column
              prop="mail"
              label="邮箱"
            >
            </el-table-column>
            <el-table-column
              prop="company"
              label="公司"
            >
            </el-table-column>
            <el-table-column
              prop="table_identity"
              label="角色"
            >
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row) ">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-tab-pane>

    </el-tabs>


  </div>
<!--  用户信息修改的弹出框-->
  <div style="width: 100%;margin-top: 20px">
    <el-dialog title="用户信息" :visible.sync="handleEditVisible" :modal-append-to-body="false" id="userDialog">
      <el-form :model="form">
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.mail" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公司" :label-width="formLabelWidth">
          <el-input v-model="form.company" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="form.identity" placeholder="请选择用户角色">
            <el-option label="用户" value="user"></el-option>
            <el-option label="管理员" value="admin"></el-option>
            <el-option label="超级管理员" value="super-admin"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEditVisible = false">确 定</el-button>
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
        activeName:'first',
        mail: '',
        company:'',
        identity:'',
        handleEditVisible:false,
        tableData: [{
          num:'1',
          name:'test',
          company:'test',
          mail:'test',
          table_identity:'用户'
      }],
        form: {
        },
      }
    },
    mounted() {
      this.myecharts()
    },
    methods: {
      handleEdit(index, row) {
       this.handleEditVisible = true;
       this.form.name = row["name"];
       this.form.mail=row["mail"];
       this.form.company=row["company"];
       this.form.identity=row["table_identity"]
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      myecharts(){
        var myChart = this.$echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
          title: {
            text: '近一月用户增长数量'
          },
          tooltip: {},
          legend: {
            data:['新增用户数量']
          },
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '新增用户数量',
            type: 'line',
            smooth:true,
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
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
