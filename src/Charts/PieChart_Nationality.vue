<template>
  <div ref="pieChart_nationality" style="width: 330px; height: 260px;"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "PieChart_Nationality",

    methods: {
      async draw(){
        const {data: res_nationality} = await this.$http.get("getNationality");

        let pieChart_nationality = this.$echarts.init(this.$refs.pieChart_nationality);

        let option_nationality = {
          title: {
            text: 'Nationality',
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
                {value: res_nationality[0], name: '中国大陆'},
                {value: res_nationality[1], name: '香港'},
                {value: res_nationality[2], name: '澳门'},
                {value: res_nationality[3], name: '台湾'},
                {value: res_nationality[4], name: '其他'}
              ]
            }
          ]
        } //option

        pieChart_nationality.setOption(option_nationality);
      }
    }
  }
</script>

<style scoped>

</style>
