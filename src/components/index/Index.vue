<template>
 <div >
   <Swiper></Swiper>

     <!-- 视频模块 -->
    <div class="video-list">
        <el-row class="video-select" :gutter="10" type="flex"  justify="space-around" align="">

            <!-- 视频选择列表 -->
            <el-col span="8" >
                <el-row  :gutter="10" type="flex"  justify="space-around"  :body-style="{}"  style="padding-top: 10%;">
                    <el-col span="18">
                        <el-select v-model="value" placeholder="请选择视频类型" style="width:100%;">
                            <router-link to="/type?type=advertise" class="">
                                <el-option value="advertise">品牌视频</el-option>
                            </router-link>
                            <router-link to="/type?type=product" class="">
                                <el-option value="production">产品视频 </el-option>
                            </router-link>
                        </el-select>
                        <div style="text-align:right;">
                            <Button type="info" style="width:50%;">微电影</Button>
                        </div>
                    </el-col>
                </el-row>
                <el-row  :gutter="10" type="flex"  justify="space-around" :body-style="{ }" style="padding-top: 20%;">
                    <el-col span="18">
                        <el-row  :gutter="10" type="flex"  justify="space-around" :body-style="{}">
                            <el-col :span="8">
                                <Card style="width:100%;">
                                    <div style="text-align:center">
                                        <Icon type="ios-pricetags-outline" size="40"></Icon>
                                        <p>透明价格</p>
                                    </div>
                                </Card>
                            </el-col>
                            <el-col :span="8">
                                <Card style="width:100%;">
                                    <div style="text-align:center">
                                        <Icon type="ios-pricetags-outline" size="40"></Icon>
                                        <p>免费创意</p>
                                    </div>
                                </Card>
                            </el-col>
                            <el-col :span="8">
                                <Card style="width:100%;">
                                    <div style="text-align:center">
                                        <Icon type="ios-film-outline" size="40"></Icon>
                                        <p>后续推广</p>
                                    </div>
                                </Card>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>

            <!-- 视频播放列表 -->
            <el-col span="16">
                <el-card :body-style="{ padding: '0px'}" >
                    <img :src="videos[0].cover"  style="width:100%;height:100%;" class="image"  @click="showVideo(videos[0])">

                </el-card>
            </el-col>
        </el-row>

        <Row>
            <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 7, offset: 1 }" v-for="(o, index) in videos" v-if="index !== 0">
                <Card style="width:100%;">
                    <div>
                        <img style="width:100%;" :src="o.cover" class="image"  @click="showVideo(o)">
                        <Row>
                            <Col span="16" style="text-align:left;">{{o.name}}</Col>
                            <Col span="8"  style="text-align:right;">￥{{o.price}}</Col>
                        </Row>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
   <el-dialog title="视频" v-model="openVideo" @close="playerReadied">
     <video-player v-if="openVideo"  ref="videoPlayer" style="width:100%;height:100%;" :options="playerOptions"  @pause="onPlayerPlay"  @ready="playerReadied"></video-player>
     <Row>
       <Col span="16" style="text-align:left;">{{videos[0].name}}</Col>
       <Col span="8"  style="text-align:right;">1200</Col>
     </Row>
   </el-dialog>
   
     <!-- 新闻模块   -->
     <div class="news-list">
         <Row :gutter="26" >
             <Col span="24" style="padding:1% 2%">
                 <div>新闻资讯</div>
             </Col>
         </Row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="8">
              <router-link to="/type" class="">
                      <span class="news-item">1111111111广告宣传片拍摄要义</span>
              </router-link>
          </el-col>
        </el-row>
        <el-row>
     </el-row>
     </div>
 </div>
</template>
<script>
 import VideoPlayer from 'vue-video-player';
 import {getVideo} from '../../api/api';
 import Swiper from '../views/Swiper.vue';
 import VideoList  from '../commonLayout/VideoList.vue';
 
    export default{
        data (){
            return {
              videos: [{}],
                 fristVideoList : {
                    cover:"",
                    name:"",
                 },
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
                        sources: [],
                  },
                   options: [{
                          value: '选项1',
                          label: '品牌视频'
                        }, {
                          value: '选项2',
                          label: '产品视频'
                        }],
                        value: '',

            };
        },
        components: {
             Swiper,
             VideoList
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            getData(){
                getVideo({}).then((response) => {
                   console.log(response.data.data)
                  console.log(this.playerOptions)
                  this.videos = response.data.data.data
//                  console.log(this.playerOptions.length)
                 }).catch(function (error) {
                    console.log(error);
                 })
             },
          showVideo (video) {
              console.log(this.playerOptions)
              this.playerOptions.sources[0] = {type: 'video/mp4', src: video.url}
            this.openVideo = true
          },
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
          console.log(this.playerOptions)
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
         flex-wrap:wrap;
       }
       .news-item{color:#97a8be;}
       .video-list{padding:0 20px 20px 20px ;}
       .video-select{text-align:center;}

</style>