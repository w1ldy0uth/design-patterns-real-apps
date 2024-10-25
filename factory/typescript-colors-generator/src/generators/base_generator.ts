import {Color} from "../colors/base_color";

export abstract class ColorGenerator {
    abstract generate(withAlpha?: boolean): Color;

    getRandomInt(max: number = 1): number {
        return Math.floor(Math.random() * max);
    };
}
