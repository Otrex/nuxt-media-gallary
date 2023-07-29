<template>
  <div class="x-container">
    <div class="x-card">
      <h1>Welcome to MShare</h1>
      <p>Please provide your name so we can setup your unique profile</p>
      <div class="mt-2">
        <input
          type="text"
          v-model="store.name"
          class="w-full"
          placeholder="Name: e.g. Obisike Treasure"
        />
      </div>
      <div class="mt-2">
        <input
          type="button"
          @click="create"
          :disabled="!!!store.name"
          class="w-full bg-orange-400 disabled:bg-orange-200 disabled:text-gray-600"
          value="Create"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSessionStorage } from "@vueuse/core";
import { Config } from "../utils";

const store = useSessionStorage(Config.STORE_NAME, { name: "" });

async function create() {
  navigateTo("/gallery");
}
</script>
