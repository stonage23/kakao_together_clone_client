import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GolobalStyles from 'GlobalStyles';
import Theme from 'styles/Theme';

function App() {
  return (
    <BrowserRouter>
      <GolobalStyles />
      <ThemeProvider theme={Theme}>
        {/* <MainPage /> */}
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
