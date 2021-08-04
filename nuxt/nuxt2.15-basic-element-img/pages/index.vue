<template>
  <div>
    <h1>Root Page</h1>
    <div v-for="num in picsum" :key="num">
      <!-- local file -->
      <img :src="require(`~/assets/images/${num}-200x200.jpg`)" />
    </div>
    <div class="background-image"></div>
    <hr />
    <!--
    error occured
    <div v-for="photo in photos" :key="photo.id">
      <img src="{{photo.url}}" />
    </div>
    -->
    <div v-for="photo in photos" :key="photo.id">
      <img :src="photo.url" />
    </div>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  data() {
    return {
      photos: null,
      picsum: ["206", "308", "521"],
    };
  },
  async fetch() {
    const response = await fetch("http://jsonplaceholder.typicode.com/photos");
    const photos = await response.json();

    this.photos = photos.slice(0, 3);
  },
} as NuxtAppOptions;
</script>

<style scoped>
.background-image {
  background: url("~/assets/images/206-200x200.jpg");
  width: 200px;
  height: 200px;
}
</style>
