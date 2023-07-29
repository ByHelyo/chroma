<script lang="ts">
  import RGBPicker from './component/RGBPicker.svelte';
  import { color } from './store/color';
  import DisplayResults from './component/DisplayResults.svelte';
  import HsvPicker from './component/HslPicker.svelte';
</script>

<main style="--color: {$color.toRgb()}">
  <div class="container">
    <RGBPicker />
    <HsvPicker />
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
