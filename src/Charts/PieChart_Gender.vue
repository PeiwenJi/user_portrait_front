<template>
  <div ref="pieChart_gender" style="width: 330px; height: 260px;"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "PieChart_Gender",

    methods: {
      async draw(){
        const {data: res_gender} = await this.$http.get("getGender");

        let pieChart_gender = this.$echarts.init(this.$refs.pieChart_gender);

        let option_gender = {
          tooltip: {
            trigger: 'item'
          },

          title: {
            text: 'Gender',
            left: 'left',
            top: 0,
            textStyle: {
              color: '#2c343c'
            }
          },

          series: [
            {
              name: 'Number',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: true,
                position: 'left',
                fontWeight: 'bold',
                fontSize: '15',
              },
              itemStyle: {
                normal: {
                  color: function(params) {
                    var colorList = ['#60C0DD', '#C6E579'];
                    return colorList[params.dataIndex]
                  }
                }
              },
              data: [
                {value: res_gender[0], name: '男'},
                {value: res_gender[1], name: '女'},
              ]
            }
          ]
        } //option

        pieChart_gender.setOption(option_gender);
      }
    }
  }
</script>

<style scoped>

</style>
