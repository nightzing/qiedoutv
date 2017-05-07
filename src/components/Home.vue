<template>
    <div>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
                  <el-card class="box-card" style="height:80px;">
                    <img src="http://www.51gpc.com/Public/img/logo-new.png" class="image">
                    <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                    </div>
                  </el-card>
            </div>
          </el-col>
          <el-col :span="16"><div class="grid-content bg-purple-light">拍片咨询：40000</div></el-col>
        </el-row>

        <el-menu theme="dark" default-active="1" class="el-menu-demo" router="" mode="horizontal">
          <el-menu-item class="is-active" default-active="" default-openeds="" index="index">首页</el-menu-item>
          <el-menu-item index="process" v-popover:popover1>制作流程
              <el-popover
                ref="popover1"
                placement="bottom"
                title="制作流程"
                width="500"
                trigger="hover"
                content="">
                  <p>拍摄意向需求沟通</p>
                  <p>确立拍摄类型、文案创意策划</p>
                  <p>摄制组搭建、拍摄</p>
                  <p>后期制作</p>
                  <p>审片修改</p>
                  <p>成果交付</p>
              </el-popover>
          </el-menu-item>
          <el-menu-item index="type" v-popover:popover2>作品类型
               <el-popover
                  ref="popover2"
                  placement="bottom"
                  title="制作流程"
                  width="500"
                  trigger="hover"
                  content="">

                      
                      

                    <p>产品展示片</p>
                    <p>产品宣传片</p>
                    <p>品牌宣传片</p>
                    <p>微电影：爱情MV、亲情MV
                               高端个人形象宣传片</p>
                </el-popover>
          </el-menu-item>
          <el-menu-item index="about">关于茄豆</el-menu-item>
        </el-menu>
        
        <div class="content">
            <router-view></router-view>
        </div>

        <!--footer-->
       <Footer></Footer>
    </div>
</template>

<script>
  import Footer from './Footer.vue'
  import {getData} from '../api/api'
    export default{
        components: {
             Footer,
        },
        watch: {

        },
        methods: {

        }
    }
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
    text-align: right;
    line-height: 80px;
    padding:0 20px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 90px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
   .content {
        background-color: aliceblue;
    }
    .el-menu-demo{

    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
        text-align: center;
      }
      
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      
      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
</style>