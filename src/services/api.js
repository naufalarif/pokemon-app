import useSWR from "swr";
import axios from "axios";
import config from '../config';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Api = axios.create({
  baseURL: config.apiURL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

export const getTypePokemonAPI = async (limit = 10) => {
  try {
    const response = await Api.get(`/type?limit=${limit}&offset=0`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllPokemonAPI = async (endpoint = '/pokemon?limit=20&offset=0') => {
  try {
    const response = await Api.get(endpoint);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getDetailPokemonAPI = async (name) => {
  try {
    const response = await Api.get(`/pokemon/${name}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getPokemonByTypeAPI = async (type) => {
  try {
    const response = await Api.get(`/type/${type}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getDetailAbilityAPI = async (ability) => {
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

export function getHistoryGacha(name) {
  const { data, error } = useSWR(`${config.apiURL}/pokemon/${name}`, fetcher);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}