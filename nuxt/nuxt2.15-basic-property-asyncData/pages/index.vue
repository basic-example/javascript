<template>
  <div>
    <h1>Root Page</h1>
    <p>asyncData only work in pages</p>
    <p>{{ JSON.stringify(user) }}</p>
    <Message />
  </div>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";
import type { Context } from "@nuxt/types";
import Message from "../components/message.vue";

export default {
  components: {
    Message,
  },
  async asyncData(context: Context) {
    const url = `https://jsonplaceholder.typicode.com/users/1`;
    const response = await fetch(url);
    const user = await response.json();

    // eslint-disable-next-line no-console
    console.log(Object.keys(context));

    return { user };
  },
} as ComponentOptions<Vue>;
</script>

<style scoped></style>
