<template>
 <div >
 	<el-carousel :interval="4000" type="card" height="200px">
       <el-carousel-item v-for="item in list">
         <h3>{{ item }}</h3>
       </el-carousel-item>
    </el-carousel>
     <el-row>
              <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
     </el-row>
    <el-row type="flex" class="row-bg" justify="space-around">
         <el-col :xs="22" :sm="20" :md="10" :lg="6" v-for="(o, index) in 3" :offset="index > 0 ? 3 : 0">
             <el-card :body-style="{ padding: '0px' }">
                 <img src="http://www.51gpc.com/Public/img/logo-new.png" class="image"  @click="openVideo = true">
                 <el-dialog title="收货地址" v-model="openVideo" @close="onPlayerPause">
                     <video-player  ref="videoPlayer" style="width:100%;" :options="playerOptions"  @pause="onPlayerPause($event)"></video-player>
                 </el-dialog>
                 <div style="padding: 14px;">
                     <div class="bottom clearfix"></div>
                 </div>
             </el-card>
         </el-col>
    </el-row>
 </div>
</template>
<script>
 import VideoPlayer from 'vue-video-player'
  import {getData} from '../../api/api';
 
    export default{
        data (){
            return {
                 list:[],
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
         methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            getData(){
                let self = this;
               getData({}).then(function (response) {
                  console.log("ml");
                    console.log(response);
                    self.list = response.data.tags;
                     console.log(self.list);

                }).catch(function (error) {
                    console.log(error);
                })
            },
           onPlayerPlay(player) {
                 alert('player play!', player)
            },
            onPlayerPause(player) {
              alert('player pause!', player)
                   player.pause();
            },
        },
        mounted() {
            console.log("mounted")
            this.getData();
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
</style>