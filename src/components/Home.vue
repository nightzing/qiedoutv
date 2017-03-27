<template>
    <div >
        <el-menu theme="dark" default-active="1" class="el-menu-demo" router mode="horizontal" @select="handleSelect">
        <el-menu-item class="is-active" default-active="index" default-openeds="index" index="index">首页</el-menu-item>
        <el-menu-item index="model" v-popover:popover1>制作流程
                <el-popover
                  ref="popover1"
                  placement="bottom"
                  title="制作流程"
                  width="500"
                  trigger="hover"
                  content="">
                </el-popover>
        </el-menu-item>
            <el-menu-item index="rule">作品类型</el-menu-item>
            <el-menu-item index="rule">关于我们</el-menu-item>
            <el-menu-item index="rule">加入茄豆</el-menu-item>

            <!-- <el-menu-item index="model">模型管理</el-menu-item>
            <el-menu-item index="rule">规则管理</el-menu-item>
            <el-menu-item index="vari">变量管理</el-menu-item> -->
        </el-menu>
        
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  import {getData} from '../api/api';
    export default{
        data (){
            return {
                 list:[],
            };
        },
         methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            getData(){
                let self = this
               getData({}).then(function (response) {
                  console.log("ml");
                    console.log(response);
                    self.list = response.data.tags;
                     console.log(self.list);

                }).catch(function (error) {
                    console.log(error);
                })
            }
        },
        mounted() {
            console.log("mounted")
            this.getData();
        }
    }
</script>

<style scoped>
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