import { BasePage } from 'components/BasePage';
import { Card } from 'components/Card';
import { Loader } from 'components/Loader';
import { usePokemon } from 'hooks/pokemon';
import { PokemonGeneration } from 'components/PokemonGeneration';
import { PokemonSearcher } from 'components/PokemonSearcher';

export function Pokedex() {
  const { currentPokemons } = usePokemon();

  return (
    <BasePage>
      <div className="w-full flex justify-around items-end">
        <PokemonGeneration />

        <PokemonSearcher />
      </div>

      <section className="h-full w-full flex justify-center items-center flex-wrap gap-12 py-24 px-0">
        {currentPokemons ? (
          currentPokemons.map(pokemon => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <Loader />
        )}
      </section>
    </BasePage>
  );
}
