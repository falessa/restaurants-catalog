import React from 'react';
import { Box, ThemeProvider, CssBaseline, Typography } from '@mui/material'
import { myTheme } from './theme/myTheme';
import { useTranslation } from 'react-i18next';
import './config/i18n/i18n'
import { Header } from './components/Header/header';
import { SearchInput } from './components/SearchInput/searchInput';
import background from './resources/images/background.jpg';
import { Image } from 'mui-image';


function App() {
  const { t } = useTranslation();

  const styles = {
    mainSearchBox: {
      position: 'absolute',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      width: '100%'
    }
  }
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Box> 
        <Header />
        <Image src={background} height="530px" width="100%" />
        <Box sx={styles.mainSearchBox}>
          <Typography variant="h3" color="white" mb={5} fontFamily={"Helvetica Neue"} fontWeight={700}>
            {t("main.title")}
          </Typography>
          <SearchInput />
        </Box>

      </Box>
    </ThemeProvider>
  );
}

export default App;
