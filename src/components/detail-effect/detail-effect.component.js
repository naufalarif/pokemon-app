import isEmpty from "lodash/isEmpty";
import { firstUpperCase, extractTypes } from "utils";

export default function DetailEffect({ data }) {
  const payload = !isEmpty(data) ? data : {};

  const typesName = firstUpperCase(data.name);
  const typeStyle = extractTypes(data.name);

  const doubleDamageFrom =
    !isEmpty(payload) &&
      <div className="bg-white rounded-xl p-3 my-4">
        <div className="border-b-2 mb-4 py-3 px-4">
          <h4 className="mb-2 text-sm md:text-lg lg:text-xl font-extrabold text-gray-500">
            Double Damage From
          </h4>
        </div>
        <div className="flex grid
          grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4
          gap-4 pb-2 mb-1 w-4/5
        ">
          {data.damage_relations.double_damage_from.map((item) => {
            const type = extractTypes(item.name);
            return <div className={`${type} px-3 py-2 rounded-3xl font-bold text-center`}>
              <span className="sm:text-sm lg:text-xl xl:text-2xl font-extrabold">
                {firstUpperCase(item.name)}
              </span>
            </div>;
          })}
        </div>
      </div>;

  const doubleDamageTo =
    !isEmpty(payload) &&
      <div className="bg-white rounded-xl p-3 my-4">
        <div className="border-b-2 mb-4 py-3 px-4">
          <h4 className="mb-2 text-sm md:text-lg lg:text-xl font-extrabold text-gray-500">
            Double Damage To
          </h4>
        </div>
        <div className="flex grid
          grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4
          gap-4 pb-2 mb-1 w-4/5
        ">
          {data.damage_relations.double_damage_to.map((item) => {
            const type = extractTypes(item.name);
            return <div className={`${type} px-3 py-2 rounded-3xl font-bold text-center`}>
              <span className="sm:text-sm lg:text-xl xl:text-2xl font-extrabold">
                {firstUpperCase(item.name)}
              </span>
            </div>;
          })}
        </div>
      </div>;

  const halfDamageFrom =
    !isEmpty(payload) &&
      <div className="bg-white rounded-xl p-3 my-4">
        <div className="border-b-2 mb-4 py-3 px-4">
          <h4 className="mb-2 text-sm md:text-lg lg:text-xl font-extrabold text-gray-500">
            Half Damage From
          </h4>
        </div>
        <div className="flex grid
          grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4
          gap-4 pb-2 mb-1 w-4/5
        ">
          {data.damage_relations.half_damage_from.map((item) => {
            const type = extractTypes(item.name);
            return <div className={`${type} px-3 py-2 rounded-3xl font-bold text-center`}>
              <span className="sm:text-sm lg:text-xl xl:text-2xl font-extrabold">
                {firstUpperCase(item.name)}
              </span>
            </div>;
          })}
          </div>
        </div>;
  
  
  const halfDamageTo =
    !isEmpty(payload) &&
      <div className="bg-white rounded-xl p-3 my-4">
        <div className="border-b-2 mb-4 py-3 px-4">
          <h4 className="mb-2 text-sm md:text-lg lg:text-xl font-extrabold text-gray-500">
            Half Damage To
          </h4>
        </div>
        <div className="flex grid
          grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4
          gap-4 pb-2 mb-1 w-4/5
        ">
          {data.damage_relations.half_damage_to.map((item) => {
            const type = extractTypes(item.name);
            return <div className={`${type} px-3 py-2 rounded-3xl font-bold text-center`}>
              <span className="sm:text-sm lg:text-xl xl:text-2xl font-extrabold">
                {firstUpperCase(item.name)}
              </span>
            </div>;
          })}
        </div>
      </div>;

  return (
    <div className="mb-9">
      <div className="my-4">
        <span className={`${typeStyle} px-3 py-1 rounded-xl text-2xl font-bold`}>
          {typesName} - Effect
        </span>
      </div>
      {doubleDamageFrom}
      {doubleDamageTo}
      {halfDamageFrom}
      {halfDamageTo}
    </div>
  );
}