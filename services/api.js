import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function getPokemonList(url) {
  const { data, error } = useSWR(`${url}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function getDetailPokemon(url) {
  const urlCheck = url ? url.includes('https') ? url : `https://pokeapi.co/api/v2/pokemon/${url}` : null;
  const { data, error } = useSWR(`${urlCheck}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}
