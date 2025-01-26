<template>
    <div class="bids-list-container">
      <h2 class="text-xl font-semibold my-4 md:my-5">Top bids from popular creators</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(bid, index) in bids"
          :key="index"
          class="bid-card p-4 border mb-3 md:mb-8 rounded-lg shadow-md">
          <div>
            <font-awesome-icon icon="heart" class="icon text-xl text-red-500 border border-rounded p-2 mb-2"/>
          </div>
          <img :src="bid.image" alt="" class="h-40 w-full">
          <h3 class="text-xl  font-bold my-4 ">{{ bid.title }}</h3>
          <p class="text-sm font-bold mb-2">Creator: <span class="font-thin">{{ bid.creator }}</span></p>
          <p class="text-sm font-bold mb-2">Date: {{ bid.date }}</p>
          <p class="text-sm font-bold">Highest bid: <span class="font-thin">{{ bid.highestBid }} ETH</span></p>
          <div class="flex justify-between items-center mt-4 bg-gray-200 p-4">
            <p class="text-lg font-semibold">{{ bid.currentBid }} ETH</p>
            <button
              class="px-4 py-2 bg-black text-white rounded-lg flex items-center space-x-2"
            >
              <i class="fa-solid fa-gavel"></i>
              <span>Place bid</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "BidsListComponent",
    setup() {
      const bids = ref([
        {
        image: "/Rectangle 58.png",
          title: "Out of the box",
          creator: "Dan Murray",
          date: "12/08/22",
          highestBid: "0.57",
          currentBid: "0.987",
        },

        {
        image: "/Rectangle 82.png",
        title: "Falling apart",
        creator: "Jacob Banks",
        date: "12/08/22",
        highestBid: "0.34",
        currentBid: "0.99",
        },

        {
        image: "/Rectangle 82.png",
        title: "Falling apart",
        creator: "Jacob Banks",
        date: "12/08/22",
        highestBid: "0.34",
        currentBid: "0.99",
        },
      ]);
  
      return { bids };
    },
  };
  </script>
  
  <style scoped>
  .bids-list-container {
    padding: 1rem 0;
  }

  .icon{
    border-radius: 50%;
  }
  </style>
  