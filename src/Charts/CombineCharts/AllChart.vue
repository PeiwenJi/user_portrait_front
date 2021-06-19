<template>
  <div id="allChart">
    <!--用户特征-->
    <el-card style="box-shadow: 0 2px 4px #ff6b6b, 0 0 6px rgba(0, 0, 0, .04);">
      <el-row>
        <el-col :span="11">
          <el-row>
            <el-col :span="12">
              <el-card class="card_1">
                <pieChart_Gender></pieChart_Gender>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="card_1">
                <pieChart_PoliticalFace></pieChart_PoliticalFace>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-card class="card_1">
                <pieChart_Marriage></pieChart_Marriage>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="card_1">
                <pieChart_Nationality></pieChart_Nationality>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="13">
          <el-row style="margin-left: 10px">
            <el-card class="card_2">
              <div class="title">
                <span>Age</span>
              </div>
              <barChart_Age></barChart_Age>
            </el-card>
          </el-row>
          <el-row style="margin-left: 10px">
            <el-card class="card_2" style="margin-top: 10px">
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
    <el-card style="box-shadow: 0 2px 4px #ff6b6b, 0 0 6px rgba(0, 0, 0, .04); margin-top: 10px; height: 500px">
      <lineChart_PaymentCode></lineChart_PaymentCode>
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
  import pieChart_Nationality from '../Charts/PieChart_Nationality'
  import barChart_Age from '../Charts/BarChart_Age'
  import barChart_Job from '../Charts/BarChart_Job'
  import lineChart_PaymentCode from '../Charts/LineChart_PaymentCode'
  import lineChart_LogSession from '../Charts/LineChart_LogSession'

  export default {
    mounted() {
      this.draw();
    },
    name: 'AllChart',
    components: {
      pieChart_Gender,
      pieChart_PoliticalFace,
      pieChart_Marriage,
      pieChart_Nationality,
      barChart_Age,
      barChart_Job,
      lineChart_PaymentCode,
      lineChart_LogSession
    },
    methods: {
      draw () {
        let allChart = this.$echarts.init((document.getElementById("allChart")));
      }
    }
  }
</script>

<style scoped
>
  .card_1 {
    height: 300px;
  }

  .title {
    font-family: 'Agency FB';
    font-size: x-large;
    font-weight: bolder;
    color: #ff6b6b
  }

  .card_2 {
    height: 295px;
  }
</style>
