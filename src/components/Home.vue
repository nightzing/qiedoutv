<template>
    <div>
        <div class="layout">
            <Menu mode="horizontal" theme="dark" active-name="1">
                <Row type="flex" justify="center" class="code-row-bg">
                    <i-col :xs="24" :sm="4" :md="6" :lg="9">
                        <div class="layout-logo">
                            <img src="http://orukskdvh.bkt.clouddn.com/logo/logo.jpg" style="width:100%;height:100%;"/>
                        </div>
                    </i-col>
                    <i-col :xs="24" :sm="16" :md="12" :lg="10">
                        <div class="layout-nav">

                            <router-link to="/index" class="">
                                <Menu-item name="1">
                                    首页
                                </Menu-item>
                            </router-link>

                             <router-link to="/process" class="">
                                <Menu-item name="4">
                                    关于茄豆
                                </Menu-item>
                            </router-link>

                            <router-link to="/process" class="">
                             <Poptip placement="bottom" trigger="hover" width="300">
                                   <Menu-item name="2">
                                       制作流程
                                   </Menu-item>
                                    <div class="" slot="content">
                                       <span>拍摄意向需求沟通</span>
                                       <p>确立拍摄类型、文案创意策划</p>
                                       <p>摄制组搭建、拍摄</p>
                                       <p>后期制作</p>
                                       <p>审片修改</p>
                                       <p>成果交付</p>
                                    </div>
                                </Poptip>
                               
                            </router-link>

                            <router-link to="/process" class="">
                                  <Poptip placement="bottom" trigger="hover" width="400">
                                   <Menu-item name="3">
                                       作品类型
                                   </Menu-item>
                                    <div class="api" slot="content">
                                       <p>产品展示片</p>
                                       <p>产品宣传片</p>
                                       <p>品牌宣传片</p>
                                       <p>微电影：爱情MV、亲情MV
                                           高端个人形象宣传片</p>
                                    </div>
                                </Poptip>
                            </router-link>

                        </div>
                    </i-col>
                    <i-col :xs="24" :sm="4" :md="6" :lg="5">
                        <div class="" style="color:#fff; font-size:16px;" >电话：400-880-1056</div>
                    </i-col>
                </Row>
            </Menu>
            <div class="layout-content">
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
            <div class="layout-copy">
                <!--footer-->
                <qd-Footer></qd-Footer>
            </div>
            <Back-top></Back-top>
        </div>

        <!--<el-row :gutter="20" type="flex" align="middle" justify="">-->
            <!--<el-col :span="16">-->
                <!--<div class="">-->
                    <!--<el-row  type="flex"   align="middle">-->
                        <!--<el-col  :lg="8">-->
                            <!--<img src="http://placehold.it/217x60" class="image">-->
                        <!--</el-col>-->
                        <!--<el-col :lg="8">-->
                            <!--<span>广告视频制作专家</span>-->
                        <!--</el-col>-->
                    <!--</el-row>-->
                <!--</div>-->
            <!--</el-col>-->
            <!--<el-col :span="8" >-->
                <!--<div class="">拍片咨询：40000</div>-->
            <!--</el-col>-->
        <!--</el-row>-->

        <!--<el-row>-->
            <!--<el-col  :lg="20">-->
                <!--<el-menu theme="dark" default-active="1" class="el-menu-demo" router="" mode="horizontal">-->
                    <!--<el-menu-item class="is-active" default-active="" default-openeds="" index="index">首页</el-menu-item>-->
                    <!--<el-menu-item index="process" v-popover:popover1>制作流程-->
                        <!--<el-popover-->
                                <!--ref="popover1"-->
                                <!--placement="bottom"-->
                                <!--title="制作流程"-->
                                <!--width="100%"-->
                                <!--trigger="hover"-->
                                <!--content="100%">-->
                            <!--<p>拍摄意向需求沟通</p>-->
                            <!--<p>确立拍摄类型、文案创意策划</p>-->
                            <!--<p>摄制组搭建、拍摄</p>-->
                            <!--<p>后期制作</p>-->
                            <!--<p>审片修改</p>-->
                            <!--<p>成果交付</p>-->
                        <!--</el-popover>-->
                    <!--</el-menu-item>-->
                    <!--<el-menu-item index="type" v-popover:popover2>作品类型-->
                        <!--<el-popover-->
                                <!--ref="popover2"-->
                                <!--placement="bottom"-->
                                <!--title="作品类型"-->
                                <!--width="100%"-->
                                <!--trigger="hover"-->
                                <!--content="">-->
                            <!--<p>产品展示片</p>-->
                            <!--<p>产品宣传片</p>-->
                            <!--<p>品牌宣传片</p>-->
                            <!--<p>微电影：爱情MV、亲情MV-->
                                <!--高端个人形象宣传片</p>-->
                        <!--</el-popover>-->
                    <!--</el-menu-item>-->
                    <!--<el-menu-item index="about">关于茄豆</el-menu-item>-->
                <!--</el-menu>-->
            <!--</el-col>-->
        <!--</el-row>-->
    </div>
</template>

<script>
  import Footer from './Footer.vue'
  import {getData} from '../api/api'
    export default{
        components: {
             qdFooter: Footer,
        },
        watch: {

        },
        methods: {

        }
    }
</script>

<style scoped>



 .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 110px;
        height: 56px;
        <!--background-image: url(http://orukskdvh.bkt.clouddn.com/logo/logo.jpg);-->
        <!--background-size: contain;-->
        <!--background-repeat: no-repeat;-->
        border-radius: 3px;
        float: left;
        position: relative;
        top: 3%;
        left: 20px;
        line-height: 56px;
    }
    .layout-nav{
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>