<template>
  <div>
    <h2>Message</h2>
  </div>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";

export default {
  async asyncData() {
    const message = await new Promise((resolve) => {
      resolve("hello world");
    });

    // eslint-disable-next-line no-console
    console.log("asyncData is run in message.vue");

    return { message };
  },
} as ComponentOptions<Vue>;
</script>

<style scoped></style>
