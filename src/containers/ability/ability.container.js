import { DetailAbility, Loading } from "components";
import useGetAbilityPokemon from "hooks/useGetAbilityPokemon";

const Ability = ({ name }) => {
  const { ability, isLoading, isError } = useGetAbilityPokemon(`ability/${name}`, name);

  if (isLoading) return <Loading />;
  if (isError) return <span>something wrong...</span>;

  return <DetailAbility data={ability} />;
};

export default Ability;