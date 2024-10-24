import {ColorGenerator} from "./base_generator";
import {RGB_MAX} from "../constants";
import {RGBColor} from "../colors/rgb_color";

export class RGBColorGenerator extends ColorGenerator {
    generate(withAlpha = false): RGBColor {
        const r = this.getRandomInt(RGB_MAX);
        const g = this.getRandomInt(RGB_MAX);
        const b = this.getRandomInt(RGB_MAX);
        const a = withAlpha ? this.getRandomInt() : 1; // for alpha channel

        return new RGBColor(r, g, b, a);
    }
}