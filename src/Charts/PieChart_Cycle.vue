<template>
  <div ref="pieChart_cycle" style="width: 440px; height: 360px;"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "PieChart_Cycle",

    methods: {
      async draw(){
        const {data: res} = await this.$http.get("getCycle");

        let pieChart_cycle = this.$echarts.init(this.$refs.pieChart_cycle);

        let option_cycle = {
          title: {
            text: '消费周期',
            left: 'right',
            top: 0,
            textStyle: {
              color: '#2c343c'
            }
          },

          tooltip: {
            trigger: 'item'
          },

          legend: {
            orient: 'vertical',
            left: 'left',
          },

          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '50%',
              data: [
                {value: res[0], name: '7日'},
                {value: res[1], name: '2周'},
                {value: res[2], name: '1月'},
                {value: res[3], name: '2月'},
                {value: res[4], name: '3月'},
                {value: res[5], name: '4月'},
                {value: res[6], name: '5月'},
                {value: res[7], name: '6月'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]

        }

        pieChart_cycle.setOption(option_cycle);
      }
    }
  }
</script>

<style scoped>

</style>
