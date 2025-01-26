<template>
  <div>
    <p class="font-bold my-4 text-lg md:text-xl">Here’s an overview of products actively on auction, explore!</p>
  </div>
<AuctionComp />
<BidComp />

</template>

<script setup>
import BidComp from '../components/BidComp.vue';
import AuctionComp from '../components/AuctionComp.vue';
</script>

<style>

</style>