import {ColorGeneratorFactory} from "./src/factory";

const hexColorGenerator = ColorGeneratorFactory.getGenerator('HEX');
console.log(hexColorGenerator.generate(true).getColor());

const rgbColorGenerator = ColorGeneratorFactory.getGenerator('RGB');
console.log(rgbColorGenerator.generate().getColor());

const hslColorGenerator = ColorGeneratorFactory.getGenerator('HSL');
console.log(hslColorGenerator.generate(true).getColor());
