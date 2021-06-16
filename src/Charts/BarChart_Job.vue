<template>
  <div id="barChart_job" style="width: 850px; height: 260px; margin-top: -20px"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "BarChart_Job",

    methods: {
      draw(){
        let barChart_job = this.$echarts.init((document.getElementById("barChart_job")));

        let option_job = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['学生', '公务员', '军人', '警察', '教师', '白领']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              itemStyle: {
                normal: {
                  color: function(params) {
                    var colorList = [
                      '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                      '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                      '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                    ];
                    return colorList[params.dataIndex]
                  }
                }
              },
              data: [18203, 23489, 29034, 104970, 131744, 630230]
            }
          ]
        }

        barChart_job.setOption(option_job);
      }
    }
  }
</script>

<style scoped>

</style>
