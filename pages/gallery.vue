<template>
  <div class="h-screen p-[3rem]">
    <div class="x-card !max-w-full" v-if="store.previewKey"> 
      <h3> Sharable Link: 
        <span class="bg-slate-200 inline-block px-2"> {{ location?.origin }}/share/{{ store.previewKey }} </span>
      </h3>
    </div>
    <div class="x-card !max-w-full"> 
      <h1> Select your media file:</h1>
    </div>
    <div class="x-card !max-w-full"> 
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-[2rem]">
        <transition-group appear name="fade"> 
          <div class="w-full aspect-square x-border" v-for="(img, idx) in images" :key="img.idx"> 
            <div class="w-full h-full relative">
              <img :src="img.url" class="w-full h-full object-cover" />
              <div class="absolute inset-0 backdrop:bg-slate-500">
                <button class="bg-white rounded-md m-3 px-3" @click="removeImage(idx)">Remove</button>
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

    <div class="x-card !max-w-full"> 
      <button 
        class="bg-orange-300 disabled:bg-orange-100 w-full py-[1rem]" 
        @click="submit" 
        :disabled="!images?.length"
      >{{ loading ? 'Uploading...': 'Upload' }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ID } from "appwrite";
import { IFileImage } from "utils";

const config = useRuntimeConfig();
const store = useAppSession();

const loading = ref<boolean>()
const location = ref<Location>();
const images = ref<IFileImage[]>([]);

onMounted(() => {
  location.value = window.location
})

function removeImage(idx: number) {
  images.value.splice(idx, 1);
}

async function setImages(e: any) {
  const files = (e.target as HTMLInputElement).files || [];
  const fileImages = await Promise.all(
    Array.from(files).map(async (file, idx) => ({
      url: await convertToURL(file), 
      file, 
      idx
    })),
  );

  images.value.push(...fileImages);
}


async function submit() {
  try {
    loading.value = true
    await Promise.all(images.value.map((img, idx) => {
      return pushToAppwrite(img.file, idx)
    }))
    store.value.previewKey = generateKey(images.value.length - 1);
    alert("Successfully published!")
    
  } finally {
    loading.value = false
  }
}



async function pushToAppwrite(file: File, idx: number) {
  const storage = appwriteStorage();
  await storage.createFile(
    config.public.appwriteBucketId, 
    ID.custom(generateKey(idx)),
    file
  );
}

</script>
