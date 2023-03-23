import get from "lodash/get";
import { useInfiniteQuery } from "react-query";
import { getAllPokemonAPI } from "services/api";

export const useGetAllPokemon = () => {
  const { data, isError, isLoading, isSuccess, fetchNextPage } = useInfiniteQuery(
    [ 'pokemon' ],
    ({ pageParam }) => getAllPokemonAPI(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next ? lastPage.next : undefined,
      keepPreviousData: true,
    },
  );

  const pages = get(data, 'pages', []);
  let pokemons = [];
  pages.forEach((item) => {
    pokemons = [ ...pokemons, ...item.results ];
  });

  return {
    pokemons,
    pages: get(data, 'pages', []),
    totalPages: get(data, 'pages', []).length - 1,
    total: get(data, 'pages[0].count', 0),
    isError,
    isLoading,
    fetchNextPage,
    isSuccess,
  };
};