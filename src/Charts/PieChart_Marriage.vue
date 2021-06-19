<template>
  <div ref="pieChart_marriage" style="width: 400px; height: 360px;"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "PieChart_Marriage",

    methods: {
      async draw(){
        const {data: res_marriage} = await this.$http.get("getMarriage");

        let pieChart_marriage = this.$echarts.init(this.$refs.pieChart_marriage);

        let option_marriage = {

          tooltip: {
            trigger: 'item'
          },

          title: {
            text: 'Marriage',
            left: 'left',
            top: 0,
            textStyle: {
              color: '#2c343c'
            }
          },

          visualMap: {
            show: false,
            min: 0,
            max: 1000,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name: 'Number',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: [
                {value: res_marriage[0], name: '离异'},
                {value: res_marriage[1], name: '未婚'},
                {value: res_marriage[2], name: '已婚'},
              ].sort(function (a, b) { return a.value - b.value; }),
              roseType: 'radius',
              label: {
                color: '#000000'
              },
              labelLine: {
                lineStyle: {
                  color: 'rgb(0,0,0)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              },
              itemStyle: {
                color: '#ff6b6b',
                shadowBlur: 200,
                shadowColor: 'rgba(255,255,255,0)'
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        } //option

        pieChart_marriage.setOption(option_marriage);
      }
    }
  }
</script>

<style scoped>

</style>
