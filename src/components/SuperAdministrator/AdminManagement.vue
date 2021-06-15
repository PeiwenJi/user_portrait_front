<template>
  <body>
    <!-- 面包屑导航栏 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>Admin Management</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 管理员人数卡片-->
    <el-card style="margin-top: 50px">
      <el-col :xs="10" :sm="10" :lg="5" class="card-panel-col" style="margin-bottom: 32px">
        <div class="card-panel" @click="handleSetLineChartData('newVisitis')" style="height: 130px;
                                                                                      font-size: 18px;
                                                                                      overflow: hidden;
                                                                                      color: #666;
                                                                                      background: #fff;
                                                                                      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
                                                                                      border-color: rgba(0, 0, 0, .05);">
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
      </el-col>
    </el-card>
    <!--  管理员表格  -->
    <el-card style="margin-top: 50px">
      <a-input-search placeholder="input search text" style="width: 500px;font-size: 20px;margin: 10px 0 25px 0" @search="onSearch" />
      <a-button type="dashed">
        Add
      </a-button>
      <a-table :columns="columns" :data-source="data" bordered>
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
              @change="e => handleChange(e.target.value, record.key, col)"
            />
            <template v-else>
              {{ text }}
            </template>
          </div>
        </template>
        <template slot="operation" slot-scope="text, record, index">
          <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record.key)">Save</a>
            <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
            <span v-else>
            <a :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a>
          </span>
          <!-- 删除 -->
          <a-popconfirm
            title="Sure to delete?"
            @confirm="() => onDelete(record.key)"
            style="float: right;"
          >
            <a>Delete</a>
          </a-popconfirm>
          </div>
        </template>
      </a-table>


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
  name: 'AdminManagement',
  data () {
    // this.cacheData = data.map(item => ({ ...item }))
    return {
      //校长查询信息
      // queryInfo_question: {
      //   query: '', //查询条件
      //   pageNum: 1, //当前页
      //   pageSize: 4 //每页最大数
      // },
      // questionList: [],
      total_admin: 0, //问题记录数

      data:[],
      columns,
      editingKey: ''
    }
  },
  components: {
    CountTo
  },
  created(){
    this.getAdminList();
  },
  methods: {
    // 获取管理员列表
    getAdminList () {
      this.$http.get("getAdminList").then(response=>{
        console.log(response.data);
        this.data = response.data;
        this.total_admin = response.data.length;
        console.log(this.total_admin);
        },response => {
          console.log("error")
        }
      )
    },
    handleSetLineChartData (type) {
      this.$emit('handleSetLineChartData', type)
    },
    handleChange (value, key, column) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    edit (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      this.editingKey = key
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    save  (key) {
      const newData = [...this.data]
      const newCacheData = [...this.cacheData]
      const target = newData.filter(item => key === item.key)[0]
      const targetCache = newCacheData.filter(item => key === item.key)[0]
      if (target && targetCache) {
        delete target.editable
        this.data = newData
        Object.assign(targetCache, target)
        this.cacheData = newCacheData
      }
      this.editingKey = ''
    },
    cancel (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      this.editingKey = ''
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
        delete target.editable
        this.data = newData
      }
    },
    onDelete (key) {
      const newData = [...this.data]
      this.data = newData.filter(item => item.key !== key)
    },
    onSearch (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
  /*卡片样式 */
  .el-card {
    box-shadow: 0 2px 4px #000066, 0 0 6px rgba(0, 0, 0, .04)
  }
  /*管理员人数样式*/
  .panel-group {

    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);

      &:hover {
        .card-panel-icon-wrapper {
        }
      }

      .icon-people {
        color: #40c9c6;
      }

      .icon-message {
        color: #36a3f7;
      }

      .icon-money {
        color: #f4516c;
      }

      .icon-shopping {
        color: #34bfa3
      }

      .card-panel-icon-wrapper {

      }

      .card-panel-icon {
        float: left;
        font-size: 48px;
      }

      .card-panel-description {

        .card-panel-text {

        }

        .card-panel-num {

        }
      }
    }
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

      .svg-icon {
        display: block;
        margin: 14px auto !important;
        float: none !important;
      }
    }
  }

  .editable-row-operations a {
    margin-right: 8px;
  }
</style>
