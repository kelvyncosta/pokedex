import { FiArrowLeft } from 'react-icons/fi';
import { usePokemon } from '../../hooks/pokemon';
import { formatPokemonId } from '../../shared/utils/formatPokemonId';
import { Badge } from '../Badge';
import { Tabs } from '../Tabs';
import {
  Component,
  ImageContainer,
  ModalContent,
  ModalHeader,
  Overlay,
} from './styles';

interface IModalProps {
  active: boolean;
}

function Modal({ active }: IModalProps): JSX.Element {
  const { selectedPokemon: pokemon, clearSelectedPokemon } = usePokemon();

  return (
    <>
      <Component active={active} type={pokemon.types[0]}>
        <ModalHeader>
          <FiArrowLeft onClick={() => clearSelectedPokemon()} />

          <p>{formatPokemonId(pokemon.id)}</p>
        </ModalHeader>

        <ModalContent>
          <h1>{pokemon.name}</h1>
          <div className="badges">
            {pokemon.types.map(type => (
              <div key={type}>
                <Badge type={type} />
              </div>
            ))}
          </div>

          <ImageContainer className="img-container">
            <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
          </ImageContainer>
        </ModalContent>

        <Tabs />
      </Component>
      <Overlay active={active} onClick={() => clearSelectedPokemon()} />
    </>
  );
}

export { Modal };
