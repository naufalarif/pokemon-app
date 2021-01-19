import { useRouter } from 'next/router';
import { getDetailPokemon } from '../../services/api';
import Loading from '../../components/Loading';
import Layout from '../../components/Layout';

export default function DetailPokemon() {
  const router = useRouter();
  const { pid } = router.query;
  const { data, isLoading, isError } = getDetailPokemon(pid);

  if (isLoading) return <Loading />
  if (isError) return <div><span>Something wrong</span></div>

  const abilities = data.abilities.map((item, idx) => <span key={idx} className="mx-2">{item.ability.name}</span>)
  const types = data.types.map((item, idx) => <span key={idx} className="mx-2">{item.type.name}</span>)
  const stats = data.stats.map((item, idx) => <p key={idx} className="mx-2">{item.stat.name}: {item.base_stat}</p>)

  return (
    <Layout active="pokedex">
      <main className="py-4 px-7">
        <p>{data.name} - #{data.order}</p>
        <div>{abilities}</div>
        <div>{types}</div>
        <span>Weight: {data.weight}</span><br/>
        <span>Base Exp: {data.base_experience}</span>
        <div>{stats}</div>
        <div className="flex flex-row">
          <img 
            src={data.sprites.other['official-artwork'].front_default}
            width="100px"
            height="100px"
            alt="pokemon"
          />
          <img 
            src={data.sprites.other.dream_world.front_default}
            width="100px"
            height="100px"
            alt="pokemon"
          />
        </div>
        <div className="flex flex-row">
          <img 
            src={data.sprites.back_default}
            width="100px"
            height="100px"
            alt="pokemon"
          />
          <img 
            src={data.sprites.front_default}
            width="100px"
            height="100px"
            alt="pokemon"
          />
          <img 
            src={data.sprites.front_shiny}
            width="100px"
            height="100px"
            alt="pokemon"
          />
          <img 
            src={data.sprites.back_shiny}
            width="100px"
            height="100px"
            alt="pokemon"
          />
        </div>
      </main>
    </Layout>
  )
}