<template>
  <div ref="barChart_age" style="width: 650px; height: 400px; margin-top: -30px"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "BarChart_Age",

    methods: {
      async draw(){
        const {data: res} = await this.$http.get("getAge");

        let barChart_age = this.$echarts.init(this.$refs.barChart_age);

        let option_age = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },

          xAxis: [
            {
              type: 'category',
              data: ['50后', '60后', '70后', '80后', '90后', '00后', '10后', '20后'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],

          yAxis: [
            {
              type: 'value',
              min: 0,
              max: 400,
              interval: 50,
            },
          ],

          series: [
            {
              name: '人数',
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
              data: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]]
            }
          ]

        } //option

        barChart_age.setOption(option_age);
      }
    }
  }
</script>

<style scoped>

</style>
