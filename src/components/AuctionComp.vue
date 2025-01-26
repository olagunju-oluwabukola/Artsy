<template>
    <div class="carousel-container">
      <div class="relative overflow-hidden">
        
        <div
          class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        >
          <div
            v-for="(group, groupIndex) in groupedItems"
            :key="groupIndex"
            class="flex-shrink-0 w-full flex justify-around space-x-4 group relative"
          >
            <div
              v-for="(item, index) in group"
              :key="index"
              class="carousel-item  md:w-1/3 h-96 relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-700 ease-in-out group-hover:scale-105"
            >
            <p>
                
            </p>
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
              <div class="absolute inset-0 flex items-center justify-center">
  <div class="bg-white bg-opacity-50 text-white text-sm md:text-lg px-4 py-2 rounded-md shadow-md">
    {{ item.timeRemaining }}
  </div>
</div>

            </div>
          </div>
        </div>
        
        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          <button
            v-for="(group, index) in groupedItems"
            :key="index"
            @click="setActiveIndex(index)"
            :class="[ 'w-3 h-3 rounded-full transition', index === activeIndex ? 'bg-white' : 'bg-gray-500' ]"
          ></button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted, onUnmounted } from "vue";
  
  export default {
    name: "CarouselComponent",
    setup() {
      const carouselItems = ref([
        { image: "/Rectangle 247.svg", title: "Item 1", timeRemaining: "6hr 40mins 18s" },
        { image: "/Rectangle 246.svg", title: "Item 2", timeRemaining: "6hr 40mins 16s" },
        { image: "/Rectangle 245.svg", title: "Item 3", timeRemaining: "6hr 40mins 14s" },
        { image: "/Rectangle 55.png", title: "Item 4", timeRemaining: "6hr 39mins 12s" },
        { image: "/Rectangle 65.png", title: "Item 5", timeRemaining: "6hr 38mins 10s" },
        { image: "/Rectangle 54.png", title: "Item 6", timeRemaining: "6hr 37mins 08s" },
        { image: "/Rectangle 299.png", title: "Item 7", timeRemaining: "6hr 36mins 06s" },
        { image: "/Rectangle 251.png", title: "Item 8", timeRemaining: "6hr 35mins 04s" },
        { image: "/Rectangle 48.png", title: "Item 9", timeRemaining: "6hr 34mins 02s" },
      ]);
  
      const activeIndex = ref(0);
      const interval = ref(null);
  
     
      const groupedItems = computed(() => {
        const groups = [];
        for (let i = 0; i < carouselItems.value.length; i += 3) {
          groups.push(carouselItems.value.slice(i, i + 3));
        }
        return groups;
      });
  
      const setActiveIndex = (index) => {
        activeIndex.value = index;
      };
  
      const nextSlide = () => {
        activeIndex.value = (activeIndex.value + 1) % groupedItems.value.length;
      };
  
      onMounted(() => {
        interval.value = setInterval(nextSlide, 5000);
      });
  
      onUnmounted(() => {
        clearInterval(interval.value);
      });
  
      return { groupedItems, activeIndex, setActiveIndex };
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    padding: 1rem 0;
    overflow: hidden;
  }
  
  button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: gray;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: white;
  }
  
  .carousel-item {
    transform: translateX(0);
    transition: transform 0.7s ease-in-out;
  }
  
  .carousel-item:hover {
    transform: scale(1.05);
  }
  </style>
  