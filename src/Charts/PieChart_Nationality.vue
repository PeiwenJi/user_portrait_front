<template>
  <div id="pieChart_nationality" style="width: 330px; height: 260px;"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "PieChart_Nationality",

    methods: {
      draw(){
        var pieChart_nationality = this.$echarts.init((document.getElementById("pieChart_nationality")));

        var option_nationality = {
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
                borderRadius: 8
              },
              data: [
                {value: 860, name: '中国大陆'},
                {value: 438, name: '香港'},
                {value: 532, name: '澳门'},
                {value: 330, name: '台湾'},
                {value: 720, name: '其他'}
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
