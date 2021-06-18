<template>
  <div>
    <div style="width: 100%">
      <el-card style="box-shadow: 0 2px 4px #ff6b6b, 0 0 6px rgba(0, 0, 0, .04)">
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
    <!--用户特征-->
    <el-card style="box-shadow: 0 2px 4px #ff6b6b, 0 0 6px rgba(0, 0, 0, .04); margin-top: 10px">
      <el-row>
        <el-col :span="14">
          <el-row>
            <el-col :span="11">
              <el-card class="card_1">
                <pieChart_Gender></pieChart_Gender>
              </el-card>
            </el-col>
            <el-col :span="13">
              <el-card class="card_1">
                <pieChart_PoliticalFace></pieChart_PoliticalFace>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-card class="card_1">
                <pieChart_Marriage></pieChart_Marriage>
              </el-card>
            </el-col>
            <el-col :span="13">
              <el-card class="card_1">
                <pieChart_Constellation></pieChart_Constellation>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="10">
          <el-row style="margin-left: 20px">
            <el-card class="card_2">
              <div class="title">
                <span>Age</span>
              </div>
              <barChart_Age></barChart_Age>
            </el-card>
          </el-row>
          <el-row style="margin-left: 20px">
            <el-card class="card_2">
              <div class="title">
                <span>Job</span>
              </div>
              <barChart_Job></barChart_Job>
            </el-card>
          </el-row>
        </el-col>
      </el-row>
    </el-card>

    <!--消费特征-->
    <el-card style="box-shadow: 0 2px 4px #ff6b6b, 0 0 6px rgba(0, 0, 0, .04); margin-top: 10px">
      <el-row>
        <el-col :span="17">
        <el-card class="card_1">
          <lineChart_PaymentCode></lineChart_PaymentCode>
        </el-card>
      </el-col>
        <el-col :span="7">
          <el-card class="card_1">
            <pieChart_Cycle></pieChart_Cycle>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-card class="card_1">
            <barChart_AvgAmount></barChart_AvgAmount>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="card_1">
            <barChart_MaxAmount></barChart_MaxAmount>
          </el-card>
        </el-col>
      </el-row>
    </el-card>

    <!--行为特征-->
    <el-card style="box-shadow: 0 2px 4px #ff6b6b, 0 0 6px rgba(0, 0, 0, .04); margin-top: 10px; height: 600px">
      <lineChart_LogSession></lineChart_LogSession>
    </el-card>
  </div>
</template>

<script>
  import pieChart_Gender from '../Charts/PieChart_Gender'
  import pieChart_PoliticalFace from '../Charts/PieChart_PoliticalFace'
  import pieChart_Marriage from  '../Charts/PieChart_Marriage'
  import pieChart_Constellation from '../Charts/PieChart_Constellation'
  import pieChart_Cycle from '../Charts/PieChart_Cycle'
  import barChart_Age from '../Charts/BarChart_Age'
  import barChart_Job from '../Charts/BarChart_Job'
  import barChart_AvgAmount from '../Charts/BarChart_AvgAmount'
  import barChart_MaxAmount from '../Charts/BarChart_MaxAmount'
  import lineChart_PaymentCode from '../Charts/LineChart_PaymentCode'
  import lineChart_LogSession from '../Charts/LineChart_LogSession'

  export default {
    name: "DataPage",
    components: {
      pieChart_Gender,
      pieChart_PoliticalFace,
      pieChart_Marriage,
      pieChart_Constellation,
      pieChart_Cycle,
      barChart_Age,
      barChart_Job,
      barChart_AvgAmount,
      barChart_MaxAmount,
      lineChart_PaymentCode,
      lineChart_LogSession,
    },
    data() {
      return {
        level_1: '',
        level_2: '',
        level_3: '',
        level_4: '',
      }
    }
  }
</script>

<style scoped>
  .card_1 {
    height: 400px;
  }

  .title {
    font-family: 'Agency FB';
    font-size: x-large;
    font-weight: bolder;
    color: #ff6b6b
  }

  .card_2 {
    height: 400px;
  }
</style>
