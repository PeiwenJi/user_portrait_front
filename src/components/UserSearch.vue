<template>
  <div style="width: 100%">
    <el-card>
      <div>
        <el-row>
          <el-col :span="2">
            <el-input v-model="user_id" placeholder="请输入用户ID"></el-input>
          </el-col>
          <el-col :span="4" style="text-align: center">
            <el-button
              icon="el-icon-search"
              circle
              style="background-color: #ff6b6b; color: white"
              @click="search"
              v-loading.fullscreen.lock="search_loading"
              element-loading-text="Searching in..."></el-button>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card style="margin-top: 10px; height: 850px" v-show="info_visible">
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
                    <el-tag color="#C1232B" style="color: white; font-weight: bold">Name</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{userName}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户性别-->
            <div style="margin-top: 6px">
                <el-row>
                  <el-col :span="10">
                    <el-tag color="#B5C334" style="color: white; font-weight: bold">Gender</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{gender}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户生日-->
            <div style="margin-top: 6px">
                <el-row>
                  <el-col :span="10">
                    <el-tag color="#FCCE10" style="color: white; font-weight: bold">Birthday</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{birthday}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户邮箱-->
            <div style="margin-top: 6px">
                <el-row>
                  <el-col :span="10">
                    <el-tag color="#E87C25" style="color: white; font-weight: bold">Email</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{email}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户电话-->
            <div style="margin-top: 6px">
                <el-row>
                  <el-col :span="10">
                    <el-tag color="#9BCA63" style="color: white; font-weight: bold">Mobile</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{mobile}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户职业-->
            <div style="margin-top: 6px">
                <el-row>
                  <el-col :span="10">
                    <el-tag color="#F0805A" style="color: white; font-weight: bold">Job</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{job}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户国籍-->
            <div style="margin-top: 6px">
                <el-row>
                  <el-col :span="10">
                    <el-tag color="#8e8eff" style="color: white; font-weight: bold">Nationality</el-tag>
                  </el-col>
                  <el-col :span="14">
                    <span class="info">{{nationality}}</span>
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
                    <el-tag color="#C1232B" style="color: white; font-weight: bold">Marriage</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{marriage}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户政治面貌-->
            <div style="margin-top: 6px">
                <el-row>
                  <el-col :span="12">
                    <el-tag color="#B5C334" style="color: white; font-weight: bold">PoliticalFace</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{politicalFace}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户来源-->
            <div style="margin-top: 6px">
                <el-row>
                  <el-col :span="12">
                    <el-tag color="#FCCE10" style="color: white; font-weight: bold">Source</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{source}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户QQ-->
            <div style="margin-top: 6px">
                <el-row>
                  <el-col :span="12">
                    <el-tag color="#E87C25" style="color: white; font-weight: bold">QQ</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{QQ}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户账户余额-->
            <div style="margin-top: 6px">
                <el-row>
                  <el-col :span="12">
                    <el-tag color="#9BCA63" style="color: white; font-weight: bold">Money</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{money}} ￥</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户注册时间-->
            <div style="margin-top: 6px">
                <el-row>
                  <el-col :span="12">
                    <el-tag color="#F0805A" style="color: white; font-weight: bold">RegisterTime</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{registerTime}}</span>
                  </el-col>
                </el-row>
              </div>
            <!--用户上一次登录时间-->
            <div style="margin-top: 6px">
                <el-row>
                  <el-col :span="12">
                    <el-tag color="#8e8eff" style="color: white; font-weight: bold">LastLoginTime</el-tag>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{lastLoginTime}}</span>
                  </el-col>
                </el-row>
              </div>
          </el-col>
        </el-card>
        <!--行为特征-->
        <el-card style="height: 400px; margin-top: 10px">
          <div slot="header" class="title">
            <span>行为特征</span>
          </div>
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
                <el-col :span="14">
                  <el-tag color="#C1232B" style="color: white; font-weight: bold">ConsumptionCycle</el-tag>
                </el-col>
                <el-col :span="10">
                  <span class="info">ConsumptionCycle</span>
                </el-col>
              </el-row>
            </div>
            <!--客单价-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="14">
                  <el-tag color="#B5C334" style="color: white; font-weight: bold">AvgOrderAmount</el-tag>
                </el-col>
                <el-col :span="10">
                  <span class="info">AvgOrderAmount</span>
                </el-col>
              </el-row>
            </div>
            <!--支付方式-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="14">
                  <el-tag color="#FCCE10" style="color: white; font-weight: bold">PaymentCode</el-tag>
                </el-col>
                <el-col :span="10">
                  <span class="info">PaymentCode</span>
                </el-col>
              </el-row>
            </div>
            <!--单笔最高-->
            <div style="margin-top: 10px">
              <el-row>
                <el-col :span="14">
                  <el-tag color="#E87C25" style="color: white; font-weight: bold">MaxOrderAmount</el-tag>
                </el-col>
                <el-col :span="10">
                  <span class="info">MaxOrderAmount</span>
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
<!--            &lt;!&ndash;用户婚姻状况&ndash;&gt;-->
<!--            <div>-->
<!--              <el-row>-->
<!--                <el-col :span="12">-->
<!--                  <el-tag color="#C1232B" style="color: white; font-weight: bold"><i class="el-icon-s-custom"></i>  Marriage</el-tag>-->
<!--                </el-col>-->
<!--                <el-col :span="12">-->
<!--                  <span class="info">{{marriage}}</span>-->
<!--                </el-col>-->
<!--              </el-row>-->
<!--            </div>-->
<!--            &lt;!&ndash;用户政治面貌&ndash;&gt;-->
<!--            <div style="margin-top: 6px">-->
<!--              <el-row>-->
<!--                <el-col :span="12">-->
<!--                  <el-tag color="#B5C334" style="color: white; font-weight: bold"><i class="el-icon-s-custom"></i>  PoliticalFace</el-tag>-->
<!--                </el-col>-->
<!--                <el-col :span="12">-->
<!--                  <span class="info">{{politicalFace}}</span>-->
<!--                </el-col>-->
<!--              </el-row>-->
<!--            </div>-->
<!--            &lt;!&ndash;用户来源&ndash;&gt;-->
<!--            <div style="margin-top: 6px">-->
<!--              <el-row>-->
<!--                <el-col :span="12">-->
<!--                  <el-tag color="#FCCE10" style="color: white; font-weight: bold"><i class="el-icon-s-custom"></i>  Source</el-tag>-->
<!--                </el-col>-->
<!--                <el-col :span="12">-->
<!--                  <span class="info">{{source}}</span>-->
<!--                </el-col>-->
<!--              </el-row>-->
<!--            </div>-->
<!--            &lt;!&ndash;用户QQ&ndash;&gt;-->
<!--            <div style="margin-top: 6px">-->
<!--              <el-row>-->
<!--                <el-col :span="12">-->
<!--                  <el-tag color="#E87C25" style="color: white; font-weight: bold"><i class="el-icon-s-custom"></i>  QQ</el-tag>-->
<!--                </el-col>-->
<!--                <el-col :span="12">-->
<!--                  <span class="info">{{QQ}}</span>-->
<!--                </el-col>-->
<!--              </el-row>-->
<!--            </div>-->
          </el-col>
        </el-card>
        <!--用户价值-->
        <el-card style="height: 400px; margin-top: 10px">
          <div slot="header" class="title" style="text-align: right">
            <span>用户价值</span>
          </div>
        </el-card>
      </el-col>
    </el-card>
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
        source: '',
        QQ: '',
        money: '0.00',
        registerTime: '',
        lastLoginTime: '',

        search_loading: false,
        info_visible: false,
        isMan: true,
        isWoman: false
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
            const {data: res} = await this.$http.get("searchCustomerInfo?id=" + this.user_id);
            this.userName = res[0]
            this.gender = res[1];
            this.birthday = res[2];
            this.email = res[3];
            this.mobile = res[4];
            this.job = res[5];
            this.nationality = res[6];
            this.marriage = res[7];
            this.politicalFace = res[8];
            this.source = res[9];
            this.QQ = res[10];
            this.money = res[11];
            this.registerTime = res[12];
            this.lastLoginTime = res[13];

            if(this.gender == '男'){
              this.isMan = true;
              this.isWoman = false;
            }else {
              this.isMan = false;
              this.isWoman = true;
            }

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
    color: #ff6b6b;
  }

  .title {
    font-family: PingFang SC;
    font-size: large;
    font-weight: bold;
    color: #ff6b6b
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
