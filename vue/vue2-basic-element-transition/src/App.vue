<template>
  <div>
    <h1>App Component</h1>
    <!-- use 'appear' for initial render transition -->
    <transition
      appear
      appear-class="custom-appear"
      appear-to-class="custom-appear-to"
      appear-active-class="custom-appear-active"
    >
      <p>hello World</p>
    </transition>
    <hr />
    <button @click="show = !show">toggle</button>
    <transition duration="1000" name="custom-effect">
      <div v-if="show">
        <p>hello {{ count }}</p>
      </div>
    </transition>
    <hr />
    <button @click="count++">increase count</button>
    <!--
      error occurred when below option
      @enter="enter"
      @leave="leave"
    -->
    <transition
      name="custom-effect"
      mode=""
      :duration="{ enter: 1000, leave: 1000 }"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <div :key="count">
        <p>hello {{ count }}</p>
      </div>
    </transition>
    <hr />
    <!--
      more transition option examples
      :duration="1000"
      :duration="{ enter: 500, leave: 800 }"
      mode=""
      mode="in-out"
      mode="out-in"
    -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      count: 1,
      show: true,
      type: "duration-number",
    };
  },
  methods: {
    afterEnter: () => {
      console.log("afterEnter");
    },
    afterLeave: () => {
      console.log("afterLeave");
    },
    beforeEnter: () => {
      console.log("beforeEnter");
    },
    beforeLeave: () => {
      console.log("beforeLeave");
    },
    enter: (el: HTMLElement, done: () => void) => {
      console.log("enter");
      done(); // afterEnter not fire without done()
    },
    enterCancelled: () => {
      console.log("enterCancelled");
    },
    leave: (el: HTMLElement, done: () => void) => {
      console.log("leave");
      done(); // afterLeave not fire without done()
    },
    leaveCancelled: () => {
      console.log("leaveCancelled");
    },
  },
});
</script>

<style>
.custom-appear-active,
.custom-effect-enter-active,
.custom-effect-leave-active {
  transition: all 1s;
}
.custom-appear,
.custom-effect-enter,
.custom-effect-leave-to {
  font-size: 100px;
  color: red;
}

.custom-appear-to,
.custom-effect-enter-to,
.custom-effect-leave {
  font-size: 200px;
  color: blue;
}
</style>
