import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppProvider } from 'hooks';
import { Routes } from 'routes';
import { GlobalStyles } from 'styles/global';
import { theme } from 'styles/theme/default';

function App(): JSX.Element {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </ThemeProvider>

      <GlobalStyles />
    </Router>
  );
}

export default App;
