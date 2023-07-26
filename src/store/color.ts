import { writable } from 'svelte/store';
import type { Color } from '../type/color';

export const color = writable<Color>({
  red: 0,
  green: 255,
  blue: 230
});
