import { useQuery } from "react-query";
import { getDetailAbilityAPI } from "services/api";
import { DetailAbility, Loading } from "components";

const Ability = ({ ability }) => {
  const { data, isLoading, isError } =
    useQuery(`ability/${ability}`, () => getDetailAbilityAPI(ability));

  if (isLoading) return <Loading />;
  if (isError) return <span>something wrong...</span>;

  return <DetailAbility data={data} />;
};

export default Ability;