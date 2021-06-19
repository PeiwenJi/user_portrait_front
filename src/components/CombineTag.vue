<template>
  <div>
    <el-col v-for="(item, tag_index) in tagList" :key="tag_index" :span="8">
      <el-card>
        <div slot="header" class="title">
          <span>组合标签{{tag_index+1}}：{{nameList[tag_index]}}</span>
        </div>
        <div>
          <span>标签详情：</span>
          <el-tag v-for="(item, index) in contentList[tag_index]" :key="index" style="margin-left: 10px">
            {{item}}
          </el-tag>
        </div>
        <div style="margin-top: 10px">
          <span>标签状态：</span>
          <el-tag :type="typeList[tag_index]" style="margin-left: 10px">
            {{statusList[tag_index]}}
          </el-tag>
        </div>
        <div style="margin-top: 10px">
          <el-button type="primary" size="mini" style="margin-top: 50px" :disabled="disableList[tag_index]" @click="click(tag_index)">标签一览</el-button>
        </div>
      </el-card>
    </el-col>
<!--          </el-col>-->
<!--          <el-col :span="16">-->
<!--            <el-table :data="tableData" height="250" border style="width: 100%; height: 360px" v-if="showList[tag_index]">-->
<!--              <el-table-column prop="date" label="日期" width="180"></el-table-column>-->
<!--              <el-table-column prop="name" label="姓名" width="180"></el-table-column>-->
<!--              <el-table-column prop="address" label="地址"></el-table-column>-->
<!--            </el-table>-->
<!--          </el-col>-->
<!--        </el-row>-->

    <!--  组合标签资料显示-->
    <div style="width: 100%;margin-top: 0px">
      <el-dialog title="信息一览" :visible.sync ="combineTagInfoVisible" :modal-append-to-body="false" class="title">
        <el-table
          :data="userTableData"
          border
          style="width: 100%;margin-top: 20px">
          <el-table-column
            fixed
            type="index"
            prop="num"
            label="序号"
            width="100"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="username"
            label="用户名称"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="birthday"
            label="生日"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="ageGroup"
            label="年龄段"
            align="center"
          ></el-table-column>
            <el-table-column
              prop="gender"
              label="性别"
              align="center"
          ></el-table-column>

            <el-table-column
              prop="nationality"
              label="国籍"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="politicalFace"
              label="政治面貌"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="marriage"
              label="婚姻状况"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="job"
              label="工作"
              align="center"
            >
            </el-table-column>
        </el-table>
      </el-dialog>
    </div>

  </div>

</template>

<script>
  export default {
    created() {
      this.getCombineTag();
    },

    name: "CombineTag",
    data() {
      return {
        tagList: [],
        //组合标签名称
        nameList: [],
        //组合标签包含的五级标签列表
        contentList: [],
        //组合标签状态列表
        statusList: [],
        //组合标签状态显示的颜色
        typeList: [],
        //按钮的是否禁用
        disableList: [],
        tableData: [],
        combineTagInfoVisible:false,
        //满足组合标签的用户的信息列表
        userTableData:[]
      }
    },

    methods: {
      click(index) {
        //console.log(this.contentList[index]);
        this.combineTagInfoVisible = true;
        this.$http.get("getComposedTagsUserList?composedTagName="+this.nameList[index]).then(response => {
            this.userTableData = response.data;
          }, response => {
            console.log("error")
          }
        )

      },

      async getCombineTag() {
        const {data: res} = await this.$http.get("getComposedTagsInfo");
        console.log(res);
        for(let i=0; i<res.length; i++){
          this.tagList.push(i+1);
          this.nameList.push(res[i].forth);
          this.contentList.push(res[i].fifth);
          this.statusList.push(res[i].status);
        }
        for(let i=0; i<this.statusList.length; i++){
          if(this.statusList[i] == 'available'){
            this.typeList.push('success');
            this.disableList.push(false);
          }
          else if(this.statusList[i] == 'unpassed'){
            this.typeList.push('danger');
            this.disableList.push(true);
          }
          else {
            this.typeList.push('warning');
            this.disableList.push(true);
          }
        }
      }
    }
  }
</script>

<style scoped>
  .el-card {
    margin-bottom:20px;
    margin-right: 20px
    /*width: 500px;*/
    /*height: 300px;*/
  }
  .title {
    font-family: PingFang SC;
    font-size: large;
    font-weight: bold;
    color: #000066
  }
</style>
