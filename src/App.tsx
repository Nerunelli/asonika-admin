import { ThemeProvider } from 'styled-components';
import { Content } from './pages';
import { theme } from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Content />
      </ThemeProvider>
    </>
  );
}

export default App;
