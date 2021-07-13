import { getDetailAbility } from "../../services/api";
import { removeSymbol } from "utils";

export default function DetailAbility({ url }) {
  const { dataAbility, isLoading, isError } = getDetailAbility(url);

  if (isLoading) return <span>Loading</span>
  if (isError) return <span>Something wrong...</span>

  const filterLang = dataAbility.effect_entries.length > 0 
    ? dataAbility.effect_entries.filter(item => item.language.name === 'en')
    : [];
  const storeEffect = Object.assign({}, filterLang);
  const nameAbility = removeSymbol(dataAbility.name);
  const effectDetail = filterLang.length > 0 ? storeEffect[0].effect : 'No Effect';

  return (
    <div className="mb-6">
      <h4 className="text-2xl font-bold capitalize mb-2">{nameAbility}</h4>
      <span className="text-gray-400">{effectDetail}</span>
    </div>
  )
}