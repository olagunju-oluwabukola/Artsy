<template>
      <div class="min-h-screen bg-gray-100">
        <div class="container mx-auto flex flex-col lg:flex-row">
          <Sidebar
            :categories="categories"
            :priceRange="priceRange"
            :artists="artists"
            @applyFilter="applyFilter"
          />
          <div class="flex-1 p-4">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search"
              class="border p-2 rounded w-full lg:w-1/3 mb-4"
              @input="filterProducts"
            />
            
            <div v-if="filteredProducts.length === 0" class="text-center">
              <p>No products found.</p>
            </div>
            
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProductItem
                v-for="product in paginatedProducts"
                :key="product.id"
                :product="product"
                @click="goToProductDetail(product.id)"
              />
            </div>
    
            <button
              v-if="hasMore"
              @click="loadMore"
              class="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              See more
            </button>
          </div>
        </div>
      </div>
    </template>
    
    <script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import Sidebar from '../components/Sidebar.vue';
    import ProductItem from '../components/ProductItem.vue';
    
    const router = useRouter();
    const searchQuery = ref('');
    const filteredProducts = ref([]);
    const paginatedProducts = ref([]);
    const pageSize = ref(6);
    const currentPage = ref(1);
    const hasMore = ref(true);
    const categories = ref(['Editorials', 'Fashion', 'Optics', 'Art & Museum', 'Nature']);
    const priceRange = ref({ min: 1000, max: 15000 });
    const artists = ref(['Artist A', 'Artist B']);
    
    const products = ref([
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
    ]);
    
    const goToProductDetail = (id) => {
      router.push({ path: `/product/${id}` });
    };
    
    const filterProducts = () => {
      filteredProducts.value = products.value.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase());
        return matchesSearch;
      });
      currentPage.value = 1;
      paginatedProducts.value = filteredProducts.value.slice(0, pageSize.value);
      hasMore.value = filteredProducts.value.length > pageSize.value;
    };
    
    const loadMore = () => {
      const nextPageStart = currentPage.value * pageSize.value;
      const nextPageEnd = nextPageStart + pageSize.value;
      paginatedProducts.value = paginatedProducts.value.concat(filteredProducts.value.slice(nextPageStart, nextPageEnd));
      currentPage.value += 1;
      hasMore.value = nextPageEnd < filteredProducts.value.length;
    };
    
    // Call filterProducts initially to populate products on page load
    filterProducts();
    </script>
    