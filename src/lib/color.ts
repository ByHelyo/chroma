import type { Hsl } from './Hsl';

export class Color {
  red: number;
  green: number;
  blue: number;

  constructor(red: number, green: number, blue: number) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  static fromHsl(hsl: Hsl): Color {
    // Must be fractions of 1
    const hue = hsl.hue;
    const saturation = hsl.saturation / 100;
    const lightness = hsl.lightness / 100;

    const c = (1 - Math.abs(2 * lightness - 1)) * saturation,
      x = c * (1 - Math.abs(((hue / 60) % 2) - 1)),
      m = lightness - c / 2;
    let r = 0,
      g = 0,
      b = 0;

    if (0 <= hue && hue < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= hue && hue < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= hue && hue < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= hue && hue < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= hue && hue < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= hue && hue < 360) {
      r = c;
      g = 0;
      b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return new Color(r, g, b);
  }

  toRgb(): string {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  toHex(): string {
    return '#' + componentToHex(this.red) + componentToHex(this.green) + componentToHex(this.blue);
  }

  equals(color: Color): boolean {
    return this.blue === color.blue && this.red === color.red && this.green === color.green;
  }
}

function componentToHex(c): string {
  const hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}
