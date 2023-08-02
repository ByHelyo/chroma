<script lang="ts">
  import { writeText } from '@tauri-apps/api/clipboard';

  export let text;

  let label: string = 'COPY';

  async function copy() {
    await writeText(text);
    label = 'COPIED';
  }

  function leave() {
    label = 'COPY';
  }
</script>

<button on:click={copy} on:mouseleave={leave}>
  <div>{label}</div>
  <img src="/copy.svg" alt="copy icon" />
</button>

<style>
  button {
    border: none;
    background: none;
    cursor: pointer;
    width: 140px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
    gap: 16px;
  }

  button:hover {
    background: rgb(0, 0, 0, 0.1);
  }

  button:active {
    background: rgb(0, 0, 0, 0.3);
  }

  img {
    filter: brightness(0) invert(1);
  }
</style>
