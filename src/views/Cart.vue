<template>
  <div class="cart-page container mx-auto py-8">
    <div class="flex flex-col items-center">
      <img :src="product.image" alt="Product Image" class="w-1/2 h-auto rounded-md" />
      <h1 class="text-3xl font-bold mt-4">{{ product.name || 'Product Name Unavailable' }}</h1>
      <p class="text-lg font-semibold mt-2">Price per item: ${{ product.price || 'N/A' }}</p>

   
      <div class="flex items-center mt-4">
        <button @click="decreaseQuantity" class="bg-gray-200 px-3 py-1 rounded-l">-</button>
        <span class="px-4">{{ quantity }}</span>
        <button @click="increaseQuantity" class="bg-gray-200 px-3 py-1 rounded-r">+</button>
      </div>
      <p class="text-lg font-semibold mt-2">Total Price: ${{ totalPrice }}</p>

      <form @submit.prevent="processPayment" class="payment-form mt-4 w-full max-w-md">
        <label class="block mb-2 text-lg">Your Name</label>
        <input v-model="name" type="text" required placeholder="Full Name" class="border rounded px-4 py-2 w-full mb-4" />

        <label class="block mb-2 text-lg">Email Address</label>
        <input v-model="email" type="email" required placeholder="Email Address" class="border rounded px-4 py-2 w-full mb-4" />

        <label class="block mb-2 text-lg">Payment Details</label>
        <input v-model="cardNumber" type="text" required placeholder="Card Number" class="border rounded px-4 py-2 w-full mb-4" />
        <input v-model="expiryDate" type="text" required placeholder="Card Expiry" class="border rounded px-4 py-2 w-full mb-4" />
        <input v-model="cvc" type="text" required placeholder="CVC" class="border rounded px-4 py-2 w-full mb-4" />

        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded w-full">Pay ${{ totalPrice }}</button>
      </form>
    </div>

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="bg-white rounded-lg p-6 w-1/2 max-w-sm">
          
          <img src="/public/Woman get online delivery.png" alt="">
        
        <p class="mb-2 text-[12px]">Hey {{ name }}. Thanks for you purchase of ${{ totalPrice }}.</p>
        <p class="text-[12px] mb-2"> to being <router-link to="/" class="text-blue-600">Artsy🎉.</router-link> </p>
      <router-link to="/marketplace" @click="closeModal" class="bg-blue-500 text-white px-4 py-2 rounded w-full">Close</router-link>
      </div>
    
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const product = ref({});
const quantity = ref(1);
const name = ref('');
const email = ref('');
const cardNumber = ref('');
const expiryDate = ref('');
const cvc = ref('');
const showModal = ref(false);

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

const totalPrice = computed(() => (product.value.price || 0) * quantity.value);

const increaseQuantity = () => {
  quantity.value += 1;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value -= 1;
};

const processPayment = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
.fixed {
  position: fixed;
}
.bg-gray-800.bg-opacity-75 {
  background-color: rgba(31, 41, 55, 0.75);
}
</style>




