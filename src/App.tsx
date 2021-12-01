import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Content } from './pages/PageWrapper';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { Group } from './api/measurement/group/types';
import { getAllGroups } from './api/measurement/group/api';

const App: React.FC = () => {
  const [groupData, setGroupData] = useState<Group[]>();

  useEffect(() => {
    getAllGroups().then(res => {
      if (res.status !== 200) {
        // eslint-disable-next-line no-console
        console.error('Not fetched');
        return;
      }
      setGroupData(res.data);
    });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('RESPONSE: ', groupData);
  }, [groupData]);

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
