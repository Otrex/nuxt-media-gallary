<template>
  <div class="h-screen p-[3rem]">
    <div class="x-card !max-w-full"> 
      <h1> Select your media file:</h1>
    </div>
    <div class="x-card !max-w-full"> 
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-[2rem]">
        <transition-group appear name="fade"> 
          <div class="w-full aspect-square x-border" v-for="img in images" :key="img.idx"> 
            <div class="w-full h-full relative">
              <img :src="img.url" class="w-full h-full object-cover" />
              <div class="absolute inset-0 backdrop:bg-slate-500">
                <button >Remove</button>
              </div>
            </div>
          </div>
        </transition-group>
        <div class="w-full aspect-square"> 
          <label class="x-input__file w-full h-full"> 
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"/></svg>
            <p> Add Image</p>
            <input
              type="file"
              ref="imageField"
              @change="setImages"
              name="images"
              multiple
              class="hidden"
              accept="image/*"
            />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { convertToURL } from "../utils";

interface IFileImage { url: string; file: File, idx: number }
const images = ref<IFileImage[]>([]);

async function setImages(e: Event) {
  const files = (e.target as HTMLInputElement).files || [];
  const fileImages = await Promise.all(
    Array.from(files).map(async (file, idx) => ({
      url: await convertToURL(file), file, idx
    })),
  );

  images.value.push(...fileImages);
}

function removeImage(idx: number) {
  images.value.splice(idx, 1);
}

</script>
