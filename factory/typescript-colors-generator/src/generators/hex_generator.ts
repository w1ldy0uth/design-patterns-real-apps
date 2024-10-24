import {ColorGenerator} from "./base_generator";
import {HEX_ALPHA_MAX, HEX_MAX} from "../constants";
import {HEXColor} from "../colors/hex_color";

export class HEXColorGenerator extends ColorGenerator {
    generate(withAlpha = false): HEXColor {
        const color = this.getRandomInt(HEX_MAX).toString(16).padStart(6, '0').toUpperCase();
        const alpha = withAlpha ? this.getRandomInt(HEX_ALPHA_MAX).toString(16).padStart(2, '0').toUpperCase() : 'FF';

        return new HEXColor(color, alpha);
    };
}