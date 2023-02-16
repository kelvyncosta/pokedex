import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'components/ToastContainer';
import { AppProvider } from 'hooks';
import { Routes } from 'routes';

import './styles/main.css';
import './styles/colors.css';

import 'react-toastify/dist/ReactToastify.min.css';

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />

        <ToastContainer />
      </AppProvider>
    </BrowserRouter>
  );
}
