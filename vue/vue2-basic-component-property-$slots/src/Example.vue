<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      user: "Lee",
    };
  },
  render(h) {
    var header = this.$slots.header;
    var body = this.$slots.default;
    var footer = this.$slots.footer;

    // not exist in $slots when has context.
    console.log(this.$slots.aaa); // undefined

    return h("div", [h("div", header), h("div", body), h("div", footer)]);
  },
});
</script>

<style></style>
