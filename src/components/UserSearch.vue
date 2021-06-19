<template>
  <div style="width: 100%">
    <el-card>
      <div>
        <el-row style="margin: 10px 0px">
          <el-col :span="3">
            <el-input v-model="user_id" placeholder="请输入用户ID"></el-input>
          </el-col>
          <el-col :span="1" style="text-align: center">
            <el-button
              icon="el-icon-search"
              circle
              style="background-color: #000066; color: white"
              @click="search"
              v-loading.fullscreen.lock="search_loading"
              element-loading-text="Searching in..."></el-button>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <div style="margin-top: 20px; height: 850px" v-show="info_visible">
      <el-col :span="10">
        <!--用户特征-->
        <el-card style="height: 400px">
          <div slot="header" class="title">
            <span >用户特征</span>
          </div>
          <el-col :span="11">
            <!--用户名-->
            <div>
                <el-row>
                  <el-col :span="10">
                    <el-tag color="#C1232B" style="color: white; font-weight: bold">用户名</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{userName}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户性别-->
            <div style="margin-top: 10px">
                <el-row>
                  <el-col :span="10">
                    <el-tag color="#B5C334" style="color: white; font-weight: bold">性别</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{gender}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户生日-->
            <div style="margin-top: 10px">
                <el-row>
                  <el-col :span="10">
                    <el-tag color="#FCCE10" style="color: white; font-weight: bold">生日</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{birthday}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户邮箱-->
            <div style="margin-top: 10px">
                <el-row>
                  <el-col :span="10">
                    <el-tag color="#E87C25" style="color: white; font-weight: bold">电子邮箱</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{email}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户电话-->
            <div style="margin-top: 10px">
                <el-row>
                  <el-col :span="10">
                    <el-tag color="#9BCA63" style="color: white; font-weight: bold">联系方式</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{mobile}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户年龄段-->
            <div style="margin-top: 10px">
                <el-row>
                  <el-col :span="10">
                    <el-tag color="#F0805A" style="color: white; font-weight: bold">年龄段</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{ageGroup}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户星座-->
            <div style="margin-top: 10px">
                <el-row>
                  <el-col :span="10">
                    <el-tag color="#8e8eff" style="color: white; font-weight: bold">星座</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{constellation}}</span>
                  </el-col>
                </el-row>
              </div>
          </el-col>
          <el-col :span="1">
            <div>
              <el-divider direction="vertical"></el-divider>
            </div>
          </el-col>
          <el-col :span="11" style="margin-left: 20px">
            <!--用户婚姻状况-->
            <div>
                <el-row>
                  <el-col :span="12">
                    <el-tag color="#C1232B" style="color: white; font-weight: bold">婚姻状况</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{marriage}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户政治面貌-->
            <div style="margin-top: 10px">
                <el-row>
                  <el-col :span="12">
                    <el-tag color="#B5C334" style="color: white; font-weight: bold">政治面貌</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{politicalFace}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户职业-->
            <div style="margin-top: 10px">
                <el-row>
                  <el-col :span="12">
                    <el-tag color="#FCCE10" style="color: white; font-weight: bold">职业</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{job}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户国籍-->
            <div style="margin-top: 10px">
                <el-row>
                  <el-col :span="12">
                    <el-tag color="#E87C25" style="color: white; font-weight: bold">国籍</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{nationality}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户账户余额-->
            <div style="margin-top: 10px">
                <el-row>
                  <el-col :span="12">
                    <el-tag color="#9BCA63" style="color: white; font-weight: bold">账户余额</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{money}} ￥</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户注册时间-->
            <div style="margin-top: 10px">
                <el-row>
                  <el-col :span="12">
                    <el-tag color="#F0805A" style="color: white; font-weight: bold">注册时间</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{registerTime}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户上一次登录时间-->
            <div style="margin-top: 10px">
                <el-row>
                  <el-col :span="12">
                    <el-tag color="#8e8eff" style="color: white; font-weight: bold">上次登录时间</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{lastLoginTime}}</span>
                  </el-col>
                </el-row>
              </div>
          </el-col>
        </el-card>

        <!--行为特征-->
        <el-card style="height: 400px; margin-top: 20px">
          <div slot="header" class="title">
            <span>行为特征</span>
          </div>
          <el-col :span="11">
            <!--最近登录-->
            <div>
              <el-row>
                <el-col :span="10">
                  <el-tag color="#C1232B" style="color: white; font-weight: bold">最近登录</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{lastLogin}}</span>
                </el-col>
              </el-row>
            </div>
            <!--浏览页面-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#B5C334" style="color: white; font-weight: bold">浏览页面</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{browsePage}}</span>
                </el-col>
              </el-row>
            </div>
            <!--浏览时段-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#FCCE10" style="color: white; font-weight: bold">浏览时段</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{logSession}}</span>
                </el-col>
              </el-row>
            </div>
            <!--购买商品-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#E87C25" style="color: white; font-weight: bold">购买商品</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{goodsBought}}</span>
                </el-col>
              </el-row>
            </div>
            <!--浏览时长-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#9BCA63" style="color: white; font-weight: bold">浏览时长</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{browseTime}}</span>
                </el-col>
              </el-row>
            </div>
            <!--访问频率-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#F0805A" style="color: white; font-weight: bold">访问频率</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{browseFrequency}}</span>
                </el-col>
              </el-row>
            </div>
            <!--设备类型-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#8e8eff" style="color: white; font-weight: bold">设备类型</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">No Data</span>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="1">
            <div>
              <el-divider direction="vertical"></el-divider>
            </div>
          </el-col>
          <el-col :span="11">
            <!--登录频率-->
            <div>
              <el-row>
                <el-col :span="10">
                  <el-tag color="#C1232B" style="color: white; font-weight: bold">登录频率</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{logFrequency}}</span>
                </el-col>
              </el-row>
            </div>
            <!--浏览商品-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#B5C334" style="color: white; font-weight: bold">浏览商品</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">No Data</span>
                </el-col>
              </el-row>
            </div>
            <!--商品偏好-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#FCCE10" style="color: white; font-weight: bold">商品偏好</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">Developing...</span>
                </el-col>
              </el-row>
            </div>
            <!--品类偏好-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#E87C25" style="color: white; font-weight: bold">品类偏好</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{cateFeatured}}</span>
                </el-col>
              </el-row>
            </div>
            <!--品牌偏好-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#9BCA63" style="color: white; font-weight: bold">品牌偏好</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">No Data</span>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-card>
      </el-col>

      <el-col :span="4">
        <div>
          <el-image
            :src="require('@/assets/man.png')"
            fit="fill" v-show="isMan">
          </el-image>
          <el-image
            :src="require('@/assets/woman.png')"
            fit="fill" v-show="isWoman">
          </el-image>
        </div>
      </el-col>

      <el-col :span="10">
        <!--消费特征-->
        <el-card style="height: 400px">
          <div slot="header" class="title" style="text-align: right">
            <span>消费特征</span>
          </div>
          <el-col :span="11">
            <!--消费周期-->
            <div>
              <el-row>
                <el-col :span="10">
                  <el-tag color="#C1232B" style="color: white; font-weight: bold">消费周期</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{consumptionCycle}}</span>
                </el-col>
              </el-row>
            </div>
            <!--客单价-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#B5C334" style="color: white; font-weight: bold">客单价</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{avgOrderAmount}}</span>
                </el-col>
              </el-row>
            </div>
            <!--支付方式-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#FCCE10" style="color: white; font-weight: bold">支付方式</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{paymentCode}}</span>
                </el-col>
              </el-row>
            </div>
            <!--单笔最高-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#E87C25" style="color: white; font-weight: bold">单笔最高</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{maxOrderAmount}}</span>
                </el-col>
              </el-row>
            </div>
            <!--消费能力-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#9BCA63" style="color: white; font-weight: bold">消费能力</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{spendingPower}}</span>
                </el-col>
              </el-row>
            </div>
            <!--购买频率-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#F0805A" style="color: white; font-weight: bold">购买频率</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">No Data</span>
                </el-col>
              </el-row>
            </div>
            <!--退货率-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#8e8eff" style="color: white; font-weight: bold">退货率</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">No Data</span>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="1">
            <div>
              <el-divider direction="vertical"></el-divider>
            </div>
          </el-col>
          <el-col :span="11" style="margin-left: 20px">
            <!--换货率-->
            <div>
              <el-row>
                <el-col :span="10">
                  <el-tag color="#C1232B" style="color: white; font-weight: bold">换货率</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">No Data</span>
                </el-col>
              </el-row>
            </div>
            <!--省钱能手-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#B5C334" style="color: white; font-weight: bold">省钱能手</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">Developing...</span>
                </el-col>
              </el-row>
            </div>
            <!--有劵必买-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#FCCE10" style="color: white; font-weight: bold">有劵必买</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">Developing...</span>
                </el-col>
              </el-row>
            </div>
            <!--客服咨询频率-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#E87C25" style="color: white; font-weight: bold">客服咨询频率</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">No Data</span>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-card>

        <!--用户价值-->
        <el-card style="height: 400px; margin-top: 20px">            <!--用户价值-->

          <div slot="header" class="title" style="text-align: right">
            <span>用户价值</span>
          </div>
          <el-col :span="11">
            <div>
              <el-row>
                <el-col :span="10">
                  <el-tag color="#C1232B" style="color: white; font-weight: bold">用户价值</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">{{userValue}}</span>
                </el-col>
              </el-row>
            </div>
            <!--房产-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#B5C334" style="color: white; font-weight: bold">房产</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">No Data</span>
                </el-col>
              </el-row>
            </div>
            <!--房产价值-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#FCCE10" style="color: white; font-weight: bold">房产价值</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">No Data</span>
                </el-col>
              </el-row>
            </div>
            <!--车产-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#E87C25" style="color: white; font-weight: bold">车产</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">No Data</span>
                </el-col>
              </el-row>
            </div>
            <!--车产价值-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="10">
                  <el-tag color="#9BCA63" style="color: white; font-weight: bold">车产价值</el-tag>
                </el-col>
                <el-col :span="14">
                  <span class="info">No Data</span>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="1">
            <div>
              <el-divider direction="vertical"></el-divider>
            </div>
          </el-col>
          <el-col :span="11" style="margin-left: 20px"></el-col>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserSearch",
    data() {
      return {
        user_id: '',
        userName: '',
        gender: '',
        birthday: '',
        email: '',
        mobile: '',
        job: '',
        nationality: '',
        marriage: '',
        politicalFace: '',
        ageGroup: '',
        constellation: '',
        money: '0.00',
        registerTime: '',
        lastLoginTime: '',

        consumptionCycle: '',
        avgOrderAmount: '',
        paymentCode: '',
        maxOrderAmount: '',
        spendingPower: '',

        lastLogin: '',
        browsePage: '',
        logSession: '',
        goodsBought: '',
        browseFrequency: '',
        logFrequency: '',
        browseTime: '',
        cateFeatured: '',

        userValue: '',

        search_loading: false,
        info_visible: false,
        isMan: true,
        isWoman: false,
      }
    },
    methods: {
      search() {
        if(this.user_id == '')
          this.$message.error("At least one to search");
        else if(this.user_id > 950) {
          this.$message.error("There is no such a user")
        }
        else{
          this.search_loading = true;
          setTimeout(async () => {
            const {data: res_info} = await this.$http.get("searchCustomerInfo?id=" + this.user_id);
            this.userName = res_info[0]
            this.gender = res_info[1];
            this.birthday = res_info[2];
            this.email = res_info[3];
            this.mobile = res_info[4];
            this.job = res_info[5];
            this.nationality = res_info[6];
            this.marriage = res_info[7];
            this.politicalFace = res_info[8];
            this.ageGroup = res_info[9];
            this.constellation = res_info[10];
            this.money = res_info[11];
            this.registerTime = res_info[12];
            this.lastLoginTime = res_info[13];

            if(this.gender == '男'){
              this.isMan = true;
              this.isWoman = false;
            }else {
              this.isMan = false;
              this.isWoman = true;
            }

            const {data: res_consumption} = await this.$http.get("searchConsumptionFeature?id=" + this.user_id);
            console.log(res_consumption);
            this.consumptionCycle = res_consumption[0];
            this.avgOrderAmount = res_consumption[1].split("：")[1];
            this.paymentCode = res_consumption[2];
            if(res_consumption[3].split("：")[1] == "10000-")
              res_consumption[3] = "10000+";
            this.maxOrderAmount = res_consumption[3];
            this.spendingPower = res_consumption[4];

            const {data: res_behavior} = await this.$http.get("searchBehaviorFeature?id=" + this.user_id);
            this.lastLogin = res_behavior[0];
            this.browsePage = res_behavior[1];
            this.logSession = res_behavior[2];
            this.goodsBought = res_behavior[3];
            this.browseFrequency = res_behavior[4];
            this.logFrequency = res_behavior[5];
            this.browseTime = res_behavior[6]

            const {data: res_userValue} = await this.$http.get("searchUserValue?id=" + this.user_id);
            this.userValue = res_userValue[0];

            const {data: res_cateFeatured} = await this.$http.get("getCateFeatured?id=" + this.user_id);
            this.cateFeatured = res_cateFeatured;

            this.info_visible = true;
            this.search_loading = false;
          },2000)
        }
      }
    }
  }
</script>

<style scoped>
  .el-image {
    width: 172px;
    height: 347px;
    margin-left: 50%;
    transform:translateX(-50%);
    margin-top: 200px;
  }

  .el-card__header {
    color: #000066;
  }

  .title {
    font-family: PingFang SC;
    font-size: large;
    font-weight: bold;
    color: #000066
  }

  .el-divider--vertical {
    display: inline-block;
    width: 5px;
    height: 300px;
    margin-left: 50%;
    transform:translateX(-50%);
    vertical-align: middle;
    position: relative;
  }

  .info {
    font-family: 'Agency FB';
    font-weight: bolder;
    color: black;
    font-size: large
  }
</style>
