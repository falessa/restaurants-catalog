import React from 'react';
import { Box, ThemeProvider } from '@mui/material'
import { myTheme } from './theme/myTheme';
import { useTranslation } from 'react-i18next';
import './config/i18n/i18n'

function Search() {
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
        <Box>
            This is the search page!
        </Box>
    </ThemeProvider>
  );
}

export default Search;
