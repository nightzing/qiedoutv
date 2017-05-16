<template>
	<div>
	     <!-- swiper -->
	     <swiper :options="swiperOption">
	       <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/kennedy_meadows_0.jpg)"></swiper-slide>
	       <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/yosemite_national_park_0.jpg)"></swiper-slide>
	       <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/mount_rainier.jpg)"></swiper-slide>
	       <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/snoqualmie_pass_0.jpg)"></swiper-slide>
	       <swiper-slide style="background-image:url(http://cdn.gousa.cn/sites/default/files/styles/original_with_watermark/public/three_sisters_wilderness_0.jpg)"></swiper-slide>
	       <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
	       <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
	       <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
	     </swiper>
	   </div>
</template>
<script type="text/ecmascript-6">
	export  default {
		data() {
		     return {
		       swiperOption: {
		         pagination: '.swiper-pagination',
		         paginationClickable: true,
		         nextButton: '.swiper-button-next',
		         prevButton: '.swiper-button-prev',
		         spaceBetween: 30,
		         effect: 'fade'
		       }
		     }
		   }
	}
</script>

<style scoped>
	.swiper-slide {
    background-position: center;
    background-size: cover;
  }
</style>