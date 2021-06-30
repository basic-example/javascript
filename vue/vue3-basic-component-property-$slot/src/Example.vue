<script lang="ts">
import { Slot, defineComponent, h } from "vue";

export default defineComponent({
  render() {
    const header = this.$slots.header;
    const body = this.$slots.default;
    const footer = this.$slots.footer;

    return h("div", [
      (header as Slot)(),
      (body as Slot)({ user: "Lee" }),
      (footer as Slot)(),
    ]);
  },
});
</script>

<style></style>
