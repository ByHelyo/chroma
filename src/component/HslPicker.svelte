<script lang="ts">
  import RangeInput from './RangeInput.svelte';
  import { color } from '../store/color';
  import { Hsl } from '../lib/Hsl';
  import { Color } from '../lib/color';

  let hsl = Hsl.fromColor($color);

  $: updateColor(hsl);

  $: if (!Color.fromHsl(hsl).equals($color)) {
    updateHsl($color);
  }

  function updateColor(hsl: Hsl) {
    $color = Color.fromHsl(hsl);
  }

  function updateHsl(color: Color) {
    hsl = Hsl.fromColor(color);
  }
</script>

<div class="container">
  <RangeInput bind:intensity={hsl.hue} label="red" max="360" --color-label="red" />
  <RangeInput
    bind:intensity={hsl.saturation}
    label="blue"
    max="100"
    isPercentage={true}
    step={0.1}
    --color-label="green"
  />
  <RangeInput
    bind:intensity={hsl.lightness}
    label="green"
    max="100"
    isPercentage={true}
    step={0.1}
    --color-label="blue"
  />
</div>

<style>
  .container {
    display: flex;
    background: rgb(127, 127, 127, 0.4);
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }
</style>
