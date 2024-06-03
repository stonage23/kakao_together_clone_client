import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GolobalStyles from 'GlobalStyles';
import Theme from 'styles/Theme';
import { LoginStateProvider } from 'contexts/LoginContext';

function App() {
  return (
    <BrowserRouter>
      <GolobalStyles />
      <LoginStateProvider>
        <ThemeProvider theme={Theme}>
          {/* <MainPage /> */}
          <Router />
        </ThemeProvider>
      </LoginStateProvider>
    </BrowserRouter>
  );
}

export default App;
