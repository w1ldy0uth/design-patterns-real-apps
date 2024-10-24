import {Color} from "./base_color";

export class HEXColor implements Color {
    private _colorValue: string;
    private _alpha: string;

    constructor(colorValue: string, alpha: string) {
        this._colorValue = colorValue;
        this._alpha = alpha;
    }

    get colorValue(): string {
        return this._colorValue;
    }
    set colorValue(value: string) {
        this._colorValue = value;
    }
    get alpha(): string {
        return this._alpha;
    }
    set alpha(value: string) {
        this._alpha = value;
    }

    getColor(): string {
        return `#${this._colorValue}${this._alpha}`;
    }
}