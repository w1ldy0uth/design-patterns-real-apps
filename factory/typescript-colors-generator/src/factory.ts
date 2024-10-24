import {ColorGenerator} from "./generators/base_generator";
import {HEXColorGenerator} from "./generators/hex_generator";
import {RGBColorGenerator} from "./generators/rgb_generator";
import {HSLColorGenerator} from "./generators/hsl_generator";

export class ColorGeneratorFactory {
    static getGenerator(type: string): ColorGenerator {
        switch (type) {
            case 'HEX':
                return new HEXColorGenerator();
            case 'RGB':
                return new RGBColorGenerator();
            case 'HSL':
                return new HSLColorGenerator();
            default:
                throw new Error(`Unsupported color type: ${type}`);
        }
    }
}