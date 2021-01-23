import { getDetailAbility } from "../services/api";
import { firstUpperCase, removeSymbol } from "../utils/textFormat";

export default function DetailAbility({ url }) {
  const { dataAbility, isLoading, isError } = getDetailAbility(url);

  if (isLoading) return <span>Loading</span>
  if (isError) return <span>Something wrong...</span>

  const filterLang = dataAbility.effect_entries.filter(item => item.language.name === 'en');
  const effectDetail = Object.assign({}, filterLang);
  const nameAbility = firstUpperCase(removeSymbol(dataAbility.name));
  return (
    <div className="mb-6">
      <h4 className="text-2xl font-bold mb-2">{nameAbility}</h4>
      <span className="text-gray-400">{effectDetail[0].effect}</span>
    </div>
  )
}