import useSWR from "swr";
import config from '../config';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function getAbilityCategory(url) {
  const { data, error } = useSWR(`${url}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function getDetailAbility(url) {
  const { data, error } = useSWR(`${url}`, fetcher);

  return {
    dataAbility: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function getDetailTypes(url) {
  const { data, error } = useSWR(`${url}`, fetcher);

  return {
    dataTypes: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function getPokemonList(url) {
  const { data, error } = useSWR(`${url}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function getDetailPokemon(url) {
  const urlCheck = url ? url.includes('https') ? url : `${config.apiURL}/pokemon/${url}` : null;
  const { data, error } = useSWR(`${urlCheck}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export async function getAllPokemon() {
  const res = await fetch(`${config.apiURL}/pokemon?limit=1118&offset=0`);
  const data = await res.json();

  return data.results.map(pokemon => ({
    params: { name: pokemon.name }
  }));
}

export async function getPokemonByName(name) {
  const res = await fetch(`${config.apiURL}/pokemon/${name}`);
  const data = await res.json();

  return data;
}

export function getSpeciesPokemon(url) {
  const { data, error } = useSWR(`${url}`, fetcher);
  return {
    dataSpecies: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function getEvolutionList(url) {
  const { data, error } = useSWR(`${url}`, fetcher);
  return {
    dataEvolve: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function getEvolutionPokemon(name) {
  const { data, error } = useSWR(`${config.apiURL}/pokemon/${name}`, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function getHistoryGacha(name) {
  const { data, error } = useSWR(`${config.apiURL}/pokemon/${name}`, fetcher);

  return { 
    data: data,
    isLoading: !data && !error,
    isError: error, 
  }
}

export function getPokemonById(id) {
  const { data, error } = useSWR(`${config.apiURL}/pokemon/${id}`, fetcher);
  return {
    data: data,
    isLoading: !data && !error,
    isError: error
  }
}

export function searchPokemonByName(name) {
  const { data, error } = useSWR(`${config.apiURL}/pokemon/${name}`, fetcher);
  return {
    data: data,
    isLoading: !data && !error,
    isError: error
  }
}