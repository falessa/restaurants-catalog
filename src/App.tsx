import React from 'react';
import { Box, ThemeProvider, CssBaseline } from '@mui/material'
import { myTheme } from './theme/myTheme';
import { useTranslation } from 'react-i18next';
import './config/i18n/i18n'
import { Header } from './components/Header/header';
import background from './resources/images/background.jpg';
import { Image } from 'mui-image';


function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Box
        // sx={{
        //   background: `url(${background})`,
        //   height: '600px',
        // }}
      > 
        <Header />
        <Image src={background} height="530px" width="100%" />
      </Box>
    </ThemeProvider>
  );
}

export default App;
