import { atom, selector } from 'recoil';

const nameAbilityAtom = atom({
  key: 'nameAbilityAtom',
  default: 'https://pokeapi.co/api/v2/ability/1/'
});

const abilitySelector = selector({
  key: 'abilitySelector',
  get: async ({ get }) => {
    const url = get(nameAbilityAtom);
    try {
      const res = await fetch(`${url}`);
      const data = await res.json();
      return data;
    } catch (err) {
      return err.massage;
    }
  }
});

export { nameAbilityAtom, abilitySelector };