<template>
  <body>
  <!-- 面包屑导航栏 -->
  <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px">
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item>Admin Management</el-breadcrumb-item>
  </el-breadcrumb>
  <!-- 管理员人数卡片-->
  <div class="card-panel" @click="handleSetLineChartData('newVisitis')" style="height: 150px;
                                                                                     width: 20%;
                                                                                     margin-top: 50px;
                                                                                     margin-left: 40%;
                                                                                     font-size: 18px;
                                                                                     overflow: hidden;
                                                                                     color: #666;
                                                                                     background: #fff;
                                                                                     box-shadow: 4px 4px 10px #40c9c6;
                                                                                     border-color: #40c9c6;">
    <div class="card-panel-icon-wrapper icon-people" style="float: left;
                                                                  margin: 10px 0 0 10px;
                                                                  padding: 16px;
                                                                  transition: all 0.38s ease-out;
                                                                  border-radius: 6px;">
      <i class="el-icon-user-solid" style="font-size: 80px; color: #40c9c6"></i>
    </div>
    <div class="card-panel-description" style="float: right;
                                                    font-weight: bold;
                                                    margin: 38px;
                                                    margin-left: 0px;">
      <div class="card-panel-text" style="line-height: 20px; color: rgba(0, 0, 0, 0.45); font-size: 18px; margin-bottom: 12px;">
        Administrator
      </div>
      <count-to :start-val="0" :end-val=total_admin :duration="2600" class="card-panel-num" style="font-size: 24px;"/>
    </div>
  </div>

  <!--  管理员管理  -->
  <el-card style="margin-top: 50px">
    <div style="margin: 10px 0 25px 0">
      <!-- 搜索管理员 -->
      <a-input-search v-model="searchEmail" placeholder="Please input the email of admin." style="width: 500px;font-size: 20px" @search="searchAdmin_byEmail" />

      <!-- 刷新列表 -->
      <a-button type="dashed" @click="refresh">
        Refresh
      </a-button>

      <!-- 增加管理员 -->
      <a-button type="dashed" @click="visible_addAdmin_form = true" style="float:right">
        Add
      </a-button>
    </div>

    <!-- 管理员表格 -->
    <a-table :columns="columns" :data-source="data" bordered row-key="email">
      <template
        v-for="col in ['name', 'password', 'company']"
        :slot="col"
        slot-scope="text, record, index"
        v-model="col in ['name', 'password', 'company']"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, record, col)"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <!-- 表格操作 -->
      <template slot="operation" slot-scope="text, record, index">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => saveEdit(record)">Save</a>
            <a-popconfirm title="Sure to cancel?" @confirm="() => cancelEditAdmin(record.email)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a :disabled="editingKey !== ''" @click="() => edit(record.email)">Edit</a>
          </span>
          <!-- 删除 -->
          <a-popconfirm
            title="Sure to delete?"
            @confirm="() => onDelete(record)"
            style="float: right;"
          >
            <a>Delete</a>
          </a-popconfirm>
        </div>
      </template>
    </a-table>

    <!-- 增加管理员的表单 -->
    <el-dialog title="Add" :visible.sync="visible_addAdmin_form" :append-to-body="true">
      <el-form ref="addAdmin_form" :rules="formRules" :model="addAdmin_form" label-width="100px" >
        <el-form-item label="name" prop="name">
          <el-input v-model="addAdmin_form.name"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input v-model="addAdmin_form.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="email" prop="email">
          <el-input v-model="addAdmin_form.email"></el-input>
        </el-form-item>
        <el-form-item label="company" prop="company">
          <el-input v-model="addAdmin_form.company"></el-input>
        </el-form-item>
        <el-form-item label="identity">
          <el-input v-model="addAdmin_form.identity" :disabled="true"></el-input>
        </el-form-item>
        <el-row type="flex" justify="end">
          <el-button type="danger" icon="el-icon-delete" circle @click="cancelAddAdmin"></el-button>
          <el-button type="success" icon="el-icon-check" circle @click="addAdmin"></el-button>
        </el-row>
      </el-form>
    </el-dialog>
  </el-card>

  </body>
</template>

<script>
  import CountTo from 'vue-count-to'

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '15%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: 'password',
      dataIndex: 'password',
      width: '15%',
      scopedSlots: { customRender: 'password' }
    },
    {
      title: 'email',
      dataIndex: 'email',
      width: '15%',
      scopedSlots: { customRender: 'email' }
    },
    {
      title: 'company',
      dataIndex: 'company',
      width: '15%',
      scopedSlots: { customRender: 'company' }
    },
    {
      title: 'identity',
      dataIndex: 'identity',
      width: '15%',
      scopedSlots: { customRender: 'identity' }
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      scopedSlots: { customRender: 'operation' }
    }
  ]

  export default {
    // this.cacheData = data.map(item => ({ ...item })),
    name: 'AdminManagement',
    data () {
      // this.cacheData = data.map(item => ({ ...item }));
      return {
        // 设置增加管理员表单不可见
        visible_addAdmin_form : false,
        // 增加管理员的表单
        addAdmin_form:{
          name: "",
          password: "",
          email: "",
          company: "",
          identity: "admin"
        },

        // 表单验证
        formRules: {
          name: [
            {required:true, message:"Please input name!", trigger:"blur"}
          ],
          password: [
            {required:true, message:"Please input password!", trigger:"blur"}
          ],
          email: [
            {required:true, message:"Please input email!", trigger:"blur"}
          ],
          company: [
            {required:true, message:"Please input company!", trigger:"blur"}
          ]
        },

        // 记录管理员数量
        total_admin: 0,

        // 表格数据
        data:[],
        changeData:[],
        columns,
        editingKey: ''
      }
    },
    // 计数器
    components: {
      CountTo
    },
    // 初始化
    created(){
      this.getAdminList();
    },

    methods: {
      // handleSetLineChartData (type) {
      //   // this.$emit('handleSetLineChartData', type)
      // },
      // 检测到变化记录数值
      handleChange (value, record, column) {
        // // 使用字典动态赋值
        console.log(record)
        let changeData = record
        this.$set(changeData, column, value)
        console.log(changeData)
      },

      // 获取管理员列表
      getAdminList () {
        this.$http.get("getAdminList").then(response => {
          console.log(response.data);
          this.data = response.data;
          this.total_admin = response.data.length;
          // for (let i = 0; i < this.total_admin; i++) {
          //   data.push({
          //     key: i.toString(),
          //   });
          // }
            console.log(this.total_admin);
          }, response => {
            console.log("error")
          }
        )
      },

      // 刷新列表
      refresh() {
        this.getAdminList()
      },

      // 增加管理员
      addAdmin () {
        if (this.addAdmin_form.name != ""
          && this.addAdmin_form.password != ""
          && this.addAdmin_form.email != ""
          && this.addAdmin_form.company != "") {

          this.$http.post("addAdmin", {
            name: this.addAdmin_form.name,
            password: this.addAdmin_form.password,
            email: this.addAdmin_form.email,
            company: this.addAdmin_form.company,
            identity: this.addAdmin_form.identity
          }).then(
            response => {
              if (response.data == "ok") {
                console.log(response);
                this.cancelAddAdmin()
                this.getAdminList()
                this.$message.success("add successfully！");
                console.log("sucess")
              } else {
                console.log(response);
                this.$message.success("add failure！");
                this.cancelAddAdmin()
                console.log("error")
              }
            })
        } else {
          this.$message.success("Please input full information！");
        }
      },

      // 取消添加管理员
      cancelAddAdmin () {
        this.addAdmin_form.name = '';
        this.addAdmin_form.password = '';
        this.addAdmin_form.email = '';
        this.addAdmin_form.company = '';
        this.visible_addAdmin_form = false;
      },

      // 编辑状态
      edit (key) {
        console.log(key)
        const newData = [...this.data]
        const target = newData.filter(item => key === item.email)[0]
        this.editingKey = key
        if (target) {
          console.log("111")
          console.log(newData)
          console.log(target)
          target.editable = true
          this.data = newData
        }
      },

      // 保存编辑
      saveEdit (record) {
        // const newData = [...this.data];
        // const newCacheData = [...this.cacheData];
        // const target = newData.filter(item => key === item.key)[0];
        // const targetCache = newCacheData.filter(item => key === item.key)[0];
        // console.log(record);
        console.log("111111111111111")
        console.log(record)
        this.$http.post("addAdmin", {
          name: record.name,
          password: record.password,
          email: record.email,
          company: record.company,
          identity: "admin"
        }).then(
          response => {
            if (response.data == "ok") {
              console.log(response);
              this.getAdminList()
              this.$message.success("save successfully！");
              console.log("save sucess")
            } else {
              console.log(response);
              this.$message.success("save failure！");
              console.log("save error")
            }
          })
        this.editingKey = ''
        this.getAdminList()
      },

      // 取消编辑
      cancelEditAdmin (key) {
        this.editingKey = ''
        this.getAdminList()
      },

      //删除管理员
      onDelete (record) {
        this.$http.delete("deleteAdmin?email=" + record.email).then(
          response=> {
            if (response.data != "ok") {
              this.$message.success("delete failure！");
              console.log("error")
            } else {
              console.log("success")
              this.$message.success("delete successfully！");
              this.getAdminList();
            }
          })
      },

      // 搜索
      searchAdmin_byEmail (value) {
        this.$http.get("searchAdmin_byEmail?email=" + this.searchEmail).then(response => {
          console
          this.data = response.data;
          this.$message.success("search successfully!");
        }, response => {
          this.$message.success("search failure!");
          console.log("error")
        })
      }
    }
  }
</script>

<style >
  /*卡片样式 */
  .el-card {
    box-shadow: 0 2px 4px #000066, 0 0 6px rgba(0, 0, 0, .04)
  }

  @media (max-width:550px) {
    .card-panel-description {
      display: none;
    }

    .card-panel-icon-wrapper {
      float: none !important;
      width: 100%;
      height: 100%;
      margin: 0 !important;
    }

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }

  .editable-row-operations a {
    margin-right: 8px;
  }
</style>
