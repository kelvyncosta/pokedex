import { useState } from 'react';
import { usePokemon } from '../../hooks/pokemon';
import { About } from './About';
import { BaseStats } from './BaseStats';
import { Component, TabItem } from './styles';

function Tabs(): JSX.Element {
  const { selectedPokemon: pokemon } = usePokemon();

  const [activeTab, setActiveTab] = useState(1);

  return (
    <Component>
      <div className="tabs">
        <TabItem
          type={pokemon.types[0]}
          active={activeTab === 1}
          onClick={() => setActiveTab(1)}
        >
          About
        </TabItem>
        <TabItem
          type={pokemon.types[0]}
          active={activeTab === 2}
          onClick={() => setActiveTab(2)}
        >
          Base Stats
        </TabItem>
      </div>

      {activeTab === 1 && <About />}
      {activeTab === 2 && <BaseStats type={pokemon.types[0]} />}
    </Component>
  );
}

export { Tabs };
