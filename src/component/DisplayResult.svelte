<script lang="ts">
  import CopyButton from './CopyButton.svelte';

  export let label: string;

  export let result: string;
</script>

<div class="container">
  <div class="result">
    <div>{label}</div>
    <div>{result}</div>
  </div>
  <CopyButton text={result} />
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(127, 127, 127, 0.4);
  }

  .result {
    display: flex;
    gap: 128px;
    padding-inline-start: 16px;
  }
</style>
