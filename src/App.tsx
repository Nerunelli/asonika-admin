import { ThemeProvider } from 'styled-components';
import { Content } from './pages';
import { theme } from './theme';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Content />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
