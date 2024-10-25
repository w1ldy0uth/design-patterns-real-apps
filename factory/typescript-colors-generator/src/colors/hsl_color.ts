import {Color} from "./base_color";

export class HSLColor implements Color {
    private _hue: number;
    private _saturation: number;
    private _lightness: number;

    constructor(hue: number, saturation: number, lightness: number) {
        this._hue = hue;
        this._saturation = saturation;
        this._lightness = lightness;
    }

    get hue(): number {
        return this._hue;
    }

    set hue(value: number) {
        this._hue = value;
    }

    get saturation(): number {
        return this._saturation;
    }

    set saturation(value: number) {
        this._saturation = value;
    }

    get lightness(): number {
        return this._lightness;
    }

    set lightness(value: number) {
        this._lightness = value;
    }

    getColor(withUnits = false): string {
        return `hsl(${this._hue}${withUnits ? 'deg' : ''} ${this._saturation}${withUnits ? '%' : ''} ${this._lightness}${withUnits ? '%' : ''})`;
    }
}