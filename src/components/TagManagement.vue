<template>
  <body id="user_management">
  <div style="width: 100%">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="事务总览" name="first" >
        <el-row>
          <el-col span="8"> <el-card class="box-card" style="width: 90%;margin-left: 15px">
            <div slot="header" class="clearfix">
              <el-row :gutter="20">
                <el-col :span="18"><span class="graph_title">标签数目</span></el-col>
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
                <el-col :span="18"><span class="graph_title">开发总数</span></el-col>
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
                <el-col :span="18"><span class="graph_title">上线总数</span></el-col>
                <el-col :span="6"><span class="ant-tag-green" style="margin-left:50px ">总</span></el-col>
              </el-row>
            </div>
            <div class="text item">
              <el-row :gutter="20" type="flex" justify="center">
                <span class="text-2xl" >500家</span>
              </el-row>
            </div>
          </el-card></el-col>
          <!--          代办事项和最新动态-->

          <div style="width: 100%;margin-top: 200px">
            <el-row style="margin-top: 20px">
              <el-col span="12">
                <el-card class="box-card" style="width: 90%;margin-left: 15px">
                  <div slot="header" class="clearfix">
                    <el-row >
                      <el-col :span="18"><span class="graph_title">代办事项</span></el-col>
                    </el-row>
                  </div>
                  <div class="text item">
                    <el-row :gutter="20" type="flex" justify="center">
                      <span class="text-2xl" >500家</span>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
              <el-col span="12">
                <el-card class="box-card" style="width: 90%;margin-left: 15px">
                  <div slot="header" class="clearfix">
                    <el-row >
                      <el-col :span="18"><span class="graph_title">最新动态</span></el-col>
                    </el-row>
                  </div>
                  <div class="text item">
                    <el-row :gutter="20" type="flex" justify="center">
                      <span class="text-2xl" >500家</span>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>


        </el-row>



      </el-tab-pane>
      <el-tab-pane label="标签管理" name="second">
        <el-card>
          <div>
            <span class="graph_title">标签管理</span>
          </div>
          <el-row>
            <el-col :span="5">
              <el-select v-model="level_1" placeholder="一级标签">
                <el-option label="电商" value="电商">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="5">
              <el-select v-model="level_2" placeholder="二级标签">
                <el-option label="综合" value="综合">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="5">
              <el-select v-model="level_3" placeholder="三级标签">
                <el-option label="人口属性" value="人口属性">
                </el-option>
                <el-option label="商业属性" value="商业属性">
                </el-option>
                <el-option label="行为属性" value="行为属性">
                </el-option>
                <el-option label="用户价值" value="用户价值">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="5">
              <el-select v-model="level_4" placeholder="四级标签">
                <el-option label="性别" value="性别" v-show="level_3=='人口属性'">
                </el-option>
                <el-option label="年龄段" value="年龄段" v-show="level_3=='人口属性'">
                </el-option>
                <el-option label="身高" value="身高" v-show="level_3=='人口属性'">
                </el-option>
                <el-option label="民族" value="民族" v-show="level_3=='人口属性'">
                </el-option>
                <el-option label="消费周期" value="消费周期" v-show="level_3=='商业属性'">
                </el-option>
                <el-option label="消费能力" value="消费能力" v-show="level_3=='商业属性'">
                </el-option>
                <el-option label="登录频率" value="登录频率" v-show="level_3=='行为属性'">
                </el-option>
                <el-option label="房产" value="房产" v-show="level_3=='用户价值'">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="4" style="text-align: center">
              <el-button icon="el-icon-search" circle style="background-color: #052aae; color: white"></el-button>
            </el-col>
          </el-row>
<!--          表格-->
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
              prop="first"
              label="一级标签"
            >
            </el-table-column>
            <el-table-column
              prop="second"
              label="二级标签"
            >
            </el-table-column>
            <el-table-column
              prop="third"
              label="三级标签"
            >
            </el-table-column>
            <el-table-column
              prop="forth"
              label="四级标签"
            >
            </el-table-column>
            <el-table-column
              prop="fifth"
              label="五级标签"
            >
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
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
<!--  修改标签信息的弹出框-->
  <div style="width: 100%;margin-top: 20px">
    <el-dialog title="标签信息" :visible.sync="handleEditVisible" :modal-append-to-body="false">
      <el-form :model="form">
<!--        标签基本信息-->
        <el-form-item>
          <el-row :gutter="20">
            <el-col :span="5">
              <el-select v-model="form.first" placeholder="一级标签">
                <el-option label="电商" value="电商">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="5">
              <el-select v-model="form.second" placeholder="二级标签">
                <el-option label="综合" value="综合">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="5">
              <el-select v-model="form.third" placeholder="三级标签">
                <el-option label="人口属性" value="人口属性">
                </el-option>
                <el-option label="商业属性" value="商业属性">
                </el-option>
                <el-option label="行为属性" value="行为属性">
                </el-option>
                <el-option label="用户价值" value="用户价值">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="5">
              <el-select v-model="form.forth" placeholder="四级标签">
                <el-option label="性别" value="性别" v-show="level_3=='人口属性'">
                </el-option>
                <el-option label="年龄段" value="年龄段" v-show="level_3=='人口属性'">
                </el-option>
                <el-option label="身高" value="身高" v-show="level_3=='人口属性'">
                </el-option>
                <el-option label="民族" value="民族" v-show="level_3=='人口属性'">
                </el-option>
                <el-option label="消费周期" value="消费周期" v-show="level_3=='商业属性'">
                </el-option>
                <el-option label="消费能力" value="消费能力" v-show="level_3=='商业属性'">
                </el-option>
                <el-option label="登录频率" value="登录频率" v-show="level_3=='行为属性'">
                </el-option>
                <el-option label="房产" value="房产" v-show="level_3=='用户价值'">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="五级标签" label-width="formLabelWidth">
          <el-input v-model="form.fifth" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" label-width="formLabelWidth">
          <el-select v-model="form.status" >
            <el-option label="申请中" value="applying"></el-option>
            <el-option label="开发中" value="developing"></el-option>
            <el-option label="开发完成" value="developed"></el-option>
            <el-option label="已上线" value="available"></el-option>
            <el-option label="已下线" value="ofUsed"></el-option>
            <el-option label="已禁用" value="disabled"></el-option>
            <el-option label="未处理" value="unprocessed"></el-option>
            <el-option label="已通过" value="passed"></el-option>
            <el-option label="未通过" value="unpassed"></el-option>
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
          nickName:'test',
          company:'test',
          mail:'test',
          table_identity:'test'
        }],
        form: {
         status:"applying"

        },
      }
    },
    methods: {
      handleEdit(index, row) {
        this.handleEditVisible = true;
      },
      handleClick(tab, event) {
        console.log(tab, event);
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
