import { getAllPokemonAPI, getTypePokemonAPI, getPokemonByTypeAPI } from "services/api";
import { mockPokemonTypes, mockPokemon, mockTypes } from "../../../__mocks__/apiMock";

jest.mock("../api");

describe('api tests', () => {
  it('should return pokemon list by default', async () => {
    getAllPokemonAPI.mockResolvedValue(mockPokemon);
    
    const pokemon = await getAllPokemonAPI();
    expect(pokemon).toEqual(mockPokemon);
  });

  it('should return type list', async () => {
    getTypePokemonAPI.mockResolvedValue(mockPokemonTypes);

    const pokemonTypes = await getTypePokemonAPI(10);
    expect(pokemonTypes).toEqual(mockPokemonTypes);
  });

  it('should return types', async () => {
    getPokemonByTypeAPI.mockResolvedValue(mockTypes);

    const pokemonByType = await getPokemonByTypeAPI("poison");
    expect(pokemonByType).toEqual(mockTypes);
  });
});