import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppProvider } from 'hooks';
import { Home } from 'pages/Home';
import { Pokedex } from 'pages/Pokedex';
import { Pokemon } from 'pages/Pokemon';

import './styles/main.css';
import './styles/colors.css';

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
