<template>
  <div ref="lineChart_paymentCode" style="width: 1600px; height: 460px;"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "LineChart_PaymentCode",

    methods: {
      draw(){
        let lineChart_paymentCode = this.$echarts.init(this.$refs.lineChart_paymentCode);

        let option_paymentCode = {
          title: {
            text: '支付方式'
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['支付宝', '微信', '储蓄卡', '信用卡']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '人数',
              type: 'line',
              step: 'start',
              data: [520, 332, 101, 134],
              itemStyle: {
                color: '#b5c334'
              }
            }
          ]
        } //option

        lineChart_paymentCode.setOption(option_paymentCode);
      }
    }
  }
</script>

<style scoped>

</style>
