import { CardEvolutionContainer } from "containers";
import isEmpty from "lodash/isEmpty";

const ListEvolution = ({ data }) => {
  // Store Evolution
  const arrEvolve = [];
  const chainning = data.chain;

  // Current
  const chain = chainning.species.name;
  arrEvolve.push(chain);

  // First Evolve
  const firstChain = chainning.evolves_to.map((item) => item);
  const first = firstChain.map((item) => item.species.name);
  const firstEvolve = chainning.evolves_to.length > 0
    ? arrEvolve.push(first.join()) : null;
  
  // Second Evolve
  const secondChain = firstChain.map((item) => item.evolves_to);
  const chainMore = chainning.evolves_to.map((item) => item.evolves_to);
  const second = chainMore.map((item) => item.map((subitem) => subitem.species.name));
  const secondEvolve = secondChain.length > 0
    ? arrEvolve.push(second.join()) : null;

  // Display Evolution
  const displayPokemon = !isEmpty(arrEvolve)
    && arrEvolve.map((item) => !isEmpty(item) && <CardEvolutionContainer key={item} name={item} />);

  return displayPokemon;
};

export default ListEvolution;
