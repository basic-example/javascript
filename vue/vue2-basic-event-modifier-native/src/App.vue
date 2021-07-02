<template>
  <div>
    <h1>App Component</h1>
    <button @click="clicked">app button</button>
    <hr />
    <p>basic</p>
    <CustomButton />
    <hr />
    <p>@click="clicked" @click2="clicked2" :trigger-emit="false"</p>
    <CustomButton :trigger-emit="false" @click="clicked" @click2="clicked2" />
    <hr />
    <p>@click.native="clicked" @click2="clicked2" :trigger-emit="false"</p>
    <CustomButton
      :trigger-emit="false"
      @click.native="clicked"
      @click2="clicked2"
    />
    <hr />
    <p>@click="clicked" @click2="clicked2" :trigger-emit="true"</p>
    <CustomButton :trigger-emit="true" @click="clicked" @click2="clicked2" />
    <hr />
    <p>@click.native="clicked" @click2="clicked2" :trigger-emit="true"</p>
    <CustomButton
      :trigger-emit="true"
      @click.native="clicked"
      @click2="clicked2"
    />
    <p>
      conclusion: dom native event should add native modifier when using parent
      component. otherwise it should not trigger callback despite of definiton.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CustomButton from "./CustomButton.vue";

export default Vue.extend({
  components: {
    CustomButton,
  },
  methods: {
    clicked() {
      console.log("clicked in App");
    },
    clicked2() {
      console.log("clicked2 in App");
    },
  },
});
</script>

<style></style>
