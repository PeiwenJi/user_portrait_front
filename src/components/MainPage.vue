<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户群画像" name="first" style="margin-bottom: 10px">
        <DataPage></DataPage>
      </el-tab-pane>
      <el-tab-pane label="组合标签一览" name="second" style="margin-bottom: 10px">
        <CombineTag></CombineTag>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import DataPage from '../components/DataPage'
  import CombineTag from '../components/CombineTag'

  export default {
    name: "MainPage",
    components: {DataPage, CombineTag},
    data() {
      return {
        activeName: 'first',
      }
    }
  }
</script>

<style scoped>

</style>
