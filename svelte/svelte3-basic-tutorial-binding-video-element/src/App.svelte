<script lang="ts">
  let mediaCurrentTime = 0;
  let mediaDuration;
  let mediaPaused = true;

  function handleMouseup(event) {
    if (mediaPaused) {
      event.target.play();
    } else {
      event.target.pause();
    }
  }
</script>

<div>
  <h1>App</h1>
  <video
    poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
    src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
    on:mouseup={handleMouseup}
    bind:currentTime={mediaCurrentTime}
    bind:duration={mediaDuration}
    bind:paused={mediaPaused}
  >
    <track kind="captions" />
  </video>
  <p>currentTime: {mediaCurrentTime}</p>
  <p>duration: {mediaDuration}</p>
  <p>paused: {mediaPaused}</p>
</div>

<style>
</style>
