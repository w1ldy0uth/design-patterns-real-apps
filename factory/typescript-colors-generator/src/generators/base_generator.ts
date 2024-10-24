import {Color} from "../colors/base_color";

export abstract class ColorGenerator {
    abstract generate(): Color;

    getRandomInt(max: number = 1): number {
        return Math.floor(Math.random() * (1 + Math.random()) * 0x10000);
    };
}
