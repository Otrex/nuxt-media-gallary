<template>
  <div class="x-container">
    <div class="x-card">
      <h1>Welcome to MShare</h1>
      <p>Please provide your name so we can setup your unique profile</p>
      <div class="mt-2">
        <input
          type="text"
          class="w-full"
          v-model="store.name"
          placeholder="Name: e.g. Obisike Treasure"
        />
      </div>
      <div class="mt-2">
        <input
          type="button"
          @click="navigateTo('/gallery')"
          :disabled="!!!store.name"
          class="w-full bg-orange-400 disabled:bg-orange-200 disabled:text-gray-600"
          value="Create"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useAppSession();
</script>
