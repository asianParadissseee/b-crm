<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore from 'swiper/core'
import { Navigation, Pagination } from 'swiper/modules'
import SliderImg from '@/shared/assets/images/slider-img.svg'

SwiperCore.use([Pagination, Navigation])

const sliderImages = [
  {
    img: SliderImg
  }
]
</script>

<template>
  <swiper
    :navigation="true"
    class="mySwiper"
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
  </swiper>
</template>

<style scoped lang="scss"></style>
