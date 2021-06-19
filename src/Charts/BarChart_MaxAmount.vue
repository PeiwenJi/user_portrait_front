<template>
  <div ref="barChart_maxAmount" style="width: 750px; height: 360px"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "BarChart_MaxAmount",

    methods: {
      async draw(){
        const {data: res} = await this.$http.get("getMaxAmount");

        let barChart_maxAmount = this.$echarts.init(this.$refs.barChart_maxAmount);

        let option_maxAmount = {
          title: {
            text: '单笔最高',
            left: 'right'
          },
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
            data: ['1-999', '1000-2999', '3000-4999', '5000-9999', '10000+']
          },
          series: [
            {
              name: '人数',
              type: 'bar',
              data: [res[0], res[1], res[2], res[3], res[4]],
              itemStyle: {
                normal: {
                  color: function(params) {
                    var colorList = [
                      '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B'
                    ];
                    return colorList[params.dataIndex]
                  }
                }
              },
            }
          ]
        }

        barChart_maxAmount.setOption(option_maxAmount);
      }
    }
  }
</script>

<style scoped>

</style>
