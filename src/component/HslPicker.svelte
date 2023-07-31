<script lang="ts">
  import { color } from '../store/color';
  import { Hsl } from '../lib/Hsl';
  import { Color } from '../lib/color';
  import RangeInputHsl from './RangeInputHsl.svelte';

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
  <RangeInputHsl bind:intensity={hsl.hue} label="HUE" max="360" />
  <RangeInputHsl bind:intensity={hsl.saturation} label="SAT" max="100" isPercentage={true} step={0.1} />
  <RangeInputHsl bind:intensity={hsl.lightness} label="LGT" max="100" isPercentage={true} step={0.1} />
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
