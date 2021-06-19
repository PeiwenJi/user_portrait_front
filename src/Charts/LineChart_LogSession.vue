<template>
  <div ref="lineChart_logSession" style="width: 1600px; height: 560px;"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "LineChart_LogSession",

    methods: {
      async draw(){
        const {data: res} = await this.$http.get("getLogSession");

        let lineChart_logSession = this.$echarts.init(this.$refs.lineChart_logSession);

        let option_logSession = {
          title: {
            text: '浏览时段'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1:00 - 7:00', '8:00 - 12:00', '13:00 - 17:00', '18:00 - 21:00', '22:00 - 24:00']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} 人'
            },
            axisPointer: {
              snap: true
            }
          },
          visualMap: {
            show: false,
            dimension: 0,
            pieces: [{
              lte: 1,
              color: 'blue'
            }, {
              gt: 1,
              lte: 2,
              color: 'red'
            }, {
              gt: 2,
              lte: 3,
              color: 'green'
            }, {
              gt: 3,
              lte: 4,
              color: 'blue'
            }]
          },
          series: [
            {
              name: '浏览时段',
              type: 'line',
              smooth: true,
              data: [res[0], res[1], res[2], res[3], res[4]],
              markArea: {
                itemStyle: {
                  color: 'rgba(255, 173, 177, 0.4)'
                }
              }
            }
          ]
        }

        lineChart_logSession.setOption(option_logSession);
      }
    }
  }
</script>

<style scoped>

</style>
