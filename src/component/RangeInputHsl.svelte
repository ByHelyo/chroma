<script lang="ts">
  export let label: string;
  export let intensity: number;
  export let min = '0';
  export let max: string;
  export let isPercentage = false;
  export let step: number = 1;
</script>

<div class="container">
  <label class="label" for={label}>{label}</label>
  <input type="range" id={label} bind:value={intensity} {min} {max} {step} />
  {#if isPercentage}
    <label class="result" for={label}>{intensity}%</label>
  {:else}
    <label class="result" for={label}>{intensity}</label>
  {/if}
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  input {
    width: 300px;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label {
    border-radius: 16px;
    width: 60px;
    height: 60px;
  }

  .result {
    border-radius: 4px;
    height: 60px;
    width: 100px;
    background: rgb(0, 0, 0, 0.1);
  }
</style>
