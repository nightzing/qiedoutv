<template>
 <div >
 	<el-carousel :interval="4000" type="card" height="200px">
       <el-carousel-item v-for="item in list">
         <h3>{{ item }}</h3>
       </el-carousel-item>
    </el-carousel>
    <el-row>
      <el-col :span="6" v-for="(o, index) in 3" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
        <video-player  ref="videoPlayer" style="width:100%;" :options="playerOptions"></video-player>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
            </div>
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
              playerOptions: {
                        // component options
                        start: 0,
                        playsinline: false,
                        // videojs options
                        muted: true,
                        language: 'en',
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