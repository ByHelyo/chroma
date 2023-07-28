import type { Color } from '../type/color';

export function RgbFromColor(color: Color): string {
  return `rgb(${color.red}, ${color.green}, ${color.blue})`;
}

export function HexFromColor(color: Color): string {
  return '#' + componentToHex(color.red) + componentToHex(color.green) + componentToHex(color.blue);
}

export function HslFromColor(color: Color): string {
  const red = color.red / 255;
  const green = color.green / 255;
  const blue = color.blue / 255;

  // Find greatest and smallest channel values
  const cmin = Math.min(red, green, blue),
    cmax = Math.max(red, green, blue),
    delta = cmax - cmin;
  let h = 0,
    s = 0,
    l = 0;

  // No difference
  if (delta == 0) h = 0;
  // Red is max
  else if (cmax == red) h = ((green - blue) / delta) % 6;
  // Green is max
  else if (cmax == green) h = (blue - red) / delta + 2;
  // Blue is max
  else h = (red - green) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

function componentToHex(c): string {
  const hex = c.toString(16);
  console.log(hex);
  return hex.length == 1 ? '0' + hex : hex;
}
