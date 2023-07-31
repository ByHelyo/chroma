<script>
  import { writeText } from '@tauri-apps/api/clipboard';

  export let text;
</script>

<button on:click={() => writeText(text)}>
  <div>COPY</div>
  <img src="/copy.svg" alt="copy icon" />
</button>

<style>
  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 16px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 16px;
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
