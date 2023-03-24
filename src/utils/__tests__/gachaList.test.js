import { gachaList } from "utils";

describe('gacha list utils', () => {
  it('should return gacha list based on day', () => {
    expect(gachaList().length).toBe(30);
  });
});