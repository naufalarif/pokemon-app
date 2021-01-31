import { getDetailTypes } from "../services/api";
import { firstUpperCase, removeSymbol } from "../utils/textFormat";
import { extractTypes } from "../utils/pokemonTypes";

export default function DetailTypes({ url }) {
  const { dataTypes, isLoading, isError } = getDetailTypes(url);

  if (isLoading) return <span>Loading</span>
  if (isError) return <span>Something wrong...</span>

  const typesName = firstUpperCase(removeSymbol(dataTypes.name));
  const typeCheck = extractTypes(dataTypes.name);
  const doubleDamageFrom = 
    dataTypes.damage_relations.double_damage_from.length > 0 
      ? <div className="bg-white rounded-xl p-3 my-4">
          <div className="border-b-2 mb-4 py-3 px-4">
            <h4 className="mb-2 text-sm lg:text-lg xl:text-xl font-extrabold text-gray-500">
              2x Damage From
            </h4>
          </div>
          <div className="flex grid 
            grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4
            gap-4 pb-2 mb-1 w-4/5
          ">
            {dataTypes.damage_relations.double_damage_from.map((item, idx) => {
              const typeCheck = extractTypes(item.name);
              return <div key={idx} className={`${typeCheck} px-3 py-2 rounded-3xl font-bold text-center`}>
                <span className="sm:text-sm lg:text-xl xl:text-2xl font-extrabold">{firstUpperCase(item.name)}</span>
              </div>})}
          </div>
        </div>
      : null

  const halfDamageFrom = 
    dataTypes.damage_relations.half_damage_from.length > 0 
      ? <div className="bg-white rounded-xl p-3 my-4">
          <div className="border-b-2 mb-4 py-3 px-4">
            <h4 className="mb-2 text-sm md:text-lg lg:text-xl font-extrabold text-gray-500">1/2 Damage From</h4>
          </div>
          <div className="flex grid 
            grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4
            gap-4 pb-2 mb-1 w-4/5
          ">
            {dataTypes.damage_relations.half_damage_from.map((item, idx) => {
              const typeCheck = extractTypes(item.name);
              return <div key={idx} className={`${typeCheck} px-3 py-2 rounded-3xl font-bold text-center`}>
                <span className="sm:text-sm lg:text-xl xl:text-2xl font-extrabold">{firstUpperCase(item.name)}</span>
              </div>})}
          </div>
        </div>
      : null
  
  const doubleDamageTo = 
    dataTypes.damage_relations.double_damage_to.length > 0 
      ? <div className="bg-white rounded-xl p-3 my-4">
          <div className="border-b-2 mb-4 py-3 px-4">
            <h4 className="mb-2 text-sm md:text-lg lg:text-xl font-extrabold text-gray-500">2x Damage To</h4>
          </div>
          <div className="flex grid 
            grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4
            gap-4 pb-2 mb-1 w-4/5
          ">
            {dataTypes.damage_relations.double_damage_to.map((item, idx) => {
              const typeCheck = extractTypes(item.name);
              return <div key={idx} className={`${typeCheck} px-3 py-2 rounded-3xl font-bold text-center`}>
                <span className="sm:text-sm lg:text-xl xl:text-2xl font-extrabold">{firstUpperCase(item.name)}</span>
              </div>})}
          </div>
        </div>
      : null
  
  const halfDamageTo = 
    dataTypes.damage_relations.half_damage_to.length > 0 
      ? <div className="bg-white rounded-xl p-3 my-4">
          <div className="border-b-2 mb-4 py-3 px-4">
            <h4 className="mb-2 text-sm md:text-lg lg:text-xl font-extrabold text-gray-500">1/2 Damage To</h4>
          </div>
          <div className="flex grid 
            grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4
            gap-4 pb-2 mb-1 w-4/5
          ">
            {dataTypes.damage_relations.half_damage_to.map((item, idx) => {
              const typeCheck = extractTypes(item.name);
              return <div key={idx} className={`${typeCheck} px-3 py-2 rounded-3xl font-bold text-center`}>
                <span className="sm:text-sm lg:text-xl xl:text-2xl font-extrabold">{firstUpperCase(item.name)}</span>
              </div>})}
          </div>
        </div>
      : null

  return (
    <div className="mb-9">
      <div className="my-4">
        <span className={`${typeCheck} px-3 py-1 rounded-xl text-2xl font-bold`}>{typesName} - Effect</span>
        <span className="text-2xl font-bold"></span>
      </div>
      {doubleDamageFrom}
      {doubleDamageTo}
      {halfDamageFrom}
      {halfDamageTo}
    </div>
  )
}