<template>
  <div class="py-[10%] px-[15%] w-full h-screen">
    <div class="flex flex-col w-full h-full">
      <div class="x-card !max-w-full"> 
        <h3> Obisike's Slideshows </h3>
      </div>
      <div class="pb-20"> 
        <swiper
          :effect="'cards'"
          :grabCursor="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: true,
          }"
          :modules="modules"
        >
          <template v-for="(img, idx) in images" :key="idx">
            <swiper-slide class="h-[20rem]">
              <div class="w-full">
                <img :src="img" class="w-full object-cover" loading="lazy" />
              </div>
            </swiper-slide>
          </template>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards, Autoplay } from "swiper/modules";

const modules = [Autoplay, EffectCards];

const images = ref<string[]>([
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-2.jpg',
  'https://swiperjs.com/demos/images/nature-3.jpg',
  'https://swiperjs.com/demos/images/nature-4.jpg',
  'https://swiperjs.com/demos/images/nature-5.jpg',
]);

</script>
<style scoped>
.swiper-cards{
  overflow:visible;
  height: 50%;
}
.swiper-cards .swiper-slide {
  transform-origin:center bottom;
  -webkit-backface-visibility:hidden;
  backface-visibility:hidden;
  overflow:hidden;
}
</style>
