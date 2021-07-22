<script lang="ts">
  const emojis = {
    apple: "🍎",
    banana: "🍌",
    carrot: "🥕",
    doughnut: "🍩",
    egg: "🥚",
  };

  export let name;

  const emoji = emojis[name];
</script>

<div>
  <!-- both case same result -->
  <!-- <p>
    <span>{emojis[name]}</span>
  </p> -->
  <!-- both case same result -->
  <!-- <p>
    <span>{name}</span>
  </p> -->
  <!-- both case not same result -->
  <p>
    <span>{emoji}</span>
  </p>
</div>

<style>
</style>
