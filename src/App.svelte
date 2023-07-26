<script lang="ts">
  import RGBPicker from './component/RGBPicker.svelte';
  import { color } from './store/color';

  $: rgbstring = `rgb(${$color.red}, ${$color.green}, ${$color.blue})`;
</script>

<main style="--color: {rgbstring}">
  <div class="container">
    <RGBPicker />
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
  }
</style>
