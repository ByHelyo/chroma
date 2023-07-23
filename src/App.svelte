<script lang="ts">
  import RGBPicker from './component/RGBPicker.svelte';
  import { color } from './store/color';
  import { darkTheme } from './store/theme';
  import type { Color } from './type/color';

  function updateTheme(color: Color) {
    return color.red <= 127 || color.green <= 127 || color.blue <= 127;
  }

  $: $darkTheme = updateTheme($color);
  $: rgbstring = `rgb(${$color.red}, ${$color.green}, ${$color.blue})`;
</script>

<main class:dark={$darkTheme} style="--color: {rgbstring}">
  <div class="container">
    <RGBPicker />
  </div>
</main>

<style>
  main {
    height: 100vh;
    background: var(--color);
  }

  .container {
    padding: 16px;
  }

  .dark {
    color: white;
  }
</style>
