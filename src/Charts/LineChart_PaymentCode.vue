<template>
  <div ref="lineChart_paymentCode" style="width: 1050px; height: 360px;"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "LineChart_PaymentCode",

    methods: {
      async draw(){
        const {data: res} = await this.$http.get("getPaymentCode");

        let lineChart_paymentCode = this.$echarts.init(this.$refs.lineChart_paymentCode);

        let option_paymentCode = {
          title: {
            text: '支付方式',
            left: 'left'
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
            data: ['支付宝', '微信', '货到付款']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '人数',
              type: 'line',
              data: [res[0], res[1], res[2]],
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
