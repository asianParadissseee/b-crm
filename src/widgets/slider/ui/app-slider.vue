<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore from 'swiper/core'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import SliderImg from '@/shared/assets/images/slider-img.svg'

SwiperCore.use([Pagination, Navigation, Autoplay])

const sliderImages = [
  {
    img: SliderImg
  }
]

const autoplay = {
  delay: 5000
}
</script>

<template>
  <swiper
    class="mySwiper"
    :autoplay="autoplay"
    :loop="true"
  >
    <swiper-slide
      v-for="(slider, id) in sliderImages"
      :key="id"
    >
      <img
        :src="slider.img"
        alt="image of slider"
        width="984"
        height="401"
      />
    </swiper-slide>
    <swiper-slide
      v-for="(slider, id) in sliderImages"
      :key="id"
    >
      <img
        :src="slider.img"
        alt="image of slider"
        width="984"
        height="401"
      />
    </swiper-slide>
  </swiper>
</template>


