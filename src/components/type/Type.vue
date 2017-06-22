<template>
    <section class="videoList">
        <Row :gutter="26" >
            <Col span="24" style="padding:1% 2%">
                <div>视频列表</div>
            </Col>
        </Row>
        <Row>
          <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 7, offset: 1 }" v-for="(o, index) in videos">
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

      <el-dialog title="视频" v-model="openVideo" @close="playerReadied">
        <video-player v-if="openVideo"  ref="videoPlayer" style="width:100%;height:100%;" :options="playerOptions"  @pause="onPlayerPlay"  @ready="playerReadied"></video-player>
        <Row>
          <Col span="16" style="text-align:left;">{{videos[0].name}}</Col>
          <Col span="8"  style="text-align:right;">1200</Col>
        </Row>
      </el-dialog>
    </section>
</template>

<script type="text/ecmascript-6">
	import { getRules,editRule,deleteRule,addRule,searchRuleByRuleID, getVideoType } from '../../api/api';
    import VideoPlayer from 'vue-video-player';

	export  default {
		data(){
		return{
		  videos: [{}],
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
                sources: [{}],
                poster: "http://placehold.it/900x400",
                },
            };
		},
		
		methods:{
		  fetchData () {
		    let type = this.$route.query.type
        getVideoType(type).then(res => {
          console.log(res.data.data)
          this.videos = res.data.data
          console.log(this.videos)
        })
		    console.log(this.$route.query.type)
      },
      showVideo (video) {
        console.log(this.playerOptions)
        this.playerOptions.sources[0] = {type: 'video/mp4', src: video.url}
        this.openVideo = true
      },
      playerReadied(player) {
        player.pause();
      },
      onPlayerPlay(player) {
        console.log('player play!', player)
      },
      onPlayerPause(player) {
        player.pause();
      },
			formatter(row, column) {
				let idx = parseInt(row.Status);
				//console.log('idx is '+idx + this.ruleStatus[idx]);
				return this.ruleStatus[idx];
			  },
		 deleteRow(row) {
					let id = row.id
					console.log(id)
					let para = {
						id:row.id,
                        RuleID: row.RuleID,
                        RuleType: row.RuleType,
                        Status: row.Status,
                        RuleContext: row.RuleContext,
                        RuleDesc: row.RuleDesc,
					};
					deleteRule(para).then((res) => {
					console.log("已删除")
					this.getRules();
					});
				},
				handleEdit(row){
					let id = row.id
					console.log(id)
					this.editFormVisible = true;
					this.editFormTile = '编辑';
					this.editForm.RuleID = row.RuleID;
					this.editForm.RuleContext = row.RuleContext;
					this.editForm.RuleType = row.RuleType;
					this.editForm.Status = row.Status;
					this.editForm.RuleDesc = row.RuleDesc;
				},
				handleAdd(){
					//var _this = this;
					this.editFormVisible = true;
					this.editFormTile = '新增';
					this.editForm.RuleID = 0;
					this.editForm.RuleContext = '';
					this.editForm.RuleType = 1;
					this.editForm.Status = 1;
					this.editForm.RuleDesc = '';
				},
				getRules(){
					getRules({}).then(function (response) {
						console.log(response);
						this.rules = response.data
					}.bind(this)).catch(function (error) {
						console.log(error);
					})
				},
				searchRule(){
					let param = {
						RuleID: this.filter,
					};
					let ruleID = param['RuleID'];
					if(!ruleID){
                        this.getRules();
					    return;
                    }
					console.log(ruleID);
					searchRuleByRuleID(param).then(function (res){
						console.log("jk");
						console.log(res);
						this.rules = res.data
					}.bind(this)).catch(function (err){
						alert(err);
						console.log(err);
					})
					
				},
				 editSubmit: function () {
					var _this = this;

					_this.$refs.editForm.validate((valid) => {
						if (valid) {
							_this.$confirm('确认提交吗？', '提示', {}).then(() => {
								_this.editLoading = true;
								_this.btnEditText = '提交中';
								if (_this.editFormTile =='新增') {
									//新增
									console.log(".......");
									let para = {
										RuleID: _this.editForm.RuleID,
										RuleContext: _this.editForm.RuleContext,
										RuleType: _this.editForm.RuleType,
										Status: _this.editForm.Status,
										RuleDesc: _this.editForm.RuleDesc,
									};
									addRule(para).then((res) => {
										_this.editLoading = false;
										_this.btnEditText = '提 交';
										_this.$notify({
											title: '成功',
											message: '提交成功',
											type: 'success'
										});
										_this.editFormVisible = false;
										_this.getRules();
									});
								} else {
									//编辑
									console.log("else.......");
									let para = {
										id:_this.editForm.RuleID,
										RuleID: _this.editForm.RuleID,
										RuleContext: _this.editForm.RuleContext,
										RuleType: _this.editForm.RuleType,
										Status: _this.editForm.Status,
										RuleDesc: _this.editForm.RuleDesc,
									};
									editRule(para).then((res) => {
										_this.editLoading = false;
										_this.btnEditText = '提 交';
										_this.$notify({
											title: '成功',
											message: '提交成功',
											type: 'success'
										});
										_this.editFormVisible = false;
										_this.getRules();
                                });
                            }
                        });
                    }
                });

            },
				
			
		},
		mounted(){
//				this.getRules();
				this.fetchData();
				}
	}
</script>

<style scoped>
	.rulesty {
        margin-top: 30px;
    }
    .tool{
        margin-bottom: 10px;
    }

</style>