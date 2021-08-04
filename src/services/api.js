import useSWR from "swr";
import config from 'config';
import axios from "axios";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Api = axios.create({
  baseURL: config.apiURL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

export const getTypePokemon = async (limit) => {
  try {
    const response = await Api.get(`/type?limit=${limit}&offset=0`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllPokemon = async (limit) => {
  try {
    const response = await Api.get(`/pokemon?limit=${limit}&offset=0`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getDetailPokemon = async (name) => {
  try {
    const response = await Api.get(`/pokemon/${name}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getSearchPokemon = async (name) => {
  try {
    const response = await Api.get(`/pokemon/${name}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getPokemonByCategories = async (type) => {
  try {
    const response = await Api.get(`/type/${type}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getDetailAbility = async (ability) => {
  try {
    const response = await Api.get(`/ability/${ability}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getSpeciesAPI = async (name) => {
  try {
    const response = await Api.get(`/pokemon-species/${name}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getEvolutionAPI = async (url) => {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

// REFACTOR

export function getAbilityCategory(url) {
  const { data, error } = useSWR(`${url}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function getDetailTypes(url) {
  const { data, error } = useSWR(`${url}`, fetcher);

  return {
    dataTypes: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function getPokemonList(url) {
  const { data, error } = useSWR(`${url}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
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
    isError: error,
  };
}

export function getEvolutionList(url) {
  const { data, error } = useSWR(`${url}`, fetcher);
  return {
    dataEvolve: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function getEvolutionPokemon(name) {
  const { data, error } = useSWR(`${config.apiURL}/pokemon/${name}`, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function getHistoryGacha(name) {
  const { data, error } = useSWR(`${config.apiURL}/pokemon/${name}`, fetcher);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}

export function getPokemonById(id) {
  const { data, error } = useSWR(`${config.apiURL}/pokemon/${id}`, fetcher);
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}

export function searchPokemonByName(name) {
  const { data, error } = useSWR(`${config.apiURL}/pokemon/${name}`, fetcher);
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}