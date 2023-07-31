<script>
  import { color } from '../store/color';
  import RangeInputRgb from './RangeInputRgb.svelte';
</script>

<div class="container">
  <RangeInputRgb bind:intensity={$color.red} label="red" --color-label="red" />
  <RangeInputRgb bind:intensity={$color.green} label="blue" --color-label="green" />
  <RangeInputRgb bind:intensity={$color.blue} label="green" --color-label="blue" />
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
