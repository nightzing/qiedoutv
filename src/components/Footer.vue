<template>
	<div class="container">
		<div class="about-us">
			<el-row align="middle">
			  <el-col :xs="24" :sm="12" :md="12" :lg="12">
					<div class="about-us-left">
						<el-row type="flex" class="row-bg" justify="" align="middle">
	                	    <el-col :span="8" class="tr">
		                	    <span class="partners">联系方式</span>
		                    </el-col>
	                	    <el-col :span="8">
								<Icon type="ios-telephone-outline"></Icon>
								 电话:400  800  0000
		                    </el-col>
	                	</el-row>
	                	<el-row type="flex" class="row-bg" justify="center" align="middle">
	                	    <el-col :span="8">
								&nbsp;&nbsp;<Icon type="android-contact"></Icon>
								微信:en698324(黄黄)
		                    </el-col>
	                	</el-row>
	                	<el-row type="flex" class="row-bg" justify="center" align="middle">
	                	    <el-col :span="8">
								&nbsp;&nbsp;<Icon type="android-contact"></Icon>
								 QQ:500206488(大猫)
		                    </el-col>
	                	</el-row>
					</div>
			  </el-col>
			  <el-col class="row-bg" :xs="24" :sm="12" :md="12" :lg="12">
	                <div class="about-us-right">
	                	<el-row type="flex" class="row-bg"></el-row>
	                	<el-row type="flex" class="row-bg" justify="space-around" align="middle">
	                	    <el-col :span="4">
		                	    <span class="partners">推广渠道</span>
		                    </el-col>
	                	    <el-col :span="4">
		                	  <a href="">
		                	  	<img src="http://www.51gpc.com/uploads/2016-11-03/youku.png">
		                	  </a>
		                    </el-col>
	                	 	<el-col :span="4">
		                	  <a href="">
		                	  	<img src="http://www.51gpc.com/uploads/2016-11-03/youku.png">
		                	  </a>
		                    </el-col>
		                    <el-col :span="4">
		                	  <a href="">
		                	  	<img src="http://www.51gpc.com/uploads/2016-11-03/youku.png">
		                	  </a>
		                    </el-col>
		                    <el-col :span="4">
		                	  <a href="">
		                	  	<img src="http://www.51gpc.com/uploads/2016-11-03/youku.png">
		                	  </a>
		                    </el-col>
	                	</el-row>
	                </div>
			  </el-col>
			</el-row>
		</div>

		<div class="copyright">
			<el-row align="middle">
				 <el-col :span="24">
				 	<p class="padlf" style="text-align:center;">
				 	<span>浙ICP备17015770号-1</span></p>
				 </el-col>
				 <el-col :span="24">
				 <p class="padlf" style="text-align:center;">
				 <span>浙公安备案000000</span></p>
				 </el-col>
			</el-row>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	export  default {
	}
</script>

<style scoped>
	.container{
		text-align:center;
		font-size:14px;
		background-color: #434c53;
	  	color:#b0b6b8;

	}
	.about-us{ }
	  .el-col {
	    border-radius: 4px;
	  }
	  .el-col img{
	    width: 100%;
	    height: 100%;
	  }
	  .partners{
	      font-size: 14px;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
	  .row-bg {
	    padding: 10px 0;
	  }
	  .copyright{

	  }
</style>