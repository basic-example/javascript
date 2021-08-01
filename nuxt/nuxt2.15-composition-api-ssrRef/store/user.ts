import { ref, ssrRef } from "@nuxtjs/composition-api";

export const userSSR = ssrRef<{
  name?: string;
} | null>(null);
export const user = ref<{
  name?: string;
} | null>(null);
