<template>
  <div id="pieChart_gender" style="width: 330px; height: 260px;"></div>
</template>

<script>
  export default {
    mounted() {
      this.draw();
    },

    name: "PieChart_Gender",

    methods: {
      async draw(){
        const {data: res} = await this.$http.get("getGender");

        let pieChart_gender = this.$echarts.init((document.getElementById("pieChart_gender")));

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
              name: 'Gender',
              type: 'pie',
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              data: [
                {value: res[0], name: '男'},
                {value: res[1], name: '女'},
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
