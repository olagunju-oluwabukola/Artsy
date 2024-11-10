<!-- src/components/ProductItem.vue -->
<template>
    <div @click="$emit('click')" class="border p-4 rounded cursor-pointer hover:shadow-lg">
      <img :src="product.image" alt="product title" class="w-full h-40 object-cover mb-2" />
      <div class="flex justify-between md:grid">
        <h3 class="text-sm md:text-lg font-thin">{{ product.name.toUpperCase() }}</h3>
      <p class="text-gray-500">${{ product.price.toFixed(2) }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
    }
  }
  </script>
  