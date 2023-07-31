<script lang="ts">
  import { color } from '../store/color';
  import { Hsl } from '../lib/Hsl';
  import DisplayResult from './DisplayResult.svelte';

  $: hsl = Hsl.fromColor($color).toString();
</script>

<DisplayResult label="RGB" result={$color.toRgb()} />
<DisplayResult label="HEX" result={$color.toHex()} />
<DisplayResult label="HSL" result={hsl} />
