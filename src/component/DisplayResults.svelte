<script lang="ts">
  import { color } from '../store/color';
  import { Hsl } from '../lib/Hsl';
  import { writeText } from '@tauri-apps/api/clipboard';

  $: hsl = Hsl.fromColor($color).toString();
</script>

<div class="container">
  <div class="result">
    <div>RGB</div>
    <div>{$color.toRgb()}</div>
  </div>
  <button on:click={() => writeText($color.toRgb())}>
    <img src="/copy.svg" alt="copy icon" />
  </button>
</div>
<div class="container">
  <div class="result">
    <div>HEX</div>
    <div>
      {$color.toHex()}
    </div>
  </div>
  <button on:click={() => writeText($color.toHex())}>
    <img src="/copy.svg" alt="copy icon" />
  </button>
</div>
<div class="container">
  <div class="result">
    <div>HSL</div>
    <div>{hsl}</div>
  </div>
  <button on:click={() => writeText(hsl)}>
    <img src="/copy.svg" alt="copy icon" />
  </button>
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

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 16px;
  }

  button:hover {
    background: rgb(0, 0, 0, 0.1);
  }

  img {
    filter: brightness(0) invert(1);
  }
</style>
