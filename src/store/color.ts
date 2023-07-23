import { writable } from 'svelte/store';

export const color = writable<Color>({
  red: 0,
  green: 191,
  blue: 255
});
