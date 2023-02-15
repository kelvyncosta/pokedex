import { Header } from 'components/Header';
import { HomeOption } from 'components/HomeOption';
import { Pokeball } from 'components/Pokeball';

export function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden py-0 px-6">
      <Header />

      <main className="relative w-full max-w-3xl my-0 mx-auto h-full flex flex-col gap-12 z-50">
        <HomeOption to="/pokedex" title="Pokédex" buttonText="Try Pokédex">
          The pokédex is a RESTful API interface to highly detailed objects
          built from thousands of lines of data related to Pokémon.
        </HomeOption>

        <HomeOption
          to="/whos-that-pokemon"
          title="Who's that Pokémon?"
          buttonText="Start Game"
        >
          <span className="italic">Who&apos;s that Pokémon?</span> is a game
          base on result of Pokémon API. You object is dicover who is the hidden
          Pokémon.
        </HomeOption>
      </main>

      <div className="fixed top-0 left-0 w-full h-full bg-blue-500 z-10">
        <div className="absolute -top-56 left-56 rounded-full h-[1600px] w-[600px] rotate-45 bg-yellow-500">
          &nbsp;
        </div>

        <Pokeball
          className="absolute -right-24 -bottom-32 -rotate-[35deg]"
          size="500px"
        />
      </div>
    </div>
  );
}
