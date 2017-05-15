<template>
 <div >
   <Swiper></Swiper>
     <!-- 视频模块 -->
    <div class="video-list">
      <el-row>
           <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
       </el-row>
       <el-row type="flex" class="row-bg" justify="space-around">
           <el-col :xs="12" :sm="20" :md="10" :lg="6" v-for="(o, index) in 3" :offset="index > 0 ? 3 : 0">
               <el-card :body-style="{ padding: '0px' }" >
                   <img src="http://www.51gpc.com/Public/img/logo-new.png" class="image"  @click="openVideo = true">
                   <el-dialog title="收货地址" v-model="openVideo" @close="playerReadied">
                       <video-player  ref="videoPlayer" style="width:100%;" :options="playerOptions"  @pause="onPlayerPlay"  @ready="playerReadied"></video-player>
                   </el-dialog>
                   <div style="padding: 14px;">
                       <div class="bottom clearfix"></div>
                   </div>
               </el-card>
           </el-col>
       </el-row>

       <el-row>
           <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
       </el-row>
       <el-row type="flex" class="row-bg" justify="space-around">
           <el-col :xs="22" :sm="20" :md="10" :lg="6" v-for="(o, index) in 3" :offset="index > 0 ? 3 : 0">
               <el-card :body-style="{ padding: '0px' }">
                   <img src="http://www.51gpc.com/Public/img/logo-new.png" class="image"  @click="openVideo = true">
                   <el-dialog title="收货地址" v-model="openVideo" @close="playerReadied">
                       <video-player  ref="videoPlayer" style="width:100%;" :options="playerOptions"  @pause="onPlayerPlay"  @ready="playerReadied"></video-player>
                   </el-dialog>
                   <div style="padding: 14px;">
                       <div class="bottom clearfix"></div>
                   </div>
               </el-card>
           </el-col>
      </el-row>
    </div>
   
     <!-- 新闻模块   -->
     <div class="news-list">
        <el-row>
           <el-col :span="24"><div class="grid-content">资讯</div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="8">
              <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">广告宣传片拍摄要义</el-breadcrumb-item>
              </el-breadcrumb>
              <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">广告宣传片拍摄要义啊看手机丢了饭卡结束代理反馈</el-breadcrumb-item>
              </el-breadcrumb>
              <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              </el-breadcrumb>
          </el-col>
          <el-col :span="8">
              <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              </el-breadcrumb>
              <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              </el-breadcrumb>
              <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              </el-breadcrumb>
          </el-col>
        </el-row>
        <el-row>
         
     </el-row>
     </div>
 </div>
</template>
<script>
 import VideoPlayer from 'vue-video-player'
 import {getData,getUrl} from '../../api/api';
 import Swiper from '../views/Swiper.vue';
 
    export default{
        data (){
            return {
                 carouselImgList:[],
                 openVideo : false,
                 playerOptions: {
                        // component options
                        start: 0,
                        playsinline: false,
                        // videojs options
                        muted: true,
                        language: 'en',
                        autoplay: true,
                        playbackRates: [0.7, 1.0, 1.5, 2.0],
                        sources: [{
                          type: "video/mp4",
                          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                        }],
                        poster: "https://surmon-china.github.io/vue-video-player/static/images/author.jpg",
                  }
            };
        },
        components: {
             Swiper,
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            // getCarousel(){
            //     let that = this;
            //    getUrl({}).then(function (response) {
            //       console.log("ml");
            //         console.log(response);
            //         let data = response.data;
            //           that.carouselImgList = data.img;
            //           console.log(data.img);

            //     }).catch(function (error) {
            //         console.log(error);
            //     })
            // },
           onPlayerPlay(player) {
                  console.log('player play!', player)
            },
            onPlayerPause(player) {
                 player.pause();
            },
            playerReadied(player) {
                 player.pause();
            },
        },
        mounted() {
            console.log("mounted")
            // this.getCarousel();
        },
        computed: {
              player() {
                return this.$refs.videoPlayer.player
              }
        },
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
       }
       .grid-content {
         border-radius: 4px;
         min-height: 36px;
       }
       .row-bg {
         padding: 10px 0;
         background-color: #f9fafc;
       }
       .el-breadcrumb{padding:5px;text-align:center;}

</style>