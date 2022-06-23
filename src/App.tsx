import React from 'react';

import { Provider } from 'react-redux';
import {
  Route,
  Routes,
} from 'react-router-dom';

import {
  Box,
  styled,
  ThemeProvider,
} from '@mui/material/index';

import { theme } from './assets/theme';
import Search from './components/search-bar';
import Table from './components/table/table';
import store from './store/store';

const ContainerWraper = styled(Box)({
  padding: '23px 78px',

  [theme.breakpoints.down('md')]: {
    padding: '10px 30px',

  },
});

function App() {
  return <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<ContainerWraper >
          <Search />
          <Table />
        </ContainerWraper>} />
        <Route path="/:id" element={<></>} />
      </Routes>
    </Provider >
  </ThemeProvider>
}

export default App;
