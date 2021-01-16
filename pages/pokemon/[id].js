import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getDetailPokemon } from '../../services/api';

export default function DetailPokemon() {
  const router = useRouter();
  const { pid } = router.query;
  const { data, isLoading, isError } = getDetailPokemon(pid);

  if (isLoading) return <div><span>Loading...</span></div>
  if (isError) return <div><span>Something wrong</span></div>

  return (
    <div>
      <span>detail</span>
    </div>
  )
}