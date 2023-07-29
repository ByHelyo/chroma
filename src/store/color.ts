import { writable } from 'svelte/store';
import { Color } from '../lib/color';

export const color = writable<Color>(new Color(0, 255, 230));
