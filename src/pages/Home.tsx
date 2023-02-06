import { Header } from 'components/Header';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden py-0 px-6">
      <Header />

      <main className="w-full max-w-3xl my-0 mx-auto h-full flex flex-col gap-12">
        <section className="home__section">
          <h2>Pokédex</h2>
          <p>
            The pokédex is a RESTful API interface to highly detailed objects
            built from thousands of lines of data related to Pokémon.
          </p>
          <Link to="/pokedex">Try Pokédex</Link>
        </section>

        <section className="home__section">
          <h2>Who&apos;s that Pokémon?</h2>
          <p>
            The pokédex is a RESTful API interface to highly detailed objects
            built from thousands of lines of data related to Pokémon.
          </p>
          <Link to="/whos-that-pokemon">Start Game</Link>
        </section>
      </main>
    </div>
  );
}
