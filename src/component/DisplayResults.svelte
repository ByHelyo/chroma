<script lang="ts">
  import { HexFromColor, HslFromColor, RgbFromColor } from '../lib/color';
  import { color } from '../store/color';
</script>

<div>{RgbFromColor($color)}</div>
<div>{HexFromColor($color)}</div>
<div>{HslFromColor($color)}</div>

<style>
  div {
    padding: 16px;
    background: rgb(0, 0, 0, 0.25);
  }
</style>
