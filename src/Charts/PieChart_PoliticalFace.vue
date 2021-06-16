<template>
  <div id="pieChart_politicalFace" style="width: 330px; height: 260px;"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "PieChart_PoliticalFace",

    methods: {
      draw(){
        let pieChart_politicalFace = this.$echarts.init((document.getElementById("pieChart_politicalFace")));

        let option_politicalFace = {
          tooltip: {
            trigger: 'item'
          },

          title: {
            text: 'PoliticalFace',
            left: 'right',
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
              name: 'PoliticalFace',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: [
                {value: 635, name: '群众'},
                {value: 473, name: '党员'},
                {value: 245, name: '无党派人士'},
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

        pieChart_politicalFace.setOption(option_politicalFace);
      }
    }
  }
</script>

<style scoped>

</style>
