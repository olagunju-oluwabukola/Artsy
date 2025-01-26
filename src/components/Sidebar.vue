<template>
    <div class="w-full hidden md:block  lg:w-64 p-4 border-r">
      <h2 class="text-xl mb-4">Filter</h2>
      <div class="mb-6">
        <h3 class="font-semibold">By category</h3>
        <div v-for="category in categories" :key="category" class="flex items-center mt-2">
          <input type="checkbox" :value="category" v-model="selectedCategories" @change="applyCategoryFilter" />
          <label class="ml-2">{{ category }}</label>
        </div>
      </div>
  
      <div class="mb-6">
        <h3 class="font-semibold">By price</h3>
        <input
          type="range"
          v-model="priceRange"
          :min="priceRangeLimits.min"
          :max="priceRangeLimits.max"
          @input="applyPriceFilter"
        />
        <p>Price: {{ priceRange[0] }} - {{ priceRange[1] }}</p>
      </div>
  
      <div class="mb-6">
        <h3 class="font-semibold">By artist</h3>
        <div v-for="artist in artists" :key="artist" class="flex items-center mt-2">
          <input type="checkbox" :value="artist" v-model="selectedArtists" @change="applyArtistFilter" />
          <label class="ml-2">{{ artist }}</label>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps(['categories', 'priceRange', 'artists']);
  const emit = defineEmits(['applyFilter']);
  
  const selectedCategories = ref([]);
  const priceRangeLimits = ref([10, 150]);
  const selectedArtists = ref([]);
  const priceRange = ref([10, 150]);
  
  const applyCategoryFilter = () => {
    emit('applyFilter', 'category', selectedCategories.value);
  };
  
  const applyPriceFilter = () => {
    emit('applyFilter', 'priceRange', priceRange.value);
  };
  
  const applyArtistFilter = () => {
    emit('applyFilter', 'artist', selectedArtists.value);
  };
  </script>