<template>
  <body id="tag_search">
  <div style="width: 100%">
    <!-- 面包屑导航栏 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>Role Permission</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索标签 -->
    <el-card style="margin-top: 50px">
      <el-row style="margin-top: 20px">
        <el-col :span="5">
          <el-select v-model="first" placeholder="一级标签">
            <el-option label="电商" value="电商">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="5">
          <el-select v-model="second" placeholder="二级标签">
            <el-option label="综合" value="综合">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="5">
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
<!--        <el-col :span="4">-->
<!--          <el-select v-model="forth" placeholder="四级标签" @click="clickSearchForthTagSeletor">-->
<!--            <el-option-->
<!--              v-for="item in searchForthTagsList"-->
<!--              :key="item.value"-->
<!--              :label="item.label"-->
<!--              :value="item.value">-->
<!--            </el-option>-->
<!--          </el-select>-->
<!--        </el-col>-->
        <el-col :span="5">
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
            <el-option label="国籍" value="国籍" v-show="third =='人口属性（用户特征）' || third == '全部'">
            </el-option>
            <el-option label="支付方式" value="支付方式" v-show="third=='商业属性（消费特征）' || third == '全部'">
            </el-option>
            <el-option label="浏览时段" value="浏览时段" v-show="third=='行为属性（兴趣特征）' || third == '全部'">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4" style="text-align: center">
          <el-button icon="el-icon-search" circle style="background-color: #052aae; color: white"  @click="searchTags"></el-button>
        </el-col>
      </el-row >

<!--      <AllChart></AllChart>-->

      <!-- 人口属性 -->
      <el-row v-show="third=='' || third=='全部' || third=='人口属性（用户特征）' ">
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

      <!-- 消费特征 -->
      <lineChart_PaymentCode v-show="third=='' || third=='全部' || third=='商业属性（消费特征）' "></lineChart_PaymentCode>

      <!-- 行为特征-->
      <lineChart_LogSession v-show="third=='' || third=='全部' || third=='行为属性（兴趣特征）' " ></lineChart_LogSession>

      <!--          选中的五级标签-->
<!--      <el-tag-->
<!--        :key="tag"-->
<!--        v-for="tag in dynamicTags"-->
<!--        closable-->
<!--        :disable-transitions="false"-->
<!--        @close="handleClose(tag)"-->
<!--        style="margin-top: 20px"-->
<!--      >-->
<!--        {{tag}}-->
<!--      </el-tag>-->
      <!--          表格-->
<!--      <el-table-->
<!--        ref="tagTable"-->
<!--        :data="tagsTableData"-->
<!--        border-->
<!--        style="width: 100%;margin-top: 60px"-->
<!--        row-key="id">-->
<!--        <el-table-column-->
<!--          type="selection"-->
<!--          width="55"-->
<!--          :reserve-selection="true">-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          fixed-->
<!--          type="index"-->
<!--          align="center"-->
<!--          prop="id"-->
<!--          label="序号"-->
<!--          width="100"-->
<!--        >-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          prop="first"-->
<!--          label="一级标签"-->
<!--        >-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          prop="second"-->
<!--          label="二级标签"-->
<!--        >-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          prop="third"-->
<!--          label="三级标签"-->
<!--        >-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          prop="forth"-->
<!--          label="四级标签"-->
<!--        >-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          prop="fifth"-->
<!--          label="五级标签"-->
<!--        >-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          prop="status"-->
<!--          label="状态"-->
<!--          align="center"-->
<!--        >-->
<!--          <template slot-scope="scope">-->
<!--            <el-tag-->
<!--              :type="scope.row.status === 'available' ? 'success' : 'info'"-->
<!--              disable-transitions>{{scope.row.status}}</el-tag>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--        <el-table-column label="操作">-->
<!--          <template slot-scope="scope">-->
<!--            <el-button-->
<!--              size="mini"-->
<!--              @click="tagEdit(scope.$index, scope.row) ">编辑</el-button>-->
<!--            <el-button-->
<!--              size="mini"-->
<!--              type="danger"-->
<!--              @click="tagDelete(scope.$index, scope.row)">删除</el-button>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--      </el-table>-->
    </el-card>

    <!-- 查看四级tag图 -->
    <div class="dialog">
      <el-dialog :visible.sync="visible_forthTagChart" :append-to-body="true" width="auto">
        <pieChart_Gender style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='性别'"></pieChart_Gender>
        <barChart_Age style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='年龄段'"></barChart_Age>
        <pieChart_PoliticalFace style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='政治面貌'"></pieChart_PoliticalFace>
        <barChart_Job style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='职业'"></barChart_Job>
        <pieChart_Marriage style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='婚姻状况'"></pieChart_Marriage>
        <pieChart_Nationality style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='国籍'"></pieChart_Nationality>
        <lineChart_PaymentCode style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='支付方式'"></lineChart_PaymentCode>
        <lineChart_LogSession style="margin-left: 50%; transform:translateX(-50%)" v-show="forth=='浏览时段'"></lineChart_LogSession>
      </el-dialog>
    </div>
    </div>

<!--  </div>-->
  <div>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap" style="height: 100vh;  // 不必是100vh，只需要是该容器显示的最大高度即可
overflow-x: hidden;"></el-backtop>
  </div>
  </body>
</template>

<script>
  // 四级标签的chart
  import pieChart_Gender from '../Charts/PieChart_Gender'
  import pieChart_PoliticalFace from '../Charts/PieChart_PoliticalFace'
  import pieChart_Marriage from  '../Charts/PieChart_Marriage'
  import pieChart_Nationality from '../Charts/PieChart_Nationality'
  import barChart_Age from '../Charts/BarChart_Age'
  import barChart_Job from '../Charts/BarChart_Job'
  import lineChart_PaymentCode from '../Charts/LineChart_PaymentCode'
  import lineChart_LogSession from '../Charts/LineChart_LogSession'

  // 三级标签的chart
  import PopAttribute from '../Charts/CombineCharts/PopAttribute'
  import BizAttribute from '../Charts/CombineCharts/BizAttribute'
  import BehAttribute from '../Charts/CombineCharts/BehAttribute'
  import UserValueAttribute from '../Charts/CombineCharts/UserValueAttribute'

  // 一级和二级标签的chart
  // import AllChart from '../Charts/CombineCharts/AllChart'

  export default {
    name: "TagSearch",
    components: {
      pieChart_Gender,
      pieChart_PoliticalFace,
      pieChart_Marriage,
      pieChart_Nationality,
      barChart_Age,
      barChart_Job,
      lineChart_PaymentCode,
      lineChart_LogSession,
      // AllChart

    },
    data() {
      return {
        visible_forthTagChart: false,
        activeName:'second',
        dynamicTags:[],
        first:'电商',
        second:'综合',
        third:'',
        forth:'',
        status:'',
        handleEditVisible:false,
        createComposedLabelVisible:false,
        createdComposedLabelForm:{
          first:'电商',
          second:'综合',
          third:'用户价值'
        },
        numChanged:false,
        tagsTableData: [{
          num:'',
          first:'电商',
          second:'综合',
          third:'',
          forth:'',
          fifth:'',
          status:''
        }],
        form: {
          status:""
        },
        forthTagsList:[],
        searchForthTagsList:[],
        count:[],
        developingTagsCount:'',
        multipleSelection: [],
        dynamicTagRow:[]
      }
    },

    created(){
      this.initTagsTable();
    },
    mounted(){
      this.getSearchForthTags();
    },
    methods: {
      //初始化标签表格数据
      initTagsTable(){
        // this.$http.get("initTags").then(response=> {
        //     console.log("initTags")
        //   }, response => {
        //
        //     console.log("error")
        //   }
        // )
        this.$http.post("showTags",{
          first:this.first,
          second:this.second,
          third:this.third,
          forth:this.forth,
          fifth:'',
          status:'',
          id:''
        }).then(response => {
            this.tagsTableData=response.data
            this.count.allTagsCount=response.data.length
          }, response => {
            console.log("error")
          }
        )
      },
      //搜索框三级标签发生改变时变动
      getSearchForthTags(){
        this.forth = ''
        this.$http.post("showTags?dict=true",{
          first:this.first,
          second:this.second,
          third:this.third,
          forth:this.forth,
          fifth:'',
          status:'',
          id:''
        }).then(response => {
            this.searchForthTagsList = []
            response.data.forEach(element =>
            {
              this.searchForthTagsList.push({label:element.label,value:element.value})
            })
            //console.log(this.searchForthTagsList)
          }, response => {
            console.log("error")
          }
        )
      },
      //三级标签选择之后虽然searchForthTagsList发生了修改，但是页面并没有刷新，需要这里强制刷新一下
      clickSearchForthTagSeletor(){
        this.$forceUpdate
      },
      //点击搜索按钮之后进行搜索
      searchTags(){
        this.visible_forthTagChart = true;

        this.$http.post("showTags",{
          first:this.first,
          second:this.second,
          third:this.third,
          forth:this.forth,
          fifth:'',
          status:this.status,
          id:''
        }).then(response => {
            this.tagsTableData=response.data
          }, response => {
            console.log("error")
          }
        )
      },
    }
  }
</script>

<style>

  /* 弹出层设置背景色  头部 */

  .el-dialog{
      background:red;
  }

  /* 弹出层设置背景色 底部*/

  .el-dialog__body {
      background-color:red !important;
  }

  .dialog /deep/ .el-dialog__wrapper {
    background-color:rgba(0,0,0,0.8);
  }
  .dialog >>>.el-dialog__wrapper {
    background-color:rgba(0,0,0,0.8);
  }

</style>
