<script lang="ts">
  let sports = ["🚣🏻‍♀️", "🏊🏻‍♀️", "🏌🏻‍♂️", "🏄🏻‍♂️"];
  let fruits = ["🍎", "🍇", "🍌", "🍍"];
  let selectedSport = null;
  let checkedFruits = [];
</script>

<div>
  <h1>App</h1>
  {#each sports as sport}
    <label>
      <input type="radio" bind:group={selectedSport} value={sport} />
      {sport}
    </label>
  {/each}
  <hr />
  {#each fruits as fruit}
    <label>
      <input type="checkbox" bind:group={checkedFruits} value={fruit} />
      {fruit}
    </label>
  {/each}
  <p>selected: {selectedSport}</p>
  <p>checkedList: {checkedFruits}</p>
</div>

<style>
</style>
