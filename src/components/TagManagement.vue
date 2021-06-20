<template>
  <body id="tags_management">
  <div style="width: 100%">

    <el-tabs v-model="activeName" @tab-click="handleClick" ref="tabs">

      <el-tab-pane label="标签总览" name="first" style="margin-top: 50px;margin-bottom: 10px" >
        <el-row>
          <el-col :span="8">
            <div class="card-panel" style="height: 150px; margin-left: 15%; width: 70%;
                                 font-size: 18px; overflow: hidden; color: #666; background: #fff;
                                 box-shadow: 4px 4px 10px #CC3366; border-color: ##CC3366;">
              <div class="card-panel-icon-wrapper " style="float: left;
                                                                margin: 10px 0 0 10px;
                                                                padding: 16px;
                                                                transition: all 0.38s ease-out;
                                                                border-radius: 6px;">
                <i class="el-icon-s-order" style="font-size: 80px; color: #CC3366"></i>
              </div>
              <div class="card-panel-description" style="float: right;
                                                  font-weight: bold;
                                                  margin: 38px;
                                                  margin-left: 0px;">
                <div class="card-panel-text" style="line-height: 20px; color: rgba(0, 0, 0, 0.45); font-size: 18px; margin-bottom: 12px;">
                  五级标签数目
                </div>
                <count-to :start-val="0" :end-val=count.allTagsCount :duration="2600" class="card-panel-num" style="font-size: 24px;"/>
              </div>
            </div>
<!--            <el-card class="box-card" style="width: 90%;margin-left: 15px">-->
<!--            <div slot="header" class="clearfix">-->
<!--              <el-row :gutter="20">-->
<!--                <el-col :span="18"><span class="graph_title">五级标签</span></el-col>-->
<!--                <el-col :span="6"><span class="ant-tag-green" style="margin-left:50px ">总</span></el-col>-->
<!--              </el-row>-->
<!--            </div>-->
<!--            <div class="text item">-->
<!--              <el-row :gutter="20" type="flex" justify="center">-->
<!--                <span class="text-2xl" >{{count.allTagsCount}}条</span>-->
<!--              </el-row>-->
<!--            </div>-->
<!--          </el-card> -->

          </el-col>
          <el-col :span="8">
            <div class="card-panel" style="height: 150px; margin-left: 15%; width: 70%;
                                 font-size: 18px; overflow: hidden; color: #666; background: #fff;
                                 box-shadow: 4px 4px 10px #009999; border-color: #009999;">
              <div class="card-panel-icon-wrapper " style="float: left;
                                                                margin: 10px 0 0 10px;
                                                                padding: 16px;
                                                                transition: all 0.38s ease-out;
                                                                border-radius: 6px;">
                <i class="el-icon-loading" style="font-size: 80px; color: #009999"></i>
              </div>
              <div class="card-panel-description" style="float: right;
                                                  font-weight: bold;
                                                  margin: 38px;
                                                  margin-left: 0px;">
                <div class="card-panel-text" style="line-height: 20px; color: rgba(0, 0, 0, 0.45); font-size: 18px; margin-bottom: 12px;">
                  开发总数
                </div>
                <count-to :start-val="0" :end-val=count.developingTagsCount :duration="2600" class="card-panel-num" style="font-size: 24px;"/>
              </div>
            </div>
<!--            <el-card class="box-card" style="width: 90%;margin-left: 15px">-->
<!--            <div slot="header" class="clearfix">-->
<!--              <el-row :gutter="20">-->
<!--                <el-col :span="18"><span class="graph_title">开发总数</span></el-col>-->
<!--                <el-col :span="6"><span class="ant-tag-green" style="margin-left:50px ">总</span></el-col>-->
<!--              </el-row>-->
<!--            </div>-->
<!--            <div class="text item">-->
<!--              <el-row :gutter="20" type="flex" justify="center">-->
<!--                <span class="text-2xl" >{{count.developingTagsCount}}条</span>-->
<!--              </el-row>-->
<!--            </div>-->
<!--          </el-card>-->
          </el-col>
          <el-col :span="8">
            <div class="card-panel" style="height: 150px; margin-left: 15%; width: 70%;
                                 font-size: 18px; overflow: hidden; color: #666; background: #fff;
                                 box-shadow: 4px 4px 10px #FFCC00; border-color: #FFCC00;">
              <div class="card-panel-icon-wrapper " style="float: left;
                                                                margin: 10px 0 0 10px;
                                                                padding: 16px;
                                                                transition: all 0.38s ease-out;
                                                                border-radius: 6px;">
                <i class="el-icon-s-opportunity" style="font-size: 80px; color: #FFCC00"></i>
              </div>
              <div class="card-panel-description" style="float: right;
                                                  font-weight: bold;
                                                  margin: 38px;
                                                  margin-left: 0px;">
                <div class="card-panel-text" style="line-height: 20px; color: rgba(0, 0, 0, 0.45); font-size: 18px; margin-bottom: 12px;">
                  上线总数
                </div>
                <count-to :start-val="0" :end-val=count.availableTagsCount :duration="2600" class="card-panel-num" style="font-size: 24px;"/>
              </div>
            </div>
<!--            <el-card class="box-card" style="width: 90%;margin-left: 15px">-->
<!--            <div slot="header" class="clearfix">-->
<!--              <el-row :gutter="20">-->
<!--                <el-col :span="18"><span class="graph_title">上线总数</span></el-col>-->
<!--                <el-col :span="6"><span class="ant-tag-green" style="margin-left:50px ">总</span></el-col>-->
<!--              </el-row>-->
<!--            </div>-->
<!--            <div class="text item">-->
<!--              <el-row :gutter="20" type="flex" justify="center">-->
<!--                <span class="text-2xl" >{{count.availableTagsCount}}条</span>-->
<!--              </el-row>-->
<!--            </div>-->
<!--          </el-card>-->
          </el-col>
          <!--          代办事项和最新动态-->

          <div style="width: 100%;margin-top: 200px">
<!--            <el-row style="margin-top: 20px">-->
<!--              <el-col :span="12">-->
<!--                <el-card class="box-card" style="width: 90%;margin-left: 15px">-->
<!--                  <div slot="header" class="clearfix">-->
<!--                    <el-row >-->
<!--                      <el-col :span="18"><span class="graph_title">代办事项</span></el-col>-->
<!--                    </el-row>-->
<!--                  </div>-->
<!--                  <div class="text item">-->
<!--                    <el-row :gutter="20" type="flex" justify="center">-->
<!--                      <span class="text-2xl" >500家</span>-->
<!--                    </el-row>-->
<!--                  </div>-->
<!--                </el-card>-->
<!--              </el-col>-->
<!--              <el-col :span="12">-->
<!--                <el-card class="box-card" style="width: 90%;margin-left: 15px">-->
<!--                  <div slot="header" class="clearfix">-->
<!--                    <el-row >-->
<!--                      <el-col :span="18"><span class="graph_title">最新动态</span></el-col>-->
<!--                    </el-row>-->
<!--                  </div>-->
<!--                  <div class="text item">-->
<!--                    <el-row :gutter="20" type="flex" justify="center">-->
<!--                      <span class="text-2xl" >500家</span>-->
<!--                    </el-row>-->
<!--                  </div>-->
<!--                </el-card>-->
<!--              </el-col>-->
<!--            </el-row>-->
          </div>

<!--标签词云-->
          <el-row>
            <div style="width: 100%;margin-top: 50px;margin-left: 10px" >
              <template>
                <div id="tagsWorld" style="width:100%;height:600px;"></div>
              </template>
            </div>
          </el-row>

        </el-row>



      </el-tab-pane>
      <el-tab-pane label="标签管理" name="second" style="margin-bottom: 10px;">
        <div class="labelTable" >

          <el-card>
            <div style="margin-top: 20px">
              <span class="graph_title">标签管理</span>
            </div>
            <!--          用于搜索的标签组合-->
            <el-row style="margin-top: 20px">
              <el-col :span="4">
                <el-select v-model="first" placeholder="一级标签">
                  <el-option label="电商" value="电商">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-select v-model="second" placeholder="二级标签">
                  <el-option label="综合" value="综合">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-select v-model="third" placeholder="三级标签" @change="getSearchForthTags">
                  <el-option label="全部" value="全部">
                  </el-option>
                  <el-option label="人口属性（用户特征）" value="人口属性（用户特征）">
                  </el-option>
                  <el-option label="商业属性（消费特征）" value="商业属性（消费特征）">
                  </el-option>
                  <el-option label="行为属性（兴趣特征）" value="行为属性（兴趣特征）">
                  </el-option>
                  <el-option label="用户价值" value="用户价值">
                  </el-option>
                  <el-option label="组合标签" value="组合标签">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-select v-model="forth" placeholder="四级标签" @click="clickSearchForthTagSeletor">
                  <el-option
                    v-for="item in searchForthTagsList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-select v-model="status" placeholder="status" >
                  <el-option label="applying" value="applying"></el-option>
                  <el-option label="developing" value="developing"></el-option>
                  <el-option label="developed" value="developed"></el-option>
                  <el-option label="available" value="available"></el-option>
                  <el-option label="ofUsed" value="ofUsed"></el-option>
                  <el-option label="disabled" value="disabled"></el-option>
                  <el-option label="unprocessed" value="unprocessed"></el-option>
                  <el-option label="passed" value="passed"></el-option>
                  <el-option label="unpassed" value="unpassed"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4" style="text-align: right">
                <el-button icon="el-icon-search" circle style="background-color: #000066; color: white"  @click="searchTags"></el-button>
                <el-button
                type="info" plain
                @click="clickAddComposedLabelButton">添加新的组合标签</el-button></el-col>
            </el-row >
            <!--          选中的五级标签-->
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
              style="margin-top: 20px"
            >
              {{tag}}
            </el-tag>

            <!--          表格-->
            <el-table
              ref="tagTable"
              :data="tagsTableData"
              border
              style="width: 100%;margin-top: 60px"
              row-key="id"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55"
                :reserve-selection="true">
              </el-table-column>
              <el-table-column
                fixed
                type="index"
                align="center"
                prop="id"
                label="序号"
                width="100"
              >
              </el-table-column>
              <el-table-column
                prop="first"
                label="一级标签"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="second"
                label="二级标签"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="third"
                label="三级标签"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="forth"
                label="四级标签"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="fifth"
                label="五级标签"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="status"
                label="状态"
                align="center"
              >
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.status === 'available' ? 'success' : 'info'"
                    disable-transitions>{{scope.row.status}}</el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="primary" icon="el-icon-edit" circle
                    @click="tagEdit(scope.$index, scope.row) "
                    v-loading.fullscreen.lock="loading_visible" ></el-button>
                  <el-button type="danger" icon="el-icon-delete" circle
                    @click="tagDelete(scope.$index, scope.row)"></el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
          <!--          回到顶部组件-->
          <!--          todo：该组件没有发挥作用-->
          <el-backtop target=".labelTable" :visibility-height="0" ></el-backtop>
        </div>
      </el-tab-pane>

<!--      <el-tab-pane label="标签审核" name="third" style="margin-bottom: 10px">-->
<!--        <tagCheckPange> </tagCheckPange>-->
<!--      </el-tab-pane>-->
    </el-tabs>



  </div>
  <!--  修改标签信息的弹出框-->
  <div style="width: 100%;margin-top: 20px">
    <el-dialog title="标签信息" :visible.sync="handleEditVisible" :modal-append-to-body="false">
      <el-form :model="form">
        <!--        标签基本信息-->
        <el-row >
          <el-col :span="8">
            <el-form-item label="一级标签">
              <el-select v-model="form.first" placeholder="一级标签" :disabled="true">
                <el-option label="电商" value="电商">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col >
          <el-col :span="8">
            <el-form-item label="二级标签" >
              <el-select v-model="form.second" placeholder="二级标签" :disabled="true">
                <el-option label="综合" value="综合">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="三级标签" >
              <el-select v-model="form.third" placeholder="三级标签" :disabled="true" >
                <el-option label="人口属性（用户特征）" value="人口属性（用户特征）">
                </el-option>
                <el-option label="商业属性（消费特征）" value="商业属性（消费特征）">
                </el-option>
                <el-option label="行为属性（兴趣特征）" value="行为属性（兴趣特征）">
                </el-option>
                <el-option label="用户价值" value="用户价值">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="四级标签" >
              <el-select v-model="form.forth" placeholder="四级标签" :disabled="true">
                <el-option
                  v-for="item in forthTagsList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12"  align="left">
            <el-form-item label="五级标签"  >
              <el-input v-model="form.fifth" autocomplete="off" :disabled="true" style="width:230px"></el-input>
            </el-form-item>
          </el-col>
        </el-row>


        <el-form-item label="状态" label-width="formLabelWidth" >
          <el-select v-model="form.status"  :disabled="whetherUnPassed">
            <el-option label="applying" value="applying"></el-option>
            <el-option label="developing" value="developing"></el-option>
            <el-option label="developed" value="developed"></el-option>
            <el-option label="available" value="available"></el-option>
            <el-option label="ofUsed" value="ofUsed"></el-option>
            <el-option label="disabled" value="disabled"></el-option>
            <el-option label="unprocessed" value="unprocessed"></el-option>
            <el-option label="passed" value="passed"></el-option>
          </el-select>
        </el-form-item>

      </el-form>
      <!--    状态修改的时间线-->
      <div>
        <el-timeline >
          <el-timeline-item
            v-for="(activity, index) in form.activities"
            :key="index"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEditedTags">保 存</el-button>
      </div>
    </el-dialog>


  </div>
<!--  新建组合标签的弹出框-->
  <div style="width: 100%;margin-top: 20px">
    <el-dialog title="新建组合标签" :visible.sync="createComposedLabelVisible" :modal-append-to-body="false">
      <el-form :model="createdComposedLabelForm">
<!--        选择需要放置的上级标签信息-->
        <el-row >
          <el-col :span="8">
            <el-form-item label="一级标签">
              <el-select v-model="createdComposedLabelForm.first" placeholder="一级标签" >
                <el-option label="电商" value="电商">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col >
          <el-col :span="8">
            <el-form-item label="二级标签" >
              <el-select v-model="createdComposedLabelForm.second" placeholder="二级标签" >
                <el-option label="综合" value="综合">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="三级标签" >
              <el-select v-model="createdComposedLabelForm.third" placeholder="三级标签"  :disabled="true" >
                <el-option label="人口属性（用户特征）" value="人口属性（用户特征）">
                </el-option>
                <el-option label="商业属性（消费特征）" value="商业属性（消费特征）">
                </el-option>
                <el-option label="行为属性（兴趣特征）" value="行为属性（兴趣特征）">
                </el-option>
                <el-option label="用户价值" value="用户价值">
                </el-option>

              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <!--        选中的五级标签信息-->
        <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
          style="margin-top: 20px"
        >
          {{tag}}
        </el-tag >
        <el-row style="margin-top: 20px">
          创建的组合标签名称:<el-input v-model="createdComposedLabelForm.forth" style="width: 300px"></el-input>
        </el-row>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="createComposedLabelVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveCreatedComposedTag">保 存</el-button>
      </div>
    </el-dialog>
  </div>
  </body>
</template>

<script>
  //import tagCheckPange from "../components/SuperAdministrator/TagCheck"
  import CountTo from 'vue-count-to'
  import tagCheckPange from "../components/SuperAdministrator/TagCheck"
  export default {

    name: "user_management",
    //components:{tagCheckPange},
    components:{CountTo},
    data() {
      return {
        //标签页激活状态
        activeName:'first',
        //标签管理：选中的五级标签进行组合
        dynamicTags:[],
        //标签管理：搜索框的五个搜索项
        first:'电商',
        second:'综合',
        third:'',
        forth:'',
        status:'',
        //编辑五级标签信息的弹出框是否可见
        handleEditVisible:false,
        //编辑五级标签信息如果是unpassed的,不能编辑
        whetherUnPassed:false,
        //创建新的组合标签的弹出框是否可见
        createComposedLabelVisible:false,
        //创建组合标签的弹出框表单数据
        createdComposedLabelForm:{
          first:'电商',
          second:'综合',
          third:'组合标签'
        },
        //标签总览：统计数据是否发生了改变
        numChanged:false,
        //标签管理：标签表格数据
        tagsTableData: [{
          num:'',
          first:'电商',
          second:'综合',
          third:'',
          forth:'',
          fifth:'',
          status:''
        }],
        //标签管理：编辑标签的表单数据
        form: {
          status:""
        },
        //标签管理：顶部搜索框当中四级标签的信息
        forthTagsList:[],
        //标签管理：顶部搜索框当中四级标签的信息
        searchForthTagsList:[],
        //标签总览：囊括所有的统计信息
        count:[],
        //标签管理：table多选项目选择的行
        multipleSelection: [],
        //标签管理：将tag内容和tag表格的行map起来
        dynamicTagRow:[],
        //标签总览：加载项
        loading_visible:false,

      }
    },
    created(){
      this.initTagsTable();
      this.initCountInfo();
      //访问组合标签信息
      this.$http.get("getComposedTagsInfo").then(response => {
            console.log(response.data)
        }
      )
      },
    mounted(){
      this.getSearchForthTags();
      this.$http.post("showTags?dict=tagWorld",{
        first:'',
        second:'',
        third:'',
        forth:'',
        fifth:'',
        status:'',
        id:''
      }).then(response => {
          let allTagList=[]
        //console.log(response.data.length)
          response.data.forEach(element =>
          {
            allTagList.push({"name":element.name,value:element.value})
          })
       // console.log(allTagList)
        this.initEcharts(allTagList)
        }
      );

      //管理标签页
      this.$http.get("getRoleList").then(response=> {
          let tagManagement1Visible = null
          let tagManagement2Visible = null


          if (window.sessionStorage.getItem("Identity")=="user") {
            tagManagement1Visible =response.data[0]['user']["tagManagement_1"]
            tagManagement2Visible =response.data[0]['user']["tagManagement_2"]

          }

          if (window.sessionStorage.getItem("Identity")=="admin") {
            tagManagement1Visible =response.data[0]['user']["tagManagement_1"]
            tagManagement2Visible =response.data[0]['user']["tagManagement_2"]
          }

          if (window.sessionStorage.getItem("Identity")=="super-admin") {
            tagManagement1Visible =response.data[0]['user']["tagManagement_1"]
            tagManagement2Visible =response.data[0]['user']["tagManagement_2"]
          }
          if(tagManagement1Visible =='fasle'){
            this.$refs.tabs.$children[0].$refs.tabs[0].style.display = 'none';
          }
          if(!tagManagement2Visible=='fasle'){
            this.$refs.tabs.$children[0].$refs.tabs[1].style.display = 'none';
          }

        }
      )



    },
    methods: {
      //打开编辑标签的界面
      tagEdit(index, row) {

        //this.loading_visible=true
        this.$set(this.form,"id", row["id"] )
        this.$set(this.form,"first", row["first"] )
        this.$set(this.form,"second",row["second"])
        this.$set(this.form,"third",row["third"])
        this.$set(this.form,"forth",row["forth"])
        this.$set(this.form,"fifth",row["fifth"])
        this.$set(this.form,"status",row["status"])
        if(row["status"] == "unpassed"){
          this.whetherUnPassed=true;
        }
        this.getSelectedTagHistory(row["id"])

        setTimeout(()=>{
          this.handleEditVisible = true;
          //this.loading_visible=false;
        },200)
      },
      //删除单个五级标签
      tagDelete(index, row) {

        this.$http.get("deleteSingleFifthTag?tagId=" + row["id"]).then(response => {
            this.searchTags()
            this.numChanged =true
            this.updateTagCount()
          console.log(this.count.allTagsCount)
            this.$message.success("success delete")
          }, response => {
            console.log(response)
          }
        )
      },
      handleClick(tab, event) {
        //console.log(tab, event);

      },
      //初始化标签表格数据
      initTagsTable(){
        // this.$http.get("initTags").then(response=> {
        //     console.log("initTags")
        //   }, response => {
        //
        //     console.log("error")
        //   }
        // )
        this.$http.post("showTags",{
          first:this.first,
          second:this.second,
          third:this.third,
          forth:this.forth,
          fifth:'',
          status:'',
          id:''
        }).then(response => {
            this.tagsTableData=response.data

          }, response => {
            console.log("error")
          }
        )

      },
      //搜索框三级标签发生改变时变动
      getSearchForthTags(){
        this.forth = ''
        this.$http.post("showTags?dict=true",{
          first:this.first,
          second:this.second,
          third:this.third,
          forth:this.forth,
          fifth:'',
          status:'',
          id:''
        }).then(response => {
          this.searchForthTagsList = []
           response.data.forEach(element =>
           {
             this.searchForthTagsList.push({label:element.label,value:element.value})
           })
          //console.log(this.searchForthTagsList)
          }, response => {
            console.log("error")
          }
        )
      },
      //三级标签选择之后虽然searchForthTagsList发生了修改，但是页面并没有刷新，需要这里强制刷新一下
      clickSearchForthTagSeletor(){
        this.$forceUpdate
      },
      //点击搜索按钮之后进行搜索
      searchTags(){
        this.$http.post("showTags",{
          first:this.first,
          second:this.second,
          third:this.third,
          forth:this.forth,
          fifth:'',
          status:this.status,
          id:''
        }).then(response => {
            this.tagsTableData=response.data
          }, response => {
            console.log("error")
          }
        )
      },
      //保存修改的标签信息
      saveEditedTags(){
        console.log(this.form.id)
        this.$http.post("editTagInfo", {
          id:this.form.id,
          first:this.form.first,
          second:this.form.second,
          third:this.form.third,
          forth:this.form.forth,
          fifth:this.form.fifth,
          status:this.form.status
        }).then(response => {
          //console.log(response);
          this.$message.success("edit tag success")
          this.handleEditVisible = false
          this.searchTags();
          this.numChanged = true

        })
      },
      //处理选中事件
      handleSelectionChange(val) {
        this.multipleSelection = val;
       // console.log(this.multipleSelection)
        this.dynamicTags=[]
        this.dynamicTagRow=[]
        val.forEach(row =>{
          this.dynamicTags.push(row["fifth"]+"("+row["forth"]+")")
          this.dynamicTagRow.push({tag:row["fifth"]+"("+row["forth"]+")",row:row})
          }
        )
      },
      //关闭标签时候响应
      handleClose(tag) {
        this.$refs.tagTable.toggleRowSelection(this.dynamicTagRow[this.dynamicTags.indexOf(tag)].row);
        //this.dynamicTags.splice(this.dynamicTags.indexOf(tag)-1, 1);
        //console.log(this.dynamicTags)
      },
      //点击创建组合标签按钮
      clickAddComposedLabelButton(){
        //console.log(this.dynamicTags.length)

        if(this.dynamicTags.length <=1){
          this.$message.error("please select at least two labels first")
        }else {
          this.createComposedLabelVisible=true
        }


      },
      //删除或者新建标签之后更新总的标签数目
      updateTagCount(){
        this.$http.post("showTags",{
          first:'',
          second:'',
          third:'',
          forth:'',
          fifth:'',
          status:'',
          id:''
        }).then(response => {
            this.$set(this.count,"allTagsCount",response.data.length)
          }, response => {
            console.log("error")
          }
        )

      },
      //点击保存创建的组合标签信息
      saveCreatedComposedTag(){
        this.$http.get("createNewComposedTag?initId=" + this.count.allTagsCount+
          "&first="+this.createdComposedLabelForm.first.toString()+"&second="+this.createdComposedLabelForm.second.toString()+
        "&third="+this.createdComposedLabelForm.third.toString()+"&forth="+this.createdComposedLabelForm.forth.toString()+
        "&fifth="+this.dynamicTags.toString()).then(response => {
          console.log(response)
          if(response.data=="success"){
            this.searchTags()
            this.updateTagCount()
            this.getSearchForthTags()
            this.dynamicTags=[]
            this.$refs.tagTable.clearSelection();
            this.createComposedLabelVisible=false
            this.$message.success("success add")
            this.$set(this.createdComposedLabelForm,"forth","")
          }
          if(response.data=="name complicate"){
            this.$message.error("在该三级标签下有相同的名称的四级标签，请重新命名")
            this.$set(this.createdComposedLabelForm,"forth","")

          }

          }
        )

      },

      //绘制首页的词云图像
      initEcharts(data){
        let echartsWordcloud=this.$echarts.init(document.getElementById("tagsWorld"));
        let vm =this
        let option = {
          title: {
            text: "",
            x: "center",
            shape:"circle"
          },
          series: [
            {
              type: "wordCloud",
              //用来调整词之间的距离
              gridSize: 10,
              //用来调整字的大小范围
              sizeRange: [14, 26],
              rotationRange: [0, 0],
              //随机生成字体颜色
              textStyle: {
                normal: {
                  color: function() {
                    return (
                      "rgb(" +
                      Math.round(Math.random() * 256) +
                      ", " +
                      Math.round(Math.random() * 256) +
                      ", " +
                      Math.round(Math.random() * 256) +
                      ")"
                    );
                  }
                }
              },
              //位置相关设置
              left: "center",
              top: "center",
              right: null,
              bottom: null,
              width: "300%",
              height: "300%",
              //数据
              data:data
            }
          ]
        };
        echartsWordcloud.setOption(option);
        //点击,点击之后跳转到对应的标签管理界面
        echartsWordcloud.on("click",function(params){
          //console.log(this.handleEditVisible)

         // console.log(params.data.value)
          vm.$http.get("getTagWorldPath?id=" + params.data.value).then(response => {
            vm.form.id=params.data.value
            vm.form.first=response.data[0]
            vm.form.second=response.data[1]
            vm.form.third=response.data[2]
            vm.form.forth=response.data[3]
            vm.form.fifth=response.data[4]
            vm.form.status=response.data[5]
            vm.getSelectedTagHistory(params.data.value)
            }
          )
         // console.log(this.handleEditVisible)
          setTimeout(()=>{
            vm.handleEditVisible  =  true;
            //this.loading_visible=false;
          },200)
        })
      },
      //切换用户管理、用户总览标签栏事件
      handleClick(tab, event) {

        if (this.activeName == "first" && this.numChanged) {
          this.numChanged = false;
          //this.initCountInfo()
          window.location.reload()
        }
      },
      //初始化标签统计数据
      initCountInfo(){
        this.$http.post("showTags",{
          first:'',
          second:'',
          third:'',
          forth:'',
          fifth:'',
          status:'developing',
          id:''
        }).then(response => {
            this.$set(this.count,"developingTagsCount",response.data.length)
          }
        )

        this.$http.post("showTags",{
          first:'',
          second:'',
          third:'',
          forth:'',
          fifth:'',
          status:'available',
          id:''
        }).then(response => {
            this.$set(this.count,"availableTagsCount",response.data.length)
          }
        )

        this.$http.post("showTags",{
          first:'',
          second:'',
          third:'',
          forth:'',
          fifth:'',
          status:'',
          id:''
        }).then(response => {
            this.$set(this.count,"allTagsCount",response.data.length)
          }
        )

      },
      //获取标签历史状态信息的函数
      getSelectedTagHistory(id){
        this.$http.get("getSelectedTagHistory?id=" + id).then(response => {
          console.log("getSelectedTagHistory")
          console.log(response.data)
        this.form.activities =response.data
          }
        )
      }
      },


    }
</script>

<style scoped>
  /*.el-card {*/
  /*  box-shadow: 0 2px 4px #052aae, 0 0 6px rgba(0, 0, 0, .04)*/
  /*}*/

  .input{
    width: 250px;
  }

  .ant-tag-green {
    color: #52c41a;
    background: #f6ffed;
    border-color: #b7eb8f;
  }
  .graph_title {
    font-family: PingFang SC;
    font-size: x-large;
    font-weight: bolder;
    color: #000066
  }
  .graph_Num {
    font-family: PingFang SC;
    font-size: x-large;
    font-weight: bolder;
    color: #000066
  }
  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
</style>
