<script lang="ts">
  import RGBPicker from './component/RGBPicker.svelte';
  import { color } from './store/color';
  import DisplayResults from './component/DisplayResults.svelte';
  import { RgbFromColor } from './lib/color';
</script>

<main style="--color: {RgbFromColor($color)}">
  <div class="container">
    <RGBPicker />
    <DisplayResults />
  </div>
</main>

<style>
  main {
    height: 100vh;
    background: var(--color);
    display: flex;
  }

  .container {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>
