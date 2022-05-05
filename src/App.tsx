import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Content } from './pages/PageWrapper';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { api } from './api/useApi';

const App: React.FC = () => {
  const [cookies] = useCookies(['csrftoken']);

  useEffect(() => {
    if (!cookies.csrftoken) {
      api.post('login/', { username: 'admin', password: 'admin' }).catch(console.error);
    } else {
      api.defaults.headers.post['X-CSRFToken'] = cookies.csrftoken;
      api.defaults.headers.put['X-CSRFToken'] = cookies.csrftoken;
      api.defaults.headers.delete['X-CSRFToken'] = cookies.csrftoken;
    }
  }, [cookies]);

  if (cookies.csrftoken) {
    api.defaults.headers.post['X-CSRFToken'] = cookies.csrftoken;
    api.defaults.headers.put['X-CSRFToken'] = cookies.csrftoken;
    api.defaults.headers.delete['X-CSRFToken'] = cookies.csrftoken;
  }

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Content />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
