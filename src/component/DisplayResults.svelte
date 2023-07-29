<script lang="ts">
  import { color } from '../store/color';
  import { Hsl } from '../lib/Hsl';
</script>

<div>{$color.toRgb()}</div>
<div>{$color.toHex()}</div>
<div>{Hsl.fromColor($color).toString()}</div>

<style>
  div {
    padding: 16px;
    background: rgb(0, 0, 0, 0.25);
  }
</style>
