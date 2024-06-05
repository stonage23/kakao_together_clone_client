import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GolobalStyles from 'GlobalStyles';
import Theme from 'styles/Theme';
import { UserProvider } from 'contexts/UserContext';
import { LocationProvider } from 'contexts/LocationContext';

function App() {
  return (
    <BrowserRouter>
      <GolobalStyles />
      <LocationProvider>
        <UserProvider>
          <ThemeProvider theme={Theme}>
            {/* <MainPage /> */}
            <Router />
          </ThemeProvider>
        </UserProvider>
      </LocationProvider>
    </BrowserRouter>
  );
}

export default App;
