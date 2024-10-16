import React from 'react';
import { Box, ThemeProvider, CssBaseline, Typography } from '@mui/material'
import { myTheme } from './theme/myTheme';
import { useTranslation } from 'react-i18next';
import './config/i18n/i18n'
import background from './resources/images/background.jpg';
import { SearchInput } from './components/SearchInput/searchInput';
import { Image } from 'mui-image';
import { BusinessGrid } from './components/BusinessesGrid/businessesGrid';

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
        <Image src={background} height="530px" width="100%" />
        <Box sx={styles.mainSearchBox}>
          <Typography variant="h3" color="white" mb={5} fontFamily={"Helvetica Neue"} fontWeight={700}>
            {t("main.title")}
          </Typography>
          <SearchInput />
        </Box>
        <BusinessGrid term="cocktails" location="Barcelona" />

      </Box>
    </ThemeProvider>
  );
}

export default App;
