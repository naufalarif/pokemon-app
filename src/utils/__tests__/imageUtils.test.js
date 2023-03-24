import { imageConvert } from "utils";

describe('Image Utils', () => {
  test('Should be able convert image if image is not available', () => {
    expect(imageConvert()).toBe('/imgs/mystery.png');
  });
  
  test('Should be able to return current image', () => {
    const src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg";
    expect(imageConvert(src)).toBe(src);
  });
});