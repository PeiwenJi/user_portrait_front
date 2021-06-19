<template>
  <div>
    <!-- 搜索标签框-->
    <div style="width: 100%">
      <el-card>
        <el-row style="margin: 10px 0px">
        <el-col :span="6">
          <el-select v-model="first" placeholder="一级标签">
            <el-option label="电商" value="电商">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="second" placeholder="二级标签">
            <el-option label="综合" value="综合">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="third" placeholder="三级标签" @change="getSearchForthTags">
            <el-option label="全部" value="全部">
            </el-option>
            <el-option label="人口属性（用户特征）" value="人口属性（用户特征）">
            </el-option>
            <el-option label="商业属性（消费特征）" value="商业属性（消费特征）">
            </el-option>
            <el-option label="行为属性（兴趣特征）" value="行为属性（兴趣特征）">
            </el-option>
            <el-option label="用户价值" value="用户价值">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="forth" placeholder="四级标签">
            <el-option label="性别" value="性别" v-show="third == '人口属性（用户特征）' || third == '全部'">
            </el-option>
            <el-option label="年龄段" value="年龄段" v-show="third =='人口属性（用户特征）'|| third == '全部'">
            </el-option>
            <el-option label="政治面貌" value="政治面貌" v-show="third =='人口属性（用户特征）'|| third == '全部' ">
            </el-option>
            <el-option label="职业" value="职业" v-show="third =='人口属性（用户特征）'|| third == '全部'">
            </el-option>
            <el-option label="婚姻状况" value="婚姻状况" v-show="third =='人口属性（用户特征）' || third == '全部'">
            </el-option>
            <el-option label="星座" value="星座" v-show="third =='人口属性（用户特征）' || third == '全部'">
            </el-option>
            <el-option label="消费周期" value="消费周期" v-show="third=='商业属性（消费特征）' || third == '全部'">
            </el-option>
            <el-option label="客单价" value="客单价" v-show="third=='商业属性（消费特征）' || third == '全部'">
            </el-option>
            <el-option label="支付方式" value="支付方式" v-show="third=='商业属性（消费特征）' || third == '全部'">
            </el-option>
            <el-option label="单笔最高" value="单笔最高" v-show="third=='商业属性（消费特征）' || third == '全部'">
            </el-option>
            <el-option label="浏览时段" value="浏览时段" v-show="third=='行为属性（兴趣特征）' || third == '全部'">
            </el-option>
          </el-select>
          <el-button icon="el-icon-search" circle style="background-color: #000066; color: white"  @click="searchTags"></el-button>
        </el-col>
        </el-row >
      </el-card>
    </div>

    <!--用户特征-->
    <div v-show="third=='' || third=='全部' || third=='人口属性（用户特征）' " style="margin-top: 20px">
      <el-row>
        <el-col :span="14">
          <el-row>
            <el-col :span="11">
              <el-card class="card_1">
                <pieChart_Gender></pieChart_Gender>
              </el-card>
            </el-col>
            <el-col :span="13">
              <el-card class="card_1" style="margin-left: 20px">
                <pieChart_PoliticalFace></pieChart_PoliticalFace>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-card class="card_1" style="margin-top:20px;">
                <pieChart_Marriage></pieChart_Marriage>
              </el-card>
            </el-col>
            <el-col :span="13">
              <el-card class="card_1" style="margin-top:20px;margin-left: 20px">
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
          <el-row style="margin-left: 20px;margin-top: 20px">
            <el-card class="card_2">
              <div class="title">
                <span>Job</span>
              </div>
              <barChart_Job></barChart_Job>
            </el-card>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <!--消费特征-->
    <div v-show="third=='' || third=='全部' || third=='商业属性（消费特征）' " style="margin-top: 20px">
      <el-row>
        <el-col :span="17">
        <el-card class="card_1">
          <lineChart_PaymentCode></lineChart_PaymentCode>
        </el-card>
      </el-col>
        <el-col :span="7">
          <el-card class="card_1" style="margin-left: 20px">
            <pieChart_Cycle></pieChart_Cycle>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-card class="card_1" style="margin-top: 20px">
            <barChart_AvgAmount></barChart_AvgAmount>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="card_1" style="margin-top: 20px;margin-left: 20px">
            <barChart_MaxAmount></barChart_MaxAmount>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!--行为特征-->
    <div v-show="third=='' || third=='全部' || third=='行为属性（兴趣特征）' " style="margin-top: 20px; height: 600px">
      <el-card>
        <lineChart_LogSession></lineChart_LogSession>
      </el-card>
    </div>

    <!-- dialog查看四级tag图 -->
    <div class="dialog">
      <el-dialog :visible.sync="visible_forthTagChart" :append-to-body="true" width="auto">
        <pieChart_Gender style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='性别'"></pieChart_Gender>
        <barChart_Age style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='年龄段'"></barChart_Age>
        <pieChart_PoliticalFace style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='政治面貌'"></pieChart_PoliticalFace>
        <barChart_Job style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='职业'"></barChart_Job>
        <pieChart_Marriage style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='婚姻状况'"></pieChart_Marriage>
        <pie-chart_-constellation style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='星座'"></pie-chart_-constellation>
        <pieChart_Cycle style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='消费周期'"></pieChart_Cycle>
        <barChart_AvgAmount style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='客单价'"></barChart_AvgAmount>
        <lineChart_PaymentCode style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='支付方式'"></lineChart_PaymentCode>
        <barChart_MaxAmount style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='单笔最高'"></barChart_MaxAmount>
        <lineChart_LogSession style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='浏览时段'"></lineChart_LogSession>
      </el-dialog>
    </div>

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
        // 设置查看四级标签图的对话框不可见
        visible_forthTagChart: false,
        // 搜索框赋值
        first:'电商',
        second:'综合',
        third:'',
        forth:'',
      }
    },
    methods:{
      searchTags() {
        this.visible_forthTagChart = true;
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
    color: #2c343c
  }

  .card_2 {
    height: 400px;
  }
</style>
