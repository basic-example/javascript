<script lang="ts">
import { defineComponent, h } from "vue";

export default defineComponent({
  setup() {
    return () => h("div", {}, [h("h2", {}, "Hello Component")]);
  },
});
</script>

<style></style>
