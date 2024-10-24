import {ColorGenerator} from "./base_generator";
import {HSL_HUE_MAX, HSL_LIGHTNESS_MAX, HSL_SATURATION_MAX} from "../constants";
import {HSLColor} from "../colors/hsl_color";

export class HSLColorGenerator extends ColorGenerator {
    generate(): HSLColor {
        const h = this.getRandomInt(HSL_HUE_MAX);
        const s = this.getRandomInt(HSL_SATURATION_MAX);
        const l = this.getRandomInt(HSL_LIGHTNESS_MAX);

        return new HSLColor(h, s, l);
    }
}