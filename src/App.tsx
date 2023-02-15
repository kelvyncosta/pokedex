import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppProvider } from 'hooks';
import { ToastContainer } from 'components/ToastContainer';
import { Home } from 'pages/Home';
import { Pokedex } from 'pages/Pokedex';
import { Pokemon } from 'pages/Pokemon';
import { WhosThatPokemon } from 'pages/WhosThatPokemon';

import './styles/main.css';
import './styles/colors.css';

import 'react-toastify/dist/ReactToastify.min.css';

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/whos-that-pokemon" element={<WhosThatPokemon />} />
        </Routes>

        <ToastContainer />
      </AppProvider>
    </BrowserRouter>
  );
}
