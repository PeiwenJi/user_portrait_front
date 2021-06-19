<template>
  <div ref="pieChart_politicalFace" style="width: 330px; height: 260px;"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "PieChart_PoliticalFace",

    methods: {
      async draw(){
        const {data: res_politicalFac} = await this.$http.get("getPoliticalFace")

        let pieChart_politicalFace = this.$echarts.init(this.$refs.pieChart_politicalFace);

        let option_politicalFace = {
          title: {
            text: 'PoliticalFace',
            left: 'right',
            top: 0,
            textStyle: {
              color: '#2c343c'
            }
          },

          series: [
            {
              name: 'Nationality',
              type: 'pie',
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                normal: {
                  color: function(params) {
                    var colorList = [
                      '#FE8463','#9BCA63','#FAD860'
                    ];
                    return colorList[params.dataIndex]
                  }
                }
              },
              data: [
                {value: res_politicalFac[0], name: '群众'},
                {value: res_politicalFac[1], name: '党员'},
                {value: res_politicalFac[2], name: '无党派人士'},
              ]
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
