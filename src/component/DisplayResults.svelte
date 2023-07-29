<script lang="ts">
  import { color } from '../store/color';
  import { Hsl } from '../lib/Hsl';
</script>

<div class="container">
  <div class="result">{$color.toRgb()}</div>
  <button>
    <img src="/public/copy.svg" alt="copy icon" />
  </button>
</div>
<div class="container">
  <div class="result">{$color.toHex()}</div>
  <button>
    <img src="/public/copy.svg" alt="copy icon" />
  </button>
</div>
<div class="container">
  <div class="result">{Hsl.fromColor($color).toString()}</div>
  <button>
    <img src="/public/copy.svg" alt="copy icon" />
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
    padding: 16px 0 16px 16px;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  button:hover {
    background: red;
  }
</style>
