import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Pages } from './pages/Pages';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { api } from './api/api';

const App: React.FC = () => {
  const [cookies] = useCookies(['csrftoken']);

  useEffect(() => {
    if (!cookies.csrftoken) {
      api.post('login/', { username: 'adminadmin', password: 'admin' }).catch(console.error);
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
          <Pages />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
