<template>
  <body>
    <!-- 面包屑导航栏 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 18px">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>Tag Check</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card style="margin-top: 50px">
      <el-row :gutter="20" style="margin: 50px 10px">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div style="width: 100%; height: 500px;"  id="tagStatus" ></div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <div style="align: center">
              <!--  标签审核表格 -->
              <el-table
                :data="unpassedTagData"
                :header-cell-style="{background:'#3399CC',color:'white'}"
                stripe
                border
                max-height="500"
                style="width: 100%; font-size: 16px; height: 500px">
                <el-table-column
                  prop="forth"
                  label="Forth Tag Name"
                  width="500"
                  header-align="center"
                  align="center">
                </el-table-column>
                <el-table-column
                  label="Status"
                  header-align="center"
                  align="center">
                  <el-tag type="danger">unpassed</el-tag>
                </el-table-column>
                <el-table-column
                  prop="operation"
                  label="Operation"
                  header-align="center"
                  align="center">
                  <template slot-scope="scope">
                    <i class="el-icon-circle-check" slot="reference" style="font-size: 24px; cursor: pointer;" @click="checkTag(scope.row)"></i>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>

  </body>
</template>

<script>
  export default {
    name: 'TagCheck',
    data() {
      return{
        // 未通过的标签列表（去重）
        unpassedTagData:[],

        // 未通过的标签列表(没有去重)
        unpassedTagData_all:[],

        // 记录更改状态的标签列表
        checkData: [],

        // 记录未通过标签数量
        total_unpassedTag: 0,

        // 记录通过标签数量
        total_passedTag: 0,

        // 饼图
        pieOptions: {}
      }
    },

    // 获取标签状态表格
    created(){
      this.getUnpassedTag();
    },

    // 显示echart饼图
    mounted() {
      //在这里读取数据之后传入
      //企图使用全局变量失败：echart参数的传递可能是在 $set改变之前已经传递过去了？
      //不能使用函数传递：script当中对于基本数据类型函数是按值传递，对于object类型是按引用传递
      // this.$http.get也是一个函数
      this.$http.get("getUnpassedTag").then(response=> {
          let upss = this.unique(response.data).length
        this.$http.get("getPassedTag").then(res=> {
          let pss = this.unique(res.data).length
          this.pieTagStatus(pss,upss)
          }, res => {
            console.log("error")
          }
        )
        }, response => {
          console.log("error")
        }
      )
    },

    methods: {
      // 获取未通过四级标签列表
      getUnpassedTag () {
        this.$http.get("getUnpassedTag").then(response=>{
          // console.log(response.data)
          this.unpassedTagData_all = response.data
          this.unpassedTagData = this.unique(response.data)
          // console.log(arr)
          },response => {
            console.log("error")
          }
        )
      },

      // 根据四级标签去重
      unique(arr) { // 根据唯一标识orderId来对数组进行过滤
        const res = new Map();  //定义常量 res,值为一个Map对象实例
        //返回arr数组过滤后的结果，结果为一个数组   过滤条件是，如果res中没有某个键，就设置这个键的值为1
        return arr.filter((arr) => !res.has(arr.forth) && res.set(arr.forth, 1))
      },

      // 获取通过四级标签数量
      getTagStatus () {
        this.$http.get("getPassedTag").then(response=>{
          this.total_passedTag = response.data.length;
          },response => {
            console.log("error")
          }
        )
      },

      // 更改标签状态
      checkTag (row) {
        var ifSuccess = true
        // 遍历
        for(var i=0; i<this.unpassedTagData_all.length; i++){
          if(this.unpassedTagData_all[i].forth == row["forth"]){
            this.$http.post("checkTag", {
              id: this.unpassedTagData_all[i].id,
              status: "passed",
            }).then(
              response=> {
                if(response.data != "ok"){
                  ifSuccess = false
                }
              })
          }
        }
        // 判断是否所有标签都更新完成
        if(ifSuccess == true){
          // console.log("success")
          this.getUnpassedTag()
          this.$message.success("check successfully！");

          // 饼图更新
          this.$http.get("getUnpassedTag").then(response=> {
              let upss = this.unique(response.data).length
              this.$http.get("getPassedTag").then(res=> {
                  let pss = this.unique(res.data).length
                  this.pieTagStatus(pss,upss)
                }, res => {
                  console.log("error")
                }
              )
            }, response => {
              console.log("error")
            }
          )
        }
        else{
          this.$message.success("check failure！");
        }
      },

      // 绘制通过和未通过标签数量饼图
      pieTagStatus(total_passedTag, total_unpassedTag) {
        var myChart = this.$echarts.init(document.getElementById('tagStatus')); //需要去获得元素id，所以需要在mounted当中i盗用
        // 指定图表的配置项和数据
        this.pieOptions = {
          title: {
            text: 'Tag Status',
            left: 'center',
            textStyle: {
              color: '#666666'
            }
          },
          legend: {
            top: 'bottom'
          },
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
              name: 'number',
              type: 'pie',
              radius: [50, 150],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 5
              },
              data: [
                {value: total_passedTag, name: 'Passed'},
                {value: total_unpassedTag, name: 'Unpassed'},
              ]
            }
          ]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.pieOptions)
      },
    }
  }
</script>

<style scoped>
  /*卡片样式 */
  .el-card {
    box-shadow: 0 2px 4px #000066, 0 0 6px rgba(0, 0, 0, .04)
  }

</style>
