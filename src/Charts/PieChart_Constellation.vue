<template>
  <div ref="pieChart_constellation" style="width: 470px; height: 360px;"></div>
</template>

<script>
    export default {
      mounted() {
        this.draw();
      },

      name: "PieChart_Constellation",

      methods: {
        async draw(){
          const {data: res} = await this.$http.get("getConstellation");

          let pieChart_constellation = this.$echarts.init(this.$refs.pieChart_constellation);

          let option_constellation = {
            title: {
              text: 'Constellation',
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
                  borderRadius: 8,
                  normal: {
                    color: function(params) {
                      var colorList = [
                        '#FE8463','#B5C334','#FCCE10','#E87C25','#27727B',
                        '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                      ];
                      return colorList[params.dataIndex]
                    }
                  }
                },
                data: [
                  {value: res[0], name: '双子座'},
                  {value: res[1], name: '双鱼座'},
                  {value: res[2], name: '处女座'},
                  {value: res[3], name: '天秤座'},
                  {value: res[4], name: '天蝎座'},
                  {value: res[5], name: '射手座'},
                  {value: res[6], name: '巨蟹座'},
                  {value: res[7], name: '摩羯座'},
                  {value: res[8], name: '水瓶座'},
                  {value: res[9], name: '狮子座'},
                  {value: res[10], name: '白羊座'},
                  {value: res[11], name: '金牛座'}
                ]
              }
            ]
          }

          pieChart_constellation.setOption(option_constellation);
        }
      }
    }
</script>

<style scoped>

</style>
