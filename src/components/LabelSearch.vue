<template>
  <body id="label_search">
  <div style="width: 100%">
    <el-card>
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
          <el-button icon="el-icon-search" circle style="background-color: #052aae; color: white" @click=""></el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>

  </body>
</template>

<script>
  export default {
    name: "LabelSearch",
    data() {
      return {
        level_1: '',
        level_2: '',
        level_3: '',
        level_4: '',
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .el-card {
    box-shadow: 0 2px 4px #ff6b6b, 0 0 6px rgba(0, 0, 0, .04)
  }

</style>
