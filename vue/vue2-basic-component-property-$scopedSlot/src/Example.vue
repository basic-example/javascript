<script lang="ts">
import Vue from "vue";
import { NormalizedScopedSlot } from "vue/types/vnode";

export default Vue.extend({
  data() {
    return {
      me: "Yoo",
    };
  },
  render(h) {
    return h("div", {}, [
      (this.$scopedSlots as Record<string, NormalizedScopedSlot>).main({
        user: this.$data.me,
      }),
    ]);
  },
});
</script>

<style></style>
