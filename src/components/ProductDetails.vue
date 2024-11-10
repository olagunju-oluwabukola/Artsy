<template>
  <div class="product-detail container mx-auto py-8">
    <div class="flex flex-col md:flex-row">
      <div class="flex-1">
        <img v-if="product.image" :src="product.image" alt="Product Image" class="w-full h-4/6 rounded-md" />
        <p v-else>Image not available</p>
      </div>

      <div class="flex-1 md:pl-8">
        <h1 class="text-3xl font-bold mb-4">{{ product.name || 'Product Name Unavailable' }}</h1>
        <p class="text-lg font-semibold mb-2">Price: ${{ product.price || 'N/A' }}</p>
        <p class="text-sm mb-4">Created by: <span class="font-bold">{{ product.artist || 'Unknown' }}</span></p>

        <!-- FAQ-style Layout -->
        <div class="faq-section">
          <div class="faq-item">
            <h3 class="text-xl font-bold cursor-pointer" @click="toggleSection('description')">Description</h3>
            <p v-if="isOpen.description" class="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </p>
          </div>
          <div class="faq-item mt-4">
            <h3 class="text-xl font-bold cursor-pointer" @click="toggleSection('listings')">Listings</h3>
            <p v-if="isOpen.listings" class="mt-2">
              Detailed listing information will appear here.
            </p>
          </div>
          <div class="faq-item mt-4">
            <h3 class="text-xl font-bold cursor-pointer" @click="toggleSection('status')">Status</h3>
            <p v-if="isOpen.status" class="mt-2">
              Product status details go here.
            </p>
          </div>
        </div>

        <router-link :to="{ name: 'cart', params: { id: product.id }}" class="mt-4 inline-block" v-if="product.id">
  <button class="bg-blue-500 text-white px-4 py-2 rounded">
    Add to Cart
  </button>
</router-link>

      </div>
    </div>

   
<div class="related-products mt-12">
  <h2 class="text-2xl font-bold mb-4">Related Products</h2>
  <div class="carousel flex space-x-4 overflow-x-auto">
    <router-link
      v-for="related in relatedProducts"
      :key="related.id"
      :to="{ name: 'cart', params: { id: related.id } }"
      class="carousel-item w-48"
    >
      <img :src="related.image" alt="Related Product" class="w-full h-32 rounded-md cursor-pointer" />
      <p class="mt-2 text-center font-semibold">{{ related.name }}</p>
    </router-link>
  </div>
</div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const product = ref({});
const isOpen = ref({ description: false, listings: false, status: false });

const toggleSection = (section) => {
  isOpen.value[section] = !isOpen.value[section];
};

const productData = [
{ id: 1, name: "PHILOMENA '22", price: 3.9, image: "/Rectangle 251.png", category: "Art & Museum", artist: "Artist A", year: "2022" },
  { id: 2, name: "BOOLEAN EGYPTIAN", price: 50, image: "/Rectangle 48.png", category: "Fashion", artist: "Artist B", year: "2021" },
  { id: 3, name: "BLANC", price: 120, image: "/Rectangle 49.png", category: "Nature", artist: "Artist C", year: "2020" },
  { id: 4, name: "PHILOMENA '22", price: 3.9, image: "/Rectangle 50.png", category: "Art & Museum", artist: "Artist A", year: "2022" },
  { id: 5, name: "Ellipsia", price: 50, image: "/Rectangle 52.png", category: "Fashion", artist: "Artist B", year: "2021" },
  { id: 6, name: "The lawmakers", price: 120, image: "/Rectangle 53.png", category: "Nature", artist: "Artist C", year: "2020" },
  { id: 7, name: "Veil", price: 3.9, image: "/Rectangle 54.png", category: "Art & Museum", artist: "Artist A", year: "2022" },
  { id: 8, name: "Alternating", price: 50, image: "/Rectangle 55.png", category: "Fashion", artist: "Artist B", year: "2021" },
  { id: 9, name: "Rosemary", price: 120, image: "/Rectangle 65.png", category: "Nature", artist: "Artist C", year: "2020" },
  { id: 10, name: "Beverly", price: 3.9, image: "/Rectangle 299.png", category: "Art & Museum", artist: "Artist A", year: "2022" },
  { id: 11, name: "BOOLEAN EGYPTIAN", price: 50, image: "/carousel1.svg", category: "Fashion", artist: "Artist B", year: "2021" },
  { id: 12, name: "BLANC", price: 120, image: "/Carousel2.svg", category: "Nature", artist: "Artist C", year: "2020" },
  { id: 13, name: "PHILOMENA '22", price: 3.9, image: "/carousel3.svg", category: "Art & Museum", artist: "Artist A", year: "2022" },
  { id: 14, name: "Ellipsia", price: 50, image: "/carousel4.svg", category: "Fashion", artist: "Artist B", year: "2021" },
  { id: 15, name: "The lawmakers", price: 120, image: "/carousel5.svg", category: "Nature", artist: "Artist C", year: "2020" },
  { id: 16, name: "Veil", price: 3.9, image: "/Rectangle 251.png", category: "Art & Museum", artist: "Artist A", year: "2022" },
  { id: 17, name: "Alternating", price: 50, image: "/Rectangle 55.png", category: "Fashion", artist: "Artist B", year: "2021" },
  { id: 18, name: "Rosemary", price: 120, image: "/Rectangle 50.png", category: "Nature", artist: "Artist C", year: "2020" },
  { id: 19, name: "Beverly", price: 3.9, image: "/Carousel2.svg", category: "Art & Museum", artist: "Artist A", year: "2022" },
  { id: 20, name: "Blanc", price: 50, image: "/Rectangle 49.png", category: "Fashion", artist: "Artist B", year: "2021" },
  { id: 21, name: "veil", price: 120, image: "/Rectangle 299.png", category: "Nature", artist: "Artist C", year: "2020" },
];



onMounted(() => {
  const productId = parseInt(route.params.id, 10); 
  product.value = productData.find((p) => p.id === productId); 
});


const relatedProducts = productData.slice(0, 5);
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.product-detail img {
  max-width: 100%;
  border-radius: 8px;
}
.carousel {
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
.carousel-item {
  scroll-snap-align: start;
}

.carousel {
  display: flex;
  gap: 1rem;
  overflow-x: auto; 
  scroll-snap-type: x mandatory;
}
.carousel-item {
  scroll-snap-align: start;
}

</style>
