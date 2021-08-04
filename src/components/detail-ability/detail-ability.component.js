import isEmpty from "lodash/isEmpty";
import { removeSymbol } from "utils";

export default function DetailAbility({ data }) {
  const payload = !isEmpty(data) ? data : {};

  const filterLang = !isEmpty(payload.effect_entries)
    ? payload.effect_entries.filter((item) => item.language.name === 'en')
    : [];
  const storeEffect = { ...filterLang };
  const nameAbility = !isEmpty(payload) ? removeSymbol(payload.name) : '';
  const effectDetail = filterLang.length > 0 ? storeEffect[0].effect : 'No Effect';

  return (
    <div className="mb-6">
      <h4 className="text-2xl font-bold capitalize mb-2">{nameAbility}</h4>
      <span className="text-gray-400">{effectDetail}</span>
    </div>
  );
}