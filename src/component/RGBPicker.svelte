<script>
  import RangeInput from './RangeInput.svelte';
  import { color } from '../store/color';
</script>

<div class="container">
  <RangeInput bind:intensity={$color.red} label="red" --color-label="red" />
  <RangeInput bind:intensity={$color.green} label="blue" --color-label="green" />
  <RangeInput bind:intensity={$color.blue} label="green" --color-label="blue" />
</div>

<style>
  .container {
    display: flex;
    background: rgb(127, 127, 127, 0.5);
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }
</style>
