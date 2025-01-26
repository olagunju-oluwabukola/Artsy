<template>
    <div class="container mx-auto px-4 py-8">
      <!-- Header Section -->
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold mb-2">Upcoming Drops</h1>
        <p class="text-gray-600">Turn on notifications so that no drops will miss you.</p>
        <button
          class="mt-4 px-6 py-2 text-black rounded-md border border-rounded-2xl transition"
        >
          Notify me
        </button>
      </div>
  
      <!-- Cards Section -->
      <div class="grid gap-8">
        <div
          v-for="(drop, index) in drops"
          :key="index"
          class="border rounded-lg md:flex shadow-md overflow-hidden"
        >
          <div class="relative md:w-1/2 p-2 md:">
            <img
              :src="drop.image"
              :alt="drop.title"
              class="w-full h-48 object-cover"
            />
            <div
              class="absolute bottom-4 left-4 bg-white bg-opacity-50 text-white px-4 py-2 rounded-lg"
            >
              Time remaining
              <div class="text-lg font-bold">{{ drop.timeRemaining }}</div>
            </div>
            <button
              class="absolute top-4 right-4 px-4 py-1 text-sm rounded-full"
              :class="{
                'bg-blue-500 text-white': drop.status === 'UPCOMING',
                'bg-green-500 text-white': drop.status === 'LIVE',
                'bg-gray-500 text-white': drop.status === 'Ended',
              }"
            >
              {{ drop.status }}
            </button>
          </div>
          <div class="p-4">
            <h2 class="font-bold text-lg mb-2">{{ drop.title }}</h2>
            <p class="text-gray-600 text-sm mb-4">{{ drop.description }}</p>
            <div class="text-sm text-gray-500 mb-2">
              <span class="font-bold">Creator:</span> {{ drop.creator }}
            </div>
            <a
              href="#"
              class="text-blue-600 hover:underline text-sm font-semibold"
            >
              Join now
            </a>
          </div>
        </div>
      </div>
      <div class="mx-auto text-center my-2 md:my-5">
        <button
          class=" mt-4 px-6 py-2 text-black rounded-md border border-rounded-2xl transition"
        >
          See more
        </button>
      </div>
    
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    setup() {
      const drops = ref([
        {
          title: "Eyo: Eko For Show",
          description:
            "Lorem ipsum dolor sit amet consectetur. Arnet odio aenean quis vitae temporus. Bid nunc tempus aliquam lectus ut vulputate.",
          timeRemaining: "06 hrs : 45 min : 22 s",
          image: "/Rectangle 82.png",
          status: "UPCOMING",
          creator: "Aliya Minat",
        },
        {
          title: "Ginger Suburbs",
          description:
            "Lorem ipsum dolor sit amet consectetur. Arnet odio aenean quis vitae temporus. Bid nunc tempus aliquam lectus ut vulputate.",
          timeRemaining: "06 hrs : 45 min : 22 s",
            image: "/Rectangle 65.png",
          status: "LIVE",
          creator: "Tina Benson",
        },
        {
          title: "Sink",
          description:
            "Lorem ipsum dolor sit amet consectetur. Arnet odio aenean quis vitae temporus. Bid nunc tempus aliquam lectus ut vulputate.",
          timeRemaining: "Auction Ended 10hrs ago",
            image: "/Rectangle 48.png",
          status: "Ended",
          creator: "Tina Benson",
        },
        {
          title: "Wrapped in Gold",
          description:
            "Lorem ipsum dolor sit amet consectetur. Arnet odio aenean quis vitae temporus. Bid nunc tempus aliquam lectus ut vulputate.",
          timeRemaining: "Auction Ended 2hrs ago",
            image: "/Rectangle 251.png",
          status: "Ended",
          creator: "Tina Benson",
        },
      ]);
  
      return {
        drops,
      };
    },
  });
  </script>
  
  