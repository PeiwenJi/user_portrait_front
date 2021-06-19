<template>
  <div ref="barChart_avgAmount" style="width: 750px; height: 400px"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "BarChart_AvgAmount",

    methods: {
      async draw(){
        const {data: res} = await this.$http.get("getAvgAmount");

        let barChart_avgAmount = this.$echarts.init(this.$refs.barChart_avgAmount);

        let option_avgAmount = {
          title: {
            text: '客单价',
            left: 'left'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            type: 'category',
            data: ['1-999', '1000-2999', '3000-4999', '5000-9999', '10000+']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '人数',
              data: [res[0], res[1], res[2], res[3], res[4]],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {color: 'rgba(180, 180, 180, 0.2)'}
            }
          ]
        }

        barChart_avgAmount.setOption(option_avgAmount);
      }
    }
  }
</script>

<style scoped>

</style>
