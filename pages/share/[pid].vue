<template>
  <div class="py-[10%] px-[15%] w-full h-screen">
    <div class="flex flex-col w-full h-full">
      <div class="x-card !max-w-full"> 
        <h3> {{name}}'s Slideshows </h3>
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
import { appwriteStorage, convertToURL } from "../../utils";

const modules = [Autoplay, EffectCards];

const config = useRuntimeConfig();
const route = useRoute();

const name = computed(() => (route.params.pid as string).split('-')[0])

const images = ref<string[]>([]);

onMounted(() => {
  getImages()
})

async function getImages() {
  const storage = appwriteStorage();
  const keys = getFileIdsFromPreviewKey(route.params.pid as string);
  if (!keys) return;

  keys.forEach(k => {
    const url = storage.getFileView(config.public.appwriteBucketId, k)
    images.value.push(url.toString())
  })
}

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
