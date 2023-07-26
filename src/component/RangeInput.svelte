<script lang="ts" xmlns="http://www.w3.org/1999/html">
  export let label: string;
  export let intensity: number;
</script>

<div class="container">
  <label class="label" for={label} />
  <input type="range" id={label} bind:value={intensity} min="0" max="255" />
  <label class="result" style="--color: #ffffff" for={label}>{intensity}</label>
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
    font-size: 24px;
  }

  .label {
    border-radius: 16px;
    width: 60px;
    height: 60px;
    background: var(--color-label);
  }

  .result {
    font-weight: bold;
    border-radius: 4px;
    height: 60px;
    width: 100px;
    background: rgb(0, 0, 0, 0.1);
  }
</style>
