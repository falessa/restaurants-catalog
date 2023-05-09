import React from 'react';
// import logo from './logo.svg';
import { ThemeProvider, CssBaseline } from '@mui/material'
import { myTheme } from './theme/myTheme';
// import './App.css';
import { useTranslation } from 'react-i18next';
import './config/i18n/i18n'
import { Header } from './components/Header/header';

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
          <Header />
    </ThemeProvider>
  );
}

export default App;
