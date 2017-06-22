<template>
		<div class="swiper-list">
			<!-- swiper -->
	     <swiper :options="swiperOption" >
			 <swiper-slide  v-for="value in carouselImgList" v-bind:style="{backgroundImage: 'url(' + value.url + ')'}"></swiper-slide>
	       <swiper-slide style="background-image:url(../../static/img/2.jpg)"></swiper-slide>
	       <swiper-slide style="background-image:url(../../static/img/3.jpg)"></swiper-slide>
	       <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
	       <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
	       <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
	     </swiper>
		</div>
	     
</template>
<script>
 	import VueAwesomeSwiper from 'vue-awesome-swiper'
 	import {getBanner} from '../../api/api';

	export  default {
		data() {
		     return {
		       carouselImgList:[],
		       swiperOption: {
		         pagination: '.swiper-pagination',
		         paginationClickable: true,
		         nextButton: '.swiper-button-next',
		         prevButton: '.swiper-button-prev',
		         spaceBetween: 30,
		         effect: 'fade'
		       }
		     }
		   },
		  methods: {
            getData(){
                let that = this;
                getBanner({all}).then(function (response) {
                   console.log("banner");
                   console.log(response);
                   that.carouselImgList  = response.data.data;
                    console.log(that.carouselImgList);
                 }).catch(function (error) {
                    console.log(error);
                 })
             },
        },
        mounted() {
            console.log("swiper")
            this.getData();
        },
        computed: {

        },
	}
</script>

<style scoped>
	.swiper-slide {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30rem;
    overflow: auto;
  }
  .swiper-button-white{

  }
  .swiper-button-prev{
  		left:8% !important;
  }
   .swiper-button-next{
   		right:8% !important;
  }

</style>